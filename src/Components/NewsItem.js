import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props;

    return (
      <div className='my-4'>
        <div className="card" >
            <img src={!imageUrl?"https://thumbs.dreamstime.com/b/mass-media-breaking-news-logo-television-studio-tv-show-93490223.jpg":imageUrl} className="card-img-top" style={{maxHeight:"156px"}} alt=''/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className='text-muted'>By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                 <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
