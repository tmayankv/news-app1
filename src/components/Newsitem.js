import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,desc,img,url,date,name,author}= this.props
    let d= new Date(date);
    return (
        <div className="card" style={{width: "18rem"}}>
          <span className="badge rounded-pill bg-danger" style={{position:"absolute",right:"-11px",top:"-12px"}}><i>{name}</i></span>
        <img src={img} className="card-img-top" alt="..." style={{height:"200px"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}......</h5>
          <p className="card-text ">{desc !=null?desc.slice(0,60):""}...........</p>
          <p className="date-text" style={{fontSize:"12px", textAlign:"left"}}>~{d.getDate(date)}/{d.getMonth(date)+1}/{d.getFullYear(date)} By {author===null?"Unknown":author}</p>
          
          <a href={url} className="btn btn-outline-dark btn-sm">Read Full Article</a>
        </div>
      </div>
    )
  }
}

export default Newsitem