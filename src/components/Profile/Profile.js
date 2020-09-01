import React from "react";

import "./Profile.css";
import {Button, Grid, Icon, Typography} from "@material-ui/core";
import resume from "../../utils/resume";
import GetAppIcon from "@material-ui/icons/GetApp";

const Profile = (props) => {
  const {
    name,
    title,
    displayImage,
    birthday,
    email,
    socials: { linkedIn },
  } = resume;

  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{name}</Typography>
        <Typography className="title">{title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={require(`../../assets/images/${displayImage}`)} alt="" />
      </figure>

      <ul className="profile_information">
        <li></li>
        <li>
          <p>
            <span>Name:</span> {name}{" "}
          </p>
        </li>
        <li>
          <p>
            <span>Birthday:</span> {birthday}
          </p>
        </li>
        <li>
          <p>
            <span>Job:</span> {title}
          </p>
        </li>
        <li>
          <p>
            <span>Email:</span> {email}
          </p>
        </li>
        <li>
          <p>
            <span>LinkedIn:</span> {linkedIn}
          </p>
        </li>
      </ul>

      <Grid xs={12} className='button_container'>
        <Button
          variant="contained"
          className="site_btn"
          endIcon={
            <div className="icon_container">
              <GetAppIcon fontSize="small" className="icon" />
            </div>
          }
        >
          Download CV
        </Button>
      </Grid>
    </div>
  );
};

export default Profile;
