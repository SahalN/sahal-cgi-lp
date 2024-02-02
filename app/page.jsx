/** @format */

export default function LandingPage() {
  return (
    <>
      <div className='py-4 font-bold font-raleway'>
        <h1>Sahal's Collection</h1>
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
      <div className='grid gap-4 py-4 '>
        <div className='p-8 bg-[#0D0D0D] max-h-screen rounded-xl'>
          <div className='pb-6'>
            <h1 className='text-3xl font-extrabold font-raleway'>Diverse</h1>
            <p className='text-2xl font-light'>
              Embrace Different Artistic Expressions
            </p>
          </div>
          <div className='overflow-auto h-72'>
            <img
              src='/images/render-sahal.jpg'
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
                src='/images/render-sahal.jpg'
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
                src='/images/render-sahal.jpg'
                alt=''
                className='object-cover w-full h-full rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
      {/*CARD */}
    </>
  );
}
