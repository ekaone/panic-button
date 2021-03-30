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
} from "@chakra-ui/react";
import { SettingIcon } from "./icons/setting-icon";

function Setting() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [botToken, setBotToken] = useState("");
  const [room, setRoom] = useState("");
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
                    value={botToken}
                    placeholder="BOT Token ..."
                    onChange={handleChangeBotToken}
                  />
                  <Input
                    value={room}
                    placeholder="Group or Channel ..."
                    onChange={handleChangeRoom}
                  />
                </Stack>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={handleOnClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </>
  );
}

export default Setting;
