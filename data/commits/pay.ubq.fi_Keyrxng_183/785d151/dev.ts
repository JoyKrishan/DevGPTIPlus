import { JsonRpcSigner } from "@ethersproject/providers";
import { claimButton, loadingClaimButton, resetClaimButton, toaster } from "../toaster";
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error?.message?.includes("missing provider")) {
        toaster.create("info", "Please use a web3 enabled browser to collect this reward.");
        claimButton.element.disabled = true;
      } else {
        toaster.create("info", "Please connect your wallet to collect this reward.");
        claimButton.element.disabled = true;
      }
  const chainIdHex = String(web3provider.network.chainId);
  const currentNetworkId = parseInt(chainIdHex, 16);
  window.ethereum.on("chainChanged", <T>(newNetworkId: T | string) => handleIfOnCorrectNetwork(parseInt(newNetworkId as string, 16), desiredNetworkId));
    switchNetwork(web3provider, desiredNetworkId).catch((error) => {
      console.error(error);
      toaster.create("error", `Please switch to the ${networkName} network to claim this reward.`);
    });
  } catch (error: unknown) {
    const code = (error as { code: number }).code;
    if (code == 4902) {
  } catch (error: unknown) {