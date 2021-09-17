import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
 

const Gnb = () => {
    const [activeItem, setActiveItem] = useState("");
    const router = useRouter();
    console.log(router)

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
        let page;
        if (name === 'home') page = '/';
        if (name === 'about') page = `/${name}`;
        if (name === 'contact') page = `/contact`;
        if (name === 'admin') page = `/${name}`;
        if (name === 'login') page = `/${name}`;
        router.push(page)
    } 
 
    return (  
        <div>
            <Menu >
                <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
                >
                Home
                </Menu.Item>
                <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={handleItemClick}
                >
                About
                </Menu.Item>
                <Menu.Item
                name='contact'
                active={activeItem === 'contact'}
                onClick={handleItemClick}
                >
                Contact Us
                </Menu.Item>
                <Menu.Item
                name='admin'
                active={activeItem === 'admin'}
                onClick={handleItemClick}
                >
                Admin
                </Menu.Item>
                <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={handleItemClick}
                >
                Login
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Gnb;