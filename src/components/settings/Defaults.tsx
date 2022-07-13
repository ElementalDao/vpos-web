import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function Defaults() {
    let defVposTab = localStorage.defVposTab ? localStorage.defVposTab : "Buyer"
    let [vposTab, setVposTab] = useState(defVposTab)
    
    return (
        <Stack gap={4} w='100%' justify='center' align='center'>
            <Flex justify='space-between' w='100%' align='center'>
                <Text overflowWrap='anywhere' maxW='120px' fontSize='md'>vPos starting tab</Text>
                <Menu placement='auto'>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        {vposTab}
                    </MenuButton>
                    <MenuList alignSelf='center'>
                        <MenuItem justifyContent='center' onClick={() => setVposTab('Buyer')}>
                            Buyer
                        </MenuItem>
                        <MenuItem justifyContent='center' onClick={() => setVposTab('Seller')}>
                            Seller
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Button colorScheme='blue' variant='solid' size="md" onClick={() => 
                localStorage.setItem("defVposTab", vposTab)}>
                    Save
                </Button>
            </Flex>
        </Stack>
    )
}