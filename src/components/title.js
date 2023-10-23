const Title = ({titlecard}) => {
    return ( 
        
       <div class="p-4"> 
          <div className="grid grid-cols-3 gap-5">

       {titlecard.map((TC) => (
       <div id="toast-success" class="flex items-center w-[400px] p-2 pr-7 mb-4 text-gray-500 bg-black rounded-lg shadow text-gray-400 bg-gray-800" role="alert">
        
            <div class="ml-[-0.5rem] inline-flex items-center flex-shrink-0  w-14 h-11 ">
                <img src={TC.img}></img>
            </div>
            <div class="ml-3 text-sm font-normal">{TC.title}</div>
            <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" alt="button" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>
        
        ))}
        </div>
</div>        
 );
};
 
export default Title;