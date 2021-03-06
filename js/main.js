const vm = new Vue({
    el: "#app",
    data:{
		lastTool : '',
		tool : '',
		fieldValues : [],
		win: false,
		winner: "",
		ticTocKey: 1,
		xScore: 0,
		oScore: 0,
		tools: {
			kitYellow: 'background-color: #a7991d',
			colorGreen: 'background-color: #22a71d',
			colorRed: 'background-color: #a71d1d',
			colorPurple: 'background-color: #6A0DAD',
			colorBlue: 'background-color: #1d1fa7',
			colorWhite: 'background-color: #f3eded',
			colorBlack: 'background-color: #000',
			colorPink: 'background-color: #FFC0CB',
		},
		suspects: [
			'Green', 
			'Mustard',
			'Orchid',
			'Peacock',
			'Plum',
			'Scarlett'
		],
		weapons: [
			'Świecznik',
			'Sztylet',
			'Metalowa rurka',
			'Reworwer',
			'Lina',
			'Klucz francuski'
		],
		rooms: [
			'Salon',
			'Sala Bilardowa',
			'Ogród zimowy',
			'Jadalnia',
			'Hol',
			'Kuchnia',
			'Biblioteka',
			'Weranda',
			'Gabinet'
		]
	},
	methods:{
		activeTool : function(e){
			let tool = e.target.attributes[0].nodeValue;
			this.tool = this.tools[tool];
			this.activeClass(e);
		},
		draw : function(e){

			if(e.target.attributes.style.nodeValue == this.tool){
				console.log(e.target.attributes.style.nodeValue);
				e.target.setAttribute('style', 'background: transparent');
			}
			else e.target.setAttribute('style', this.tool);
		},
		activeClass: function(e){
			let squares = document.querySelectorAll('.kit__square > div');
			for(let square of squares){
				square.classList.remove('active');
			}
			e.target.classList.add('active');
		}
	}
  });