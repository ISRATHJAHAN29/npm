document.getElementById('seeMoreBtn').addEventListener('click', function() {
    const hiddenProducts = document.querySelectorAll('.item.hidden');
    hiddenProducts.forEach(product => {
        product.classList.remove('hidden');
    });
    document.getElementById('seeMoreBtn').classList.add('hidden');
    document.getElementById('showLessBtn').classList.remove('hidden');
});

document.getElementById('showLessBtn').addEventListener('click', function() {
    const additionalProducts = document.querySelectorAll('.item.additional');
    additionalProducts.forEach(product => {
        product.classList.add('hidden');
    });
    document.getElementById('seeMoreBtn').classList.remove('hidden');
    document.getElementById('showLessBtn').classList.add('hidden');
});
