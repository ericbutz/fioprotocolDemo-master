import React, { useState } from "react";
import styles from "./FIOGameUXUsers.module.css";

import mainImage from "../assets/images/group-1@2x.png";
import hyperionImg from "../assets/images/hyperion.svg";
import adobeImg from "../assets/images/adobestock-615246149-1@2x.png";
import cancelImg from "../assets/images/cancel.svg";
import fioAppImg from "../assets/images/fio-app-icon.svg";
import misc166Img from "../assets/images/1664313156278-1@2x.png";
import miscImg from "../assets/images/--1.svg";

const Domain = ({ setCurrentScreen }) => {
  const [domain, setDomain] = useState("");
  const [handleName, setHandleName] = useState("");

  const handleSave = () => {
    setCurrentScreen(3);
    localStorage.setItem("domain", domain);
    localStorage.setItem("handle", handleName);
  };

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
      <div className={styles.enterDomain}>
        Select Handle and Domain
      </div>
      <img className={styles.hyperionIcon} alt="" src={hyperionImg}/>
      <img className={styles.mainContentImage} alt="" src={mainImage} />
      <div>
        <input
          type="text"
          className={styles.input2}
          value={handleName}
          placeholder="Enter Handle Name"
          onChange={(e) => setHandleName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          className={styles.input}
          value={domain}
          placeholder="Enter Domain Name"
          onChange={(e) => setDomain(e.target.value)}
        />
      </div>
      <div className={styles.cta}>
        <button
          onClick={handleSave}
          className={styles.submit}
          disabled={!domain || !handleName}
        >
          Continue
        </button>
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
    <img className={styles.fioAppIcon} alt="" src={fioAppImg}/>
    <div className={styles.metakeepAppIcon}>
      <img className={styles.icon} alt="" src={misc166Img} />
    </div>
    <div className={styles.fioLabs}>
      <img className={styles.icon1} alt="" src={miscImg} />
      <b className={styles.fiolabs}>FIOLABS</b>
    </div>
  </div>
  );
};

export default Domain;
