import React, { useState } from "react";
import roadMap from "../img/fresher-eligibility-images/road_map_3.png";
import lenskartCover from "../img/lenskart_cover.png";
import lenskartProfile from "../img/lenskart.png";
import toDashboard from "../img/toDashboard.png";
import lenskartfull from "../img/lenskartfull.png";
import getHired from "../img/hired.png";
import placementDetailsSecondStep from "../img/placement_details_step3.png";
import placementDetailsIcon from "../img/placement_details_first_icon.png";
import StarRatings from "react-star-ratings";
import recordVideo from "../img/record_video.png";
import checkBoxFresher from "../img/checkBoxFresher.png";
import addTimeLocation from "../img/addTimeLocation.png";
import uploadVideo from "../img/upload_video.png";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
// import data from "./";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import interviewDate from "../img/interviewDate.png";
import recordAudio from "../img/record_audio.png";
import uploadAudio from "../img/upload_audio.png";
import videoRecordVideo from "../img/video_recordVideo.png";
import audioRecordVideo from "../img/audio_recordAudio.png";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../img/close_icon.png";
import backButton from "../img/back_button.png";
import next from "../img/next.png";
import confirm from "../img/confirm.png";
import videoFirst from "../img/video_first.png";
import videoSecond from "../img/video_second.png";
import videoThird from "../img/video_third.png";
import videoFourth from "../img/video_fourth.png";
import "./index.css";
import audioFirst from "../img/audio_first.png";
import audioSecond from "../img/audio_second.png";
import audioThird from "../img/audio_third.png";
import audioFinal from "../img/audio_final.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import playIcon from "../img/play_icon.png";
import submitVideo from "../img/submit_video.png";
import tickSymbol from "../img/tick_symbol.png";
import okayButton from "../img/okay_button.png";
import recordingProgress from "../img/recording_progress.png";
import submitRecording from "../img/submit_recording.png";
import { Link } from "react-router-dom";
import uploadImage from "../img/upload_photo.png";
import { Checkbox } from "@mui/material";

const FresherPlacementDetailsFirstStep = () => {
  const changeRating = () => {};

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [isActiveTab, setIsActiveTab] = useState(1);

  const [recordModalState, setRecordModalState] = useState(null);
  const [uploadModalState, setUploadModalState] = useState(null);

  const [audioRecordModalState, setAudioRecordModalState] = useState(null);
  const [audioUploadModalState, setAudioUploadModalState] = useState(null);

  const [isVideoSubmitted, setIsVideoSubmitted] = useState(false);

  const [isAudioSubmitted, setIsAudioSubmitted] = useState(false);
  const [dob, setDob] = useState(null);

  const [mylocation, setMyLocation] = React.useState([
    "Delhi",
    "pune",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
  ]);
  const handleChangeForLocation = (event) => {
    const {
      target: { value },
    } = event;
    setMyLocation(typeof value === "string" ? value.split(",") : value);
  };
  const options = [
    "Delhi",
    "pune",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
  ];
  const Timeimg = ["AM", "PM"];
  const hour = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const minutes = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
  ];
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };
  const onOptionChangeHandler1 = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };
  const onOptionChangeHandler2 = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };
  const onOptionChangeHandler3 = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };

  return (
    <div>
      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        className="fresher_placement_details_modal_container"
      >
        <Modal.Header
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <Modal.Title>aaa</Modal.Title>
          <img onClick={handleClose} src={closeIcon} alt="close" />
        </Modal.Header>
        <div>
          <img
            style={{ width: "20%", marginLeft: "30px", marginTop: "15px" }}
            src={videoRecordVideo}
            alt="video"
          />
        </div>

        <Modal.Body>
          {/* first modal for upload screen */}
          {recordModalState === 1 && (
            <div className="placement_details_modal_body_content">
              <p className="placement_details_tab_upload_red">
                Your device does not support actrive camera recording or does
                not have webcam device enabled.
              </p>
              <p className="placement_details_tab_upload_grey">
                Please
                <span
                  onClick={() => setRecordModalState(2)}
                  className="placement_details_tab_upload_green"
                >
                  &nbsp; upload a video &nbsp;
                </span>
                instead if problem persists.
              </p>
            </div>
          )}

          {/* this modal for upload video button */}
          {uploadModalState === 1 && (
            <div className="placement_details_second_modal_container">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setUploadModalState(2)}
                  src={uploadVideo}
                  alt="upload-video"
                />
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {recordModalState === 2 && (
            <div className="placement_details_second_modal_container">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setRecordModalState(3)}
                  src={videoFirst}
                  alt="upload-video"
                />
                <div></div>
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {uploadModalState === 2 && (
            <div className="placement_details_second_modal_container_bottom">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setRecordModalState(4)}
                  src={videoSecond}
                  alt="upload-video"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <img src={playIcon} alt="play" />
                    <p className="placement_details_camera_time">2:13 Mins</p>
                  </div>
                  <div
                    style={{
                      textDecoration: "underline",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </div>
                </div>

                <img
                  onClick={() => setUploadModalState(3)}
                  style={{ marginTop: "50px", cursor: "pointer" }}
                  src={submitVideo}
                  alt="submit"
                />
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {uploadModalState === 3 && (
            <div className="placement_details_second_modal_container_flex_column">
              <img src={tickSymbol} alt="tick" />
              <br />
              <h3 className="placement_details_instruction_video_success">
                Video submitted successfully
              </h3>
              <br />
              <img
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleClose();
                  setIsVideoSubmitted(true);
                }}
                src={okayButton}
                alt="okay"
              />
            </div>
          )}

          {recordModalState === 3 && (
            <div className="placement_details_second_modal_container">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setRecordModalState(4)}
                  src={videoThird}
                  alt="upload-video"
                />
                <div>
                  <img
                    onClick={() => setRecordModalState(4)}
                    style={{ marginTop: "20px" }}
                    src={recordingProgress}
                    alt="record"
                  />
                </div>
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {recordModalState === 4 && (
            <div className="placement_details_second_modal_container_bottom">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setRecordModalState(4)}
                  src={videoSecond}
                  alt="upload-video"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <img src={playIcon} alt="play" />
                    <p className="placement_details_camera_time">2:13 Mins</p>
                  </div>
                  <div
                    style={{
                      textDecoration: "underline",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </div>
                </div>

                <img
                  onClick={() => setRecordModalState(5)}
                  style={{ marginTop: "50px", cursor: "pointer" }}
                  src={submitRecording}
                  alt="submit"
                />
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {recordModalState === 5 && (
            <div className="placement_details_second_modal_container_flex_column">
              <img src={tickSymbol} alt="tick" />
              <br />
              <h3 className="placement_details_instruction_video_success">
                Recording submitted successfully
              </h3>
              <br />
              <img
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleClose();
                  setIsVideoSubmitted(true);
                }}
                src={okayButton}
                alt="okay"
              />
            </div>
          )}
        </Modal.Body>
      </Modal>

      <Modal
        size="xl"
        show={show1}
        onHide={handleClose1}
        className="fresher_placement_details_modal_container"
      >
        <Modal.Header
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <Modal.Title>Record an aaa</Modal.Title>
          <img onClick={handleClose} src={closeIcon} alt="close" />
        </Modal.Header>
        <div>
          <img
            style={{ width: "20%", marginLeft: "30px", marginTop: "15px" }}
            src={audioRecordVideo}
            alt="video"
          />
        </div>

        <Modal.Body>
          {/* first modal for upload screen */}
          {audioRecordModalState === 1 && (
            <div className="placement_details_modal_body_content">
              <p className="placement_details_tab_upload_red">
                Your device does not support actrive camera recording or does
                not have webcam device enabled.
              </p>
              <p className="placement_details_tab_upload_grey">
                Please
                <span
                  onClick={() => setAudioRecordModalState(2)}
                  className="placement_details_tab_upload_green"
                >
                  &nbsp; upload a audio &nbsp;
                </span>
                instead if problem persists.
              </p>
            </div>
          )}

          {/* this modal for upload video button */}
          {audioUploadModalState === 1 && (
            <div className="placement_details_second_modal_container">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setAudioUploadModalState(2)}
                  src={uploadAudio}
                  alt="upload-video"
                />
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {audioRecordModalState === 2 && (
            <div className="placement_details_second_modal_container">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setAudioRecordModalState(3)}
                  src={audioFirst}
                  alt="upload-video"
                />
                <div></div>
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {audioUploadModalState === 2 && (
            <div className="placement_details_second_modal_container_bottom">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setAudioRecordModalState(4)}
                  src={audioSecond}
                  alt="upload-video"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <img src={playIcon} alt="play" />
                    <p className="placement_details_camera_time">2:13 Mins</p>
                  </div>
                  <div
                    style={{
                      textDecoration: "underline",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </div>
                </div>

                <img
                  onClick={() => setAudioUploadModalState(3)}
                  style={{ marginTop: "50px", cursor: "pointer" }}
                  src={submitVideo}
                  alt="submit"
                />
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {audioUploadModalState === 3 && (
            <div className="placement_details_second_modal_container_flex_column">
              <img src={tickSymbol} alt="tick" />
              <br />
              <h3 className="placement_details_instruction_video_success">
                Video submitted successfully
              </h3>
              <br />
              <img
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleClose1();
                  setIsAudioSubmitted(true);
                }}
                src={okayButton}
                alt="okay"
              />
            </div>
          )}

          {audioRecordModalState === 3 && (
            <div className="placement_details_second_modal_container">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setAudioRecordModalState(4)}
                  src={audioThird}
                  alt="upload-video"
                />
                <div>
                  <img
                    onClick={() => setAudioRecordModalState(4)}
                    style={{ marginTop: "20px" }}
                    src={recordingProgress}
                    alt="record"
                  />
                </div>
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {audioRecordModalState === 4 && (
            <div className="placement_details_second_modal_container_bottom">
              <div style={{ width: "50%" }}>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setAudioRecordModalState(4)}
                  src={audioSecond}
                  alt="upload-video"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <img src={playIcon} alt="play" />
                    <p className="placement_details_camera_time">2:13 Mins</p>
                  </div>
                  <div
                    style={{
                      textDecoration: "underline",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </div>
                </div>

                <img
                  onClick={() => setAudioRecordModalState(5)}
                  style={{ marginTop: "50px", cursor: "pointer" }}
                  src={submitRecording}
                  alt="submit"
                />
              </div>
              <div style={{ width: "30%" }}>
                <h3 className="placement_details_instruction_title">
                  Instructions for uploading:
                </h3>
                <p className="placement_details_instruction_warning">
                  Please read the below script in your video recording and
                  submit.
                </p>
                <p className="placement_details_instruction_description">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          )}

          {audioRecordModalState === 5 && (
            <div className="placement_details_second_modal_container_flex_column">
              <img src={tickSymbol} alt="tick" />
              <br />
              <h3 className="placement_details_instruction_video_success">
                Recording submitted successfully
              </h3>
              <br />
              <img
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleClose1();
                  setIsAudioSubmitted(true);
                }}
                src={okayButton}
                alt="okay"
              />
            </div>
          )}
        </Modal.Body>
      </Modal>

      <Modal
        size="xl"
        show={show2}
        onHide={handleClose2}
        className="fresher_placement_details_modal_container"
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <svg
            width="809"
            height="65"
            viewBox="0 0 809 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 13C0 5.8203 5.8203 0 13 0H796C803.18 0 809 5.8203 809 13V51.4729C809 59.222 802.264 65.2503 794.562 64.3932L409.255 21.5117C408.307 21.4062 407.351 21.4053 406.403 21.5091L14.4147 64.422C6.72095 65.2642 0 59.2389 0 51.4992V13Z"
              fill="#D7E8F0"
            />
          </svg>
        </div>
        <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <p
              style={{
                color: "rgba(0, 0, 0, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "22px",
                fontWeight: "600",
                lineHeight: "43px",
                font: "inter",
                alignContent: "center",
              }}
            >
              Your interview for
            </p>
            <div style={{ display: "grid", placeContent: "center" }}>
              <img
                style={{ background: "none" }}
                // className="fresher_placement_details_profile_icon"
                src={lenskartfull}
                alt="lenskart"
              />
            </div>
            <p
              style={{
                paddingTop: "10px",
                color: "rgba(0, 0, 0, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "22px",
                fontWeight: "600",
                lineHeight: "43px",
                font: "inter",
                alignContent: "center",
              }}
            >
              has been successfully scheduled on following
            </p>
            <div>
              <div
                style={{
                  marginTop: "15px",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  border: "1px solid rgba(14, 95, 89, 0.3)",
                  width: "657px",
                  background: "rgba(14, 95, 89, 0.3) ",
                  height: "51px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "lexend",
                    // lineHeight: "25px",
                  }}
                >
                  Slot-1
                </span>
                <span
                  style={{
                    border: "1px solid rgba(14, 95, 89, 0.3)",
                    height: "30px",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "lexend",
                    lineHeight: "25px",
                  }}
                >
                  Deverabisanahalli, On Tueday, 06 June 2023, 4:00 PM
                </span>
              </div>
            </div>
            <div>
              <div
                style={{
                  marginTop: "15px",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  border: "1px solid rgba(14, 95, 89, 0.3)",
                  width: "657px",
                  background: "rgba(14, 95, 89, 0.3) ",
                  height: "51px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "lexend",
                    // lineHeight: "25px",
                  }}
                >
                  Slot-1
                </span>
                <span
                  style={{
                    border: "1px solid rgba(14, 95, 89, 0.3)",
                    height: "30px",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "lexend",
                    lineHeight: "25px",
                  }}
                >
                  Deverabisanahalli, On Tueday, 06 June 2023, 4:00 PM
                </span>
              </div>
            </div>
            <div>
              <div
                style={{
                  marginTop: "15px",
                  marginBottom: "30px",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  border: "1px solid rgba(14, 95, 89, 0.3)",
                  width: "657px",
                  background: "rgba(14, 95, 89, 0.3) ",
                  height: "51px",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "lexend",
                    // lineHeight: "25px",
                  }}
                >
                  Slot-1
                </span>
                <span
                  style={{
                    border: "1px solid rgba(14, 95, 89, 0.3)",
                    height: "30px",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "lexend",
                    lineHeight: "25px",
                  }}
                >
                  Deverabisanahalli, On Tueday, 06 June 2023, 4:00 PM
                </span>
              </div>
            </div>
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/fresher-dashboard">
                <img src={toDashboard} alt="toDashboard" />
              </Link>
            </div>

            <div
              // onClick={() => setVerifyCheck(true)}
              style={{
                fontFamily: "lexend",
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "25px",
                color: "rgba(0, 95, 89, 1)",
                display: "flex",
                placeContent: "center",
                cursor: "pointer",

                paddingTop: "15px",
              }}
            >
              <Link
                style={{
                  color: "rgba(0, 95, 89, 1)",
                  borderBottom: "1px solid rgba(14, 95, 89, 1)",
                }}
                to="/fresher-placement-drive"
              >
                {" "}
                View more jobs{" "}
              </Link>
              <span style={{}}></span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div
        className="container"
        style={{ marginTop: "150px", width: "1235px !important" }}
      >
        <section className="roadMap-section">
          <img style={{ margin: "5px auto" }} src={roadMap} alt="road-map" />
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
              <p className="fresher_placement_details__profile_title">
                Lenskart
              </p>
              <div style={{ paddingLeft: "40px" }}>
                <h3 className="fresher_placement_details__profile_job_title">
                  Sales Associates (Frontend Sales)
                </h3>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="fresher_placement_details_container_flex">
                    <div className="fresher_placement_job_location_container">
                      <p className="fresher_placement_job_location">
                        Location:
                      </p>
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
                  </div>
                  <div>
                    <img src={interviewDate} alt="interview date" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="placement_details_instruction_first_step_container">
            <p className="placement_details_instruction">
              Please follow the below steps to Submit your Application{" "}
            </p>
            <div>
              <img src={placementDetailsSecondStep} alt="placement-details" />
            </div>
            <h3 className="placement_details_instruction_company_screening_question">
              You can select multiple locations with date and time
            </h3>
            <br />
            <div
              style={{
                // width: "1167px",
                padding: "10px 0px 10px 0px",
                display: "flex",
                height: "116px",
                justifyContent: "space-around",
                background: "rgba(14, 95, 89, 0.05)",
              }}
            >
              <div>
                <p className="under-main-section">
                  Please confirm your location for interview
                </p>
                <div>
                  <select
                    style={{
                      width: "313px",
                      height: "35px",
                      borderRadius: "5px",
                      background: "rgba(255, 255, 255, 1)",
                      // "linear-gradient(180deg, rgba(254, 205, 8, 0.07) 50%, rgba(14, 95, 89, 0.19) 100%)",
                      border: "2px solid rgba(0, 95, 89, 1)",
                    }}
                    onChange={onOptionChangeHandler}
                  >
                    <option
                      style={{
                        fontSize: "17px",
                        fontWeight: "400",
                        fontFamily: "lexend",
                        color: "#0e5f59",
                      }}
                    >
                      Select Location
                    </option>
                    {options?.map((option, index) => {
                      return <option key={index}>{option}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div style={{ paddingRight: "60px" }}>
                <p className="under-main-section">
                  {" "}
                  Pick suitable date and time for interview
                </p>
                <div
                  style={{
                    height: "35px",
                    gap: "20px",
                    width: "188px",
                    border: "2px solid rgba(0, 95, 89, 1)",
                    display: "flex",
                  }}
                >
                  <div>
                    <DatePicker
                      style={{
                        background: "rgba(255, 255, 255, 1)",
                        height: "35px !important",
                        // width: "200px",
                      }}
                      className="custom-datepicker"
                      id="dob-input"
                      dateFormat="dd/MM/yyyy"
                      selected={dob}
                      // maxDate={new Date("2015-12-31")}
                      onChange={(date) => setDob(date)}
                      // placeholderText="Select sdate"
                      // popperPlacement="top"
                    />
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <select
                      style={{
                        width: "60px",
                        height: "35px",
                        borderRadius: "5px",
                        background: "rgba(255, 255, 255, 1)",
                        // background:
                        // "linear-gradient(180deg, rgba(254, 205, 8, 0.07) 50%, rgba(14, 95, 89, 0.19) 100%)",
                        border: "2px solid rgba(0, 95, 89, 1)",
                      }}
                      onChange={onOptionChangeHandler1}
                    >
                      {/* <option>Select Location</option> */}
                      {hour.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                    <select
                      style={{
                        width: "60px",
                        background: "rgba(255, 255, 255, 1)",
                        height: "35px",
                        borderRadius: "5px",
                        // background:
                        // "linear-gradient(180deg, rgba(254, 205, 8, 0.07) 50%, rgba(14, 95, 89, 0.19) 100%)",
                        border: "2px solid rgba(0, 95, 89, 1)",
                        color: "rgba(0, 95, 89, 1)",
                        fontSize: "18px",
                        fontWeight: "400",
                      }}
                      onChange={onOptionChangeHandler2}
                    >
                      {/* <option>Select Location</option> */}
                      {minutes.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                    <select
                      style={{
                        width: "60px",
                        height: "35px",
                        background: "rgba(255, 255, 255, 1)",
                        borderRadius: "5px",
                        color: "rgba(0, 95, 89, 1)",
                        fontSize: "18px",
                        fontWeight: "400",
                        // background:
                        // "linear-gradient(180deg, rgba(254, 205, 8, 0.07) 50%, rgba(14, 95, 89, 0.19) 100%)",
                        border: "2px solid rgba(0, 95, 89, 1)",
                      }}
                      onChange={onOptionChangeHandler}
                    >
                      {/* <option>Select Location</option> */}
                      {Timeimg.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: "35px" }}>
                <img src={addTimeLocation} alt="addTimeLocation" />
              </div>
            </div>

            <div>
              <Checkbox />
              <img src={checkBoxFresher} alt="checkBoxFresher" />
              {/* I want to get the job description on my whatsapp number */}
            </div>
          </div>

          <div className="placement_details_first_button_container">
            <Link to="/fresher-placement-details-second-step">
              <img style={{ cursor: "pointer" }} src={backButton} alt="back" />
            </Link>

            <Link onClick={handleShow2}>
              <img style={{ cursor: "pointer" }} src={confirm} alt="confirm" />
            </Link>
          </div>
          <br />
          <br />
        </section>
      </div>
    </div>
  );
};

export default FresherPlacementDetailsFirstStep;
