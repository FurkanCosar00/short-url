import Link from "next/link";

export default function UserLayout({ children }){
  return(
    <>
      <header className="header">
        <Link href="/login">login</Link>
      </header>

      {children}
    </>
  )
}