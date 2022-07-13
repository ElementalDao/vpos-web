import { Flex } from "@chakra-ui/react";
import { SellerDial, FloatingAskDial } from "../../components";

export default function Seller() {
    return (
        <Flex direction='column'>
            <SellerDial />
            <FloatingAskDial />
        </Flex>
    )
}