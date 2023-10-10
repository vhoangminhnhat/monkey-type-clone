"use client";
import Image from "next/image";
import "./style.scss"
import { Button } from "antd";

export default function Home() {
  return (
    <div style={{display: "grid", placeItems: "center"}}>
      <h1 className="break-words">
      <span>W</span>
      <span>e</span>
      <span>l</span>
      <span>c</span>
      <span>o</span>
      <span>m</span>
      <span>e</span>
      &nbsp;
      <span>T</span>
      <span>o</span>
      &nbsp;
      <span>M</span>
      <span>o</span>
      <span>n</span>
      <span>k</span>
      <span>e</span>
      <span>y</span>
      <span>T</span>
      <span>y</span>
      <span>p</span>
      <span>e</span>
    </h1>

    <Button type="default" className="bg-orange-400 text-center text-black mt-3 font-bold hover:bg-amber-500">Start</Button>
    </div>
    
  );
}
