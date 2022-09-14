class User {
  constructor(name, surname, books, pets) {
    this.name = name;
    this.surname = surname;
    this.books = books;
    this.pets = pets;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  countPets() {
    return this.pets.length;
  }

  addBook(title, author) {
    this.books.push({
      title: title,
      author: author,
    });
  }

  getBookNames() {
    return this.books.map((book) => book.title);
  }
}

const user = new User('Guillermo', 'Dabenigno', [{ title: 'Martin Fierro', author: 'Jose Hernandez' }, { title: 'La inteligencia Emocional', author: 'Daniel Coleman' }], ['Oreo', 'Angie', 'Milli' ]);