import { Flex } from "@chakra-ui/react";
import { BuyerScan, FloatingSourceDial } from "../../components";

export default function Buyer() {
    return (
        <Flex direction='column'>
            <BuyerScan />
            <FloatingSourceDial />
        </Flex>
    )
}