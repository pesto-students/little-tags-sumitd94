const baseUrl = 'https://api-littletags.herokuapp.com/products';

const getAllProduct = async (category) => {
  try {
    const res = await fetch(`${baseUrl}/${category}`, {
      headers: {
        Origin: 'https://backendmasters-littletags.netlify.app',
      },
      credentials: 'include',
      method: 'GET',
      mode: 'cors',
    });

    const json = res.json();
    return json;
  } catch (err) {
    throw new Error(err);
  }
};

export default getAllProduct;
