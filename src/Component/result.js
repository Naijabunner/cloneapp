
export const Result= (props)=>{
 return(
    <div className="all_result">
    <div className="result_fitting">
        <div className="tittle_container">
            <a href={props.link} target="_blank" rel="noreferrer">
                <p>
                   {props.displayLink}
                </p>
                <p>{props.formattedUrl}</p> 
            </a>  
        </div>
        <a href={props.link} target="_blank" rel="noreferrer" className="titleanchor">
            <h2>{props.title}</h2>
        </a>
    </div>
    <aside>
          {props.snippet}
    </aside>
    </div>
 )
}