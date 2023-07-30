export default async function getUserData({ token }) {
  return await fetch('/api/user/' + token, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
