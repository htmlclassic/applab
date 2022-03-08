window.addEventListener("load", function() {
    let optionList = document.querySelectorAll('.switch__option');

    let option1 = optionList[0];
    let option2 = optionList[1];

    let background = document.querySelector('.switch__back');
    const activeClass = 'switch_active';

    let isBackgroundAtInitial = true;

    function switchF(optionIndex) {
        if (optionIndex === 1) {
            option1.classList.remove(activeClass)
            background.classList.add('switch__back_moved');
            option2.classList.add(activeClass);
        } else if (optionIndex === 0) {
            option2.classList.remove(activeClass);
            background.classList.remove('switch__back_moved');
            option1.classList.add(activeClass);
        }
    }

    option1.addEventListener('click', function() {
        switchF(0);
    });

    option2.addEventListener('click', function() {
        switchF(1);
    });
});