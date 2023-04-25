import React from "react";
import Category from "./Category";
import logo from "../assets/h3.png";



const Search = () => {
  return (
    <div className="container pt-5 mt-5">
      <div className="row m-5">
        <form
          action="#"
          method="post"
          novalidate="novalidate"
          classNameName="pt-5"
        >
          <div className="row pt-5">
            <div className="col-md-4 mb-4">
              <div className="row justify-content-center">
                <div className=" col-md-8 col-sm-12 p-0">
                  <div className="col-md-6">
                    <div className="panel panel-primary">
                      <div className="panel-heading">
                        <h3 className="panel-title">Panel 1</h3>
                        <span className="pull-right clickable">
                          <i className="glyphicon glyphicon-chevron-up"></i>
                        </span>
                      </div>
                      <div className="panel-body">Panel content</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8  mb-4">
              <div className="row justify-content">
                <div className=" col-md-8 col-sm-12 p-0 mb-4">
                  <input
                    type="text"
                    className="form-control search-slt"
                    placeholder="Enter Pickup City"
                  />
                </div>

                <div className=" col-md-3 col-sm-12 p-0">
                  <button type="button" className="btn btn-primary wrn-btn">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-end mx-2">
            <div className="col-md-8 col-sm-12">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-mdb-ride="carousel"
              >
                <div className="carousel-inner ">
                  <div className="carousel-item active">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                      className="d-block w-100"
                      alt="Wild Landscape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="row row-cols-1 row-cols-md-5">
        <div class="col mb-5 col-sm-6 ">
          <div className="card shadow-lg">
            <div className="card-img ms- ">
              <img
                src={logo}
                alt=""
                width="100"
                className="img-reponsive rounded-circle  mb-4 m-4 ms-5"
              />
            </div>

            <div class="card-body">
              <h5 class="card-subtitle">Special title treatment</h5>
            </div>
          </div>
        </div>
        <div class="col mb-5 col-sm-6 ">
          <div className="card shadow-lg">
            <div className="card-img ms- ">
              <img
                src={logo}
                alt=""
                width="100"
                className="img-reponsive rounded-circle  mb-4 m-4 ms-5"
              />
            </div>

            <div class="card-body">
              <h5 class="card-subtitle">Special title treatment</h5>
            </div>
          </div>
        </div>
        <div class="col mb-5 col-sm-6 ">
          <div className="card shadow-lg">
            <div className="card-img ms- ">
              <img
                src={logo}
                alt=""
                width="100"
                className="img-reponsive rounded-circle  mb-4 m-4 ms-5"
              />
            </div>

            <div class="card-body">
              <h5 class="card-subtitle">Special title treatment</h5>
            </div>
          </div>
        </div>
        <div class="col mb-5 col-sm-6 ">
          <div className="card shadow-lg">
            <div className="card-img ms- ">
              <img
                src={logo}
                alt=""
                width="100"
                className="img-reponsive rounded-circle  mb-4 m-4 ms-5"
              />
            </div>

            <div class="card-body">
              <h5 class="card-subtitle">Special title treatment</h5>
            </div>
          </div>
        </div>

        <div class="col mb-5 col-sm-6 ">
          <div className="card shadow-lg">
            <div className="card-img ms- ">
              <img
                src={logo}
                alt=""
                width="100"
                className="img-reponsive rounded-circle  mb-4 m-4 ms-5"
              />
            </div>

            <div class="card-body">
              <h5 class="card-subtitle">Special title treatment</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
