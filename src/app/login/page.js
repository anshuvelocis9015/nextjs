// import React from 'react'

const page = () => {
  return (
    <div>
        <h1>Login Page</h1>
        <form>
            <input type="text" name="username" placeholder="username" required />
            <input type="password" name="password" placeholder="password" required />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default page