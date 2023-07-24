import React from "react";
import details from "../img/details.png";
import getHired from "../img/get_hired.png";
import data from "./data.json";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import calender from "../img/calender.png";
import roadMap from "../img/placement-drive-roadmap.png";
import Box from "@mui/material/Box";
import crossIcon from "../img/cross_3.png";
import sort from "../img/sort.png";

const FresherPlacementDrive = () => {
  const [location, setLocation] = React.useState([]);
  const [jobtype, setJobType] = React.useState([]);
  const [Company, setCompany] = React.useState([]);

  const handleChange = (event) => {
    // setLocation(event.target.value);
  };

  const onHandleCrossIcon = () => {
    location.pop();
    alert("click");
  };

  const handleChangeForLocation = (event) => {
    const {
      target: { value },
    } = event;
    setLocation(typeof value === "string" ? value.split(",") : value);
  };
  const handleChangeForJobType = (event) => {
    const {
      target: { value },
    } = event;
    setJobType(typeof value === "string" ? value.split(",") : value);
  };
  const handleChangeForCompany = (event) => {
    const {
      target: { value },
    } = event;
    setCompany(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="fresher-placement-drive-container">
      <section className="roadMap-section">
        <img
          style={{ margin: "5px auto", width: "100%" }}
          src={roadMap}
          alt="road-map"
        />
      </section>
      <section className="fresher_placement_company_container">
        <div className="fresher_placement_company_container_left">
          <h3 className="fresher_placement_company_location">Location</h3>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty
              value={location}
              label="Location"
              defaultValue="Select"
              onChange={handleChangeForLocation}
              className="select-container-select"
            >
              {data.map((company, index) => {
                return (
                  <MenuItem
                    className="select-container-items"
                    value={company.location}
                  >
                    {company.location}
                  </MenuItem>
                );
              })}
            </Select>
            <div style={{ display: "flex" }}>
              {location?.map((name) => {
                return (
                  <Box>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 95, 89, 1)",
                        padding: "10px",
                        borderRadius: "52px",
                        color: "rgba(255, 255, 255, 1)",
                        // minWidth: "80.75px",
                        width: "fit-content",
                      }}
                    >
                      {name}
                      <img
                        style={{
                          color: "rgba(255, 255, 255, 1)",
                          marginLeft: "5px",
                        }}
                        onClick={onHandleCrossIcon}
                        src={crossIcon}
                        alt="cross"
                      ></img>
                    </div>
                  </Box>
                );
              })}
            </div>
          </FormControl>

          <h3 className="fresher_placement_company_job_type">Job Type</h3>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty
              value={jobtype}
              label="Location"
              onChange={handleChangeForJobType}
              className="select-container-select"
            >
              {data.map((company, index) => {
                return (
                  <MenuItem
                    className="select-container-items"
                    value={company.jobType}
                  >
                    {company.jobType}
                  </MenuItem>
                );
              })}
            </Select>
            <div style={{ display: "flex" }}>
              {jobtype?.map((name) => {
                return (
                  <Box>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 95, 89, 1)",
                        padding: "10px",
                        borderRadius: "52px",
                        color: "rgba(255, 255, 255, 1)",
                        width: "fit-content",
                      }}
                    >
                      {name}
                      <img
                        style={{
                          color: "rgba(255, 255, 255, 1)",
                          marginLeft: "5px",
                        }}
                        onClick={onHandleCrossIcon}
                        src={crossIcon}
                        alt="cross"
                      ></img>
                    </div>
                  </Box>
                );
              })}
            </div>
          </FormControl>
          <h3 className="fresher_placement_company_company">Company</h3>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty
              value={Company}
              label="Location"
              onChange={handleChangeForCompany}
              className="select-container-select"
            >
              {data.map((company, index) => {
                return (
                  <MenuItem
                    className="select-container-items"
                    value={company.company}
                  >
                    {company.company}
                  </MenuItem>
                );
              })}
            </Select>
            <div style={{ display: "flex" }}>
              {Company?.map((name) => {
                return (
                  <Box>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 95, 89, 1)",
                        padding: "10px",
                        borderRadius: "52px",
                        color: "rgba(255, 255, 255, 1)",
                        // minWidth: "80.75px",
                        width: "fit-content",
                      }}
                    >
                      {name}
                      <img
                        style={{
                          color: "rgba(255, 255, 255, 1)",
                          marginLeft: "5px",
                        }}
                        onClick={onHandleCrossIcon}
                        src={crossIcon}
                        alt="cross"
                      ></img>
                    </div>
                  </Box>
                );
              })}
            </div>
          </FormControl>
        </div>
        <div className="fresher_placement_company_container_right">
          <h3 className="fresher_placement_company_job_title">Search</h3>
          <div className="fresher_placement_company_job_input_container">
            <input
              className="fresher_placement_company_job_input_container_input"
              type="text"
              name=""
              id=""
              placeholder="Enter keyword"
            />
            <button className="fresher_placement_company_job_input_container_button">
              <img src={sort} alt="sort" />
            </button>
          </div>

          <div className="fresher_placement_company_inner_map_container">
            {data?.map((item, i) => {
              return (
                <div className="fresher_placement_company_inner_main_container">
                  <div className="fresher_placement_company_flex_container">
                    <div className="fresher_placement_comapany_flex_inner_container">
                      <img src={`/img/${item.image}.png`} alt={item.title} />
                      <div>
                        <h3 className="fresher_placement_company_inner_container_position">
                          {item.title}
                        </h3>
                        <p className="fresher_placement_company_inner_container_company">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <div className="fresher_placement_company_inner_container_flex ">
                      <p className="fresher_placement_company_inner_container_date">
                        <img src={calender} alt="calender" /> &nbsp; Interview
                        on {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="fresher_placement_company_inner_container_flex_second_container">
                    <div>
                      <div className="fresher_placement_company_inner_container_flex">
                        <p className="fresher_placement_company_inner_container_location">
                          Location&nbsp;:
                          <span
                            style={{
                              color: "rgba(0, 95, 89, 1)",
                              marginLeft: "10px",
                            }}
                          >
                            {item.location}
                          </span>
                        </p>
                      </div>
                      <div className="fresher_placement_company_inner_container_second_flexs">
                        <div className="fresher_placement_company_inner_container_flex">
                          <p className="fresher_placement_company_inner_container_job_type">
                            Job Type&nbsp;:
                            <span
                              style={{
                                color: "rgba(0, 95, 89, 1)",
                                marginLeft: "10px",
                              }}
                            >
                              {item.jobType}
                            </span>
                          </p>
                        </div>
                        <p>&nbsp;|&nbsp;</p>

                        <div className="fresher_placement_company_inner_container_flex">
                          <p className="fresher_placement_company_inner_container_posts">
                            No. of Posts&nbsp;:
                            <span
                              style={{
                                color: "rgba(0, 95, 89, 1)",
                                marginLeft: "10px",
                              }}
                            >
                              {item.noOfPosts}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Link to="/fresher-placement-details">
                        <img
                          style={{ cursor: "pointer", width: "135px" }}
                          src={details}
                          alt="details"
                        />
                      </Link>
                      <Link to="/fresher-placement-details-first-step">
                        <img
                          style={{
                            cursor: "pointer",
                            width: "141px",
                            marginLeft: "10px",
                          }}
                          src={getHired}
                          alt="get-hired"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FresherPlacementDrive;
