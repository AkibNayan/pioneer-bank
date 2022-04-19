
//Login Button Event Handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){

    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";

})
//deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){

    const depositNumber = getInputNumber('depositAmount')

    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;

    updateSpanText('currentDeposit', depositNumber);

    //Total Balance Count
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = "";
    

})

// withdraw button event handler
const widthdrawBtn = document.getElementById('addWithdraw');
widthdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount');
    //Total Withdraw Count
    updateSpanText('currentWithdraw', withdrawNumber);
    
    //Total Balance count
    updateSpanText('currentBalance', -1 * withdrawNumber);
    
    document.getElementById('withdrawAmount').value = "";

})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, amountNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber + amountNumber;
    document.getElementById(id).innerText = totalAmount;
}
