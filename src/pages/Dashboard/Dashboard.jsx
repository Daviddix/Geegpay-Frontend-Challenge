import goodGraph from "../../assets/icons/good-graph.svg"
import badGraph from "../../assets/icons/bad-graph.svg"
import trendingUpIcon from "../../assets/icons/trending-up-icon.svg"
import trendingDownIcon from "../../assets/icons/trending-down-icon.svg"
import boxIconOne from "../../assets/icons/box-icon-1.svg"
import testImage from "../../assets/images/test-image.png"
import calendarIcon from "../../assets/icons/calendar-icon.svg"
import bellIcon from "../../assets/icons/bell-icon.svg"
import searchIcon from "../../assets/icons/search-icon.svg"
import menuIcon from "../../assets/icons/menu-icon.svg"
import downIcon from "../../assets/icons/down-icon.svg"
import fileDownloadIcon from "../../assets/icons/file-download-icon.svg"
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


import "./Dashboard.css"

function Dashboard() {
  return (
    <main className="dashboard-layout">
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

        <div className="main-dashboard-section">
            <header className='dashboard-header'>
                <div className="dashboard-header-inner">
                <div className="left-side">
                    <h2 className="heading-text-plus-jakarta-sans-semiBold-20">Dashboard</h2>

                    <img src={menuIcon} alt="menu icon" />
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

            <div className="main-dashboard-inner">
            <h1 className="title-mobile .heading-text-plus-jakarta-sans-semiBold-20">
                Dashboard
            </h1>

            <div className="sales-trend container">
                <div className="sales-trend-header">
                    <h1 className="body-text-plus-jakarta-sans-semiBold-18">Sales Trends</h1>

                    <div className="sales-trend-options">
                        <p className="body-text-plus-jakarta-sans-medium-14">Sort by:</p>
                        <div className="sort-pill">
                            <p className="body-text-plus-jakarta-sans-regular-12">Weekly</p>
                            <img src={downIcon} alt="down arrow icon" />
                        </div>
                    </div>
                </div>

                <div className="sales-trend-graph">
                    <div className="y-axis">
                        <p className="body-text-plus-jakarta-sans-semiBold-12">50.000</p>
                        <p className="body-text-plus-jakarta-sans-semiBold-12">40.000</p>
                        <p className="body-text-plus-jakarta-sans-semiBold-12">30.000</p>
                        <p className="body-text-plus-jakarta-sans-semiBold-12">20.000</p>
                        <p className="body-text-plus-jakarta-sans-semiBold-12">10.000</p>
                        <p className="body-text-plus-jakarta-sans-semiBold-12">5.000</p>
                        <p className="body-text-plus-jakarta-sans-semiBold-12">0</p>
                    </div>

                    <div className="x-axis-section">
                        <div className="x-axis-inner">

                        <div className="graph-lines">
                            <div className="graph-line"></div>
                            <div className="graph-line"></div>
                            <div className="graph-line"></div>
                            <div className="graph-line"></div>
                            <div className="graph-line active"></div>
                            <div className="graph-line"></div>
                            <div className="graph-line"></div>
                            <div className="graph-line"></div>
                            <div className="graph-line"></div>
                            <div className="graph-line"></div>
                            <div className="graph-line"></div>
                            <div className="graph-line"></div>
                        </div>

                        <div className="lines">
                        <svg width="697" height="1" viewBox="0 0 697 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                        <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                        </svg>
                        <svg width="697" height="1" viewBox="0 0 697 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                        <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                        </svg>
                        <svg width="697" height="1" viewBox="0 0 697 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                        <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                        </svg>
                        <svg width="697" height="1" viewBox="0 0 697 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                        <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                        </svg>
                        <svg width="697" height="1" viewBox="0 0 697 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                        <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                        </svg>
                        <svg width="697" height="1" viewBox="0 0 697 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                        <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                        </svg>
                        <svg width="697" height="1" viewBox="0 0 697 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                        <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                        </svg>
                        <svg width="697" height="1" viewBox="0 0 697 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                        <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                        </svg>
                        <svg width="697" height="1" viewBox="0 0 697 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                        <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                        </svg>
                        <svg width="697" height="1" viewBox="0 0 697 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.5H696.413H1Z" fill="white"/>
                        <path d="M1 0.5H696.413" stroke="#EAEAEA" stroke-linecap="round" stroke-dasharray="4 4"/>
                        </svg>
                        </div>
                        
                        <div className="x-axis">
                            <p className="body-text-plus-jakarta-sans-semiBold-14">Jan</p>
                            <p className="body-text-plus-jakarta-sans-semiBold-14">Feb</p>
                            <p className="body-text-plus-jakarta-sans-semiBold-14">Mar</p>
                            <p className="body-text-plus-jakarta-sans-semiBold-14">Apr</p>
                            <p className="body-text-plus-jakarta-sans-semiBold-14">May</p>
                            <p className="body-text-plus-jakarta-sans-semiBold-14">Jun</p>
                            <p className="body-text-plus-jakarta-sans-semiBold-14">Jul</p>
                            <p className="body-text-plus-jakarta-sans-semiBold-14">Aug</p>
                            <p className="body-text-plus-jakarta-sans-semiBold-14">Sep</p>
                            <p className="body-text-plus-jakarta-sans-semiBold-14">Oct</p>
                            <p className="body-text-plus-jakarta-sans-semiBold-14">Nov</p>
                            <p className="body-text-plus-jakarta-sans-semiBold-14">Dec</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grouped-components">
                <div className="group-component container">
                    <div className="group-component-header">
                        <div className="icon">
                            <img src={boxIconOne} alt="" />
                        </div>

                        <div className="graph">
                            <img src={goodGraph} alt="" />
                        </div>
                    </div>

                    <h2 className="body-text-plus-jakarta-sans-medium-16">Total Order</h2>
                    <h1 className="heading-text-plus-jakarta-sans-semiBold-24">350</h1>

                    <div className="group-component-lower">
                    <div className="trend-pill good">
                        <img src={trendingUpIcon} alt="total order trend" />

                        <p className="body-text-plus-jakarta-sans-medium-12">23,5%</p>
                    </div>

                    <p className="pill-text-sub-heading">vs. previous month</p>
                    </div>
                </div>

                <div className="group-component container">
                    <div className="group-component-header">
                        <div className="icon">
                            <img src={boxIconOne} alt="" />
                        </div>

                        <div className="graph">
                            <img src={badGraph} alt="graph icon" />
                        </div>
                    </div>

                    <h2 className="body-text-plus-jakarta-sans-medium-16">Total Refund</h2>
                    <h1 className="heading-text-plus-jakarta-sans-semiBold-24">270</h1>

                    <div className="group-component-lower">
                    <div className="trend-pill bad">
                        <img src={trendingDownIcon} alt="total order trend" />

                        <p className="body-text-plus-jakarta-sans-medium-12">23,5%</p>
                    </div>

                    <p className="pill-text-sub-heading">vs. previous month</p>
                    </div>
                </div>

                <div className="group-component container">
                    <div className="group-component-header">
                        <div className="icon">
                            <img src={boxIconOne} alt="" />
                        </div>

                        <div className="graph">
                            <img src={badGraph} alt="negative graph icon" />
                        </div>
                    </div>

                    <h2 className="body-text-plus-jakarta-sans-medium-16">Average Sales</h2>
                    <h1 className="heading-text-plus-jakarta-sans-semiBold-24">1567</h1>

                    <div className="group-component-lower">
                    <div className="trend-pill bad">
                        <img src={trendingDownIcon} alt="total order trend" />

                        <p className="body-text-plus-jakarta-sans-medium-12">23,5%</p>
                    </div>

                    <p className="pill-text-sub-heading">vs. previous month</p>
                    </div>
                </div>

                <div className="group-component container">
                    <div className="group-component-header">
                        <div className="icon">
                            <img src={boxIconOne} alt="" />
                        </div>

                        <div className="graph">
                            <img src={goodGraph} alt="graph icon" />
                        </div>
                    </div>

                    <h2 className="body-text-plus-jakarta-sans-medium-16">Total Income</h2>
                    <h1 className="heading-text-plus-jakarta-sans-semiBold-24">$350.000</h1>

                    <div className="group-component-lower">
                    <div className="trend-pill good">
                        <img src={trendingUpIcon} alt="total order trend" />

                        <p className="body-text-plus-jakarta-sans-medium-12">23,5%</p>
                    </div>

                    <p className="pill-text-sub-heading">vs. previous month</p>
                    </div>
                </div>
            </div>

            <div className="order container">
                <div className="order-header">
                    <h1 className="body-text-plus-jakarta-sans-semiBold-18">Last Orders</h1>

                    <p className="body-text-plus-jakarta-sans-medium-18">See All</p>
                </div>

                <div className="order-table">
                    <div className="order-table-inner">
                        <div className="order-table-header">
                            <p className="body-text-plus-jakarta-sans-medium-16">Name</p>
                            <p className="body-text-plus-jakarta-sans-medium-16">Date</p>
                            <p className="body-text-plus-jakarta-sans-medium-16">Amount</p>
                            <p className="body-text-plus-jakarta-sans-medium-16">Status</p>
                            <p className="body-text-plus-jakarta-sans-medium-16">Invoice</p>
                        </div>

                        <div className="order-table-row">
                            <div className="image-and-name">
                                <img src={testImage} alt="profile picture" />

                                <h2 className="body-text-plus-jakarta-sans-medium-16">Marcus Bargson</h2>
                            </div>

                            <p className="order-date body-text-plus-jakarta-sans-regular-16">Nov 18, 2023</p>

                            <p className="amount body-text-plus-jakarta-sans-medium-16">$40,000</p>

                            <p className="status-good body-text-plus-jakarta-sans-regular-16">Paid</p>

                            <div className="invoice">
                                <img src={fileDownloadIcon} alt="" />
                                <p className="pill-text-sub-heading">View</p>
                            </div>
                        </div>

                        <div className="order-table-row">
                            <div className="image-and-name">
                                <img src={testImage} alt="profile picture" />

                                <h2 className="body-text-plus-jakarta-sans-medium-16">Jaydon Vaccaro</h2>
                            </div>

                            <p className="order-date body-text-plus-jakarta-sans-regular-16">Nov 15, 2023</p>

                            <p className="amount body-text-plus-jakarta-sans-medium-16">$150,000</p>

                            <p className="status-bad body-text-plus-jakarta-sans-regular-16">Refund</p>

                            <div className="invoice">
                                <img src={fileDownloadIcon} alt="" />
                                <p className="pill-text-sub-heading">View</p>
                            </div>
                        </div>

                        <div className="order-table-row">
                            <div className="image-and-name">
                                <img src={testImage} alt="profile picture" />

                                <h2 className="body-text-plus-jakarta-sans-medium-16">Corey Schleifer</h2>
                            </div>

                            <p className="order-date body-text-plus-jakarta-sans-regular-16">Nov 14, 2023</p>

                            <p className="amount body-text-plus-jakarta-sans-medium-16">$87,000</p>

                            <p className="status-good body-text-plus-jakarta-sans-regular-16">Paid</p>

                            <div className="invoice">
                                <img src={fileDownloadIcon} alt="" />
                                <p className="pill-text-sub-heading">View</p>
                            </div>
                        </div>

                        <div className="order-table-row">
                            <div className="image-and-name">
                                <img src={testImage} alt="profile picture" />

                                <h2 className="body-text-plus-jakarta-sans-medium-16">Cooper Press</h2>
                            </div>

                            <p className="order-date body-text-plus-jakarta-sans-regular-16">Nov 14, 2023</p>

                            <p className="amount body-text-plus-jakarta-sans-medium-16">$100,000</p>

                            <p className="status-bad body-text-plus-jakarta-sans-regular-16">Refund</p>

                            <div className="invoice">
                                <img src={fileDownloadIcon} alt="" />
                                <p className="pill-text-sub-heading">View</p>
                            </div>
                        </div>

                        <div className="order-table-row">
                            <div className="image-and-name">
                                <img src={testImage} alt="profile picture" />

                                <h2 className="body-text-plus-jakarta-sans-medium-16">Phillip Lubin</h2>
                            </div>

                            <p className="order-date body-text-plus-jakarta-sans-regular-16">Nov 13, 2023</p>

                            <p className="amount body-text-plus-jakarta-sans-medium-16">$78,000</p>

                            <p className="status-good body-text-plus-jakarta-sans-regular-16">Paid</p>

                            <div className="invoice">
                                <img src={fileDownloadIcon} alt="" />
                                <p className="pill-text-sub-heading">View</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="platform container">
                <div className="platform-header">
                    <h1 className="body-text-plus-jakarta-sans-semiBold-18">Top Platform</h1>

                    <p className="body-text-plus-jakarta-sans-medium-18">See All</p>
                </div>

                <div className="single-platform">
                    <h2 className="body-text-plus-jakarta-sans-semiBold-18">Book Bazaar</h2>

                    <div className="progress-bar"></div>

                    <div className="single-platform-lower">
                        <p className="body-text-plus-jakarta-sans-regular-18">$2,500,000</p>
                        <p className="body-text-plus-jakarta-sans-regular-18">+15%</p>
                    </div>
                </div>

                <div className="single-platform">
                    <h2 className="body-text-plus-jakarta-sans-semiBold-18">Artisan Aisle</h2>

                    <div className="progress-bar"></div>

                    <div className="single-platform-lower">
                        <p className="body-text-plus-jakarta-sans-regular-18">$1,800,000</p>
                        <p className="body-text-plus-jakarta-sans-regular-18">+10%</p>
                    </div>
                </div>



                <div className="single-platform">
                    <h2 className="body-text-plus-jakarta-sans-semiBold-18">Toy Troop</h2>

                    <div className="progress-bar"></div>

                    <div className="single-platform-lower">
                        <p className="body-text-plus-jakarta-sans-regular-18">$1,200,000</p>
                        <p className="body-text-plus-jakarta-sans-regular-18">+8%</p>
                    </div>
                </div>

                <div className="single-platform">
                    <h2 className="body-text-plus-jakarta-sans-semiBold-18">XStore</h2>

                    <div className="progress-bar"></div>

                    <div className="single-platform-lower">
                        <p className="body-text-plus-jakarta-sans-regular-18">$600,000</p>
                        <p className="body-text-plus-jakarta-sans-regular-18">+5%</p>
                    </div>
                </div>

                
            </div>
            </div>
        </div>
    </main>
  )
}

export default Dashboard