import React from 'react';
import { Navbar, NavbarItem , NavbarBrand, NavbarContent, Link, Button } from '@nextui-org/react';

function Navarea() {
  return (
    <Navbar shouldHideOnScroll isBlurred={false} className='bg-black w-full' maxWidth='xl'>
      <NavbarBrand>
        <div>
          <img src="logo.png" alt="" />
        </div>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button color='primary' variant='bordered' radius="full">
            <Link>Contact</Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
        
    </Navbar>
  );
}

export default Navarea;


