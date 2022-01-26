const displayCurrentYear = (() => {
    const today = new Date();
    let currentYearElement = document.querySelector('#currentYear');
    currentYearElement.textContent = today.getFullYear().toString();
})();

const displayCurrentUrl = (() => {
    let currentUrl = window.location.href;
    
    if (currentUrl.match(/\.wiki\/.+\S/) !== null) {
        currentUrl = currentUrl.replace(/\.wiki\/.+\S/, "");
        currentUrl += '.wiki';
        currentUrl = currentUrl.replaceAll("/", "");
        currentUrl = currentUrl.replace(/.+:/u, "");
    } else if (currentUrl.match(/\.com\/.+\S/) !== null) {
        currentUrl = currentUrl.replace(/\.com\/.+\S/, "");
        currentUrl += '.com';
        currentUrl = currentUrl.replaceAll("/", "");
        currentUrl = currentUrl.replace(/.+:/u, "");
    } else {
        currentUrl = currentUrl.replace(/\/\n/, "");
        currentUrl = currentUrl.replace(/(\/(?!.*\/)).+/, "");
        currentUrl = currentUrl.replaceAll("/", "");
        currentUrl = currentUrl.replace(/.+:/u, "");
    }
    
    let currentUrlElement = document.querySelector('#currentUrl');
    currentUrlElement.textContent = currentUrl;
})();