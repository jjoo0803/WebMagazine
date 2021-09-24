import React, { useEffect } from 'react'
import './content.scss'
// import { FaSearch } from 'react-icons/fa'
// import { GiHamburgerMenu } from 'react-icons/gi'

function Post ({post}) {
  const { title, category, editor } = post
  const handleResize = () => {
    console.log(`window innerWidth: ${window.innerWidth}`)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { // cleanup
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="article-section">
      <div className="post">
        {title}
      </div>
    </div>
  )
}

export default Post