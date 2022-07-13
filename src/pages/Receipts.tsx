import { Flex } from "@chakra-ui/react";
import { AccordionReceipts } from "../components";

export default function Receipts() {
    return (
        <Flex w='100%' direction='column'>
            <AccordionReceipts maxW='1024px' w='100%' m='auto' pt={4} />
        </Flex>
    )
}