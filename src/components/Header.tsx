import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Header = () => {
  return (
    <Card className='bg-dark-2 border border-dark-3 rounded-none'>
        <CardContent className='w-full p-6'>
            <div className='w-full flex flex-col lg:flex-row items-start lg:justify-between lg:space-x-6'>
                <div className='w-full h-[300px] lg:w-[450px] lg:h-[480px] relative overflow-hidden'>
                    <Image src={'/images/bradley.jpeg'} alt='anzie severin bradley' fill />
                </div>
                <div className='w-full h-[480px] flex flex-col items-center justify-between text-light-1'>
                    <div className='w-full p-4 flex justify-between items-center border border-dark-3'>
                        <div className='p-4 px-6 border-2 border-dark-3 flex items-center space-x-3'>
                            <span className='bg-green-500 w-3 h-3 rounded-full' />
                            <span className='font-bold'>Available for freelance work</span>
                        </div>
                        <div className='p-4 px-6 border-2 border-dark-3 flex items-center space-x-3'>
                            <span className='text-blue-1'><TbClockHour3 size={24} /></span>
                            <span className='font-bold'>{(new Date()).toDateString()} - {(new Date()).toTimeString().split(":").slice(0, 2).join(":")}</span>
                        </div>
                        <Link href="/contact" className='p-4 px-6 border-2 border-dark-3 flex items-center space-x-3'>
                            <span className='font-bold'>Contact me</span>
                            <span><MdOutlineArrowOutward /></span>
                        </Link>
                    </div>
                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 h-[360px]'>
                        <div className='w-full h-full flex flex-col justify-between border border-dark-3 py-4 px-6'>
                            <div className='w-full flex flex-col space-y-3'>
                                <h4 className='uppercase text-light-2'>A Software Engineer</h4>
                                <h1 className='capitalize text-light-1 font-medium text-3xl'>Anzie Severin Bradley 👋🏾</h1>
                                <p className='text-lg text-justify text-light-2'>I am a Software engineer with a focus on web and mobile full stack development. I have a diverse range of experience and industries.</p>
                            </div>
                            <div className='flex justify-end items-center'>
                                <div className='h-[150px] w-[150px] relative'>
                                    <Image src={'/images/signature.png'} alt='signature' fill />
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full border border-dark-3 p-4 relative overflow-hidden'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='p-4 px-6 border-2 border-dark-3 flex items-center space-x-3'>
                                    <span className='font-bold'>60 Rue du FRESHE BLANC</span>
                                </div>
                                <div className='p-4 px-6 border-2 border-dark-3 flex items-center space-x-3'>
                                    <span className='text-blue-1'><HiOutlineLocationMarker size={24} /></span>
                                    <span className='font-bold'>Nantes, France</span>
                                </div>
                            </div>
                            <div className='absolute -bottom-56 -right-36 h-[400px] w-[550px] flex justify-center items-center'>
                                <div className='relative w-full h-full'>
                                    <Image src={'/images/earth.png'} alt='earth' fill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
  )
}

export default Header