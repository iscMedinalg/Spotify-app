import{u as m,j as t,P as p,a as h}from"./Player.CwUG9kKO.js";import"./index.Iqf5X9Hs.js";function f({id:a,size:i="small"}){const{currentMusic:r,isPlaying:c,setIsPlaying:n,setCurrentMusic:u}=m(s=>s),e=c&&r?.playlist.id===a,y=()=>{if(e){n(!1);return}fetch(`/api/get-info-playlist.json?id=${a}`).then(s=>s.json()).then(s=>{const{songs:o,playlist:g}=s;n(!0),u({songs:o,playlist:g,song:o[0]})})},l=i==="small"?"w-4 h-4":"w-5 h-5";return t.jsx("button",{onClick:y,className:"card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400",children:e?t.jsx(p,{className:l}):t.jsx(h,{className:l})})}export{f as CardPlayButton};
