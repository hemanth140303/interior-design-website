from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
from datetime import datetime
import os

class ContactFormHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/submit':
            # Read the content length
            content_length = int(self.headers['Content-Length'])
            # Read the POST data
            post_data = self.rfile.read(content_length)
            # Parse JSON data
            form_data = json.loads(post_data.decode('utf-8'))
            
            # Create a timestamp for the filename
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"submissions/contact_{timestamp}.json"
            
            # Save the form data to a file
            with open(filename, 'w') as f:
                json.dump(form_data, f, indent=4)
            
            # Send response
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'success'}).encode())
            return

        return SimpleHTTPRequestHandler.do_POST(self)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == '__main__':
    # Make sure submissions directory exists
    if not os.path.exists('submissions'):
        os.makedirs('submissions')
    
    # Start the server
    server_address = ('', 8001)  
    httpd = HTTPServer(server_address, ContactFormHandler)
    print('Server running on port 8001...')
    httpd.serve_forever()
