export const getBooks = async () => {
  const res = await fetch('https://book-budy-server-1.onrender.com/books');
  const data = await res.json();
  return data;
};

export const getBookDetails = async id => {
  const res = await fetch(
    `https://book-budy-server-1.onrender.com/books/${id}`,
  );
  const data = await res.json();
  return data;
};
 
export const getCategory = async () => {
  const res = await fetch('https://book-budy-server-1.onrender.com/books');
  const data = await res.json();
  const category = await data.map(book => book.category)
return [...new Set (category)] 

};
