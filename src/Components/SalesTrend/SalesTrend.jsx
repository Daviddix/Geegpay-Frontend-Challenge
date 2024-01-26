import downIcon from "../../assets/icons/down-icon.svg"

import "./SalesTrend.css"

function SalesTrend() {
    const graphValues = ["$7000", "$20,000", "$5000", "$20,000", "$45,000", "$10,500", "$12,000", "$20,000", "$32,000", "$6,500", "$26,000", "$20,000"]

    const mappedGraphValues = graphValues.map((value)=>{
        return <div className="graph-line">
        <p className="tooltip">{value}</p>
        </div>
    } )
  return (
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
                          {mappedGraphValues}
                        </div>

                        {/* <div className="lines">
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
                        </div> */}
                        
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
  )
}

export default SalesTrend