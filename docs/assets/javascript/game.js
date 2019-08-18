$( document ).ready(function() {

    // variables 
    let teddy = $("#teddy")
    let teddyAttributes = {
        health: 200,
        attack: 8,
        counter: 20
    };
    let abe = $("#abe")
    let abeAttributes =  {
        health: 140,
        attack: 17,
        counter: 25
    };
    let george = $("#george")
    let georgeAttributes =  {
        health: 180,
        attack: 10,
        counter: 16,
    };
    let thomas = $("#thomas")
    let thomasAttributes =  {
        health: 100,
        attack: 15,
        counter: 50
    };
    let chooseEnemy = false

    let enemiesDefeated = 3


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

            let baseAttack = 0;

            if ($("#teddy").hasClass('green-border')) {
                userAttributes = teddyAttributes
                baseAttack = 8
            }
            if ($("#george").hasClass('green-border')) {
                userAttributes = georgeAttributes
                baseAttack = 10
            }
            if ($("#thomas").hasClass('green-border')) {
                userAttributes = thomasAttributes
                baseAttack = 15
            }
            if ($("#abe").hasClass('green-border')) {
                userAttributes = abeAttributes
                baseAttack = 17
            }
            if ($("#abe").hasClass('orange-border')) {
                enemyAttributes = abeAttributes
            }
            if ($("#thomas").hasClass('orange-border')) {
                enemyAttributes = thomasAttributes
            }
            if ($("#george").hasClass('orange-border')) {
                enemyAttributes = georgeAttributes
            }
            if ($("#teddy").hasClass('orange-border')) {
                enemyAttributes = teddyAttributes
            }
            
            enemyAttributes.health = enemyAttributes.health - userAttributes.attack
            if (enemyAttributes.health > 0) {
                userAttributes.health = userAttributes.health - enemyAttributes.counter
            }
            userAttributes.attack = userAttributes.attack + baseAttack
            $("#userHealth").html(userAttributes.health)
            $("#userAttack").html(userAttributes.attack)
            $("#enemyHealth").html(enemyAttributes.health)
            $("#enemyAttack").html(enemyAttributes.counter)
            
            if (enemyAttributes.health <= 0) {
                $("#enemypresident").empty();
                alert("You've defeated your opponent! Chose the next enemy")
                enemiesDefeated--
                $("#enemyHealth").html(0)
                $("#enemyAttack").html(0)
            }
            if (userAttributes.health <= 0) {
                $("#enemypresident").empty();
                $("#userspresident").empty();
                $("#opponents").empty();
                alert("You weren't strong enough, try gain")
            }
            if (enemiesDefeated === 0) {
                $("#enemypresident").html("Congrats you Won!")
            }
        });
    }

    
    selectPrez()
    attackFunction()
});