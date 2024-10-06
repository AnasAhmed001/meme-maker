import React from 'react'

const page = async() => {
  const response = await fetch('https://api.imgflip.com/get_memes')
  
  
  
  
  return (
    <>
    <div>Meme Maker</div>

    </>
  ) 
}

export default page