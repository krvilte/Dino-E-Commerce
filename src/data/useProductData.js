import { useEffect, useState } from 'react';

async function fetchProductData() {
  try {
    const res = await fetch('../src/data/products.json');
    if (!res.ok) {
      throw new Error('Newtork response was not OK!');
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.error('Something is wrong', error);
  }
}

export default function useProductData() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchProductData();
      setProductsData(result);
    };

    getData();
  }, []);

  return productsData;
}
