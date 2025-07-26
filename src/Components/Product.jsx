import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Product.css";
import Paste from "../Assets/Paste.png";
import Paste1 from "../Assets/Paste1.png";
import Paste2 from "../Assets/Paste2.png";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import Fruit from "../Assets/Fruit.png"
import Sweet from "../Assets/Sweet.png"
import Nuts from "../Assets/Nuts.png"
import Water from "../Assets/Water.png"
import Better from "../Assets/Better.png"
import Bakery from "../Assets/Bakery.png"

const Product = () => {
  return (
    <Container className="product-container">
      <h1>Popular Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit
        sint similique laudantium natus maxime est nostrum voluptatibus in cum,
        autem laboriosam. Ea quidem ad consectetur molestias corrupti velit
        nostrum?
      </p>
     <Row  >
      <Col xs={1} sm={2} md={3} lg={3}>
      <div className="product-filters">
        <div className="table6">All</div>
        <div className="table6">Snack</div>
        <div className="table6">Vegetables</div>
        <div className="table6">Fruits</div>
        <div className="table6">Bakery</div>
         <img src={Fruit} alt="Bakehouse Bread" />
      </div>
      <div className="public"> 
       
        {/* <Card>
            <Card.Img variant="top" src={Fruit} alt="Bakehouse Bread" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                
              </Card.Text>
            
            </Card.Body>
          </Card> */}
          </div>

      </Col>

        <Col xs={1} sm={2} md={3} lg={9}>
            <div className="run" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        
          <Card>
            <Card.Img variant="top" src={Paste} alt="Fresh Organic Lemon" />
            <Card.Body>
              <Card.Title>Fresh Organic Lemon</Card.Title>
              <Card.Text>
                Vegetables (4.5) – Fresh organic farm lemons, 500 gm pack
                <br />
                <span className="price">
                  $120.25 <del>$123.25</del>
                </span>
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Paste1} alt="Bakehouse Bread" />
            <Card.Body>
              <Card.Title>Bakehouse Bread</Card.Title>
              <Card.Text>
                Bakery (4.2) – Freshly baked artisan bread loaf
                <br />
                <span className="price">
                  $45.00 <del>$50.00</del>
                </span>
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>

    
          <Card>
            <Card.Img variant="top" src={Paste2} alt="Fresh Organic Lemon" />
            <Card.Body>
              <Card.Title>Fresh Organic Lemon</Card.Title>
              <Card.Text>
                Vegetables (4.5) – Fresh organic farm lemons, 500 gm pack
                <br />
                <span className="price">
                  $120.25 <del>$123.25</del>
                </span>
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
       

      
   
         
          <Card>
            <Card.Img variant="top" src={Sweet} alt="Fresh Organic Lemon" />
            <Card.Body>
              <Card.Title>Fresh Organic Lemon</Card.Title>
              <Card.Text>
                Vegetables (4.5) – Fresh organic farm lemons, 500 gm pack
                <br />
                <span className="price">
                  $120.25 <del>$123.25</del>
                </span>
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Nuts} alt="Fresh Organic Lemon" />
            <Card.Body>
              <Card.Title>Fresh Organic Lemon</Card.Title>
              <Card.Text>
                Vegetables (4.5) – Fresh organic farm lemons, 500 gm pack
                <br />
                <span className="price">
                  $120.25 <del>$123.25</del>
                </span>
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Water} alt="Fresh Organic Lemon" />
            <Card.Body>
              <Card.Title>Fresh Organic Lemon</Card.Title>
              <Card.Text>
                Vegetables (4.5) – Fresh organic farm lemons, 500 gm pack
                <br />
                <span className="price">
                  $120.25 <del>$123.25</del>
                </span>
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
           <Card>
            <Card.Img variant="top" src={Better} alt="Fresh Organic Lemon" />
            <Card.Body>
              <Card.Title>Fresh Organic Lemon</Card.Title>
              <Card.Text>
                Vegetables (4.5) – Fresh organic farm lemons, 500 gm pack
                <br />
                <span className="price">
                  $120.25 <del>$123.25</del>
                </span>
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
           <Card>
            <Card.Img variant="top" src={Bakery} alt="Fresh Organic Lemon" />
            <Card.Body>
              <Card.Title>Fresh Organic Lemon</Card.Title>
              <Card.Text>
                Vegetables (4.5) – Fresh organic farm lemons, 500 gm pack
                <br />
                <span className="price">
                  $120.25 <del>$123.25</del>
                </span>
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
       
       
       
          </div>  
        </Col>
      </Row>

    </Container>
     
  );
};

export default Product;
