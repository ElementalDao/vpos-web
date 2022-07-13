import { ArrowRightIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Link, ListItem, Stack, Text, UnorderedList, useColorMode } from "@chakra-ui/react";
import { PosDemonstration, PoweredByAvalanche, VposDemonstration } from "./assets";
export default function Info() {
    const { colorMode, toggleColorMode } = useColorMode()
    let tmp = ' '
    return (
        <Stack w='100vw' h='100vh' pt='120px' overflowWrap='anywhere'>
            <Flex justify='center' color='currentColor' bgColor={colorMode === 'light' ? 'white' : '#1A202C'} w='100%' position='fixed' top={0} zIndex={3} p={4} borderBottom='1px solid'>
                <Flex maxW='620px' w='100%' justify='space-between' align='center'>
                    <Heading size='lg'>vPos</Heading>
                    <Flex gap={4}>
                        <Button onClick={toggleColorMode} children={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} />
                        <Button as={Link} href='#/pos' colorScheme='blue' variant='outline' children='Launch' />
                    </Flex>
                </Flex>
            </Flex>
            <Stack w='100%' justify='center' align='center' pb={10}>
                <Stack textAlign='center' spacing={10} align='center' pb={10}>
                    <Stack maxW={400} spacing={10}>
                        <Heading size='lg'>Welcome to Virtual Pos ~ Future of POS Technology</Heading>
                        <Heading fontWeight={500} size='md'>No more expensive POS machines, sell products by using just your phone.</Heading>
                        <Flex w='100%' gap={5} justify='center' align='center'>
                            <PosDemonstration boxSize={20} />
                            <ArrowRightIcon w={7} h={7} color='blue.300' />
                            <VposDemonstration boxSize={20} />
                        </Flex>
                        <Heading fontWeight={500} size='md'>Recieve your bills on the Avalanche blockchain and have access to them forever!</Heading>
                    </Stack>
                    <Flex display='flex' flexDirection='column' alignItems='center' w='100vw' bg='blue.500' color='white' pt={8} pb={8} pl={4} pr={4}>
                        <UnorderedList spacing={5} textAlign='left' pl={4} pr={4} w='100%' maxW={620} >
                            <Heading size='lg'>Take Control to your own hands</Heading>
                            <ListItem>
                                <Heading size='sm' children="Connect to the Dapp using Metamask" />
                            </ListItem>
                            <ListItem>
                                <Heading mb={3} size='sm' children="Selling" />
                                <Text children={'Navigate to the Pos page and select the Sell tab, then fill out a note and put in the usd value of your order, once you are ready press the QR button. Now the buyer can scan it!'} />
                            </ListItem>
                            <ListItem>
                                <Heading mb={3} size='sm' children="Buying" />
                                <Text children={'Navigate to the Pos page and select the Buy tab, once the seller is ready press StartScanning and scan the qr code provided by the seller, you will see the details if you see fit confirm the transaction.'} />
                            </ListItem>
                            <ListItem>
                                <Heading mb={3} size='sm' children="Receipts" />
                                <Text children={'Navigate to the Receipts page, there you can view and export your receipts as pdf files.'} />
                            </ListItem>
                        </UnorderedList>
                    </Flex>
                </Stack>
                <Button as={Link} href='#/pos' colorScheme='blue' variant='outline' children='Get Started' />
            </Stack>
            <Flex justify='center' minH={120} color='currentColor' bgColor={colorMode === 'light' ? 'white' : '#1A202C'} w='100%' p={4} borderTop='1px solid'>
                <Flex maxW='620px' w='100%' justify='space-between' align='center' gap={4}>
                    <PoweredByAvalanche borderRadius='10rem' w='200px' h='100px' />
                </Flex>
            </Flex>
        </Stack>
    )
}