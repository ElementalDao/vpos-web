import { ChevronUpIcon } from "@chakra-ui/icons";
import { Collapse, Flex, Icon, Stack, Text, useDisclosure, Link } from "@chakra-ui/react";
import { LinkTreeTypes } from "./LinkTreeMap";

export default function LinkTreeItem({ label, children, href }: LinkTreeTypes) {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={'gray.200'}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronUpIcon}
                        color='gray.200'
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>
            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={'gray.200'}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link color={'gray.200'} key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};