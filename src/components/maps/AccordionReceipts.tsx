import { Accordion, Flex } from "@chakra-ui/react";
import AccordionReceipt from "../AccordionReceipt";

export default function AccordionReceipts(props: any) {
    return (
        <Accordion {...props} allowToggle>
            {ACCORDION_ITEMS.length <= 0 ? <Flex fontSize='xl' flex='1' justify='center'>
                You don't have any receipts yet.
            </Flex> : ACCORDION_ITEMS.map((item, index) =>
                <AccordionReceipt key={index} {...item} />)}
        </Accordion>
    )
}

const ACCORDION_ITEMS = [
    {
        success: true,
        isBuy: false,
        tx: "0xeeaa79a2c8b75f6e4b1ef5ba8fdcf3cda212614bc1b9aff71611f7c06455060b",
        date: "0x62c5c7b9",
        usdValue: 10.000,
        to: '0x1F4ac228555D21BEfD6bF0f21111d13092A2BC7d',
        from: '@Michael & 0x17...7d',
        platformFee: 0.1,
        gasFee: 1.00
    },
    {
        success: true,
        isBuy: true,
        tx: "0xeeaa79a2c8b75f6e4b1ef5ba8fdcf3cda212614bc1b9aff71611f7c06455060b",
        date: "0x62c5c7b9",
        usdValue: 10.000,
        to: '@Starbucks & 0x14...8c',
        from: '0x1F4ac228555D21BEfD6bF0f21111d13092A2BC7d',
        platformFee: 0.1,
        gasFee: 1.00
    },
    {
        success: false,
        isBuy: true,
        tx: "0xeeaa79a2c8b75f6e4b1ef5ba8fdcf3cda212614bc1b9aff71611f7c06455060b",
        date: "0x62c5c7b9",
        usdValue: 10.000,
        to: '@Aurum & 0x17...7d',
        from: '0x1F4ac228555D21BEfD6bF0f21111d13092A2BC7d',
        platformFee: 0.1,
        gasFee: 1.00
    }
];