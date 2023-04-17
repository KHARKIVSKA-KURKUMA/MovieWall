import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function startLoader() { 
    Loading.circle({
        svgColor: '#B92F2C',
    });
};

export function stopLoader() { 
    Loading.remove();
};