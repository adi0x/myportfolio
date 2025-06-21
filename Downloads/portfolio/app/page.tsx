export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-[#374151] mb-4">
        👋 Hi, I'm Adithi Koppula
      </h1>
      <p className="text-lg md:text-xl text-[#374151] max-w-2xl leading-relaxed">
        On a Journey Through Data, AI, and Endless Curiosity
        <br className="hidden sm:block" />
        (with Coffee in Hand)
      </p>

      <div className="mt-8 space-y-4">
        <a
          href="mailto:adithi201@gmail.com"
          className="text-blue-600 underline hover:text-blue-800 block"
        >
          📧 adithi201@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/adithiletsconnect/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 block"
        >
          🔗 LinkedIn Profile
        </a>
      </div>
    </main>
  );
}

