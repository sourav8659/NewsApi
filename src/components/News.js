import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component"

const News=(props) => {
    
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    // const [totalResults, setTotalResults] = useState(0)
    const [totalArticles, setTotalArticles] = useState(0)
    
    async function updateNews() {
        props.setProgress(0);
        // const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        const url=`https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(30);
        setLoading(true)
        let data=await fetch(url);
        props.setProgress(50);
        let parsedData=await data.json();
        props.setProgress(75);
        setArticles(parsedData.articles)
        // setTotalResults(parsedData.totalResults)
        setTotalArticles(parsedData.totalArticles)
        setLoading(false)
        props.setProgress(100);
    }
    
    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])
    
    
    const capitalizeFunc=(string) => {
        return (string.charAt(0).toUpperCase()+string.slice(1));
    }
    const fetchMoreData = async() => {
        // as setPage take some to first page+1 use then setPage used
        // const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        const url=`https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data=await fetch(url);
        let parsedData=await data.json();
        setArticles(articles.concat(parsedData.articles))
        // setTotalResults(parsedData.totalResults)
        setTotalArticles(parsedData.totalArticles)
    }
    
    return (
    <div style={{minHeight:'100vh'}}  data-bs-theme={props.mode}>
        <h1 className={`text-center text-${props.mode==='light' ? 'dark' : 'light'}`} style={{padding: "85px 0 25px 0"}}>NewsMonkey - Top HeadLines{props.openedPath!=="/" ? ` - ${capitalizeFunc(props.category)}` : ""}</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            // hasMore={articles.length !== totalResults}
            hasMore={articles.length !== totalArticles}
            loader={<Spinner/>}
        >
            <div className="container">
                <div className="row">
                    {articles.map((element)=> {
                        return <div className="col-md-4" key={element.url}>
                                <NewsItem mode={props.mode} 
                                title={element.title ? element.title.slice(0,45) : ""} 
                                description={element.description ? element.description.slice(0,88) : ""} 
                                // imageUrl={element.urlToImage ? element.urlToImage : ""}
                                imageUrl={element.image ? element.image : ""} 
                                newsUrl={element.url} 
                                // author= {element.author ? element.author : "Unknown"}
                                date={element.publishedAt ? new Date(element.publishedAt).toLocaleString("en-US",{timeZone: "Asia/Kolkata"}) : "Some time before"} 
                                sourceName={element.source.name} />
                            </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>
    </div>
    )
}

export default News;

News.defaultProps = {
    country: "in",
    pageSize: 18,
    category: "general",
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    openedPath: PropTypes.string,
}

/* const handlePrevClick=async() => {
    setPage(page-1)
    updateNews();
}
const handleNextClick=async() => {
    setPage(page+1)
    updateNews();
} */
/* <div className="container d-flex justify-content-between">
    <button type="button" className="btn btn-link" onClick={handlePrevClick} disabled={page<=1}>&larr; Previous</button>
    <button type="button" className="btn btn-link" onClick={handleNextClick} disabled={page+1 > Math.ceil(totalResults/props.pageSize)}>Next &rarr;</button>
</div> */