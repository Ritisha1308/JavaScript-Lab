const items = document.querySelectorAll("[data-info]");

items.forEach(function(item) {

    item.addEventListener("click", function() {

        alert(
            "SEMINAR DETAILS\n\n" +
            item.dataset.info.replace(" | ", "\n")
        );

    });

});
