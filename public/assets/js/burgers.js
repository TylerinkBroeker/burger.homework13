const addBtn = $("#btn-submit");
const devourBtn = $("#btn-devour");

$(function() {
    $(".addBurger").on("submit", (event) => {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger").val().trim()
        }
        console.log(newBurger);

        if(newBurger.burger_name != "") {
            $.ajax("/api/new", {
                type: "POST",
                data: newBurger
            })
            .then(() => {
                console.log("Added a new burger!");
                location.reload();
            })
            .catch((err) => {
                console.log(err);
                alert("could not add to list!");
            });
        } else {alert("Burger must have a name.")};
    });

    $(".btn-devour").on("click", (event) => {
        let clickedId = event.target.id;
        $.ajax(`/api/burgers/${clickedId}`, {
            type: "PUT",
        })
        .then(() => {
            location.reload();
        })
    })
})