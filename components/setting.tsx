import React, { useRef, useState, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  IconButton,
  Flex,
  Stack,
  ListItem,
  UnorderedList,
  Code,
  Box,
} from "@chakra-ui/react";
import { SettingIcon } from "./icons/setting-icon";
import { useLocalStorage } from "../hooks/useLocalStorage";

function Setting() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [botToken, setBotToken] = useState("");
  const [room, setRoom] = useState("");
  const [localStorage, setLocalStorage] = useLocalStorage();
  const btnRef = useRef();

  const handleChangeBotToken = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBotToken(e.target.value);
  };

  const handleChangeRoom = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setRoom(e.target.value);
  };

  const handleOnClose = () => {
    onClose();
    setBotToken("");
    setRoom("");
  };

  useEffect(() => {
    console.log(room, botToken);
  }, [room, botToken]);

  const handleClickSave = () => {
    setLocalStorage({ botToken: botToken, room: room });
  };

  return (
    <>
      <Flex justifyContent="center" pt="10px">
        <IconButton
          aria-label="Setting"
          icon={<SettingIcon />}
          ref={btnRef}
          onClick={onOpen}
          size="sm"
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>BOT Setting</DrawerHeader>

              <DrawerBody>
                <Stack>
                  <Input
                    placeholder="BOT Token ..."
                    onChange={handleChangeBotToken}
                  />
                  <Input
                    placeholder="Group or Channel ..."
                    onChange={handleChangeRoom}
                  />
                  <Box>
                    <UnorderedList>
                      <ListItem>
                        You must enable (allowing) your <b>location access</b>{" "}
                        in your browser.
                      </ListItem>
                      <ListItem>
                        Make sure you have setup a Telegram Bot with{" "}
                        <Code>@BotFather</Code> and create a new one{" "}
                        <Code>@your_group</Code> or <Code>@your_channel</Code>{" "}
                        and fill at the form as above.
                      </ListItem>
                      <ListItem>
                        Press the button and <b>hold</b> around 1 second, it
                        will send the data includes coordinates latitude,
                        longitude and local time to telegram groups or your
                        channel through REST API.
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </Stack>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={handleOnClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue" onClick={handleClickSave}>
                  Save
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </>
  );
}

export default Setting;
