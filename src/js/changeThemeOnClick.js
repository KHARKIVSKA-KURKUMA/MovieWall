export function switcherThemeFunctionality() {
    const bodyEl = document.querySelector('body')
    const themeSwitcher = document.querySelectorAll('.change-theme');
    
    themeSwitcher.forEach(switcher => {
        switcher.addEventListener('click', function() {
            applyTheme();
            localStorage.setItem('theme', this.dataset.theme);
            
        });
    });

    function applyTheme() {
        bodyEl.classList.toggle(`dark-theme`)
    }

    let activeTheme = localStorage.getItem('theme');

    if(activeTheme === 'dark') {
        applyTheme();
    }
}
