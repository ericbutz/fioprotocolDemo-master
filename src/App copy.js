import React, { useState } from "react";
import Header from "./components/Header";
import Domain from "./components/Domain";
import Mode from "./components/Mode";
import RegisterHandle from "./components/RegisterHandle";
import Diagnostics from "./components/Diagnostics";
import SignUp from "./components/Signup";

const Screens = ({ currentScreen, ...rest }) => {
  const screenObj = {
    //1: <Mode {...rest} />,
    1: <SignUp {...rest}/>,
    2: <Domain {...rest} />,
    //4: <RegisterHandle {...rest} />,
    3: <Diagnostics {...rest} />,
  };

  if (screenObj[currentScreen]) {
    return screenObj[currentScreen];
  }
};

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const orgTitle = localStorage.getItem('domain')

  return (
      <div>
          <div
            className={`xl:ml-[115px]  ml-[10px] mt-8 z-1 cursor-pointer relative return-btn ${currentScreen > 1 ? '' : "!invisible"}`}
            onClick={() => setCurrentScreen(currentScreen - 1)}
          >
            {`<- Return`}
          </div>

        <div >
          <Screens
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
          />
        </div>
    </div>
  );
};

export default App;
