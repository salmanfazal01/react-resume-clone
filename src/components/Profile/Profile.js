import React from "react";

import "./Profile.css";
import { Button, Grid, Icon, Typography } from "@material-ui/core";
import resume from "../../utils/resume";
import GetAppIcon from "@material-ui/icons/GetApp";
import CustomButton from "../Button/Button";

const Profile = (props) => {
  const { name, title, displayImage, birthday, email, socials } = resume;

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
        {Object.keys(socials).map((key) => (
          <li>
            <p>
              <span>{key}: </span>{" "}
              <a href={socials[key].link} target="_blank">
                {socials[key].text}
              </a>
            </p>
          </li>
        ))}
      </ul>

      <Grid xs={12} className="button_container">
        <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
      </Grid>
    </div>
  );
};

export default Profile;
