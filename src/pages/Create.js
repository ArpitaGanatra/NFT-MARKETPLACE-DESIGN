import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/ui/common-section/CommonSection";
import NftCard from "../components/ui/nft-card/NftCard";
import img from "../assets/images/img-02.jpg";
import avatar from "../assets/images/ava-02.png";
import "../styles/create.css";

const item = {
  id: "02",
  title: "Sir Lion Swag",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
  imgUrl: img,
  creator: "Trista Francis",
  creatorImg: avatar,
  currentBid: 5.09,
};

const Create = () => {
  return (
    <>
      <CommonSection title="Create" />
      <Container className="mt-50">
        <Row>
          <Col lg="3" md="4" sm="6">
            <h5 className="mb-4 text-light">Preview Item</h5>
            <NftCard item={item} />
          </Col>

          <Col lg="9" md="8" sm="6">
            <div className="create__item">
              <form>
                <div className="form__input">
                  <label htmlFor="">Upload File</label>
                  <input type="file" className="upload__input" />
                </div>

                <div className="form__input">
                  <label htmlFor="">Price</label>
                  <input
                    type="number"
                    placeholder="Enter price for one item (ETH)"
                  />
                </div>

                <div className="form__input">
                  <label htmlFor="">Minimum Bid</label>
                  <input type="number" placeholder="Enter minimum bid" />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="form__input w-50">
                    <label htmlFor="">Starting Date</label>
                    <input type="date" />
                  </div>

                  <div className="form__input w-50">
                    <label htmlFor="">Expiration Date</label>
                    <input type="date" />
                  </div>
                </div>

                <div className="form__input">
                  <label htmlFor="">Title</label>
                  <input type="text" placeholder="Enter title" />
                </div>

                <div className="form__input">
                  <label htmlFor="">Description</label>
                  <textarea
                    type="text"
                    rows="7"
                    placeholder="Enter description"
                    className="w-100"
                  />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Create;
