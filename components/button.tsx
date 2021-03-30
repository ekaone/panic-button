import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Box, Text } from "@chakra-ui/react";
import { useLocalStorage } from "../hooks/useLocalStorage";
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
  const [bot] = useLocalStorage();

  const map = encodeURIComponent(`https://maps.google.com/?q=${lat},${long}`);
  const text = `<b>HELP!!</b>%0A${localtime}%0A<a href="${map}">Position</a>`;
  //@ts-ignore
  const url = `https://api.telegram.org/bot${bot.botToken}/sendMessage?chat_id=${bot.room}&text=${text}&parse_mode=html`;

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

    if (longPressCount > 0) {
      setStatus("Warning danger!!!");
      fetch(url)
        .then((response) => {
          response.json();
          console.log(response.status);
          if (response.status !== 200) {
            toast.error(
              "This didn't work, make sure BOT Token or Group/Channel set as properly"
            );
          }

          if (response.status === 200) {
            toast.success("Sent message!");
          }
        })
        .then((data) => {
          console.log(data);
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
      {
        //@ts-ignore
        typeof bot.botToken === "undefined" && (
          <Text
            display="flex"
            justifyContent="center"
            color="green.200"
            mt="20px"
          >
            {" "}
            Set BOT Token
          </Text>
        )
      }
    </>
  );
}

export default Button;
