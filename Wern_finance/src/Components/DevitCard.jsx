import { Button } from '@nextui-org/react';
import React from 'react';

const DevitCard = () => {
  return (
    <section className='flex flex-col-reverse sm:flex-row gap-6 lg:gap-8 xl:gap-12 justify-between items-center mt-14 lg:mt-14 xl:mt-20'>
       
    <div className=' sm:w-1/2'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl  font-bold leading-tight'>Wern Debit Card</h1>
        <p className='text-secondary w-4/5 text-xs lg:text-sm xl:text-base my-6'>More than just a card, it's a bridge to a new financial experience. Embrace the simplicity and security of spending your Cardano with the Wern Card.</p>
        <Button variant='solid' color='primary' radius='full'>Create New Card <span className='translate -rotate-90'>ↆ</span></Button>
        <p className='text-primary font-bold text-sm textce pl-2 mt-1'>Will be available soon</p>
    </div>
    <img className='w-10/12 sm:w-1/2 '  src="hero2.svg" alt="hero" />


</section>
  );
}

export default DevitCard;
