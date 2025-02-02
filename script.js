/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const books = [
	{
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		year: 1925,
		genre: "Fiction",
		rating: 4.2,
		description:
			"A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.",
		image: "./books-images/the-great-gatsby.jpg",
	},
	{
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		year: 1960,
		genre: "Fiction",
		rating: 4.5,
		description:
			"Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.",
		image: "./books-images/to-kill-a-mockingbird.jpg",
	},
	{
		title: "1984",
		author: "George Orwell",
		year: 1949,
		genre: "Science Fiction",
		rating: 4.4,
		description:
			"A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.",
		image: "./books-images/1984.jpg",
	},
	{
		title: "Pride and Prejudice",
		author: "Jane Austen",
		year: 1813,
		genre: "Fiction",
		rating: 4.25,
		description:
			"A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.",
		image: "./books-images/pride-and-prejudice.jpg",
	},
	{
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		year: 1951,
		genre: "Fiction",
		rating: 4,
		description:
			"Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.",
		image: "./books-images/unknown.jpg",
	},
	{
		title: "The Hobbit",
		author: "J.R.R. Tolkien",
		year: 1937,
		genre: "Fantasy",
		rating: 4.6,
		description:
			"A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.",
		image: "./books-images/the-hobbit.jpg",
	},
	{
		title: "Harry Potter and the Sorcerer's Stone",
		author: "J.K. Rowling",
		year: 1997,
		genre: "Fantasy",
		rating: 4.7,
		description:
			"The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.",
		image: "./books-images/harry-potter-and-the-sorcerer.jpg",
	},
	{
		title: "Moby-Dick",
		author: "Herman Melville",
		year: 1851,
		genre: "Adventure",
		rating: 4.1,
		description:
			"An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.",
		image: "./books-images/moby-dick.jpg",
	},
	{
		title: "The Lord of the Rings: The Fellowship of the Ring",
		author: "J.R.R. Tolkien",
		year: 1954,
		genre: "Fantasy",
		rating: 4.55,
		description:
			"The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.",
		image: "./books-images/the-lord-of-the-rings.jpg",
	},
	{
		title: "The Shining",
		author: "Stephen King",
		year: 1977,
		genre: "Horror",
		rating: 4.3,
		description:
			"A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
		image: "./books-images/unknown.jpg",
	},
	{
		title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
		author: "C.S. Lewis",
		year: 1950,
		genre: "Fantasy",
		rating: 4.15,
		description:
			"The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.",
		image: "./books-images/the-chronicles-of-narnia.jpg",
	},
	{
		title: "The Da Vinci Code",
		author: "Dan Brown",
		year: 2003,
		genre: "Mystery",
		rating: 3.8,
		description:
			"A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.",
		image: "./books-images/unknown.jpg",
	},
	{
		title: "The Alchemist",
		author: "Paulo Coelho",
		year: 1988,
		genre: "Fiction",
		rating: 4.25,
		description:
			"A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.",
		image: "./books-images/unknown.jpg",
	},
	{
		title: "The Hunger Games",
		author: "Suzanne Collins",
		year: 2008,
		genre: "Science Fiction",
		rating: 4.3,
		description:
			"In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
		image: "./books-images/unknown.jpg",
	},
	{
		title: "The Girl with the Dragon Tattoo",
		author: "Stieg Larsson",
		year: 2005,
		genre: "Mystery",
		rating: 4.1,
		description:
			"A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.",
		image: "./books-images/unknown.jpg",
	},
	{
		title: "The Road",
		author: "Cormac McCarthy",
		year: 2006,
		genre: "Dystopian",
		rating: 4,
		description:
			"Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
		image: "./books-images/unknown.jpg",
	},
	{
		title: "The Hitchhiker's Guide to the Galaxy",
		author: "Douglas Adams",
		year: 1979,
		genre: "Science Fiction",
		rating: 4.35,
		description:
			"A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
		image: "./books-images/unknown.jpg",
	},
	{
		title: "The Giver",
		author: "Lois Lowry",
		year: 1993,
		genre: "Dystopian",
		rating: 4.12,
		description:
			"A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.",
		image: "./books-images/unknown.jpg",
	},
];

// Display list of books
const loadBooks = (books) => {
	const bookList = document.getElementById("bookList");
	const fragList = document.createDocumentFragment();
	books.forEach((book) => {
		const li = document.createElement("li");
		li.innerHTML += `
			<div>
				<h2>
					Title: ${book.title}
				</h2>
				<img src=${book.image} />
				<p>Author: ${book.author}</p>
				<p>Description: ${book.description}</p>
				<p>Year of release: ${book.year}</p>
				<p>Rating: ${book.rating}</p>
				<p>Genre: ${book.genre}</p>
			</div>
		`;
		fragList.appendChild(li);
	});
	bookList.appendChild(fragList);
};

// Filter by gengre
const genres = document.getElementById("genres");
function filterByGenre() {
	document.getElementById("bookList").innerHTML = "";
	const value = genres.value;
	const text = genres.options[genres.selectedIndex].text;

	const filteredBooks = books.filter(
		(book) => book.genre.toLowerCase() === value
	);

	filteredBooks.length > 0 ? loadBooks(filteredBooks) : loadBooks(books);
}
genres.onchange = filterByGenre;
filterByGenre();

// Sort books by year oldest
const sortByYearOldest = () => {
	document.getElementById("bookList").innerHTML = "";
	const sortedBooks = books.sort((a, b) => {
		return a.year - b.year;
	});
	loadBooks(sortedBooks);
};
// Sort books by year Newest
const sortByYearNewest = () => {
	document.getElementById("bookList").innerHTML = "";
	const sortedBooks = books.sort((a, b) => {
		return b.year - a.year;
	});
	loadBooks(sortedBooks);
};

// Sort books alphabetically
const sortAlphabetically = () => {
	document.getElementById("bookList").innerHTML = "";
	const booksAlphabetically = books.sort((a, b) =>
		a.title.localeCompare(b.title)
	);
	loadBooks(booksAlphabetically);
};

// Filer on the 21st century
const filterOnCentury = () => {
	document.getElementById("bookList").innerHTML = "";
	const filteredBooks = books.filter((book) => book.year > 2000);
	filteredBooks.length > 0
		? loadBooks(filteredBooks)
		: (document.getElementById("bookList").innerHTML =
				"No books from the 21st century");
};

// Search input
const searchBooks = (books) => {
	document.getElementById("bookList").innerHTML = "";
	const searchInput = document.getElementById("search").value.toLowerCase();
	const searchResult = books.filter((book) =>
		book.title.toLowerCase().includes(searchInput)
	);
	loadBooks(searchResult);
};
