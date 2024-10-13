import { MetaMaskError, claimButton, errorToast, loadingClaimButton, resetClaimButton, toaster } from "../toaster";
      const e = error as unknown as MetaMaskError;
      console.error("Error in connectWallet: ", e);
      errorToast(e, e.reason);
      const e = error as unknown as MetaMaskError;
      console.error("Error in checkPermitClaimable: ", e);
      errorToast(e, e.reason);
      const e = error as unknown as MetaMaskError;
      console.error("Error in creating ethers.Contract: ", e);
      errorToast(e, e.reason);
    const tx = await permit2Contract.permitTransferFrom(permit.permit, permit.transferDetails, permit.owner, permit.signature);
    return tx;
      const e = error as unknown as MetaMaskError;
      // Check if the error message indicates a user rejection
      if (e.code == "ACTION_REJECTED") {
        // Handle the user rejection case
        toaster.create("info", `Transaction was not sent because it was rejected by the user.`);
      } else {
        // Handle other errors
        console.error("Error in permitTransferFrom: ", e);
        errorToast(e, e.reason);
      }
    return null;
      const e = error as unknown as MetaMaskError;
      console.error("Error in tx.wait: ", e);
      errorToast(e, e.reason);
      const e = error as unknown as MetaMaskError;
      console.error("Error in renderTransaction: ", e);
      errorToast(e, e.reason);
        const e = error as unknown as MetaMaskError;
        console.error(e);
        errorToast(e, e.reason);
  const bitmap = await permit2Contract.nonceBitmap(permit.owner, wordPos).catch((error: MetaMaskError) => {