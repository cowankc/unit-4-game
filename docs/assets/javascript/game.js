$( document ).ready(function() {

    // variables 
    const teddy = $("#teddy");
    const abe = $("#abe");
    const george = $("#george");
    const thomas = $("#thomas");
    let chooseEnemy = false

    // functions

    selectPrez = function () {
        const prez = document.getElementsByClassName('prez');
        $(prez).on("click", function (selectedPrez) {
            const currentPrez = $(`#${selectedPrez.currentTarget.id}`);
            const classArray = [...selectedPrez.currentTarget.classList];
            currentPrez.addClass('green-border');
            currentPrez.removeClass('blue-border');
            $(prez).appendTo("#opponents");
            $(prez).addClass('red-border');
            currentPrez.appendTo("#userspresident");
            chooseEnemy = true;
            if(chooseEnemy =true) {
                $(prez).on("click", function (selectedPrez2) {
                    const currentPrez2 = $(`#${selectedPrez2.currentTarget.id}`);
                    const classArray = [...selectedPrez.currentTarget.classList];
                    currentPrez2.addClass('orange-border');
                    currentPrez2.removeClass('red-border');
                    currentPrez2.appendTo("#enemypresident");
                    currentPrez.appendTo("#userspresident");
                });
               }
        });
    }
   

    selectPrez ()
    


});