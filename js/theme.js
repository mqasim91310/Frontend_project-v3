// theme.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('js-theme-toggle');
    const body = document.body;

    // Function to apply the theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Load saved theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Default to light mode if no theme is saved
        applyTheme('light');
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});
