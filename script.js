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
function insert(num) {
  var currentExp = document.form1.textview.value;

  // Check if the clicked button is an operator and if no number is selected
  if (['/', '*', '-', '+', '.'].includes(num) && !currentExp.match(/\d/)) {
    alert("Please select a number first");
    return;
  }

  document.getElementById('textview').value = currentExp + num;
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

    var buttons = document.getElementById('btn');

    // Divide by 0 checker 
    if (isNaN(lastResult)) {
      // Error Screen
      document.body.classList.add('error');

      // Error message
      setTimeout(function () {
        alert("Good Job! You just broke the calculator. Please reload");
      }, 500);

      textview.disabled = true;

      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }

    // Memorize the expression and result
    memorizeExpression(exp, lastResult);
  }
}

// New function to memorize expression and result
function memorizeExpression(expression, result) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "PHP/store_expression.php?expression=" + encodeURIComponent(expression) + "&result=" + encodeURIComponent(result), true);
  xhr.send();
}

// Create a backspace() function to remove the number at the end of the numeric series in textview
function backspace() {
  var exp = document.getElementById('textview').value;
  document.getElementById('textview').value = exp.substring(0, exp.length - 1); // removes the last character in exp
}

// Store the last result
function storeLastResult() {
  return lastResult;
}

// Display the last result on the screen
function showLastResultOnDisplay() {
  var storedResult = storeLastResult();
  if (storedResult !== null) {
    document.getElementById('textview').value = storedResult;
  }
}
