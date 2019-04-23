import React from "react"
import Layout from "../components/layout"
import Styled from "styled-components"

import logo from "../images/minimal-logo.png"
import banner from "../images/banner.svg"
import AnimatedBanner from "../components/animatedBanner"

const Centered = Styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 550px;
  height: 600px;
  margin: auto;
  min-width: 315px;
  .textLogo {
    display: flex;
    flex-wrap: none;
  }
  .logo {
    width: 160px;
    height: 160px;
    margin: 0;
  }
  .title {
    border-bottom: none;
    margin: 0;
    line-height: 1;
    text-align: center;
    .top {
      font-size: 92px;
      font-weight: 500;
    }
    .bottom {
      font-size: 77px;
      font-weight: 280;
    }
  }
  .tagline {
    font-weight: 300;
    font-size: 34px;
    text-align: center;
    line-height: 1.25;
    margin: auto;
    margin-bottom: 10px;
  }
  hr {
    height: 2px;
    background-color: black;
  }
  .newsletterSignUp {
    display: flex;
    animation: fadeIn 2s;
    p {
      margin: auto;
      max-width: 80%;
    }
    form {
      width: 220px;
      margin: auto;
    }
    input {
      height: 35px;
      margin: 3px 0;
      text-align: center;
      width: 220px;
    }
    .submitButton {
      background-color: #55efc4;
      color: white;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 34px;
      line-height: 35px;
      border: none;
    }
  }
  animation: slideInFromLeft 1s;
  @keyframes slideInFromLeft {
    0% { transform: translateX(-100vw); }
    100% { transform: translateX(0); }
  }
  @keyframes fadeIn {
    0%, 50% { opacity: 0; }
    100% { opacity: 1; }
  }
  @media(max-width: 600px) {
    width: 100%;
    .textLogo {
      display: block;
      text-align: center;
      .title {
        .top { font-size: 70px; }
        .bottom { font-size: 59px; }
      }
    }
    .tagline {
      font-size: 24px;
      width: 300px;
    }
    hr {
     margin: 20px 0;
     animation: fadeIn 0.1s;
    }
    .newsletterSignUp {
      display: block;
      p {
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }
`

const Banner = Styled.div`
  margin-left: calc(-1200px + 60vw);
  margin-right: calc(-1200px + 60vw);
  svg {
    width: 100%;
    height: auto;
  }
  
  animation: slideDown 1s;
  @keyframes slideDown {
    0%, 50% { transform: translateY(-20vh); }
    100% { transform: translateY(0); }
  }
`

export default ({ data }) =>
  <Layout>
    <Banner>
      <img src={banner} alt="banner of koozies"/>
      {/*<AnimatedBanner/>*/}
    </Banner>
    <Centered>
      <div className="textLogo">
        <img src={logo} alt="logo" className="logo"/>
        <h1 className="title">
          <span className="top">Cool&nbsp;Kids</span><br/>
          <span className="bottom">Koozie&nbsp;Club</span>
        </h1>
      </div>
      <p className="tagline">
        Freshly designed, beautiful koozies delivered every month
      </p>
      <hr/>
      <div className="newsletterSignUp">
        <p className="actionText">
          Our first koozies are still being designed. Sign up for our newsletter to recieve special offers and be notified when they are ready
        </p>
        <form name="newsletter-signup" method="POST" data-netlify="true">
          <input type="email" name="email" placeholder="Enter email address here"/>
          <br/>
          <input className="submitButton" type="submit" value="Submit"/>
        </form>
      </div>
    </Centered>
  </Layout>
