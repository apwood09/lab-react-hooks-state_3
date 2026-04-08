import React from 'react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    // dark mode toggle button 
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
