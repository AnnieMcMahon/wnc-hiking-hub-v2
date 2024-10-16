'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname()
  return (
    <div id="navbar">
        <div className={`${pathname === '/' ? 'active' : 'inactive'}`} id="title">
        <h2><a href="/">WNC Hiking Hub</a></h2>
        </div>
        <ul className="links">
          <li className={`${pathname === '/bio' ? 'active' : 'inactive'}`}><a href="/bio">Bio</a></li>
          <li className={`${pathname === '/post-hike' ? 'active' : 'inactive'}`}><a href="/post-hike">Post a Hike</a></li>
          <li className={`${pathname === '/join-hike' ? 'active' : 'inactive'}`}><a href="/join-hike">Join a Hike</a></li>
        </ul>
        <button>Log In</button>
    </div>
  );
}