import './BackDrop.css'

const BackDrop = (props) => {
    return props.show ? <div className="backdrop" onClick={props.click}></div> : null
}
 
export default BackDrop;