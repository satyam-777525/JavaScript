const promise=new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("data fetch successfully");
    }else{
        reject("something wrong");
    }
})
promise.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve({id:1,name:"satyam"});
            }else{
                reject("something wrong");
            }
        },2000);
    })
}
fetchdata().then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})


function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve("Positive number");
        } else {
            reject("Not a positive number");
        }
    });
}

checkNumber(10)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));




// promise channing

Promise.resolve(10)
    .then((num) => {
        return num * 2;
    })
    .then((num) => {
        return num + 5;
    })
    .then((result) => {
        console.log(result);
    });

// if we want to execute multiple promise in parallel then we use == Promise.all()

// | Method                 | Behavior                         |
// | ---------------------- | -------------------------------- |
// | `Promise.all()`        | One reject → overall reject      |
// | `Promise.allSettled()` | Sabka result wait karega         |
// | `Promise.race()`       | Jo pehle settle ho, uska result  |
// | `Promise.any()`        | Jo pehla fulfill ho, uska result |


function datalao(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve({id:1,name:"satyam"});
            }else{
                reject("something went wrong");
            }
        },2000);
    })
}
async function getdata(){
    try{
        const data=await datalao();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
getdata();


async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUsers();