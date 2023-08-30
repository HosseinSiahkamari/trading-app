import Wrapper from '../../hoc/Wrapper'
import Nav from '../Nav/Nav';


const Layout = (props) => {
    return ( 
        <Wrapper>
            
            {props.children}
        </Wrapper>
     );
}
 
export default Layout;