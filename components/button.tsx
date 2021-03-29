import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Box } from "@chakra-ui/react";
import useLongPress from "../hooks/useLongPress";
import styles from "../styles/Button.module.css";

interface ButtonProps {
  lat: string;
  long: string;
  localtime: string;
}

function Button({ lat, long, localtime }: ButtonProps) {
  const [longPressCount, setlongPressCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [status, setStatus] = useState("");

  const map = encodeURIComponent(`https://maps.google.com/?q=${lat},${long}`);
  const text = `<b>HELP!!</b>%0A${localtime}%0A<a href="${map}">Position</a>`;
  const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_GROUP}&text=${text}&parse_mode=html`;

  const onLongPress = () => {
    console.log("longpress is triggered");
    setlongPressCount(longPressCount + 1);
  };

  const onClick = () => {
    console.log("click is triggered");
    setClickCount(clickCount + 1);
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 1000,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  useEffect(() => {
    if (clickCount > 10) {
      setStatus("Need help");
    }

    if (longPressCount > 1) {
      setStatus("Warning danger!!!");
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          toast.success("Sent message!");
        });
      // reset to 0 to prevent click event triggered after longPressCount > 1
      setTimeout(() => {
        setlongPressCount(0);
      }, 3000);
    }
  }, [clickCount, longPressCount]);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <Box position="fixed" bottom="10%" right="10%">
        <button {...longPressEvent} className={styles.push_button} />;
      </Box>
    </>
  );
}

export default Button;
