let i;
for(i=1; i<=10; i++){
    console.log(i);
    if(i==7) break;
}
console.log('----------');

for(i=1; i<=10; i++){
    if(i==7) continue;
    console.log(i);
}

console.log('----------');
i=1;
while(true){
    console.log(i);
    if(i>=5) break;
    i++;
}