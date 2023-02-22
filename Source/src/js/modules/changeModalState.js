import checkNumInputs from "./checkNumInputs";
import formValidation from "./formValidation";
const changeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

checkNumInputs('#width');
checkNumInputs('#height');

    function bindActionsByElems (event, elem, prop){
        elem.forEach((item, i) => {
            item.addEventListener(event, () =>{
                switch(item.nodeName){
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') == 'checkbox'){
                            i === 0 ? state[prop] = 'Cold': state[prop] = 'Warm';
                            elem.forEach((box, k ) => {
                                box.checked = false;
                                if(i === k){
                                    box.checked = true;
                                }
                            })
                        } else{
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    bindActionsByElems('click', windowForm, 'form');
    bindActionsByElems('input', windowWidth, 'width');
    bindActionsByElems('input', windowHeight, 'height');
    bindActionsByElems('change', windowType, 'type');
    bindActionsByElems('change', windowProfile, 'profile');



    
    
    
}





export default changeModalState;