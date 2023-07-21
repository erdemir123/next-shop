import React from 'react'


function Modal({children,setShowSort}:{children:React.ReactNode,setShowSort:(prev:boolean)=>void}) {
  return (
    <div >
      <div className='bg-[rgba(0, 0, 0, 0.4)] fixed top-0 left-0 w-[100%] h-[100%] backdrop-blur-md'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 p-20 rounded-lg shadow-lg shadow-slate-500 text-base font-semibold text-white'>
      {children}
      </div>
    </div>
  )
}

export default Modal
