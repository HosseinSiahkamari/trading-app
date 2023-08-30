import './AboutTheApp.css';
import Wrapper from '../../hoc/Wrapper';
import BackDrop from '../BackDrop/BackDrop';

const AboutTheApp = (props) => {
    return (
        <Wrapper>
            <BackDrop click={props.click} show={props.show} />
            <div className="main-center"
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(200vh)',
            opacity: props.show ? '1' : '0',
            transition: 'transform 0.5s, opacity 0.5s',
        }}
    >
        <h2>About the App</h2>
        <div className="exit" onClick={props.onExitCenterHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <div className='text'>
            <p><b>This app helps you to have proper management on your portfolio</b> </p>
        </div>
        <div className="text2">
            
            <p><strong>Risk Warning:</strong>CFDs are complex instruments and come with a high risk of losing money
                rapidly due to leverage. 75.59% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
                Please consider our Risk Disclosure.</p>
        </div>

    </div>
        </Wrapper>
    );
}

export default AboutTheApp;