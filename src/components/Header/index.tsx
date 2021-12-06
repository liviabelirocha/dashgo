import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react";

import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { Logo } from "./Logo";
import { Search } from "./Search";

import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSideBarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open navigation"
          mr="2"
        ></IconButton>
      )}
      <Logo />

      {isWideVersion && <Search />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
