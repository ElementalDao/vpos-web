import { ArrowRightIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Link, ListItem, Stack, Text, UnorderedList, useColorMode } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { isExternal } from "util/types";
import { GitbookIcon, PosDemonstration, PoweredByAvalanche, VposDemonstration } from "./assets";
export default function Info() {
    const { colorMode, toggleColorMode } = useColorMode()
    let links = {
        'github': 'https://github.com/ElementalDao',
        'discord': 'https://discord.gg/QY3PpjZKzk'
    }
    return (
        <Stack w='100vw' h='100vh' pt='120px' overflowWrap='anywhere'>
            <Flex h='100px' justify='center' color='currentColor' bgColor={colorMode === 'light' ? 'white' : '#1A202C'} w='100%' position='fixed' top={0} zIndex={3} p={4} borderBottom='1px solid'>
                <Flex maxW='620px' w='100%' justify='space-between' align='center'>
                    <Heading size='lg'>vPos</Heading>
                    <Flex gap={4}>
                        <Button onClick={toggleColorMode} children={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} />
                        <Button as={Link} href='#/pos' colorScheme='blue' variant='outline' children='Launch' />
                    </Flex>
                </Flex>
            </Flex>
            <Stack w='100%' justify='center' align='center' position='absolute' top='100px' pt={5}>
                <Stack textAlign='center' spacing={10} align='center' pb={10}>
                    <Stack maxW={400} spacing={10}>
                        <Heading size='lg'>Welcome to Virtual Pos - Future of POS Technology</Heading>
                        <Heading fontWeight={500} size='md'>Get paid in what you ask for, automatic currency conversion!</Heading>
                        <Flex w='100%' gap={5} justify='center' align='center'>
                            <PosDemonstration boxSize={20} />
                            <ArrowRightIcon w={7} h={7} color='blue.300' />
                            <VposDemonstration boxSize={20} />
                        </Flex>
                        <Heading fontWeight={500} size='md'>Recieve your bills on the Avalanche blockchain and have access to them forever!</Heading>
                    </Stack>
                    <Flex gap={4} p={4} wrap='wrap' justify='center'>
                        <Button as={Link} isExternal href='https://docs.vpos.dev/' leftIcon={<GitbookIcon h={10} w={8} />}>
                            Gitbook
                        </Button>
                        <Button as={Link} isExternal href='https://github.com/ElementalDao' leftIcon={<SocialIcon bgColor="currentColor" network='github' />}>
                            Github
                        </Button>
                        <Button as={Link} isExternal href='https://discord.gg/QY3PpjZKzk' leftIcon={<SocialIcon network="discord" />}>
                            Discord
                        </Button>
                    </Flex>
                    <Flex display='flex' flexDirection='column' alignItems='center' w='100vw' bg='blue.700' color='white' pt={8} pb={8} pl={4} pr={4}>
                        <UnorderedList spacing={5} textAlign='left' pl={4} pr={4} w='100%' maxW={620} >
                            <Heading size='lg'>Take Control to your own hands</Heading>
                            <ListItem>
                                <Heading size='sm' children="Connect to the Dapp using Metamask" />
                            </ListItem>
                            <ListItem>
                                <Heading mb={3} size='sm' children="Selling" />
                                <ListItem ml={3}>
                                    {'Select your ( Ask ) what you are asking for. ( You will receive the selected currency )'}
                                </ListItem>
                                <br />
                                <ListItem ml={3}>
                                    Fill out a note and put in the usd value of your order, once you are ready press the QR button.
                                </ListItem>
                                <br />
                                <ListItem ml={3}>
                                    Now the buyer can scan it!.
                                </ListItem>
                            </ListItem>
                            <ListItem>
                                <Heading mb={3} size='sm' children="Buying" />
                                <ListItem ml={3}>
                                    {'Select a source currency. ( Selected currency will be used as collateral for the purchase )'}
                                </ListItem>
                                <br />
                                <ListItem ml={3}>
                                    Navigate to the Pos page and select the Buy tab.
                                </ListItem>
                                <br />
                                <ListItem ml={3}>
                                    Once the seller is ready press StartScanning and scan the qr code provided by the seller.
                                </ListItem>
                                <br />
                                <ListItem ml={3}>
                                    You will see a confirm pop up, if you see fit confirm the transaction.
                                </ListItem>
                            </ListItem>
                            <ListItem>
                                <Heading mb={3} size='sm' children="Receipts" />
                                <Text children={'Navigate to the Receipts page, there you can view and export your receipts as pdf files.'} />
                            </ListItem>
                        </UnorderedList>
                    </Flex>
                    <Button as={Link} href='#/pos' colorScheme='blue' variant='outline' children='Get Started' />
                </Stack>
                <Flex justify='center' minH={120} color='currentColor' bgColor={colorMode === 'light' ? 'white' : '#1A202C'} w='100%' p={4} borderTop='1px solid'>
                    <Flex maxW='620px' w='100%' justify='space-between' align='center' gap={4}>
                        <PoweredByAvalanche borderRadius='10rem' w='200px' h='100px' />
                    </Flex>
                </Flex>
            </Stack>
        </Stack >
    )
}