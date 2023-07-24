import roadMap from "../img/fresher-eligibility-images/road_map_1.png";
import lenskartCover from "../img/lenskart_cover.png";
import lenskartProfile from "../img/lenskart.png";
import getHired from "../img/hired.png";
import placementDetailsFirstStep from "../img/placement_details_step1.png";
import threeStepSelection from "../img/threeStepSelection.png";
import { MuiOtpInput } from "mui-one-time-password-input";
import interviewDate from "../img/interviewDate.png";
import placementDetailsIcon from "../img/placement_details_first_icon.png";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import backButtonblack from "../img/back_button_black.png";
import next from "../img/next.png";
import React, { useState, useEfffect } from "react";
import playButton from "../img/fresher-eligibility-images/play.png";
import arrow from "../img/fresher-eligibility-images/arrow.png";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import documentUploadIcon from "../img/documentupload.png";
import placementLeftSlide from "../img/placement_left_slide.png";

const FresherPlacementDetailsFirstStep = () => {
  //   const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [age1, setAge1] = React.useState("");
  const [age2, setAge2] = React.useState("");
  const [verifyCheck, setVerifyCheck] = useState(false);
  const [value, setValue] = React.useState("");

  const handleChangess = (newValue) => {
    setValue(newValue);
  };
  console.log(verifyCheck);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };
  const [otp, setOtp] = React.useState("");

  const handleChangessss = (newValue) => {
    setOtp(newValue);
  };

  const [eligibilityForm, setEligibilityForm] = useState({
    name: null,
    email: null,
    phone_number: null,
    education: null,
    stream: null,
    university: null,
    percentage: null,
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setEligibilityForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <section className="roadMap-section">
        <img
          style={{ margin: "5px auto", width: "100%" }}
          src={roadMap}
          alt="road-map"
        />
      </section>
      <section>
        <div className="fresher_placement_details_cover">
          <div
            style={{
              backgroundImage: `url(${lenskartCover})`,
              position: "relative",
              backgroundSize: "cover",
              width: "100%",
              height: "138px",
              backgroundColor: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.14) 21.88%, rgba(0, 0, 0, 0.41) 50%, rgba(0, 0, 0, 0.62) 69.27%, #000000 100%)`,
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "color",
            }}
            className="fresher_placement_details_cover_image"
          >
            <img
              className=".fresher_placement_details_profile_iconsss"
              src={lenskartProfile}
              alt="lenskart"
            />
            {/* <div className="fresher_placement_details_cover_container">
              <p className="fresher_placement_details_job_interview">
                Interview on
              </p>
              <p className="fresher_placement_details_job_date">04 May 2023</p>
              <Link to="/fresher-placement-details-first-step">
                <img src={getHired} alt="get-hired" />
              </Link>
            </div> */}
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(254, 205, 8, 0.07) 0%, rgba(14, 95, 89, 0.19) 100%)",
            width: "100%",
          }}
        >
          <div className="fresher_placement_details_profile_bottom_containerssss">
            <p className="fresher_placement_details__profile_title">Lenskart</p>
            <div style={{ paddingLeft: "40px" }}>
              <h3 className="fresher_placement_details__profile_job_title">
                Sales Associates (Frontend Sales)
              </h3>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="fresher_placement_details_container_flex">
                  <div className="fresher_placement_job_location_container">
                    <p className="fresher_placement_job_location">Location:</p>
                    <p className="fresher_placement_job_location_second">
                      &nbsp; Bangalore
                    </p>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div style={{ color: "rgba(14, 95, 89, 0.3)" }}>|</div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="fresher_placement_job_salary_container">
                    <p className="fresher_placement_job_salary">
                      Starting Salary:
                    </p>
                    <p className="fresher_placement_job_salary_second">
                      &nbsp; Upto 4LPA
                    </p>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div style={{ color: "rgba(14, 95, 89, 0.3)" }}>|</div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {/* <div className="fresher_placement_job_type_container">
                <p className="fresher_placement_job_type">Job Type:</p>
                <p className="fresher_placement_job_type_second">
                  {" "}
                  &nbsp;On-Site
                </p>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div style={{ color: "rgba(14, 95, 89, 0.3)" }}>|</div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="fresher_placement_job_posts_container">
                <p className="fresher_placement_job_posts">No. of Posts:</p>
                <p className="fresher_placement_job_posts_second"> &nbsp;38</p>
              </div> */}
                </div>
                <div style={{ paddingLeft: "250px" }}>
                  <img src={interviewDate} alt="interview date" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="placement_details_instruction_first_step_container">
          {/* <p className="placement_details_instruction">
            Please follow the below steps to Submit your Application{" "}
          </p> */}
          <div>
            <img
              style={{ padding: "0px 20px 0px 16px" }}
              src={threeStepSelection}
              alt="3step"
            />
            <img src={placementDetailsFirstStep} alt="placement-details" />
          </div>
          <h3 className="placement_details_instruction_company_screening_questionll">
            Fill the details below
          </h3>
          <br />
          <div
            style={{
              width: "943px",
              marginLeft: "50px",
            }}
          >
            <div className="d-none d-xl-block d-lg-block">
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(243, 250, 249, 1) 0%, rgba(243, 250, 249, 1) 100%)",
                  padding: "70px", // width: "730px",
                  // height: "257px",
                  // display: "flex",
                  // alignContent: "center",
                }}
              >
                <div className="eligibility-form-first-row">
                  <div className="eligibility-form-label-containerssa">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="name"
                      id=""
                      placeholder="Rahul"
                    />
                  </div>

                  <div className="eligibility-form-label-containerssa">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      onChange={handleInputChange}
                      type="email"
                      name="email"
                      id=""
                      placeholder="rahul@gmail.com"
                    />
                  </div>
                </div>
                <div className="eligibility-form-second-row">
                  <div className="eligibility-form-label-containerssa">
                    <label htmlFor="phone">Phone number</label>
                    <div>
                      <input
                        onChange={handleInputChange}
                        type="number"
                        placeholder="+91"
                        name="phone"
                        id=""
                      />
                      <button onClick={() => setVerifyCheck(!verifyCheck)}>
                        Verify
                      </button>
                    </div>
                  </div>
                  <div
                    className="eligibility-form-four-row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      className="eligibility-form-label-containerssa"
                      style={{
                        marginTop: "-20px",
                        width: "360px",
                      }}
                    >
                      <input
                        style={{ display: "none" }}
                        type="file"
                        name="uploadResume"
                        id="uploadResume"
                      />
                      <label
                        htmlFor="uploadResume"
                        className="eligibility-form-upload-document-containerssa"
                      >
                        <img
                          style={{ padding: "0px 20px" }}
                          src={documentUploadIcon}
                          alt="upload"
                        />
                        Upload Resume
                      </label>
                    </div>
                  </div>
                </div>
                {verifyCheck && (
                  <div className="eligibility-form-first-row">
                    <div
                      style={{
                        borderRadius: "13px",
                        paddingLeft: "15px",
                        border: "1px solid white",
                        background: "white",
                        width: "341px",
                        height: "101px",
                      }}
                      className="eligibility-form-label-container"
                    >
                      <label htmlFor="name">OTP</label>
                      <br />
                      <div
                        style={{
                          width: "250px",
                          background: "white",
                          // height: "42px",
                        }}
                      >
                        <MuiOtpInput
                          style={{
                            // width: "250px",
                            // background: "white",
                            height: "42px",
                          }}
                          length={4}
                          value={otp}
                          onChange={handleChangessss}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <br />
            </div>
          </div>

          <div className="placement_details_first_button_container">
            <Link to="/fresher-placement-drive">
              <img
                style={{ cursor: "pointer" }}
                src={backButtonblack}
                alt="back"
              />
            </Link>

            <Link to="/fresher-placement-details-second-step">
              <img style={{ cursor: "pointer" }} src={next} alt="next" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FresherPlacementDetailsFirstStep;
