import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Html5Qr from "../plugins/Html5Qr";
import { setAlertError, setAlertSuccess } from "../actions/alertActions";
import BuyerQrConfirm from "./BuyerQrConfirm";
// To use Html5QrcodeScanner

interface Result {
    note?: String
    adr: String
    usd: Number
    ask: String
}

export default function BuyerScan() {
    let [result, setResult] = useState<Result | false>(false)
    let [ready, setReady] = useState(false)
    let dispatch = useDispatch()
    let comp = useSelector((state: any) => state.comp)

    const { isOpen, onOpen, onClose } = useDisclosure()


    function handleSuccess(r: any) {
        setReady(false);
        setResult(JSON.parse(r));
        dispatch(setAlertSuccess('Succesfully Scanned.'))
        onOpen();
    }

    function handleError(r: any) {
        console.log(r)
    }

    return (
        <Box>
            <Flex gap={4} pb={3} direction='column' justify='center' align='center'>
                <Flex direction='column'>
                    <Html5Qr
                            ready={ready}
                            qrCodeSuccessCallback={handleSuccess}
                            qrCodeErrorCallback={handleError}
                        />
                </Flex>
                {comp.devMode && <Button onClick={onOpen}>Open Modal</Button>}
                <Button mb={3} colorScheme={!ready ? 'green' : 'yellow'} onClick={() => setReady(r => !r)}>
                    {!ready ? 'StartScanning' : 'StopScanning'}
                </Button>
            </Flex>
            <BuyerQrConfirm onClose={onClose} isOpen={isOpen} result={result}
                source={comp.buyerSource} sourceEq={1} />
        </Box >
    )
}