window.onload = function () {
    const body = document.body;
    const themeButton = document.getElementById('theme-toggle');

    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        body.className = savedTheme;
    }

    themeButton.onclick = function () {
        if (body.className === 'light-theme') {
            body.className = 'dark-theme';
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.className = 'light-theme';
            localStorage.setItem('theme', 'light-theme');
        }
    };
};
