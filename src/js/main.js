import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import formsFunc from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modals();
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
    formsFunc();
})
