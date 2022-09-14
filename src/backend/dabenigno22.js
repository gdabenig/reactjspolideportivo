type BooksProps = {
  title: string;
  author: string;
};

class User {
  name: string;
  surname: string;
  books: BooksProps[];
  pets: string[];
  
  constructor( name: string, surname: string, books: BooksProps[], pets: string[] ) {
    this.name = name;
    this.surname = surname;
    this.books = books;
    this.pets = pets;
  }

  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }

  addPet(pet: string): void {
    this.pets.push(pet);
  }

  countPets(): number {
    return this.pets.length;
  }

  addBook(book: BooksProps): void {
    this.books.push(book);
  }

  getBooks(): string[] {
    return this.books.map((book) => book.title);
  }
}

const firstUser = new User('Guillermo', 'Dabenigno', [{ title: 'Martin Fierro', author: 'Jose Hermandez' }, { title: 'La inteligencia Emocional', author: 'Daniel Coleman' }], ['Oreo', 'Angie', 'Angie' ]);


