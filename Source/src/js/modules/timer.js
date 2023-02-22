const timer = (id, deadline) => {
    const getTimeRemaning = (endtime) => {
        let days, hours, minutes, seconds;
        const time = Date.parse(endtime) - Date.parse(new Date());
        
        if(time <= 0){
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }else {
            days = Math.floor(time / (1000 * 60 * 60 * 24));
            hours = Math.floor(time /(1000 * 60 * 60 ) % 24);
            minutes = Math.floor(time / (1000 * 60)% 60);
            seconds = Math.floor((time / 1000) % 60);
        }
        return {
            'total': time,
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'seconds': seconds
        }

    }
 
    function setClock(id, endtime){
        const counter = document.querySelector(id),
            daysBlock = counter.querySelector('#days'),
            hoursBlock = counter.querySelector('#hours'),
            minutesBlock = counter.querySelector('#minutes'),
            secondsBlock = counter.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000); 

        updateClock();

        function updateClock(){
            const time = getTimeRemaning(endtime);
        
            daysBlock.textContent =addZero(time.days);
            hoursBlock.textContent = addZero(time.hours);
            minutesBlock.textContent = addZero(time.minutes);
            secondsBlock.textContent = addZero(time.seconds);
        
            if(time.total <= 0){
                daysBlock.textContent ='00';
                hoursBlock.textContent = '00';
                minutesBlock.textContent = '00';
                secondsBlock.textContent = '00';
            
                clearInterval(timeInterval);
            }
        }
        function addZero(num){
            if(num >= 0 && num < 10){
                return `0${num}`;
            } else {
                return num;
            }

        }
    }

    setClock(id, deadline);

 
}

export default timer;