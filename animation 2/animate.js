const logo = document.querySelectorAll("#brush1 path");

console.log(logo);

for(let i=0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}