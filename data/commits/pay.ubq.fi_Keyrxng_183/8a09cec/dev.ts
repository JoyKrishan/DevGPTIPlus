import { JsonRpcProvider } from "@ethersproject/providers";
export async function testRpcPerformance(networkId: number) {
  const latencies: Record<string, number> = JSON.parse(localStorage.getItem("rpcLatencies") || "{}");

        // Save the latency in localStorage
        latencies[baseURL] = latency;
        // Save -1 in localStorage to indicate an error
        latencies[baseURL] = -1;
      // Save -1 in localStorage to indicate an error
      latencies[baseURL] = -1;
  await Promise.all(promises);
  localStorage.setItem("rpcLatencies", JSON.stringify(latencies));
}

export function getFastestRpcProvider(networkId: number) {
  const latencies: Record<string, number> = JSON.parse(localStorage.getItem("rpcLatencies") || "{}");

  // Get all latencies from localStorage and find the fastest RPC
  const sortedLatencies = Object.entries(latencies).sort((a, b) => a[1] - b[1]);
  const optimalRPC = sortedLatencies[0][0];


let isTestCompleted = false;

export async function getOptimalProvider(networkId: number): Promise<JsonRpcProvider> {
  // If the test is already completed for this session, return the fastest RPC provider
  if (isTestCompleted) {
    return getFastestRpcProvider(networkId);
  }

  // If the test is not completed yet, check if there are any latencies stored in the localStorage
  const latencies: Record<string, number> = JSON.parse(localStorage.getItem("rpcLatencies") || "{}");
  if (Object.keys(latencies).length > 0) {
    // If there are latencies stored in the localStorage, use the previous best RPC
    const provider = getFastestRpcProvider(networkId);
    // Start the test in the background
    testRpcPerformance(networkId)
      .then(() => {
        isTestCompleted = true;
      })
      .catch(console.error);
    return provider;
  } else {
    // If it's the user's first time and there are no latencies stored in the localStorage,
    // wait for the test to finish and then return the fastest RPC provider
    await testRpcPerformance(networkId);
    isTestCompleted = true;
    return getFastestRpcProvider(networkId);
  }
}