import { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "../src/components/ItemList";
import Head from "next/head";
import { Divider, Header } from "semantic-ui-react";

const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

export default function Home() {
  const [list, setList] = useState([]);

  const getData = () => {
    axios.get(API_URL)
        .then(res => {
          console.log(res.data);
            setList(res.data);
        })
        .catch(err => {
            console.error(err);
        })
  };

  useEffect(() => {
      getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header as="h3" style={{paddingTop: 40}}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list} />
    </div>
  )
}
 