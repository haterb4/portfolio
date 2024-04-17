import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import Service from './Service'
import SERVICES from '@/data/services'

const Services = () => {
  return (
    <Card className='bg-dark-2 border border-dark-3 rounded-none p-4 space-y-8'>
        <CardHeader className='border border-dark-3 flex flex-row justify-between items-center space-x-3 space-y-0 p-4'>
            <div className='py-4 px-8 flex justify-center items-center text-light-1 text-lg font-medium border-2 border-dark-3'>Services</div>
            <div className='w-full py-4 px-8 flex justify-center items-center border-2 border-dark-3 text-light-2 text-base overflow-hidden'>
                It is a long established fact that a reader will distracted by the readable content of page when looking at its layout... distracted in readable
            </div>
        </CardHeader>
        <CardContent className='w-full h-fit p-0 grid frid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8'>
            {SERVICES.map((service, index) => (
                <Service
                    key={"service-"+index}
                    title={service.title}
                    description={service.description}
                    count={service.count}
                    Icon={service.Icon}
                />
            ))}
        </CardContent>
    </Card>
  )
}

export default Services