var books = [{
    title: 'Web Design with HTML, CSS, JavaScript and jQuery Set',
    releaseDate: '15 August 2014',
    year: 2014,
    imageUrl: 'images/01.jpg',
    author: 'Jon Duckett',
    rating: 4.5,
    price: 1800,
    currency: 'USD',
    available: true
}, {
    title: 'JavaScript: The Complete Reference',
    releaseDate: '1 July 2017',
    year: 2017,
    imageUrl: 'images/02.jpg',
    author: 'Thomas Powell and Fritz Schneider',
    rating: 5,
    price: 988,
    currency: 'USD',
    available: false
}, {
    title: 'Professional Javascript for Web Developers, 3ed (WROX)',
    releaseDate: '15 August 2012',
    year: 2012,
    imageUrl: 'images/03.jpg',
    author: 'Nicholas C. Zakas',
    rating: 4.5,
    price: 807,
    currency: 'USD',
    available: true
}, {
    title: 'Mastering HTML, CSS & Javascript Web Publishing',
    releaseDate: '15 July 2016',
    year: 2016,
    imageUrl: 'images/04.jpg',
    author: 'Laura Lemay and Rafe Colburn',
    rating: 4,
    price: 428,
    currency: 'USD',
    available: true
}, {
    title: 'JavaScript: The Good Parts',
    releaseDate: '5 May 2008',
    year: 2008,
    imageUrl: 'images/05.jpg',
    author: 'Crockford and Douglas',
    rating: 4,
    price: 375,
    currency: 'USD',
    available: false
}, {
    title: 'JavaScript: The Definitive Guide',
    releaseDate: '1 August 2011',
    year: 2011,
    imageUrl: 'images/06.jpg',
    author: 'Flanagan David',
    rating: 3.5,
    price: 1200,
    currency: 'USD',
    available: true
}, {
    title: 'Eloquent JavaScript 2e',
    releaseDate: '30 December 2014',
    year: 2014,
    imageUrl: 'images/07.jpg',
    author: 'Marijm Haverbeke',
    rating: 5,
    price: 1990,
    currency: 'USD',
    available: false
}, {
    title: 'HTML 5 Black Book',
    releaseDate: '15 December 2016',
    year: 2016,
    imageUrl: 'images/08.jpg',
    author: 'DT Editorial Services',
    rating: 4.5,
    price: 610,
    currency: 'USD',
    available: true
}, {
    title: 'Javascript: VIsual Quickstart Guide',
    releaseDate: '6 January 2012',
    year: 2012,
    imageUrl: 'images/09.jpg',
    author: 'Negrino',
    rating: 3.5,
    price: 596.97,
    currency: 'USD',
    available: true
}, {
    title: 'Head First JavaScript Programming',
    releaseDate: '3 May 2014',
    year: 2014,
    imageUrl: 'images/10.jpg',
    author: 'Freeman E.T',
    rating: 4.5,
    price: 1200,
    currency: 'USD',
    available: true
}, {
    title: 'JavaScript by Example',
    releaseDate: '30 August 2017',
    year: 2017,
    imageUrl: 'images/11.jpg',
    author: 'Dani Akash',
    rating: 4,
    price: 638,
    currency: 'USD',
    available: true
}];

function renderBooks(books){
    var booksElem =  document.createElement('div');
    books.forEach(function(book){
    booksElem.innerHTML += Book(book);
    });

    document.querySelector('.books').innerHTML = booksElem.innerHTML;
}

function renderBookWithMap(array) {
    document.querySelector('.books').innerHTML = array.map(Book).join;
}

function Book(book) {
    return `
<div class="books__item book">

    <img src="${book.imageUrl}" alt="" class="book__cover">

    <h2 class="book__title">
        ${book.title}
    </h2>

    <h3 class="book__subtitle">
        ${book.author} / ${book.releaseDate}
    </h3>

    <p class="book__description">
    Rating: 
    <span class="book__rating">
        ${book.rating}
    </span>
    </p>

    <p class="book__price price">Price: 
    <span class="price__amount">
        ${book.price}
    </span>
    <span class="price__currency">
        ${" " + book.currency}
    </span>
    </p>

    <div class="book__controls">
        <span class="book__btn add-to-cart-btn">
        Add to cart
        </span>
    </div>
</div>`;
}

renderBooks(books);
