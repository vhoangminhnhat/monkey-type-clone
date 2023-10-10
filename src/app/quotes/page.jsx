"use client"
import React, { useEffect, useState } from 'react';
import getQuotes from "../../api/list/getQuotes"
import axios from 'axios';

const Quotes = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/quotes');
      if(res){
        setData(res?.data)
      }
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getData();
  }, [])

  return (
    
    <div>

    </div>
  )
}

export default Quotes;