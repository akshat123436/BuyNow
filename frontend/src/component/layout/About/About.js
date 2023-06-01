import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/akshat__tt";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dwwqgka88/image/upload/v1685607442/avatars/zyihm0cjkcrtb7cg8ylm.jpg"
              alt="Creator"
            />
            <Typography>Akshat Kothavade</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              Hii.....I am akshat kothavade, currently pursuing my B.tech in IT
              MITS Gwalior, currently i'm enhancing my web development skills
              and programming skills. I've been learning web development and
              doing competitive programming for the past 3 years.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect with me / links</Typography>
            <a href="https://instagram.com/akshat__tt" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://github.com/akshat123436" target="blank">
              <GitHubIcon className="githubicon" />
            </a>
            <a
              href="https://www.linkedin.com/in/akshatkothavade"
              target="blank"
            >
              <LinkedInIcon className="linkicon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
