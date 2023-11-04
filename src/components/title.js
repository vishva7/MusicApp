import { BsFillPlayFill } from "react-icons/bs";
const Title = ({ titlecard }) => {
  return (
    <div class="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
        {titlecard.map((TC) => (
          <div
            id="toast-success"
            class="flex items-center text-gray-500 bg-black p-1 shadow text-gray-400 bg-gray-800"
            role="alert"
          >
            <div class="md:ml-[-0.5rem] ml-[-0.6rem] inline-flex items-center flex-shrink-0  w-12 h-11 ">
              <img src={TC.img}></img>
            </div>
            <div class="md:ml-3 ml-1 text-sm font-normal">{TC.title}</div>
            <div class="ml-auto  bg-black text-gray-400 hover:text-gray-900 rounded-full focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500  dark:bg-gray-800 dark:hover:bg-gray-700">
               <BsFillPlayFill color="blue" size={25} />
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Title;
