import React from 'react'
function Startgame({toggle}) {
  return (
<div className= 'bg-[url(./img/gif.webp)] bg-cover bg-center h-screen w-screen flex items-center justify-center'>


<div className='container flex  justify-center mt-20  ' >

<div className="img  " >
<img src="./img/quizimg.jpg" alt=""  className='h-72 flex  ' />
<div className='mt-4 px-4 py-2  bg-blue-500 text-white rounded justify-center text-center'>

<button    onClick={()=>toggle()}>Play now </button>
</div>
     </div>

     


     
     </div>

    </div>
    
    
  )

  
}

export default Startgame
