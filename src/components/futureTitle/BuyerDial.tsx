import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, NumberInput, NumberInputField } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BuyerDialProps } from "../../types/Buyer";
import BuyerConfirm from "./BuyerConfirm";

export default function BuyerDial() {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(Number)
    const [ready, setReady] = useState(false)
    let comp = useSelector((state: any) => state.comp)
    const handleInputChange = (e: any) => Number(e.target.value) ? setAmount(e.target.value) : setTitle(e.target.value)
    
    let mockEq = (amount / 20)
    let confirmProps: BuyerDialProps = {
        title: title,
        amount: amount,
        sourceEq: mockEq,
        ready: ready,
        source: comp.buyerSource,
        setReady: setReady
    }

    const isError = title === 'w'
    return (
        <Box w='100%' pb='10'>
            {!isError && ready && <BuyerConfirm {...confirmProps} />}
            <Flex direction='column' gap='4'>
                <FormControl isInvalid={isError}>
                    <FormLabel htmlFor='seller' children='Seller Title' />
                    <Input w='100%'
                        _invalid={{ borderColor: 'orange.300', boxShadowColor: 'orange.300' }}
                        id='seller'
                        type='text'
                        value={title}
                        placeholder='exemple01'
                        onChange={handleInputChange}
                    />
                    {!isError ? (
                        <FormHelperText color='green.300'>
                            Valid title, always verify
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage color='orange.300'>Please enter a valid title</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='amount' children='Amount in Usd$' />
                    <NumberInput>
                        <NumberInputField placeholder='0000'
                            value={amount}
                            textAlign='center' id='amount'
                            onChange={handleInputChange} />
                    </NumberInput>
                </FormControl>
                <Button mt='3' disabled={isError || amount <= 0} alignSelf='center'
                    onClick={() => setReady(true)} w='120px' colorScheme='green'>
                    Pay
                </Button>
            </Flex>
        </Box>
    )
}