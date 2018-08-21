$(document).ready(function () {

      // Your code here...

      //variables
      var firstNum = "";
      var secondNum = "";
      var operator = "";
      var total = "";

      //inputs

      //numbers
      //add number to first-number and second-number depending on operations
      $(".number").on("click", function () {

        if (total != "") {
          clear();
        }

        if (operator === "") {
          //working with first number
          firstNum += this.value;
          $("#first-number").text(firstNum);
          console.log(firstNum);
        } else {
          //working with second number
          secondNum += this.value;
          $("#second-number").text(secondNum);
        }
      });

      //operators
      //when can we click
      $(".operator").on("click", function () {

        console.log(firstNum);
        if (firstNum === "") {
          return;
        }

        operator = this.value;

        switch (operator) {
          case "plus":
            $("#operator").html("+");
            break;
          case "minus":
            $("#operator").html("&minus;");
            break;
          case "times":
            $("#operator").html("x");
            break;
          case "power":
            $("#operator").html("^");
            break;
          case "divide":
            $("#operator").html("&divide;");
            break;
          default:
            break;

        }
      });

      //equal
      $(".equal").on("click", function () {
        console.log(secondNum);
        if (secondNum === "") {
          return;
        }

        switch (operator) {
          case "plus":
            total = parseInt(firstNum) + parseInt(secondNum);
            break;
          case "minus":
            total = parseInt(firstNum) - parseInt(secondNum);
            break;
          case "times":
            total = parseInt(firstNum) * parseInt(secondNum);
            break;
          case "power":
            total = Math.pow(parseInt(firstNum), parseInt(secondNum));
            break;
          case "divide":
            total = parseInt(firstNum) / parseInt(secondNum);

            break;
          default:
            break;

        }
        console.log(isFinite(total));
        if (!isFinite(total)) {
          $("#result").text("N/A");
        } else {
          $("#result").text(total);
        }


      });

      //clear
      $(".clear").on("click", clear);

      function clear() {
        $("#first-number").empty();
        $("#operator").empty();
        $("#second-number").empty();
        $("#result").empty();
// $("#first-number,#operator,#second-number,#result").empty();                           ")
        firstNum = "";
        secondNum = "";
        operator = "";
        total = "";
      }



    });

