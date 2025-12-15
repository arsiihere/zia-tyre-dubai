function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M16 0C7.163 0 0 7.163 0 16c0 2.82.738 5.58 2.143 7.997L0 32l8.196-2.14A15.9 15.9 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm9.446 23.188c-.398 1.12-2.368 2.164-3.217 2.227-.847.064-1.265.633-4.142-.908-3.49-1.921-5.688-6.512-5.86-6.81-.172-.299-1.392-2.439-1.392-4.652 0-2.212 1.26-3.304 1.706-3.754.445-.45.892-.525 1.193-.525.3 0 .597 0 .862.016.277.015.65-.105 1.017.774.398.933 1.273 3.232 1.387 3.47.114.239.19.515.038.814-.153.299-.23.516-.459.791-.23.275-.484.617-.689.83-.23.237-.468.495-.201.975.267.478 1.19 1.95 2.557 3.164 1.76 1.565 3.237 2.05 3.715 2.283.479.234.757.191 1.035-.115.278-.306 1.194-1.39 1.512-1.866.318-.478.636-.398 1.074-.239.439.159 2.76 1.297 3.236 1.532.477.237.795.353.91.55.115.198.115 1.148-.283 2.268z"
      />
    </svg>
  );
}

export function WhatsAppFloatingButton() {
  const whatsappMessage = encodeURIComponent("Hi! I need urgent tyre assistance. Please help!");
  const whatsappUrl = `https://wa.me/971529702828?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-4 sm:px-5 py-3 rounded-full transition-all shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/40 hover:scale-105"
      aria-label="Message us on WhatsApp"
    >
      <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="hidden sm:inline">Message us on WhatsApp</span>
      <span className="sm:hidden text-sm">WhatsApp</span>
    </a>
  );
}
