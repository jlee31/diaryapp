let entries = []

// Helper Functions
const generateId = () => {
    return Date.now().toString();
}

// Core Functions

const openDialog = () => {
    console.log("openDialog")
}

const closeDialog = () => {
    console.log("close dialog")
}

const saveEntry = () => {
    console.log("add new diary entry")
}

const editEntry = () => {
    console.log("edit an entry")
}

const deleteEntry = () => {
    console.log("delete an entry")
}

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
