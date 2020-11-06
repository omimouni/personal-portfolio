import { motion } from "framer-motion";
import React, { Component } from "react";
import avatar from "./avatar.jpg";

const classes = {
  topSection: "py-4",
  heading: "text-3xl mb-2",
  descFlex: "flex",
  description: "text-sm w-3/4",
  avatar: "bg-black w-40 h-40 rounded-full ml-4 overflow-hidden",
  avatarImg: "w-full",
  // Navbar
  nav: "flex w-full justify-center py-3 border-b mb-12",
  navElement: "px-2 text-lg  text-gray-900 hover:text-gray-700",
  socialmedia: "my-2 text-black ",
};

class Header extends Component {
  render() {
    return (
      <motion.header
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className=""
      >
        <div className={classes.topSection}>
          <h1 className={classes.heading}>Welcome, </h1>
          <div className={classes.descFlex}>
            <div className={classes.description}>
              <p>
                Hello, I'm Oumar Mimouni and welcome arround to my portfolio, I
                tried to keep it as minimal as possible just like an elegent.
              </p>
              <nav className={classes.socialmedia}>
                <li>
                  <a href="https://github.com/omimouni">
                    <i className="fab mr-1 fa-github"></i>github
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/oumar_mimouni">
                    <i className="fab mr-1 fa-twitter"></i>twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/oumarmimouni/">
                    <i className="fab mr-1 fa-linkedin"></i>linkedin
                  </a>
                </li>
                <li>
                  <a href="mailto:oumar.mimouni@gmail.com">
                    <i className="fa mr-1 fa-envelope"></i>
                    oumar.mimouni@gmail.com
                  </a>
                </li>
              </nav>
            </div>
            <div className={classes.avatar}>
              <img className={classes.avatarImg} alt='' src={avatar} />
            </div>
          </div>
        </div>
      </motion.header>
    );
  }
}

export default Header;
