import React from "react";
import "../index.css";
import line from "../../img/icons/Line-122.png";
import google from "../../img/slider-2.png";
import linkedin from "../../img/icons/Frame.png";
import userphoto from "../../img/fresher-eligibility-images/df_IMAGE4.png";
import peopleReview from "../../img/peopleReview.png";

const Carousel = () => (
  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        className="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner" style={{ marginTop: "60px" }}>
      <div className="carousel-item active">
        <div className="col-lg-12 carouselContainer">
          <div className="review-content ">
            <img src={peopleReview} alt="peopleReview" />
          </div>
          <div className="review-content">
            <img src={peopleReview} alt="peopleReview" />
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="col-lg-12 carouselContainer">
          <div className="review-content">
            <img src={peopleReview} alt="peopleReview" />
          </div>
          <div className="review-content">
            <img src={peopleReview} alt="peopleReview" />
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="col-lg-12 carouselContainer">
          <div className="review-content">
            <img src={peopleReview} alt="peopleReview" />
          </div>
          <div className="review-content">
            <img src={peopleReview} alt="peopleReview" />
          </div>
        </div>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Carousel;

{
  /* <div className="card1">
              <p className="paragraph-inside-carousel">
                One of the best decission of my life, I worked hard and it was
                so important for me to be seen as a man, by working physically,
                and working long, excessive hours.
              </p>
              <img src={line} alt="line"></img>
              <div
                style={{
                  width: "300px",
                  height: "62px",
                  margin: "30px 15px 0px 20px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <p className="place-para-caro">Placed by Data Folkz at</p>{" "}
                  <p className="place-in-caro">Placed in</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "52px",
                  }}
                >
                  <div>
                    <img
                      className="google-img-caro"
                      src={google}
                      alt="google"
                    ></img>
                  </div>
                  <div className="days-caro">
                    <p
                      style={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          width: "13px",
                          height: "28px",
                          fontSize: "20px",
                          fontWeight: "500",
                          lineHeight: "27.5px",
                        }}
                      >
                        5
                      </span>{" "}
                      <span
                        style={{
                          width: "30px",
                          height: "15px",
                          fontWeight: "400",
                          fontSize: "12px",
                          fontFamily: "Lexend",
                          lineHeight: "15px",
                        }}
                      >
                        Days
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="emp-main-box">
              <div
                style={{
                  height: "120px",
                  width: "120px",
                  background: "white",
                  borderRadius: "57px",
                  border: "3px solid black",
                }}
              >
                <img
                  src={userphoto}
                  alt="userImage"
                  style={
                    {
                      // background: "white",
                      // borderRadius: "57px",
                      // border: "10px solid black",
                    }
                  }
                />
              </div>
              <div>
                <p className="emp-name-caro">Ashish Mehta</p>
                <p className="customer-possition-caro">
                  Data Analytics & Big Data Engineer{" "}
                </p>
                <div className="linkden-caro">
                  {" "}
                  <p className="linkden-name-caro">Linkedin</p>
                  <img src={linkedin} alt="linkedin" />
                </div>
              </div>
            </div> */
}
