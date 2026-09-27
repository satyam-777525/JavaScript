function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve({id:1,name:"satyam"})
            }else{
                reject("something went Wrong");
            }
        },2000)
    })
}

async function fetchdata(){
    try{
        const data=await getData();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
fetchdata();