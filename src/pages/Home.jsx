import React from "react";
import { Card, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { MdOutlineFavoriteBorder } from "react-icons/md";

// import BsSearch from "react-icons/bs"
const Home = () => {
  return (
    <div className="containcontainer-fluid bg-trasparent my-4 p-3">
      <div className="container flex flex-wrap items-center justify-between py-3">
        <div className="row">
          <Card className="shadow-lg p-2" style={{ width: "20rem" }}>
            <Card.Img
              className="rounded"
              variant="primary"
              src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
              alt="..."
            />
            <Card.Body>
              <Card.Title className="py-1">Chaussure pour hommes</Card.Title>
              <Card.Subtitle className="text-warning  py-1">
                $7,197.00
              </Card.Subtitle>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>

              <Card.Subtitle className="d-flex justify-content-between total font-weight-bold mt-4">
                <span>Douala, Nkoloulou</span>
                <span>
                  <MdOutlineFavoriteBorder />
                </span>
              </Card.Subtitle>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
