var questions = [
    'Hi there, I am snack May i know your name ?',
    'Right now we have so many popular courses would you like to see some ?',
    'Would you like to buy?',
    'Would yo like to purchase more?',
    'It was nice talking you :)'
];
var num = 0;

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
output.innerHTML = questions[num];

function showResponse() {
  var input = inputBox.value;
  if(inputBox.value == "") {
    
  }else {
  if(num == 0) {
    output.innerHTML = `Hii ${input}`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 1) {
    output.innerHTML = ` We are offering Special courses of web devlopment at 50% off`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 3 secs");
    ++num;
    setTimeout(changeQuestion, 3000);
  } else if(num == 2) {
    output.innerHTML = `Thank you for puchasing ! with us`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 3) {
    output.innerHTML = `That is okay ! `;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  }
  }
}

function changeQuestion() {
  inputBox.setAttribute("placeholder", "Enter your response");
  output.innerHTML = questions[num];
  if(num == 4) {
    inputBox.style.display = "none";
  }
}

$(document).on('keypress', function(e) {
  if(e.which == 13) {
    showResponse();
  }
})

$( "#ans" ).focus();
