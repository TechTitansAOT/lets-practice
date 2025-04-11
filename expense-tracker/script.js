const form = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const inputAmount = document.getElementById('amount');
const typeSelect = document.getElementById('type');
const transactionList = document.getElementById('transaction-list');
const balanceDisplay = document.getElementById('balance');

form.addEventListener("submit", (e)=>{
    e.preventDefault(); //prevents default refresh
    const description = descriptionInput.value.trim();
    const amount = parseFloat(inputAmount.value);
    const type = typeSelect.value;

    if(description=== "" || isNaN(amount) || amount <= 0){
        alert("Please enter valid options");
        return;
    }
    //create transaction object
    const transaction= { description, amount, type };

    //create the table
    addTransactionToTable(transaction);

    //update balance
    updateBalance(transaction);

    //clear the form
    descriptionInput.value = "";
    amountInput.value = "";
});

function addTransactionToTable(transaction) {
    //create table row
    const row = document.createElement("tr");

    //create table cells for description, amount and type
    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = transaction.description;

    const amountCell = document.createElement("td");
    amountCell.textContent= `Rs ${transaction.amount.toFixed(2)}`;

    const typeCell = document.createElement("td");
    typeCell.textContent = transaction.type === "income" ? "Income": "Expense";
    typeCell.style.color =transaction.type ==="income"? "green": "red";

    //append cells to row
    row.appendChild(descriptionCell);
    row.appendChild(amountCell);
    row.appendChild(typeCell);


    //append row to table
    transactionList.appendChild(row);
}

let balance = 0;
function updateBalance(transaction){
    if(transaction.type ==="income")
        balance+= transaction.amount;
    else 
        balance-= transaction.amount;

    //display the balance
    balanceDisplay.textContent=`Rs ${balance.toFixed(2)}`;
}