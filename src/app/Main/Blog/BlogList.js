import React, { Fragment } from "react"
import blog_1 from "./1_thumb.jpg"
import blog_2 from "./2_thumb.jpg"

import "./BlogList.css"

const BlogList= () =>{
    return(
        <Fragment>
       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="title_blog"> 
                <p>Latest from the blog</p>
            </div>
        </div>
            <div className= "blog_list">
                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                    <div className="blog_list_items">
                        <img src={blog_1}/>
                    </div>
                </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                <div className="blog_list_description">
                    <p className='photography'>Photography</p>
                    <p className="subtitle_blog_item">How to take the perfect shot</p>
                    <p className="date_of_post"> junuary 23, 2019</p>
                    <p className="desc_of_posts">Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus sus-cipit nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti.</p>
                    <p className="btn_read_more">Read more <i class="fas fa-long-arrow-alt-right"></i></p>
                </div>
            </div>
            
            </div>
            <div className= "blog_list">
                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                    <div className="blog_list_items">
                        <img src={blog_2}/>
                    </div>
                </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                <div className="blog_list_description">
                    <p className='photography'>Photography</p>
                    <p className="subtitle_blog_item">10 tips for a new photographer</p>
                    <p className="date_of_post"> junuary 23, 2019</p>
                    <p className="desc_of_posts">Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus sus-cipit nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit pulvinar, pellentesque neque vel, laoreet orci. Suspendisse potenti.</p>
                    <p className="btn_read_more">Read more <i class="fas fa-long-arrow-alt-right"></i></p>
                </div>
            </div>
            
            </div>
        </Fragment>
    )
}

export default BlogList