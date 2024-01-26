import "./Dashboard.css"
import Sidebar from "../../Components/Sidebar/Sidebar"
import SalesTrend from "../../Components/SalesTrend/SalesTrend"
import LastOrders from "../../Components/LastOrders/LastOrders"
import TopPlatform from "../../Components/TopPlatform/TopPlatform"
import DashboardHeader from "../../Components/DashboardHeader/DashboardHeader"
import { useState } from "react"
import GroupedComponents from "../../Components/GroupedComponents/GroupedComponents"

function Dashboard() {
    const [showSidebar, setShowSidebar] = useState(false)

  return (
    <main className="dashboard-layout">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        <div className="main-dashboard-section">
            <DashboardHeader setShowSidebar={setShowSidebar} />

            <div className="main-dashboard-inner">
            <h1 className="title-mobile heading-text-plus-jakarta-sans-semiBold-20">
                Dashboard
            </h1>

            <SalesTrend />

            <GroupedComponents />

            <LastOrders />

            <TopPlatform />
            </div>
        </div>
    </main>
  )
}

export default Dashboard