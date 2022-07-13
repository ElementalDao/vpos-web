import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import { BuyerDialProps } from "../../types/Buyer";
import Card from "../../layout/Card";

export default function BuyerConfirm({ title, amount, source, setReady, sourceEq }: BuyerDialProps) {
    return (
        <Card title='Confirm Payment' closeSplash={setReady}>
            <Flex flex={1} w='100%' direction='column' color={'white'}>
                <Flex gap={3} justify='center' flex='1'textAlign='center' display='flex' flexDirection='column' fontSize='2xl'>
                    <Text overflowWrap='anywhere'>Payment To <b>{title}</b></Text>
                    <Divider />
                    <b>{amount + '$'}</b>
                    <Divider />
                    Using Source <b>{ } { sourceEq + ' ' + source.symbol}</b>
                    <Button w='100px' alignSelf='center' mt={7} variant='solid' colorScheme='green' children={'Confirm'} />
                </Flex>
            </Flex>
        </Card>
    )
}