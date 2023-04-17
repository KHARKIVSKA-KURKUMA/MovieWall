import { refs } from './refs';

export function onUpBtn() {
        
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? show() : hide();
      document.querySelector('.btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
    }
  }
  
  function show() {
    refs.upBtn.classList.remove('btn-up_hide');
  };
  function hide() {
    refs.upBtn.classList.add('btn-up_hide');
  };