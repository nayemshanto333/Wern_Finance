import React from 'react';


const linkA = ["Investors" , "Features", "Book a demo", "Security "];
const linkB = ["Credits Cards" , "Gift Cards", "Savings accounts", "NFT "];
const linkC = ["Free rewards" , "Documentation", "Affiliate program", ];
const linkD = ["Changelog" , "License", "Site Maps", "News "];

const linkLists =(title, link)=>(
    <div className='space-y-4 '>
        <h1 className='font-bold'>{title}</h1>
        <ul className='space-y-2'>
            {link.map((item, i)=>(
                <li className='text-sm text-secondary' key={i}>{item}</li>
            ))}
        </ul>

    </div>
);



const Footer = () => {
  return (
    <footer className='bg-[#2928343D]/25 mt-14 mb-[569px]'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-5 gap-x-2.5 py-12 px-2.5 md:px-10 lg:px-20 xl:px-24 w-full max-w-[1400px] mx-auto'>
            <div className='space-y-2 col-span-2'>
                <div className='flex gap-3'>
                    <img src="logo2.png" alt="logo" />
                    <h1 className='text-lg font-bold'>Wern Finance</h1>
                </div>
                <p className='text-sm text-secondary max-w-[285px]'>Discover the power of our secure and rewarding credit cards</p>
            </div>
            {linkLists("About",linkA)}
            {linkLists("Products",linkB)}
            {linkLists("Useful links",linkC)}
            {linkLists("Social",linkD)}
        </div>
      
    </footer>
  );
}

export default Footer;
