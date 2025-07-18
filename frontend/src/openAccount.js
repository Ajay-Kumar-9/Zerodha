import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate(); 

    const handleSignup = () => {
        navigate('/signup'); 
    }

    return ( 
        <div className='container p-5 mb-5 overflow-x-hidden'>
           <div className='row text-center'>
                <h1 className='mt-5 fs-2 fs-md-1'>
                    Open a Zerodha account
                </h1>
                <p className='fs-6 fs-md-5'>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <div className="w-100">
                    <button 
                        className='btn btn-primary fs-6 fs-md-5 p-2' 
                        style={{width: "60%", maxWidth: "250px", margin: "0 auto"}}
                        onClick={handleSignup}
                    >
                        Sign up now
                    </button>
                </div>
           </div>
        </div>
     );
}

export default OpenAccount;
