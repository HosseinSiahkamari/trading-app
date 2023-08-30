import './PortfolioManagement.css';
import Wrapper from '../../hoc/Wrapper';
import BackDrop from '../BackDrop/BackDrop';


const PortfolioManagement = (props) => {
    return (
        <Wrapper>
            <BackDrop click={props.click} show={props.show} />
            <div className="main-right"
        style={{
            transform: props.show ? 'translateX(0)' : 'translateX(200vh)',
            opacity: props.show ? '1' : '0',
            transition: 'transform 0.5s, opacity 0.5s',
        }}
    >
        <h2>Portfolio Management</h2>
        <div className="exit" onClick={props.onExitRightHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>

    </div>
        </Wrapper>
    );
}

export default PortfolioManagement;