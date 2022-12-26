import { nanoid } from "nanoid";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import heart from "./images/heart.png";
import cart from "./images/cart.png";
import './ProductsLine.css'

export default function ProductsLine(props) {
  const products = props.products;
  const currentPage = props.currentPage;
  const cardsPerPage = props.cardsPerPage;
  const firstRowIndex = (currentPage - 1) * cardsPerPage;
  const lastRowIndex = currentPage * cardsPerPage;
  
  const rows = products.slice(firstRowIndex, lastRowIndex)
    .map(product => (
      <Card style={{ width: '18rem' }} className="card-box" key={nanoid()}>
        <Card.Img variant="top" className="card-img" src={product.main_picture} />
        <Card.Body>
          <Card.Title>
            <Container>
              <Row>
                <p>{product.product_name}</p>
                <p>${product.price.toLocaleString()}</p>
              </Row>
              <Row>
                <Col>
                  <Button variant="white" className="card-buttons"><img className="card-icon" src={heart} alt="Add to wishlist"/></Button>
                </Col>
                <Col xs lg="6">
                  <Button variant="white"><img className="card-icon" src={cart} alt="Add to cart"/></Button>
                </Col>
              </Row>
            </Container>
          </Card.Title>
        </Card.Body>
      </Card>
    )
  );

  return (
    <div className="row">
      {rows}
    </div>
  );  
}