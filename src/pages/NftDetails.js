import React from "react";
import CommonSection from "../components/ui/common-section/CommonSection";
import { NFT__DATA } from "../assets/data/data";
import { Col, Container, Row } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import LiveAuction from "../components/ui/live-auction/LiveAuction";
import "../styles/nft-details.css";

const NftDetails = () => {
  const { id } = useParams();
  const singleNFT = NFT__DATA.find((item) => item.id === id);
  console.log(singleNFT);
  console.log(id);
  return (
    <>
      <CommonSection title={singleNFT.title} />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img
                src={singleNFT.imgUrl}
                alt=""
                className="w-100 single__nft-img"
              />
            </Col>
            <Col lg="6">
              <div className="single__nft__content">
                <h2>{singleNFT.title}</h2>

                <div className="d-flex align-items-center justify-content-between my-4">
                  <div className="d-flex align-items-center gap-4 single__nft-seen">
                    <span>
                      <i class="ri-eye-line"></i>234
                    </span>
                    <span>
                      <i class="ri-heart-line"></i>123
                    </span>
                  </div>

                  <div className="d-flex align-items-center gap-2 single__nft-more">
                    <span>
                      <i class="ri-send-plane-line"></i>
                    </span>
                    <span>
                      <i class="ri-more-2-line"></i>
                    </span>
                  </div>
                </div>

                <div className="nft__creator d-flex gap-3 align-items-center">
                  <div className="creator__img">
                    <img src={singleNFT.creatorImg} alt="" className="w-100" />
                  </div>

                  <div className="creator__details">
                    <p>Created By</p>
                    <h6>{singleNFT.creator}</h6>
                  </div>
                </div>

                <p className="my-4">{singleNFT.desc}</p>
                <button className="singleNft-btn d-flex gap-2 align-items-center w-100">
                  <Link to="/wallet">
                    <i class="ri-shopping-bag-line"></i>Place a Bid
                  </Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <LiveAuction />
    </>
  );
};

export default NftDetails;
