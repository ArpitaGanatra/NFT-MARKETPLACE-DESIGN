import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NFT__DATA } from "../../../assets/data/data";
import NftCard from "../nft-card/NftCard";
import "./trending-section.css";

const TrendingSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h3 className="trending__title">Trending</h3>
          </Col>
          {NFT__DATA.slice(0, 8).map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="mb-5">
              <NftCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrendingSection;
