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
    </>
  );
}
