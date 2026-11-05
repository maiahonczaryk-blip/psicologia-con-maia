/* Menú hamburguesa para móvil */
(function(){
  var header=document.querySelector('header');
  var nav=header&&header.querySelector('nav');
  if(!nav||!nav.querySelector('ul'))return;
  var btn=document.createElement('button');
  btn.className='menu-toggle';
  btn.type='button';
  btn.setAttribute('aria-label','Abrir menú');
  btn.setAttribute('aria-expanded','false');
  btn.innerHTML='<span></span>';
  nav.appendChild(btn);
  function set(open){
    header.classList.toggle('open',open);
    btn.setAttribute('aria-expanded',open);
    btn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
  }
  btn.addEventListener('click',function(){set(!header.classList.contains('open'))});
  nav.querySelector('ul').addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  window.addEventListener('resize',function(){if(window.innerWidth>820)set(false)});
})();
