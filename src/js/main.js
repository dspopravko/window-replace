import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import formsFunc from "./modules/forms";
import changeModalState from "./modules/changeModalState";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {
        form: 0,
        type: 'tree'
    };

    changeModalState(modalState);
    modals(modalState);
    tabs({
        headerSelector: '.glazing_slider',
        tabSelector: '.glazing_block',
        contentSelector: '.glazing_content',
        activeClass: 'active'});
    tabs({
        headerSelector: '.decoration_slider',
        tabSelector: '.no_click',
        contentSelector: '.decoration_content > div > div',
        activeClass: 'after_click'});
    tabs({
        headerSelector: '.balcon_icons',
        tabSelector: '.balcon_icons_img',
        contentSelector: '.big_img > img',
        activeClass: 'do_image_more',
        display: 'inline-block'
    })
    formsFunc(modalState);
})
