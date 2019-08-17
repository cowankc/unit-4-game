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
    let chosenPrez = " " 

    // functions
    
    selectPrez = function () {
        
        const prez = document.getElementsByClassName('prez');
        $(prez).on("click", function (selectedPrez) {
            if (chooseEnemy == false) {
                const currentPrez = $(`#${selectedPrez.currentTarget.id}`);
                const classArray = [...selectedPrez.currentTarget.classList];
                currentPrez.addClass('green-border');
                currentPrez.removeClass('blue-border');
                $(prez).appendTo("#opponents");
                $(prez).addClass('red-border');
                currentPrez.appendTo("#userspresident");
                chosenPrez = currentPrez
                console.log(chosenPrez)
                chooseEnemy = true;
                return chosenPrez
            }
            else if (chooseEnemy == true) {
                const prez = document.getElementsByClassName('red-border');
                const currentPrez = $(`#${selectedPrez.currentTarget.id}`);
                const classArray = [...selectedPrez.currentTarget.classList];
                currentPrez.addClass('orange-border');
                currentPrez.removeClass('red-border');
                currentPrez.appendTo("#enemypresident");
            }
        });
    }
       
    attackFunction = function () {
        $("#attack").on("click", function () {
            chosenPrez
        });
    }
    
    $("#choices").on("click", selectPrez());
    // $("#opponents").on("click", selectOpponent ());
    console.log(chooseEnemy);
    $("#attack").on("click", attackFunction());
});