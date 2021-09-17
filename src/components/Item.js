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


// api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/488/original/open-uri20171223-4-deo82c?1514063329"
// brand: "maybelline"
// category: null
// created_at: "2016-10-01T18:36:05.584Z"
// currency: null
// description: "Why You'll Love It\n\nLightweight pigments blend easily and wear evenly\nProvides a natural, fade-proof bronzed color that leaves skin the way it was meant to be...fresh, breathing and natural\n\nFor Best Results: For soft, natural look, brush along cheekbone, sweeping upward."
// id: 488
// image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/d4f7d82b4858c622bb3c1cef07b9d850_ra,w158,h184_pa,w158,h184.png"
// name: "Maybelline Fit Me Bronzer"
// price: "10.29"
// price_sign: null
// product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/488.json"
// product_colors: [{…}]
// product_link: "https://well.ca/products/maybelline-fit-me-bronzer_31265.html"
// product_type: "bronzer"
// rating: 4.5
// tag_list: []
// updated_at: "2017-12-23T21:08:49.985Z"
// website_link