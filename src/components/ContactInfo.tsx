import React from 'react'
import { IconType } from 'react-icons';

const ContactInfo: React.FC<{title: string; description: string | React.ReactElement; Icon: IconType}> = ({ title, description, Icon}) => {
  return (
    <div className='w-full flex justify-between items-start space-x-4 relative'>
        <div className='h-[70px] w-[70px] min-w-[70px] border border-dark-3 flex justify-center items-center relative z-20 bg-dark-2'>
            <span className='text-blue-1'><Icon size={28} /></span>
        </div>
        <div className='w-full h-[150px] border border-dark-3 p-4 relative z-20 bg-dark-2'>
            <h1 className='text-2xl font-medium text-light-1'>{title}</h1>
            <p className='text-base text-light-2 mt-2'>{description}</p>
        </div>
        <div className='absolute left-6 top-14 h-[50px] w-[150px] border-l border-b border-blue-1 border-dashed z-0' />
    </div>
  )
}

export default ContactInfo