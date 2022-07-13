import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex, Text } from "@chakra-ui/react";
import { Defaults } from "../../components";

export default function Setup(props: any) {
    return (
        <Flex h='100%' w='100%' justifyItems='center'>
            <Accordion w='100%' pt={4} {...props} allowToggle>
                <AccordionItem>
                    <AccordionButton pl='2' pr='1' pt='1' h='80px'>
                        <Text textAlign='left' fontSize='xl' flex={1}>Defaults</Text>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel display='flex' flexDirection='column' justifyContent='center' pb={4} borderTop='1px solid'>
                    <Defaults />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    )
}