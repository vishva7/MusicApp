import Songlist from "../components/songlist";
import { useState } from "react";
const Playlist1 = () => {
    
    const [song, setSong] = useState([
        { title: "Dangerous Women", album: "Dangerous Women", date: "13 october",src:"Music/Ariana Grande - Dangerous Woman.mp3" ,time: "3:11", id: 1, img: "/drive.jpg" },{ title: "Wildest Dreams", album: "1989", date: "13 october",src:"/Taylor Swift - Wildest Dreams (Taylor’s Version) (Official Audio)_160k.mp3" ,time: "3:11", id: 1, img: "/tsrep.png" },
        { title: "Falling", album: "Line", date: "13 october",src:"Music/Harry Styles - Falling (Lyrics).mp3",time: "3:11", id: 2, img: "/tsrep.png" },
        { title: "Matilda", album: "Harry's House", date: "13 october", src:"Music/Harry Styles - Matilda (Audio).mp3",time: "3:11", id: 3, img: "/tsrep.png" },
        { title: "Innocence", album: "Avril", date: "13 october", src:"Music/inocense-avril.mp3",time: "3:11", id: 4, img: "/tsrep.png" },
        { title: "Falling Like the Stars", album: "James Arthur", date: "13 october", src:"Music/James Arthur - Falling Like The Stars.mp3",time: "3:11", id: 5, img: "/tsrep.png" },
        { title: "If the world was ending now", album: "JP Saxe", date: "13 october", src:"Music/JP Saxe - If the World Was Ending (Official Video) ft. Julia Michaels.mp3",time: "3:11", id: 6, img: "/tsrep.png" },
        { title: "Bruises", album: "Lewis Capaldi", date: "13 october",src:"Music/Lewis Capaldi - Bruises (Lyrics).mp3", time: "3:11", id: 7, img: "/tsrep.png" },
        { title: "Hold me while you wait", album: "Lewis Capaldi", date: "13 october",src:"Music/Lewis Capaldi - Hold Me While You Wait (Lyrics).mp3", time: "3:11", id: 8, img: "/tsrep.png" },
        { title: "Someone you loved", album: "Lewis Capaldi", date: "13 october", src:"Music/Lewis Capaldi - Someone You Loved (Lyrics).mp3",time: "3:11", id: 9, img: "/tsrep.png" },
        { title: "Animals", album: "Maroon", date: "13 october", src:"Music/Maroon 5 - Animals (Official Music Video).mp3",time: "3:11", id: 10, img: "/tsrep.png" },
        ]);
    return ( 
        <Songlist song={song} id={song.id}/>
     );
}
 
export default Playlist1;
