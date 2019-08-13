$( document ).ready(function() {

    // variables 
    const teddy = $("#teddy");
    const abe = $("#abe");
    const george = $("#george");
    const thomas = $("#thomas");

    // functions

    selectPrez = function () {
        $("prez").on("click", function () {
            if (this.css("border", "5px solid blue")) {
            this.appendTo("#userspresident");
            this.css("border", "5px solid green")
            !this.appendTo("#opponents");
            !this.css("border", "5px solid red");
            }            
        });

    }
//         teddy.on("click", function () {
//             if (teddy.css("border", "5px solid blue")) {
//             teddy.appendTo("#userspresident");
//             teddy.css("border", "5px solid green")
//             abe.appendTo("#opponents");
//             abe.css("border", "5px solid red");
//             george.appendTo("#opponents");
//             george.css("border", "5px solid red");
//             thomas.appendTo("#opponents");
//             thomas.css("border", "5px solid red");
//             }            
//         });

//         george.on("click", function () {
//             if (george.css("border", "5px solid blue")) {
//             george.appendTo("#userspresident");
//             george.css("border", "5px solid green")
//             abe.appendTo("#opponents");
//             abe.css("border", "5px solid red");
//             teddy.appendTo("#opponents");
//             teddy.css("border", "5px solid red");
//             thomas.appendTo("#opponents");
//             thomas.css("border", "5px solid red");
//             }
//         });

//         abe.on("click", function () {
//             if (abe.css("border", "5px solid blue")) {
//             abe.appendTo("#userspresident");
//             abe.css("border", "5px solid green")
//             teddy.appendTo("#opponents");
//             teddy.css("border", "5px solid red");
//             george.appendTo("#opponents");
//             george.css("border", "5px solid red");
//             thomas.appendTo("#opponents");
//             thomas.css("border", "5px solid red");  
//             }          
//         });

//         thomas.on("click", function () {
//             if (thomas.css("border", "5px solid blue")) {
//             thomas.appendTo("#userspresident");
//             thomas.css("border", "5px solid green")
//             abe.appendTo("#opponents");
//             abe.css("border", "5px solid red");
//             george.appendTo("#opponents");
//             george.css("border", "5px solid red");
//             teddy.appendTo("#opponents");
//             teddy.css("border", "5px solid red");   
//             }         
//         });

//     }

//     selectOpponent = function () {
//         george.on("click", function () {
//         if (george.css("border", "5px solid red")) {
//             george.appendTo("#enemypresident");
//             george.css("border", "5px solid orange")
//         }
//         });

//         abe.on("click", function () {
//             if (abe.css("border", "5px solid red")) {
//                 abe.appendTo("#enemypresident");
//                 abe.css("border", "5px solid orange")
//             }
//          });
         
//         teddy.on("click", function () {
//             if (teddy.css("border", "5px solid red")) {
//                 teddy.appendTo("#enemypresident");
//                 teddy.css("border", "5px solid orange")
//             }
//         });
//         thomas.on("click", function () {
//             if (thomas.css("border", "5px solid red")) {
//                 thomas.appendTo("#enemypresident");
//                 thomas.css("border", "5px solid orange")
//             }
//         });
// }  

    selectPrez ()
    // selectOpponent ()

});