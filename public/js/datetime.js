const displayDate = (() => {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    let timeElement = document.querySelector('time');
    timeElement.setAttribute("datetime", today.toISOString());
    timeElement.textContent = today.toLocaleDateString('en-US', options);

    let currentYearElement = document.querySelector('#currentYear');
    currentYearElement.textContent = today.getFullYear().toString();
})();

const checkTime = (i) => {
    if (i < 10) {i = "0" + i};
    return i;
};

const startTime = () => {
    let today = new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
    document.querySelector("#clock").textContent = today;
};

setInterval(startTime, 1000);

const delay = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(2); 
        }, seconds);
    });
};

const toggleSubtitles =  ( async() => {
    let subtitleOne = document.querySelector('#cycletxt-1');
    let subtitleTwo = document.querySelector('#cycletxt-2');
    let shortTimeDelay = 150;
    let longTimeDelay = 5000;

    while(true) {
        subtitleTwo.style.display = "none";
        subtitleOne.style.display = "block";
        subtitleOne.style.opacity = 1;

        await delay(longTimeDelay);
        subtitleOne.style.opacity = .875;

        await delay(shortTimeDelay);
        subtitleOne.style.opacity = .75;

        await delay(shortTimeDelay);
        subtitleOne.style.opacity = .625;

        await delay(shortTimeDelay); 
        subtitleOne.style.opacity = .5;

        await delay(shortTimeDelay);
        subtitleOne.style.opacity = .375;

        await delay(shortTimeDelay);
        subtitleOne.style.opacity = .25;

        await delay(shortTimeDelay);
        subtitleOne.style.opacity = .125;

        await delay(shortTimeDelay); 
        subtitleOne.style.opacity = 0;
        subtitleOne.style.display = "none";
        subtitleTwo.style.display = "block";

        await delay(shortTimeDelay);
        subtitleTwo.style.opacity = 1;

        await delay(longTimeDelay);
        subtitleTwo.style.opacity = .875;

        await delay(shortTimeDelay);
        subtitleTwo.style.opacity = .75;

        await delay(shortTimeDelay);
        subtitleTwo.style.opacity = .625;
        
        await delay(shortTimeDelay); 
        subtitleTwo.style.opacity = .5;

        await delay(shortTimeDelay);
        subtitleTwo.style.opacity = .375;
        
        await delay(shortTimeDelay);
        subtitleTwo.style.opacity = .25;
        
        await delay(shortTimeDelay);
        subtitleTwo.style.opacity = .125;
           
        await delay(shortTimeDelay); 
        subtitleTwo.style.opacity = 0;  
    }

})();