import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const history = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  function handleClick() {
    history("/loginpage");
  }

  function handleClick2() {
    history("/signinpage");
  }

  const allSongs1 = [
    "Jar of hearts",
    "We Belong",
    "Someone to you",
    "Love me like you do",
   "As it was",
   "How to save a life",
    "Style",
    "Intro","Red"];

  const allSongs2 = [
    "Tum Kya Mile",
   ,
   "Chaleya","Shayad","Ek mein hu aur ek tu","Aise Kyun","Tere mitte","Tere Pyaar Mein","Chaak de India","Bekhayali","Disco Song"

  
  ];
  const allSongs3 = [
   "Dangerous Women",
   "You were born"

  
  ];
  const allSongs4 = [
    "Music/James Arthur - Say You Won't Let Go.mp3",
    "Music/Gold Brother x LIIV - Bring You Back.mp3"

  
  ];
  const allSongs5 = [
    "Music/Alan Walker ft. Gavin James - Tired.mp3"

  
  ];
 

  // Determine the playlist page based on the search term
  const determinePlaylistPage = (searchTerm) => {
    // Modify this array to match your actual playlist page paths
    const playlistPages = [
      "/playlist1",
      "/playlist2",
      "/playlist3",
      "/playlist4",
      "/playlist5",
    ];

    // Add your logic to determine the appropriate playlist page based on the search term
    // This is a placeholder, modify it based on your actual requirements
    // For example, you could use switch statements or other conditions

    // Check if the searchTerm includes any of the song paths
    if (allSongs1.some((song) => searchTerm.includes(song))) {
      // Return the playlist page corresponding to the first song (you can modify this logic)
      return playlistPages[0];
    } else if (allSongs2.some((song) => searchTerm.includes(song))) {
      return "/playlist2";
    } else if (allSongs3.some((song) => searchTerm.includes(song))) {
      return "/playlist3";
    } else if (allSongs4.some((song) => searchTerm.includes(song))) {
      return "/playlist4";
    } else if (allSongs5.some((song) => searchTerm.includes(song))) {
      return "/playlist5";
    } else {
      // Default to the first playlist page if no specific match is found
      return playlistPages[0];
    }
  };

  const handleSearch = () => {
    // Determine the selected playlist page
    const selectedPlaylistPage = determinePlaylistPage(searchTerm);

    // Navigate to the selected playlist page
    history(selectedPlaylistPage);
  };

  return (
    <div className="flex justify-end pt-4 pr-4 pb-3 h-16 bg-black">
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <div className="flex justify-end p-2 mt-[-1rem] w-64 h-16">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleClick}
        >
          Log In
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleClick2}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
