const baseUrl = 'https://backendmasters-littletags.netlify.app/products';

const productService = {
  getAllProduct(category) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/${category}`, {
        headers: {
          Origin: 'https://backendmasters-littletags.netlify.app',
        },
        credentials: 'include',
        method: 'GET',
        mode: 'cors',
      }).then(async (res) => {
        const json = await res.json();
        resolve(json);
      }).catch((err) => {
        reject(new Error(err));
      });
    });
  },
};

export default productService;
