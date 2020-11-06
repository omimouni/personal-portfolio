import { motion } from "framer-motion";
import React, { Component } from "react";

const classes = {
  section: "mb-6",
  heading: "text-2xl font-bold text-purple-700",
  paragraph: "py-2 text-sm",
  readmore: "underline text-purple-800",
  // Skills
  skills: {
    flex: "flex",
    container: "w-2/4",
    resume: "w-2/4",
    list: "ml-5 py-1 text-gray-700 list-disc text-sm",
    heading: "text-purple-700 px-2 py-2",
    work: {
      container: "py-2 list-disc",
      link: "text-black block pt-3",
      desc: "text-sm ml-2",
    },
  },
};

class Home extends Component {
  render() {
    return (
      <div>
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.1 }}
          className={classes.section}
        >
          <h1 className={classes.heading}>About me</h1>
          <p className={classes.paragraph}>
            Im Oumar Mimouni, technology enthusiast and a junior software
            engineer, currently I'm open to hire as a web development, when Im
            not freelancing you'll find me exploring side projects ideas.
          </p>
        </motion.div>
        <div className={classes.section}>
          <div className={classes.skills.flex}>
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className={classes.skills.container}
            >
              <h1 className={classes.heading}>Skills</h1>
              <div>
                <h1 className={classes.skills.heading}>Frontend Development</h1>
                <ul className={classes.skills.list}>
                  <li>HTML/CSS/Javascript</li>
                  <li>React Ecosystem</li>
                  <li>WordPress Development</li>
                </ul>
              </div>

              <div>
                <h1 className={classes.skills.heading}>Backend Development</h1>
                <ul className={classes.skills.list}>
                  <li>Laravel</li>
                  <li>Express.js</li>
                  <li>MERN Stack</li>
                </ul>
              </div>

              <div>
                <h1 className={classes.skills.heading}>Other</h1>
                <ul className={classes.skills.list}>
                  <li>C/C++</li>
                  <li>Electron.js</li>
                  <li>Web Design</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className={classes.skills.resume}
            >
              <h1 className={classes.heading}>Previous Works</h1>
              <ul className={classes.skills.work.container}>
                <li>
                  <a
                    className={classes.skills.work.link}
                    href="https://dramalchabach.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://dramalchabach.com/
                  </a>
                  <p className={classes.skills.work.desc}>
                    WordPress based website.
                  </p>
                </li>
                <li>
                  <a
                    className={classes.skills.work.link}
                    href="https://artificium.ma/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://artificium.ma/
                  </a>
                  <p className={classes.skills.work.desc}>
                    Digital marketing agency website.
                  </p>
                </li>
                <li>
                  <a
                    className={classes.skills.work.link}
                    href="https://proximity.ma/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://proximity.ma/
                  </a>
                  <p className={classes.skills.work.desc}>
                    Education platform.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
