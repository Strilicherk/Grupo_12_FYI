export const usuarioAutenticado = () => localStorage.getItem('adm-login') !== null;

export const parseJwt = () => {

    let base64 = localStorage.getItem('adm-login').split('.')[1];
    
    return JSON.parse( window.atob(base64) );
};