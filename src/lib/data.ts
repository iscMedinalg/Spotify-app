import { colors } from "./colors";
import { Albums } from "./albums";


export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  /**** Albums With Music *****/

  {
    id: '1',
    albumId: Albums[0].id,
    title: Albums[0].title,
    color: colors.green,
    cover: Albums[0].cover,
    artists: Albums[0].artists,
  },

  {
    id: '2',
    albumId: Albums[1].id,
    title: Albums[1].title,
    color: colors.blue,
    cover: Albums[1].cover,
    artists: Albums[1].artists,
  },

  {
    id: '3',
    albumId: Albums[2].id,
    title: Albums[2].title,
    color: colors.indigo,
    cover: Albums[2].cover,
    artists: Albums[2].artists,
  },

  {
    id: '4',
    albumId: Albums[3].id,
    title: Albums[3].title,
    color: colors.teal,
    cover: Albums[3].cover,
    artists: Albums[3].artists,
  },

  {
    id: '5',
    albumId: Albums[4].id,
    title: Albums[4].title,
    color: colors.indigo,
    cover: Albums[4].cover,
    artists: Albums[4].artists,
  },

  // $sad Boyz
  {
    id: '6',
    albumId: Albums[5].id,
    title: Albums[5].title,
    color: colors.gray,
    cover: Albums[5].cover,
    artists: Albums[5].artists,
  },

]

export const thisIs: Playlist[] = [
  /* ------------------ This is Spotify -------------------------- */
  {
    id: '7',
    albumId: Albums[6].id,
    title: Albums[6].title,
    color: colors.grayLigth,
    cover: Albums[6].cover,
    artists: Albums[6].artists,
  },

  {
    id: '8',
    albumId: Albums[7].id,
    title: Albums[7].title,
    color: colors.rose,
    cover: Albums[7].cover,
    artists: Albums[7].artists,
  },

  {
    id: '9',
    albumId: Albums[8].id,
    title: Albums[8].title,
    color: colors.emerald,
    cover: Albums[8].cover,
    artists: Albums[8].artists,
  },

  {
    id: '10',
    albumId: Albums[9].id,
    title: Albums[9].title,
    color: colors.blue,
    cover: Albums[9].cover,
    artists: Albums[9].artists,
  },

  {
    id: '11',
    albumId: Albums[10].id,
    title: Albums[10].title,
    color: colors.teal,
    cover: Albums[10].cover,
    artists: Albums[10].artists,
  },

  {
    id: '12',
    albumId: Albums[11].id,
    title: Albums[11].title,
    color: colors.dark,
    cover: Albums[11].cover,
    artists: Albums[11].artists,
  },
]

export const recently: Playlist[] = [

  /* -------------- Albums ---------------------- */

  {
    id: '13',
    albumId: Albums[12].id,
    title: Albums[12].title,
    color: colors.teal,
    cover: Albums[12].cover,
    artists: Albums[12].artists,
  },

  {
    id: '14',
    albumId: Albums[13].id,
    title: Albums[13].title,
    color: colors.indigo,
    cover: Albums[13].cover,
    artists: Albums[13].artists,
  },

  {
    id: '15',
    albumId: Albums[14].id,
    title: Albums[14].title,
    color: colors.blueLigth,
    cover: Albums[14].cover,
    artists: Albums[14].artists,
  },

  {
    id: '16',
    albumId: Albums[15].id,
    title: Albums[15].title,
    color: colors.indigo,
    cover: Albums[15].cover,
    artists: Albums[15].artists,
  },

  {
    id: '17',
    albumId: Albums[16].id,
    title: Albums[16].title,
    color: colors.teal,
    cover: Albums[16].cover,
    artists: Albums[16].artists,
  },

  {
    id: '18',
    albumId: Albums[17].id,
    title: Albums[17].title,
    color: colors.dark,
    cover: Albums[17].cover,
    artists: Albums[17].artists,
  },

  {
    id: '19',
    albumId: Albums[18].id,
    title: Albums[18].title,
    color: colors.pink,
    cover: Albums[18].cover,
    artists: Albums[18].artists,
  },
]

export const popular:Playlist[] = [
  /* ----------- Playlists --------------- */
  {
    id: '20',
    albumId: Albums[19].id,
    title: Albums[19].title,
    color: colors.indigo,
    cover: Albums[19].cover,
    artists: Albums[19].artists,
  },

  {
    id: '21',
    albumId: Albums[20].id,
    title: Albums[20].title,
    color: colors.orange,
    cover: Albums[20].cover,
    artists: Albums[20].artists,
  },

  {
    id: '22',
    albumId: Albums[21].id,
    title: Albums[21].title,
    color: colors.emerald,
    cover: Albums[21].cover,
    artists: Albums[21].artists,
  },

  {
    id: '23',
    albumId: Albums[22].id,
    title: Albums[22].title,
    color: colors.teal,
    cover: Albums[22].cover,
    artists: Albums[22].artists,
  },

  {
    id: '24',
    albumId: Albums[23].id,
    title: Albums[23].title,
    color: colors.grayLigth,
    cover: Albums[23].cover,
    artists: Albums[23].artists,
  },

  {
    id: '25',
    albumId: Albums[24].id,
    title: Albums[24].title,
    color: colors.white,
    cover: Albums[24].cover,
    artists: Albums[24].artists,
  },

];

export const allPlaylists = [
  ...playlists,
  ...thisIs,
  ...recently,
  ...popular
  // ...morePlaylists,
  // ...sidebarPlaylists,
]

// export const morePlaylists = playlists.map((item) => ({
//   ...item,
//   id: item.id + "_more",
// }))

// export const sidebarPlaylists = playlists.map((item) => ({
//   ...item,
//   id: item.id + "_side",
// }))



// export interface Song {
//   id: number;
//   albumId: number;
//   title: string;
//   image: string;
//   artists: string[];
//   album: string;
//   duration: string;
// }

// export const songs: Song[] = [
//   {
//     "id": 1,
//     "albumId": 1,
//     // "title": "Moonlit Walk",
//     // "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
//     "title": "A TU NOMBRE",
//     "image": `https://i.scdn.co/image/ab67616d00001e02f3ba6742a35f111aaea1ca2f`,
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "3:12"
//   },
//   {
//     "id": 2,
//     "albumId": 1,
//     // "title": "Coffee Daze",
//     // "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
//     "title": "EN LA PEDA",
//     "image": `https://i.scdn.co/image/ab67616d00001e02f3ba6742a35f111aaea1ca2f`,
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "4:07"
//   },
//   {
//     "id": 3,
//     "albumId": 1,
//     // "title": "Skyline Serenade",
//     // "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
//     "title": "ENTRE NOSOTROS",
//     "image": `https://i.scdn.co/image/ab67616d00001e02f3ba6742a35f111aaea1ca2f`,
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "3:50"
//   },
//   {
//     "id": 4,
//     "albumId": 1,
//     // "title": "Urban Echoes",
//     // "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
//     "title": "PARIS",
//     "image": `https://i.scdn.co/image/ab67616d00001e02f3ba6742a35f111aaea1ca2f`,
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "3:30"
//   },
//   {
//     "id": 5,
//     "albumId": 1,
//     // "title": "Night's End",
//     // "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
//     "title": "LAS NOCHES",
//     "image": `https://i.scdn.co/image/ab67616d00001e02f3ba6742a35f111aaea1ca2f`,
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "4:20"
//   },
//   {
//     "id": 1,
//     "albumId": 2,
//     "title": "Silent Rain",
//     "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
//     "artists": ["Urban Nocturne"],
//     "album": "Midnight Tales",
//     "duration": "3:40"
//   },
//   {
//     "id": 2,
//     "albumId": 2,
//     "title": "Lost Pages",
//     "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
//     "artists": ["Urban Nocturne"],
//     "album": "Midnight Tales",
//     "duration": "3:20"
//   },
//   {
//     "id": 3,
//     "albumId": 2,
//     "title": "Midnight Tales",
//     "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
//     "artists": ["Urban Nocturne"],
//     "album": "Midnight Tales",
//     "duration": "3:50"
//   },
//   {
//     "id": 4,
//     "albumId": 2,
//     "title": "City Lights",
//     "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
//     "artists": ["Urban Nocturne"],
//     "album": "Midnight Tales",
//     "duration": "3:30"
//   },
//   {
//     "id": 5,
//     "albumId": 2,
//     "title": "Night Drive",
//     "image": `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
//     "artists": ["Urban Nocturne"],
//     "album": "Midnight Tales",
//     "duration": "4:20"
//   },
//   {
//     "id": 1,
//     "albumId": 3,
//     "title": "Lunar",
//     "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
//     "artists": ["Tenno"],
//     "album": "Study Session",
//     "duration": "3:40"
//   },
//   {
//     "id": 2,
//     "albumId": 3,
//     "title": "Go go go!",
//     "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
//     "artists": ["Tenno"],
//     "album": "Study Session",
//     "duration": "3:20"
//   },
//   {
//     "id": 3,
//     "albumId": 3,
//     "title": "Keep focus!",
//     "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
//     "artists": ["Tenno"],
//     "album": "Study Session",
//     "duration": "2:40"
//   },
//   {
//     "id": 4,
//     "albumId": 3,
//     "title": "JavaScript is the way",
//     "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
//     "artists": ["Tenno"],
//     "album": "Study Session",
//     "duration": "3:10"
//   },
//   {
//     "id": 5,
//     "albumId": 3,
//     "title": "No more TypeScript for me",
//     "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
//     "artists": ["Tenno"],
//     "album": "Study Session",
//     "duration": "2:10"
//   },
//   {
//     "id": 1,
//     "albumId": 4,
//     "title": "Lunar",
//     "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
//     "artists": ["Tenno"],
//     "album": "Study Session",
//     "duration": "3:40"
//   },
//   {
//     "id": 2,
//     "albumId": 4,
//     "title": "Go go go!",
//     "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
//     "artists": ["Tenno"],
//     "album": "Study Session",
//     "duration": "3:20"
//   },
//   {
//     "id": 3,
//     "albumId": 4,
//     "title": "Keep focus!",
//     "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
//     "artists": ["Tenno"],
//     "album": "Study Session",
//     "duration": "2:40"
//   },
//   {
//     "id": 4,
//     "albumId": 4,
//     "title": "JavaScript is the way",
//     "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
//     "artists": ["Tenno"],
//     "album": "Study Session",
//     "duration": "3:10"
//   },
//   {
//     "id": 5,
//     "albumId": 4,
//     "title": "No more TypeScript for me",
//     "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
//     "artists": ["Tenno"],
//     "album": "Study Session",
//     "duration": "2:10"
//   },
//   {
//     "id": 1,
//     "albumId": 5,
//     "title": "Moonlit Walk",
//     "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "3:12"
//   },
//   {
//     "id": 2,
//     "albumId": 5,
//     "title": "Coffee Daze",
//     "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "4:07"
//   },
//   {
//     "id": 3,
//     "albumId": 5,
//     "title": "Skyline Serenade",
//     "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "3:50"
//   },
//   {
//     "id": 4,
//     "albumId": 5,
//     "title": "Urban Echoes",
//     "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "3:30"
//   },
//   {
//     "id": 5,
//     "albumId": 5,
//     "title": "Night's End",
//     "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
//     "artists": ["LoFi Dreamer"],
//     "album": "Chill Lo-Fi Music",
//     "duration": "4:20"
//   },
  
// ]