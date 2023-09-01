import './Leftdropbox.css'
import { useState } from 'react';

const LeftDropBox = ({option} ) => {
    const [isOpen, setIsOpen] = useState(false); 


    const toggleDropDown = ()=>{
        setIsOpen( !isOpen )
    }


    return ( <div className={`dropdown-box ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-header" onClick={toggleDropdown}>
          باکس کرکره‌ای
        </div>
        {isOpen && (
          <ul className="dropdown-options">
            {options.map((option, index) => (
              <li key={index} className="dropdown-item">
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
     
 
export default LeftDropBox;