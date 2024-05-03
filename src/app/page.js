'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const fruit = () => {
    alert(`fruit`);
  }
  const navigate = (name) =>{
    router.push(name);
  }
  return (
    <main className={styles.main}>
      <h1>Hello world</h1>
      <User name="Anshu Kumar"/>
      <User name="Ansh Kumar"/>
      <User name="Shivanshu Kumar"/>
      <InnerComp />
      {InnerComp()}
      <button onClick={() => {alert(`hello nextjs`)}}>Click Me</button>
      <button onClick={fruit}>Click Me</button>
      <Link href="/dashboard">Anshu</Link>
      <Link href="/dashboard/about">About</Link>
      <button onClick={() =>navigate('/dashboard/about')}>Click Me to navigate</button>
      <Link href="/dashboard/detail/detailcollege">click me to navigate detailcollege page</Link>
      <Link href="/dashboard/detail/detailstudent">click me to navigate detailstudent page</Link>
    </main>
  );
}

const User = (props) => {
  return(
    <div>
      <h2>my name is {props.name}</h2>
    </div>
  )
}

const InnerComp = () => {
  return(
    <div>
      <h2>InnerComponent</h2>
    </div>
  )
}
