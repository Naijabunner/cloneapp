
export const Header =(props)=>{
    return(
        <div className="head">
            <h1>
                SEARCH IT
            </h1>
            <form onSubmit={props.onclick} className="input_bar">
                        <input type="text" className='search_input'onChange={props.onchange} placeholder="Type in something..."/>
                        <button className="search_icon">
                        <i className="fa-solid fa-magnifying-glass" id='search_btn' ></i>
                        </button>
            </form>
                    
        </div>
    )
}
