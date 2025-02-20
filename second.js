
function index(arr,N,M){
    for(let i=0;i<N;i++){
        let ans=""
        for(let j=0;j<M;j++){
            ans+=(i+j)+" "
        }
        console.log(ans)
    }
}
index([[1,2],[3,4],[5,6]],3,2)
