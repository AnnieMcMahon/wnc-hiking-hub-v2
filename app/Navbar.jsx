'use client';

import { useGlobal } from './context/GlobalContext';
import { usePathname } from "next/navigation";
import Link from "next/link";
import './Navbar.css';

export default function Navbar() {
  const { currentUser, setCurrentUser, appUsers } = useGlobal();
  const pathname = usePathname();
  function handleClick() {
    setCurrentUser(appUsers[0]);
    localStorage.setItem('currentUser', JSON.stringify(appUsers[0]));
  }
  return (
    <div id="navbar">
      <Link className={`${pathname === '/' ? 'active' : 'inactive'}`} id="title" href="/">WNC Hiking Hub</Link>
      <div className="links">
        <Link className={`${pathname === '/bio' ? 'active' : 'inactive'}`} href="/bio">Bio</Link>
        <Link className={`${pathname === '/post-hike' ? 'active' : 'inactive'}`} href="/post-hike">Post a Hike</Link>
        <Link className={`${pathname === '/join-hike' ? 'active' : 'inactive'}`} href="/join-hike">Join a Hike</Link>
      </div>
      {currentUser.id == 0 ?
      <button><Link className="button-link" href="/login">Log In</Link></button> : <button onClick={handleClick}>Log Out</button>
      }
    </div>
  );
}
