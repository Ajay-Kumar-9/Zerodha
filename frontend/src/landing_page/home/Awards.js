function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img 
            src="media/images/largestBroker.svg" 
            className="img-fluid" 
            alt="Largest Broker" 
          />
        </div>

        {/* Right Content */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="fs-3 fs-md-1">Largest stock broker in India</h1>
          <p className="mt-2 fs-6 fs-md-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <ul className="list-unstyled">
            <div className="row">
              <div className="col-6 px-2 px-md-4">
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </div>
              <div className="col-6 px-2 px-md-4">
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Securities</p></li>
              </div>
            </div>
          </ul>

          {/* Press Logos */}
          <div className="mt-4">
            <img 
              src="media/images/pressLogos.png" 
              className="img-fluid" 
              alt="Press Logos" 
              style={{ maxWidth: "90%" }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
