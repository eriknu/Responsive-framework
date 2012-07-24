/* #CREATE DROPDOWN MENU
================================================== */
$(document).ready(function () {
    // Create the dropdown base
    $("<select />").appendTo(".mobile-navigation");

    // Create default option "Go to..."
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "-- Navigera"
    }).appendTo(".mobile-navigation select");

    // Populate dropdown with menu items
    $(".main-navigation ul li a").each(function () {
        var el = $(this);
        $("<option />", {
            "value": el.attr("href"),
            "text": el.text()
        }).appendTo(".mobile-navigation select");
    });

    // Make it all work
    $(".mobile-navigation select").change(function () {
        window.location = $(this).find("option:selected").val();
    });
});

/* #CLONE ELEMENTS FOR MOBILE
================================================== */
$(document).ready(function () {
    $(".clone-to-top").clone().appendTo(".mobile-top");
});