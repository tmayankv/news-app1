import React, { Component } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from 'react-infinite-scroll-component'



export class News extends Component {
  articles= []
  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:true,
      // spinner:false,
      totalresults:0,
      page:1
    }
    console.log(this.state.articles)
  }
  updation = async()=>{
console.log(this.state.page)
    let {category,coun}= this.props
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9e6d059f6b464ceabbdc98950ec73f8b&page=${this.state.page}&pageSize=5`;
let data= await fetch(url);
let parsedata= await data.json();
this.setState({
  articles:parsedata.articles,
  loading:false,
  totalresults:parsedata.totalResults

})}

  async componentDidMount(){
    this.updation()
}
Updatedata= async()=>{
  let {category}= this.props
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9e6d059f6b464ceabbdc98950ec73f8b&page=${this.state.page}&pageSize=5`;
  console.log(this.state.page+1)
  let data= await fetch(url);
  let parsedata= await data.json();
  this.setState({
    articles:this.state.articles.concat(parsedata.articles),
    page:this.state.page + 1

  })
}
      render() {
        return (
          <div className="container my-2 px-2 d-flex justify-content-center">
            {this.state.loading && <div className="text-center my-3 ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        }
         <InfiniteScroll
 dataLength={this.state.articles?.length}
 next={this.Updatedata}
 hasMore={this.state.articles?.length!==this.state.totalresults}
loader={<div className=" text-center my-3 ">
          <div className="spinner-border"  role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}        
         style={{overflowX:"hidden"}} >

          <div className="row text-center">
        {this.state.articles?.map((element)=> 
            {return <div className="col-md-3 my-3 d-flex justify-content-center " key={element.url}>
       <Newsitem title={element.title===null?'':element.title.slice(0,55)} desc={element.description} img={element.urlToImage===null?"http://content.abt.com/media/images/products/sorry-no-image-available.png":element.urlToImage} name={element.source.name} date={element.publishedAt}  author={element.author} url={element.url}/>
 
            </div>
                  })}    
     </div>
                         
                  </InfiniteScroll>
                   </div>
    )
  }
}

export default News