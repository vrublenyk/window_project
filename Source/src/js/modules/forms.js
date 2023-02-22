import checkNumInputs from "./checkNumInputs";
import close from "./close";

const forms = (state) =>{
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');

    
    checkNumInputs('input[name = "user_phone"]');
    
    const message = {
        loading:'loading',
        success: 'Thanks! We call You',
        failure: 'error! thome thing goin wrong...'
    }

    const postData = async (url, data) =>{
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };
    const clearInput = () => {
        input.forEach(item => {
            item.value = '';
        })
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if(item.getAttribute("data-calc") === "end"){
                for(let key in state){
                    formData.append(key, state[key]);
                }
            };

            postData("assets/server.php", formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInput()
                    setTimeout(() => {
                        statusMessage.remove();
                        close('.popup_calc_end');
                        for(let key in state){
                            delete state[key];
                        }
                    }, 2000)
                })
        })
    });
};

export default forms;