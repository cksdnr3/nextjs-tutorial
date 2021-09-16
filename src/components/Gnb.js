import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
 

const Gnb = () => {
    const [activeItem, setActiveItem] = useState("");
    const handleItemClick = (e, { name }) => setActiveItem(name);
 
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
                name='reviews'
                active={activeItem === 'reviews'}
                onClick={handleItemClick}
                >
                Reviews
                </Menu.Item>

                <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                onClick={handleItemClick}
                >
                Upcoming Events
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Gnb;