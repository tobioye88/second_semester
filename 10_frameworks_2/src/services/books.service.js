const getBooks = (page, limit, query) => {
  return {
    data: [
      {
        id: 1,
        title: "The Catcher in the Rye",
        pages: 234,
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        pages: 281,
      },
      {
        id: 3,
        title: "1984",
        pages: 328,
      },
      {
        id: 4,
        title: "The Great Gatsby",
        pages: 180,
      },
    ],
    meta: { page, limit, query },
  };
};

const getSomething = (page, limit) => {
  return {
    data: [{ name: "Something", pages: 760 }],
    meta: { page, limit },
  };
};

const getBookById = (booksId) => {
  return { id: booksId, name: "Harry potter", pages: 760 };
};

const getBookByIdAndAuthorId = (booksId, authorId) => {
  return {
    id: booksId,
    name: "Harry potter",
    pages: 760,
    author: {
      id: authorId,
      name: "J.K. Rowling",
    },
  };
};

module.exports = {
  getBooks,
  getSomething,
  getBookById,
  getBookByIdAndAuthorId,
};
