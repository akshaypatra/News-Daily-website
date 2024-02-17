//rce
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {


  constructor(){
    super();
    this.state={
       articles:[],
       loading:false,
       page:1
    }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=28242902bcd948daaaf35bb0d47c8300&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    });
  }


handlePrevioustClick=async()=>{
  let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=28242902bcd948daaaf35bb0d47c8300&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
  this.setState({loading:true});
  let data=await fetch(url);
  let parsedData=await data.json();
  

  this.setState({
    page:this.state.page-1,
    articles:parsedData.articles,
    loading:false
    
})
}

 handleNextClick= async ()=>{
    
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

    let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=28242902bcd948daaaf35bb0d47c8300&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
  
    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles,
      loading:false
      
    })
  }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-centre" style={{textAlign:"center"}}>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className='row my-2'>
          {!this.state.loading &&this.state.articles.map((element)=>{
            return(
            <div className='col-md-4' key={element.url}>
              <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage}  newsUrl={element.url}/>
            </div>
          );
          })}
        </div>
        <div className='container d-flex justify-content-between'>
         <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevioustClick}>&larr; Previous</button>
         <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>   Next  &rarr; </button>
        </div>
     
        
      </div>
    )
  }
}

export default News
