export const getBooks = async () => {
  const res = await fetch(
    'https://book-budy-server-1.onrender.com/featured-books',
  );
  const data = await res.json()
  return data
}