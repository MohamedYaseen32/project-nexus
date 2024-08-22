document.addEventListener('DOMContentLoaded', function() {
    const showSpecialsButton = document.getElementById('showSpecials');
    const specialsText = document.getElementById('specialsText');

    showSpecialsButton.addEventListener('click', function() {
        specialsText.textContent = 'Today\'s special: Chicken Biriyani @ Rs 100!';
    });
});
