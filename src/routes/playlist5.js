import Songlist from "../components/songlist";
import { useState } from "react";
const Playlist1 = () => {
    
    const [song, setSong] = useState([
        { title: "Say you wont let go", album: "James Arthur", date: "13 october",src:"Music/James Arthur - Say You Won't Let Go.mp3" ,time: "3:11", id: 1, img: "/drive.jpg" },{ title: "Wildest Dreams", album: "1989", date: "13 october",src:"/Taylor Swift - Wildest Dreams (Taylor’s Version) (Official Audio)_160k.mp3" ,time: "3:11", id: 1, img: "/tsrep.png" },
        { title: "Bring you Back", album: "Gold Brothers", date: "13 october",src:"Music/Gold Brother x LIIV - Bring You Back.mp3",time: "3:11", id: 2, img: "/tsrep.png" },
        { title: "Castle on the hill", album: "Ed Sheeran", date: "13 october", src:"Music/Ed Sheeran - Castle On The Hill [Official Video].mp3",time: "3:11", id: 3, img: "/tsrep.png" },
        { title: "I wanna be that way", album: "Backstreet Boys", date: "13 october", src:"Music/Backstreet_Boys_I_Want_It_That_Way.mp3",time: "3:11", id: 4, img: "/tsrep.png" },
        { title: "Don't Give me up", album: "Single", date: "13 october", src:"Music/Andy Grammer - Don't Give Up On Me [Official Video from the Five Feet Apart Film].mp3",time: "3:11", id: 5, img: "/tsrep.png" },
        { title: "Prophets", album: "A.C.Newman", date: "13 october", src:"Music/A.C. Newman - Prophets.mp3",time: "3:11", id: 6, img: "/tsrep.png" },
        { title: "How to save a life", album: "How to Save a Life", date: "13 october",src:"Music/The Fray - How to Save a Life (Official Video).mp3", time: "3:11", id: 7, img: "/tsrep.png" },
        { title: "I wanna love you", album: "Akon", date: "13 october",src:"Music/Akon - I Wanna Love You.mp3", time: "3:11", id: 8, img: "/tsrep.png" },
        { title: "Tired", album: "Alan Walker", date: "13 october", src:"Music/Alan Walker ft. Gavin James - Tired.mp3",time: "3:11", id: 9, img: "/tsrep.png" },
        { title: "Fairy Tale", album: "Taylor Swift", date: "13 october", src:"Music/fairy tale-taylor swift.mp3",time: "3:11", id: 10, img: "/tsrep.png" },
        ]);
    return ( 
        <Songlist song={song} id={song.id}/>
     );
}
 
export default Playlist1;
