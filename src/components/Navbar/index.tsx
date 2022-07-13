import { Box, Flex, Text, IconButton, Collapse, Link, useDisclosure, Button, useColorMode } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ReceiptIcon, PosIcon, ManageIcon } from '../';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
/* import LinkTreeMap from './LinkTreeMap'; */

export default function Navbar({ path }: any) {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box w='100%' h='max-content' position={'fixed'} zIndex={'2'} bottom='-1'>
      {/*Extra and Misc*/}
      <Collapse in={isOpen} animateOpacity >
        {/* <LinkTreeMap /> */}
        <Flex direction='row-reverse' p='3' bg='gray.800' borderTop='1px solid' borderColor='gray.500'>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Collapse>
      {/*Navbar*/}
      <Flex p='0 1.2rem' borderRadius={!isOpen ? '1rem 1rem 0 0' : '0'} textAlign='center'
        bg='gray.800' color='gray.600' h='100px' borderTop=' 1px solid'
        borderColor='blue.500' justifyContent='center'>
        {/*Buttons*/}
        <Flex align='center' justify='space-between' maxW='620px' w='100%'>
          <Link href='#/settings' color={path === '/settings' ? 'blue.300' : 'white'}>
            <ManageIcon h='6' w='6' />
            <Text fontSize='xs'>settings</Text>
          </Link>
          <Link href='#/pos' color={path === '/pos' ? 'blue.300' : 'white'}>
            <PosIcon h='6' w='6' />
            <Text fontSize='xs'>pos</Text>
          </Link>
          <Link href='#/receipts' color={path === '/receipts' ? 'blue.300' : 'white'}>
            <ReceiptIcon h='6' w='6' />
            <Text fontSize='xs'>receipts</Text>
          </Link >
          <IconButton onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w='6' h='6' />}
            variant='ghost' color='white'
            _hover={{ backgroundColor: 'gray.600' }}
            _active={{ backgroundColor: 'gray.600' }}
            aria-label={'Toggle Navigation'} />
        </Flex>
      </Flex>
    </Box>
  );
}