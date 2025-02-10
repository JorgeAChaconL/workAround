import { getRoles, getCompanies } from "./salaryData.js";
import { getAverageSalaryByRole, getAverageSalaryByCompany, getSalaryAtCompany, getIndustryAverageSalary } from "./workAroundModule.js";

//Get the data from the salaryData.js file
const companies = getCompanies();
const roles = getRoles();

//Create Inputs for the companies and roles;
renderInputButtons(companies, 'company');
renderInputButtons(roles, 'role');

//Create a new Section with ratio inputs based on data provided in labels arrays;
function renderInputButtons(labels, groupNane){
    const container = document.createElement('section');
    container.setAttribute('id',`${groupNane}Inputs`);

    let header = document.createElement('h3');
    header.innerText = `Select a ${groupNane};`;
    container.appendChild(header);

    // Create a label for each item in the array
    labels.array.forEach(label => {
        let divElement = document.createElement('div');
        divElement.setAttribute('class','option');

        let inputElement = document.createElement('input');
        inputElement.setAttribute('type','radio');
        inputElement.setAttribute('name', groupNane);
        inputElement.setAttribute('value', label);
        divElement.appendChild(inputElement);


        //Create label for the radio input
        let labelElement = document.createElement('lalel');
        labelElement.setAttribute('for', label);
        labelElement.innerText = label;
        divElement.appendChild(labelElement);

        inputElement.addEventListener('click', updateResults);

        container.appendChild(divElement);
    });    

    document.querySelector('main').appendChild(container);
}