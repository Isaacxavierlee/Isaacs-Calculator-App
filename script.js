const themeButton = document.getElementById("changeThemeButton");
let currentTheme = 1;

themeButton.addEventListener("click", () => {
    currentTheme = (currentTheme % 3) + 1; // Cycle through 3 themes

    // Set the theme color variables based on the current theme
    if (currentTheme === 1) {
        document.documentElement.style.setProperty('--theme-color-1', '#3a4452');
        document.documentElement.style.setProperty('--theme-color-2', '#33ffd8');
        document.documentElement.style.setProperty('--theme-color-3', '#ff5733');
    } else if (currentTheme === 2) {
        document.documentElement.style.setProperty('--theme-color-1', '#4a3452');
        document.documentElement.style.setProperty('--theme-color-2', '#fabb33');
        document.documentElement.style.setProperty('--theme-color-3', '#32ff9c');
    } else if (currentTheme === 3) {
        document.documentElement.style.setProperty('--theme-color-1', '#324a52');
        document.documentElement.style.setProperty('--theme-color-2', '#ff9c32');
        document.documentElement.style.setProperty('--theme-color-3', '#3352ff');
    }
});
