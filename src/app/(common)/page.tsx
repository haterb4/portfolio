import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiArrowUp } from "react-icons/pi";
import ContactForm from '@/components/ContactForm';
import { ImMap2 } from "react-icons/im";
import ContactInfo from '@/components/ContactInfo';
import { FaRegPaperPlane } from "react-icons/fa";

const HomePage = () => {
    return (
        <div className='w-full flex flex-col space-y-8'>
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

            {/* contact */}
            <Card className='bg-dark-2 border border-dark-3 rounded-none p-4 space-y-8'>
                <CardHeader className='border border-dark-3 flex flex-row justify-between items-center space-x-3 space-y-0 p-4'>
                    <div className='py-4 px-8 flex justify-center items-center text-light-1 text-lg font-medium border-2 border-dark-3'>Contact</div>
                    <div className='w-full py-4 px-8 flex justify-center items-center border-2 border-dark-3 text-light-2 text-base overflow-hidden'>
                        It is a long established fact that a reader will distracted by the readable content of page when looking at its layout... distracted in readable
                    </div>
                </CardHeader>
                <CardContent className='w-full h-[450px] p-0 flex flex-col lg:flex-row lg:justify-between items-center space-x-4'>
                    <ContactForm />
                    <div className='w-full lg:w-[550px] border border-dark-3 p-4 h-full flex flex-col justify-between'>
                        <div className='py-4 px-8 w-fit flex justify-center items-center text-light-1 text-lg font-medium border-2 border-dark-3'>Address</div>
                        <ContactInfo title='Visit Me' description='60 Rue du Freshe Blanc, Nantes, France' Icon={ImMap2} />
                        <ContactInfo
                            title='Contact Info'
                            description={
                                <ul>
                                    <li>+237 695724963</li>
                                    <li>haterb2803@gmail.com</li>
                                </ul>
                            }
                            Icon={FaRegPaperPlane}
                        />
                    </div>
                </CardContent>
            </Card>
            {/* footer */}
            <div className='h-[1px] bg-dark-3' />
            <footer className='flex justify-between items-center'>
                <p className='px-4 text-base text-light-2'>
                    &copy;{(new Date()).getFullYear()} Anzie Severin Bradley
                </p>
                <Link href={'#top'} className='text-light-2 flex items-center space-x-3 text-base'>
                    <span>Scroll to top</span>
                    <span><PiArrowUp size={22} /></span>
                </Link>
            </footer>
        </div>
    )
}

export default HomePage