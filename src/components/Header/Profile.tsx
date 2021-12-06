import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lívia Belizário</Text>
          <Text color="gray.300" fontSize="small">
            liviabelirocha@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Lívia Belizário"
        src="https://github.com/liviabelirocha.png"
      />
    </Flex>
  );
}
