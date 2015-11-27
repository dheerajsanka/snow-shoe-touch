var Base64 = require("./base64.js");


var snowShoeListener = {
      	init: function(stampScreenElmId, onStamp){
        	var stampScreenElm = document.getElementById(stampScreenElmId);
        	stampScreenElm.addEventListener('touchstart', function(event) {
          	if (event.touches.length >= 5) {
           		var data = [];
            	var touches = event.touches;
            	for (var i = 0; i <= Object.keys(event).length; i++) {
              	  if (touches[i]) {
                	  data.push([touches[i].pageX, touches[i].pageY]);
              		}
            	}
				// call the listener for the stamp with the base 64 encoded stamp data
            	onStamp(Base64.encode(JSON.stringify(data)));
          	}
        });
	}
};

module.exports = snowShoeListener;