import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from './ui/button';
import Image from 'next/image';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { HiFingerPrint } from "react-icons/hi2";
import { IoCameraOutline } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";
import { FaBlog } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <Card className='flex flex-col w-full h-fit lg:w-[480px] min-w-[350px] border bg-dark-2 border-dark-3 rounded-none'>
        <CardHeader className='px-4 flex flex-col space-y-8 py-4'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-3'>
                    <div className='relative h-[70px] w-[80px] border border-dark-3 overflow-hidden flex items-center justify-center'>
                        {/* <Image src={""} alt='Anzie Severin Bradley' fill /> */}
                        <div className='text-blue-1'>
                            <span className='text-inherit text-3xl italic'>ICT</span>
                            <span className='text-inherit'></span>
                        </div>
                    </div>
                    <CardTitle className='text-light-1 text-2xl'>Engineer</CardTitle>
                </div>
                <Popover>
                    <PopoverTrigger>
                        <Button className='bg-transparent hover:bg-transparent p-0'>
                            <BsThreeDotsVertical size={26} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>Place content for the popover here.</PopoverContent>
                </Popover>
            </div>
            <div className='w-full border border-dark-3 flex items-center justify-start p-4 space-x-3'>
                <div className='relative h-[100px] w-[90px] border border-dark-3 overflow-hidden flex items-center justify-start'>
                    <Image src={"/images/bradley.png"} alt='Anzie Severin Bradley' height={65} width={80} />
                </div>
                <div className='flex flex-col space-y-1'>
                    <CardTitle className='text-light-1 text-xl font-bold'>Anzie Severin Bradley</CardTitle>
                    <CardDescription>Computer Science Engineer</CardDescription>
                    <div className='flex items-center space-x-3'>
                        <span className="text-blue-1"><HiOutlineLocationMarker /></span>
                        <CardDescription>Nantes, IMT- Alantinque</CardDescription>
                    </div>
                </div>
            </div>
        </CardHeader>
        <CardContent className='w-full px-4 pt-16 pb-12'>
            <Link href={"/"} className='w-full py-4 px-3 text-light-2 rounded-none bg-dark-2 border border-dark-2 hover:border-dark-3 hover:bg-dark-2 flex items-center space-x-4'>
                <span className='text-blue-1'><AiOutlineHome size={26} /></span>
                <span className='font-medium text-xl'>Home</span>
            </Link>
            <Link href={"/projects"} className='w-full py-4 px-3 text-light-2 rounded-none bg-dark-2 border border-dark-2 hover:border-dark-3 hover:bg-dark-2 flex items-center space-x-4'>
                <span className='text-blue-1'><CgMenuGridR size={26} /></span>
                <span className='font-medium text-xl'>Projects</span>
            </Link>
            <Link href={"/about"} className='w-full py-4 px-3 text-light-2 rounded-none bg-dark-2 border border-dark-2 hover:border-dark-3 hover:bg-dark-2 flex items-center space-x-4'>
                <span className='text-blue-1'><HiFingerPrint size={26} /></span>
                <span className='font-medium text-xl'>About</span>
            </Link>
            <Link href={"/gallery"} className='w-full py-4 px-3 text-light-2 rounded-none bg-dark-2 border border-dark-2 hover:border-dark-3 hover:bg-dark-2 flex items-center space-x-4'>
                <span className='text-blue-1'><IoCameraOutline size={26} /></span>
                <span className='font-medium text-xl'>Gallery</span>
            </Link>
            <Link href={"/contact"} className='w-full py-4 px-3 text-light-2 rounded-none bg-dark-2 border border-dark-2 hover:border-dark-3 hover:bg-dark-2 flex items-center space-x-4'>
                <span className='text-blue-1'><GrAttachment size={26} /></span>
                <span className='font-medium text-xl'>Contact</span>
            </Link>
            <Link href={"/blog"} className='w-full py-4 px-3 text-light-2 rounded-none bg-dark-2 border border-dark-2 hover:border-dark-3 hover:bg-dark-2 flex items-center space-x-4'>
                <span className='text-blue-1'><FaBlog size={26} /></span>
                <span className='font-medium text-xl'>Blog</span>
            </Link>
        </CardContent>
        <CardFooter className='w-full flex justify-between items-center px-4'>
            <div className='flex items-center space-x-8 p-4 border border-dark-3'>
                <Link href={"/"} className='text-light-2 p-0 bg-transparent hover:bg-transparent'>
                    <FaGithub size={28} />
                </Link>
                <Link href={"/"} className='text-light-2 p-0 bg-transparent hover:bg-transparent'>
                    <BiLogoGmail size={28} />
                </Link>
                <Link href={"/"} className='text-light-2 p-0 bg-transparent hover:bg-transparent'>
                    <FaFacebookF size={28} />
                </Link>
            </div>
            <div className='border border-dark-3 py-4 px-8 text-light-1'>&copy;{(new Date()).getFullYear()}</div>
        </CardFooter>
    </Card>
  )
}

export default Sidebar