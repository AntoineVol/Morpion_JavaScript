console.log('Démarrage du Morpion !');
// Utilisation d'une IIFE (Immediately invoked function expression).
(function() {
	// L'objet console permet de sortir des logs et des informations
	// détaillée sur les objets du DOM.
	console.log('Démarrage du Morpion !');

	let Player = function(username, className) {
		this.username = username;
		this.className = className;
		this.index = null;
		this.getName = function() {
			return this.username;
		};
	};

	let Game = function() {
		this.turnCount = 0;
        this.listPlayers = [
                new Player(prompt('Pseudo Joueur 1 '),'circule'),
                new Player(prompt('Pseudo Joueur 1 '),'cross')
            ]
        this.data =[[],[],[]];
		this.playing = false;
		this.initialize = function() {
			// Récupérer chaque td de la table et associer
            // une fonction play() sur l'événement 'click'.
            let cells = document.getElementsByTagName('td');
            for(i=0;i<9;i++){
                cells[i].onclick=play();
            }


		};
	};
    function checkVictory(){

    }
    
    function play(event){
    
    }
    
    function stopGame(){
    
    }
	window.hyperpion = new Game();
})();


// var turnCount = 1;
// let table = document.getElementsByClassName('morpion')[0];
// table.addEventListener('click',function(event){
//     console.log(event.path[0]);
//     console.log(event);
//     if(event.target.className=='' && event.target.localName=='td'){
//         switch (turnCount%2){
//             case 0:
//             event.target.className+='J1'
//             let croix=document.createElement('h1');
//             croix.className='croix';
//             croix.innerHTML='X';
//             event.target.appendChild(croix);
//             console.log('Au joueur 1 de jouer', event); 
//             joueur=1;
//             break;
//             case 1:
//             event.target.className+='J2'
//             let rond=document.createElement('div');
//             rond.className='rond';
//             rond.innerHTML='O';
//             event.target.appendChild(rond);
//             console.log('Au joueur 2 de jouer', event); 
//             joueur=2;
//             break;


//         }



        
//     }
//     victoire();
   
// });














