import * as algokit from '@algorandfoundation/algokit-utils'
import { TransactionSignerAccount } from '@algorandfoundation/algokit-utils/types/account'
import { useWallet } from '@txnlab/use-wallet'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
// import { AdasheContractClient } from '../contracts/AdasheContract'
// import { getAlgodConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'

interface AppCallsInterface {
  openModal: boolean
  setModalState: (value: boolean) => void
}

const AppCalls = ({ openModal, setModalState }: AppCallsInterface) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [contractInput, setContractInput] = useState<string>('')

  // const algodConfig = getAlgodConfigFromViteEnvironment()
  // const algodClient = algokit.getAlgoClient({
  //   server: algodConfig.server,
  //   port: algodConfig.port,
  //   token: algodConfig.token,
  // })

  const { enqueueSnackbar } = useSnackbar()
  const { signer, activeAddress } = useWallet()

  // const sendAppCall = async () => {
  //   setLoading(true)

  //   // Please note, in typical production scenarios,
  //   // you wouldn't want to use deploy directly from your frontend.
  //   // Instead, you would deploy your contract on your backend and reference it by id.
  //   // Given the simplicity of the starter contract, we are deploying it on the frontend
  //   // for demonstration purposes.
  //   const appClient = new AdasheContractClient(
  //     {
  //       sender: { signer, addr: activeAddress } as TransactionSignerAccount,
  //       resolveBy: 'id',
  //       id: 0,
  //     },
  //     algodClient,
  //   )
  //   await appClient.create.createApplication({}).catch((e: Error) => {
  //     enqueueSnackbar(`Error deploying the contract: ${e.message}`, { variant: 'error' })
  //     setLoading(false)
  //     return
  //   })

  //   const response = await appClient.hello({ name: contractInput }).catch((e: Error) => {
  //     enqueueSnackbar(`Error calling the contract: ${e.message}`, { variant: 'error' })
  //     setLoading(false)
  //     return
  //   })

  //   enqueueSnackbar(`Response from the contract: ${response?.return}`, { variant: 'success' })
  //   setLoading(false)
  // }

  return (
    <dialog id="appcalls_modal" className={`modal ${openModal ? 'modal-open' : ''} bg-slate-200`}>
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Say hello to your Algorand smart contract</h3>
        <br />
        <input
          type="text"
          placeholder="Provide input to hello function"
          className="input input-bordered w-full"
          value={contractInput}
          onChange={(e) => {
            setContractInput(e.target.value)
          }}
        />
        <div className="modal-action ">
          <button className="btn" onClick={() => setModalState(!openModal)}>
            Close
          </button>
          {/* <button className={`btn`} onClick={sendAppCall}> */}
            {loading ? <span className="loading loading-spinner" /> : 'Send application call'}
          {/* </button> */}
        </div>
      </form>
    </dialog>
  )
}

export default AppCalls
