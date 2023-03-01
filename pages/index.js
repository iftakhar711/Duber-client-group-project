import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner/Banner";
import Vision from "@/components/Vision/Vision";
import Info from "@/components/Info/Info";
import BottomSign from "@/components/BottomSign/BottomSign";
import Offer from "@/components/Offer/Offer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Banner />
      <Offer />
      <Vision />
      <Info />
      <BottomSign />
    </div>
  );
}
