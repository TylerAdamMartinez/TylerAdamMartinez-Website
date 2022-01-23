const displayCurrentYear = (() => {
    const today = new Date();
    let currentYearElement = document.querySelector('#currentYear');
    currentYearElement.textContent = today.getFullYear().toString();
})();

const displayCurrentUrl = (() => {
    let currentUrl = window.location.href;
    currentUrl = currentUrl.replaceAll("/", "");
    currentUrl = currentUrl.replace(/.+:/u, "");

    let currentUrlElement = document.querySelector('#currentUrl');
    currentUrlElement.textContent = currentUrl;
})();