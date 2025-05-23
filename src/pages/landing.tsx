// src/pages/landing.tsx

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Dash-OS</h1>
      <iframe
        src="/desktop"
        className="w-[90vw] h-[80vh] border-2 rounded-xl"
        allow="fullscreen; clipboard-write"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
}
