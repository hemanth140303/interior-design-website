# Interior Design Website

A modern and responsive website for interior design services, featuring a beautiful UI and contact form functionality.

## Features

- Responsive design that works on desktop and mobile devices
- Modern and clean user interface
- Portfolio showcase with image gallery
- Contact form with data storage
- Smooth scrolling navigation
- Mobile-friendly hamburger menu

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # Frontend JavaScript
├── server.py          # Python server for contact form
├── submissions/       # Contact form submissions (gitignored)
└── images/           # Website images
    ├── bg.png
    ├── living.jpg
    ├── kitchen.webp
    └── bedroom.jpg
```

## Setup and Running

1. Clone the repository:
```bash
git clone [your-repo-url]
cd [repo-name]
```

2. Start the main website server (on port 8000):
```bash
python -m http.server 8000
```

3. Start the contact form server (on port 8001):
```bash
python server.py
```

4. Open your browser and visit:
```
http://localhost:8000
```

## Contact Form Submissions

Contact form submissions are stored as JSON files in the `submissions` folder with timestamps. Each file contains the submitted name, email, and message.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Python (for backend server)
- Font Awesome (for icons)
