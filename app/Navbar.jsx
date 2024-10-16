'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname()
  return (
    <div id="navbar">
        <Link className={`${pathname === '/' ? 'active' : 'inactive'}`} id="title" href="/">WNC Hiking Hub</Link>
        <div className="links">
          <Link className={`${pathname === '/bio' ? 'active' : 'inactive'}`} href="/bio">Bio</Link>
          <Link className={`${pathname === '/post-hike' ? 'active' : 'inactive'}`} href="/post-hike">Post a Hike</Link>
          <Link className={`${pathname === '/join-hike' ? 'active' : 'inactive'}`} href="/join-hike">Join a Hike</Link>
        </div>
        <button>Log In</button>
    </div>
  );
}