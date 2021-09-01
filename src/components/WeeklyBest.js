import React from "react";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { WeeklyBestContext } from "../contexts/WeeklyBestContext";
import ProductItem from "./ProductItem";

const WeeklyBest = () => {
  const { weeklyBests } = useContext(WeeklyBestContext);

  return (
    <div className="weekly-best">
      <Container>
        <h3 className="weekly-best__title home-section__title">Bán chạy hàng tuần</h3> 
        <Row>
          {weeklyBests.map((product) => (
            <Col xs="6" md="4" lg="4" xl='3'key={product.id} className='p-3'>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WeeklyBest;
