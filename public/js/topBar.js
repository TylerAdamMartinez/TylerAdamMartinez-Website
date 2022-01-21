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
    let subtitleThree = document.querySelector('#cycletxt-3');
    let shortTimeDelay = 150;
    let longTimeDelay = 5000;

    while(true) {
        subtitleOne.style.display = "block";
        subtitleTwo.style.display = "none";
        subtitleThree.style.display = "none";
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
        subtitleTwo.style.display = "none";
        subtitleThree.style.display = "block";

        await delay(shortTimeDelay);
        subtitleThree.style.opacity = 1;
        
        await delay(longTimeDelay);
        subtitleThree.style.opacity = .875;

        await delay(shortTimeDelay);
        subtitleThree.style.opacity = .75;

        await delay(shortTimeDelay);
        subtitleThree.style.opacity = .625;
        
        await delay(shortTimeDelay); 
        subtitleThree.style.opacity = .5;

        await delay(shortTimeDelay);
        subtitleThree.style.opacity = .375;
        
        await delay(shortTimeDelay);
        subtitleThree.style.opacity = .25;
        
        await delay(shortTimeDelay);
        subtitleThree.style.opacity = .125;
           
        await delay(shortTimeDelay); 
        subtitleThree.style.opacity = 0;
    }

})();