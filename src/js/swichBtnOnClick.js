import { refs } from './refs';

export function headerFunctionality() {
  const switchBtn = (activeBtn, btn) => {
    activeBtn.classList.remove(refs.activeClass);
    btn.classList.add(refs.activeClass);
    return btn;
  };
  refs.libraryEl.hidden = true;

  refs.listEl.forEach(list => {
    const btns = list.querySelectorAll('button');
    let activeBtn;

    btns.forEach(btn => {
      if (btn.classList.contains(refs.activeClass)) activeBtn = btn;

      btn.addEventListener('click', e => {
        e.preventDefault();
        activeBtn = switchBtn(activeBtn, btn);
        // localStorage.setItem('page', activeBtn.dataset.target);
        if (e.target.dataset.target == refs.targetsList.library) {
          refs.form.hidden = true;
          refs.libraryEl.style.display = 'flex';
        }
        if (e.target.dataset.target == refs.targetsList.home) {
          refs.form.hidden = false;
          refs.libraryEl.style.display = 'none';
        }
      });
    });
  });
}
