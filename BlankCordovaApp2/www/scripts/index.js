// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

       
    };

    /* Connect the buttons and watch for clicks. If one occurs, then either add, or take away, from whichever was changed. */
    document.getElementById("LessMilk").onclick = function () {
        if (parseInt(document.getElementById("MilkAmount").value) > 0)
            document.getElementById("MilkAmount").value = (parseInt(document.getElementById("MilkAmount").value) - 1);
    };

    document.getElementById("MoreMilk").onclick = function () {
        document.getElementById("MilkAmount").value = (parseInt(document.getElementById("MilkAmount").value) + 1);
    };

    document.getElementById("LessEggs").onclick = function () {
        if (parseInt(document.getElementById("EggsAmount").value) > 0)
            document.getElementById("EggsAmount").value = (parseInt(document.getElementById("EggsAmount").value) - 1);
    };

    document.getElementById("MoreEggs").onclick = function () {
        document.getElementById("EggsAmount").value = (parseInt(document.getElementById("EggsAmount").value) + 1);
    };

    document.getElementById("LessBread").onclick = function () {
        if (parseInt(document.getElementById("BreadAmount").value) > 0)
            document.getElementById("BreadAmount").value = (parseInt(document.getElementById("BreadAmount").value) - 1);
    };

    document.getElementById("MoreBread").onclick = function () {
        document.getElementById("BreadAmount").value = (parseInt(document.getElementById("BreadAmount").value) + 1);
    };

    document.getElementById("LessTuna").onclick = function () {
        if (parseInt(document.getElementById("TunaAmount").value) > 0)
            document.getElementById("TunaAmount").value = (parseInt(document.getElementById("TunaAmount").value) - 1);
    };

    document.getElementById("MoreTuna").onclick = function () {
        document.getElementById("TunaAmount").value = (parseInt(document.getElementById("TunaAmount").value) + 1);
    };

    document.getElementById("LessLemons").onclick = function () {
        if (parseInt(document.getElementById("LemonsAmount").value) > 0)
            document.getElementById("LemonsAmount").value = (parseInt(document.getElementById("LemonsAmount").value) - 1);
    };

    document.getElementById("MoreLemons").onclick = function () {
        document.getElementById("LemonsAmount").value = (parseInt(document.getElementById("LemonsAmount").value) + 1);
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();