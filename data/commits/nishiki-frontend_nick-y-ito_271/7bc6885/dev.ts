const CLIENT_BASE_URL: string = process.env.NEXT_PUBLIC_CLIENT_BASE_URL || '';
            domain: OAUTH_DOMAIN,
            scopes: ['openid'],
            redirectSignIn: [CLIENT_BASE_URL + '/login'],
            redirectSignOut: [CLIENT_BASE_URL, `https://${OAUTH_DOMAIN}`],