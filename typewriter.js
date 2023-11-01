const sentence = "hello there from lighthouse labs";

for (let char = 0; char < sentence.length; char++) {
    setTimeout(() => {
        console.log(sentence[char]);
    }, char * 1000);
  };