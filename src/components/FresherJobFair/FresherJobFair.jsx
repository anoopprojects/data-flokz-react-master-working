import React, { useState, useEffect } from "react";
import "../js/course_detail_counter";
import slider2 from "../img/slider-2.png";
import slider4 from "../img/slider-4.png";
import career from "../img/career.png";
import roundFull from "../img/full-rotate.png";
import circle2 from "../img/circle-2.png";
import DhawalLokhande from "../img/Dhawal_Lokhande.png";
import PallaviRustagi from "../img/Pallavi_Rustagi.png";
import wipro from "../img/wipro.png";

import PratyayDasSharma from "../img/Pratyay_Das_Sharma.png";
import stroke1 from "../img/stroke-1.png";
import media1 from "../img/media-1.svg";
import media2 from "../img/media-2.svg";
import stroke2 from "../img/stroke-2.png";
import Slider from "react-slick";
import { ApiBaseUrl } from "../BaseUrl/baseUrl";
import NewPerson from "../img/Frame_715.png";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./index.css";
import { Button } from "react-bootstrap";
import img2 from "../img/img-2.png";
import image_51 from "../img/image_51.png";
import image_53 from "../img/image_53.png";
import image_54 from "../img/image_54.png";
import image_57 from "../img/image_57.png";
import image_58 from "../img/image_58.png";
import Carousel from "./carousel/Carousel";
import American_Uni from "../img/university-logo/American-University-logo.png";
import Harvard_Uni from "../img/university-logo/Harvard_logo.png";
import Pennsylvania_Uni from "../img/university-logo/Pennsylvania-University-logo.png";
import Stanford_Uni from "../img/university-logo/Stanford-University-logo.png";
import Texas_Uni from "../img/university-logo/Texas-University-logo.png";
const imageSources = [
  image_51,
  image_53,
  image_54,
  image_57,
  image_58,
  image_57,
];
// const Universities = [
//   Harvard_Uni,
//   Pennsylvania_Uni,
//   Pennsylvania_Uni,
//   Pennsylvania_Uni,
//   American_Uni,
//   Stanford_Uni,
//   Stanford_Uni,
//   Stanford_Uni,
//   Texas_Uni,
//   Harvard_Uni,
//   Harvard_Uni,
//   Harvard_Uni,
// ];

const Universities = [
  {
    img: Harvard_Uni,
    name: "Harvard University",
  },
  {
    img: Pennsylvania_Uni,
    name: "Pennsylvania State University",
  },
  {
    img: Pennsylvania_Uni,
    name: "Pennsylvania State University",
  },
  {
    img: Pennsylvania_Uni,
    name: "Pennsylvania State University",
  },
  {
    img: American_Uni,
    name: "American University",
  },
  {
    img: Stanford_Uni,
    name: "Stanford University",
  },
  {
    img: Stanford_Uni,
    name: "Stanford University",
  },
  {
    img: Stanford_Uni,
    name: "Stanford University",
  },
  {
    img: Texas_Uni,
    name: "Texas University",
  },
  {
    img: Harvard_Uni,
    name: "Harvard University",
  },
  {
    img: Harvard_Uni,
    name: "Harvard University",
  },
  {
    img: Harvard_Uni,
    name: "Harvard University",
  },
];

export default function FresherJobFair() {
  //Signin api=====================

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        color: "#005F59",
      },
    },
  };

  const names = ["Pune", "Bengluru", "Hydrabad", "Mumbai", "Delhi"];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [VisitorCount, setVisitorCount] = useState();
  const texts = [
    "graduates",
    "postgraduates",
    "working professionals",
    "upskill programs",
    "students",
    "unemployed",
    "job hunters",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    }, 2000); // 1 minute in milliseconds

    return () => clearInterval(intervalId);
  }, [currentTextIndex]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch(ApiBaseUrl + "visitor-count");
        const data1 = await res1.json();
        setVisitorCount(data1.VisitorCount);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //slider settings==========

  var settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false },
      },
    ],
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1299,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
    ],
  };

  return (
    <React.Fragment>
      <section className="landing-banner">
        <div className="landing-banner-sec">
          <div className="container custom-container">
            <div>
              <div className="d-none d-xl-block">
                {/* Content for the Extra Large (xl) div */}
                <div className="flex-container">
                  <div>
                    <div>
                      <h1 className="landing-banner-title">
                        End to end <br />
                        <strong className="job-change">Job Change</strong>
                        <br /> solution for You
                      </h1>

                      <div className="landing-banner-sub-heading">
                        <p>
                          6874+ people have got their dream job through
                          Salaryfy. When
                        </p>
                        <p>are you getting yours?</p>
                      </div>
                    </div>

                    <FormControl
                      sx={{ m: 1, width: 300, mt: 3, height: "15px" }}
                    >
                      <p
                        style={{
                          fontFamily: "lexend",
                          fontWeight: "600",
                          fontSize: "20px",
                          lineHeight: "25px",
                        }}
                      >
                        Select your city
                      </p>
                      <Select
                        style={{ height: "40px" }}
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em style={{ color: "#005F59" }}>select</em>;
                          }

                          return selected.join(", ");
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem disabled value="">
                          <em style={{ color: "#005F59" }}>Select</em>
                        </MenuItem>
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                            className="MenuItem"
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <Button
                      style={{
                        marginTop: "65px",
                        height: "43px",
                        backgroundColor: "#FECD08",
                        color: "#005F59",
                        width: "123px",
                        border: "none",
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "25px",
                        fontFamily: "lexend",
                      }}
                    >
                      Go &nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </Button>
                  </div>
                  <div className="personImage">
                    <img src={NewPerson} alt="NewPerson" />
                  </div>
                </div>
              </div>
              {/* Div for Large (lg) screens */}
              <div className="d-none d-lg-block d-xl-none">
                {/* Content for the Large (lg) div */}
                <div className="flex-container">
                  <div>
                    <h1 className="landing-banner-title-large">
                      End to end <br />
                      <strong className="job-change">
                        Job Change
                      </strong> <br /> solution for You
                    </h1>

                    <div className="landing-banner-sub-heading">
                      <p>
                        6874+ people have got their dream job through Salaryfy.
                        When
                      </p>
                      <p>are you getting yours?</p>
                    </div>
                  </div>
                  <div className="personImageLargeContainer">
                    <img
                      className="personImageLarge"
                      src={NewPerson}
                      alt="NewPerson"
                    />
                  </div>
                </div>
              </div>

              {/* Div for Medium (md) screens */}
              <div className="d-none d-md-block d-lg-none">
                {/* Content for the Medium (md) div */}

                <div className="flex-container-medium">
                  <div>
                    <h1 className="landing-banner-title">
                      End to end <br />
                      <strong className="job-change">
                        Job Change
                      </strong> <br /> solution for You
                    </h1>

                    <div className="landing-banner-sub-heading">
                      <p>
                        6874+ people have got their dream job through Salaryfy.
                        When
                      </p>
                      <p>are you getting yours?</p>
                    </div>
                  </div>
                  <div className="personImageMedium">
                    <img src={NewPerson} alt="NewPerson" />
                  </div>
                </div>
              </div>

              {/* Div for Mobile (sm and xs) screens */}
              <div className="d-sm-block d-md-none">
                {/* Content for the Mobile (sm and xs) div */}

                <div className="flex-container-small">
                  <div>
                    <h1 className="landing-banner-title-small">
                      End to end <br />
                      <strong className="job-change">
                        Job Change
                      </strong> <br /> solution for You
                    </h1>

                    <div className="landing-banner-sub-heading-small">
                      <p>
                        6874+ people have got their dream job through Salaryfy.
                        When
                      </p>
                      <p>are you getting yours?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="d-none d-xl-block">
          <div className="landing-banner-section-strip-in-fresher-job-fair">
            <div className="container">
              <div className="landing-banner-section-strip-innercontainer">
                <h1
                  style={{
                    color: "#FECD08",
                    fontWeight: "600",
                    fontSize: "44px",
                  }}
                >
                  Our
                </h1>
                <h1
                  style={{
                    color: "#005F59",
                    fontWeight: "600",
                    fontSize: "44px",
                  }}
                >
                  Stats
                </h1>
              </div>
              <div>
                <div className="landing-banner-section-strip-innercontainer">
                  <h3>5000+</h3>
                  <p>Successfully Job Switched</p>
                </div>
              </div>
              <div>
                <div className="landing-banner-section-strip-innercontainer">
                  <h3>200%</h3>
                  <p>Maximum Hike</p>
                </div>
              </div>
              <div>
                <div className="landing-banner-section-strip-innercontainer">
                  <h3>5 Days</h3>
                  <p>Fastest Job Switch Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <div className="landing-section-heading">
            <h2
              className="text-center"
              style={{
                fontWeight: "600",
                fontSize: "63px",
                lineHeight: "66.47px",
                letterSpacing: "-6%",
              }}
            >
              Our Placement <span color="#FECD08">Partners</span>
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "25px",
              }}
            >
              <div style={{ display: "flex" }}>
                {imageSources.map((src, index) => (
                  <div className="img-container">
                    <img className="img-of-our-partners" src={src} alt="logo" />
                  </div>
                ))}
              </div>
              <div style={{ display: "flex" }}>
                {imageSources.map((src, index) => (
                  <div className="img-container">
                    <img className="img-of-our-partners" src={src} alt="logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* slider*************** */}

      <section className="client-section">
        <h1
          className="text-center"
          style={{
            fontWeight: "700",
            fontSize: "63px",
            lineHeight: "66.47px",
            letterSpacing: "-6%",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Our <span style={{ color: "rgba(254, 205, 8)" }}>speed</span> is your
          <span style={{ color: "rgba(254, 205, 8)" }}>power</span>
        </h1>

        <Carousel />
      </section>

      <section></section>

      <section className="video-section">
        <div className="container">
          <div className="landing-section-heading">
            <h2
              className="text-center"
              style={{
                fontWeight: "600",
                fontSize: "63px",
                lineHeight: "66.47px",
                letterSpacing: "-6%",
              }}
            >
              Students from<span color="#FECD08"> Universities</span>
            </h2>
            <div className="universities-container">
              <div className="Univercity_Logo">
                {Universities.map((university, index) => {
                  return (
                    <div className="University_Inside_div">
                      <img
                        className="University_logo"
                        src={university.img}
                        alt="University logo"
                      ></img>
                      <p className="Univercity_name">{university.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="review-sec">
        <div className="review-slide">
          <div className="row customers-review-slider"> 
          <Slider {...settings2}>
            <div className="col-lg-12">
              <div className="review-content"></div>
            </div>
            <div className="col-lg-12">
              <div className="review-content"></div>
            </div>
            <div className="col-lg-12">
              <div className="review-content"></div>
            </div>
            <div className="col-lg-12">
              <div className="review-content"></div>
            </div>
          </Slider>
           </div> 
        </div>
      </section> */}
    </React.Fragment>
  );
}
