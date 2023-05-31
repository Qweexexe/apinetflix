import Search from "../Search/Search";
import logo from '../../img/images.jpeg'
import './Header.css'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const iconStyle = {
    color : '#7e129b',
    width : '50px',
    zIndex : 1
}



function Header() {
    const selector = useSelector(state => state.reducer.field)
    const dispatch = useDispatch()
    return (
        <div className="header_wrapper">
            <div className="header_wrapper_inner">
                <Link to={'/'} className="logo_icon_hyper">
                    <img className="header_logo" onClick={()=> dispatch({type:"GET", payload : 'witcher'})} src={logo} alt=""/>
                </Link>
                <div className="header_wrapper_inner_div">
                    <Search/>
                </div>

            </div>
        </div>
    )
}
export default Header