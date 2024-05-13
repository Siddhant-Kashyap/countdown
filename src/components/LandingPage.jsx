import Countdown from "./Countdown";
import "./LandingPage.css";
import UserInput from "./UserInput";
const LandingPage = () => {
  return (
    <>
      <div className="landingPage">
        <div>
          <div className="heading">
            <div className="heading1">
              <h1>Countdown</h1>
            </div>
            <div className="heading2">
              <h1> Timer</h1>
            </div>
          </div>
          <div className="user-input">
            <div>
              <UserInput />
            </div>
          </div>
          <div className="countdown-card">
            <Countdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
