import { Fragment } from 'react';

import { SquaresFour } from '@phosphor-icons/react';

import { Box, Card, Divider, Grid, Progress, Text } from '@react-bulk/web';

import PageTitle from '../components/PageTitle';

export default function Home() {
  const team = [
    { name: 'Richard Ward', role: 'Front-end developer', color: 'primary' },
    { name: 'Wagner August', role: 'Back-end developer', color: 'secondary' },
    { name: 'Oliver Smith', role: 'DBA / Data Science', color: 'error' },
  ];

  return (
    <>
      <PageTitle title="Dashboard" icon={SquaresFour} />

      <Grid gap={6}>
        <Box xs={12} md={4}>
          <Card flex>
            <Text bold>Weekly Report</Text>
            <Text variant="caption" color="text.secondary" mt={1}>
              Check out your weekly report
            </Text>

            <Box my="auto">
              <Text variant="secondary" mt={3}>
                Deposit
              </Text>
              <Text bold color="success" mt={1}>
                $ 624.99
              </Text>

              <Text variant="secondary" mt={3}>
                Widthdraw
              </Text>
              <Text bold color="error" mt={1}>
                $ 232.91
              </Text>

              <Text variant="secondary" mt={3}>
                Balance
              </Text>
              <Text bold color="info" mt={1}>
                $ 392.08
              </Text>
            </Box>
          </Card>
        </Box>

        <Box xs={12} md={5}>
          <Card flex>
            <Text bold>Team</Text>
            <Text variant="caption" color="text.secondary" mt={1}>
              Look for your co-workers
            </Text>

            {team.map((member, index) => (
              <Fragment key={index}>
                {index > 0 && <Divider mt={3} mr={-6} />}

                <Box row noWrap center mt={3}>
                  <Box w="3rem" h="3rem" borderRadius="1.5rem" bg={member.color} center>
                    <Text variant="subtitle">{member.name.replace(/[^A-Z]/g, '')}</Text>
                  </Box>
                  <Box flex ml={3}>
                    <Text bold>{member.name}</Text>
                    <Text variant="secondary" color="text.secondary">
                      {member.role}
                    </Text>
                  </Box>
                </Box>
              </Fragment>
            ))}
          </Card>
        </Box>

        <Box xs={12} md={3}>
          <Card flex>
            <Text bold>In Progress</Text>
            <Text variant="caption" color="text.secondary" mt={1}>
              Almost completed tasks
            </Text>

            {Array.from({ length: 4 }).map((_, index) => {
              const percent = Math.round(Math.random() * (100 - 20) + 20);

              return (
                <Fragment key={index}>
                  <Text variant="secondary" mt={4}>
                    Task {index + 1}
                  </Text>

                  <Progress size="small" value={percent} mt={1} />
                </Fragment>
              );
            })}
          </Card>
        </Box>
      </Grid>

      <Card flex bg="primary" mt={6}>
        <Text variant="subtitle" bold>
          Subscriptions Chart
        </Text>

        <Box row noWrap alignItems="end" justifyContent="evenly" h="100%" minh={240} py={3}>
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
                  w={32}
                  my={1}
                  style={{
                    bg: 'common.white.50',
                    borderRadius: '0.5rem 0.5rem 0 0',
                    transition: 'all ease .3s',
                    '&:hover': { bg: 'white' },
                  }}
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
