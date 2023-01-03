import React from 'react'
import HomeImage from "../assets/homewatchimage.png"
import Card from './Card'
const Home = () => {
  return (
   <div>
     <div   className=' flex align-middle justify-center w-[100%] h-[80vh] gap-9 bg-[url("../../public/homebackground.png")] '>
       <div className='home_left_container w-[336px] mt-6   '>
            <h1 className='font-semibold text-3xl  '> Landing page for showcase watch</h1>
            <p className='mt-9' > minus odio molestias dignissimos porro eveniet. Tempore ducimus aperiam, repellendus similique repellat quidem atque voluptate autem incidunt amet sapiente, ex adipisci neque vitae. Et a unde reiciendis debitis cum modi eius enim obcaecati, numquam labore quam, saepe atque incidunt. Explicabo.</p>
            <div>
                <button>Add to Cart</button>
            </div>
       </div>
       <div className="home_right_container ">
        {/* <img height="200" width="200" src={HomeImage} alt="home watch" /> */}
        <img src="homewatchimage.png" alt="" />
       </div>
    </div>
    <div className=" flex justify-center gap-5 home_bottom_container m-3">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
    </div>
   </div>
  )
}

export default Home
