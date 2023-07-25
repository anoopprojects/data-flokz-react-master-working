import React from "react";
import roadMap from "../img/fresher-eligibility-images/road-map-2.png";
import lenskartCover from "../img/lenskart_cover.png";
import lenskartProfile from "../img/lenskart.png";
import getHired from "../img/hired.png";
import placementDetailsSecondStep from "../img/placement_details_step2.png";
import threeStepSelection from "../img/threeStepSelection.png";
import interviewDate from "../img/interviewDate.png";
import placementDetailsIcon from "../img/placement_details_first_icon.png";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import backButton from "../img/back_button.png";
import next from "../img/next.png";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: "#0e5f59",
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

const FresherPlacementDetailsFirstStep = () => {
  const changeRating = () => {};

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
              className="fresher_placement_details_profile_icon"
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
          <div className="fresher_placement_details_profile_bottom_container">
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
                <div>
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
            <img src={placementDetailsSecondStep} alt="placement-details" />
          </div>
          <h3 className="placement_details_instruction_company_screening_question">
            Fill the details below
          </h3>
          <br />
          <div className="placement_details_instruction_question_container">
            <img src={placementDetailsIcon} alt="placement_details_icon" />
            <p>
              Do you currently live in the city for which you want to apply the
              job for?
            </p>
          </div>
          <div
            style={{ marginTop: "10px", paddingLeft: "25px" }}
            className="placement_details_radio_container"
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              // name="radio-buttons-group"
              name="use-radio-group"
              style={{ display: "contents" }}
            >
              <div>
                <MyFormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label="Yes"
                />

                {/* </RadioGroup> */}
              </div>
              <div>
                <MyFormControlLabel value="No" control={<Radio />} label="No" />
                {/* <input type="radio" name="firstNo" id="firstNo" /> */}
                {/* <label htmlFor="firstNo">No</label> */}
              </div>
            </RadioGroup>
          </div>
          <hr />
          <div className="placement_details_instruction_question_container">
            <img src={placementDetailsIcon} alt="placement_details_icon" />
            <p>Can you join the new job within 7 days?</p>
          </div>
          <div
            style={{ marginTop: "10px", paddingLeft: "25px" }}
            className="placement_details_radio_container"
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              // name="radio-buttons-group"
              name="use-radio-group"
              style={{ display: "contents" }}
            >
              <div>
                <MyFormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label="Yes"
                />

                {/* </RadioGroup> */}
              </div>
              <div>
                <MyFormControlLabel value="No" control={<Radio />} label="No" />
                {/* <input type="radio" name="firstNo" id="firstNo" /> */}
                {/* <label htmlFor="firstNo">No</label> */}
              </div>
            </RadioGroup>
          </div>
          <hr />
          <div className="placement_details_instruction_question_container">
            <img src={placementDetailsIcon} alt="placement_details_icon" />
            <p>Rate your fluency in English?</p>
          </div>
          <div
            style={{
              marginLeft: "40px",
              paddingLeft: "10px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <StarRatings
              rating={4}
              starRatedColor="gold"
              changeRating={changeRating}
              numberOfStars={5}
              name="rating"
              starDimension="20px"
            />
          </div>
          <hr />
          <div className="placement_details_instruction_question_container">
            <img src={placementDetailsIcon} alt="placement_details_icon" />
            <p>Are you comfortable working at the store level?</p>
          </div>
          <div
            style={{ marginTop: "10px", paddingLeft: "25px" }}
            className="placement_details_radio_container"
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              name="use-radio-group"
              // name="radio-buttons-group"
              style={{ display: "contents" }}
            >
              <div>
                <MyFormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label="Yes"
                />

                {/* </RadioGroup> */}
              </div>
              <div>
                <MyFormControlLabel value="No" control={<Radio />} label="No" />
                {/* <input type="radio" name="firstNo" id="firstNo" /> */}
                {/* <label htmlFor="firstNo">No</label> */}
              </div>
            </RadioGroup>
          </div>
          <hr />
          <div className="placement_details_instruction_question_container">
            <img src={placementDetailsIcon} alt="placement_details_icon" />
            <p>
              The job is a six day’s working job with no weekend-off (One week
              off between Monday to Friday)
            </p>
          </div>
          <div
            style={{ marginTop: "10px", paddingLeft: "25px" }}
            className="placement_details_radio_container"
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              // name="radio-buttons-group"
              name="use-radio-group"
              style={{ display: "contents" }}
            >
              <div>
                <MyFormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label="Yes"
                />

                {/* </RadioGroup> */}
              </div>
              <div>
                <MyFormControlLabel value="No" control={<Radio />} label="No" />
                {/* <input type="radio" name="firstNo" id="firstNo" /> */}
                {/* <label htmlFor="firstNo">No</label> */}
              </div>
            </RadioGroup>
          </div>
          <hr />
          <div className="placement_details_instruction_question_container">
            <img src={placementDetailsIcon} alt="placement_details_icon" />
            <p>
              The job is a six day’s working job with no weekend-off (One week
              off between Monday to Friday)
            </p>
          </div>
          <div
            style={{ marginTop: "10px", paddingLeft: "25px" }}
            className="placement_details_radio_container"
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Yes"
              // name="radio-buttons-group"
              name="use-radio-group"
              style={{ display: "contents" }}
            >
              <div>
                <MyFormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label="Yes"
                />

                {/* </RadioGroup> */}
              </div>
              <div>
                <MyFormControlLabel value="No" control={<Radio />} label="No" />
                {/* <input type="radio" name="firstNo" id="firstNo" /> */}
                {/* <label htmlFor="firstNo">No</label> */}
              </div>
            </RadioGroup>
          </div>
          <hr />
          <div className="placement_details_instruction_question_container">
            <img src={placementDetailsIcon} alt="placement_details_icon" />
            <p>Rate your fluency in English?</p>
          </div>
          <div
            style={{
              marginLeft: "40px",
              paddingLeft: "10px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <StarRatings
              rating={4}
              starRatedColor="gold"
              changeRating={changeRating}
              numberOfStars={5}
              name="rating"
              starDimension="20px"
            />
          </div>

          <div className="placement_details_first_button_container">
            <Link to="/fresher-placement-details-first-step">
              <img style={{ cursor: "pointer" }} src={backButton} alt="back" />
            </Link>

            <Link to="/fresher-placement-details-third-step">
              <img style={{ cursor: "pointer" }} src={next} alt="next" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FresherPlacementDetailsFirstStep;
