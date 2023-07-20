import React from 'react'
import { useState } from 'react';
import { CheckIcon } from '@/assets/icons';

function CheckBox({item,type}:{item:string,type:string}) {
    const [isChecked, setIsChecked] = useState(true);
  return (
    isChecked ? (
        <button className='border w-4 h-4 border-black bg-violet-500 flex-center text-white '>
          <CheckIcon />
        </button>
      ) : (
        <button className='border w-4 h-4 border-black'></button>
      )
  )
}

export default CheckBox
