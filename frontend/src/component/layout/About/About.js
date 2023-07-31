import React, { Fragment } from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/akshat__tt";
  };
  return (
    <Fragment>
      <div className="aboutSection">
        <div></div>
        <div className="aboutSectionGradient"></div>
        <div className="aboutSectionContainer">
          <Typography component="h1">About Us</Typography>
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
                Hii.....I am Akshat Kothavade, currently pursuing my B.tech in
                IT MITS Gwalior, currently i'm enhancing my web development
                skills and programming skills. I've been learning web
                development and doing competitive programming for the past 3
                years.
              </span>
            </div>
            <div className="aboutSectionContainer2">
              {/* <Typography component="h2">Connect with me / links</Typography>
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
              </a> */}
              {/* <div> */}
              <Avatar
                style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                src="https://res.cloudinary.com/dwwqgka88/image/upload/c_thumb,w_302,h_350,g_auto/v1690782178/avatars/LaviImage.jpg"
                alt="Creator"
              />
              <Typography>Lavi Tomar</Typography>
              <Button onClick={visitInstagram} color="primary">
                Visit Instagram
              </Button>
              <span>
                I am Lavi Tomar, a dedicated and enthusiastic student currently
                pursuing my B.Tech in Information Technology from MITS Gwalior.
                With a passion for the MERN stack, I am committed to honing my
                development skills and striving for continuous growth in the
                field.
              </span>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
