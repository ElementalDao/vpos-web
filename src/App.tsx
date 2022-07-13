//Libraries
import { Route, Routes, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  ChakraProvider
} from "@chakra-ui/react";
//Components
import { Alerts, Navbar, ViewHeader } from './components';
//Views
import { NotFound, Receipts, Pos, Setup, Info } from './pages';
//Styles
import './App.css';

function App() {
  const location = useLocation()
  let path = location.pathname
  let atInfo = path === '/'
  return (
        <ChakraProvider>
          <Box className='App'>
            <Flex pb={!atInfo && '130px'} ml='auto' mr='auto' h='100%' maxW='620px' direction='column' align={'center'} >
              <Alerts />
              {!atInfo && <ViewHeader path={path} />}
              <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Info />} />
                <Route path='/pos' element={<Pos />} />
                <Route path='/settings' element={<Setup />} />
                <Route path='/receipts' element={<Receipts />} />
              </Routes>
            </Flex>
            {!atInfo && <Navbar path={path} />}
          </Box>
        </ChakraProvider>
  );
}

export default App;
