import "./TopPlatform.css"

function TopPlatform() {
    const platformData = [{
        name: "Book Bazaar",
        amount : "$2,500,000",
        increase : "+15%"
    },
    {
        name: "Artisan Aisle",
        amount : "$1,800,000",
        increase : "+10%"
    },
    {
        name: "Toy Troop",
        amount : "$1,200,000",
        increase : "+8%"
    },
    {
        name: "XStore",
        amount : "$600,000",
        increase : "+5%"
    }
    ]

    const mappedPlatformData = platformData.map(({name, amount, increase})=>{
        return   <div className="single-platform">
        <h2 className="body-text-plus-jakarta-sans-semiBold-18">{name}</h2>

        <div className="progress-bar"></div>

        <div className="single-platform-lower">
            <p className="body-text-plus-jakarta-sans-regular-18">{amount}</p>
            <p className="body-text-plus-jakarta-sans-regular-18">{increase}</p>
        </div>
    </div>
    })
  return (
    <div className="platform container">
                <div className="platform-header">
                    <h1 className="body-text-plus-jakarta-sans-semiBold-18">Top Platform</h1>

                    <p className="body-text-plus-jakarta-sans-medium-18">See All</p>
                </div>

                {mappedPlatformData}

                
            </div>
  )
}

export default TopPlatform