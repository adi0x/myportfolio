import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-10">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-10 mb-6 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-[#374151] mb-4">Adithi Koppula</h1>
          <p className="font-inter text-lg md:text-xl text-[#374151] leading-relaxed max-w-2xl mx-auto">
            On a Journey Through Data, AI, and Endless Curiosity
            <br className="hidden sm:block" />
            (with Coffee in Hand)
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="mailto:adithi201@gmail.com"
              className="flex items-center gap-3 text-[#374151] hover:text-[#7FB7BE] transition-colors font-inter"
            >
              <span className="text-lg">📧</span>
              <span>adithi201@gmail.com</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/adithiletsconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#374151] hover:text-[#7FB7BE] transition-colors font-inter"
            >
              <span className="text-lg">💼</span>
              <span>LinkedIn Profile</span>
            </Link>

            <div className="flex items-center gap-3 text-[#374151] font-inter">
              <span className="text-lg">📍</span>
              <span>Atlanta, GA, USA</span>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="bg-white rounded-lg shadow-sm p-10 mb-6 text-center">
          <h2 className="font-poppins text-2xl font-semibold text-[#374151] mb-4">Portfolio</h2>
          <div className="py-12">
            <p className="font-inter text-xl text-[#374151]">Coming Soon!</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-6">
          <p className="font-inter text-sm text-[#374151]">
            © {new Date().getFullYear()} Adithi Koppula. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
