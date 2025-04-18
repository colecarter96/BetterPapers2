

const Hero = () => {
    return(
        <div className=" md:flex md:justify-center h-[70vh] bg-blue-400">
            <div className=" hidden md:block text-left my-auto pl-44">
                <h2 className="text-white text-2xl font-bold">Decorate your digital world.</h2>
                <p className="max-w-prose text-blue-900 text-xl">Relive your childhood years with the retro wallpaper pack. It features GameBoys, Nokia Phones, iPods and more.</p>
                <button className="bg-white px-2 py-1 rounded mt-2 text-lg">Buy Now</button>
            </div>
            
            <img src="https://i.postimg.cc/GmjPjg63/Untitled-design-7.png" className="h-11/12 mx-auto md:mx-0 lg:h-full"></img>

            <div className="block text-center md:hidden text-white -mt-4 text-2xl font-bold">
                <h1>Decorate your digital world.</h1>
            </div>
            
        </div>
    );
}

export default Hero;


// const Hero = () => {
//     return(
//         <div className="flex justify-center md:flex-row h-3/4 bg-blue-400">
//             <div className="text-left my-auto pl-24">
//                 <h2 className="text-white text-2xl font-bold">Decorate your digital world.</h2>
//                 <p className="max-w-prose text-blue-900 text-xl">Relive your childhood years with the retro wallpaper pack. It features GameBoys, Nokia Phones, iPods and more.</p>
//                 <button className="bg-white px-2 py-1 rounded mt-2 text-xl">Buy Now</button>
//             </div>
            
//             <img src="https://i.postimg.cc/GmjPjg63/Untitled-design-7.png"></img>
            
//         </div>
//     );
// }

// export default Hero;

// const Hero = () => {
//     return (
//         <div className="flex flex-col md:flex-row justify-center h-3/4 bg-blue-400">
//             <div className="text-left my-auto pl-24 md:pl-0">
//                 <h2 className="text-white text-2xl font-bold">Decorate your digital world.</h2>
//                 <p className="max-w-prose text-blue-900 text-xl">
//                     Relive your childhood years with the retro wallpaper pack. It features GameBoys, Nokia Phones, iPods, and more.
//                 </p>
//                 <button className="bg-white px-2 py-1 rounded mt-2 text-xl">Buy Now</button>
//             </div>

//             <img
//                 src="https://i.postimg.cc/GmjPjg63/Untitled-design-7.png"
//                 alt="Wallpaper example"
//                 className="mt-4 md:mt-0 md:w-auto w-full" // Makes the image responsive
//             />
//         </div>
//     );
// }

// export default Hero;
