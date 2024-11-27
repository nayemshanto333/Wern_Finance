import { Button } from '@nextui-org/react';
import React from 'react';


const Hero = () => {
  return (
    <section className='flex flex-col-reverse sm:flex-row gap-6 lg:gap-8 xl:gap-12 justify-between  mt-10 lg:mt-14 xl:mt-20'>
       
            <div className='space-y-6 sm:w-1/2'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold leading-tight'>Spend your Cardano anywhere, anytime.</h1>
                <p className='text-secondary w-4/5 text-xs lg:text-sm xl:text-base'>Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.</p>
                <Button variant='solid' color='primary' radius='full'>Get Started <span className='translate -rotate-90'>ↆ</span></Button>
            </div>
            <img className='w-10/12 sm:w-1/2 xl:-mr-[130px]'  src="hero.png" alt="hero" />
        
      
    </section>
  );
}

export default Hero;
