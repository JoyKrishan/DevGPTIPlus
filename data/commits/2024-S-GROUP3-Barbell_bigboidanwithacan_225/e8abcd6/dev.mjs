  // prettier
  semi: false,
  printWidth: 100,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,

  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  tailwindConfig: fileURLToPath(new URL('../../tooling/tailwind/web.ts', import.meta.url)),
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss