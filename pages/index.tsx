import Head from "next/head";
import { usePosition } from "use-position";
// components
import { Layout, Button, Setting } from "../components";

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
      <Setting />
      <Button lat={latitude} long={longitude} localtime={time} />
    </Layout>
  );
}
