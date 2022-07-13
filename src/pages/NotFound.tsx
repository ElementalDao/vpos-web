import { Button, Flex, Link, Text } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Flex gap='2' flex='1' direction='column' justify='center' align='center'>
      <Text fontSize='2xl'>404 - Not Found!</Text>
      <Button as={Link} colorScheme='blue' href="#/" variant='outline' className="mt-3" size="md">
        Go Home
      </Button>
    </Flex>
  )
}