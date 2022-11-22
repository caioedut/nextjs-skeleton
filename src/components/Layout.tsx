import { Box, Card } from '@react-bulk/web';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children }: any) {
  return (
    <>
      <Box minh="100vh">
        <Card m={3} mb={0}>
          <Header />
        </Card>
        <Box row noWrap flex>
          <Box w={280}>
            <Card flex m={3} mr={0}>
              <Sidebar />
            </Card>
          </Box>
          <Box flex>
            <Card flex m={3}>
              {children}
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}
