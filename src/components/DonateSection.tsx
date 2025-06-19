import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from './ui/dialog';

const DonateSection = () => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState<number | ''>('');
  const [success, setSuccess] = useState(false);

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
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-sky-medium text-white fade-in-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="bubble-text-md gradient-text mb-6 sparkle">Support the Omar Fund</h2>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto opacity-90">
            Your generosity fuels our mission. Every donation, no matter the size, helps us create more heart stories and transform lives in our community.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl card-3d w-full max-w-md text-center mb-8 md:mb-0">
            <h3 className="bubble-text-sm text-white mb-4">Where Your Money Goes</h3>
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center">
                <span>Direct Community Aid</span>
                <span className="font-bold">65%</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span>Program Development</span>
                <span className="font-bold">25%</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span>Operations</span>
                <span className="font-bold">10%</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-bold text-lg mb-3">Impact Examples</h4>
              <ul className="space-y-2 text-sm">
                <li>• $25 provides a family meal for a week</li>
                <li>• $50 funds school supplies for a child</li>
                <li>• $100 covers emergency assistance</li>
                <li>• $250 sponsors a community event</li>
              </ul>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl card-3d w-full max-w-md text-center">
            <h3 className="bubble-text-sm text-white mb-6">Donate Now</h3>
            <Dialog open={open} onOpenChange={setOpen}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[25, 50, 100, 250].map((preset) => (
                  <DialogTrigger asChild key={preset}>
                    <button
                      onClick={() => handleOpen(preset)}
                      className="bg-white text-primary-600 font-bold py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full"
                    >
                      ${preset}
                    </button>
                  </DialogTrigger>
                ))}
              </div>
              <DialogTrigger asChild>
                <button
                  onClick={() => handleOpen()}
                  className="w-full bg-transparent border-2 border-white text-white font-bold py-4 px-6 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300 mb-6"
                >
                  Custom Amount
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
              <div className="text-center">
                <p className="text-sm opacity-80 mb-4">
                  Your donation is secure and tax-deductible
                </p>
                <div className="flex justify-center space-x-4 text-xs opacity-60">
                  <span>🔒 Secure</span>
                  <span>📄 Tax Receipt</span>
                  <span>💳 All Cards Accepted</span>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
