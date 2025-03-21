class Libro {
    #inStock;
    #price;
    static BD = [];
    constructor(id, label, name, author, series_t, genre_s, price, pages_i) {
        this.id = id;
        this.label = label;
        this.name = name;
        this.author = author;
        this.series_t = series_t;
        this.genre_s = genre_s;
        this.#inStock = true;
        this.#price = price;
        this.pages_i = pages_i;
    }

    set inStock(inStock) {
        this.#inStock = inStock;
    }
    get inStock() {
        return this.#inStock;
    }
    get price() {
        return this.#price;
    }
    set inStock(inStock) {
        this.#inStock = inStock;
    }
    set price(price) {
        this.#price = price;
    }



    toString() {
        return `
        id: ${this.id}
        label: ${this.label}
        name: ${this.name}`
    }
    static addLibroDefault() {
        const libro1 = new Libro("978-0641723445", ["book", "hardcover"], "The Lightning Thief", "Rick Riordan", "Percy Jackson and the Olympians", "fantasy", 12, 384);

        const libro2 = new Libro("978-1423103349", ["book", "paperback"], "The Sea of Monsters", "Rick Riordan", "Percy Jackson and the Olympians", "fantasy", 6.49, 304);

        const libro3 = new Libro("978-1857995879", ["book", "paperback"], "Sophie's World : The Greek Philosophers", "Jostein Gaarder", "", "fantasy", 3.07, 64);

        const libro4 = new Libro("978-1933988177", ["book", "paperback"], "Lucene in Action", "Erik Hatcher", "Lucene in Action", "IT", 30, 475);


        Libro.BD.push(libro1, libro2, libro3, libro4)

    }

    addLibro() {
        Libro.BD.push(this);

    }
    static getLibroById(id) {
        return Libro.BD.find(libro => libro.id === id);
    }

}

export { Libro };
/* {
"id" : "978-0641723445",
"label" : ["book","hardcover"],
"name" : "The Lightning Thief",
"author" : "Rick Riordan",
"series_t" : "Percy Jackson and the Olympians",
"genre_s" : "fantasy",
"inStock" : true,
"price" : 12,
"pages_i" : 384
}
 */