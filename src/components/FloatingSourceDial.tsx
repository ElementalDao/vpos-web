import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBuyerSource } from "../actions/componentsActions";

let availableCoins = [
    { symbol: 'USDT' },
    { symbol: 'AVAX' },
    { symbol: 'ETH.e' },
    { symbol: 'BTC' }
]

export default function FloatingSourceDial() {
    /* let [currentSource, setCurrentSource] = useState({ symbol: 'AVAX' }) */
    let dispatch = useDispatch()
    let comp = useSelector((state: any) => state.comp)
    return (
        <Box>
            <Flex gap='3' justify='center' align='center'>
                <Text fontSize='lg'>
                    Source
                </Text>
                <Menu placement="auto">
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        {comp.buyerSource.symbol}
                    </MenuButton>
                    <MenuList>
                        {availableCoins.map((e, index) => e.symbol !== comp.buyerSource.symbol &&
                            <MenuItem justifyContent='center' key={index} onClick={() => dispatch(setBuyerSource({ symbol: e.symbol }))}>
                                {e.symbol}
                            </MenuItem>)}
                    </MenuList>
                </Menu>
            </Flex>
            <Text textAlign='center' m='auto' mt='3' maxW='320px' fontWeight='360' fontSize='sm'>
                You are using source as your payment currency.</Text>
        </Box>
    )
}