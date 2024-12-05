const Footer = () => {
  const navItems = [
    { text: "HOME", href: "/" },
    { text: "ABOUT US", href: "/about" },
    { text: "OUR WORK", href: "/work" },
    { text: "OUR CLIENTS", href: "#" },
    { text: "GET IN TOUCH", href: "/contact" },
  ];

  return (
    <footer className="bg-[#2f3531] text-white flex flex-col justify-between items-center w-full h-screen ">
    {/* Main Container */}
    <div className="flex flex-col items-center w-full max-w-screen-xl gap-8 px-4 py-24">
      {/* Logo Section */}
      <div className="flex justify-center">
  <img
    src="assets/LOGO FULL.png"
    alt="Company Logo"
    className="w-64 sm:w-80 lg:w-96 xl:w-[500px] object-contain"
  />
</div>

  
      {/* Navigation Menu */}
      <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-white text-xs sm:text-sm md:text-base hover:text-gray-300 transition-colors"
          >
            {item.text}
          </a>
        ))}
      </nav>
  
      {/* Address Section */}
      <div className="text-center text-xs sm:text-sm">
        <h2 className="text-[#f85a23] text-sm sm:text-base md:text-lg font-bold">
          True Bridge Media
        </h2>
        {/* <address className="not-italic leading-relaxed">
          Bungalow No.143 Lokhandwala, Janki
          <br />
          Devi School Road, Mhada, Andheri (W),
          <br />
          Mumbai 400053.
        </address> */}
      </div>
       {/* Social Media Links (Centered) */}
       <div className="flex items-center justify-center gap-6">
          {/* <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-110 transition-transform hover:text-[#1877F2]"
          >
            <i className="fab fa-facebook-f text-xl sm:text-2xl"></i>
          </a> */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-110 transition-transform hover:text-[#1DA1F2]"
          >
            <i className="fab fa-youtube text-xl sm:text-2xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-110 transition-transform hover:text-[#E4405F]"
          >
            <i className="fab fa-instagram text-xl sm:text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-110 transition-transform hover:text-[#0A66C2]"
          >
            <i className="fab fa-linkedin-in text-xl sm:text-2xl"></i>
          </a>
        </div>
         {/* Copyright Section (Aligned to the left) */}
         <div className="flex justify-center w-full py-5">
          <p className="text-xs sm:text-sm text-left pl-4">
            © 2024 True Bridge Media, ALL RIGHTS RESERVED
          </p>
        </div>
    </div>
  
    {/* Bottom Section */}
    {/* <div className="w-full bg-[#74e6ad] py-3">
      <div className="flex justify-between items-center px-4"> */}
       
  
       
      {/* </div>
    </div> */}
  </footer>
  
  );
};

export default Footer;
