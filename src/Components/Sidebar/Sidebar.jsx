import logoIcon from "../../assets/icons/logo.svg"
import dashboardIcon from "../../assets/icons/dashboard-icon.svg"
import trendIcon from "../../assets/icons/trend-icon.svg"
import peopleIcon from "../../assets/icons/profile-icon.svg"
import boxIcon from "../../assets/icons/box-icon.svg"
import discountIcon from "../../assets/icons/discount-icon.svg"
import issueIcon from "../../assets/icons/info-circle-icon.svg"
import otherArrowIcon from "../../assets/icons/arrow-right.svg"
import settingsIcon from "../../assets/icons/settings-icon.svg"
import sunIcon from "../../assets/icons/sun-icon.svg"
import moonIcon from "../../assets/icons/moon-icon.svg"
import logoutIcon from "../../assets/icons/logout-icon.svg"
import closeIcon from "../../assets/icons/close-icon.svg"
import calendarIcon from "../../assets/icons/calendar-icon.svg"

import "./Sidebar.css"


function Sidebar() {
  return (
    <div className="sidebar">
            <div className="sidebar-inner">
                <div className="sidebar-inner-header">
                <img src={logoIcon} alt="logo" className="logo" />

                <button>
                    <img src={closeIcon} alt="close sidebar icon" />
                </button>

                </div>

                <div className="date">
                    <img src={calendarIcon} alt="calendar icon" />
                    <p>November 15, 2023</p>
                </div>

                <div className="upper-sidebar-options">

                <div className="icon-and-label active">
                <img src={dashboardIcon} alt="dashboard icon"  />
                <p>Dashboard</p>
                </div>

                <div className="icon-and-label">
                <img src={trendIcon} alt="trend icon"  />
                <p>Trends</p>
                </div>

                <div className="icon-and-label">
                <img src={peopleIcon} alt="people icon"  />
                <p>People</p>
                </div>

                <div className="icon-and-label">
                <img src={boxIcon} alt="order icon"  />
                <p>Orders</p>
                </div>

                <div className="icon-and-label">
                <img src={discountIcon} alt="discount icon"  />
                <p>Discounts</p>
                </div>

                <div className="icon-and-label">
                <img src={issueIcon} alt="issues icon"  />
                <p>Issues</p>
                </div>

                <div className="theme-container">
                    <button className="light active">
                    <img src={sunIcon} alt="sun icon" />
                    </button>

                    <button className="dark">
                    <img src={moonIcon} alt="moon icon" />
                    </button>
                </div>
                </div>


                <div className="lower-sidebar-options">
                    <div className="icon-and-label">
                <img src={otherArrowIcon} alt="others logo"  />
                <p>Others</p>
                </div>

                <div className="icon-and-label">
                <img src={settingsIcon} alt="settings icon"  />
                <p>Settings</p>
                </div>

                <div className="icon-and-label">
                <img src={logoutIcon} alt="log out icon"  />
                <p>Log out</p>
                </div>
                </div>

                
            </div>
            
            
        </div> 
  )
}

export default Sidebar