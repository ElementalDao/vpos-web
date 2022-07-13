import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlertWarning } from "../actions/alertActions";
import { setWalletId } from "../actions/componentsActions";

declare var window: any

const MetaConnect = () => {
  let dispatch = useDispatch()
  let rSetAlertWarning = (x: any) =>  dispatch(setAlertWarning(x))
  let setAccount = (x: any) =>  dispatch(setWalletId(x))
  let account = useSelector((x: any) => x.comp.walletId)

  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
    }
  }, []);

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountsChanged(res[0]);
      } catch (err) {
        console.error(err);
        rSetAlertWarning("There was a problem connecting to MetaMask");
      }
    } else {
      rSetAlertWarning("Install MetaMask");
    }
  };

  const accountsChanged = async (newAccount: any) => {
    setAccount(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      rSetAlertWarning("There was a problem connecting to MetaMask");
    }
  };

  const chainChanged = () => {
    rSetAlertWarning(null);
    setAccount(null);
    setBalance(null);
  };

  return (
    <Box>
      <Stack spacing={2}>
        {account && <><Text fontSize='sm'> Address {account && account.slice(0, 4) + '...' + account.slice(-4)} </Text>
          <Text fontSize='sm'>
            Balance {balance && parseFloat(balance).toFixed(3)} {balance ? "AVAX" : null}
          </Text></>}
        {!account && <Button size='sm' onClick={connectHandler}>Connect Wallet</Button>}
      </Stack>
    </Box>
  );
};

export default MetaConnect;