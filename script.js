console.log("Hello world");

// Create a list inside the body, to which we are going to add elements
let list = document.createElement("ul");
document.body.appendChild(list);

// This function reads a file in the json format and returns its content
async function loadDb() {    
    const response = await fetch('db.json');
    const db = await response.json();
    return db;
}

// This function gets database and then it iterates
// and creates list element with the values from the database
// and inserts it into the html
async function createApartmentList() {
    let db = await loadDb();
    let apartments = db.apartments;
    for (let i = 0; i < apartments.length; i++) {
        const apartment = apartments[i];
        console.log(apartment);
        let apItem = document.createElement("li");
        apItem.innerText = apartment.name;
        list.appendChild(apItem);      
    }
}
createApartmentList();
