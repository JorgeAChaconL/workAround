import { getRoles, getCompanies } from "./salaryData.js";
import {
  getAverageSalaryByRole,
  getAverageSalaryByCompany,
  getSalaryAtCompany,
  getIndustryAverageSalary,
} from "./workAroundModule.js";

//Get the data from the salaryData.js file
const companies = getCompanies();
const roles = getRoles();

//Create Inputs for the companies and roles;
renderInputButtons(companies, "company");
renderInputButtons(roles, "role");

//Create a new Section with ratio inputs based on data provided in labels arrays;
function renderInputButtons(labels, groupName) {
  const container = document.createElement("section");
  container.setAttribute("id", `${groupName}Inputs`);

  let header = document.createElement("h3");
  header.innerText = `Select a ${groupName};`;
  container.appendChild(header);

  // Create a label for each item in the array
  labels.forEach((label) => {
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "option");

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "radio");
    inputElement.setAttribute("name", groupName);
    inputElement.setAttribute("value", label);
    divElement.appendChild(inputElement);

    //Create label for the radio input
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);

    inputElement.addEventListener("click", updateResults);

    container.appendChild(divElement);
  });

  document.querySelector("main")?.appendChild(container);
}

function updateResults() {
  //get current selected role and company
  const company = document.querySelector('input[name="company"]:checked').value;
  const role = document.querySelector('input[name="role"]:checked').value;

  //Verify that the role and company are selected
  if (!company || !role) {
    return;
  }

  //Use workaround module to calculate the data needed.
  const averageSalaryByRole = getAverageSalaryByRole(role);
  const averageSalaryByCompany = getAverageSalaryByCompany(company);
  const salary = getSalaryAtCompany(role, company);
  const industryAverageSalary = getIndustryAverageSalary();

  //Start with the render process to display the data.
  document.getElementById(
    "salarySelected"
  ).innerText = `The salary for a ${role} at ${company} is $${salary}`;
  document.getElementById(
    "salaryAverageByRole"
  ).innerText = `The industry average salary for a ${role} is $${averageSalaryByRole}`
  document.getElementById(
    "salaryAverageByCompany"
  ).innerText = `The average salary at ${company} is \$${averageSalaryByCompany}`;
  document.getElementById(
    "salaryAverageIndustry"
  ).innerText = `The average salary in the Tech industry is \$${industryAverageSalary}`;
}