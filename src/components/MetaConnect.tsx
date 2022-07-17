import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { connectWallet } from "../actions/authActions";
import { ACCOUNTS_FETCHED } from "../actions/types";
import compressAddress from "../utils/compressAddress";

declare var window: any

const MetaConnect = () => {
  let dispatch: any = useDispatch()
  let auth = useSelector((x: any) => x.auth)
  const isConnected = [ACCOUNTS_FETCHED].includes(auth.status)
  const connectText = isConnected && compressAddress(auth.data[0])

  return (
    <Box>
      <Stack spacing={2}>
        {isConnected && <Text fontSize='sm'> Wallet {connectText} </Text>}
        {!isConnected && <Button size='sm' onClick={() => connectWallet({ auth, window, dispatch })} >Connect Wallet</Button>}
      </Stack>
    </Box >
  );
};

export default MetaConnect;