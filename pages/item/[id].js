import axios from 'axios';
import Item from '../../src/components/Item'
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { Loader } from 'semantic-ui-react';

const Product = ({ item }) => {
  const router = useRouter();

  return (
      <>
        {router.isFallback 
        ? (
            <div style={{padding: '200px 0'}}>
                <Loader active inline="centered" />
            </div>
        )
        : item && (
            <>
            <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
            </Head>
            <Item item={item} />
            </>
        )}
        </>
  )
}

export default Product

export async function getStaticPaths() {
    const apiUrl = process.env.apiUrl;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        paths: data.slice(0, 9).map(v => ({
            params: { id: v.id.toString() }
        })),
        fallback: true,
    }
}
export async function getStaticProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
    const res = await axios.get(apiUrl);

    return {
        props: {
            item: res.data,
        }
    }
}