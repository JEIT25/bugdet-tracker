let transactHistory = document.querySelector('section .transaction-history');
let balance = document.querySelector('.balance');
let submitBtn = document.querySelector('.submit-entry');
let entryType = document.querySelector('.type');
let userInputAmount = document.querySelector('.amount');
let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
let todayDate = `${day}/0${month}/${year}`;

function createEntry(button) {
    button.addEventListener("click", () => {
        let section = document.createElement('section');
        let type = document.createElement('p');
        let amount = document.createElement('p');
        let date = document.createElement('p');
        if (entryType.value === 'Savings') {
            amount.classList.add('color2');
            balance.innerHTML = parseFloat(balance.innerText) + parseFloat(userInputAmount.value);
            section.classList.add('data');
            type.innerText = `Amount ${entryType.value}`;
            amount.innerText = `Type ${userInputAmount.value}`;
            date.innerText = `Date ${todayDate}`;
            section.appendChild(type);
            section.appendChild(amount);
            section.appendChild(date);
            transactHistory.appendChild(section);
        } else if (entryType.value == 'Expense' && parseFloat(userInputAmount.value) < parseFloat(balance.innerText)) {
            balance.innerHTML = parseFloat(balance.innerText) - parseFloat(userInputAmount.value);
            amount.classList.add('color1');
            section.classList.add('data');
            type.innerText = `Amount ${entryType.value}`;
            amount.innerText = `Type ${userInputAmount.value}`;
            date.innerText = `Date ${todayDate}`;
            section.appendChild(type);
            section.appendChild(amount);
            section.appendChild(date);
            transactHistory.appendChild(section);
        } else {
            alert('Not ENough Balance')
        }
        userInputAmount.value = '';
    });
};

createEntry(submitBtn);
