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
    <header className="sticky top-0 z-30 w-full bg-white border-b border-primary-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 md:py-4 px-2 md:px-4 lg:px-8">
        {/* Logo/Brand */}
        <a href="#" className="flex items-center text-2xl font-extrabold text-primary-600 tracking-tight" style={{ height: '80px', overflow: 'hidden' }}>
          <img src="/Images/logo.png" alt="Omar Fund Logo" className="h-28 w-auto object-contain mx-auto" style={{ display: 'block', marginTop: '-32px', marginBottom: '-32px' }} />
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
            className="w-3/4 max-w-xs h-full shadow-xl flex flex-col p-0 animate-fade-in-up bg-white rounded-l-2xl border-l-2 border-primary-100 ring-1 ring-primary-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-8 pb-0 flex justify-end">
              <button
                className="mb-8 text-3xl text-primary-600 focus:outline-none hover:text-primary-700 transition-all"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col divide-y divide-primary-100">
              <a href="#about" className="my-2 mx-4 text-lg font-semibold text-primary-700 bg-white rounded-full shadow transition-all px-8 py-3 hover:bg-primary-50 hover:text-primary-600 focus:bg-primary-100 focus:text-primary-700" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#mission" className="my-2 mx-4 text-lg font-semibold text-primary-700 bg-white rounded-full shadow transition-all px-8 py-3 hover:bg-primary-50 hover:text-primary-600 focus:bg-primary-100 focus:text-primary-700" onClick={() => setMobileMenuOpen(false)}>Mission</a>
              <a href="#events" className="my-2 mx-4 text-lg font-semibold text-primary-700 bg-white rounded-full shadow transition-all px-8 py-3 hover:bg-primary-50 hover:text-primary-600 focus:bg-primary-100 focus:text-primary-700" onClick={() => setMobileMenuOpen(false)}>Events</a>
              <a href="#donate" className="my-2 mx-4 text-lg font-semibold text-primary-700 bg-white rounded-full shadow transition-all px-8 py-3 hover:bg-primary-50 hover:text-primary-600 focus:bg-primary-100 focus:text-primary-700" onClick={() => setMobileMenuOpen(false)}>Donate</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 