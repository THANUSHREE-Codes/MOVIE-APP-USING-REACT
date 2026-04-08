# MOVIE-APP-USING-REACT

## 🎬 Movie Explorer App

Welcome to the MOVIE-APP-USING-REACT repository! This project, developed as MILESTONE-2, is a web application built with React that allows users to discover movies, view detailed information, and manage a list of their favorite films. It provides a clean, responsive interface for a seamless movie browsing experience.

## ✨ Key Features & Benefits

*   **Movie Search**: Easily search for movies by title using the intuitive search bar.
*   **Detailed Movie Information**: Click on any movie to view comprehensive details including title, description, ratings, and more.
*   **Favorites Management**: Add movies to your personal favorites list and remove them whenever you want, making it easy to keep track of films you love.
*   **Responsive Design**: Enjoy a consistent experience across various devices and screen sizes.
*   **Efficient State Management**: Leverages React Context API for streamlined global state management, particularly for favorites and theme settings.
*   **Modern UI Components**: Utilizes `lucide-react` for crisp, scalable icons to enhance the user interface.

## 🛠️ Technologies Used
This project is built using a modern web development stack.

### Languages
*   JavaScript

### Frameworks
*   React

### Tools & Libraries
*   **Node.js**: JavaScript runtime environment.
*   **npm**: Node Package Manager for dependency management.
*   **Axios**: Promise-based HTTP client for making API requests.
*   **React Router DOM**: For declarative routing in the application.
*   **Lucide React**: Beautiful, consistent, and customizable icon library.
*   **Create React App**: The boilerplate for getting the React project started.


## 📚 Usage

Once the application is running, you can:

1.  **Navigate to the Home page**: The main page displays a collection of movies.
2.  **Search for movies**: Use the search bar in the `Navbar` to type in a movie title and find relevant results.
3.  **View Movie Details**: Click on any movie card to navigate to its dedicated details page, showing more information.
4.  **Manage Favorites**: From the movie details page, you can add or remove the movie from your favorites list. Access your full list of favorite movies via the "Favorites" link in the navigation bar.

## ⚙️ Project Structure

The project follows a standard Create React App structure with a clear organization for components, context, and pages.

```
MOVIE-APP-USING-REACT/
├── .gitignore             # Specifies intentionally untracked files to ignore
├── README.md              # Project documentation (this file)
├── package-lock.json      # Records the exact versions of dependencies
├── package.json           # Project metadata and dependencies
├── public/                # Static assets (index.html, favicon, manifest)
│   ├── favicon.ico
│   ├── index.html         # Main HTML file for the application
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src/                   # Source code
    ├── App.css            # Global application styles
    ├── App.js             # Main application component, handles routing and state
    ├── App.test.js        # Test file for the App component
    ├── components/        # Reusable UI components
    │   ├── MovieCard.js   # Component for displaying individual movie cards
    │   └── Navbar.js      # Navigation bar component
    └── context/           # React Context for global state management
        └── MovieContext.js # Provides movie-related state (e.g., favorites, theme)
    # Additional page components (e.g., Home, MovieDetails, Favorites) might be present here
```

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  **Fork** the repository.
2.  **Clone** your forked repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/MOVIE-APP-USING-REACT.git
    ```
3.  **Create a new branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```
4.  **Make your changes** and commit them with a clear message.
5.  **Push** your changes to your fork:
    ```bash
    git push origin feature/your-feature-name
    ```
6.  **Open a Pull Request** against the `main` branch of this repository.

