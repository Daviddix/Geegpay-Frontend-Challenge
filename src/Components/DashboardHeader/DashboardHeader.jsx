import testImage from "../../assets/images/test-image.png"
import calendarIcon from "../../assets/icons/calendar-icon.svg"
import bellIcon from "../../assets/icons/bell-icon.svg"
import searchIcon from "../../assets/icons/search-icon.svg"
import menuIcon from "../../assets/icons/menu-icon.svg"
import downIcon from "../../assets/icons/down-icon.svg"

import "./DashboardHeader.css"

function DashboardHeader({setShowSidebar}) {
  return (
    <header className='dashboard-header'>
                <div className="dashboard-header-inner">
                <div className="left-side">
                    <h2 className="heading-text-plus-jakarta-sans-semiBold-20">Dashboard</h2>

                    <img
                    onClick={()=>{
                        setShowSidebar(true)
                    }}
                    src={menuIcon} alt="menu icon" />
                </div>

                <div className="right">
                    <button className="search-mobile">
                        <img src={searchIcon} alt="search icon" />
                    </button>      

                    <form>
                        <img src={searchIcon} alt="" />
                        <input type="text" placeholder="Search.." />
                    </form>

                    <div className="date">
                        <img src={calendarIcon} alt="calendar icon" />
                        <p className="body-text-inter-medium">November 15, 2023</p>
                    </div>

                    <button className="notification-mobile">
                        <img src={bellIcon} alt="search icon" />
                    </button>

                    <div className="profile-pill">
                        <img src={testImage} alt="" className="profile-picture" />

                        <div className="name">
                            <p className="pill-text-heading">Justin Bergson</p>
                            <p className="pill-text-sub-heading">justin@gmail.com</p>
                        </div>

                        <img src={downIcon} alt="down arrow" />
                    </div>
                </div>

                </div>
            </header>
  )
}

export default DashboardHeader