import { Grid, Image } from "semantic-ui-react";

const ItemList = ({ list }) => {

    return (
        <div>
            <Grid 
            columns={3} 
            divided>
                <Grid.Row>
                {list.map((item) => (
                        <>
                        <Grid.Column
                        style={{display: 'flex', justifyContent: 'center'}}
                        >
                            <Image 
                            src={item.api_featured_image}
                            alt={item.name} />
                        </Grid.Column>
                        </>
                    ))}
                </Grid.Row>
                

            </Grid>
        </div>
    )
    
}

export default ItemList;