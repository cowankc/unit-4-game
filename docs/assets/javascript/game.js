$( document ).ready(function() {

    // variables 
    const teddy = $("#teddy");
    const abe = $("#abe");
    const george = $("#george");
    const thomas = $("#thomas");

    // functions

    selectPrez = function () {
        const prez = document.getElementsByClassName('prez');
        $(prez).on("click", function (selectedPrez) {
            const currentPrez = $(`#${selectedPrez.currentTarget.id}`);
            const classArray = [...selectedPrez.currentTarget.classList];
            currentPrez.addClass('green-border');
            currentPrez.removeClass('blue-border')
            currentPrez.appendTo("#userspresident");
        });

    }
   

    selectPrez ()


});