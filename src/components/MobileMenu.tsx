import React from 'react';

// Dummy logo SVG (replace with your own logo if needed)
const Logo = () => (
  <div className="flex justify-center mb-4">
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="30" fontFamily="cursive" fontSize="28" fill="#000">Sky</text>
      <rect x="55" y="18" width="50" height="4" rx="2" fill="#000" />
      <text x="60" y="35" fontFamily="sans-serif" fontSize="14" fill="#000">COMPARISON</text>
    </svg>
  </div>
);

// Social icons (SVGs)
const socialLinks = [
  { href: '#', label: 'Instagram', svg: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="18" cy="6" r="1.5"/></svg>
  ) },
  { href: '#', label: 'Pinterest', svg: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  ) },
  { href: '#', label: 'TikTok', svg: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17a4 4 0 1 1 4-4V4h3a4 4 0 0 0 4 4"/></svg>
  ) },
];

const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'Airlines Reviews', href: '#' },
  { label: 'Aviation News', href: '#' },
  { label: 'Private Aviation', href: '#' },
  { label: 'Travel and Tours', href: '#' },
];

const MobileMenu = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${open ? 'visible' : 'invisible'}`}
      aria-hidden={open ? 'false' : 'true'}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-lg flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
          onClick={onClose}
          aria-label="Close menu"
          title="Close menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </button>
        <div className="px-6 pt-8 pb-4 flex-1 flex flex-col">
          <Logo />
          {/* Social icons */}
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((icon, i) => (
              <a key={i} href={icon.href} aria-label={icon.label} className="hover:text-blue-600 transition-colors">{icon.svg}</a>
            ))}
          </div>
          {/* Search bar */}
          <div className="mb-6">
            <div className="flex rounded border border-gray-200 overflow-hidden">
              <input
                type="text"
                placeholder="Type and hit enter..."
                className="flex-1 px-3 py-2 outline-none"
              />
              <button className="px-3 bg-gray-100 hover:bg-gray-200">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              </button>
            </div>
          </div>
          {/* Menu items */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="block font-semibold py-2 border-b border-gray-100 hover:bg-gray-50">{item.label}</a>
                </li>
              ))}
              {/* Dropdown */}
              <li>
                <button
                  className="w-full flex items-center justify-between font-semibold py-2 border-b border-gray-100 hover:bg-gray-50 focus:outline-none"
                  onClick={() => setDropdownOpen((v) => !v)}
                  aria-expanded={dropdownOpen ? 'true' : 'false'}
                >
                  Planes Comparison
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6"/></svg>
                </button>
                {dropdownOpen && (
                  <ul className="pl-4 bg-gray-50">
                    <li><a href="#" className="block py-2 text-sm hover:underline">Boeing vs Airbus</a></li>
                    <li><a href="#" className="block py-2 text-sm hover:underline">Regional Jets</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
        {/* Copyright */}
        <div className="px-6 pb-4 text-xs text-gray-500 border-t border-gray-100">
          Copyright 2024 - All Right Reserved by Sky Comparison
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu; 