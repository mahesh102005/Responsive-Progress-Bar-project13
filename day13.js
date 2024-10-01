document.getElementById('start-btn').addEventListener('click', function () {
    let progressBar = document.getElementById('progress-bar');
    let width = 0;
    
    let interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 100); 
});
