import Songlist from "../components/songlist";
import { useState } from "react";
const Playlist = () => {
    const [song, setSong] = useState([
        { title: "Are you ready for it?", album: "reputation", date: "13 october", time: "3:11", id: 1, img: "/tsrep.png" },
        { title: "Don't blame me", album: "reputation", date: "13 october", time: "3:11", id: 2, img: "/tsrep.png" },
        { title: "Delicate", album: "reputation", date: "13 october", time: "3:11", id: 3, img: "/tsrep.png" },
        { title: "Dress", album: "reputation", date: "13 october", time: "3:11", id: 4, img: "/tsrep.png" },
        { title: "Getaway car", album: "reputation", date: "13 october", time: "3:11", id: 5, img: "/tsrep.png" },
        { title: "Gorgeous", album: "reputation", date: "13 october", time: "3:11", id: 6, img: "/tsrep.png" },
        { title: "End game", album: "reputation", date: "13 october", time: "3:11", id: 7, img: "/tsrep.png" },
        { title: "King of my heart", album: "reputation", date: "13 october", time: "3:11", id: 8, img: "/tsrep.png" },
        { title: "Dancing with our hands tied", album: "reputation", date: "13 october", time: "3:11", id: 9, img: "/tsrep.png" },
        ]);
    return ( 
        <Songlist song={song}/>
     );
}
 
export default Playlist;