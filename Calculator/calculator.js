function addToInput(value) {
    document.getElementById('input').value += value;
}

// function to perform calculation
function Cal() {
    var input = document.getElementById('input').value;
    var res = eval(input);        // eval() to evaluate input values
    document.getElementById('input').value = res;  // storing the evaluated result in the input box.
}

// function to clear-out values inside the input-box
function clearOut() {
    document.getElementById('input').value = '';
}