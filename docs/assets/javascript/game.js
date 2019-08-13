$( document ).ready(function() {

    // variables 
    const teddy = $("#teddy");
    const abe = $("#abe");
    const george = $("#george");
    const thomas = $("#thomas");

    // functions

    selectPrez = function () {

        teddy.parent("#choices").on("click", function () {
            teddy.appendTo("#userspresident");
            abe.appendTo("#opponents");
            george.appendTo("#opponents");
            thomas.appendTo("#opponents");
            
        });

        abe.parent("#choices").on("click", function () {
            abe.appendTo("#userspresident");
            teddy.appendTo("#opponents");
            george.appendTo("#opponents");
            thomas.appendTo("#opponents");
        });

        george.parent("#choices").on("click", function () {
            george.appendTo("#userspresident");
            abe.appendTo("#opponents");
            teddy.appendTo("#opponents");
            thomas.appendTo("#opponents");
        });

        thomas.parent("#choices").on("click", function () {
            teddy.appendTo("#userspresident");
            abe.appendTo("#opponents");
            george.appendTo("#opponents");
            thomas.appendTo("#opponents");
        });
    }

    // selectOpponent = function () {
    //     teddy.on("click", function () {
    //     if (teddy.parent("opponents")) {
    //         teddy.appendTo("#enemypresident");
    //         };
    //     });

    

    selectPrez ()
    // selectOpponent ()

});