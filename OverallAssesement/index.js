var displayData = document.getElementById("display-data");
var buttongt = document.getElementById("button-gt");
var buttonlt = document.getElementById("button-lt");
var buttonnone = document.getElementById("button-none");
var searchForm = document.getElementById("search_form");
var searchField = document.getElementById("search_field");
const pageNumbersContainer = document.getElementById("page-numbers");
    
  
  
const searchEmoji = e=>{
    e.preventDefault();
    const value = document.getElementById("serach_field").value;
    console.log(value);
    displaySearchResults(value);
    return false;
}
const autoSearch = (e)=>{
    const value = e.target.value;
    console.log(value);
    displaySearchResults(value);
}
let displaySearchResults = async (searchQuery = "") => {
    try{
        const resp = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=60");
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fbdd51d7c4msh6bf87e9d4277ca3p18c6a1jsna279dd809abe',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };
     const respData = await resp.json();
    console.log(respData)
    const filtered = respData.filter(e=>{
        console.log(e);
        var name = e.name.toLowerCase()
        if(name.indexOf(searchQuery.toLowerCase()) != -1){
            return true;
        }
    });
    const parent = document.getElementById("display-data");
    parent.innerHTML = ""; 
    filtered.forEach(e=>{
        var contentData = document.createElement("div");
        var image = document.createElement("img");
        var name = document.createElement("b");
        var date = document.createElement("p");
        displayData.style.display = "grid";
        displayData.style.gridTemplateColumns = "repeat(4,1fr)"
        contentData.style.border = "1px solid black";
        contentData.style.padding = "10px";
        contentData.style.margin = "10px";
        contentData.style.width = "200px";
        image.style.width = "150px";
        image.style.height = "190px";
        image.src = e.image_url;
        name.innerText = e.name;
        date.innerText = e.first_brewed;
        contentData.appendChild(image);
        contentData.appendChild(name);
        contentData.appendChild(date);
        parent.appendChild(contentData)
    })
    
        }
        catch (error){
            console.log(error);
        } 
    
}
// window.onload = async function(){
//     try{
//     const response = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=60");
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'fbdd51d7c4msh6bf87e9d4277ca3p18c6a1jsna279dd809abe',
// 		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
// 	}
// };
//  const data = await response.json();
// console.log(data)

// data.map((result)=>{
//     var contentData = document.createElement("div");
//     var image = document.createElement("img");
//     var name = document.createElement("b");
//     var date = document.createElement("p");
//     displayData.style.display = "grid";
//     displayData.style.gridTemplateColumns = "repeat(4,1fr)"
//     displayData.style.gridTemplateRows = "repeat(3,1fr)"
//     contentData.style.border = "1px solid black";
//     contentData.style.padding = "10px";
//     contentData.style.margin = "10px";
//     contentData.style.width = "200px";
//     image.style.width = "150px";
//     image.style.height = "190px";
//     image.src = result.image_url;
//     name.innerText = result.name;
//     date.innerText = result.first_brewed;
//     contentData.appendChild(image);
//     contentData.appendChild(name);
//     contentData.appendChild(date);
//     displayData.appendChild(contentData)
// });
//     }
//     catch (error){
//         console.log(error);
//     }
    
// }

const itemsPerPage = 10;

const apiUrl = 'https://api.punkapi.com/v2/beers';
const prevButton = document.getElementById("prev-page");
const nextButton = document.getElementById("next-page");
let currentPage = 1;
let totalItems = 0;

function fetchData(page) {
  // Make an API request to fetch data for the specified page
  // Replace 'your-api-url' with the actual API endpoint
  fetch(`${apiUrl}?page=${page}&limit=${itemsPerPage}`)
    .then((response) => response.json())
    .then((data) => {
        console.log("===================",data);
      totalItems = data.length;
      displayList(data);
      updatePagination();
    })
    .catch((error) => console.error(error));
}

function displayList(data) {
  // Clear the existing data
  displayData.innerHTML = "";

  // Display the data on the page
  data.forEach((result) => {
    var contentData = document.createElement("div");
    var image = document.createElement("img");
    var name = document.createElement("b");
    var date = document.createElement("p");
    displayData.style.display = "grid";
    displayData.style.gridTemplateColumns = "repeat(4,1fr)"
    displayData.style.gridTemplateRows = "repeat(3,1fr)"
    contentData.style.border = "1px solid black";
    contentData.style.padding = "10px";
    contentData.style.margin = "10px";
    contentData.style.width = "200px";
    image.style.width = "150px";
    image.style.height = "190px";
    image.src = result.image_url;
    name.innerText = result.name;
    date.innerText = result.first_brewed;
    contentData.appendChild(image);
    contentData.appendChild(name);
    contentData.appendChild(date);
    displayData.appendChild(contentData)
  });

  updatePagination();
}

function updatePagination() {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Enable or disable pagination buttons based on the current page
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;

  

  // Add event listeners to pagination buttons
  prevButton.addEventListener("click", () => goToPage(currentPage - 1));
  nextButton.addEventListener("click", () => goToPage(currentPage + 1));
  

pageNumbersContainer.innerHTML = "";

  // Create and add page number buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageNumberButton = document.createElement("nav");
    const pageNumber = document.createElement("ul");
    pageNumber.classList.add("pagination");
    const pageItem = document.createElement("li");
    pageItem.classList.add("page-item");
    const pageLink = document.createElement("a");
     pageLink.classList.add("page-link");
    pageLink.textContent = i;
    pageLink.addEventListener("click", () => goToPage(i));
    pageItem.appendChild(pageLink);
    pageNumber.appendChild(pageItem)
    pageNumberButton.appendChild(pageNumber);
    pageNumbersContainer.appendChild(pageNumberButton)
  }

}
function goToPage(page) {
  if (page < 1 || page > Math.ceil(totalItems / itemsPerPage)) {
    return;
  }
  console.log("=============",page)

  currentPage = page;
  fetchData(currentPage);
}

// Initial data fetch and display
fetchData(currentPage);





document.getElementById("search_field").addEventListener("keyup", autoSearch)
