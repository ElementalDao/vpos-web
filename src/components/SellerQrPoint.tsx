import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { SellerDialProps } from "../types/Seller";
import Card from "../layout/Card";
import QRCode from '../plugins/react-qr-code';

export default function SellerQrPoint({ adr, ask, usd, note, onClose, isOpen  }: SellerDialProps) {
    let qrContent: any = {
        "adr": adr,
        "ask": ask,
        "usd": usd,
        "note": note
    }
    let qr = JSON.stringify(qrContent)
    return (
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size='sm'>
            <ModalOverlay />
            <ModalContent bg={'black'}>
                <ModalHeader>Buyer, please scan</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex justifySelf='center' p='20px' bg='white' w='max-content' h='max-content' m="0 auto" maxW={224}>
                        <QRCode
                            size={256}
                            style={{ height: "max-content", width: 'max-content' }}
                            value={qr}
                            viewBox={'0 0 256 256'}
                        />
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Text fontWeight={360} color='white'>
                        You will get notified after the buyer confirms and tx success.
                    </Text>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}