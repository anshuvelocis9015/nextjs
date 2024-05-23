// import React from 'react'
async function getUserList(id){
    let data = await fetch(`http://localhost:3000/api/hello/${id}`);
    data = data.json();
    return data;
}

export default async function page({params}){
    console.log(params.userlistid);
    const userList = await getUserList(params.userlistid);
    console.log("userlist---------->",userList.result);
  return (
    <div>
      <h4>Name:{userList.result.name}</h4>
      <h4>Age:{userList.result.age}</h4>
      <h4>Email:{userList.result.email}</h4>
    </div>
  )
}

// export default page