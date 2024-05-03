'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <h1>Layout dashboard</h1>

     {
      (pathName !== "/dashboard/detail/detailcollege") ? 
      <ul>
      <li>
        <h4>Navbar list</h4>
      </li>
      <li>
        <Link href="/dashboard/about">About</Link>
      </li>
      <li>
        <Link href="/dashboard/detail/detailstudent">DetailStudent</Link>
      </li>
      <li>
        <Link href="/dashboard/detail/detailcollege">DetailCollege</Link>
      </li>
    </ul>
    : null
     }
      {children}
    </div>
  )
}

export default Layout