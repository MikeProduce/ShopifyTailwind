



// this component is meant to  add new links if needed also handles how the UI of the navbar looks like. 
export const Footer = () => {



  return (
    <div className="bg-gray-800 w-full h-full">
      <div className="bg-gray-800 text-white mx-auto max-w-2xl py-8 px-2 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-4 flex flex-col sm:flex-row" >
        <ul className='mx-8 my-8'>
          <li className='font-bold'>Company</li>
          <li className='hover:underline cursor-pointer'>About</li>
          <li className='hover:underline cursor-pointer'>Support</li>
          <li className='hover:underline cursor-pointer'>Jobs</li>
          <li className='hover:underline cursor-pointer'>For the Record</li>
        </ul>
        <ul className='mx-8 my-8'>
          <li className='font-bold'>Communities</li>
          <li className='hover:underline cursor-pointer'>Developers</li>
          <li className='hover:underline cursor-pointer'>Advertising</li>
          <li className='hover:underline cursor-pointer'>Investors</li>
          <li className='hover:underline cursor-pointer'>Vendors</li>
        </ul>
        <ul className='mx-8 my-8'>
          <li className='font-bold'>Useful links</li>
          <li className='hover:underline cursor-pointer'>Support</li>
          <li className='hover:underline cursor-pointer'>Free Mobile App</li>
          <div className="flex">
            <li><i className="fa-brands fa-twitter mr-2 hover:underline cursor-pointer"></i></li>
            <li><i className="fa-brands fa-facebook mx-2 hover:underline cursor-pointer"></i></li>
            <li><i className="fa-brands fa-linkedin mx-2 hover:underline cursor-pointer"></i></li>
          </div>
        </ul>

      </div>
    </div>)
}