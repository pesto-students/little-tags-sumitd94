const baseUrl = 'https://fakestoreapi.com/products';

const productService = {
  getAllProduct() {
    return new Promise((resolve, reject) => {
      fetch(baseUrl, {
        headers: {},
        referrerPolicy: 'strict-origin-when-cross-origin',
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
