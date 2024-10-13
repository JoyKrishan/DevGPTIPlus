export const getWsUrl = () => {
  if (typeof window !== 'undefined') {
    const { protocol, host } = window.location
    const [hostname] = host.split(':')

    if (protocol === 'https:') {
      return `https://2024-s-group-3-barbell-nextjs.vercel.app/3001`
    }

    return `ws://${hostname}:3001`
  }

  return ''
  // return null // When running in SSR, we aren't using subscriptions
}

  // FIXED: wsLink url
    url: getWsUrl(),