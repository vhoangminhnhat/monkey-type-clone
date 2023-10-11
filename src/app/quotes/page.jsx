"use client"
import React, { useEffect, useState } from 'react';
import api from '@/interceptors';

const Quotes = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      if(typeof window !== "undefined"){
        const res = await api.get('api/quotes');
          if(res){
            setData(res);
          }
      }
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='text-6xl break-words'>
      {data?.[0]?.quotes}
    </div>
  )
}

export default Quotes;