document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const STORAGE_KEY = 'theme';
  
    // Load theme from storage
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme) {
      toggle.checked = storedTheme === 'dark';
      updateTheme(storedTheme);
    }
  
    toggle.addEventListener('change', function () {
      const theme = toggle.checked? 'dark' : 'light';
      localStorage.setItem(STORAGE_KEY, theme);
      updateTheme(theme);
    });
  
    function updateTheme(theme) {
      const images = theme === 'dark'? darkImages : lightImages;
      const randomImage = images[Math.floor(Math.random() * images.length)];
  
      document.body.style.backgroundImage = randomImage;
      updateTextColors(theme);
  
      // Update SVG fill color
      const svgElements = document.querySelectorAll('svg');
      svgElements.forEach(svg => {
        svg.style.fill = theme === 'dark'? '#d0d0d0' : '#1D1B1E';
      });
    }
  
    function updateTextColors(theme) {
      const colors = theme === 'dark'? darkColors : lightColors;
      Object.keys(colors).forEach(selector => {
        document.querySelector(selector).style.color = colors[selector];
      });
    }
  
    const darkImages = [
      'url("assets/svg/--bg--theme-dark1.svg")',
      'url("assets/svg/--bg--theme-dark2.svg")',
      'url("assets/svg/--bg--theme-dark3.svg")',
      'url("assets/svg/--bg--theme-dark4.svg")'
    ];
  
    const lightImages = [
      'url("assets/svg/--bg--theme-light1.svg")',
      'url("assets/svg/--bg--theme-light2.svg")',
      'url("assets/svg/--bg--theme-light3.svg")',
      'url("assets/svg/--bg--theme-light4.svg")'
    ];
  
    const darkColors = {
      'body': '#1D1B1E',
      'h1': 'rgba(255, 255, 255, 0.77)',
      'h2': 'rgba(255, 255, 255, 0.65)',
      '.no-results': 'rgba(255, 255, 255, 0.77)',
      '.title0': 'rgba(255, 255, 255, 0.65)',
      '.typing-title': 'rgba(255, 255, 255, 0.65)'
    };
  
    const lightColors = {
      'body': '#d0d0d0',
      'h1': '#1D1B1E',
      'h2': 'rgba(0, 0, 0, 0.65)',
      '.no-results': 'rgba(0, 0, 0, 0.77)',
      '.title0': 'rgba(0, 0, 0, 0.65)',
      '.typing-title': 'rgba(0, 0, 0, 0.65)'
    };
  });