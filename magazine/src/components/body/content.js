import React from 'react'; 
import Post from './post';  
// import './header.scss'
// import { FaSearch } from 'react-icons/fa'
// import { GiHamburgerMenu } from 'react-icons/gi'

function Content ({data}) {
  console.log(data)
  return (
    <div className="content-section">
      {data.map((post) => (
        <Post
          post={post}
          key={post.idx}
        />
      ))}
    </div>
  )
}

export default Content