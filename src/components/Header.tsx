import React, { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from './ui/dialog';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState<number | ''>('');
  const [success, setSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpen = (preset?: number) => {
    setAmount(preset || '');
    setSuccess(false);
    setOpen(true);
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setOpen(false), 1500);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur border-b border-primary-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-2 md:px-4 lg:px-8">
        {/* Logo/Brand */}
        <a href="#" className="flex items-center gap-2 text-2xl font-extrabold text-primary-600 tracking-tight">
          <span className="inline-block w-8 h-8 bg-gradient-to-br from-primary-400 to-sky-400 rounded-full mr-2 shadow-md"></span>
          <span>Omar Fund</span>
        </a>
        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <a href="#about" className="hover:text-primary-500 transition-colors">About</a>
          <a href="#mission" className="hover:text-primary-500 transition-colors">Mission</a>
          <a href="#events" className="hover:text-primary-500 transition-colors">Events</a>
          <a href="#donate" className="hover:text-primary-500 transition-colors">Donate</a>
        </nav>
        {/* Donate Button with Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="ml-4 inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-primary-500 to-sky-400 text-white font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200">
              Donate
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="bubble-text-md gradient-text mb-2">Complete Your Donation</DialogTitle>
            </DialogHeader>
            {success ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🎉</div>
                <div className="text-lg font-bold mb-2">Thank you for your generosity!</div>
                <div className="text-gray-600">Your support makes a real difference.</div>
              </div>
            ) : (
              <form onSubmit={handleDonate} className="space-y-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[25, 50, 100, 250].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset)}
                      className={`bg-primary-100 text-primary-700 font-bold py-3 px-4 rounded-lg hover:bg-primary-200 transition-all duration-300 w-full ${amount === preset ? 'ring-2 ring-primary-500' : ''}`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Donation Amount</label>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary-600">$</span>
                    <input
                      type="number"
                      min={1}
                      required
                      className="w-32 px-3 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-lg text-primary-700 font-bold bg-white"
                      value={amount}
                      onChange={e => setAmount(Number(e.target.value))}
                      placeholder="Amount"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-sky-400 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    Donate Now
                  </button>
                  <DialogClose asChild>
                    <button type="button" className="mt-2 text-primary-500 underline text-sm">Cancel</button>
                  </DialogClose>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>
        {/* Mobile Nav Hamburger */}
        <button
          className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-400 group"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open navigation</span>
          <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-start justify-end md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <nav
            className="bg-white w-3/4 max-w-xs h-full shadow-2xl flex flex-col p-8 gap-8 animate-fade-in-up"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="self-end mb-8 text-3xl text-primary-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <a href="#about" className="text-lg font-semibold text-primary-700 hover:text-primary-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#mission" className="text-lg font-semibold text-primary-700 hover:text-primary-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Mission</a>
            <a href="#events" className="text-lg font-semibold text-primary-700 hover:text-primary-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Events</a>
            <a href="#donate" className="text-lg font-semibold text-primary-700 hover:text-primary-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Donate</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 