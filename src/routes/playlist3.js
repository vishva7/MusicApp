import Songlist from "../components/songlist";
import { useState } from "react";
const Playlist1 = () => {
    
    const [song, setSong] = useState([
        { title: "Dangerous Women", album: "Dangerous Women", date: "13 october",src:"Music/Ariana Grande - Dangerous Woman.mp3" ,time: "3:11", id: 1, img: "/drive.jpg" },
        { title: "You were born", album: "1989", date: "13 october",src:"Music/You Were Born Lyrics - Cloud Cult.mp3" ,time: "3:11", id: 1, img: "You were born.jpg" },
        { title: "Falling", album: "Line", date: "13 october",src:"Music/Harry Styles - Falling (Lyrics).mp3",time: "3:11", id: 2, img: "falling.jpg" },
        { title: "Matilda", album: "Harry's House", date: "13 october", src:"Music/Harry Styles - Matilda (Audio).mp3",time: "3:11", id: 3, img: "matilda.jpg" },
        { title: "Innocence", album: "Avril", date: "13 october", src:"Music/inocense-avril.mp3",time: "3:11", id: 4, img: "innnocence.jpg" },
        { title: "Falling Like the Stars", album: "James Arthur", date: "13 october", src:"Music/James Arthur - Falling Like The Stars.mp3",time: "3:11", id: 5, img: "fallinglikeastart.jpg" },
        { title: "If the world was ending now", album: "JP Saxe", date: "13 october", src:"Music/JP Saxe - If the World Was Ending (Official Video) ft. Julia Michaels.mp3",time: "3:11", id: 6, img: "iftheworldwasendingnow.jpg" },
        { title: "Bruises", album: "Lewis Capaldi", date: "13 october",src:"Music/Lewis Capaldi - Bruises (Lyrics).mp3", time: "3:11", id: 7, img: "Bruises.jpg" },
        { title: "Hold me while you wait", album: "Lewis Capaldi", date: "13 october",src:"Music/Lewis Capaldi - Hold Me While You Wait (Lyrics).mp3", time: "3:11", id: 8, img: "Hold me while you wait.jpg" },
        { title: "Someone you loved", album: "Lewis Capaldi", date: "13 october", src:"Music/Lewis Capaldi - Someone You Loved (Lyrics).mp3",time: "3:11", id: 9, img: "Someone you loved.jpg" },
        { title: "Animals", album: "Maroon", date: "13 october", src:"Music/Maroon 5 - Animals (Official Music Video).mp3",time: "3:11", id: 10, img: "Animals.jpg" },
        ]);
    return ( 
        <Songlist song={song} id={song.id}/>
     );
}
 
export default Playlist1;
