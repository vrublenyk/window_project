const images = () => {
    const  imgPopup = document.createElement('div'),
            workStation = document.querySelector('.works'),
            bigImg = document.createElement('img'),
            bigImgClose = document.createElement('button');

    imgPopup.classList.add('popup');

    workStation.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    bigImgClose.classList.add('popup_close');
    bigImgClose.style.top = '1.5rem';
    bigImgClose.style.right = '31rem';
    bigImgClose.innerHTML = '<strong>&times;</strong>';

    imgPopup.appendChild(bigImg);
    imgPopup.appendChild(bigImgClose);

    workStation.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            const path = target.parentElement.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.classList.add('modal-open');
        }
        if(target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
            document.body.classList.remove('modal-open');
        }

    })

    bigImgClose.addEventListener('click',() => {
        imgPopup.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

};

export default images;