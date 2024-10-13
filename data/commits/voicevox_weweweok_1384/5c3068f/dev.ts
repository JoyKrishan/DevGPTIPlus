import { createServer } from "net";
  // lsofは、ポートを使用しているプロセスが存在しない場合は
  // エラーを返すので、エラーを無視して割り当て可能として扱う
  // FIXME: lsof以外のエラーだった場合のエラーハンドリングを追加する
  let stdout: string;
  try {
    stdout = execFileSync(exec.cmd, exec.args, {
      shell: true,
    }).toString();
  } catch (e) {
    portLog(hostInfo.port, "Assignable; Nobody uses this port!", isNested);
    return undefined;
  }
/**
 * ポートが割り当て可能かどうか実際にlistenして接続したポート番号を返します。
 * 0番ポートを指定した場合はランダムな接続可能ポート番号を返します。
 * @param port 確認するポート番号
 * @param hostname 確認するホスト名
 * @returns 割り当て不能だった場合`undefined`を返します。割り当て可能だった場合ポート番号を返します。
 */
function findOrCheckPort(
  port: number,
  hostname: string
): Promise<number | undefined> {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.on("error", () => {
      server.close();
      resolve(undefined);
    });
    server.on("listening", () => {
      const address = server.address();
      server.close();
      if (address == undefined || typeof address === "string") {
        reject(new Error(`'address' is null or string: ${address}`));
        return;
      }
      resolve(address.port);
    });
    server.listen(port, hostname);
  });
}

 * @param basePort 元のポート番号
 * @param hostname 割り当てるホスト名
  basePort: number,
  hostname: string
    if (await isAssignablePort(altPort, hostname)) {
      return altPort;
    }
  // 指定のポート + 100番まで見つからなかった場合ランダムなポートを使用する
  const altPort = await findOrCheckPort(0, hostname);
  if (altPort == undefined) {
    portWarn(basePort, "No alternative port found!");
  } else {
    portLog(altPort, "Assignable");
  }
  return altPort;
}

/**
 * ポートが割り当て可能か確認します
 * @param port 確認するポート番号
 * @param hostname 確認するホスト名
 */
export async function isAssignablePort(port: number, hostname: string) {
  return (await findOrCheckPort(port, hostname)) != undefined;