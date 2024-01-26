import goodGraph from "../../assets/icons/good-graph.svg"
import badGraph from "../../assets/icons/bad-graph.svg"
import trendingUpIcon from "../../assets/icons/trending-up-icon.svg"
import trendingDownIcon from "../../assets/icons/trending-down-icon.svg"
import boxIconOne from "../../assets/icons/box-icon-1.svg"

import "./GroupedComponents.css"

function GroupedComponents() {
  return (
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
  )
}

export default GroupedComponents