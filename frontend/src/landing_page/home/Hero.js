import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup');
    }

    return (
       <div className='container p-5 overflow-x-hidden'>
        <div className='row text-center'>
            <div className="col-12">
                <img 
                    src='media/images/homeHero.png' 
                    alt='Hero Img' 
                    className='mb-5 img-fluid'
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                />
            </div>
            <h1 className='mt-5 fs-2 fs-md-1'>Investment in everything</h1>
            <p className='fs-6 fs-md-5'>
                Online platform to invest in stocks, derivatives, mutual funds and more
            </p>
            <div className='h-auto w-100'>
                <button 
                    className='p-2 btn btn-primary fs-6 fs-md-5' 
                    style={{width: "60%", maxWidth: "250px", margin: "0 auto"}}
                    onClick={handleSignup}
                >
                    Signup Now
                </button>
            </div>
        </div>
       </div>
    );
}

export default Hero;

