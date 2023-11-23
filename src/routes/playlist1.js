import Songlist from "../components/songlist";
import { useState } from "react";
const Playlist1 = () => {
    
    const [song, setSong] = useState([
        { title: "Driver's License", album: "Sour", date: "13 october",src:"Music/Olivia Rodrigo drivers license (Lyrics).mp3" ,time: "3:11", id: 1, img: "/drive.jpg" },{ title: "Wildest Dreams", album: "1989", date: "13 october",src:"/Taylor Swift - Wildest Dreams (Taylor’s Version) (Official Audio)_160k.mp3" ,time: "3:11", id: 1, img: "/tsrep.png" },
        { title: "Jar of hearts", album: "Single", date: "13 october",src:"Music/Christina Perri - Jar of Hearts.mp3",time: "3:11", id: 2, img: "jar of hearts.jpg" },
        { title: "We Belong", album: "Single", date: "13 october", src:"Music/Dove Cameron - We Belong (Official Lyric Video).mp3",time: "3:11", id: 3, img: "/webelong.jpg" },
        { title: "Someone to you", album: "Banners", date: "13 october", src:"/BANNERS - Someone To You.mp3",time: "3:11", id: 4, img: "banners.jpg" },
        { title: "Love me like you do", album: "Single", date: "13 october", src:"Music/Ellie Goulding - Love Me Like You Do (Official Video).mp3",time: "3:11", id: 5, img: "/love me.png" },
        { title: "As it was", album: "Harry's House", date: "13 october", src:"Music/Harry Styles - As It Was (Lyrics).mp3",time: "3:11", id: 6, img: "/harry's house.jpg" },
        { title: "How to save a life", album: "How to Save a Life", date: "13 october",src:"Music/The Fray - How to Save a Life (Official Video).mp3", time: "3:11", id: 7, img: "/howtosave.jpg" },
        { title: "Style", album: "1989", date: "13 october",src:"Music/Taylor Swift - Style.mp3", time: "3:11", id: 8, img: "/style.png" },
        { title: "Intro", album: "Slow", date: "13 october", src:"Music/Quinn XCII - Intro (Slow).mp3",time: "3:11", id: 9, img: "/intro.jpg" },
        { title: "Red", album: "Red", date: "13 october", src:"Music/Taylor Swift - Red (Taylor&#x27;s Version) (Lyric Video).mp3",time: "3:11", id: 10, img: "/red.jpg" },
        ]);
    return ( 
        <Songlist song={song} id={song.id}/>
     );
}
 
export default Playlist1;
