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

// Use insert() function to insert the number in textview.
function insert(num) {
  var currentExp = document.form1.textview.value;

  // Check if the clicked button is an operator and if no number is selected
  if ((['/', '*', '-', '+', '.'].includes(num)) && (!currentExp.match(/\d/))) {
    alert("Please select a number first");
    return;
  }

  document.getElementById('textview').value = currentExp + num;
}

// Use equal() function to return the result based on passed values.
function equal() {
  var exp = document.getElementById('textview').value;

  if (exp) {
    var result;
    result = eval(exp);

    document.getElementById('textview').value = result;
  }
}

// Here, we create a backspace() function to remove the number at the end of the numeric series in textview.
function backspace() {
  var exp = document.getElementById('textview').value;
  document.getElementById('textview').value = exp.substring(0, exp.length - 1); // removes the last character in exp
}
