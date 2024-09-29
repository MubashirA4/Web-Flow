import React from 'react'
import { Link } from 'react-router-dom'
import Header from './pages/header'
import Creativity from './pages/creativity'
import RelatedBlog from './pages/related-blog'

export const SingleBlog = () => {
    return (
        <div className='container'>
            <Header/>
            <Creativity/>
            <RelatedBlog/>
        </div>
    )
}
