// break and continue

const scores = [20,45,35,0,15,0,30,50,100,65,35];

for(let i = 0;i<scores.length;i++){
    if(scores[i]==0){
        console.log('shame');
        continue;
    }
    console.log(`scores de i ${i}: ${scores[i]}`);
    if(scores[i]==100){
        console.log("congratulations!!! You've reached top score");
        break;
    }
}