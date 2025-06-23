const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white fade-in-section py-6 sm:py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
            <h3 className="bubble-text-sm text-white mb-6">The Omar Fund</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Creating positive change through compassion, community, and the power of shared stories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-start-4 lg:col-end-5 w-full max-w-xs ml-auto md:ml-0">
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <span className="text-primary-400 mr-3 mt-1">📍</span>
                <span>Toronto, Ontario</span>
              </div>
              <div className="flex items-center">
                <span className="text-primary-400 mr-3">✉️</span>
                <a href="mailto:theomarfund@gmail.com" className="hover:text-primary-400 transition-colors">theomarfund@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700">
          <div className="flex justify-center items-center min-h-[60px]">
            <p className="text-gray-400 text-sm text-center m-0">
              © 2024 The Omar Fund. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
