import React, { Fragment } from "react"
import Title_blog from "./Title_blog"
import BlogData from "./BlogData"
import BlogListItem from "./BlogListItem"
import "./BlogList.css"



const BlogList= () =>{
    return(
        <Fragment>
         <section className="section_darker">
            <div className="container">
                <div className="row blog_row">
                    <Title_blog/>
                    {
                        BlogData.map(({
                            id,
                            img,
                            photography,
                            subtitle_blog_item,
                            date_of_post,
                            desc_of_posts
                        })=>(
                            <BlogListItem
                            id={id}
                            img={img}
                            photography={photography}
                            subtitle_blog_item ={subtitle_blog_item}
                            date_of_post ={date_of_post}
                            desc_of_posts={desc_of_posts}
                            />))
                    }
                </div>
            </div>
        </section>         
        </Fragment>
    )
}

export default BlogList