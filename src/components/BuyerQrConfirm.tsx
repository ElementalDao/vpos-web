import { Box, Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";

export default function BuyerQrConfirm({ ...props }: any) {
    let { sourceEq, source } = props
    let { note, usd, adr, ask } = props.result
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} closeOnOverlayClick={false} size='sm'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Confirm Payment</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack gap={.2}>
                        <Text children='Notes' />
                        <Text fontSize='sm'>
                            {note && note}
                        </Text>
                        <Text children='Payment To' />
                        <Text overflowWrap='anywhere' fontSize='sm'>
                            {adr}
                        </Text>
                        <Divider />
                        <b>{usd + '$'}</b>
                        <Divider />
                        <Text fontSize='lg' children='Using Source' /> <b>{ } {sourceEq + ' ' + source.symbol}</b>
                    </Stack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='green' onClick={() => { }}>
                        Confirm
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}