// Small interactivity: theme toggle and year injection
(function(){
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const applyTheme = (isLight)=>
  {
    if(isLight){
      document.documentElement.classList.add('light');
      btn.textContent = '🌞';
    } else {
      document.documentElement.classList.remove('light');
      btn.textContent = '🌙';
    }
  }

  const saved = localStorage.getItem('light-theme');
  applyTheme(saved === 'true');

  btn.addEventListener('click', ()=>{
    const isLight = !document.documentElement.classList.contains('light');
    applyTheme(isLight);
    localStorage.setItem('light-theme', String(isLight));
  });
})();
