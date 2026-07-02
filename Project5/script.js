 //Object Constructor
    function Book(title, author,pages,status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id=crypto.randomUUID();
}
//Array To Hold Books
const myLibrary = [];
//Add books to Library
function addBookToLibrary(name, author, pages, status){
    const book = new Book(name, author, pages, status);
    myLibrary.push(book);
    //Handles Display To the User
    const tableBody=document.getElementById("bookTableBody");
    const row=document.createElement("tr");
    row.innerHTML=`<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.status}</td>`;
    tableBody.appendChild(row);
}

//DOM Manipulation
const form=document.querySelector("#bookForm");
form.addEventListener("submit",function(e){
    e.preventDefault();
    
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;


    addBookToLibrary(title, author, pages, status);
    form.reset();
 
})

