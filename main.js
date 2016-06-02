// rat cat butterfly marmot

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

for(var i=0; i<animals.length-1; i++) {
 console.log(animals[i]);
}

// rat butterfly ocelot

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

for(var i=0; i<animals.length; i+=2) {
 console.log(animals[i]);
}

// ocelot marmot butterfly cat rat

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

for(var i=animals.length - 1; i>=0; i--) {
 console.log(animals[i]);
}

// rat cat cat butterfly butterfly marmot marmot ocelot

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

for(var i=0; i<animals.length; i++) {
 for(var j=0; j<=0; j++){
  if(!(i==0 || i==animals.length - 1)){
    console.log(animals[i]) 
}
console.log(animals[i])}
}




