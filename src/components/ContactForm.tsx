"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea'

const formSchema = z.object({
    name: z.string().min(3, {
      message: "The Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email."
    }),
    message: z.string().min(5, {
        message: "Your message should be at least 5 characters.",
    }),
})

const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className='w-full border border-dark-3 p-6 h-full'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full space-y-8 flex flex-col justify-between items-enter">
                    <div className='w-full h-full flex flex-col justify-between'>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} className='bg-dark-2 rounded-none border text-light-1 h-[50px] border-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} className='bg-dark-2 rounded-none border text-light-1 h-[50px] border-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Message"
                                            {...field}
                                            className='bg-dark-2 rounded-none border text-light-1 h-[150px] border-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className='w-full rounded-none py-6 bg-dark-2 hover:bg-dark-2 border border-dark-3'>Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactForm