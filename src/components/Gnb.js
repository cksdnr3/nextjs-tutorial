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
        if (name === 'Home') page = '/';
        if (name === 'About') page = '/about';
        router.push(page)
    } 
 
    return (  
        <div>
            <Menu >
                <Menu.Item
                name='Home'
                active={activeItem === 'Home'}
                onClick={handleItemClick}
                >
                Home
                </Menu.Item>

                <Menu.Item
                name='About'
                active={activeItem === 'About'}
                onClick={handleItemClick}
                >
                About
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Gnb;