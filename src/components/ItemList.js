/* eslint-disable @next/next/link-passhref */
import { Grid, Image } from "semantic-ui-react";
import Link from 'next/link';

const ItemList = ({ list }) => {

    return (
        
        <div>
            <Grid 
            columns={3}>
                <Grid.Row>
                {list.map((item) => (
                    <Grid.Column
                    key={item.id}
                    >
                        <div>
                            <Link 
                            href={`/item/${item.id}`}
                            passHref >
                                <a>
                                    <Image 
                                    style={{margin: 'auto', cursor: 'pointer'}}
                                    src={item.image_link}
                                    alt={item.name} />
                                </a>
                            </Link>
                            <Link 
                            href={`/item/${item.id}`} >
                            <div 
                            style={{fontWeight: 'bold', cursor: 'pointer'}}>
                                {item.name}
                            </div>
                            </Link>
                            <div>{item.brand}</div>
                            <div>$ {item.price}</div>
                        </div>
                    </Grid.Column>
                    ))}
                </Grid.Row>
                

            </Grid>
        </div>
    )
    
}

export default ItemList;