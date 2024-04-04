$('.portfolio-button').mousedown(function() {
    timeout = setInterval(function() {
        window.scrollBy(0, -1); // May need to be -1 to go down
    }, 0); // Play around with this number. May go too fast

    return false;
});

document.getElementById("myBtn").onclick = function() { myFunction() };

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("#contact-loc");
}