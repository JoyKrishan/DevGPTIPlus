import { signIn, useSession, getSession } from 'next-auth/react';

// ...

async function handleGoogleLogin() {
    const result = await signIn('google', { redirect: false });
    if (result?.ok) {
        // セッションを取得
        const session = await getSession();
        if (session) {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
                email: session.user.email,
                name: session.user.name,
                google_id: session.user.id
            });
        }
    }
}