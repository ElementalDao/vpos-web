import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Divider, Flex, Menu, MenuButton, MenuItem, MenuList, Stack, Switch, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDevMode } from '../../actions/componentsActions';

export default function Defaults() {
    let dispatch = useDispatch()
    let comp = useSelector((x: any) => x.comp)
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
            <Divider/>
            <Flex justify='space-between' w='100%' align='center'>
                <Text overflowWrap='anywhere' maxW='120px' fontSize='md'>Dev Mode</Text>
                <Switch size='lg' id='isChecked' isChecked={comp.devMode} onChange={() => dispatch(setDevMode(!comp.devMode))} />
            </Flex>
        </Stack>
    )
}