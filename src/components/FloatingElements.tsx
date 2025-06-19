
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large floating bubbles */}
      <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-primary-200 rounded-full opacity-30 float"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-sky-light rounded-full opacity-20 float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-primary-300 rounded-full opacity-25 float"></div>
      <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-primary-400 rounded-full opacity-40 float-delayed"></div>
      <div className="absolute top-1/2 left-1/12 w-6 h-6 bg-primary-100 rounded-full opacity-15 float"></div>
      <div className="absolute top-3/4 right-1/6 w-3 h-3 bg-sky-light rounded-full opacity-30 float-delayed"></div>
      
      {/* Small sparkles */}
      <div className="absolute top-1/5 left-2/3 w-1 h-1 bg-primary-500 rounded-full opacity-60 float"></div>
      <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-primary-400 rounded-full opacity-50 float-delayed"></div>
      <div className="absolute bottom-1/5 right-1/3 w-1 h-1 bg-sky-medium rounded-full opacity-70 float"></div>
    </div>
  );
};

export default FloatingElements;
