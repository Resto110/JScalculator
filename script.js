var lastResult = null;


// Attach the event listener to the input element
document.getElementById('textview').addEventListener('keydown', function (event) {
  var key = event.key;

  // Check if the pressed key is a number, operator, or Enter key
  if (/[d+\-*/.]/.test(key)) {
    // Prevent the default behavior for all keys except Enter
    if (key !== 'Enter') {
      event.preventDefault();
    }
    insert(key);
  } else if (key === 'Enter') {
    // Prevent the default behavior for the Enter key
    event.preventDefault();
    equal();
  }
});

// Use insert() function to insert the number in textview
function insert(char) {
  var currentExp = document.form1.textview.value;

  // When I click on an operator
  if (['/', '*', '-', '+', '.'].includes(char)) {
    // check if the exp already contain an operator
    if (currentExp.match(/[+\-*/.]/)) {
      alert("Only one operator is allowed between numbers");
      return;
    }
    // Check if exp contains a number before inserting the operator
    if (!currentExp.match(/\d/)) {
      alert("Please select a number first");
      return;
    }
  }

  document.getElementById('textview').value = currentExp + char;
}

// Clear the textview
function clearTextView() {
  document.getElementById('textview').value = '';
}

// Use equal() function to return the result based on passed values
function equal() {
  var exp = document.getElementById('textview').value;

  if (exp) {
    lastResult = eval(exp);
    document.getElementById('textview').value = lastResult;

    var buttons = document.getElementsByClassName('btn');

    // Divide by 0 checker 
    if (isNaN(lastResult) || lastResult === Infinity || lastResult === -Infinity) {
      // Error Screen
      document.body.classList.add('error');

      // Error message
      setTimeout(function () {
        alert("Good Job! You just broke the calculator. Please reload");
      }, 500);

      // Disable all buttons
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  }
}


// Create a backspace() function to remove the number at the end of the numeric series in textview
function backspace() {
  var exp = document.getElementById('textview').value;
  document.getElementById('textview').value = exp.substring(0, exp.length - 1); // removes the last character in exp
}