import React, { useEffect, useState, FunctionComponent } from "react";
import styles from "./FIOGameUXUsers.module.css";
import mainImage from "../assets/images/group-1@2x.png";
import hyperionImg from "../assets/images/hyperion.svg";
import adobeImg from "../assets/images/adobestock-615246149-1@2x.png";
import checkmarkIcon from "../assets/images/checkmark.svg";
import openImg from "../assets/images/open-in-browser.svg";
import cancelImg from "../assets/images/cancel.svg";
import fioAppImg from "../assets/images/fio-app-icon.svg";
import misc166Img from "../assets/images/1664313156278-1@2x.png";
import miscImg from "../assets/images/--1.svg";


const SignUp = ({ setCurrentScreen }) => {
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  // const _org = localStorage.getItem("org");
  // const _orgTitle = localStorage.getItem("orgTitle");

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSave = () => {
    if (mailformat.test(email)) {
      setCurrentScreen(2);
      localStorage.setItem("email", email);
    } else {
      setIsEmailValid(false);
    }
    // localStorage.setItem("orgTitle", orgTitle);
  };

  // useEffect(() => {
  //   if (_org) {
  //     setOrg(_org);
  //     setEmail(_orgTitle);
  //   }
  // }, [_org]);

  return (

    <div className={styles.fioGameuxUsers}>
      <div className={styles.background}>
        <img
          className={styles.adobestock6152461491Icon}
          alt=""
          src={adobeImg}
        />
        <div className={styles.backgroundChild} />
      </div>
      <div className={styles.mainContentBlock}>
        <b className={styles.welcome}>Welcome!</b>
        <div className={styles.creatingYourAccount}>
          Creating your account now.
        </div>
        <img className={styles.hyperionIcon} alt="" src={hyperionImg}/>
        <img className={styles.mainContentImage} alt="" src={mainImage} />
        <div className={styles.disclaimer}>
          <div className={styles.byContinuingYouAreAcknowlWrapper}>
            <div className={styles.byContinuingYouContainer}>
              <p className={styles.byContinuingYou}>
                By continuing, you are acknowledging and accepting our
              </p>
              <p className={styles.termsOfUseAndPrivacyPolic}>
                <span className={styles.termsOfUse}>Terms of Use</span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.and}>and</span>
                <span className={styles.span}>{` `}</span>
                <span>Privacy Policy</span>
              </p>
            </div>
          </div>
          <img className={styles.checkmarkIcon} alt="" src={checkmarkIcon}/>
        </div>
        <div className={styles.cta}>
          <button
            onClick={handleSave}
            className={styles.submit}
          >
          Submit
        </button>
        </div>
        <div>
          <input
            type="email"
            className={styles.input}
            value={email}
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.signUp}>
          <div className={styles.alreadyHaveAn}>Already have an account?</div>
          <div className={styles.signInNowParent}>
            <div className={styles.signInNow}>Sign In Now</div>
            <img
              className={styles.openInBrowser}
              alt=""
              src={openImg}
            />
          </div>
        </div>
        <img className={styles.cancelIcon} alt="" src={cancelImg}/>
      </div>
      <div className={styles.copyrightFioLabsParent}>
        <div className={styles.signInNow}>@Copyright FIO Labs</div>
        <div className={styles.signInNow}>Terms of Use</div>
        <div className={styles.signInNow}>Discord</div>
      </div>
      <div className={styles.poweredBy}>Powered by</div>
      <b className={styles.x}>X</b>
      <img className={styles.fioAppIcon} alt="" src={fioAppImg} />
      <div className={styles.metakeepAppIcon}>
        <img className={styles.icon} alt="" src={misc166Img} />
      </div>
      <div className={styles.fioLabs}>
        <img className={styles.icon1} alt="" src={miscImg}/>
        <b className={styles.fiolabs}>FIOLABS</b>
      </div>
    </div>

  );
};

export default SignUp;
