/** @format */
import { raleway } from "./font";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={raleway.variable}>
      <body className='flex flex-col min-h-screen px-4 md:px-[100px] py-2  bg-black text-white animate-fade-up animate-once animate-ease-in-out'>
        <header className='text-[#EB5E28]'>
          <div className='flex items-center justify-center font-extrabold md:pb-4 font-raleway '>
            <h1 className=' text-9xl md:text-[539px] '>CGI</h1>
          </div>
          <div className='flex justify-between pb-2 mt-4 md:pb-4 '>
            <div>
              <p>Sahal's Collection</p>
            </div>
            <div>
              <p>CGI</p>
            </div>
            <div>
              <p>1 Januari 2024</p>
            </div>
          </div>

          <div>
            <img src='/images/render-sahal.jpg' alt='' className='rounded-xl' />
          </div>
        </header>
        <main>{children}</main>
        <footer className='mt-4 md:mt-44 text-[#EB5E28]'>
          <div className='flex font-raleway text-8xl md:text-[276px] font-extrabold justify-center items-center md:pb-4'>
            <h1 className=''>SAHAL</h1>
          </div>
        </footer>
      </body>
    </html>
  );
}
