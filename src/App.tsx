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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalAuthState, setAuthLocalState, setupAccounts } from './actions/authActions';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()
  let path = location.pathname
  let atInfo = path === '/'

  const dispatch: any = useDispatch();
  const auth = useSelector((x: any) => x.auth)

  useEffect(() => {
    if (count <= 0) { /* checkNetwork({ window, dispatch }); */ getLocalAuthState({ auth, window, dispatch }); setCount(x => x + 1); }
    setupAccounts({ window, dispatch })
    return () => {
      setAuthLocalState(auth)
    }
  }, [auth.isHydrated])

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
    </ChakraProvider >
  );
}

export default App;
