import { useEffect, useState } from "react";
import ProductsLine from "./ProductsLine";
import Pagination from "./Pagination";
import './ProductsPage.css'
import api from "../api";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const cardsPerPage = 4;
  const numOfPages = Math.ceil(products.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const result = async () => {
      const resp = await api.get('/products');
      // .then((response) => setProducts(response.data))
      const data = await resp.json();
      setProducts(data);
    }
    result()
    // api.get('/products')
    //   .then((response) => setProducts(response.data))
    //   .catch((err) => {
    //     console.log(err);
    //   })
  }, []);

  console.log('prods', products)

  return (
    <div>
      <h1>{products[0].product_name}</h1>
      <div>
        <ProductsLine 
          products={products}
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
        />
      </div>
      <div className="pagination-pos">
        <Pagination 
          numOfPages={numOfPages} 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

    </div>
  );
}