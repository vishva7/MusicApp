import Songlist from "../components/songlist";
import { useState } from "react";
const Playlist = () => {
    
    const [song, setSong] = useState([
        { title: "Are you ready for it?", album: "reputation", date: "13 october",src:"/Taylor Swift - Wildest Dreams (Taylor’s Version) (Official Audio)_160k.mp3" ,time: "3:11", id: 1, img: "/tsrep.png" },
        { title: "Don't blame me", album: "reputation", date: "13 october",src:"/Christina Perri - Jar of Hearts.mp3",time: "3:11", id: 2, img: "/tsrep.png" },
        { title: "Delicate", album: "reputation", date: "13 october", src:"/Dove Cameron - We Belong (Official Lyric Video).mp3",time: "3:11", id: 3, img: "/tsrep.png" },
        { title: "Dress", album: "reputation", date: "13 october", src:"/BANNERS - Someone To You.mp3",time: "3:11", id: 4, img: "/tsrep.png" },
        { title: "Getaway car", album: "reputation", date: "13 october", src:"/Ellie Goulding - Love Me Like You Do (Official Video).mp3",time: "3:11", id: 5, img: "/tsrep.png" },
        { title: "Gorgeous", album: "reputation", date: "13 october", src:"/Harry Styles - As It Was (Lyrics).mp3",time: "3:11", id: 6, img: "/tsrep.png" },
        { title: "End game", album: "reputation", date: "13 october",src:"/The Fray - How to Save a Life (Official Video).mp3", time: "3:11", id: 7, img: "/tsrep.png" },
        { title: "King of my heart", album: "reputation", date: "13 october",src:"/Taylor Swift - Style.mp3", time: "3:11", id: 8, img: "/tsrep.png" },
        { title: "Dancing with our hands tied", album: "reputation", date: "13 october", src:"/Taylor Swift - Wildest Dreams (Taylor’s Version) (Official Audio)_160k.mp3",time: "3:11", id: 9, img: "/tsrep.png" },
        ]);
    return ( 
        <Songlist song={song} id={song.id}/>
     );
}
 
export default Playlist;