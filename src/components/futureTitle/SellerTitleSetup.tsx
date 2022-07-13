import { Button, Flex, Link, Text } from "@chakra-ui/react"

export default function SellerTitleSetup () {
    let mockProps = {
        hasTitle: false,
        hasAssociation: false
    }
    return (<>
        {(!mockProps.hasTitle || !mockProps.hasAssociation) && <Flex direction='column'>
            Coming Soon <Text fontSize='md' fontWeight={360}>
                Your wallet id doesn't have a Title or an association to a title, please Setup one;
                If you don't want one, you can use Your wallet address.
            </Text>
            <Button w='100px' alignSelf='center' as={Link} colorScheme='green' href="#/settings" variant='solid'>
                Setup
            </Button>
        </Flex>}</>
    )
}