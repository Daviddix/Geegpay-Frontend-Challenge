import fileDownloadIcon from "../../assets/icons/file-download-icon.svg"
import personOne from "../../assets/images/person-1.png"
import personTwo from "../../assets/images/person-2.png"
import personThree from "../../assets/images/person-3.png"
import personFour from "../../assets/images/person-4.png"
import personFive from "../../assets/images/person-5.png"

import "./LastOrders.css"

function LastOrders() {
  return (
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
                                <img src={personOne} alt="profile picture" />

                                <h2 className="body-text-plus-jakarta-sans-medium-16">Marcus Bargson</h2>
                            </div>

                            <p className="order-date body-text-plus-jakarta-sans-regular-16">Nov 18, 2023</p>

                            <p className="amount body-text-plus-jakarta-sans-medium-16">$40,000</p>

                            <p className="status-good body-text-plus-jakarta-sans-regular-16">Paid</p>

                            <div className="invoice">
                                <img src={fileDownloadIcon} alt="" />
                                <p className="body-text-plus-jakarta-sans-semiBold-14">View</p>
                            </div>
                        </div>

                        <div className="order-table-row">
                            <div className="image-and-name">
                                <img src={personTwo} alt="profile picture" />

                                <h2 className="body-text-plus-jakarta-sans-medium-16">Jaydon Vaccaro</h2>
                            </div>

                            <p className="order-date body-text-plus-jakarta-sans-regular-16">Nov 15, 2023</p>

                            <p className="amount body-text-plus-jakarta-sans-medium-16">$150,000</p>

                            <p className="status-bad body-text-plus-jakarta-sans-regular-16">Refund</p>

                            <div className="invoice">
                                <img src={fileDownloadIcon} alt="" />
                                <p className="body-text-plus-jakarta-sans-semiBold-14">View</p>
                            </div>
                        </div>

                        <div className="order-table-row">
                            <div className="image-and-name">
                                <img src={personThree} alt="profile picture" />

                                <h2 className="body-text-plus-jakarta-sans-medium-16">Corey Schleifer</h2>
                            </div>

                            <p className="order-date body-text-plus-jakarta-sans-regular-16">Nov 14, 2023</p>

                            <p className="amount body-text-plus-jakarta-sans-medium-16">$87,000</p>

                            <p className="status-good body-text-plus-jakarta-sans-regular-16">Paid</p>

                            <div className="invoice">
                                <img src={fileDownloadIcon} alt="" />
                                <p className="body-text-plus-jakarta-sans-semiBold-14">View</p>
                            </div>
                        </div>

                        <div className="order-table-row">
                            <div className="image-and-name">
                                <img src={personFour} alt="profile picture" />

                                <h2 className="body-text-plus-jakarta-sans-medium-16">Cooper Press</h2>
                            </div>

                            <p className="order-date body-text-plus-jakarta-sans-regular-16">Nov 14, 2023</p>

                            <p className="amount body-text-plus-jakarta-sans-medium-16">$100,000</p>

                            <p className="status-bad body-text-plus-jakarta-sans-regular-16">Refund</p>

                            <div className="invoice">
                                <img src={fileDownloadIcon} alt="" />
                                <p className="body-text-plus-jakarta-sans-semiBold-14">View</p>
                            </div>
                        </div>

                        <div className="order-table-row">
                            <div className="image-and-name">
                                <img src={personFive} alt="profile picture" />

                                <h2 className="body-text-plus-jakarta-sans-medium-16">Phillip Lubin</h2>
                            </div>

                            <p className="order-date body-text-plus-jakarta-sans-regular-16">Nov 13, 2023</p>

                            <p className="amount body-text-plus-jakarta-sans-medium-16">$78,000</p>

                            <p className="status-good body-text-plus-jakarta-sans-regular-16">Paid</p>

                            <div className="invoice">
                                <img src={fileDownloadIcon} alt="" />
                                <p className="body-text-plus-jakarta-sans-semiBold-14">View</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default LastOrders