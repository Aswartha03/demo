function pattern(arr){
    n=arr.length 
    bag=""
    bag1=""
    bag2=""
    bag3=""
    bag4=""
    ans=""
    for(let i=n-1;i>=0;i--)
    {
        for(let j=0;j<n;j++)
        {
            if(j==0){
                bag+=arr[i][j]+" "
            }
            if((i==0 && j==n-2)||(i==0 && j==n-1)){
                bag1+=arr[i][j]+" "
            }
            if(i==1 && j==n-1){
                bag2+=arr[i][j]+" "
            }
            if(i==n-1 && j==n-1){
                bag3+=arr[i][j]+" "
            }
            if(i==n-1 && j==n-2){
                bag4+=arr[i][j]+" "
            }
        }
    }
    ans+=bag+bag1+bag2+bag3+bag4 
    console.log(ans)

}
let a=[[1,2,3],[4,5,6],[7,8,9]]
pattern(a)