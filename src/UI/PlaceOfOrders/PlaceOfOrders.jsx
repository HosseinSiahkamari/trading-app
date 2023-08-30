import './PlaceOfOrders.css';
import Wrapper from '../../hoc/Wrapper';
import BackDrop from '../BackDrop/BackDrop';

const PlaceOfOrders = (props) => {
    return (
        <Wrapper>
            <BackDrop show={props.show} click={props.click}/>
            <div className="main-left"
        style={{
            transform: props.show ? 'translateX(0)' : 'translateX(-200vh)',
            opacity: props.show ? '1' : '0',
            transition: 'transform 0.5s, opacity 0.5s',
        }}
    >
        <h2>PlaceOfOrders</h2>
        <div className="exit" onClick={props.onExitLeftHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>

    </div>
        </Wrapper>
    );
}

export default PlaceOfOrders;