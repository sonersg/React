import React from 'react'
// import pic from 'https://picsum.photos/id/237/200/300';

function Header() {
  return (
    <div className='navbar-container'>
        <div className='logo-text'>
            <img 
            src='https://avatars.githubusercontent.com/u/80483910?v=4' 
            alt='githubpp'
            width="50px"
            height="50px"
            />
            <h2 className='margin-zero'>React Meme Generator</h2>
        </div>
        <h3 className='margin-zero'>Soner Güçlü</h3>
    </div>
  )
}

export default Header