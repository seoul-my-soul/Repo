'use client';

import Link from 'next/link';
import { Globe, Menu, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="w-full h-24 md:h-0 pt-0 md:pt-[8%] bg-tile bg-cover" />
      <header className="flex flex-row justify-between items-center gap-20 px-4 md:px-8 pb-4 md:pb-8 text-lg md:text-xl">
        <Link href="/">프로젝트 이름</Link>

        <nav className="hidden lg:flex flex-row gap-16 text-sm md:text-base">
          <Link href="/map" className="group relative">
            지도
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-red group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/nightViewSpot" className="group relative">
            야경명소
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-orange group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/market" className="group relative">
            전통시장
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/historicSite" className="group relative">
            유적지
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-green group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/menu" className="group relative">
            메뉴
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="flex gap-4 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Globe />
            한국어
          </div>
          <Menu className="lg:hidden flex items-center justify-center" onClick={handleOpenMenu} />
        </div>

        {isMenuOpen && (
          <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-20 z-40" />
            <div className="fixed top-0 right-0 w-[80%] h-full p-8 border-2 border-darkerBrown bg-darkBrown transform md:hidden z-50">
              <ChevronRight
                className="absolute top-1/2 left-0 w-8 h-8 text-navy"
                onClick={handleCloseMenu}
              />
              <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-texture bg-cover bg-no-repeat opacity-10 pointer-events-none" />
              <div className="flex flex-col gap-8 w-full h-full">
                <div className="relative h-full p-4 border-2 border-lightBrown bg-lighterBrown">
                  {/* 모서리 문양 */}
                  <div className="absolute -top-0.5 -left-0.5">
                    <div className="flex">
                      <div className="w-5 h-5 border-2 border-lightBrown" />
                      <div className="w-4 h-4" />
                      <div className="w-5 h-5 border-2 border-lightBrown" />
                    </div>
                    <div className="flex">
                      <div className="w-5 h-[18px] border-2 border-t-0 border-lightBrown" />
                      <div className="w-[18px] h-[18px] border-2 border-t-0 border-l-0 border-lightBrown" />
                    </div>
                    <div className="flex">
                      <div className="w-5 h-[18px] border-2 border-t-0 border-lightBrown" />
                    </div>
                  </div>

                  <div className="absolute -top-0.5 -right-0.5">
                    <div className="flex">
                      <div className="w-5 h-5 border-2 border-lightBrown" />
                      <div className="w-4 h-4" />
                      <div className="w-5 h-5 border-2 border-lightBrown" />
                    </div>
                    <div className="flex justify-end">
                      <div className="w-5 h-[18px] border-2 border-t-0 border-lightBrown" />
                      <div className="w-[18px] h-[18px] border-2 border-t-0 border-l-0 border-lightBrown" />
                    </div>
                    <div className="flex justify-end">
                      <div className="w-5 h-[18px] border-2 border-t-0 border-lightBrown" />
                    </div>
                  </div>

                  <div className="absolute -bottom-0.5 -left-0.5">
                    <div className="flex">
                      <div className="w-5 h-[18px] border-2 border-b-0 border-lightBrown" />
                    </div>
                    <div className="flex ">
                      <div className="w-5 h-[18px] border-2 border-b-0  border-lightBrown" />
                      <div className="w-[18px] h-[18px] border-2 border-b-0 border-l-0 border-lightBrown" />
                    </div>
                    <div className="flex">
                      <div className="w-5 h-5 border-2 border-lightBrown" />
                      <div className="w-4 h-4" />
                      <div className="w-5 h-5 border-2 border-lightBrown" />
                    </div>
                  </div>

                  <div className="absolute -bottom-0.5 -right-0.5">
                    <div className="flex justify-end">
                      <div className="w-5 h-[18px] border-2 border-b-0 border-lightBrown" />
                    </div>
                    <div className="flex justify-end">
                      <div className="w-5 h-[18px] border-2 border-b-0  border-lightBrown" />
                      <div className="w-[18px] h-[18px] border-2 border-b-0 border-l-0 border-lightBrown" />
                    </div>
                    <div className="flex">
                      <div className="w-5 h-5 border-2 border-lightBrown" />
                      <div className="w-4 h-4" />
                      <div className="w-5 h-5 border-2 border-lightBrown" />
                    </div>
                  </div>

                  <nav className="flex flex-col justify-center items-center gap-8 h-full text-base p-4 border-2 border-lightBrown bg-lighterBrown text-navy">
                    <Link href="/map" className="py-2">
                      지도
                    </Link>
                    <Link href="/nightViewSpot" className="py-2">
                      야경명소
                    </Link>
                    <Link href="/market" className="py-2">
                      전통시장
                    </Link>
                    <Link href="/historicSite" className="py-2">
                      유적지
                    </Link>
                    <Link href="/menu" className="py-2">
                      메뉴
                    </Link>
                  </nav>
                </div>
                <div className="w-full p-4 bg-brown">
                  <div className="w-full p-20 bg-lightBrown" />
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
