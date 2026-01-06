export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left side: Copyright */}
        <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
          &copy; 2026 NewsToday. All rights reserved.
        </p>

        {/* Right side: Optional links */}
        <div className="flex gap-4 text-gray-400 text-xs md:text-base">
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
        </div>

      </div>
    </footer>
  );
}
