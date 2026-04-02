import React from 'react'
import { Link } from 'react-router-dom'
import BlogHeader from '../sections/header'
import Creativity from '../sections/creativity'
import RelatedBlog from '../sections/related-blog'

export const SingleBlog = () => {
    return (
        <div className='container'>
            <BlogHeader/>
            <Creativity/>
            <RelatedBlog/>
        </div>
    )
}
