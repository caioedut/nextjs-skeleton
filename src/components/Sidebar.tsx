import { Box, Button, Text } from '@react-bulk/web';
import { signOut } from 'next-auth/react';

export default function Sidebar() {
  return (
    <>
      <Text variant="title">Sidebar</Text>

      <Button mt="auto" onPress={signOut}>
        Logout
      </Button>
    </>
  );
}
