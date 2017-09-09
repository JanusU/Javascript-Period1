interface IBook{
    title: string;
    auther: string;
    published: Date;
    pages: number;
}

function readIBook(iBook: IBook): void{
    console.log("Title: "+ iBook.title+", Auther: "+iBook.auther+", Published: "+iBook.published+", Pages: "+iBook.pages);
}

var book = {
    title: "Typescript for Dummies",
    auther: "Janus Udsen",
    published: new Date(2017,9,9),
    pages: 3
}

readIBook(book);