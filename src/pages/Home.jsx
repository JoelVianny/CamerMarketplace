import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { MdOutlineFavoriteBorder } from "react-icons/md";

// import BsSearch from "react-icons/bs"
const Home = () => {
  return (
    // <div className="container-fluid bg-trasparent my-4 p-3">
    //   <div className="container flex flex-wrap items-center justify-between py-3">
    //     <div className="row">
    //       <Card className="shadow-lg p-2" style={{ width: "20rem" }}>
    //         <Card.Img
    //           className="rounded"
    //           variant="primary"
    //           src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
    //           alt="..."
    //         />
    //         <Card.Body>
    //           <Card.Title className="py-1">Chaussure pour hommes</Card.Title>
    //           <Card.Subtitle className="text-warning  py-1">
    //             $7,197.00
    //           </Card.Subtitle>

    //           <Card.Text>
    //             Some quick example text to build on the card title and make up
    //             the bulk of the card's content.
    //           </Card.Text>

    //           <Card.Subtitle className="d-flex justify-content-between total font-weight-bold mt-4">
    //             <span>Douala, Nkoloulou</span>
    //             <span>
    //               <MdOutlineFavoriteBorder />
    //             </span>
    //           </Card.Subtitle>
    //           <small className="text-muted">Last updated 3 mins ago</small>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //   </div>
    // </div>

    <Container>
      <div className="container-sm py-5">
        <div className="row row-cols-1 row-cols-md-5">
          <div className="col mb-5">
            <div className="card">
              <div className="view overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
                  alt="Card image cap"
                />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">
                <h4 className="card-title">Card title</h4>

                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button type="button" className="btn btn-light-blue btn-md">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card">
              <div className="view overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
                  alt="Card image cap"
                />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">
                <h4 className="card-title">Card title</h4>

                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <button type="button" className="btn btn-light-blue btn-md">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card">
              <div className="view overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
                  alt="Card image cap"
                />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">
                <h4 className="card-title">Card title</h4>

                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <button type="button" className="btn btn-light-blue btn-md">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card">
              <div className="view overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
                  alt="Card image cap"
                />
                <a href="#!">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">
                <h4 className="card-title">Card title</h4>

                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <button type="button" className="btn btn-light-blue btn-md">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
