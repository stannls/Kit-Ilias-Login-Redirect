// ==UserScript==
// @name         Ilias login
// @namespace    http://tampermonkey.net/
// @version      2024-04-09
// @description  Automatically redirect if not logged in.
// @author       Yannis Storrer
// @match        https://ilias.studium.kit.edu/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kit.edu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Get the mainbar of the ilias UI.
    const mainbar = document.getElementsByClassName("il-mainbar-entries")[0];
    // Get the count of children of the mainbar.
    const mainbar_children = mainbar.childElementCount;
    // If no user is logged in the mainbar has 2 children.
    if (mainbar_children == 2 ) {
        // Redirect to the login page
        window.location = "https://ilias.studium.kit.edu/shib_login.php";
    }
})();
