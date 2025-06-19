
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container text-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 card-3d">
          <div className="text-6xl mb-6 animate-bounce">🎉</div>
          <h1 className="bubble-text-md gradient-text mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Your generous donation helps us continue our mission of creating positive change in our community. 
            Together, we're making dreams come true!
          </p>
          <div className="space-y-4">
            <button 
              onClick={() => window.location.href = '/'}
              className="btn-primary w-full"
            >
              Return Home
            </button>
            <p className="text-sm text-gray-500">
              {sessionId && `Transaction ID: ${sessionId.slice(-8)}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
