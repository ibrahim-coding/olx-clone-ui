import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import { useGetProductsQuery } from "../../features/products/productsApiSlice";
import Hero from "../../components/hero/Hero";
import Categories from "../../components/allcategories/categories";
import Footer from "../../components/footer/footer";

function Home() {
  const { data, isLoading, error } = useGetProductsQuery();

  const [show, setShow] = useState(false);

  return (
    <div className="main-conatainer">
      <Hero />
      <Categories />
      
      <Row className="gx-5">
        {data && data?.length
          ? data.map((product) => {
              return (
                <Col xs={12} sm={6} md={4} lg={4}>
                  <Card
                    key={product._id}
                    style={{ width: "18rem", marginBottom: 10 }}
                  >
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                   
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          : null}
      </Row>
      <Footer />
    </div>
  );
}

export default Home;
