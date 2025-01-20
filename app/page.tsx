import Image from "next/image";
import styles from "./page.module.css";
import Hello from './components/Hello'
import BasicExample from "./components/Example";
import { Button } from "react-bootstrap";
import DynamicCard from "./components/DynamicCard";
import SwirlingButton from "./components/SwirlingButton";
export default function Home() {
  return (
    <div>
      <SwirlingButton/>
      <Hello name="Next.js with Typesript"/>
      <BasicExample/>
      <Button/>
      <DynamicCard/>
    </div>
       
  );
}
