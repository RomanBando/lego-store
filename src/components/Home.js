import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import api from '../api';
import './Home.css'

export default function Home() {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    api.get('/products/top', {
      params: {
        limit: 4
      }
    })
      .then((response) => setTopProducts(response.data))
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <Carousel variant="dark" className="w-75 mx-auto">
      {topProducts.map(product => (
        <Carousel.Item key={nanoid()}>
          <img 
            className="d-block mx-auto top-lego"
            src={product.main_picture}
            alt={product.product_name}
          />
           <figcaption className="figure-caption caption">
              <h5>{product.product_name}</h5>
            </figcaption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

