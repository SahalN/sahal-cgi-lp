/** @format */
import { raleway } from "./font";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={raleway.variable}>
      <body className='flex flex-col min-h-screen md:px-[100px] py-2  bg-black text-white'>
        <header className='text-[#EB5E28]'>
          <div className='flex font-raleway text-9xl md:text-[539px] font-extrabold justify-center items-center pb-4 '>
            <h1>CGI</h1>
          </div>
          <div className='flex justify-between pb-4'>
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
        <main className='grow'>{children}</main>
        <footer>
          <h1>Hello</h1>
        </footer>
      </body>
    </html>
  );
}
