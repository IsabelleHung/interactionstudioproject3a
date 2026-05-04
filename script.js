document.addEventListener("DOMContentLoaded", function () {
    console.log("JS is working");

    // Map selection form
    var mapForm = document.querySelector(".map-form");

    if (mapForm) {
        mapForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var select = document.getElementById("bd");
            var selectedValues = [];
            var selectedText = [];
            var i;

            for (i = 0; i < select.selectedOptions.length; i++) {
                selectedValues.push(select.selectedOptions[i].value);
                selectedText.push(select.selectedOptions[i].text);
            }

            console.log("Values:", selectedValues);
            console.log("Labels:", selectedText);
        });
    }

    // Results sort state
    var sortSelect = document.querySelector(".sort");

    if (sortSelect) {
        if (window.location.href.indexOf("sort=nearest") !== -1) {
            sortSelect.value = "nearest";
        }
    }
});
