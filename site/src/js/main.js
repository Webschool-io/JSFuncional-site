// put your code here
// remember, you can use modules with browserify
(function () {
    'use strict';

    window.addEventListener('DOMContentLoaded', function () {
        var menuLinks = document.querySelectorAll('.menuContent a');
        var menuToggle = document.querySelector('#menuToggle');

        for (var i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', function () {
                menuToggle.checked = false;
            });
        }

    });
})();
