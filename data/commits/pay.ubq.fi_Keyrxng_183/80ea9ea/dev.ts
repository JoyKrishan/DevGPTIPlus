import { app } from "../app-state";
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    const provider = app.provider;
// verifyCurrentNetwork checks if the user is on the correct network and displays an error if not
export async function verifyCurrentNetwork(desiredNetworkId: number) {