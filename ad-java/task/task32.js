function findBookByTitle(category, subject){
    const findBook = category.find((name) => {
        return name.title === subject
    })
    console.log(findBook);
}

const books = [
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
  ];

const name = findBookByTitle(books, '1984');