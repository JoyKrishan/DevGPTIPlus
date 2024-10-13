declare function call<Path extends keyof Config>(
  path: Path, 
  ...args: Parameters<Config[Path]>
): ReturnType<Config[Path]>;