function multi(arr,N,M)
{
    for(let i=0;i<N;i++){
        let bag=""
        for(let j=0;j<M;j++){
            bag+=arr[i][j]+" "
        }
        console.log(bag)
    }
}
multi([[1,2],[3,4],[5,6]],3,2)