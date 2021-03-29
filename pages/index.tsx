import Head from "next/head";
import { usePosition } from "use-position";
// components
import { Layout } from "../components";
import { Button } from "../components";

export default function Home() {
  const watch = true;
  // @ts-ignore
  const {
    latitude,
    longitude,
    //speed,
    timestamp,
    //accuracy,
    //error,
  } = usePosition(watch, { enableHighAccuracy: true });

  const time = new Date(timestamp).toLocaleString();

  return (
    <Layout>
      <Button lat={latitude} long={longitude} localtime={time} />
    </Layout>
  );
}
