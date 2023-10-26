const Songlist = () => {
  return (
    <div>
      <div
        id="alert-1"
        class="  flex  w-3/4 ml-72 mb-2 p-2 text-white  bg-gray-700 "
      >
1
        <div class="ml-[0.7rem] inline-flex items-center flex-shrink-0  w-14 h-11 ">
              <img src="/tsrep.png"></img>
            </div>
        <span class="sr-only">Info</span>
       
        <div class="ml-3 text-sm font-medium">
         greedy 
        </div>
        <div className="grid grid-cols-3 gap-72">
          <div className="ml-40">greedy</div>
          <div className="ml-4">6 days ago</div>
        <button
          type="button"
          class="  bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          data-dismiss-target="#alert-1"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Songlist;
