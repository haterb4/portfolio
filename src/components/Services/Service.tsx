import React from 'react'
import { IconType } from 'react-icons';

const Service: React.FC<{title: string; description: string; count: number; Icon: IconType}> = ({title, description, count, Icon}) => {
  return (
    <div className='w-full flex flex-col space-y-8 border border-dark-3 p-5 text-light-2'>
        <div className='w-full flex justify-between items-center'>
            <div className='w-full marker:pr-4'>
                <h1 className='font-medium text-xl text-light-1'>{title}</h1>
                <p>{description}</p>
            </div>
            <div className='w-14 h-14 flex items-center justify-center border border-dark-3 text-blue-1'>
                <Icon size={24} />
            </div>
        </div>
        <p className='uppercase underline'>{count} projects</p>
    </div>
  )
}

export default Service