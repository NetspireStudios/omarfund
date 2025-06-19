import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from './ui/dialog';

const priceOptions = [25, 50, 100, 250, 500, 1000, 5000];

const StickyDonateButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState<number | ''>('');
  const [customAmount, setCustomAmount] = useState<number | ''>('');
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [priceType, setPriceType] = useState('preset');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrolled > heroHeight / 2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setOpen(false), 1500);
  };

  const handleOpen = () => {
    setSuccess(false);
    setAmount('');
    setCustomAmount('');
    setName('');
    setEmail('');
    setPhone('');
    setPriceType('preset');
    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={`fixed bottom-6 right-6 z-50 btn-primary shadow-xl transition-all duration-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          } hover:scale-105 hover:shadow-2xl border-2 border-primary-200`}
          style={{
            background: 'linear-gradient(135deg, #4A90E2 0%, #87CEEB 100%)',
            boxShadow: '0 8px 32px rgba(74, 144, 226, 0.4)',
            transition: 'box-shadow 0.3s, transform 0.3s',
          }}
          onClick={handleOpen}
        >
          <span className="flex items-center">
            <span className="mr-2">💙</span>
            Donate Now
          </span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="bubble-text-md gradient-text mb-2">Complete Your Donation</DialogTitle>
        </DialogHeader>
        {success ? (
          <div className="text-center py-8 animate-fade-in-up">
            <div className="text-4xl mb-4">🎉</div>
            <div className="text-lg font-bold mb-2">Thank you for your generosity!</div>
            <div className="text-gray-600">Your support makes a real difference.</div>
          </div>
        ) : (
          <form onSubmit={handleDonate} className="space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-base bg-white transition-all duration-300 hover:border-primary-400"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-base bg-white transition-all duration-300 hover:border-primary-400"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-base bg-white transition-all duration-300 hover:border-primary-400"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="Phone (optional)"
                />
              </div>
            </div>
            <div>
              <label htmlFor="donation-amount-select" className="block text-sm font-semibold mb-2">Donation Amount</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {priceOptions.map((price) => (
                  <button
                    key={price}
                    type="button"
                    onClick={() => { setAmount(price); setPriceType('preset'); }}
                    className={`px-4 py-2 rounded-lg font-bold border border-primary-200 bg-primary-50 text-primary-700 hover:bg-primary-200 transition-all duration-200 ${amount === price && priceType === 'preset' ? 'ring-2 ring-primary-500 bg-primary-200' : ''}`}
                  >
                    ${price}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => { setPriceType('custom'); setAmount(''); }}
                  className={`px-4 py-2 rounded-lg font-bold border border-primary-200 bg-white text-primary-700 hover:bg-primary-100 transition-all duration-200 ${priceType === 'custom' ? 'ring-2 ring-primary-500' : ''}`}
                >
                  Custom
                </button>
              </div>
              {priceType === 'custom' && (
                <input
                  type="number"
                  min={1}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400 text-base bg-white transition-all duration-300 hover:border-primary-400"
                  value={customAmount}
                  onChange={e => setCustomAmount(Number(e.target.value))}
                  placeholder="Enter custom amount"
                />
              )}
            </div>
            <DialogFooter>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-sky-400 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 border-2 border-primary-200"
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
  );
};

export default StickyDonateButton;
