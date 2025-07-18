import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate(); // navigation hook

    const handleSignup = () => {
        navigate('/signup'); // signup page par le jayega
    }

    return ( 
        <div className='container p-5 mb-5'>
           <div className='row  text-center'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button 
                    className='btn btn-primary fs-5 p-2' 
                    style={{width:"20%", margin:"0 auto"}}
                    onClick={handleSignup}
                >
                    Sign up now
                </button>
           </div>
        </div>
     );
}

export default OpenAccount;
