import React from 'react'
import Link from 'next/link'
import { PiArrowUp } from "react-icons/pi";
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Services from '@/components/Services/Services';

const HomePage = () => {
    return (
        <div className='w-full flex flex-col space-y-8'>
            <Header />
            <Services />
            <Contact />
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