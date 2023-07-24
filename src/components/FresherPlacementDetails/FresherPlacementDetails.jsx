import React, { useState } from "react";
import placementSlide from "../img/placement_left_slide.png";
import lenskartCover from "../img/lenskart_cover.png";
import lenskartProfile from "../img/lenskart.png";
import { MuiOtpInput } from "mui-one-time-password-input";
import getHired from "../img/hired.png";
import jobDetails from "../img/job_details.png";
import listIcon from "../img/list_icon.png";
import { Link } from "react-router-dom";
import "./index.css";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../img/close_icon.png";
import submitOtp from "../img/submitOtp.png";

const FresherPlacementDetails = () => {
  const [show, setShow] = useState(false);
  const [verifyCheck, setVerifyCheck] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, setValue] = React.useState("");

  const handleChangess = (newValue) => {
    setValue(newValue);
  };
  const [otp, setOtp] = React.useState("");

  const handleChangessss = (newValue) => {
    setOtp(newValue);
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };
  return (
    <div>
      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        className="fresher_placement_details_modal_container"
      >
        <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "50px",
                font: "lexend",
                alignContent: "center",
              }}
            >
              Sign Up
            </p>
            <p
              style={{
                display: "flex",
                placeContent: "center",
                fontWeight: "400",
                width: "424px",
                paddingLeft: "20px",
                color: "rgba(91, 91, 91, 1)",
                fontSize: "20px",
                lineHeight: "25px",
                alignItems: "center",
              }}
            >
              Please enter your email id and we will send OTP to you
            </p>

            <div
              style={{
                display: "grid",
                placeContent: "center",
              }}
              className="eligibility-form-label-containerssa"
            >
              <br />
              {/* <div> */}
              <label
                style={{
                  fontFamily: "lexend",
                  fontSize: "18px",
                  color: "rgba(14, 95, 89, 1)",
                  fontWeight: "400",
                  lineHeight: "23px",
                }}
                htmlFor="email"
              >
                {" "}
                Enter Email Id
              </label>
              <input
                // onChange={handleInputChange}
                style={{
                  width: "424px",
                }}
                // style={{  }}
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="rahul@gmail.com"
              />
              {/* {error && <h2 style={{ color: "red" }}>{error}</h2>} */}
              {/* </div> */}
            </div>
            <div
              onClick={() => setVerifyCheck(true)}
              style={{
                display: "flex",
                placeContent: "center",
                cursor: "pointer",
              }}
            >
              <img
                src={submitOtp}
                alt="SubmitOtp"
                style={{
                  width: "424px",
                  paddingTop: "22px",
                }}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {verifyCheck && (
        <Modal
          size="xl"
          show={show}
          onHide={handleClose}
          className="fresher_placement_details_modal_container"
        >
          <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "36px",
                  fontWeight: "700",
                  lineHeight: "50px",
                  font: "lexend",
                  alignContent: "center",
                }}
              >
                Verify Email
              </p>
              <p
                style={{
                  display: "flex",
                  placeContent: "center",
                  fontWeight: "400",
                  // width: "75%",
                  paddingLeft: "20px",
                  color: "rgba(91, 91, 91, 1)",
                  fontSize: "20px",
                  lineHeight: "25px",
                  alignItems: "center",
                }}
              >
                Please enter OTP sent on registered Email
              </p>

              <div className="eligibility-form-label-containerssa">
                <br />
                {/* <div style={{ display: "flex", placeContent: "center" }}> */}
                {
                  <div
                    style={{
                      display: "flex",
                      placeContent: "center",
                      background:
                        "linear-gradient(180deg, rgba(244, 244, 244, 1) 0%, rgba(244, 244, 244, 1) 100%)",
                      // background: "red",
                    }}
                    className="eligibility-form-first-row"
                  >
                    <div
                      style={{
                        borderRadius: "13px",
                        paddingLeft: "15px",
                        // border: "1px solid white",
                        width: "341px",
                        height: "101px",
                      }}
                      className="eligibility-form-label-containerssa"
                    >
                      <label
                        style={
                          {
                            // background: "black",
                            // height: "42px",
                          }
                        }
                        htmlFor="name"
                      >
                        OTP
                      </label>
                      <br />

                      <MuiOtpInput
                        style={{
                          // width: "250px",
                          background: "red !important",
                          height: "42px",
                        }}
                        length={4}
                        value={otp}
                        onChange={handleChangessss}
                      />
                    </div>
                  </div>
                }
                {/* </div> */}
              </div>
              <div style={{ display: "flex", placeContent: "center" }}>
                <Link to="/fresher-placement-details-first-step">
                  <img
                    src={submitOtp}
                    alt="SubmitOtp"
                    style={{
                      width: "424px",
                      paddingTop: "22px",
                    }}
                  />
                </Link>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}

      <div className="fresher_placement_details_main_container">
        <p className="fresher_placement_details_back_page_button">Back</p>
        <div className="fresher_placement_details_flex_container">
          <div>
            <div className="fresher_placement_details_left">
              <h2
                style={{
                  paddingLeft: "15px",
                  lineHeight: "35px",
                  fontFamily: "Lexend",
                  color: "#005F59",
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                Our candidates placement
              </h2>
              <img src={placementSlide} alt="placementSlide" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
              }}
            >
              <svg
                width="87"
                height="13"
                viewBox="0 0 87 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="13" height="13" rx="2" fill="#005F59" />
                <rect x="37" width="13" height="13" rx="2" fill="#B6B6B6" />
                <rect x="74" width="13" height="13" rx="2" fill="#B6B6B6" />
              </svg>
            </div>
          </div>
          <div className="fresher_placement_details_right">
            <p style={{ color: "#5B5B5B", Width: "163px", Height: "19px" }}>
              Placement Drive Details
            </p>
            <div className="fresher_placement_details_cover">
              <div
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.14) 21.88%, rgba(0, 0, 0, 0.41) 50%, rgba(0, 0, 0, 0.62) 69.27%, #000000 100%),url(${lenskartCover})`,
                  position: "relative",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "138px",

                  backgroundRepeat: "no-repeat",
                  backgroundBlendMode: "color",
                }}
                className="fresher_placement_details_cover_image"
              >
                <img
                  className="fresher_placement_details_profile_icon"
                  src={lenskartProfile}
                  alt="lenskart"
                />
                <div className="fresher_placement_details_cover_container">
                  <div className="fresher_placement_details_job_interview_div">
                    <p className="fresher_placement_details_job_interview">
                      <svg
                        style={{ backgroundColor: "#fecd08" }}
                        width="11"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.11411 15H11.883C12.9071 15 13.7393 14.1678 13.7393 13.1437V3.89332C13.7393 2.86925 12.9071 2.03702 11.883 2.03702H11.1467V1.51851C11.1467 1.23332 10.9134 1 10.6282 1C10.343 1 10.1097 1.23332 10.1097 1.51851V2.03702H3.88746V1.51851C3.88746 1.23332 3.6541 1 3.36891 1C3.08372 1 2.8504 1.23332 2.8504 1.51851V2.03702H2.11411C1.09004 2.03702 0.257812 2.86925 0.257812 3.89332V13.1437C0.257812 14.1678 1.09004 15 2.11411 15ZM1.29487 3.89332C1.29487 3.44222 1.66302 3.07408 2.11411 3.07408H2.8504V3.59259C2.8504 3.87778 3.08372 4.1111 3.36891 4.1111C3.6541 4.1111 3.88742 3.87778 3.88742 3.59259V3.07408H10.1097V3.59259C10.1097 3.87778 10.343 4.1111 10.6282 4.1111C10.9134 4.1111 11.1467 3.87778 11.1467 3.59259V3.07408H11.883C12.3341 3.07408 12.7022 3.44222 12.7022 3.89332V5.40741H1.29487V3.89332ZM1.29487 6.44443H12.7023V13.1437C12.7023 13.5948 12.3341 13.9629 11.883 13.9629H2.11411C1.66302 13.9629 1.29487 13.5948 1.29487 13.1437V6.44443Z"
                          fill="#0E5F59"
                          stroke="#0E5F59"
                          stroke-width="0.3"
                        />
                      </svg>
                      &nbsp; Interview on: 04 May 2023
                    </p>
                  </div>

                  <Link onClick={handleShow}>
                    <img src={getHired} alt="get-hired" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="fresher_placement_details_profile_bottom_containerssss">
              <p className="fresher_placement_details__profile_title">
                Lenskart
              </p>
              <div style={{ paddingLeft: "25px" }}>
                <h3 className="fresher_placement_details__profile_job_title">
                  Sales Associates (Frontend Sales)
                </h3>
                <div className="fresher_placement_details_container_flex">
                  <div className="fresher_placement_job_location_container">
                    <p className="fresher_placement_job_location">Location:</p>
                    <p className="fresher_placement_job_location_second">
                      &nbsp; Bangalore
                    </p>
                  </div>
                  &nbsp;&nbsp;
                  <div style={{ color: "rgba(14, 95, 89, 0.3)" }}>|</div>
                  &nbsp;&nbsp;
                  <div className="fresher_placement_job_salary_container">
                    <p className="fresher_placement_job_salary">
                      Starting Salary:
                    </p>
                    <p className="fresher_placement_job_salary_second">
                      &nbsp; Upto 4LPA
                    </p>
                  </div>
                  &nbsp;&nbsp;
                  <div style={{ color: "rgba(14, 95, 89, 0.3)" }}>|</div>
                  &nbsp;&nbsp;
                  <div className="fresher_placement_job_type_container">
                    <p className="fresher_placement_job_type">Job Type:</p>
                    <p className="fresher_placement_job_type_second">
                      {" "}
                      &nbsp;On-Site
                    </p>
                  </div>
                  &nbsp;&nbsp;
                  <div style={{ color: "rgba(14, 95, 89, 0.3)" }}>|</div>
                  &nbsp;&nbsp;
                  <div className="fresher_placement_job_posts_container">
                    <p className="fresher_placement_job_posts">No. of Posts:</p>
                    <p className="fresher_placement_job_posts_second">
                      {" "}
                      &nbsp;38
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fresher_placement_job_content_container">
              <div
                style={{ width: "90%", margin: "auto", padding: "30px 0px" }}
              >
                <div className="fresher_placement_job_flex_container">
                  <div>
                    <img src={listIcon} alt="listIcon" />
                    <h3
                      style={{ margin: "0px" }}
                      className="fresher_placement_job_title"
                    >
                      Essential Requirements:
                    </h3>
                  </div>
                  <img src={jobDetails} alt="job-details" />
                </div>
                <p className="fresher_placement_job_first_para placement_content">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups. Lorem ipsum is
                  placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual
                  mockups.
                </p>
                <div className="fresher_placement_job_flex_container_first">
                  <img src={listIcon} alt="listIcon" />
                  <h3
                    style={{ margin: "0px" }}
                    className="fresher_placement_job_title"
                  >
                    Incentives:
                  </h3>
                </div>
                <ol className="fresher_placement_job_ordered_list">
                  <li>Recognition and rewards</li>
                  <li>Referral programs</li>
                  <li>Professional development</li>
                  <li>Health and wellness</li>
                  <li>Tuition reimbursement</li>
                  <li>Bonuses and raises</li>
                </ol>
                <div className="fresher_placement_job_flex_container_first">
                  <img src={listIcon} alt="listIcon" />
                  <h3
                    style={{ margin: "0px" }}
                    className="fresher_placement_job_title"
                  >
                    Interview details:
                  </h3>
                </div>
                <p className="placement_content">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups. Lorem ipsum is
                  placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual
                  mockups.
                </p>
                <p className="placement_content">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text.
                </p>
                <div className="fresher_placement_job_flex_container_first">
                  <img src={listIcon} alt="listIcon" />
                  <h3
                    style={{ margin: "0px" }}
                    className="fresher_placement_job_title"
                  >
                    Job details:
                  </h3>
                </div>
                <p className="placement_content">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups. Lorem ipsum is
                  placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual
                  mockups.
                </p>
                <p className="placement_content">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text. Lorem ipsum
                  is placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual
                  mockups. Lorem ipsum is placeholder text commonly used in the
                  graphic, print, and publishing industries for previewing
                  layouts and visual mockups. Lorem ipsum is placeholder text
                  commonly used in the graphic, print, and publishing industries
                  for previewing layouts and visual mockups.
                </p>
                <p className="placement_content">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text. Lorem ipsum
                  is placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual
                  mockups. Lorem ipsum is placeholder text commonly used in the
                  graphic, print, and publishing industries for previewing
                  layouts and visual mockups. Lorem ipsum is placeholder text
                  commonly used in the graphic, print, and publishing industries
                  for previewing layouts and visual mockups.
                </p>
                <div style={{ marginLeft: "23px" }}>
                  <Link onClick={handleShow}>
                    <img src={getHired} alt="get-hired" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FresherPlacementDetails;
