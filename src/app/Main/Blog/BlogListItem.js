import React, { Fragment } from "react"
import ReadMoreBtn from "./ReadMoreBtn"
const BlogListItem= ({
    id,
    img,
    photography,
    subtitle_blog_item,
    date_of_post,
    desc_of_posts
}) =>{
    return(
        <Fragment>
            <div className= "blog_list" key={id}>
                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                    <div className="blog_list_items">
                        <img src={img}/>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                    <div className="blog_list_description">
                        <p className='photography'>{photography}</p>
                        <p className="subtitle_blog_item">{subtitle_blog_item}</p>
                        <p className="date_of_post">{date_of_post}</p>
                        <p className="desc_of_posts">{desc_of_posts}</p>
                       <ReadMoreBtn/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BlogListItem