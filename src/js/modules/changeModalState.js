import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForms = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems (event, elements, prop) {
        elements.forEach((element, i) => {
            element.addEventListener(event, () => {
                switch(element.nodeName) {
                    case 'SPAN' :
                        state[prop] = i
                        break;
                    case 'INPUT' :
                        if (element.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elements.forEach((box, j) => {
                                if (i == j) box.checked = true
                                else box.checked = false;
                            })
                        } else {
                            state[prop] = element.value
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = element.value
                        break;
                }
                
                if (state.width > 50 && state.height > 50) state.form1 = true;
                if (state.profile) state.form2 = true;
            });
        })
    }

    bindActionToElems('click', windowForms, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
}

export default changeModalState;