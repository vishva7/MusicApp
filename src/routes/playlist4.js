import Songlist from "../components/songlist";
import { useState } from "react";
const Playlist1 = () => {
    
    const [song, setSong] = useState([
        { title: "White Horse", album: "Fearless", date: "13 october",src:"Music/White Horse-taylor swift.mp3" ,time: "3:11", id: 1, img: "/drive.jpg" },
        { title: "How to fight lonliness", album: "Wilco", date: "13 october",src:"Music/Wilco - How To Fight Loneliness.mp3" ,time: "3:11", id: 1, img: "How to fight lonliness.jpg" },
        { title: "Dusk till Dawn", album: "Icarus Falls", date: "13 october",src:"Music/ZAYN - Dusk Till Dawn (feat. Sia) [Radio Edit].mp3",time: "3:11", id: 2, img: "Dusk till Dawn.jpg" },
        { title: "Chemicals", album: "The Vamps", date: "13 october", src:"Music/The Vamps - Chemicals (Lyric Video).mp3",time: "3:11", id: 3, img: "chemical.jpg" },
        { title: "Simple Song", album: "The Shins", date: "13 october", src:"Music/The Shins - Simple Song (Official Audio).mp3",time: "3:11", id: 4, img: "Simple Song.jpg" },
        { title: "So Happy Together", album: "Turtles", date: "13 october", src:"Music/THE TURTLES - SO HAPPY TOGETHER!!.mp3",time: "3:11", id: 5, img: "/tsrep.png" },
        { title: "You Found Me", album: "JP Saxe", date: "13 october", src:"Music/The Fray - You Found Me (Official VIdeo).mp3",time: "3:11", id: 6, img: "You Found Me.jpg" },
        { title: "The Way I Loved You", album: "Taylor Swift", date: "13 october",src:"Music/Taylor Swift - The Way I Loved You.mp3", time: "3:11", id: 7, img: "The Way I Loved You.jpg" },
        { title: "All too Well", album: "Taylor Swift", date: "13 october",src:"Music/Taylor Swift - All Too Well (10 Minute Version) (Lyric Video)_160k.mp3", time: "3:11", id: 8, img: "All too Well.jpg" },
        { title: "Tramploine", album: "Shaed", date: "13 october", src:"Music/Shaed - Trampoline (lyrics).mp3",time: "3:11", id: 9, img: "Tramploine.jpg" },
        { title: "Skin", album: "Sabrina Carpenter", date: "13 october", src:"Music/Sabrina Carpenter - Skin (Official Lyric Video).mp3",time: "3:11", id: 10, img: "Skin.jpg" },
        ]);
    return ( 
        <Songlist song={song} id={song.id}/>
     );
}
 
export default Playlist1;
