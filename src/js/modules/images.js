const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');
    let imageIsOpen = false;

    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    const handleClickImg = (path) => {
        if (!imageIsOpen) {
            document.body.style.overflow = 'hidden';
            imgPopup.classList.toggle('popup');
            imgPopup.style.display = 'flex';
            bigImage.setAttribute('src', path)
        }
        
        if (imageIsOpen) {
            document.body.style.overflow = '';
            imgPopup.classList.toggle('popup');
            imgPopup.style.display = 'none';
        }
        imageIsOpen = !imageIsOpen;
    };
    

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target) {
            if (target.classList.contains('preview') || target.matches('div.popup')) {
                const path = target.parentNode.getAttribute('href');
                handleClickImg(path)
            };
        }
    });
    
    workSection.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            const target = e.target;
            const path = target.getAttribute('href');
            handleClickImg(path)
        }
        if (e.key === 'Escape' && imageIsOpen) {
            handleClickImg()
        }
    });
};

export default images