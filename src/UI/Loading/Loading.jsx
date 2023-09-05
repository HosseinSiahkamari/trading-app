import './Loading.css'

const Loading = () => {
    return (<div>
        <div className="loading">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <span className='loading-txt'>Loading...</span>
        </div>
    </div>);
}

export default Loading;