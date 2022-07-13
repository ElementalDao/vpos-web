import { ChevronDownIcon, ChevronUpIcon, CopyIcon } from "@chakra-ui/icons";
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { Receipt } from "../types/AccordionReceipt";
import { hexToDate } from "../utils/formats";

export default function AccordionReceipt({ from, to, success, isBuy, usdValue, date, tx, gasFee, platformFee }: Receipt) {
    date = hexToDate(date)
    let feeTotal = platformFee + gasFee
    let receiptTotal = feeTotal + usdValue

    function BuyToggle() {
        if (isBuy) {
            return <Flex align='center' color='orange.300'><Text fontSize='sm' children='Sent' /><ChevronUpIcon /></Flex>
        } else {
            return <Flex align='center' color='green.500'><Text fontSize='sm' children='Got' /><ChevronDownIcon /></Flex>
        }
    }

    function SuccessToggle() {
        if (success) {
            return <Badge colorScheme='green'>Success</Badge>
        } else {
            return <Badge ml='3' colorScheme='red'>Failed</Badge>
        }
    }
    return (
        <AccordionItem>
            <AccordionButton pl='2' pr='1' pt='1'>
                <Flex flex='1' direction='column'>
                    {success && <><Flex align='center' fontWeight='360'>{isBuy ? 'To' : 'From'}
                        <Text fontWeight='initial' textAlign='left' overflowWrap='anywhere' ml='2' fontSize='xs'
                            children={isBuy ? to : from} />
                    </Flex>
                        <Divider mb='1' /></>}
                    <Flex justify='space-between' align='center'>
                        <Flex align='center'>
                            <Flex direction='column'>
                                <Text fontSize='md' fontWeight='360' textAlign='right' children='Date' />
                                <SuccessToggle />
                            </Flex>
                            <Text maxW='120px' fontWeight={360} textAlign='right' overflowWrap='anywhere' ml='2' fontSize='xs' children={date} />
                        </Flex>
                        {success && <Flex mr='2' align='center'>
                            <BuyToggle />
                            <Flex ml='2' direction='column'>
                                {isBuy ? '-$' + receiptTotal : '+$' + receiptTotal}
                                <Text fontSize='sm' fontWeight='360' children={'Total'} />
                            </Flex>
                        </Flex>}

                    </Flex>
                </Flex>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel display='flex' flexDirection='column' justifyContent='center' pb={4} borderTop='1px solid'>
                {success && <Flex direction='column' gap={1}>
                    <Flex>Usd Value<Text ml='auto' children={'$' + usdValue} /></Flex>
                    <Divider />
                    <Flex>Fees<Text ml='auto' children={'$' + feeTotal} /></Flex>
                    <Flex fontWeight='360'>Gas<Text ml='auto' children={'$' + gasFee} /> </Flex>
                    <Flex fontWeight='360'>Platform<Text ml='auto' children={'$' + platformFee} /> </Flex>
                    <Divider />
                </Flex>}
                <Text children='Transaction' />
                <Flex align='center' gap={1}>
                    <Text overflowWrap='anywhere' as='i' fontSize='xs' children={tx} />
                    <CopyIcon h='20px' w='30px' ml='auto' />
                </Flex>
            </AccordionPanel>
        </AccordionItem>
    )
}