import { Box, Button, Card, Form, Grid, Input, Link, Text } from '@react-bulk/web';
import { AnyObject, FormRef, useTheme } from '@react-bulk/core';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';

export default function Login() {
  const router = useRouter();
  const session = useSession();
  const theme = useTheme();

  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/');
    }
  }, [router, session]);

  const handleSubmit = async (event: FormRef, data: AnyObject) => {
    setError('');

    const { username, password } = data;

    if (!username || !password) {
      return setError('Type your username and password.');
    }

    await signIn('credentials', {
      username,
      password,
    });
  };

  return (
    <Box
      position="absolute"
      h="100%"
      w="100%"
      center
      style={{
        background: 'linear-gradient(45deg, rgba(41,98,255,1) 0%, rgba(103,51,255,1) 20%, rgba(170,0,255,1) 100%)',
      }}
    >
      <Box w={480} maxw="100%" p={3}>
        <Card px={16} py={24} bg={theme.hex2rgba('background', 0.75)}>
          <Form onSubmit={handleSubmit}>
            <Grid gap={5}>
              <Box xs={12}>
                <Input name="username" label="Username" autoFocus />
              </Box>
              <Box xs={12}>
                <Input name="password" label="Password" secure />
              </Box>
              {Boolean(error) && (
                <Box xs={12}>
                  <Text color="error">{error}</Text>
                </Box>
              )}
              <Box xs={12}>
                <Button type="submit" size="large">
                  Login
                </Button>
              </Box>
              <Box xs={12} alignItems="end">
                <Link>Lost password?</Link>
              </Box>
            </Grid>
          </Form>
        </Card>
      </Box>
    </Box>
  );
}

Login.noAuth = true;
