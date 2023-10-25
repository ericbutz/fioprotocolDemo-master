import React, { useEffect, useState, FunctionComponent } from "react";
import styles from "./FIOGameUXUsers.module.css";

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
          src="/adobestock-615246149-1@2x.png"
        />
        <div className={styles.backgroundChild} />
      </div>
      <div className={styles.mainContentBlock}>
        <b className={styles.welcome}>Welcome!</b>
        <div className={styles.creatingYourAccount}>
          Creating your account now.
        </div>
        <img className={styles.hyperionIcon} alt="" src="/hyperion.svg" />
        <img className={styles.mainContentImage} alt="" src="/group-1@2x.png" />
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
          <img className={styles.checkmarkIcon} alt="" src="/checkmark.svg" />
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
              src="/open-in-browser.svg"
            />
          </div>
        </div>
        <img className={styles.cancelIcon} alt="" src="/cancel.svg" />
      </div>
      <div className={styles.copyrightFioLabsParent}>
        <div className={styles.signInNow}>@Copyright FIO Labs</div>
        <div className={styles.signInNow}>Terms of Use</div>
        <div className={styles.signInNow}>Discord</div>
      </div>
      <div className={styles.poweredBy}>Powered by</div>
      <b className={styles.x}>X</b>
      <img className={styles.fioAppIcon} alt="" src="/fio-app-icon.svg" />
      <div className={styles.metakeepAppIcon}>
        <img className={styles.icon} alt="" src="/1664313156278-1@2x.png" />
      </div>
      <div className={styles.fioLabs}>
        <img className={styles.icon1} alt="" src="/--1.svg" />
        <b className={styles.fiolabs}>FIOLABS</b>
      </div>
    </div>

  );
};

export default SignUp;
