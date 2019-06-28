function reverseString(str) {
  if( !str || typeof str !== "string") {
  	return "please type a valid string";
  }	
  return str.split('').reverse().join('');
}

