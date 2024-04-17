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
  <h3 className="toyou">Akshara!</h3>  
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
  <h3 className="toyou">to Panda!</h3>  
  </div>
    <div className="wishes">
    <p>Dear Panda,</p>
    <p>Main bhoola nahi hoon Mujhee yaad hai..
Ki birthday tumhara aaj hai.
        
Wishes ki tumhare paas bheedh lagi hogi...
Toh socha hatke kuch kahu toh shayad Dhyaan padhe.
</p>
    <p className="name">xxx</p>
    </div>
    
    <TiArrowForward className='icon' style={{transform:"rotatey(180deg)",left:"10px"}} onClick={()=>setPage1(prev=>!prev)}/>
    
  <TiArrowForward className='icon'  onClick={()=>setPage2(prev=>!prev)}/>
  </div>

  <div className="cardInside page3" ref={pageRef.current.third}>
   
    <div className="wishes">

    <p>Stories aur status lagaana main zaroori 
Nahi samajhta main samajhta hoon bas 
Asal mein yeh din tumhe khaas lage.

Yeh chehre pe jo chamak aaj ke din hogi na 
Yahi glow poore saal rehna chahiye.

Tumhari iss duniya mein aane ki 
Khushi bohot zyaada hai
Toh ek din ki treat se kya hoga 
Tumhe party har shaam deni chahiye.

Yeh aaj jo andar se excitement aur bahar se 
woh smile nazar aa rahi hai na.

iss andaaz ko tum khud mein 
har dum ke liye freeze karlo.

Bas aaj ke din hi kyu tumhe ehsaas khaas ho
Dua hai meri tumhe har din Celebration sa feel ho.

Bohot socha aisa koi tohfa hai
Jo hamesha tumhare sath rahe.

Ek ke baad ek sab nikalte rahe 
Aur aakhir mein bas shabdh hi bache.

Aur unhi shabdon ko jodh kar kahu toh meri taraf se 
Tumhare friend Aniket ki taraf se 
Happy birthday to you.......

</p>
    <p className="name">xxx</p>
    </div>
    <TiArrowForward className='icon'  onClick={()=>setPage2(prev=>!prev)}/>
  </div>
</div>
  )
}

export default Card
