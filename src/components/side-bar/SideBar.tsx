import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'antd';
import {
  GoHome,
  GoPeople,
  GoChevronLeft,
  GoShareAndroid,
  GoHeart,
  GoGear
} from 'react-icons/go';
import { FiMenu } from 'react-icons/fi';
import { LuCalendarCheck, LuFileText } from 'react-icons/lu';
import { PiNotebook } from 'react-icons/pi';

import './SideBar.css';
import { ProfilePicPlaceholder } from '..';

const navLinks = [
  { path: '/', title: 'Dashboard', icon: <GoHome /> },
  { path: '/candidates', title: 'Candidate Bank', icon: <GoPeople /> },
  {
    path: '/interviews',
    title: 'Interview Manager',
    icon: <LuCalendarCheck />
  },
  {
    path: '/opportunities',
    title: 'Opportunity Hub',
    icon: <GoShareAndroid />
  },
  { path: '/documents', title: 'Documents', icon: <LuFileText /> },
  { path: '/contacts', title: 'Contacts', icon: <PiNotebook /> },
  { path: '/favorite', title: 'Favorite', icon: <GoHeart /> }
];

const user = { name: 'mohamed agina' };

export const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarEl = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sidebar = sidebarEl.current;
    if (!sidebar) return;

    const handleClose = (e: MouseEvent) => {
      if (!sidebar.contains(e.target as Node)) setIsExpanded(false);
    };

    document.addEventListener('click', handleClose, true);

    return () => document.removeEventListener('click', handleClose);
  }, []);

  return (
    <>
      <header className="mobile-header">
        {' '}
        <Tooltip placement="left" title="Expand">
          <button className="burger-btn" onClick={() => setIsExpanded(true)}>
            <FiMenu />
          </button>
        </Tooltip>
      </header>

      <div className={`overlay-wrapper ${isExpanded ? 'expanded' : ''}`}>
        <aside ref={sidebarEl} className="app-sidebar">
          <img className="app-logo" src="./app-logo.png" alt="app logo" />

          <nav>
            <ul className="nav-links">
              {navLinks.map(link => (
                <li key={link.title}>
                  <NavLink to={link.path}>
                    <span className="link-icon">{link.icon}</span> {link.title}
                  </NavLink>
                </li>
              ))}

              <li>
                <button className="back-btn">
                  <span className="link-icon">
                    <GoChevronLeft />
                  </span>{' '}
                  Go Back
                </button>
              </li>
            </ul>
          </nav>

          <ul className="nav-links account-info">
            <li>
              <NavLink to="/settings">
                <span className="link-icon">
                  <GoGear />
                </span>
                Settings
              </NavLink>
            </li>
            <li>
              <div className="user-identity">
                <ProfilePicPlaceholder username={user.name} />
                {user.name}
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};
