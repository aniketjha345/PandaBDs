import React, { useRef, useState } from 'react'
import './card.css';
import Text from './component/text/Text.jsx';
import { TiArrowForward } from "react-icons/ti";
import { IoArrowForwardOutline } from "react-icons/io5";
const Card = () => {
    const pageRef=useRef({
        first:null,second:null,third:null
    });

    const [page1,setPage1]=useState(1);
    const [page2,setPage2]=useState(1);
    const [page3,setPage3]=useState(1);
   useState(()=>{
    console.log(pageRef);
   },[])
  return (
    <div className="birthdayCard" >

<div className={page1?"cardFront":"cardFront page1"} >
  {/* <div className="front-text">
  <h3 className="happy">HAPPY</h3>
  <h2 className="bday">BIRTHDAY</h2> 
  <h3 className="toyou">to you!</h3>  
  </div> */}
  <div className="wrap-deco">
<div className="decorations"></div>
<div className="decorationsTwo"></div>
  </div> 
    <div className="wrap-decoTwo">
<div className="decorations"></div>
<div className="decorationsThree"></div>
  </div>


  <Text/>


  <TiArrowForward className='icon'  onClick={()=>setPage1(prev=>!prev)}/>
</div>
  
  <div style={{zIndex:2000}}className={page2?"cardInside  ":"cardInside page2"} >
     <div className="inside-text">
  <h3 className="happy">HAPPY</h3>
  <h2 className="bday">BIRTHDAY</h2> 
  <h3 className="toyou">to you!</h3>  
  </div>
    <div className="wishes">
    <p>Dear Friend,</p>
    <p>Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.</p>
    <p className="name">xxx</p>
    </div>
    
    <TiArrowForward className='icon' style={{transform:"rotatey(180deg)",left:"10px"}} onClick={()=>setPage1(prev=>!prev)}/>
    
  <TiArrowForward className='icon'  onClick={()=>setPage2(prev=>!prev)}/>
  </div>

  <div className="cardInside page3" ref={pageRef.current.third}>
     <div className="inside-text">
  <h3 className="happy">HAPPY</h3>
  <h2 className="bday">BIRTHDAY</h2> 
  <h3 className="toyou">to you!</h3>  
  </div>
    <div className="wishes">
    <p>Dear Friend,</p>
    <p>Happy birthday</p>
    <p className="name">xxx</p>
    </div>
    <TiArrowForward className='icon'  onClick={()=>setPage2(prev=>!prev)}/>
  </div>
</div>
  )
}

export default Card