import axios from "axios";
import ItemList from "../src/components/ItemList";
import Head from "next/head";
import { Divider, Header } from "semantic-ui-react";


export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header as="h3" style={{margin: '20px 0'}}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list} />
    </div>
  )
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  
  return {
    props: {
      list: res.data,
    }
  }
}