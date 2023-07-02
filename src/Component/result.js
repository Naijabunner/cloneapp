
export const Result= (props)=>{
 return(
    <div className="all_result">
    <div className="result_fitting">
        <div className="tittle_container">
            <a href={props.link} target="_blank">
                <h1>
                   {props.displayLink}
                </h1>
                <p>{props.formattedUrl}</p> 
            </a>  
        </div>
        <a href={props.link} target="_blank">
            <span>{props.title}</span>
        </a>
    </div>
    <aside>
          {props.snippet}
    </aside>
    </div>
 )
}