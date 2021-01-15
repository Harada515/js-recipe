const genkiFunction =function(number){
for(let n=1;n<=number;n++){
    if(n%3===0){
        console.log(n + "!!!!!!!")
    }else if(n%10===3){
        console.log(n + "!!!!!!!")
    }else if((n/10)%10==3){
        console.log(n + "!!!!!!!")
    }else if((n/100)%10==3){
        console.log(n + "!!!!!!!")
    }else if((n/1000)%10==3){
        console.log(n + "!!!!!!!")
    }else {
        console.log(n)
    }
 }
}