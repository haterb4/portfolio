import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import { FaRegPaperPlane } from "react-icons/fa";
import { ImMap2 } from "react-icons/im";

const Contact = () => {
  return (
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
  )
}

export default Contact