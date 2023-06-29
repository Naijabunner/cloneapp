<<<<<<< HEAD
=======
////import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
////import { faGear, faGrip } from '@fortawesome/free-solid-svg-icons'

>>>>>>> 7680dfcca85d191b0390a2bbdf8339f5122a84ea
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
<<<<<<< HEAD
                        <i className="fa-solid fa-gear" id='setting'></i>
                        <i className="fa-solid fa-grip" id ='setting'></i>
=======
                       /////// <FontAwesomeIcon icon={faGear} className='setting'/>
                        //////<FontAwesomeIcon icon={faGrip} className='setting'/>
>>>>>>> 7680dfcca85d191b0390a2bbdf8339f5122a84ea
                        <img src="./images/dog.jpg" alt="40px" width="40px" className='profile'/>
            </div>   
        </div>
    )
}
