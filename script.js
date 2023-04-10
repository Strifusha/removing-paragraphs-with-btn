const btnRemove = document.querySelectorAll('.remove-button');

btnRemove.forEach(element => {
    element.addEventListener('click', () => {
        element.parentNode.style.display = 'none';
    });
});



