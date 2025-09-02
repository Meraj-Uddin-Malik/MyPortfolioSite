"use client";

import emailjs from 'emailjs-com'; // For Email sending on submit
import Swal from 'sweetalert2'; // for sweat alert


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { SelectGroup } from "@radix-ui/react-select";


const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_v5snozb', 'template_rh9q09t', e.target, 'TfHeGjn7b18tOqa0U')
    .then((result) => {
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        e.target.reset(); // Clear the form fields
      });
    }, (error) => {
      Swal.fire({
        title: 'Error!',
        text: 'There was an error sending your message. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
};


const info = [
  {
    icon: <FaPhoneAlt />,
    title : "Phone",
    description: "+923002953272",
  },

  {
    icon: <FaEnvelope />,
    title : "Email",
    description: "merajuddin618@gmail.com",
  },

  {
    icon: <FaMapMarkedAlt />,
    title : "Address",
    description: "Karachi, Pakistan",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's Work Togather</h3>
              <p className="text-white/60">
                Have questions or need help? Contact me through the form below.
                I'll respond as soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="First Name" />
                <Input type="text" name="lastname"  placeholder="Last Name" />
                <Input type="email" name="email"  placeholder="Email Address" />
                <Input type="tel" name="phone"  placeholder="Phone Number" />
              </div>
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> Select a service </SelectLabel>
                    <SelectItem value="est">UI/UX Designing</SelectItem>
                    <SelectItem value="cst">Graphic Designing</SelectItem>
                    <SelectItem value="mst">Website Designing</SelectItem>
                    <SelectItem value="wst">Website Development</SelectItem>
                    <SelectItem value="yst">Mobile App Development</SelectItem>
                    <SelectItem value="ost">Marketing Ads</SelectItem>
                    <SelectItem value="kst">Shopify App Designing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type Your Message Here."
              />

              {/* button */}
              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li className="flex items-center gap-6" key={index}>
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded 
                flex items-center justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
