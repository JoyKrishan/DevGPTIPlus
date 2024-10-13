import axios from 'axios'
  callbacks: {
    async signIn({ user, account, profile }) {
      const provider = account.provider
      const uid = account.sub
      const name = user.name
      const email = user.email
      try {
        const response = await axios.post('http://host.docker.internal:8000/api/auth/callback/google', {
          provider,
          uid,
          name,
          email,
        })

        if (response.status === 200) {
          return true
        } else {
          return false
        }
      } catch (error) {
        console.log('エラー', error)
        return false
      }
    },

  },