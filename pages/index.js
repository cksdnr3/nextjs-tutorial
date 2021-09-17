import { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "../src/components/ItemList";
import Head from "next/head";
import { Divider, Header, Loader } from "semantic-ui-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    axios.get(API_URL)
        .then(res => {
          console.log(res.data);
            setList(res.data);
            setIsLoading(false);
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
      <Header as="h3" style={{margin: '20px 0'}}>
        베스트 상품
      </Header>
      <Divider />
      {isLoading 
      ? (
        <div style={{ padding: '300px 0'}}>
          <Loader active inline="centered" />
        </div>
      ) 
      : <ItemList list={list} />}
    </div>
  )
}
 