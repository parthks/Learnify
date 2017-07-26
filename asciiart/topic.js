$(function() {
    console.log("run")
    $("#calc").resizable().draggable();

    $("#summary-text").resizable().draggable();
    $("#learn").resizable().draggable();

    $("#sample-prob").resizable().draggable();
    $("#tough-prob").resizable().draggable();

    $("#connect").resizable().draggable();
    $("#extras").resizable().draggable();
    $("#www").resizable().draggable();

    $("#topics").selectmenu();

    $("#content").hide()

    obj = $("#all-content")
    obj.append('<div id="TEST" class="row"><div>')
    obj.append('<div id="APP" class="row"><div>')
    addTextBoxes($("#all-content"))

    if (localStorage.getItem("appName") == 'Linear_Magic' ||
        localStorage.getItem("appName") == 'Digits_Magic' ||
        localStorage.getItem("appName") == 'Matrix_Magic') {
        $('#AppButton').click();
    }

    // $("#all-content").append(addSummaryTextBox());
});

var my_index = 100;

var selectedTextBox = true
var selectedVideoBox = false
var selectedTestBox = false
var selectedAppBox = false


function sendontop(div_id) {
    ele = document.getElementById(div_id.id);
    ele.style.zIndex = my_index++;
}


function allContent() {
    if (!selectedTextBox && !selectedVideoBox && !selectedTestBox && !selectedAppBox) {
        $("#content").show()
    } else {
        $("#content").hide()
    }
}

function clickText() {
    selectedTextBox = !selectedTextBox
    allContent()
    if ($("#TextButton").hasClass("active")) {
        deleteTextBoxes()
    } else {
        addTextBoxes($("#all-content"))
            //goToByScroll("TEXT")
    }
}

function clickVid() {
    selectedVideoBox = !selectedVideoBox
    allContent()
    if ($("#VideoButton").hasClass("active")) {
        deleteVideoBoxes()
    } else {
        addVideoBoxes($("#all-content"))
            //goToByScroll("VIDEO")
    }
}

function clickTest() {
      
    selectedTestBox = !selectedTestBox
    //allContent()
    if ($("#TestButton").hasClass("active")) {
        //deleteTestBoxes()
    } else {
        alert("Coming Soon...");  
        //addTestBoxes($("#all-content"))
        //goToByScroll("TEST")
    }


}

function clickApp() {
    selectedAppBox = !selectedAppBox
    allContent()
    if ($("#AppButton").hasClass("active")) {
        deleteAppBoxes()
    } else {
        addAppBoxes($("#all-content"))
        goToByScroll("APP")
    }

}



function goToByScroll(id) {
    // Scroll
    $('html,body').animate({
            scrollTop: $("#" + id).offset().top
        },
        'slow');
}




function deleteAppBoxes() {
    $("#APP").remove()
}

function addAppBoxes(obj) {
    obj.prepend('<div id="APP" class="row"><div>')
    appDiv = $("#APP")
    appDiv.empty()
    addAppBox(appDiv)
    $("#connect").resizable().draggable();
    $("#extras").resizable().draggable();
    $("#appDiv").resizable().draggable();
    //$('#calcDiv').resizable().draggable();
    //calculator();
}

function addAppBox(obj) {
    var html = '<div class = "col-md-3">' +
        '<div id="connect" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Connections</h3>' +
        Connections() +
        '</div>' +
        '<div id="extras" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Extra Info</h3>' +
        Extra_Info() +
        '</div>' +
        '</div>' +
        '<div class = "col-md-9">' +
        '<div id="appDiv" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> !Application!</h3>';

    html += '<iframe width=100% height=100% src="asciiart.html"></iframe>';

    html += '</div>' + '</div>';

    //html += addCalculator();
    

    obj.append(html);

}

function addCalculator(){
    var ret = '<div class = "col-md-3">' +
            '<div id="calcDiv" onclick="sendontop(this);" class="ui-widget-content box">'+
            '<h3 class="ui-widget-header"> Calculator</h3>'+
            '<br>'+
            '<div class="input" id="input"></div>'+
              '<div class="butt">'+
                '<div class="operators">'+
                  '<div>+</div>'+
                  '<div>-</div>'+
                  '<div>&times;</div>'+
                  '<div>&divide;</div>'+
                '</div>'+
                '<div class="leftPanel">'+
                  '<div class="numbers">'+
                    '<div>7</div>'+
                    '<div>8</div>'+
                    '<div>9</div>'+
                  '</div>'+
                  '<div class="numbers">'+
                    '<div>4</div>'+
                    '<div>5</div>'+
                    '<div>6</div>'+
                  '</div>'+
                  '<div class="numbers">'+
                    '<div>1</div>'+
                    '<div>2</div>'+
                    '<div>3</div>'+
                  '</div>'+
                  '<div class="numbers">'+
                    '<div>0</div>'+
                    '<div>.</div>'+
                    '<div id="clear">C</div>'+
                  '</div>'+
                '</div>'+
                '<div class="equal" id="result">=</div>'+
            '</div>'+
            '</div>'+
            '</div>';
    return ret;
}

function Extra_Info() {
    var html = '<p>In linear algebra, the variables in the linear equations are often matrices and other powerful structures!</p>';
    html += '<br><p>Try to make your own linear equation and convert it to magic!</p>'

    return html;
}

function Connections() {
    var html = '<p>Linear equations is the start to linear systems!</p>'
    html += '<p>The process of solving mutiple linear equations is what linear algebra is all about!</p>'
    html += '<p>We use Matrices to solve these linear equations and that is why they are so important and are used everywhere!</p>'

    return html;
}









function deleteTestBoxes() {
    $("#TEST").remove()
}

function addTestBoxes(obj) {
    obj.prepend('<div id="TEST" class="row"><div>')
    testDiv = $("#TEST")
    testDiv.empty()
    addTestBox(testDiv)
    $("#calcDiv").resizable().draggable();
    $("#sampleProbDiv").resizable().draggable();
    $("#toughProbDiv").resizable().draggable();
}

function addTestBox(obj) {
    obj.append(
        '<div class="col-md-5">' +
        '<div id="calcDiv" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Calculator</h3>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-7">' +
        '<div id="sampleProbDiv" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Sample Problem</h3>' +
        '</div>' +
        '<div id="toughProbDiv" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Ready Player One</h3>' +
        '</div>' +
        '</div>'
    )
}






function deleteVideoBoxes() {
    $("#VIDEO").remove()
}

function addVideoBoxes(obj) {
    obj.prepend('<div id="VIDEO" class="row"><div>')
    videoDiv = $("#VIDEO")
    videoDiv.empty()
    addVideoBox(videoDiv)
    $("#videoDiv").resizable().draggable();
}

function addVideoBox(obj) {
    obj.append(
        '<div class = "col-md-2"></div>' +
        '<div class = "col-md-8">' +
        '<div id="videoDiv" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Learn</h3>' +
        "<p>No Video for this section. ¯\\_(ツ)_/¯</p>" +
        '</div>' +
        '</div>' +
        '<div class = "col-md-2"></div>'
    )
}





function deleteTextBoxes() {
    $("#TEXT").remove()
}

function addTextBoxes(obj) {
    obj.prepend('<div id="TEXT" class="row"><div>')
    textDiv = $("#TEXT")
    textDiv.empty()
    addSummaryTextBox(textDiv)
    addReviewTextBox(textDiv)
    $("#summ-text").resizable().draggable();
    $("#rev-text").resizable().draggable();
}

function addReviewTextBox(obj) {
    obj.append(
        '<div class = "col-md-6">' +
        '<div id = "rev-text" onclick = "sendontop(this);" class = "ui-widget-content box" >' +
        '<h3 class = "ui-widget-header" > Review Concepts </h3>' +
        '<div id = "rev-text-content">' +
        ReviewText() +
        '</div>' +
        '</div>' +
        '</div>'
    )
}

function ReviewText() {
    var html = '<p> Nothing to review for now! </p>';
    html += '<p>Congratulations on starting your Linear Algebra Journey!!';
    return html;
}

function addSummaryTextBox(obj) {
    obj.append(
        '<div class = "col-md-6">' +
        '<div id = "summ-text" onclick = "sendontop(this);" class = "ui-widget-content box" >' +
        '<h3 class = "ui-widget-header" > Summary Text </h3>' +
        '<div id = "summ-text-content" >' +
        summaryText() +
        '</div' +
        '</div>' +
        '</div>'
    )
}

function summaryText() {
    var html = '<p>Linear Algebra is simply algebra with "linear" terms! It is that simple :P</p>';
    html += '<p>When thinking of linear terms, think line. Constant terms and single variables to the first power</p>';
    html += '<p>Bascially, no funny business! Just simple terms and with simple operations!</p>'
    return html;
}



function calculator(){
    var input = document.getElementById('input'), // input/output button
      number = document.querySelectorAll('.numbers div'), // number buttons
      operator = document.querySelectorAll('.operators div'), // operator buttons
      result = document.getElementById('result'), // equal button
      clear = document.getElementById('clear'), // clear button
      resultDisplayed = false; // flag to keep an eye on what output is displayed

    // adding click handlers to number buttons
    for (var i = 0; i < number.length; i++) {
      number[i].addEventListener("click", function(e) {

        // storing current input string and its last character in variables - used later
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        // if result is not diplayed, just keep adding
        if (resultDisplayed === false) {
          input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
          // if result is currently displayed and user pressed an operator
          // we need to keep on adding to the string for next operation
          resultDisplayed = false;
          input.innerHTML += e.target.innerHTML;
        } else {
          // if result is currently displayed and user pressed a number
          // we need clear the input string and add the new input to start the new opration
          resultDisplayed = false;
          input.innerHTML = "";
          input.innerHTML += e.target.innerHTML;
        }

      });
    }

    // adding click handlers to number buttons
    for (var i = 0; i < operator.length; i++) {
      operator[i].addEventListener("click", function(e) {

        // storing current input string and its last character in variables - used later
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        // if last character entered is an operator, replace it with the currently pressed one
        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
          var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
          input.innerHTML = newString;
        } else if (currentString.length == 0) {
          // if first key pressed is an opearator, don't do anything
          console.log("enter a number first");
        } else {
          // else just add the operator pressed to the input
          input.innerHTML += e.target.innerHTML;
        }

      });
    }

    // on click of 'equal' button
    result.addEventListener("click", function() {

      // this is the string that we will be processing eg. -10+26+33-56*34/23
      var inputString = input.innerHTML;

      // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
      var numbers = inputString.split(/\+|\-|\×|\÷/g);

      // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
      // first we replace all the numbers and dot with empty string and then split
      var operators = inputString.replace(/[0-9]|\./g, "").split("");

      console.log(inputString);
      console.log(operators);
      console.log(numbers);
      console.log("----------------------------");

      // now we are looping through the array and doing one operation at a time.
      // first divide, then multiply, then subtraction and then addition
      // as we move we are alterning the original numbers and operators array
      // the final element remaining in the array will be the output

      var divide = operators.indexOf("÷");
      while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
      }

      var multiply = operators.indexOf("×");
      while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
      }

      var subtract = operators.indexOf("-");
      while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
      }

      var add = operators.indexOf("+");
      while (add != -1) {
        // using parseFloat is necessary, otherwise it will result in string concatenation :)
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
      }

      input.innerHTML = numbers[0]; // displaying the output

      resultDisplayed = true; // turning flag if result is displayed
    });

    // clearing the input on press of clear
    clear.addEventListener("click", function() {
      input.innerHTML = "";
    });
}

