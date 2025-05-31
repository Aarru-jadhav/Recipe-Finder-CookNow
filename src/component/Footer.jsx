// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//       <div className='flex grid-flow-col w-screen pt-12 md:pt-24 h-auto md:h-96 justify-center pb-16 md:pb-32'>
//         <div className="logo flex justify-center md:justify-start">
//             <h1 className='pt-4 md:pt-8 pl-0 md:pl-4 font-bold text-3xl md:text-5xl'>Cook<span className='font-bold text-orange-400'>Now</span></h1>
//         </div>
//         <div className="about mt-8 md:mt-0 md:pl-24 flex justify-center md:justify-start">
//             <ul className='text-center md:text-left'>
//                 <li className='mb-2'>About</li>
//                 <li className='mb-2'>Features</li>
//                 <li className='mb-2'>Pricing</li>
//                 <li className='mb-2'>Contact</li>
//                 <li>Blog</li>
//             </ul>
//         </div>

//         <div className="doc mt-8 md:mt-0 md:pl-20 flex justify-center md:justify-start">
//             <ul className='text-center md:text-left'>
//                 <li className='mb-2'>Documentation</li>
//                 <li className='mb-2'>FAQ</li>
//                 <li>Support</li>
//             </ul>
//         </div>

//         <div className="sociallinks mt-8 md:mt-0 md:pl-20 flex justify-center md:justify-start">
//             <ul className='text-center md:text-left'>
//                 <li className='mb-2'>Facebook</li>
//                 <li className='mb-2'>Instagram</li>
//                 <li>X (Twitter)</li>
//             </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <h1 className="pt-2 md:pt-8 font-bold text-3xl md:text-5xl">
              Cook<span className="font-bold text-orange-400">Now</span>
            </h1>
          </div>
          {/* About */}
          <div className="flex justify-center md:justify-start">
            <ul className="text-center md:text-left space-y-2">
              <li className="font-semibold mb-1">About</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          {/* Documentation */}
          <div className="flex justify-center md:justify-start">
            <ul className="text-center md:text-left space-y-2">
              <li className="font-semibold mb-1">Documentation</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>
          {/* Social Links */}
          <div className="flex justify-center md:justify-start">
            <ul className="text-center md:text-left space-y-2">
              <li className="font-semibold mb-1">Follow Us</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>X (Twitter)</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center font-bold text-black text-sm">
          &copy; {new Date().getFullYear()} CookNow. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer