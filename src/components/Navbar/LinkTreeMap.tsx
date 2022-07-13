import { Stack } from "@chakra-ui/react";
import LinkTreeItem from './LinkTreeItem';

export interface LinkTreeTypes {
    label: string;
    subLabel?: string;
    children?: Array<LinkTreeTypes>;
    href?: string;
}

const NAV_ITEMS: Array<LinkTreeTypes> = [
    {
        label: 'Settings',
        children: [
            {
                label: 'Setup',
                subLabel: 'Setup Sub',
                href: '#/settings',
            },
        ],
    }
];

export default function LinkTreeMap() {
    return (
        <Stack bg='gray.800'
            p={4}>
            {NAV_ITEMS.map((navItem) => (
                <LinkTreeItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};