import React, { useEffect, useState } from "react";
import { Container, Figure } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const productArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
  },
  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 100,
  },
];

const ProductDetails = () => {
  const params = useParams();
  const [picsrc, setPicsrc] = useState(
    `/Images/${params.productId}/image1.jpg`
  );
  const [productDetail, setProductDetail] = useState({
    title: "",
    price: "",
  });
  const showPicHandler = (event) => {
    setPicsrc(event.target.src);
  };

  useEffect(() => {
    for (const key in productArr) {
      if (productArr[key].id === params.productId) {
        setProductDetail((prevDetail) => {
          return (prevDetail = {
            title: productArr[key].title,
            price: productArr[key].price,
          });
        });
      }
    }
  }, [params.productId]);

  return (
    <>
      <h1 className="detail">Product detail</h1>
      <Container className="pdetails">
        <Container className="product-pics">
            <Figure className="pic">
              <Figure.Image
                width={100}
                height={100}
                alt="171x180"
                src={`/Images/${params.productId}/image1.jpg`}
                onClick={showPicHandler}
              />
            </Figure>
            <Figure className="pic">
              <Figure.Image
                width={100}
                height={100}
                alt="171x180"
                src={`/Images/${params.productId}/image2.jpg`}
                onClick={showPicHandler}
              />
            </Figure>
            <Figure className="pic">
              <Figure.Image
                width={100}
                height={100}
                alt="171x180"
                src={`/Images/${params.productId}/image3.jpg`}
                onClick={showPicHandler}
              />
            </Figure>
            <Figure className="pic">
              <Figure.Image
                width={100}
                height={100}
                alt="171x180"
                src={`/Images/${params.productId}/image4.jpg`}
                onClick={showPicHandler}
              />
            </Figure>
        </Container>
        <Container className="product-img">
            <Figure>
              <Figure.Image
                width={500}
                height={500}
                alt="171x180"
                src={picsrc}
              />
            </Figure>
        </Container>
        <Container className="review">
          <div>
            <h1>{productDetail.title}</h1>
            <h2>{`$${productDetail.price}`}</h2>
            <div>
              <p>Product Ratings & Reviews</p>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default ProductDetails;
