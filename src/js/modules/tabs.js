const tabs = ({headerSelector, tabSelector, contentSelector, activeClass, display = 'block'}) => {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          contents = document.querySelectorAll(contentSelector);

    const hideTabContent = () => {
        contents.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    const showTabContent = (i = 0) => {
        contents[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    const handleClickTab = (e) => {
        const target = e.target;
        if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tabs.forEach((tab, i) => {
                if (target == tab || target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    }
    header.addEventListener('click', handleClickTab);
    header.addEventListener('keydown', (e) => {
        if (e.key === "Enter") handleClickTab(e)});
};

export default tabs;