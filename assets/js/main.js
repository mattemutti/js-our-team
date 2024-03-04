//Array di oggetti fornito

const team = [
	{
	  name: 'Wayne Barnett',
	  role: 'Founder & CEO',
	  image: 'wayne-barnett-founder-ceo.jpg',
	},
	{
	  name: 'Angela Caroll',
	  role: 'Chief Editor',
	  image: 'angela-caroll-chief-editor.jpg',
	},
	{
	  name: 'Walter Gordon',
	  role: 'Office Manager',
	  image: 'walter-gordon-office-manager.jpg',
	},
	{
	  name: 'Angela Lopez',
	  role: 'Social Media Manager',
	  image: 'angela-lopez-social-media-manager.jpg',
	},
	{
	  name: 'Scott Estrada',
	  role: 'Developer',
	  image: 'scott-estrada-developer.jpg',
	},
	{
	  name: 'Barbara Ramos',
	  role: 'Graphic Designer',
	  image: 'barbara-ramos-graphic-designer.jpg',
	},
  ];

  // Seleziono l'elemento row della dom
  // - creare la variabile che seleziona la row dove aggiungeremo le card dei membri del team
  const rowElement = document.querySelector('.row');


// 1 - stampare in console i dato dell'oggetto contenuti nell'array
//- creare un ciclo for per ciclare all'interno dell'array 
// 2 stampare le stesse info su dom sottoforma di stringhe
// all'interno, richiamare la posizione che cicla e mandare a video il dato dell'oggetto in quella posizione dell'array.

for (let i = 0; i < team.length; i++) {
	const memberTeam = team[i];
	// console.log(memberTeam);
	

	console.log(team[i].name, team[i].role, team[i].image);

	// - creare un markUp che inserisce nel codice della dom la col e la card
const markUp = `<div class="col-4"><div class= "card text-center"><img src="" alt=""> <h3>${team[i].name}</h3> <div>${team[i].role}</div></div></div>`;

// ineriamo in html la variabile markUp
rowElement.insertAdjacentHTML('beforeend', markUp);

// selezioniamo l'immagine in html
let imgElement = document.querySelector('img');
// aggiungo il link all'immagine html
imgElement.src=`./assets/img/${team[i].image}`;
// console.log(team[i].image);



}









	


// - aggiungiamo con addElement le varie card all'interno di "row" a l''internbo ci stampiamo con il template litteral i dati dell'array di oggetti.

