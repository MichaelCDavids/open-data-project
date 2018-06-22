// References to DOM elements
var ageSelector = document.querySelector(".age");
var genderSelector = document.querySelector(".gender");
var areaSelector = document.querySelector(".area");
var doingSelector = document.querySelector(".doing");
var searchButton = document.querySelector("#search-button");

//Template for search results
var templateSource = document.querySelector(".afterSearchTemplate").innerHTML;
var templateSearchedPeople = Handlebars.compile(templateSource);
var insertSearchDataElement = document.querySelector(".insertSearchDataElement");

//Template for area list
var templateSource = document.querySelector(".areaListTemplate").innerHTML;
var templateAreaList = Handlebars.compile(templateSource);
var insertAreaListElement = document.querySelector(".insertAreaListElement");

//Template for totals
var templateSource = document.querySelector(".totalsTemplate").innerHTML;
var templateTotal = Handlebars.compile(templateSource);
var insertTotalElement = document.querySelector(".insertTotalElement");

//Instance of Factory function
var factory = OpenDataFactory(people);

//on page load event
window.addEventListener('load',function(){
   areaSelector.innerHTML = templateAreaList({areas : factory.getAreaList()});
});

// Event Listeners
searchButton.addEventListener('click',function(){
  insertSearchDataElement.innerHTML = templateSearchedPeople({searchedPeople : factory.search(ageSelector.value,genderSelector.value,areaSelector.value,doingSelector.value)});
  insertTotalElement.innerHTML = templateTotal({total : factory.getTotal()});
});
