const hamactivate = document.querySelector('#yo');
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.ham-bar');

hamactivate.addEventListener('click', function () {
    hamburger.classList.add('open');
    links.classList.toggle('circle');
})

function swapImage(id, primary, secondary) {
    src = document.getElementById(id).src;
    if (src.match(primary)) {
        setTimeout(function(){document.getElementById(id).src = secondary;},100);
    } else {
        setTimeout(function(){document.getElementById(id).src = primary;},1490);
    }
}