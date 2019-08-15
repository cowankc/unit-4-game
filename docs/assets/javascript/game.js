$( document ).ready(function() {

    // variables 
    let teddy = $("#teddy")
    let teddyAttributes = {
        health:"180",
        attack:"12",
        counter:"20"
    };
    let abe = $("#abe")
    let abeAttributes =  {
        health:"140",
        attack:"22",
        counter:"25"
    };
    let george = $("#george")
    let georgeAttributes =  {
        health:"160",
        attack:"18",
        counter:"22"
    };
    let thomas = $("#thomas")
    let thomasAttributes =  {
        health:"100",
        attack:"14",
        counter:"50"
    };
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
   
    attackFunction = function () {
        $("#attack").on("click", function () {
            if ($("#abe")) {
            console.log("yes")}
            
        });
    }

    selectPrez ()
    attackFunction ()


});