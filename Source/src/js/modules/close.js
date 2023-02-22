const close = (selector) => {
    const closed = document.querySelector(selector);
    closed.style.display = 'none';
    document.body.classList.remove('modal-open');
};

export default close;