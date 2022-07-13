import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import Buyer from "./Buyer";
import Seller from "./Seller";

export default function Pos() {
    let defVposTab = localStorage.defVposTab ? localStorage.defVposTab : "Buyer"
    let toIndex = defVposTab === "Buyer" ? 0 : 1
    let [tabIndex, setTabIndex] = useState(toIndex)
    return (
        <Tabs defaultIndex={tabIndex} flex='1' w='100%' display='flex' flexDirection='column' variant='solid-rounded' colorScheme='blue'
            onChange={(index) => {setTabIndex(index);}} >
            <TabPanels display='flex' flex='1' alignItems='center' pb='60px'>
                <TabPanel w='100%'>
                    <Buyer />
                </TabPanel>
                <TabPanel w='100%'>
                    <Seller />
                </TabPanel>
            </TabPanels>
            <TabList position='fixed' bottom='110px' display='flex' w='100%' gap='5' left='0' pb={4} h='max-content' justifyContent='center' zIndex='0'>
                <Tab border='0 solid'>{tabIndex === 0 ? 'Buying' : 'Buy'}</Tab>
                <Tab border='0 solid'>{tabIndex === 1 ? 'Selling' : 'Sell'}</Tab>
            </TabList>
        </Tabs>
    )
}