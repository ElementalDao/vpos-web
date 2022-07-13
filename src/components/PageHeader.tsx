import { Flex, FormControl, FormLabel, Heading, Stack, Switch, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { setDevMode } from "../actions/componentsActions"
import { firstLetterToUpper } from "../utils/formats"
import MetaConnect from "./MetaConnect"

export default function ViewHeader({ path, styleProps }: any) {
    let dispatch = useDispatch()
    let comp = useSelector((x: any) => x.comp)
    let account = '0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC'
    return (
        <Flex w='100%' p='1rem .7rem' justify='space-between' align='center' {...styleProps}>
            <Heading fontSize='xl'>{
                firstLetterToUpper(path)
            }</Heading>
            <Flex alignItems='center' justifyContent='center' gap={2} ml='auto' mr={4}>
                <FormLabel m={0} htmlFor='devMode'>Dev</FormLabel>
                <Switch id='isChecked' isChecked={comp.devMode} onChange={() => dispatch(setDevMode(!comp.devMode))} />
            </Flex>
            {comp.devMode ? <Text fontSize='sm'> Mock {account && account.slice(0, 4) + '...' + account.slice(-4)} </Text> : <MetaConnect />}
        </Flex>
    )
}