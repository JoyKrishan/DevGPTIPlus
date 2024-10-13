import { useAuth } from '@clerk/clerk-react'
  const { getToken } = useAuth()
        'http://localhost:5000/api/posts/3xUM3gtEQMlaYJjNA0qY', {
        headers: { "Authorization": `Bearer ${await getToken()}` }
      });