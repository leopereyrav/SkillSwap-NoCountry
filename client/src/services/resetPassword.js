export default async function resetPassword(email) {
  return await fetch('/api/auth/restablecer', {
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
}
