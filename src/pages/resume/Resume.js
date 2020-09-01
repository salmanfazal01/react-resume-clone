import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper, Typography, Icon } from "@material-ui/core";
import { SchoolRounded, WorkRounded } from "@material-ui/icons";

import "./Resume.css";
import { Grid } from "@material-ui/core";

const Resume = (props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {/*About me*/}
        <Grid container className="section p_30 pb_45">
          <Grid item className="section_title top_30">
            <span></span>
            <h2>About Me</h2>
          </Grid>
          <Grid container className="top_30">
            <Grid item>
              <Typography variant="body2" className="aboutme_text">{props.about}</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/*Experiences + Education*/}
        <Grid container className="section">
          <Grid item className="section_title top_30">
            <span></span>
            <h2>Resume</h2>
          </Grid>

          <Grid container className="top_30">
            {/*Experiences*/}
            <Grid item md={6} className="experience pb_30">
              <Timeline className="timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot className="timeline_dot_header">
                      <WorkRounded />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" className="timeline_header">
                      Work Experience
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {props.experiences.map((experience) => (
                  <TimelineItem>
                    <TimelineSeparator className="separator_padding">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
            {/*Experiences*/}
            <Grid item md={6} className="experience pb_30">
              <Timeline className="timeline">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot className="timeline_dot_header">
                      <SchoolRounded />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" className="timeline_header">
                      Education
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                {props.education.map((education) => (
                  <TimelineItem>
                    <TimelineSeparator className="separator_padding">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
          </Grid>
        </Grid>

        {/*Services*/}
        <Grid container className="section graybg p_50 pb_50">
          <Grid item className="section_title mb_45">
            <span></span>
            <h2>My Services</h2>
          </Grid>
          <Grid container spacing={3} justify={"space-between"}>
            {props.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography variant="h6" className="service_title">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="service_description">
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resume;
