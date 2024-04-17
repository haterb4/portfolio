import Sidebar from '@/components/Sidebar'
import React from 'react'

const CommonLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='w-full min-h-screen flex items-start justify-between py-6 px-8 lg:space-x-8'>
        <Sidebar />
        <div className='w-full h-full'>{children}</div>
    </div>
  )
}

export default CommonLayout