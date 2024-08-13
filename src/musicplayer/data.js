import { v4 as uuidv4 } from "uuid"; 
function chillHop() { 
  return [ 
    { 
      name: "3iche Lwa9i3e", 
      cover: 
"../tifo/mastifo.jpg", 
      artist: " Fatal Tigers", 
      audio: 
"../songs/song1.mp3", 
      color: ["#205950", "#2ab3bf"], 
      id: uuidv4(), 
      active: true, 
    }, 
    { 
      name: "Raja L9awmi - الرجاء القومي", 
      cover: 
        "../videos/thumbnail/RAJA.jpg", 
      artist: "GREEN BOYS", 
      audio: 
        "../songs/song2.mp3", 
      color: ["#EF8EA9", "#ab417f"], 
      id: uuidv4(), 
      active: false, 
    }, 
    
  ]; 
} 
  
export default chillHop;