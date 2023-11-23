import Songlist from "../components/songlist";
import { useState } from "react";
const Playlist1 = () => {
    
    const [song, setSong] = useState([
        { title: "Bombe helutaite", album: "Vijayprakash", date: "13 october",src:"Music/Bombe Helutaite - Raajakumara_128-(DJMaza).mp3" ,time: "3:11", id: 1, img: "Bombe Helutaite.jpg" },
        { title: "Santhoshakke haadu shanthoshakke", album: "SPB", date: "13 october",src:"Music/baa111557fa9271b3a05b19943996d6b_320.m4a", time: "3:11", id: 1, img: "santhoshakke.jpg" },
        { title: "Arere Avala Naguva ", album: "Vasuki Vaibhav", date: "13 october",src:"Music/Arere-Avala-Naguva-Vasuki-Vaibhav.mp3" ,time: "3:11", id: 2, img: "Arere-Avala-Naguva.jpg" },
        { title: "Salaam Rocky Bhai", album: "Ravi Basrur-Vijayprakash", date: "13 october",src:"Music/Salaam-Rocky-Bhai-Vijay-Prakash-Puneeth-Rudranag-H.-Shreenivas-Moorthi-Sachin-Basrur-Vijay-Urs-Santhosh-Mohan.mp3",time: "3:11", id: 3, img: "Salaam-Rocky-Bhai.jpg" },
        { title: "Singara Siriye(kantara)", album: "Vijayprakash", date: "13 october", src:"Music/Singara-Siriye(PaglaSongs).mp3",time: "3:11", id: 4, img: "Singara-Siriye(kantara).jpg" },
        { title: "Belageddu(Kirik party)", album: "Vijayprakash", date: "13 october", src:"Music/Belageddu-Vijay-Prakash.mp3",time: "3:11", id: 5, img: "Belageddu.jpg" },
        { title: "Last-benchparty", album: "Chandan achar", date: "13 october", src:"Music/Last-Benchu-Party-Chintan-Vikas-Chandan-Achar-Varun-Ramachandra.mp3",time: "3:11", id: 6, img: "lastbenchparty.jpg" },
        { title: "Jagavae neenu gelatiye", album: "Sid Sriram", date: "13 october", src:"Music/Jagave-Neenu.mp3",time: "3:11", id: 7, img: "jagave-Neenu.jpg" },
        { title: "Happy aagide", album: "Allok", date: "13 october",src:"Music/[iSongs.info] 01 - Happy.mp3", time: "3:11", id: 8, img: "happy.jpg" },
        { title: "Just maatmatalli", album: "Raghu dixit", date: "13 october", src:"Music/1034328e8e21a6819f3f9c19fbc70c88_320.m4a",time: "3:11", id: 9, img: "jst math mathalli.jpg" },
        { title: "Toofan(KGF)", album: "Ravi basur", date: "13 october", src:"Music/Toofan (KGF 2)_64-(PagalWorld.Ink).mp3",time: "3:11", id: 10, img: "toofan(kgf).jpg" },
        ]);
    return ( 
        <Songlist song={song} id={song.id}/>
     );
}
 
export default Playlist1;
