import fileDownloadIcon from "../../assets/icons/file-download-icon.svg"
import personOne from "../../assets/images/person-1.png"
import personTwo from "../../assets/images/person-2.png"
import personThree from "../../assets/images/person-3.png"
import personFour from "../../assets/images/person-4.png"
import personFive from "../../assets/images/person-5.png"

import "./LastOrders.css"

function LastOrders() {
    const orderData = [{
        profilePicture : personOne,
        name : "Marcus Bargson",
        amount : "$40,000",
        date: "Nov 18, 2023",
        status: "Paid"
    },
    {
        profilePicture : personTwo,
        name : "Jaydon Vaccaro",
        amount : "$150,000",
        date: "Nov 15, 2023",
        status: "Refund"
    },
    {
        profilePicture : personThree,
        name : "Corey Schleifer",
        date: "Nov 14, 2023",
        amount : "$87,000",
        status: "Paid"
    },
    {
        profilePicture : personFour,
        name : "Cooper Press",
        date: "Nov 14, 2023",
        amount: "$100,000",
        status: "Refund"
    },
    {
        profilePicture : personFive,
        name : "Phillip Lubin",
        date: "Nov 13, 2023",
        amount: "$78,000",
        status: "Paid"
    }]

    const mappedOrderData = orderData.map(({profilePicture, amount, date, name, status})=>{
        return <div className="order-table-row">
        <div className="image-and-name">
            <img src={profilePicture} alt="profile picture" />

            <h2 className="body-text-plus-jakarta-sans-medium-16">{name}</h2>
        </div>

        <p className="order-date body-text-plus-jakarta-sans-regular-16">{date}</p>

        <p className="amount body-text-plus-jakarta-sans-medium-16">{amount}</p>

        <p 
        className={
            `${status == "Paid"? "status-good body-text-plus-jakarta-sans-regular-16" : "status-bad body-text-plus-jakarta-sans-regular-16"}`}>{status}</p>

        <div className="invoice">
            <img src={fileDownloadIcon} alt="file icon" />
            <p className="body-text-plus-jakarta-sans-semiBold-14">View</p>
        </div>
    </div>
    })
    
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

                       {mappedOrderData}
                    </div>
                </div>
            </div>
  )
}

export default LastOrders