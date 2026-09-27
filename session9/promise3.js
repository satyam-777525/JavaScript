function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=false;
            if(success){
                resolve({id:1,name:"satyam"});
            }else{
                reject("something went Wrong");
            }
        },2000);
    })
}

getdata().then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

// promise change - use .then inside.then

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




    
import { useState } from "react";

function App() {
    const [open, setOpen] = useState(false);
    const [subject, setSubject] = useState("Select Subject");

    const subjects = ["Java", "React", "JavaScript", "HTML", "CSS"];

    return (
        <div>

            <button onClick={() => setOpen(!open)}>
                {subject}
            </button>

            {open && (
                <div>
                    {subjects.map((item) => (
                        <p
                            key={item}
                            onClick={() => {
                                setSubject(item);
                                setOpen(false);
                            }}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            )}

        </div>
    );
}

export default App;