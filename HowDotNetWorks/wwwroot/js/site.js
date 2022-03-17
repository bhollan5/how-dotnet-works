// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
window.onload = function () {
    console.log(`Now loading ${window.location.pathname}`);
    let path = window.location.pathname.split('/')[1];
    let menuLinks = document.getElementsByClassName("menu-link");
    for (let i = 0; i < menuLinks.length; i++) {
        let menuLink = menuLinks[i];
        if (menuLink.id == path) {
            menuLink.classList.add('selected-link');
        } else {
            menuLink.classList.remove('selected-link');
        }
    }
}