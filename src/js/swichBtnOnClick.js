
export function headerFunctionality() {
    const refs = {
        form: document.querySelector('.search'),
        listEl: document.querySelectorAll('.js-btn-list'),
        libraryEl: document.querySelector('.library'),
        activeClass: 'nav-list__button--active',
        targetsList: {
            home: 'home',
            library: 'library',
        },
    }

    const switchBtn = (activeBtn, btn) => {
        activeBtn.classList.remove(refs.activeClass);
        btn.classList.add(refs.activeClass);
        return btn;
    }

    refs.libraryEl.hidden = true;

    refs.listEl.forEach(list => {
        const btns = list.querySelectorAll('button')
        let activeBtn;

        btns.forEach(btn => {
            if(btn.classList.contains(refs.activeClass)) activeBtn = btn;
            
            btn.addEventListener('click', e => {
                e.preventDefault();
                activeBtn = switchBtn(activeBtn, btn);

                if(e.target.dataset.target == refs.targetsList.library) {
                    refs.form.hidden = true;
                    refs.libraryEl.style.display = 'flex';
                }
                if(e.target.dataset.target == refs.targetsList.home) {
                    refs.form.hidden = false;
                    refs.libraryEl.style.display = 'none';
                }
                
            });
        })
    })
    
    // refs.listEl.addEventListener('click', swichBtnOnClick);

    // function swichBtnOnClick(evt) {
    //     if (evt.target.nodeName !== 'BUTTON') {
    //         return
    //     }

    //     // const currentActiveBtn = document.querySelector('.nav-list__button--active');
    //     // currentActiveBtn = evt.target;
    //     // if (evt.target === evt.target) {
    //     //     evt.stopPropagation(); 
    //     //     // return   
    //     // } 

    //     // if (currentActiveBtn) {
    //     //     currentActiveBtn.classList.toggle('.nav-list__button--active');
    //     // }
        
    //     // const nextAcniveBtn = evt.target;
    //     // nextAcniveBtn.classList.add('.nav-list__button--active');

    //     refs.btnLibrary.classList.toggle("nav-list__button--active");
    //     refs.btnHome.classList.toggle("nav-list__button--active");

    //     if (refs.btnHome.classList.contains('nav-list__button--active')) {
    //         refs.libraryEl.style.display = 'none';
    //         refs.form.style.display = 'block';
            
           


    //         // refs.btnHome.setAttribute('disabled', true);
            
    //     }

    //     if (refs.btnLibrary.classList.contains('nav-list__button--active')) {
    //         refs.libraryEl.style.display = 'flex';
    //         refs.form.style.display = 'none';
    //         // refs.btnLibrary.setAttribute('disabled', true);

    //         //  if (evt.target === evt.target) {
    //         //     return
    //         }
    // }

}  



