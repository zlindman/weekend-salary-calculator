console.log('hello world');
let currentIndex = 1;
let totalSum = 0;
function submitForm(event){
    event.preventDefault();
    console.log('Form Submitted!');
    let employeeTable = document.querySelector('#employeeData');
    let employeeName = document.querySelector('#firstNameInput').value + ' ' + document.querySelector('#lastNameInput').value;
    let employeeIdentification = document.querySelector('#idInput').value;
    let employeeJobTitle = document.querySelector('#titleInput').value;
    let employeeAnnualSalary = parseFloat(document.querySelector('#annualSalaryInput').value);
    employeeTable.innerHTML += `
    <tr>
        <td>${employeeName}</td>
        <td>${employeeIdentification}</td>
        <td>${employeeJobTitle}</td>
        <td>${employeeAnnualSalary}</td>
    </tr>
    `
    currentIndex +=1;
    totalSum += employeeAnnualSalary;
    document.getElementById('totalAnnualSalaries').innerHTML = `
    Total Annual Salaries: ${totalSum}
    `;
}

function clearForm(event){
    event.preventDefault();
    console.log('Form Cleared!');
    document.getElementById("employeeForm").reset();
}

function addMonthlySalaries(){
    console.log('Calculating total...');
    let monthlyTotal = totalSum / 12;
    document.getElementById('total').innerHTML = `
    ${monthlyTotal}
    `;
    if (monthlyTotal > 20000){
        document.getElementById('totalMonthly').classList.add('overBudget');
    }
    else {
        document.getElementById('totalMonthly').classList.remove('redBackground');
    }
}