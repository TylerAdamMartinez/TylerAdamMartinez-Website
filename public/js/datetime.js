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