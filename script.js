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
//**************************************************************************************************************** */

//DESTRUCTURING OF OBJECTS AND ARRAYS//
// My code begins above code is template for a array of books data

const books = getBooks(); // whole array vaule in books var
const book = getBook(1); // calling the other function to get details by id
//book; this is print the book with id 1
//const title=book.title;
//const auth=book.author;
//title; gives title of book with id 1
const { author, title, genres, pages, hasMovieAdaptation, publicationDate } =
  book; // object deconstuctions -> should have same name as object properties
//author;

const primarygen = genres[0];
const secondary = genres[1];
//primarygen;getting array elements out of objects normally
//const [pgen, secgen] = genres; // using deconstruction for arrays, variable will take value as per array default index
//pgen;
//or alternatively you can get console logs output using
//console.log(pgen, secgen);

//******************************************************************************************//

//REST AND SREAD OPERATOR//
const [pgen, secgen, ...othergen] = genres; // this ... is rest operator it will take the value of remaining genre in one array
//it can only be used at the end of an array decons
//othergen;

// Now suppose you want all the values of genre array along with other new values here we will use spread operator ... ame as rest
const newgenere = [...genres, "newvalue1", "newvalue2"]; //gets individual value of genre array and adds new value, it can be used anywhere in braces
//newgenere;
//using it on objects
//now suppose you want to add one property of moviedate in the book object which contains getbook(1) value
const newbook = { ...book, moviedate: "22-11-1999" };
//newbook
//if you want to update existing properties
const updatebook = { ...book, pages: "2321" };
//updatebook

//********************************************************************************************* */

//TEMPLATE LITERALS//
const summary = `${title} is a book ${2 + 4}`; //basically it can combine strings and expression togerther
const summary1 = `${title} is a book with ${pages} pages`; //usefull example : op-> The Lord of the Rings is a book with 1216 pages

//*********************************************************************************************** */

//TERNARIES OPERATORS INSTEAD OF IF ELSE//
const pagerange =
  pages > 1000 ? "more than thausand page" : "less than thousand"; //condition?"if satisfied output":"if not satisfied op"
const summary2 = `the book has ${pagerange} pages and the book ${
  hasMovieAdaptation ? "has movie adaptation" : "does not have"
}`;
// using ternary operator along with template literals

//************************************************************************************************ */

//ARROW FUNCIONS//
// normally we write function as below
function getyear(x) {
  return x.split("-")[0]; // basically we are splitting the publication date 1991_05_21 into array of 3 differnt values
}
//console.log(getyear(publicationDate));

//this can be replaced easily by arrow function
const getyr = (x) => x.split("-")[0]; //everything shoukd be in same line else we need to use return keyword
//console.log(getyr(publicationDate));

//************************************************************************************************* */

//SHORT CIRCUIT AND LOGICAL OPERATORS &&,||,??//
//falsy values are: 0,'',null,undefined, false rest all values are true
console.log("abhay" && "name "); // gives name as output as first condition is met and then goes to second statement hence no shortcircuit
console.log(false && "name"); // gives ouput as false as the first condition is not met
//exactly same for || operator just that or oerator will give first part as op if condition is met and second part when it is not met
//where as and operator will give second part as op when condition is ment and first part when it is not met
const sapanishtranslation = book.translations.spanish || "Not Translated";
sapanishtranslation; // so if book book.translate.spanish returns a value short ciruit will happen and give out first value as op

const spanishtrans1 = book.translations.spanish && "It is translated"; // here if first condition is meet not short ciruit and return second value
spanishtrans1;
// falsy values will not meet condition for $$ , ||
//?? knowledge quellesing operator is same as || operator but will do short circuit for null and 0 falsey values ex below

const hasreview =
  book.reviews.librarything.reviewsCount || "does not have review count";
const hasreview1 =
  book.reviews.librarything.reviewsCount && "does not have review count";
//hasreview;  op is does not have review coun -> || operator does not short circuit for falsey value 0 as book id 2 reviewcount is 0
//hasreview1; op is 0 -> && does short circuit for falsy values 0 and gives first part as op

//************************************************************************************************ */
//OPTIONAL CHAINING//
//basically tells js to stope execution of chain of obeject properties if next value is null
//function totalreviewcount(b){ // function gives total reviw count but for book with id 3 we do not have library anything property and wil give error in execution
//const goodread=book.reviews.goodreads.reviewsCount;
//const librarything=book.reviews.librarything.reviewsCount;
//return goodread+librarything;
//}
//console.log(totalreviewcount(book))

// inorder to overcome this we use optional chaining ? as below
function totalreviewcount(b) {
  const goodread = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0; // here th js will stop this object chain execution if libraryanything
  //return undefined or null additionally we used knowledgequeslsing operator to retun value 0 if first condition gives undefined or zero value
  librarything;
  return goodread + librarything;
}
console.log(totalreviewcount(book));
// it is better adviced to use optional chaining at all leveles to avoide error ex book.reviews?.goodreads?.reviewsCount
//************************************************************************************************************** */

//ARRAY MAP METHOD//
