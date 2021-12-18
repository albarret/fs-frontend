const assetServices = {
  findAllAssets: () => {
    return fetch("http://localhost:3001/api/asset");
  },
  createAsset: (asset) => {
    return fetch("http://localhost:3001/api/asset", {
      method: "POST",
      body: JSON.stringify(asset),
    });
  },
  updateAsset: (assetId) => {
    return fetch(`http://localhost:3001/api/asset/${assetId}`, {
      method: "PUT",
    });
  },
  deleteAsset: (assetId) => {
    return fetch(`http://localhost:3001/api/asset/${assetId}`, {
      method: "DELETE",
    });
  },
};

export default assetServices;
