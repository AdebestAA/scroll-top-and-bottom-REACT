// NOTE
// you can also use the method used for the "SCROLL DOWN" to scroll to a specific place on the webpage

import React, { useRef } from 'react'
import LoremIpsium from './loremIpsium'


const style = {
    background:"gray",
    marginInline:"auto",
    display:"block",
    marginTop:"10px"
}

const App = () => {
    const bottomRef = useRef()
    const handScrollBottom = ()=>{
        // METHOD 1 (you can also use this method to scroll to a specific position on the webpage cause the "getBoundingClientRect()" method returns an object that consists of the height,width,top,etc of the useRef it is used for -- FOLLOW THE SAME APPROACH BY USING THE USEREF TO GET A SPECIFIC POSITION ON THE WEBPAGE)
    //   const bottom = bottomRef.current.getBoundingClientRect().top
  
    //    window.scrollTo({
    //     top:bottom,
    //     left:0,
    //     behavior:"smooth"
    //    })

    // METHOD 2
bottomRef.current.scrollIntoView({behavior:"smooth"})

    }

const handleScrollTop = ()=>{
    window.scrollTo({
        top:0,
        left:100,
        behavior:"smooth"
    })
}

  return (
    <div>
        <button style={style} onClick={handScrollBottom} >scroll bottom</button>
        <LoremIpsium/>
       <button style={style} ref={bottomRef} onClick={handleScrollTop }>scroll top</button>
    </div>
  )
}

export default App
