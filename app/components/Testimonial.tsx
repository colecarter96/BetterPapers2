

// const Testimonial = () => {
//     return (
//         <div className="flex flex-row justify-evenly text-center bg-blue-200 h-1/8">
//             <div className="m-auto">
//                 <h3 className="text-3xl text-blue-700 font-bold">#3</h3>
//                 <h2 className="text-xl text-black">Comp. Rankings</h2>
                
//             </div>

//             <div className="m-auto">
//                 <h3 className="text-3xl text-blue-700 font-bold">96%</h3>
//                 <h2 className="text-xl text-black">Enjoyment Rating</h2>
                
//             </div>

//             <div className="m-auto">
//                 <h3 className="text-3xl text-blue-700 font-bold">HD</h3>
//                 <h2 className="text-xl text-black">Wallpaper Quality</h2>
                
//             </div>
//         </div>
//     );
// }

const Testimonial = () => {
    return (
        <div className="hidden md:block bg-blue-200 py-6">
            <div className="flex flex-row  justify-center gap-12 md:gap-26 lg:gap-48 text-center max-w-4xl mx-auto">
                <div>
                    <h3 className="text-3xl text-blue-700 font-bold">#3</h3>
                    <h2 className="text-xl text-black">Comp. Rankings</h2>
                </div>

                <div>
                    <h3 className="text-3xl text-blue-700 font-bold">96%</h3>
                    <h2 className="text-xl text-black">Enjoyment Rating</h2>
                </div>

                <div>
                    <h3 className="text-3xl text-blue-700 font-bold">HD</h3>
                    <h2 className="text-xl text-black">Wallpaper Quality</h2>
                </div>
            </div>
        </div>
        
    );
}

export default Testimonial;