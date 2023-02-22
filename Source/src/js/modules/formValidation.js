
const formValidation = (mainEventListener, buttonSelector, heightSelector, widthSelector, event) => {
    const mainEvent = document.querySelectorAll(mainEventListener),
          button = document.querySelector(buttonSelector),
          height = document.querySelector(heightSelector),
          width = document.querySelector(widthSelector);
    

    button.setAttribute('disabled', 'true');

    mainEvent.forEach(item => {
        item.addEventListener(event, () =>{
            if(height.value != '' || width.value != ''){
                button.removeAttribute('disabled', 'true')
            }
        })
    })

}

export default formValidation;
