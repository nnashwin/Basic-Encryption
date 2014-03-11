
//I am comparing the keyArray with the alpha in order to get the indexes, adding it to the index of the message value and modulo 26
//I have the index of the values in the msgArray.  I need to compare the indexes of the key array and add to the message array
//How can I find the index of the keyArray without another for loop?
//I don't want to use two for loops, but I need to find a way to 
//Loop through and encrypt each letter individually in the me


function encrypt (key, message) {
    var msgArray = message.split("");
    var keyArray = key.split("");
	var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];//instantiating letters as indexes
	//coded message = key idx + msg idx %26 = encrypted message
	//tell function to get indx of each part of the key
	//
	var encodedMessage = [];
    for(var j=0; j<msgArray.length; j++) {
       var msgIndex = alpha.indexOf(msgArray[j]);
       var keyIndex = alpha.indexOf(keyArray[j%keyArray.length]);  
       encodedMessage.push(alpha[(keyIndex+msgIndex)%26]);
    }
    var encodedString = encodedMessage.join("");
    console.log(encodedString);
}
cipher("kingtak", "octokitten");

function decrypt (key, message) {
	var msgArray = message.split("");
	var keyArray = key.split("");
	var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	var decodedMessage = [];
	for (var k = 0; k<msgArray.length; k++) {
		var msgIndex = alpha.indexOf(msgArray[k]);
		var keyIndex = alpha.indexOf(keyArray[j%keyArray.length]);
		var decodedIndex = msgIndex - keyIndex;
		if(decodedIndex < 0) {
			decodedIndex = decodedIndex + 26;
		decodedMessage.push(alpha[decodedIndex];
		}
	}
}