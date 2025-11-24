# WikipediaClone

## Educational Purpose

This project is created solely for educational purposes as a learning exercise in web development. It demonstrates the implementation of a simple search interface that connects to Wikipedia's API to retrieve and display article information.

**Disclaimer**: This is a student project built for learning purposes only. It is not affiliated with or endorsed by Wikipedia or the Wikimedia Foundation.

## About the Project

WikipediaClone is a minimalist web application that mimics the basic functionality and appearance of Wikipedia's homepage. The project showcases fundamental web development concepts including HTML structure, CSS styling, JavaScript DOM manipulation, and asynchronous API calls.

The interface features a clean, monochromatic design inspired by early web aesthetics, with a homepage layout containing informational sections and a functional search capability that queries Wikipedia articles in real-time.

## Features

- Real-time Wikipedia article search
- Monochromatic, classic web design
- Fully responsive layout for mobile and desktop devices
- Accessibility-friendly with ARIA labels
- Error handling and loading states
- Input validation to prevent empty searches
- Secure URL encoding for API requests

## Technologies Used

- HTML5
- CSS3 with responsive media queries
- Vanilla JavaScript (ES6+)
- Bootstrap 4.5.2 for UI components
- Wikipedia Search API (via ccbp.in proxy)

## Project Structure

```
wikipediaALT/
├── wikipediaClone.html    # Main HTML structure with homepage layout
├── wikipediaClone.css     # Styling and responsive design rules
├── wikipediaClone.js      # Search functionality and API integration
├── README.md              # Project documentation
└── LICENSE                # License information
```

## How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/vinayakawac/wikipediaALT.git
   cd wikipediaALT
   ```

2. Open the project:
   - Simply open `wikipediaClone.html` directly in your web browser
   - Or use a local development server such as Live Server in VS Code
   - Or run a simple Python HTTP server:
     ```bash
     python3 -m http.server 8000
     ```
     Then navigate to `http://localhost:8000/wikipediaClone.html`

## Usage

1. The homepage displays several sections: "From today's featured article", "In the news", "Did you know", and "On this day"
2. Enter a search term in the search box at the top
3. Press Enter or click the "Search" button
4. View search results displayed below with article titles, URLs, and descriptions
5. Click on any result to open the full Wikipedia article in a new tab

## Key Learning Objectives

- Understanding HTML semantic structure and accessibility
- CSS layout techniques including Grid and Flexbox
- JavaScript event handling and DOM manipulation
- Asynchronous programming with async/await
- Working with REST APIs and handling HTTP requests
- Error handling and user feedback mechanisms
- Responsive web design principles
- Cross-browser compatibility considerations

## Technical Implementation

- **HTML**: Semantic markup with proper accessibility attributes
- **CSS**: Grid-based two-column layout with responsive breakpoints
- **JavaScript**: Async/await pattern for API calls, event listeners for user interaction
- **API Integration**: Fetch API to retrieve Wikipedia search results
- **Error Handling**: Try-catch blocks for network errors and edge cases
- **Validation**: Input sanitization and URL encoding for security

## Browser Compatibility

Tested and working on:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)

## Learning Resources

This project was built while learning web development fundamentals. Key concepts explored include:
- Client-side JavaScript programming
- RESTful API consumption
- Responsive web design
- Modern CSS layout techniques
- Asynchronous JavaScript patterns

## License

This project is available under the MIT License. See LICENSE file for details.

## Author

vinayakawac

## Acknowledgments

- Wikipedia for providing the search API
- Bootstrap for UI components
- CCBP for API proxy service

---

Built for educational purposes and web development practice.