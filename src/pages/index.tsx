import { Fragment } from 'react';

import { Box, Card, Divider, Grid, Progress, Text } from '@react-bulk/web';

import Head from '@/components/Head';

export default function Home() {
  const team = [
    { name: 'Richard Ward', color: 'primary', role: 'Front-end developer' },
    { name: 'Wagner August', color: 'secondary', role: 'Back-end developer' },
    { name: 'Oliver Smith', color: 'error', role: 'DBA / Data Science' },
  ];

  return (
    <>
      <Head title="Dashboard" />

      <Grid gap>
        <Box md={4} xs={12}>
          <Card flex>
            <Text bold>Weekly Report</Text>
            <Text color="text.secondary" mt={1} variant="caption">
              Check out your weekly report
            </Text>

            <Box my="auto">
              <Text mt={4} variant="secondary">
                Deposit
              </Text>
              <Text bold color="success" mt={1}>
                $ 624.99
              </Text>

              <Text mt={4} variant="secondary">
                Widthdraw
              </Text>
              <Text bold color="error" mt={1}>
                $ 232.91
              </Text>

              <Text mt={4} variant="secondary">
                Balance
              </Text>
              <Text bold color="info" mt={1}>
                $ 392.08
              </Text>
            </Box>
          </Card>
        </Box>

        <Box md={5} xs={12}>
          <Card flex>
            <Text bold>Team</Text>
            <Text color="text.secondary" mt={1} variant="caption">
              Look for your co-workers
            </Text>

            {team.map((member, index) => (
              <Fragment key={index}>
                {index > 0 && <Divider mr={-4} mt={4} />}

                <Box center noWrap row mt={4}>
                  <Box center bg={member.color} borderRadius="1.5rem" h="3rem" w="3rem">
                    <Text variant="subtitle">{member.name.replace(/[^A-Z]/g, '')}</Text>
                  </Box>
                  <Box flex ml={4}>
                    <Text bold>{member.name}</Text>
                    <Text color="text.secondary" variant="secondary">
                      {member.role}
                    </Text>
                  </Box>
                </Box>
              </Fragment>
            ))}
          </Card>
        </Box>

        <Box md={3} xs={12}>
          <Card flex>
            <Text bold>In Progress</Text>
            <Text color="text.secondary" mt={1} variant="caption">
              Almost completed tasks
            </Text>

            {Array.from({ length: 4 }).map((_, index) => {
              const percent = Math.round(Math.random() * (100 - 20) + 20);

              return (
                <Fragment key={index}>
                  <Text mt={4} variant="secondary">
                    Task {index + 1}
                  </Text>

                  <Progress mt={1} size="small" value={percent} />
                </Fragment>
              );
            })}
          </Card>
        </Box>
      </Grid>

      <Card flex bg="primary" mt={4}>
        <Text bold variant="subtitle">
          Subscriptions Chart
        </Text>

        <Box noWrap row alignItems="end" h="100%" justifyContent="evenly" minh={240} py={4}>
          {Array.from({ length: 12 }).map((_, index) => {
            const percent = Math.round(Math.random() * (100 - 20) + 20);

            const date = new Date();
            date.setMonth(index);
            const month = date.toLocaleString('en', { month: 'short' });

            return (
              <Box key={index} h={`${percent}%`}>
                <Text center>{percent}</Text>
                <Box
                  flex
                  my={1}
                  style={{
                    '&:hover': { bg: 'white' },
                    bg: 'common.white.50',
                    borderRadius: '0.5rem 0.5rem 0 0',
                    transition: 'all ease .3s',
                  }}
                  w={32}
                />
                <Text center>{month}</Text>
              </Box>
            );
          })}
        </Box>
      </Card>
    </>
  );
}
