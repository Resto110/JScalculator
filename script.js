// Use insert() function to insert the number in textview.
function insert(num) {
    var currentExp = document.form1.textview.value;
  
    // Check if the clicked button is an operator and if no number is selected
    if ((['/', '*', '-', '+', '.'].includes(num)) && (!currentExp.match(/\d/))) {
      alert("Please select a number first");
      return;
    }
  
    document.form1.textview.value = document.form1.textview.value + num;
  }
  
  // Use equal() function to return the result based on passed values.
  function equal() {
    var exp = document.form1.textview.value;
    if (exp) {
      // Check if the clicked button is "=" 
      if (exp.endsWith('=')) {
        // Repeat last operation
        repeatLastOperation();
      } else {
        // store the last operation and result
        var lastOperation = exp;
        var result = eval(exp);
  
        // update the textview with the result
        document.form1.textview.value = result;
  
        // store the last operation and result for repeating
        document.form1.lastOperation.value = result + '=';
        document.lastResult.value = result;
      }
  
      // update the textview with the result
      document.form1.textview.value = result;
  
      // store the last operation and result for repeating
      document.form1.lastOperation.value = lastOperation;
      document.form1.lastResult.value = result;
    }
  }
  
  // repeat the last operation when the "=" button is pressed again
  function repeatLastOperation() {
    var lastOperation = document.form1.lastOperation.value;
    var lastResult = document.form1.lastResult.value;
  
    if (lastOperation && lastResult !== undefined) {
      // update the textview with the last operation
      document.form1.textview.value = lastOperation + lastResult + '=';
    }
  }
  
  // Here, we create a backspace() function to remove the number at the end of the numeric series in textview.
  function backspace() {
    var exp = document.form1.textview.value;
    document.form1.textview.value = exp.substring(0, exp.length - 1); // removes the last character in exp
  }
  