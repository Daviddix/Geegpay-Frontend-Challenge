import goodGraph from "../../assets/icons/good-graph.svg"
import badGraph from "../../assets/icons/bad-graph.svg"
import trendingUpIcon from "../../assets/icons/trending-up-icon.svg"
import trendingDownIcon from "../../assets/icons/trending-down-icon.svg"
import boxIconOne from "../../assets/icons/box-icon-1.svg"
import boxIconTwo from "../../assets/icons/box-icon-2.svg"
import cartIcon from "../../assets/icons/cart-icon.svg"
import coinIcon from "../../assets/icons/coin-icon.svg"

import "./GroupedComponents.css"

function GroupedComponents() {
    const data = [
      {
        icon: boxIconOne,
        title: "Total Order",
        number: 350,
        trend: "good",
        trendPercentage: "23,5%",
      },
      {
        icon: boxIconTwo,
        title: "Total Refund",
        number: 270,
        trend: "bad",
        trendPercentage: "23,5%",
      },
      {
        icon: cartIcon,
        title: "Average Sales",
        number: 1567,
        trend: "bad",
        trendPercentage: "23,5%",
      },
      {
        icon: coinIcon,
        title: "Total Income",
        number: "$350,000",
        trend: "good",
        trendPercentage: "23,5%",
      },
    ]

    const mappedData = data.map(({icon, number, title, trend, trendPercentage})=>{
        return <div className="group-component container">
        <div className="group-component-header">
            <div className="icon">
                <img src={icon} alt="component icon" />
            </div>

            <div className="graph">
                <img src={trend == "good"? goodGraph : badGraph} alt="graph icon" />
            </div>
        </div>

        <h2 className="body-text-plus-jakarta-sans-medium-16">{title}</h2>
        <h1 className="heading-text-plus-jakarta-sans-semiBold-24">{number}</h1>

        <div className="group-component-lower">
        <div className={trend == "good"? "trend-pill good" : "trend-pill bad"}>
            <img src={trend == "good"? trendingUpIcon : trendingDownIcon} alt="total order trend" />

            <p className="body-text-plus-jakarta-sans-medium-12">{trendPercentage}</p>
        </div>

        <p className="pill-text-sub-heading">vs. previous month</p>
        </div>
    </div>
    })
  return (
    <div className="grouped-components">
                {mappedData}
            </div>
  )
}

export default GroupedComponents