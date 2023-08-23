import Image from 'next/image';
import React from 'react'

const ServerRevalidate = async () => {
    //dog api url
    // const data = await fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json());
    const data = await fetch("https://dog.ceo/api/breeds/image/random", {
        next: {
            revalidate: 2000,
        }
    }).then(
      (res) => res.json()
    );
    console.log("data", data);

  return (
      <div><Image src = {data.message} alt = 'dog' width = '100' height = '100' /></div>
  )
}

export default ServerRevalidate