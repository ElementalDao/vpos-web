import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ethers, utils } from 'ethers'
import avaxboxContract from '../contracts/AvaxBox.json'
import { useSelector } from 'react-redux'

declare const window: any

const AvaxboxContext = createContext(null)

export const AvaxboxProvider = ({ children }: any) => {
  let authState = useSelector((x: any) => x.auth)
  // Create a state variable to hold an instance of the Avaxbox contract
  const [contractInterface, setContractInterface]: any = useState({})

  useEffect(() => {
    // If user is connected to site via MetaMask
    if (authState.data.length) {
      // Get the current provider (defaults to the currently selected network)
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      // Get the signer (defaults to the currently selected account)
      const signer = provider.getSigner()

      // This address will be different for every network
      const contractAddress = '0xA4cD3b0Eb6E5Ab5d8CE4065BcCD70040ADAB1F00'
      // Initialise the contract instance
      const contract: any = new ethers.Contract(
        contractAddress,
        avaxboxContract.abi,
        signer
      )

      // Store this instance in the state
      setContractInterface(contract)
    }
  }, [authState.data])

  const sendMessage = useCallback(
    async ({ messageData, onSuccess, onError }: any) => {
      try {
        const { receiver, text, value } = messageData
        const timestamp = Date.now()
        const overrides: any = {'value': null}

        // If user is sending some AVAX
        if (value) {
          overrides.value = utils.parseEther(value)
        }

        const tx = await contractInterface.sendMessage(
          receiver,
          text,
          timestamp,
          overrides
        )
        // We have to wait for the transaction to be mined and added to a block
        await tx.wait()

        if (onSuccess && typeof onSuccess === 'function') onSuccess(tx)
      } catch (error) {
        if (onError && typeof onError === 'function') onError(error)
      }
    },
    [contractInterface]
  )

  const getNumOfMessages = useCallback(
    async ({ onSuccess, onError }: any) => {
      try {
        const tx = await contractInterface.getNumOfMessages()
        const numOfMessages = tx.toNumber()

        if (onSuccess && typeof onSuccess === 'function')
          onSuccess(numOfMessages)
      } catch (error) {
        if (onError && typeof onError === 'function') onError(error)
      }
    },
    [contractInterface]
  )

  const getOwnMessages = useCallback(
    async ({ startIndex, count, onSuccess, onError }: any) => {
      try {
        const tx = await contractInterface.getOwnMessages(startIndex, count)

        const ownMessages = tx
          .map(({ id, timestamp, receiver, sender, text, valueInWei }: any) => {
            const date = new Date(timestamp.toNumber())

            const formattedValueInnAvax = valueInWei.toString()
            const parsedValueInAVAX = utils
              .formatEther(formattedValueInnAvax)
              .toString()

            return {
              id: id.toNumber(),
              date,
              receiver,
              sender,
              text,
              value: parsedValueInAVAX,
            }
          })
          .sort((txA: any, txB: any) => {
            if (txA.date < txB.date) return 1
            if (txA.date > txB.date) return -1
            return 0
          })

        if (onSuccess && typeof onSuccess === 'function') onSuccess(ownMessages)
      } catch (error) {
        if (onError && typeof onError === 'function') onError(error)
      }
    },
    [contractInterface]
  )

  const contextData = {
    contractInterface,
    sendMessage,
    getNumOfMessages,
    getOwnMessages,
  }

  return (
    <AvaxboxContext.Provider value={contextData}>
      {children}
    </AvaxboxContext.Provider>
  )
}

export const useAvaxboxContext = () => useContext(AvaxboxContext)
