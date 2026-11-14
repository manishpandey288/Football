import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 North Bengal Futsal Cup. All rights reserved.</p>
      </footer>
    </div>
  );
}
