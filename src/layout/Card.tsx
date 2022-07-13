import { CloseIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";

interface Props {
    title: String,
    children: JSX.Element | JSX.Element[],
    closeSplash: Function
}

export default function Card({ children, closeSplash, title }: Props) {
    return (
        <Flex w='100%' h='calc(100% - 140px)' position='fixed' align='center' justify='center' top='0' left='0' zIndex='3'>
            <Flex h='max-content' w='90%' p='20px' maxW='620px' direction='column' bg='gray.800' borderRadius='1rem' pb={5}>
                <Flex w='100%' justify='space-between'  pb={4}>
                    <Text fontSize='xl' color='white'>
                        {title}
                    </Text>
                    <IconButton color='white'
                        size='xs' w='max-content'
                        aria-label='close-splash' variant='ghost'
                        onClick={() => closeSplash(false)}
                        icon={<CloseIcon w={5} h={5} p='2px' />}
                        _hover={{ backgroundColor: 'gray.600' }}
                        _active={{ backgroundColor: 'gray.600' }} />
                </Flex>
                {children}
            </Flex>
        </Flex>
    )
}