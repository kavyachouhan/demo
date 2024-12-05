import React from 'react';

const LogoGrid = () => {
  const logos = [
    { id: 1, name: 'Perfora', path: '/assets/logo/Perforalogo.png' },
    { id: 2, name: 'Estaury', path: '/assets/logo/Estuary.webp' },
    { id: 3, name: 'P-Tal', path: '/assets/logo/P-tal.svg' },
    { id: 4, name: 'Mangalam', path: '/assets/logo/Mangalam.png' },
    { id: 5, name: 'My11Circle', path: '/assets/logo/My11.png' },
    { id: 6, name: 'Single.Id', path: '/assets/logo/Single.id.png' },
    { id: 7, name: 'Medifeet', path: '/assets/logo/MEDIFEET.avif' },
    { id: 8, name: 'Loreal', path: '/assets/logo/Loreal.png' },
    { id: 9, name: 'Lakme', path: '/assets/logo/Lakme.png' },
    { id: 10, name: '1Win', path: '/assets/logo/1win.webp' },
    { id: 11, name: 'Neemans', path: '/assets/logo/Neemans.png' },
    { id: 12, name: 'Dot and key', path: '/assets/logo/DotnKey.png' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10">
      <div className="grid grid-cols-3 gap-6 lg:gap-8">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="relative group flex items-center justify-center p-4 transition-transform duration-300 cursor-pointer"
          >
            {/* Placeholder monochrome logo */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
              <div className="relative">
                <img
                  src={logo.path}
                  alt={`${logo.name} logo monochrome`}
                  className="max-w-full h-16 sm:h-20 object-contain brightness-0 sepia saturate-50 hue-rotate-[340deg] opacity-90"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(77%) sepia(38%) saturate(463%) hue-rotate(358deg) brightness(89%) contrast(87%)',
                  }}
                />
              </div>
            </div>

            {/* Original colored logo */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img
                src={logo.path}
                alt={`${logo.name} logo color`}
                className="max-w-full h-16 sm:h-20 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
