let entries = []

// Helper Functions
const generateId = () => {
    return Date.now().toString();
}

// Core Functions


// Utility Functions

const toggleTheme = () => {
    const idDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', idDark ? 'dark' : 'light')
}

const applyTheme = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme')
    }
}

// Event Handlers

document.addEventListener('DOMContentLoaded', ()=>{
    applyTheme();
    document.getElementById('toggle-theme-button').addEventListener('click', toggleTheme);
})
