export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] py-10 px-6">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-10 mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#374151] mb-4">
            Adithi Koppula
          </h1>
          <p className="text-lg md:text-xl text-[#374151] leading-relaxed max-w-2xl mx-auto">
            On a Journey Through Data, AI, and Endless Curiosity
            <br className="hidden sm:block" />
            (with Coffee in Hand)
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:adithi201@gmail.com" className="text-[#374151] hover:text-[#7FB7BE] transition-colors font-inter text-lg">
              📧 adithi201@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/adithiletsconnect/" target="_blank" className="text-[#374151] hover:text-[#7FB7BE] transition-colors font-inter text-lg">
              💼 LinkedIn Profile
            </a>
            <span className="text-[#374151] font-inter text-lg">📍 Atlanta, GA, USA</span>
          </div>
        </div>

        {/* Portfolio Placeholder */}
        <div className="bg-white rounded-lg shadow-sm p-10 text-center">
          <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
          <p className="text-[#6B7280]">Coming Soon!</p>
        </div>
      </div>
    </main>
  );
}
