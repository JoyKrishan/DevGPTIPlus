try {
  await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    email: session.user.email,
    name: session.user.name,
  });
} catch (error) {
  console.error('Error posting to Rails server:', error);
}