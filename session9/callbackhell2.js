//callback hell is a nested callback forming a pyramid of structure.
function getdata(dataid,getNext){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getNext){
            getNext();
        }
    },2000);
}
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4);
        })
    })
})

//to solve this problem use promises.
