document.addEventListener('DOMContentLoaded', function() {
    const menButton = document.getElementById('men');
    const imageContainer = document.getElementById('image');

    // Toggle images visibility on hover or click
    menButton.onmouseover = menButton.onclick = () => {
        imageContainer.style.display = 'flex';
    };

    menButton.onmouseout = () => {
        imageContainer.style.display = 'none';
    };

    imageContainer.onmouseover = () => {
        imageContainer.style.display = 'flex';
    };

    imageContainer.onmouseout = () => {
        imageContainer.style.display = 'none';
    };
});
document.addEventListener('DOMContentLoaded', function() {
    const menButton = document.getElementById('women');
    const imageContainer = document.getElementById('image2');

    // Toggle images visibility on hover or click
    menButton.onmouseover = menButton.onclick = () => {
        imageContainer.style.display = 'flex';
    };

    menButton.onmouseout = () => {
        imageContainer.style.display = 'none';
    };

    imageContainer.onmouseover = () => {
        imageContainer.style.display = 'flex';
    };

    imageContainer.onmouseout = () => {
        imageContainer.style.display = 'none';
    };
});
document.addEventListener('DOMContentLoaded', function() {
    const menButton = document.getElementById('collection');
    const imageContainer = document.getElementById('image3');

    // Toggle images visibility on hover or click
    menButton.onmouseover = menButton.onclick = () => {
        imageContainer.style.display = 'flex';
    };

    menButton.onmouseout = () => {
        imageContainer.style.display = 'none';
    };

    imageContainer.onmouseover = () => {
        imageContainer.style.display = 'flex';
    };

    imageContainer.onmouseout = () => {
        imageContainer.style.display = 'none';
    };
});

