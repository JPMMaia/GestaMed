// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

var application;
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onSearchButtonClick()
    {
        application.searchDrug($("#searchBar").val());
    };

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        application = new Application();
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

window.onload = function () {
    document.getElementById("search-btn").onclick = function () {
        var searchBar = document.getElementById("searchBar");
        application.searchDrug(searchBar.value);
    };

    document.getElementById("drugFDACatagoryDiv").onclick = function () {
        document.getElementById("page3Anchor").click();
    };

    document.getElementById("page1Anchor").onclick = function () {
        document.getElementById("page1").removeAttribute("hidden");
        document.getElementById("page1ListItem").className = "active";
        document.getElementById("page2").setAttribute("hidden", true);
        document.getElementById("page2ListItem").className = "";
        document.getElementById("page3").setAttribute("hidden", true);
        document.getElementById("page3ListItem").className = "";
        document.getElementById("page4").setAttribute("hidden", true);
        document.getElementById("page4ListItem").className = "";
        document.getElementById("page5").setAttribute("hidden", true);
        document.getElementById("page5ListItem").className = "";
        document.getElementById("sidebarToggle").click();
    };
    document.getElementById("page2Anchor").onclick = function () {
        document.getElementById("page2").removeAttribute("hidden");
        document.getElementById("page2ListItem").className = "active";
        document.getElementById("page1").setAttribute("hidden", true);
        document.getElementById("page1ListItem").className = "";
        document.getElementById("page3").setAttribute("hidden", true);
        document.getElementById("page3ListItem").className = "";
        document.getElementById("page4").setAttribute("hidden", true);
        document.getElementById("page4ListItem").className = "";
        document.getElementById("page5").setAttribute("hidden", true);
        document.getElementById("page5ListItem").className = "";
        document.getElementById("sidebarToggle").click();
    };
    document.getElementById("page3Anchor").onclick = function () {
        document.getElementById("page3").removeAttribute("hidden");
        document.getElementById("page3ListItem").className = "active";
        document.getElementById("page1").setAttribute("hidden", true);
        document.getElementById("page1ListItem").className = "";
        document.getElementById("page2").setAttribute("hidden", true);
        document.getElementById("page2ListItem").className = "";
        document.getElementById("page4").setAttribute("hidden", true);
        document.getElementById("page4ListItem").className = "";
        document.getElementById("page5").setAttribute("hidden", true);
        document.getElementById("page5ListItem").className = "";
        document.getElementById("sidebarToggle").click();
    };
    document.getElementById("page4Anchor").onclick = function () {
        document.getElementById("page4").removeAttribute("hidden");
        document.getElementById("page4ListItem").className = "active";
        document.getElementById("page1").setAttribute("hidden", true);
        document.getElementById("page1ListItem").className = "";
        document.getElementById("page2").setAttribute("hidden", true);
        document.getElementById("page2ListItem").className = "";
        document.getElementById("page3").setAttribute("hidden", true);
        document.getElementById("page3ListItem").className = "";
        document.getElementById("page5").setAttribute("hidden", true);
        document.getElementById("page5ListItem").className = "";
        document.getElementById("sidebarToggle").click();
    };
    document.getElementById("page5Anchor").onclick = function () {
        document.getElementById("page5").removeAttribute("hidden");
        document.getElementById("page5ListItem").className = "active";
        document.getElementById("page1").setAttribute("hidden", true);
        document.getElementById("page1ListItem").className = "";
        document.getElementById("page2").setAttribute("hidden", true);
        document.getElementById("page2ListItem").className = "";
        document.getElementById("page3").setAttribute("hidden", true);
        document.getElementById("page3ListItem").className = "";
        document.getElementById("page4").setAttribute("hidden", true);
        document.getElementById("page4ListItem").className = "";
        document.getElementById("sidebarToggle").click();
    };
};