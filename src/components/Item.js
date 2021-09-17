import { Button, Image } from "semantic-ui-react"

const Item = ({ item }) => {
    const { name, image_link, brand, price, description } = item;
    
    return (
        <div 
        style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '50px 200px'}}>
            <Image
            src={image_link}
            alt={name}
            />
            <div style={{margin: '10px', fontWeight: 'bold', fontSize: 20}}>{name}</div>
            <div style={{margin: '10px'}}>{brand}</div>
            <div style={{margin: '10px'}}>$ {price}</div>
            <div style={{margin: '10px'}}>
                <Button style={{marginRight: '15px'}} color="orange" content="Buy" />
                <Button content="cart" />
            </div>
            <div style={{margin: '10px'}}>{description}</div>
        </div>
    )
}

export default Item;
