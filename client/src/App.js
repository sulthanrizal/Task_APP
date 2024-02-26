import { Box, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DashboardContainer from './@components/dasboardContainer';
import router from './router';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box className='container-app'>
          <DashboardContainer>
            <Routes>
              {
                router.map(({ path, element }) => {
                  return (
                    <Route path={path} element={element} />
                  )
                })
              }
            </Routes>
          </DashboardContainer>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
