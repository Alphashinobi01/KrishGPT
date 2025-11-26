import React from 'react';
import ChatInterface from './components/ChatInterface';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-gray-200 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Purple glow top left */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]"></div>
        {/* Darker purple glow bottom right */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-950/20 rounded-full blur-[120px]"></div>
        {/* Subtle center accent */}
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Spline 3D Element - Bottom Right Corner */}
      <div className="fixed bottom-0 right-0 w-64 h-64 md:w-80 md:h-80 z-20 opacity-90 pointer-events-none md:pointer-events-auto mix-blend-lighten">
         {/* 
            Note: The prompt implied a specific link but it was not present. 
            Using a placeholder URL. Please update the 'url' attribute below 
            with your specific Spline scene link.
         */}
         <spline-viewer 
           loading-anim-type="spinner-small-dark" 
           url="https://prod.spline.design/6Wq1Q7YQ5-5jj5-5/scene.splinecode" 
         />
      </div>

      {/* Content */}
      <div className="z-10 w-full flex justify-center">
        <ChatInterface />
      </div>
    </div>
  );
}

export default App;