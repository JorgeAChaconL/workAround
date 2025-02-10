import { getDataByRole, getDataByCompany } from "./salaryData";
import salaryData from "./salaryData";

//Replace empty array with imported data functions/values;

const getAverageSalaryByRole = (role) => {
    const roleData = getDataByRole(role);
    const salairesOfRole = roleData.map(obj => obj.salary);
    return calculateAverage(salairesOfRole);
}

//Replace empty array with imported data functions/values;

const getAverageSalaryByCompany = (company) => {
    const companyData = getDataByCompany(company);
    const salariesAtCompany = companyData.map(obj => obj.salary);
    return calculateAverage(salariesAtCompany);
};

//Replace empty array with imported data functions/values;
const getSalaryAtCompany = (role, company) => {
    const companyData = getDataByCompany(company);
    const roleAtCompany = companyData.find(obj => obj.role === role);
    return roleAtCompany.salary;
}

const getIndustryAverageSalary = () => {
    const allSalaries = [].map(obj => obj.salary);
    return calculateAverage(allSalaries);
}

//Calculate average fucntion for all the above functions to use;
function calculateAverage(arrayOfNumbers){
    let total = 0;
    arrayOfNumbers.forEach(number => total += number);
    return (total /  arrayOfNumbers.length).toFixed(2);
}

export { getAverageSalaryByRole, getAverageSalaryByCompany, getSalaryAtCompany, getIndustryAverageSalary};