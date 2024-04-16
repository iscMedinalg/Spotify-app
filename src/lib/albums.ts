import { colors } from "./colors";

export interface Album {
  id: number;
  title: string;
  cover: string;
  artists: string[];

  songs?: string[];
  category?: string;
  realese?: number;
  duration?: string;
}

export const Albums: Album[] = [

  {
    id: 1,
    title: 'Chill Lo-Fi Music',
    cover: "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["NoSpirit", "Casiio"],

    songs: ['Songs'],
    realese: 2019,
    duration: "2 hr 21 min",
  },

  {
    id: 2,
    title: 'Lo-Fi Chill Session',
    cover: "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Kupla", "Blue Fox"],

    category: 'Popular',
    songs: ['Songs'],
    realese: 2019,
    duration: "2 hr 21 min",
  },

  {
    id: 3,
    title: 'Study Session',
    cover: "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],

    category: 'Popular',
    songs: ['Songs'],
    realese: 2019,
    duration: "2 hr 21 min",
  },

  {
    id: 4,
    title: 'Blue Note Study Time',
    cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"],

    category: 'Popular',
    songs: ['Songs'],
    realese: 2024,
    duration: "2 hr 21 min",
  },

  {
    id: 5,
    title: 'Chau Saura Session',
    cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"],

    category: 'Popular',
    songs: ['Songs'],
    realese: 2019,
    duration: "2 hr 21 min",
  },

  {
    id: 6,
    title: '$AD BOYZ 4 LIFE II',
    cover: "https://i.scdn.co/image/ab67616d00001e02f3ba6742a35f111aaea1ca2f",
    artists: ['Junior H'],

    songs: ['Songs'],
    realese: 2023,
    duration: "2 hr 21 min",
  },

  // {
  //   id: 6,
  //   title: 'Like a Necessity',
  //   cover: "https://f4.bcbits.com/img/a0363730459_16.jpg",
  //   artists: ["WFS", "Nadav Cohen"],

  //   category: 'Popular',
  //   songs: ['Songs'],
  //   realese: 2019,
  //   duration: "2 hr 21 min",
  // },


  /***** THIS IS SPOTIFY *****/


  {
    id: 7,
    title: 'This is Taylor Swift',
    cover: "https://i.scdn.co/image/ab67706f00000002d4b123e7ae0a84047ab62164",
    artists: ["Taylor Swift"],
    category: 'Popular',
    songs: ['Songs'],
    realese: 2019,
    duration: "2 hr 21 min",
  },

  {
    id: 8,
    title: 'This is Ariana Grande',
    cover: "https://i.scdn.co/image/ab67706f00000002cd8e2b103295bbd2749d8ea7",
    artists: ["Ariana Grande"],

    category: 'Popular',
    songs: ['Songs'],
    realese: 2019,
    duration: "2 hr 21 min",
  },

  {
    id: 9,
    title: 'This is Beyoncé',
    cover: "https://i.scdn.co/image/ab67706f000000023949408f182f99b49dc22ea9",
    artists: ["Beyoncé"],

    category: 'Popular',
    songs: ['Songs'],
    realese: 2019,
    duration: "2 hr 21 min",
  },

  {
    id: 10,
    title: 'This is Drake',
    cover: "https://i.scdn.co/image/ab67706f0000000287bff188c40608c48b82068f",
    artists: ["Drake"],
    category: 'Popular',
    songs: ['Songs'],
    realese: 2019,
    duration: "2 hr 21 min",
  },

  {
    id: 11,
    title: 'This is Dua Lipa',
    cover: "https://i.scdn.co/image/ab67706f0000000233e681991efbc60d92cc850c",
    artists: ["Dua Lipa"],
    category: 'Popular',
    songs: ['Songs'],
    realese: 2019,
    duration: "2 hr 21 min",
  },

  {
    id: 12,
    title: 'This is The Weekend',
    cover: "https://i.scdn.co/image/ab67706f00000002256e5fd2d2b6df5b9e98ac4e",
    artists: ["The Weekend"],

    category: 'Popular',
    songs: ['Songs'],
    realese: 2019,
    duration: "2 hr 21 min",
  },
  

  /***** ALBUMS ******/


  {
    id: 13,
    title: 'Lover',
    cover: "https://i.scdn.co/image/ab67616d00001e028481d8f15859aa5bae75ee17",
    artists: ['Taylor Swift'],
    category: 'Popular',
    songs: ['Songs'],
    realese: 2019,
    duration: "2 hr 21 min",
  },

  {
    id: 14,
    title: 'YHLQMDLG',
    cover: "https://i.scdn.co/image/ab67616d00001e02548f7ec52da7313de0c5e4a0",
    artists: ['Bad Bunny'],
    songs: ['Songs'],
    realese: 2020,
    duration: "2 hr 21 min",
  },
  
  {
    id: 15,
    title: 'Cloud Nine',
    cover: "https://i.scdn.co/image/ab67616d00001e0235590cb9280d5a1f5221ae1a",
    artists: ['Kygo'],
    songs: ['Songs'],
    realese: 2016,
    duration: "2 hr 21 min",
  },
  
  {
    id: 16,
    title: 'Nata Montana',
    cover: "https://i.scdn.co/image/ab67616d00001e02e2e093427065eaca9e2f2970",
    artists: ['Natanael Cano'],
    songs: ['Songs'],
    realese: 2023,
    duration: "2 hr 21 min",
  },
  
  {
    id: 17,
    title: 'ICE BLUE',
    cover: "https://i.scdn.co/image/ab67616d00001e02e26dbe2e465595ebb5ebb282",
    artists: ['OPYI', 'Birat Bitz'],
    songs: ['Songs'],
    realese: 2022,
    duration: "21 min 49 seg",
  },

  {
    id: 18,
    title: 'Proof',
    cover: "https://i.scdn.co/image/ab67616d00001e0217db30ce3f081d6818a8ad49",
    artists: ['BTS'],
    songs: ['Songs'],
    realese: 2019,
    duration: "2 hr 8 min",
  },

  {
    id: 19,
    title: 'eternal sunshine',
    cover: "https://i.scdn.co/image/ab67616d00001e02bd3de668e4784d791c4ab695",
    artists: ['Ariana Grande'],
    songs: ['Songs'],
    realese: 2024,
    duration: "2 hr 8 min",
  },

  {
    id: 20,
    title: 'Fiesta! Fiesta!',
    cover: "https://i.scdn.co/image/ab67706f00000002d3ed7d314248889a4894eeae",
    artists: ['Peso Pluma', 'Ariana Grande', 'Karol G', 'Feid', 'Y más!'],
    songs: ['Songs'],
    realese: 2024,
    duration: "2 hr 8 min",
  },

  {
    id: 21,
    title: 'Electrónica & Dance Music',
    cover: "https://i.scdn.co/image/ab67706f000000022bab08cc608f77ca29145a46",
    artists: ['Ariana Grande'],
    songs: ['Songs'],
    realese: 2024,
    duration: "2 hr 8 min",
  },

  {
    id: 22,
    title: 'Viva Latino',
    cover: "https://i.scdn.co/image/ab67706f00000002ecb84988206660a358d7e1f4",
    artists: ['Ariana Grande'],
    songs: ['Songs'],
    realese: 2024,
    duration: "2 hr 8 min",
  },

  {
    id: 23,
    title: 'Mansion Reggaetón',
    cover: "https://i.scdn.co/image/ab67706f000000024ced3d0af4cdf3897d0de3bf",
    artists: ['Ariana Grande'],
    songs: ['Songs'],
    realese: 2024,
    duration: "2 hr 8 min",
  },

  {
    id: 24,
    title: 'Daily Mix 4',
    cover: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb73acb06e040e1133bd597fe4/4/en/default",
    artists: ['Ariana Grande'],
    songs: ['Songs'],
    realese: 2024,
    duration: "2 hr 8 min",
  },

  {
    id: 25,
    title: 'Top México',
    cover: "https://i.scdn.co/image/ab67706f00000002ece28beba1da0b3d8dc521a5",
    artists: ['Ariana Grande'],
    songs: ['Songs'],
    realese: 2024,
    duration: "2 hr 8 min",
  },

]