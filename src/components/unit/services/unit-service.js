const unitServices = {
  findAllUnits: () => {
    return fetch("http://localhost:3001/api/unit").then((response) => {
      return response.json();
    });
  },
  createUnit: (unit) => {
    return fetch("http://localhost:3001/api/unit", {
      method: "POST",
      body: JSON.stringify(unit),
    }).then((response) => {
      return response.json();
    });
  },
  updateUnit: (unitId) => {
    return fetch(`http://localhost:3001/api/unit/${unitId}`, {
      method: "PUT",
    }).then((response) => {
      return response.json();
    });
  },
  deleteUnit: (unitId) => {
    return fetch(`http://localhost:3001/api/unit/${unitId}`, {
      method: "DELETE",
    }).then((response) => {
      return response.json();
    });
  },
};

export default unitServices;
