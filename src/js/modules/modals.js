const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, form1 = false, form2 = false) {
        const triggers = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                };

                if ((!form1 || state.form1) && (!form2 || state.form2)) {
                    windows.forEach(window => {
                        window.style.display = 'none';
                    });
    
                    modal.style.display = "block";
                    document.body.classList.add('modal-open');
                }
            })
        });

        close.addEventListener('click', () => {
                windows.forEach(window => {
                    window.style.display = 'none';
                });
                modal.style.display = "none";
                document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                    windows.forEach(window => {
                        window.style.display = 'none';
                    });
    
                    modal.style.display = "none";
                    document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.classList.remove('modal-open');
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', false);
    bindModal('.phone_link', '.popup', '.popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, true, false)
    bindModal('.popup_calc_profile_button', '.popup_calc_end','.popup_calc_end_close', false, false, true)
    showModalByTime('.popup', 3000);

};

export default modals;