$( document ).ready(function() {

    // variables 
    let teddy = $("#teddy")
    let teddyAttributes = {
        health: 180,
        attack: 12,
        counter: 20
    };
    let abe = $("#abe")
    let abeAttributes =  {
        health: 140,
        attack: 22,
        counter: 25
    };
    let george = $("#george")
    let georgeAttributes =  {
        health: 160,
        attack: 18,
        counter: 22,
    };
    let thomas = $("#thomas")
    let thomasAttributes =  {
        health: 100,
        attack: 14,
        counter: 50
    };
    let chooseEnemy = false

    // functions
    
    selectPrez = function () {
        chosenPrez = 15
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
                chooseEnemy = true;
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
            let userAttributes = {
                health: 0,
                attack: 0,
                counter: 0
            };
            let enemyAttributes = {
                health: 0,
                attack: 0,
                counter: 0
            };
            if ($("#teddy").hasClass('green-border')) {
                console.log("teddy")
                userAttributes = teddyAttributes
            }
            if ($("#george").hasClass('green-border')) {
                console.log("george")
                userAttributes = georgeAttributes
            }
            if ($("#thomas").hasClass('green-border')) {
                console.log("thoms")
                userAttributes = thomasAttributes
            }
            if ($("#abe").hasClass('green-border')) {
                console.log("abe")
                userAttributes = abeAttributes
            }
            if ($("#abe").hasClass('orange-border')) {
                console.log("vs abe")
                enemyAttributes = abeAttributes
            }
            if ($("#thomas").hasClass('orange-border')) {
                console.log("vs thomas")
                enemyAttributes = thomasAttributes
            }
            if ($("#george").hasClass('orange-border')) {
                console.log("vs george")
                enemyAttributes = georgeAttributes
            }
            if ($("#teddy").hasClass('orange-border')) {
                console.log("vs teddy")
                enemyAttributes = teddyAttributes
            }
            $("#userHealth").html(userAttributes.health)
            $("#userAttack").html(userAttributes.attack)
            $("#enemyHealth").html(enemyAttributes.health)
            $("#enemyAttack").html(enemyAttributes.counter)
            userAttributes.health = userAttributes.health - enemyAttributes.counter 
            enemyAttributes.health = enemyAttributes.health - userAttributes.attack
             
        });
    }
    
    $("#choices").on("click", selectPrez());
    // $("#opponents").on("click", selectOpponent ());
    console.log(chooseEnemy);
    $("#attack").on("click", attackFunction());
});