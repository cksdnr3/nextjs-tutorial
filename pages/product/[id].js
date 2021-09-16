import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Item from '../../src/components/Item'

const API_URL = "http://makeup-api.herokuapp.com/api/v1/products/"

const Product = () => {
  const [item, setItem] = useState({});  
  const router = useRouter();
  const { id } = router.query;


  useEffect(() => {
    const getData = () => {
        axios.get(`${API_URL}${id}.json`)
            .then(res => {
                console.log(res.data);
                setItem(res.data)
            })
            .catch(err => {
                console.error(err);
            })
    };
    if (id && id > 0) {
        getData();
    }
  }, [id]);

  return (
      <Item item={item} />
  )
}

export default Product