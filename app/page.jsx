/** @format */

export default function LandingPage() {
  return (
    <>
      <div className='py-4 mt-4 font-bold font-raleway md:mt-44 '>
        <h1 className='pb-4 text-[#EB5E28]'>Sahal's Collection</h1>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
          <div className='grid gap-4'>
            <div>
              <img
                src='/images/gedung-mood.jpg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
            <div>
              <img
                src='/images/meja-makan.jpg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                src='/images/sahal-petir.jpg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
            <div>
              <img
                src='/images/ombak.png'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                src='/images/ruang-tv.jpg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
            <div>
              <img
                src='/images/sahal-swamp.jpg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>

      {/* CARD */}
      <div className='grid gap-4 py-4 mt-4 md:mt-44'>
        <div className='p-8 bg-[#0D0D0D] max-h-screen rounded-xl'>
          <div className='pb-6'>
            <h1 className='text-3xl font-extrabold font-raleway'>Diverse</h1>
            <p className='text-2xl font-light'>
              Embrace Different Artistic Expressions
            </p>
          </div>
          <div className='overflow-auto h-72'>
            <img
              src='/images/1.png'
              alt=''
              className='object-cover w-full h-full rounded-xl'
            />
          </div>
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='p-8 bg-[#0D0D0D] max-h-screen rounded-xl'>
            <div className='pb-6'>
              <h1 className='text-3xl font-extrabold font-raleway'>
                Supportive
              </h1>
              <p className='text-2xl font-light'>Help Artist thrive</p>
            </div>
            <div className='overflow-auto h-72'>
              <img
                src='/images/2.png'
                alt=''
                className='object-cover w-full h-full rounded-xl'
              />
            </div>
          </div>
          <div className='p-8 bg-[#0D0D0D] max-h-screen rounded-xl'>
            <div className='pb-6'>
              <h1 className='text-3xl font-extrabold font-raleway'>
                Explorative
              </h1>
              <p className='text-2xl font-light'>Discover unseen art forms</p>
            </div>
            <div className='overflow-auto h-72'>
              <img
                src='/images/3.png'
                alt=''
                className='object-cover w-full h-full rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
      {/*CARD */}

      <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 md:mt-44'>
        <div className='p-8 bg-[#0D0D0D] max-h-screen  rounded-xl text-left  text-xl '>
          <div className='pb-6 '>
            <img src='/images/1pp.png' alt='' className='w-20' />
          </div>
          <div>
            <p>ArtGalleryHub changed my art exploration journey!</p>
          </div>
          <div>
            <p className='mt-5 md:mt-52'>Steve Roger</p>
          </div>
        </div>
        <div className='p-8 bg-[#0D0D0D] max-h-screen  rounded-xl text-left  text-xl '>
          <div className='pb-6 '>
            <img src='/images/2pp.png' alt='' className='w-20' />
          </div>
          <div>
            <p>Wide range of stunning artwork. Simply mesmerizing!</p>
          </div>
          <div>
            <p className='mt-5 md:mt-52'>John Smith</p>
          </div>
        </div>
        <div className='p-8 bg-[#0D0D0D] max-h-screen rounded-xl text-left  text-xl  '>
          <div className='pb-6 '>
            <img src='/images/3pp.png' alt='' className='w-20' />
          </div>
          <div>
            <p>Love the support this platform gives to artists</p>
          </div>
          <div>
            <p className='mt-5 md:mt-52'>Linda Johnson</p>
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </>
  );
}
