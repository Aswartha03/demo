function pattern(n){
    for(let i=0;i<n;i++){
        let bag=""
        for(let j=0;j<n;j++){
            if(i==0 || j==0 || i==n-1){
                bag+="*"+" "
            }
            else{
                bag+=" "
            }
        }
        console.log(bag)
    }
}
pattern(5)