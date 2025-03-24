import React from 'react'

const NewsItem=(props) => {
    
    let {title, description, imageUrl, newsUrl, author, date, sourceName,mode} = props;
    
    const bgColor= mode==='dark'?'#8b0000':"#dc3545"
    
    return (
    <div className='my-3'>
        <div className="card" data-bs-theme={mode}>
        <div className="badge rounded-pill" style={{display:"flex", justifyContent:'flex-end', position:'absolute', right:"0", backgroundColor:bgColor}}>{sourceName}</div>
            {imageUrl ? <img src={imageUrl} className="card-img-top" alt="..."/> : ""}
            <div className="card-body" style={{marginTop:"5px"}}>
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {author} on {date}</small></p>
                <a rel="noreferrer" href={`${newsUrl}`} target='_blank' className={`btn btn-${mode==="light" ? "primary" : 'secondary'}`}>Read More</a>
            </div>
        </div>
    </div>
    )
}

export default NewsItem
