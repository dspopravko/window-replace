import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs({
        headerSelector: '.glazing_slider',
        tabSelector: '.glazing_block',
        contentSelector: '.glazing_content',
        activeClass: 'active'});
})
