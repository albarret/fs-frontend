const companyServices = {
  findAllCompanies: () => {
    return fetch("http://localhost:3001/api/company").then((response) => {
      return response.json();
    });
  },
  createCompany: (company) => {
    return fetch("http://localhost:3001/api/company", {
      method: "POST",
      body: JSON.stringify(company),
    }).then((response) => {
      return response.json();
    });
  },
  updateCompany: (companyId) => {
    return fetch(`http://localhost:3001/api/company/${companyId}`, {
      method: "PUT",
    }).then((response) => {
      return response.json();
    });
  },
  deleteCompany: (companyId) => {
    return fetch(`http://localhost:3001/api/company/${companyId}`, {
      method: "DELETE",
    }).then((response) => {
      return response.json();
    });
  },
};

export default companyServices;
