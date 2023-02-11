function getInputValueByID(inputID) {
    const inputElement = document.getElementById(inputID);
    const inputElemmentStr = inputElement.value;
    const inputElementNumber = parseFloat(inputElemmentStr);
    return inputElementNumber;
}

function getElementByID(elementID) {
    const element = document.getElementById(elementID);
    const elementStr = element.innerText;
    const elementNumber = parseFloat(elementStr);
    return elementNumber;
}

function setElementByID(elementId, setVariable) {
    const element = document.getElementById(elementId);
    element.innerText = setVariable;
}

// const totalincome = getInputValueByID('income-field');

// Expenses Calculate

document.getElementById('calculate-btn').addEventListener('click', function () {

    // Expense
    const foodCost = getInputValueByID('food-field');
    const rentCost = getInputValueByID('rent-field');
    const clothesCost = getInputValueByID('clothes-field');

    const totalExpenses = foodCost + rentCost + clothesCost;

    if(isNaN(totalExpenses)){
        alert('Enter Valid Number in all Field')
        return
    }
    else{
        setElementByID('total-expenses', totalExpenses);
    }

    // income
    const totalincome = getInputValueByID('income-field');
    // balance
    const balance = totalincome - totalExpenses;
    setElementByID('balance-field', balance)
})

//Savings Calculation

document.getElementById('save-btn').addEventListener('click', function(){
    const totalincome = getInputValueByID('income-field');
    
    const savingsPercentage = getInputValueByID('percentage-field');

    if(isNaN(savingsPercentage)){
        alert('Enter Valid Percentage Number')
        return
    }

    const savingsTotal = totalincome*(savingsPercentage/100);

    console.log(savingsTotal);

    setElementByID('savings-amount', savingsTotal);

    // blanace element

    const currentBalance = getElementByID('balance-field');

    const remainingBalance = currentBalance-savingsTotal;

    setElementByID('r-balance', remainingBalance);
})