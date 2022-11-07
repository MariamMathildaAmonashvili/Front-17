//const sectionButton = document.querySelector(".button") ;

//sectionButton.addEventListener ("click" , (e) => {
   // e.target.remove () ; 
//}) 

//function clickOn () { 
  //  sectionButton.remove() ;

  // ეს ვერ გავიგე ალინა, და დავაკომენტარე, შეხედე მაინც რას ვაკეთებ არასწორად, არ კითხულობს


const characters = [
    {
        first_name: "Harry",
        last_name : "Potter",
        house: "Gryffindor"  ,
        image: "https://hp-api.herokuapp.com/images/harry.jpg",
        actor: "Daniel Redcliffe",
    
    },

    {
        first_name: "Hermione",
        last_name: "Granger",
        house: "Gryffindor" , 
        image : "https://hp-api.herokuapp.com/images/hermione.jpeg",
        actor: "Emma Watson " ,

    } , 
    {
        first_name : "Ron" , 
        last_name : "Weasley" , 
        house : "Gryffindor" , 
        image: "https://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "https://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];


const theDiv = document.getElementById("characters-list") ;

function renderCharacters (arr) {
    const renderedCards = characters.map((char) => {
        return `
        <div class="char-card">
        <div class="charname"
        <h2>
        ${char.first_name}  ${char.last_name}
        </h2>
        <h3> House : ${char.house} </h3>
        <button class="delete-button"> Delete This </button>
        </div>

        <img class="character-img" src"${char.image} alt="${char.first_name}"
        </div>
        `;

    });
theDiv.innerHTML = renderedCards.join(""); 
}

renderCharacters () ;