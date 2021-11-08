const AMMOUNT = document.querySelector("#ammount");
const RANGE = document.getElementById("loan-ammount");
const CALCULATE = document.querySelector('.submit-button');
const LOAN_LENGTH = document.querySelector('.loan-length');
const INT_RATE = document.querySelector('#int-rate');
const RESULT = document.querySelector('.results');
const RESULT_CONTAINER = document.querySelector('.results-container');
const EXIT = document.querySelector('.exit-button');


// Set range amount in DOM
myFunction = (e) => {
    AMMOUNT.textContent = `$${e}`;
}

// Get the checked radio value
const RADIO_VALUE = function getRadioValue() {
    let ele = document.getElementsByName('loanLength');
    let result;

    for (let i = 0; i < ele.length; i++) {
        if(ele[i].type = 'radio') {
            if (ele[i].checked) {
                result = ele[i].value;
            }
        }
    }
    return result;
}

// Calculate with inputs
calculateLoan = (principal, length, rate) => {
    let decRate = rate / 100;

    // Ammortization formula
    let monthlyCost = (decRate * principal) / (12 * (1 - Math.pow( (1 + (decRate / 12)), (-12 * length) ) ))

    return monthlyCost.toFixed(2);
}

CALCULATE.addEventListener('click', (e) => {
    e.preventDefault();

    // Convert inputs to numbers
    let cost = parseInt(AMMOUNT.textContent.toString().slice(1));
    let loanLength = parseInt(RADIO_VALUE());
    let intRate = parseFloat(INT_RATE.value);
    
    // Cals calculate function
    let monthlyPayment = calculateLoan(cost, loanLength, intRate);


    // Enter results into DOM
    if (!isNaN(monthlyPayment)) {
        RESULT_CONTAINER.classList.add('active');
        RESULT.textContent = `Your monthly payment before home insurance and property taxes is $${monthlyPayment}`
    }
})

EXIT.addEventListener('click', () => {
    RESULT_CONTAINER.classList.remove('active');
})
