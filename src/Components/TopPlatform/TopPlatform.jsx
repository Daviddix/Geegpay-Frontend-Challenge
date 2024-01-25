import "./TopPlatform.css"

function TopPlatform() {
  return (
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
  )
}

export default TopPlatform