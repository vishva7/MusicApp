import Songlist from "../components/songlist";
import { useState } from "react";
const Playlist2 = () => {
    
    const [song, setSong] = useState([
        { title: "Tum kya mile", album: "Rocky Aur Rani", date: "13 october",src:"Music/Tum Kya Mile - Video _ Rocky Aur Rani Kii Prem Kahaani _ Ranveer,Alia,Arijit,Shreya,Pritam,Amitabh.mp3" ,time: "3:11", id: 1, img: "/tsrep.png" },
        { title: "Chaleya", album: "JAwan", date: "13 october",src:"Music/JAWAN_ Chaleya (Hindi) _ Shah Rukh Khan _ Nayanthara _ Atlee _ Anirudh _ Arijit S, Shilpa R _ Kumaar.mp3",time: "3:11", id: 2, img: "/tsrep.png" },
        { title: "Shayad", album: "Love AajKal", date: "13 october", src:"Music/Shayad - Aaj Kal Full Song Video Pritam Arijit Singh.mp3",time: "3:11", id: 3, img: "/tsrep.png" },
        { title: "Ek mein hu aur ek tu", album: "Ek mein hu aur ek tu", date: "13 october", src:"Music/Ek Main Aur Ekk Tu (Title Track) lyrical Video _ Benny Dayal, Anushka _ Imran Khan _ Kareena Kapoor.mp3",time: "3:11", id: 4, img: "/tsrep.png" },
        { title: "Aise Kyun", album: "Mismatched", date: "13 october", src:"Music/Aise Kyun Official Music Video Anurag Saikia, Raghav & Nikhita Raj Shekhar Mismatched.mp3",time: "3:11", id: 5, img: "/tsrep.png" },
        { title: "Teri mitte", album: "Kesari", date: "13 october", src:"Music/Teri Mitti - Lyrical _ Kesari _ Akshay Kumar & Parineeti Chopra _ Arko _ B Praak_ Manoj Muntashir.mp3",time: "3:11", id: 6, img: "/tsrep.png" },
        { title: "Tere Pyar Mein", album: "Tu jhothi mein makkar", date: "13 october",src:"Music/Tere Pyaar Mein (Full Video) Tu Jhoothi Main Makkaar_ Ranbir,Shraddha_ Pritam_Arijit,Nikhita,Amitabh.mp3", time: "3:11", id: 7, img: "/tsrep.png" },
        { title: "Chak de India", album: "Chak de India", date: "13 october",src:"Music/Chak De India Song _ Title Song _ Shah Rukh Khan _ Sukhwinder Singh _ Salim-Sulaiman _ Jaideep Sahni.mp3", time: "3:11", id: 8, img: "/tsrep.png" },
        { title: "Bekhayali", album: "Kabir Singh", date: "13 october", src:"Music/Bekhayali Full Song _ Kabir Singh _ Shahid K,Kiara A_Sandeep Reddy Vanga _ Sachet-Parampara _ Irshad.mp3",time: "3:11", id: 9, img: "/tsrep.png" },
        { title: "The Disco Song", album: "SOTY", date: "13 october", src:"MusicApp/The Disco Song Full Song - SOTY_Alia Bhatt,Sidharth Malhotra,Varun Dhawan_Sunidhi Chauhan.mp3",time: "3:11", id: 10, img: "/tsrep.png" },
        ]);
    return ( 
        <Songlist song={song} id={song.id}/>
     );
}
 
export default Playlist2;
