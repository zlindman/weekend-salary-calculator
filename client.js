console.log('hello world');
let currentIndex = 1;
function submitForm(event){
    event.preventDefault();
    console.log('Form Submitted!');
    let employeeTable = document.querySelector('#employeeData');
    let employeeName = document.querySelector('#firstNameInput').value + ' ' + document.querySelector('#lastNameInput').value;
    let employeeIdentification = document.querySelector('#employeeID').value;
    let employeeJobTitle = document.querySelector('#jobTitle').value;
    let employeeAnnualSalary = document.querySelector('#annualSalary').value;
    employeeTable.innerHTML += `
    <tr>
        <td>${employeeName}</td>
        <td>${employeeIdentification}</td>
        <td>${employeeJobTitle}</td>
        <td>${employeeAnnualSalary}</td>
    </tr>
    `
    currentIndex +=1;
}

function clearForm(event){
    event.preventDefault();
    console.log('Form Cleared');
    document.getElementById("employeeForm").reset();
}