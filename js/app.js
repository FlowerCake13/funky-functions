window.onload = function(){
	var funkyFunctions = {
		salsa: function() {
			var danceMoves = [3, 2, 1, 5, 6];
			var numSteps = 0;
			for(var i = 0; i < danceMoves.length; i++){
				numSteps = numSteps + danceMoves[i];
			}
			//console.log(numSteps + " Goooood! <3")
			return numSteps;
		},
		chickenDance: function(){
			var numClucks = 0;
			for(var i = 0; i < 5; i++){
				numClucks = numClucks + 5;
				//console.log(numClucks)
			}
			var chicken = {
				funky1: function(){
					numClucks = numClucks + 10;
					//console.log(numClucks)
					return numClucks;
				},
				funky2: function(){
					//console.log(this.funky1)
					return this.funky1()
				}
			}
			//console.log(chicken.funky2() + ' Goooood! <3')
			return chicken.funky2();
		},
		shuffle: function(){
			var type = ['melbourne', 'electronnic', 'hardstyle'];
			var myShuffle = {
				type: type[0],
				isPopular: true,
				numClasp: 300
			};
			//console.log(myShuffle.type)
			if (myShuffle.isPopular == true) {
				//console.log(myShuffle.numClasp)
				return myShuffle.numClasp;
			}
		}
	};
	console.log(funkyFunctions.salsa());
	console.log(funkyFunctions.chickenDance());
	console.log(funkyFunctions.shuffle());
}