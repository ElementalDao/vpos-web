import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, NumberInput, NumberInputField, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SellerDialProps } from "../types/Seller";
import SellerQrPoint from "./SellerQrPoint";

export default function SellerDial() {
    const [note, setTitle] = useState(null || '')
    const [usd, setUsd] = useState(Number)
    let comp = useSelector((state: any) => state.comp)
    let walletId = comp.devMode ? "0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC" : comp.walletId
    const { isOpen, onOpen, onClose } = useDisclosure()
    let pointProps: SellerDialProps = {
        isOpen: isOpen,
        onClose: onClose,
        note: note,
        adr: walletId,
        usd: usd,
        ask: comp.sellerAsk.contract,
    }



    const isError = usd <= 0
    const isNoteError = note.length > 15
    return (
        <Box w='100%' pb='10'>
            {!isError && <SellerQrPoint {...pointProps} />}
            <Flex direction='column' gap='4'>
                <FormControl isInvalid={isNoteError}>
                    <FormLabel htmlFor='note' children='Note' />
                    <Input w='100%'
                        _invalid={{ borderColor: 'orange.300', boxShadowColor: 'orange.300' }}
                        type='text'
                        maxLength={15}
                        id='note'
                        value={note}
                        placeholder='Max 15 letters'
                        onChange={(x) => setTitle(x.target.value)}
                    />
                    {!isNoteError ? (
                        <FormHelperText>
                            Optional, {note.length}
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage color='orange.300'>Max 15 letters!</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl isInvalid={isError}>
                    <FormLabel htmlFor='usd' children='Amount in Usd' />
                    <NumberInput>
                        <NumberInputField placeholder='0000$'
                            _invalid={{ borderColor: 'orange.300', boxShadowColor: 'orange.300' }}
                            value={usd}
                            textAlign='center' id='usd'
                            onChange={(x) => setUsd(parseFloat(x.target.value))} />
                    </NumberInput>
                    {!walletId || isError ? (<FormErrorMessage color='orange.300'>
                        {!walletId ? "Please Connect your wallet." : 'Please enter a valid amount'}
                    </FormErrorMessage>) : (
                        <FormHelperText color='green.300'>
                            Valid number, please always verify!
                        </FormHelperText>)}
                </FormControl>
                <Button mt='3' disabled={isError || !walletId} alignSelf='center'
                    onClick={onOpen} w='120px' colorScheme='green'>
                    QR
                </Button>
            </Flex>
        </Box>
    )
}