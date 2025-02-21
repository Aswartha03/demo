function ZigZag(arr,N,M)
{
    var ans=""
    for (let i=0;i<N;i++)
    {
        if(i%2==0){
            for(let j=M-1;j>=0;j--){
                ans+=arr[i][j]+" "
            }
        }
        else 
        {
            for(let j=0;j<M;j++){
                ans+=arr[i][j]+" "
            }
        }
    }
    return ans
}
// test case 1
let a=[[1,2,3,4,5],[6,7,8,9,1],[3,2,5,4,6],[7,8,9,1,2]]
let N=a.length 
let M=a[0].length 
console.log(ZigZag(a,N,M))//output -> 5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2 

// test case 2
console.log(ZigZag([[1,2,3],[4,5,6],[7,8,9],[10,11,12]],4,3))// output-> 3 2 1 4 5 6 9 8 7 10 11 12 