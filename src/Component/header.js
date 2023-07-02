
export const Header =(props)=>{
    return(
        <div className="head">
            <ul className='ul_head'>
                <li>
                    <img src="./images/glogo.png
                    " alt="" width="100px"  className= 'google_logo'/>
                </li>
                <li>
                    <div className="input_bar">
                        <input type="text" className='search_input'onChange={props.onchange}/>
                        <img src="./images/voice.png" alt="10px" width="10px" id ='setting'/>
                        <img src="./images/picture.png" alt="40px" width="30px" id ='setting'/>
                        <i className="fa-solid fa-magnifying-glass" id='search_btn' onClick={props.onclick}></i>
                    </div>
                </li>
            </ul>
            <div className="setting_grid-profile">
                        <i className="fa-solid fa-gear"></i>
                        <i className="fa-solid fa-grip" ></i>
                        <img src="./images/dog.jpg" alt="40px" width="40px" className='profile'/>
            </div>   
        </div>
    )
}
