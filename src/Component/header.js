import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faGrip } from '@fortawesome/free-solid-svg-icons'

export const Header =()=>{
    return(
        <div className="head">
            <ul className='ul_head'>
                <li>
                    <img src="./images/glogo.png
                    " alt="" width="100px"  className= 'google_logo'/>
                </li>
                <li>
                    <div className="input_bar">
                        <input type="text" className='search_input'/>
                        <img src="./images/voice.png" alt="10px" width="10px"/>
                        <img src="./images/picture.png" alt="40px" width="30px"/>
                        <i className="fa-solid fa-magnifying-glass" id='search_btn'></i>
                    </div>
                </li>
            </ul>
            <div className="setting_grid-profile">
                        <FontAwesomeIcon icon={faGear} className='setting'/>
                        <FontAwesomeIcon icon={faGrip} className='setting'/>
                        <img src="./images/dog.jpg" alt="40px" width="40px" className='profile'/>
            </div>   
        </div>
    )
}