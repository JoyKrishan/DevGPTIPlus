import { handleNetwork } from "../web3/wallet";
    handleNetwork(app.currentTx?.networkId ?? app.claimTxs[0].networkId).catch(console.error);