import { Provider, useWallet } from '@txnlab/use-wallet'
import Account from './Account'

interface ConnectWalletInterface {
  openModal: boolean
  closeModal: () => void
}

const ConnectWallet = ({ openModal, closeModal }: ConnectWalletInterface) => {
  const { providers, activeAddress } = useWallet()

  const isKmd = (provider: Provider) => provider.metadata.name.toLowerCase() === 'kmd'

  return (
    <div className={openModal ? "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-md" : "hidden"}>
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full relative z-10">
          <form >
            <h3 className="font-bold text-2xl text-primary">Select wallet provider</h3>

            <div className="grid m-2 pt-5">
              {activeAddress && <Account />}

              {/* {!activeAddress &&
                providers?.map((provider) => (
                  <button
                    // data-test-id={`${provider.metadata.id}-connect`}
                    className="btn border-teal-800 border-1  m-2 text-white bg-primary"
                    key={`provider-${provider.metadata.id}`}
                    onClick={() => {
                      return provider.connect()
                    }}
                  >
                    {!isKmd(provider) && (
                      <>
                      Connect Wallet
                      
                      </>
                    )}
                    <span>{isKmd(provider) ? 'LocalNet Wallet' : provider.metadata.name}</span>
                  </button>
                ))} */}
            </div>

            <div className="modal-action flex">
              {!activeAddress &&
                providers?.map((provider) => (
                  <button
                    // data-test-id={`${provider.metadata.id}-connect`}
                    className="px-8 py-1 shadow-md m-2 text-white bg-primary"
                    key={`provider-${provider.metadata.id}`}
                    onClick={() => provider.connect()}
                  >
                    {/* {!isKmd(provider) && (
                      <>
                      Connect Wallet
                      </>
                    )} */}
                    {isKmd(provider) ? 'LocalNet Wallet' : provider.metadata.name}
                  </button>
              ))}

              {activeAddress && (
                <button
                  className="btn btn-warning bg-primary text-white"
                  data-test-id="logout"
                  onClick={() => {
                    if (providers) {
                      const activeProvider = providers.find((p) => p.isActive)
                      if (activeProvider) {
                        activeProvider.disconnect()
                      } else {
                        localStorage.removeItem('txnlab-use-wallet')
                        window.location.reload()
                      }
                    }
                  }}
                >
                  Logout
                </button>
              )}

              <button
                // data-test-id="close-wallet-modal"
                className="shadow-md rounded-sm px-4 py-1 bg-red-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </form>
      </div>
    </div>
  )
}
export default ConnectWallet
