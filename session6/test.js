// // promise
// function fetchdata(){
//     return new Promise((resolve,reject)=>{
//         setInterval(()=>{
//             let success=false;
//             if(success){
//                 resolve({id:1,name:"satyam"});
//             }else{
//                 reject("Something Went Wrong");
//             }
//         },2000);
//     })
// }

// fetchdata().then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })



// import { useEffect, useState } from "react";

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     fetch("https://api.example.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data.data.users);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       {users.map((user) => (
//         <div key={user.id}>
//           {user.name}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UserList;



const users = [
    { name: "A", age: 20 },
    { name: "B", age: 17 },
    { name: "C", age: 25 },
    { name: "D", age: 15 }
];

const data=users.filter((user)=>(user.age>17))
.map((user)=>user.name);
console.log(data)

const products = [
    { name: "Phone", price: 20000 },
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 1000 }
];

const total=products.filter((product)=>{ return product.price>5000})
.reduce((sum,product)=>sum+=product.price,0);
console.log(total)

const arr=[1,2,3,4,56,6];
const print=arr.reduce((count,x)=>{
  if(x%2==0){
    return count+1;
  }
  return count;
},0);

console.log(print)


