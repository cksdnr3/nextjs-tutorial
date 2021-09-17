import axios from 'axios';
import Item from '../../src/components/Item'
import Head from 'next/head';

const Product = ({ item, env }) => {
    console.log(env);

  return (
      <>
        <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
        </Head>
        {item && <Item item={item} />}
      </>
  )
}

export default Product

export async function getServerSideProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
    const res = await axios.get(apiUrl);

    return {
        props: {
            item: res.data,
            env: process.env.name,
        }
    }
}