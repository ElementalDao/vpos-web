import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setSellerAsk } from "../actions/componentsActions";
/* import { useState } from "react"; */

let availableCoins = [
    { symbol: 'USDT' },
    { symbol: 'AVAX' },
    { symbol: 'ETH.e' },
    { symbol: 'BTC' }
]

export default function FloatingAskDial() {
    /* let [sellerAsk, setSellerAsk] = useState({ symbol: 'AVAX' }) */
    let dispatch = useDispatch()
    let comp = useSelector((state: any) => state.comp)
    return (
        <Box>
            <Flex gap='3' justify='center' align='center'>
                <Text fontSize='lg' children={'Asking'} />
                <Menu placement='auto'>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {comp.sellerAsk.symbol}
                    </MenuButton>
                    <MenuList>
                        {availableCoins.map((e, index) => e.symbol !== comp.sellerAsk.symbol &&
                            <MenuItem justifyContent='center' key={index} onClick={() => dispatch(setSellerAsk({ symbol: e.symbol }))}>
                                {e.symbol}
                            </MenuItem>)}
                    </MenuList>
                </Menu>
            </Flex>
            <Text textAlign='center' m='auto' mt='3' maxW='320px' fontWeight='360' fontSize='sm'>You will rececive your asking currency.</Text>
        </Box>
    )
}