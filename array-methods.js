const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// ARRAY MAP METHOD
const books = getBooks();
//Map will loop over an array and return a new array with some operation performed, it is an clllback function
const x = [1, 2, 3, 4, 5].map((el) => el * 2); //
console.log(x);

const title = books.map((tit) => tit.title);
//console.log(title);

function totalreviewcount(b) {
  const goodread = books.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = books.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

const esseentialdata = books.map((x) => ({
  // returning multiple values
  Title: x.title,
  Author: x.author,
  review: totalreviewcount(x),
}));
//esseentialdata;

//*********************************************************************************************************8 */

//ARRAY FILTER METHOD
const longbooks = books.filter((books) => books.pages > 500); //call back function which uses books array as argument
//longbooks;
//filters can also be chained
const filterbook = books
  .filter((x) => x.pages > 500)
  .filter((x) => (x.hasMovieAdaptation = true))
  .map((x) => x.title);
filterbook;

//***************************************************************************************************************/

//ARRAY REDUCE METHOD
//It is basically used to reduce the entire array to one value, it is callback function and takes 2 arguments accumulator and array
const totalPages = books.reduce((sum, x) => sum + x.pages, 0); // here sum is accumulator value, x is book array, and 0 is the initial value of accumulator
totalPages;

//**************************************************************************************************************/

//ARRAY SORT MENTHOD
const arr = [3, 7, 1, 2, 9, 66];
const shorted = arr.sort((a, b) => a - b); //here a nad b are first and second element, a-b is used to sort in accending order and b-a for deceding
//logic if a-b is negative then a is smaller number
shorted;
arr;
//now arr.short will not create a new array it will change orignal array hence it is recommended to use slice method to creae new array
const decedingsort = arr.slice().sort((a, b) => b - a);
decedingsort;
arr;
//shortig books object based on pages decending
const sortedbooks = books.slice().sort((a, b) => a.pages - b.pages);
sortedbooks;

//************************************************************************************************************ */
//WORKING WITH IMMUTABLE ARRAY
//adding, delting, and updating elemnts in array without changing orignal one
const newbook = {
  // creating new sample obejct to be added in our books object
  id: 6,
  title: "Harry potter and chanmber of secrets",
  Author: "J.K Rowling",
};
//adding element
const updatedbook = [...books, newbook]; //we are using normal spred operator to add
updatedbook;

//Deleting element
const delbook = updatedbook.filter((x) => x.id !== 6); //using filter method to filter the book with id =6
delbook;

//Updating element
const updatedbook1 = delbook.map(
  (
    x // this method is updating page number of book id 1
  ) => (x.id == 1 ? { ...x, pages: 1111 } : x) //here map is comparing delbook array book id, if it is 1 then using spread operator we update
  //pagecount else it will keep the orignal value
);
updatedbook1;

//********************************************************************************************* */
