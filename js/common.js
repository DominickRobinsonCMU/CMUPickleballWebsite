
function loadHeaderAndFooter() {
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    fetch('header.html')
        .then(response => response.text())
        .then(header => {
            headerContainer.innerHTML = header;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(footer => {
            footerContainer.innerHTML = footer;
        });
}



