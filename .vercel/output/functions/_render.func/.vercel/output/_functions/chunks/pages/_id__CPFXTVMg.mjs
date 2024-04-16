/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, h as renderHead, i as renderTransition } from '../astro_CWJUlqew.mjs';
import 'kleur/colors';
import 'html-escaper';
import cn from 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { create } from 'zustand';
import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

const colors = {
  red: "from-red-500",
  orange: "from-orange-500",
  yellow: "from-yellow-500",
  green: "from-green-600",
  teal: "from-blue-300",
  blueLigth: "from-blue-500",
  blue: "from-blue-700",
  indigo: "from-blue-800",
  purple: "from-violet-500",
  pink: "from-pink-300",
  emerald: "from-emerald-500",
  rose: "from-pink-600",
  gray: "from-gray-500",
  grayLigth: "from-gray-200",
  white: "from-teal-200",
  dark: "from-gray-800"
};

const Albums = [
  {
    id: 1,
    title: "Chill Lo-Fi Music",
    cover: "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["NoSpirit", "Casiio"],
    songs: ["Songs"],
    realese: 2019,
    duration: "2 hr 21 min"
  },
  {
    id: 2,
    title: "Lo-Fi Chill Session",
    cover: "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Kupla", "Blue Fox"],
    category: "Popular",
    songs: ["Songs"],
    realese: 2019,
    duration: "2 hr 21 min"
  },
  {
    id: 3,
    title: "Study Session",
    cover: "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
    category: "Popular",
    songs: ["Songs"],
    realese: 2019,
    duration: "2 hr 21 min"
  },
  {
    id: 4,
    title: "Blue Note Study Time",
    cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"],
    category: "Popular",
    songs: ["Songs"],
    realese: 2024,
    duration: "2 hr 21 min"
  },
  {
    id: 5,
    title: "Chau Saura Session",
    cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
    category: "Popular",
    songs: ["Songs"],
    realese: 2019,
    duration: "2 hr 21 min"
  },
  {
    id: 6,
    title: "$AD BOYZ 4 LIFE II",
    cover: "https://i.scdn.co/image/ab67616d00001e02f3ba6742a35f111aaea1ca2f",
    artists: ["Junior H"],
    songs: ["Songs"],
    realese: 2023,
    duration: "2 hr 21 min"
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
    title: "This is Taylor Swift",
    cover: "https://i.scdn.co/image/ab67706f00000002d4b123e7ae0a84047ab62164",
    artists: ["Taylor Swift"],
    category: "Popular",
    songs: ["Songs"],
    realese: 2019,
    duration: "2 hr 21 min"
  },
  {
    id: 8,
    title: "This is Ariana Grande",
    cover: "https://i.scdn.co/image/ab67706f00000002cd8e2b103295bbd2749d8ea7",
    artists: ["Ariana Grande"],
    category: "Popular",
    songs: ["Songs"],
    realese: 2019,
    duration: "2 hr 21 min"
  },
  {
    id: 9,
    title: "This is Beyoncé",
    cover: "https://i.scdn.co/image/ab67706f000000023949408f182f99b49dc22ea9",
    artists: ["Beyoncé"],
    category: "Popular",
    songs: ["Songs"],
    realese: 2019,
    duration: "2 hr 21 min"
  },
  {
    id: 10,
    title: "This is Drake",
    cover: "https://i.scdn.co/image/ab67706f0000000287bff188c40608c48b82068f",
    artists: ["Drake"],
    category: "Popular",
    songs: ["Songs"],
    realese: 2019,
    duration: "2 hr 21 min"
  },
  {
    id: 11,
    title: "This is Dua Lipa",
    cover: "https://i.scdn.co/image/ab67706f0000000233e681991efbc60d92cc850c",
    artists: ["Dua Lipa"],
    category: "Popular",
    songs: ["Songs"],
    realese: 2019,
    duration: "2 hr 21 min"
  },
  {
    id: 12,
    title: "This is The Weekend",
    cover: "https://i.scdn.co/image/ab67706f00000002256e5fd2d2b6df5b9e98ac4e",
    artists: ["The Weekend"],
    category: "Popular",
    songs: ["Songs"],
    realese: 2019,
    duration: "2 hr 21 min"
  },
  /***** ALBUMS ******/
  {
    id: 13,
    title: "Lover",
    cover: "https://i.scdn.co/image/ab67616d00001e028481d8f15859aa5bae75ee17",
    artists: ["Taylor Swift"],
    category: "Popular",
    songs: ["Songs"],
    realese: 2019,
    duration: "2 hr 21 min"
  },
  {
    id: 14,
    title: "YHLQMDLG",
    cover: "https://i.scdn.co/image/ab67616d00001e02548f7ec52da7313de0c5e4a0",
    artists: ["Bad Bunny"],
    songs: ["Songs"],
    realese: 2020,
    duration: "2 hr 21 min"
  },
  {
    id: 15,
    title: "Cloud Nine",
    cover: "https://i.scdn.co/image/ab67616d00001e0235590cb9280d5a1f5221ae1a",
    artists: ["Kygo"],
    songs: ["Songs"],
    realese: 2016,
    duration: "2 hr 21 min"
  },
  {
    id: 16,
    title: "Nata Montana",
    cover: "https://i.scdn.co/image/ab67616d00001e02e2e093427065eaca9e2f2970",
    artists: ["Natanael Cano"],
    songs: ["Songs"],
    realese: 2023,
    duration: "2 hr 21 min"
  },
  {
    id: 17,
    title: "ICE BLUE",
    cover: "https://i.scdn.co/image/ab67616d00001e02e26dbe2e465595ebb5ebb282",
    artists: ["OPYI", "Birat Bitz"],
    songs: ["Songs"],
    realese: 2022,
    duration: "21 min 49 seg"
  },
  {
    id: 18,
    title: "Proof",
    cover: "https://i.scdn.co/image/ab67616d00001e0217db30ce3f081d6818a8ad49",
    artists: ["BTS"],
    songs: ["Songs"],
    realese: 2019,
    duration: "2 hr 8 min"
  },
  {
    id: 19,
    title: "eternal sunshine",
    cover: "https://i.scdn.co/image/ab67616d00001e02bd3de668e4784d791c4ab695",
    artists: ["Ariana Grande"],
    songs: ["Songs"],
    realese: 2024,
    duration: "2 hr 8 min"
  },
  {
    id: 20,
    title: "Fiesta! Fiesta!",
    cover: "https://i.scdn.co/image/ab67706f00000002d3ed7d314248889a4894eeae",
    artists: ["Peso Pluma", "Ariana Grande", "Karol G", "Feid", "Y más!"],
    songs: ["Songs"],
    realese: 2024,
    duration: "2 hr 8 min"
  },
  {
    id: 21,
    title: "Electrónica & Dance Music",
    cover: "https://i.scdn.co/image/ab67706f000000022bab08cc608f77ca29145a46",
    artists: ["Ariana Grande"],
    songs: ["Songs"],
    realese: 2024,
    duration: "2 hr 8 min"
  },
  {
    id: 22,
    title: "Viva Latino",
    cover: "https://i.scdn.co/image/ab67706f00000002ecb84988206660a358d7e1f4",
    artists: ["Ariana Grande"],
    songs: ["Songs"],
    realese: 2024,
    duration: "2 hr 8 min"
  },
  {
    id: 23,
    title: "Mansion Reggaetón",
    cover: "https://i.scdn.co/image/ab67706f000000024ced3d0af4cdf3897d0de3bf",
    artists: ["Ariana Grande"],
    songs: ["Songs"],
    realese: 2024,
    duration: "2 hr 8 min"
  },
  {
    id: 24,
    title: "Daily Mix 4",
    cover: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb73acb06e040e1133bd597fe4/4/en/default",
    artists: ["Ariana Grande"],
    songs: ["Songs"],
    realese: 2024,
    duration: "2 hr 8 min"
  },
  {
    id: 25,
    title: "Top México",
    cover: "https://i.scdn.co/image/ab67706f00000002ece28beba1da0b3d8dc521a5",
    artists: ["Ariana Grande"],
    songs: ["Songs"],
    realese: 2024,
    duration: "2 hr 8 min"
  }
];

const playlists = [
  /**** Albums With Music *****/
  {
    id: "1",
    albumId: Albums[0].id,
    title: Albums[0].title,
    color: colors.green,
    cover: Albums[0].cover,
    artists: Albums[0].artists
  },
  {
    id: "2",
    albumId: Albums[1].id,
    title: Albums[1].title,
    color: colors.blue,
    cover: Albums[1].cover,
    artists: Albums[1].artists
  },
  {
    id: "3",
    albumId: Albums[2].id,
    title: Albums[2].title,
    color: colors.indigo,
    cover: Albums[2].cover,
    artists: Albums[2].artists
  },
  {
    id: "4",
    albumId: Albums[3].id,
    title: Albums[3].title,
    color: colors.teal,
    cover: Albums[3].cover,
    artists: Albums[3].artists
  },
  {
    id: "5",
    albumId: Albums[4].id,
    title: Albums[4].title,
    color: colors.indigo,
    cover: Albums[4].cover,
    artists: Albums[4].artists
  },
  // $sad Boyz
  {
    id: "6",
    albumId: Albums[5].id,
    title: Albums[5].title,
    color: colors.gray,
    cover: Albums[5].cover,
    artists: Albums[5].artists
  }
];
const thisIs = [
  /* ------------------ This is Spotify -------------------------- */
  {
    id: "7",
    albumId: Albums[6].id,
    title: Albums[6].title,
    color: colors.grayLigth,
    cover: Albums[6].cover,
    artists: Albums[6].artists
  },
  {
    id: "8",
    albumId: Albums[7].id,
    title: Albums[7].title,
    color: colors.rose,
    cover: Albums[7].cover,
    artists: Albums[7].artists
  },
  {
    id: "9",
    albumId: Albums[8].id,
    title: Albums[8].title,
    color: colors.emerald,
    cover: Albums[8].cover,
    artists: Albums[8].artists
  },
  {
    id: "10",
    albumId: Albums[9].id,
    title: Albums[9].title,
    color: colors.blue,
    cover: Albums[9].cover,
    artists: Albums[9].artists
  },
  {
    id: "11",
    albumId: Albums[10].id,
    title: Albums[10].title,
    color: colors.teal,
    cover: Albums[10].cover,
    artists: Albums[10].artists
  },
  {
    id: "12",
    albumId: Albums[11].id,
    title: Albums[11].title,
    color: colors.dark,
    cover: Albums[11].cover,
    artists: Albums[11].artists
  }
];
const recently = [
  /* -------------- Albums ---------------------- */
  {
    id: "13",
    albumId: Albums[12].id,
    title: Albums[12].title,
    color: colors.teal,
    cover: Albums[12].cover,
    artists: Albums[12].artists
  },
  {
    id: "14",
    albumId: Albums[13].id,
    title: Albums[13].title,
    color: colors.indigo,
    cover: Albums[13].cover,
    artists: Albums[13].artists
  },
  {
    id: "15",
    albumId: Albums[14].id,
    title: Albums[14].title,
    color: colors.blueLigth,
    cover: Albums[14].cover,
    artists: Albums[14].artists
  },
  {
    id: "16",
    albumId: Albums[15].id,
    title: Albums[15].title,
    color: colors.indigo,
    cover: Albums[15].cover,
    artists: Albums[15].artists
  },
  {
    id: "17",
    albumId: Albums[16].id,
    title: Albums[16].title,
    color: colors.teal,
    cover: Albums[16].cover,
    artists: Albums[16].artists
  },
  {
    id: "18",
    albumId: Albums[17].id,
    title: Albums[17].title,
    color: colors.dark,
    cover: Albums[17].cover,
    artists: Albums[17].artists
  },
  {
    id: "19",
    albumId: Albums[18].id,
    title: Albums[18].title,
    color: colors.pink,
    cover: Albums[18].cover,
    artists: Albums[18].artists
  }
];
const popular = [
  /* ----------- Playlists --------------- */
  {
    id: "20",
    albumId: Albums[19].id,
    title: Albums[19].title,
    color: colors.indigo,
    cover: Albums[19].cover,
    artists: Albums[19].artists
  },
  {
    id: "21",
    albumId: Albums[20].id,
    title: Albums[20].title,
    color: colors.orange,
    cover: Albums[20].cover,
    artists: Albums[20].artists
  },
  {
    id: "22",
    albumId: Albums[21].id,
    title: Albums[21].title,
    color: colors.emerald,
    cover: Albums[21].cover,
    artists: Albums[21].artists
  },
  {
    id: "23",
    albumId: Albums[22].id,
    title: Albums[22].title,
    color: colors.teal,
    cover: Albums[22].cover,
    artists: Albums[22].artists
  },
  {
    id: "24",
    albumId: Albums[23].id,
    title: Albums[23].title,
    color: colors.grayLigth,
    cover: Albums[23].cover,
    artists: Albums[23].artists
  },
  {
    id: "25",
    albumId: Albums[24].id,
    title: Albums[24].title,
    color: colors.white,
    cover: Albums[24].cover,
    artists: Albums[24].artists
  }
];
const allPlaylists = [
  ...playlists,
  ...thisIs,
  ...recently,
  ...popular
  // ...morePlaylists,
  // ...sidebarPlaylists,
];

const songs = [
  {
    id: 1,
    albumId: 1,
    title: "Moonlit Walk",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: Albums[0].artists,
    album: "Chill Lo-Fi Music",
    duration: "3:12"
  },
  {
    id: 2,
    albumId: 1,
    title: "Coffee Daze",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: Albums[0].artists,
    album: "Chill Lo-Fi Music",
    duration: "4:07"
  },
  {
    id: 3,
    albumId: 1,
    title: "Skyline Serenade",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: Albums[0].artists,
    album: "Chill Lo-Fi Music",
    duration: "3:50"
  },
  {
    id: 4,
    albumId: 1,
    title: "Urban Echoes",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: Albums[0].artists,
    album: "Chill Lo-Fi Music",
    duration: "3:30"
  },
  {
    id: 5,
    albumId: 1,
    title: "Night's End",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: Albums[0].artists,
    album: "Chill Lo-Fi Music",
    duration: "4:20"
  },
  //Album with songs 2
  {
    id: 1,
    albumId: 2,
    title: "Silent Rain",
    image: Albums[1].cover,
    artists: Albums[1].artists,
    album: "Midnight Tales",
    duration: "3:40"
  },
  {
    id: 2,
    albumId: 2,
    title: "Lost Pages",
    image: Albums[1].cover,
    artists: Albums[1].artists,
    album: "Midnight Tales",
    duration: "3:20"
  },
  {
    id: 3,
    albumId: 2,
    title: "Midnight Tales",
    image: Albums[1].cover,
    artists: Albums[1].artists,
    album: "Midnight Tales",
    duration: "3:50"
  },
  {
    id: 4,
    albumId: 2,
    title: "City Lights",
    image: Albums[1].cover,
    artists: Albums[1].artists,
    album: "Midnight Tales",
    duration: "3:30"
  },
  {
    id: 5,
    albumId: 2,
    title: "Night Drive",
    image: Albums[1].cover,
    artists: Albums[1].artists,
    album: "Midnight Tales",
    duration: "4:20"
  },
  //Album withs songs 3
  {
    id: 1,
    albumId: 3,
    title: "Lunar",
    image: Albums[2].cover,
    artists: Albums[2].artists,
    album: "Study Session",
    duration: "3:40"
  },
  {
    id: 2,
    albumId: 3,
    title: "Go go go!",
    image: Albums[2].cover,
    artists: Albums[2].artists,
    album: "Study Session",
    duration: "3:20"
  },
  {
    id: 3,
    albumId: 3,
    title: "Keep focus!",
    image: Albums[2].cover,
    artists: Albums[2].artists,
    album: "Study Session",
    duration: "2:40"
  },
  {
    id: 4,
    albumId: 3,
    title: "JavaScript is the way",
    image: Albums[2].cover,
    artists: Albums[2].artists,
    album: "Study Session",
    duration: "3:10"
  },
  {
    id: 5,
    albumId: 3,
    title: "No more TypeScript for me",
    image: Albums[2].cover,
    artists: Albums[2].artists,
    album: "Study Session",
    duration: "2:10"
  },
  // Album with songs 4
  {
    id: 1,
    albumId: 4,
    title: "Lunar",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:40"
  },
  {
    id: 2,
    albumId: 4,
    title: "Go go go!",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:20"
  },
  {
    id: 3,
    albumId: 4,
    title: "Keep focus!",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:40"
  },
  {
    id: 4,
    albumId: 4,
    title: "JavaScript is the way",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:10"
  },
  {
    id: 5,
    albumId: 4,
    title: "No more TypeScript for me",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:10"
  },
  //Album with songs 5
  {
    id: 1,
    albumId: 5,
    title: "Moonlit Walk",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:12"
  },
  {
    id: 2,
    albumId: 5,
    title: "Coffee Daze",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:07"
  },
  {
    id: 3,
    albumId: 5,
    title: "Skyline Serenade",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:50"
  },
  {
    id: 4,
    albumId: 5,
    title: "Urban Echoes",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:30"
  },
  {
    id: 5,
    albumId: 5,
    title: "Night's End",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:20"
  },
  //Album with songs Junior H
  {
    id: 1,
    albumId: 6,
    title: "A TU NOMBRE",
    image: Albums[5].cover,
    artists: Albums[5].artists,
    album: "$AD BOYZ 4 LIFE II",
    duration: "3:12"
  },
  {
    id: 2,
    albumId: 6,
    title: "EN LA PEDA",
    image: Albums[5].cover,
    artists: Albums[5].artists,
    album: "$AD BOYZ 4 LIFE II",
    duration: "4:07"
  },
  {
    id: 3,
    albumId: 6,
    title: "ENTRE NOSOTROS",
    image: Albums[5].cover,
    artists: Albums[5].artists,
    album: "$AD BOYZ 4 LIFE II",
    duration: "3:50"
  },
  {
    id: 4,
    albumId: 6,
    title: "PARIS",
    image: Albums[5].cover,
    artists: Albums[5].artists,
    album: "$AD BOYZ 4 LIFE II",
    duration: "3:30"
  },
  {
    id: 5,
    albumId: 6,
    title: "EN LAS NOCHES",
    image: Albums[5].cover,
    artists: Albums[5].artists,
    album: "$AD BOYZ 4 LIFE II",
    duration: "4:20"
  },
  /*------Lover Taylor Swift -*/
  {
    id: 1,
    albumId: 13,
    title: "I Forgot That You Existed",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "2:50"
  },
  {
    id: 2,
    albumId: 13,
    title: "Cruel Summer",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "2:50"
  },
  {
    id: 3,
    albumId: 13,
    title: "Lover ",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "3:41"
  },
  {
    id: 4,
    albumId: 13,
    title: "The Man",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "3:10"
  },
  {
    id: 5,
    albumId: 13,
    title: "The Archer",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "3:31"
  },
  {
    id: 6,
    albumId: 13,
    title: "I Think He Knows",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "2:53"
  },
  {
    id: 7,
    albumId: 13,
    title: "Miss Americana & The Heartbreak Prince",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "3:54"
  },
  {
    id: 8,
    albumId: 13,
    title: "Paper Rings",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "3:42"
  },
  {
    id: 9,
    albumId: 13,
    title: "Cornelia Street",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "4:47"
  },
  {
    id: 10,
    albumId: 13,
    title: "Death By A Thousan Cuts",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "3:18"
  },
  {
    id: 11,
    albumId: 13,
    title: "Londo Boy",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "3:10"
  },
  {
    id: 12,
    albumId: 13,
    title: "Sonn You'll Get Better (feat. The Chicks)",
    image: Albums[12].cover,
    artists: ["Taylor Swift", "The Chicks"],
    album: "Lover",
    duration: "3:21"
  },
  {
    id: 13,
    albumId: 13,
    title: "False God",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "3:20"
  },
  {
    id: 14,
    albumId: 13,
    title: "You Need To Calm Down",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "3:51"
  },
  {
    id: 15,
    albumId: 13,
    title: "Afterglow",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "3:43"
  },
  {
    id: 16,
    albumId: 13,
    title: "ME! (feat. Brendon Urie of Panic At The Disco)",
    image: Albums[12].cover,
    artists: ["Taylor Swift", "feat. Brendon Urie of Panic At The Disco"],
    album: "Lover",
    duration: "3:13"
  },
  {
    id: 17,
    albumId: 13,
    title: "It's Nice To Have A Friend",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "2:30"
  },
  {
    id: 18,
    albumId: 13,
    title: "Daylight",
    image: Albums[12].cover,
    artists: ["Taylor Swift"],
    album: "Lover",
    duration: "4:53"
  },
  /*---------Bad Bunny YHLQMDLG------------ */
  {
    id: 1,
    albumId: 14,
    title: "Si Veo a Tu Mamá",
    image: Albums[13].cover,
    artists: ["Bad Bunny"],
    album: "YHLQMDLG",
    duration: "2:50"
  },
  {
    id: 2,
    albumId: 14,
    title: "La Difícil",
    image: Albums[13].cover,
    artists: ["Bad Bunny"],
    album: "YHLQMDLG",
    duration: "2:43"
  },
  {
    id: 3,
    albumId: 14,
    title: "Pero Ya No",
    image: Albums[13].cover,
    artists: ["Bad Bunny"],
    album: "YHLQMDLG",
    duration: "2:40"
  },
  {
    id: 4,
    albumId: 14,
    title: "La Santa",
    image: Albums[13].cover,
    artists: ["Bad Bunny", "Daddy Yankee"],
    album: "YHLQMDLG",
    duration: "3:26"
  },
  {
    id: 5,
    albumId: 14,
    title: "Yo Perreo Sola",
    image: Albums[13].cover,
    artists: ["Bad Bunny"],
    album: "YHLQMDLG",
    duration: "3:31"
  },
  {
    id: 6,
    albumId: 14,
    title: "Bichiyal",
    image: Albums[13].cover,
    artists: ["Bad Bunny", "Yaviah"],
    album: "YHLQMDLG",
    duration: "3:16"
  },
  {
    id: 7,
    albumId: 14,
    title: "Soliá",
    image: Albums[13].cover,
    artists: ["Bad Bunny"],
    album: "YHLQMDLG",
    duration: "2:39"
  },
  {
    id: 8,
    albumId: 14,
    title: "La Zona",
    image: Albums[13].cover,
    artists: ["Bad Bunny"],
    album: "YHLQMDLG",
    duration: "2:16"
  },
  {
    id: 9,
    albumId: 14,
    title: "Que Malo",
    image: Albums[13].cover,
    artists: ["Bad Bunny", "Ñengo Flow"],
    album: "YHLQMDLG",
    duration: "2:47"
  },
  {
    id: 10,
    albumId: 14,
    title: "Vete",
    image: Albums[13].cover,
    artists: ["Bad Bunny"],
    album: "YHLQMDLG",
    duration: "3:12"
  },
  {
    id: 11,
    albumId: 14,
    title: "Ignorantes",
    image: Albums[13].cover,
    artists: ["Bad Bunny", "Sech"],
    album: "YHLQMDLG",
    duration: "3:30"
  },
  {
    id: 12,
    albumId: 14,
    title: "A Tu Merced",
    image: Albums[13].cover,
    artists: ["Bad Bunny"],
    album: "YHLQMDLG",
    duration: "2:55"
  },
  {
    id: 13,
    albumId: 14,
    title: "Una Vez",
    image: Albums[13].cover,
    artists: ["Bad Bunny", "Mora"],
    album: "YHLQMDLG",
    duration: "3:52"
  },
  {
    id: 14,
    albumId: 14,
    title: "Safaera",
    image: Albums[13].cover,
    artists: ["Bad Bunny", "Jowell & Randy", "Ñengo Flow"],
    album: "YHLQMDLG",
    duration: "4:55"
  },
  {
    id: 15,
    albumId: 14,
    title: "25/8",
    image: Albums[13].cover,
    artists: ["Bad Bunny"],
    album: "YHLQMDLG",
    duration: "4:03"
  },
  {
    id: 16,
    albumId: 14,
    title: "Está Cabrón Ser Yo",
    image: Albums[13].cover,
    artists: ["Bad Bunny", "Anuel AA"],
    album: "YHLQMDLG",
    duration: "3:47"
  },
  {
    id: 17,
    albumId: 14,
    title: "Puesto Pa' Guerrial",
    image: Albums[13].cover,
    artists: ["Bad Bunny", "Myke Towers"],
    album: "YHLQMDLG",
    duration: "3:10"
  },
  {
    id: 18,
    albumId: 14,
    title: "P FKN R",
    image: Albums[13].cover,
    artists: ["Bad Bunny", "Kendo Kaponi", "Arcángel"],
    album: "YHLQMDLG",
    duration: "4:18"
  },
  {
    id: 19,
    albumId: 14,
    title: "Hablamos Mañana",
    image: Albums[13].cover,
    artists: ["Bad Bunny", "Duki", "Pablo Chill-E"],
    album: "YHLQMDLG",
    duration: "4:00"
  },
  {
    id: 20,
    albumId: 14,
    title: "<3",
    image: Albums[13].cover,
    artists: ["Bad Bunny"],
    album: "YHLQMDLG",
    duration: "2:37"
  },
  /*---------Kygo ------------ */
  {
    id: 1,
    albumId: 15,
    title: "Intro",
    image: Albums[14].cover,
    artists: ["Kygo"],
    album: "Cloud Nine",
    duration: "2:08"
  },
  {
    id: 2,
    albumId: 15,
    title: "Stole the Show",
    image: Albums[14].cover,
    artists: ["Kygo"],
    album: "Cloud Nine",
    duration: "3:43"
  },
  {
    id: 3,
    albumId: 15,
    title: "Fiction (feat. Tom Odell)",
    image: Albums[14].cover,
    artists: ["Kygo", "Tom Odell"],
    album: "Cloud Nine",
    duration: "4:03"
  },
  {
    id: 4,
    albumId: 15,
    title: "Raging (feat. Kodaline)",
    image: Albums[14].cover,
    artists: ["Kygo", "Kodaline"],
    album: "Cloud Nine",
    duration: "3:44"
  },
  {
    id: 5,
    albumId: 15,
    title: "Firestone",
    image: Albums[14].cover,
    artists: ["Kygo", "Conrad Sewell"],
    album: "Cloud Nine",
    duration: "4:31"
  },
  {
    id: 6,
    albumId: 15,
    title: "Happy Birthday (feat. John Legend)",
    image: Albums[14].cover,
    artists: ["Kygo", "John Legend"],
    album: "Cloud Nine",
    duration: "4:10"
  },
  {
    id: 7,
    albumId: 15,
    title: "I'm in Love (feat. James Vincent McMorrow)",
    image: Albums[14].cover,
    artists: ["Kygo", "James Vincent McMorrow"],
    album: "Cloud Nine",
    duration: "3:32"
  },
  {
    id: 8,
    albumId: 15,
    title: "Oasis (feat.Foxes)",
    image: Albums[14].cover,
    artists: ["Kygo", "Foxes"],
    album: "Cloud Nine",
    duration: "3:57"
  },
  {
    id: 9,
    albumId: 15,
    title: "Not Alone (feat. RHODES)",
    image: Albums[14].cover,
    artists: ["Kygo", "RHODES"],
    album: "Cloud Nine",
    duration: "3:25"
  },
  {
    id: 10,
    albumId: 15,
    title: "Serious(feat. Matt Corby)",
    image: Albums[14].cover,
    artists: ["Kygo", "Matt Corby"],
    album: "Cloud Nine",
    duration: "3:54"
  },
  {
    id: 11,
    albumId: 15,
    title: "Stay (feat. Maty Noyes)",
    image: Albums[14].cover,
    artists: ["Kygo", "Maty Noyes"],
    album: "Cloud Nine",
    duration: "3:59"
  },
  {
    id: 12,
    albumId: 15,
    title: "Nothing Left (feat. Will Heard)",
    image: Albums[14].cover,
    artists: ["Kygo", "Will Heard"],
    album: "Cloud Nine",
    duration: "3:56"
  },
  {
    id: 13,
    albumId: 15,
    title: "Fragile",
    image: Albums[14].cover,
    artists: ["Kygo", "Labrinth"],
    album: "Cloud Nine",
    duration: "3:50"
  },
  {
    id: 14,
    albumId: 15,
    title: "Carry Me (feat. Julia Michaels)",
    image: Albums[14].cover,
    artists: ["Kygo", "Julia Michaels"],
    album: "Cloud Nine",
    duration: "3:53"
  },
  {
    id: 15,
    albumId: 15,
    title: "For What It's Worth (feat. Angus & Julia Stone)",
    image: Albums[14].cover,
    artists: ["Kygo", "Angus & Julia Stone"],
    album: "Cloud Nine",
    duration: "3:03"
  },
  /*-------Nata Montana--------- */
  {
    id: 1,
    albumId: 16,
    title: "Díran de Mi",
    image: Albums[15].cover,
    artists: ["Natanael Cano", "Tito Torbellino Jr"],
    album: "Nata Montana",
    duration: "2:41"
  },
  {
    id: 2,
    albumId: 16,
    title: "Mas Altas Que Bajadas",
    image: Albums[15].cover,
    artists: ["Natanael Cano"],
    album: "Nata Montana",
    duration: "3:13"
  },
  {
    id: 3,
    albumId: 16,
    title: "La Lokerona",
    image: Albums[15].cover,
    artists: ["Natanael Cano", "HERNAN TREJO"],
    album: "Nata Montana",
    duration: "3:14"
  },
  {
    id: 4,
    albumId: 16,
    title: "Un Convoy",
    image: Albums[15].cover,
    artists: ["Natanael Cano", "Amilkar Galaviz"],
    album: "Nata Montana",
    duration: "2:38"
  },
  {
    id: 5,
    albumId: 16,
    title: "YPancake",
    image: Albums[15].cover,
    artists: ["Natanael Cano", "Peso Pluma"],
    album: "Nata Montana",
    duration: "3:02"
  },
  {
    id: 6,
    albumId: 16,
    title: "Viejo Lobo",
    image: Albums[15].cover,
    artists: ["Natanael Cano", "Luis R Conriquez"],
    album: "Nata Montana",
    duration: "2:50"
  },
  {
    id: 7,
    albumId: 16,
    title: "AFS",
    image: Albums[15].cover,
    artists: ["Natanael Cano"],
    album: "Nata Montana",
    duration: "4:02"
  },
  {
    id: 8,
    albumId: 16,
    title: "Eres",
    image: Albums[15].cover,
    artists: ["Natanael Cano", "Junior H"],
    album: "Nata Montana",
    duration: "2:52"
  },
  {
    id: 9,
    albumId: 16,
    title: "Mi Bello Angel",
    image: Albums[15].cover,
    artists: ["Natanael Cano"],
    album: "Nata Montana",
    duration: "3:08"
  },
  {
    id: 10,
    albumId: 16,
    title: "En Corto",
    image: Albums[15].cover,
    artists: ["Natanael Cano", "Chino Pacas"],
    album: "Nata Montana",
    duration: "3:02"
  },
  {
    id: 11,
    albumId: 16,
    title: "AMG",
    image: Albums[15].cover,
    artists: ["Natanael Cano", "Peso Pluma", "Gabito Ballesteros"],
    album: "Nata Montana",
    duration: "2:54"
  },
  {
    id: 12,
    albumId: 16,
    title: "Como Es Arriba Es Abajo",
    image: Albums[15].cover,
    artists: ["Natanael Cano", "Dan Sanchez"],
    album: "Nata Montana",
    duration: "2:45"
  },
  {
    id: 13,
    albumId: 16,
    title: "Pacas De Billetes",
    image: Albums[15].cover,
    artists: ["Natanael Cano"],
    album: "Nata Montana",
    duration: "3:08"
  },
  {
    id: 14,
    albumId: 16,
    title: "Dando y Dando",
    image: Albums[15].cover,
    artists: ["Natanael Cano"],
    album: "Nata Montana",
    duration: "2:34"
  },
  {
    id: 15,
    albumId: 16,
    title: "Ghini",
    image: Albums[15].cover,
    artists: ["Natanael Cano"],
    album: "Nata Montana",
    duration: "2:36"
  },
  /*-------ICE BLUE--------- */
  {
    id: 1,
    albumId: 17,
    title: "SEÑAL",
    image: Albums[16].cover,
    artists: ["OPYI", "Birat Bitz"],
    album: "ICE BLUE",
    duration: "3:02"
  },
  {
    id: 2,
    albumId: 17,
    title: "NADA",
    image: Albums[16].cover,
    artists: ["OPYI", "Birat Bitz"],
    album: "ICE BLUE",
    duration: "3:15"
  },
  {
    id: 3,
    albumId: 17,
    title: "DESPERTAR",
    image: Albums[16].cover,
    artists: ["OPYI", "Birat Bitz"],
    album: "ICE BLUE",
    duration: "3:31"
  },
  {
    id: 4,
    albumId: 17,
    title: "VICE",
    image: Albums[16].cover,
    artists: ["OPYI", "Birat Bitz"],
    album: "ICE BLUE",
    duration: "3:05"
  },
  {
    id: 5,
    albumId: 17,
    title: "GYAL",
    image: Albums[16].cover,
    artists: ["OPYI", "Birat Bitz"],
    album: "ICE BLUE",
    duration: "2:54"
  },
  {
    id: 6,
    albumId: 17,
    title: "BAHIA",
    image: Albums[16].cover,
    artists: ["OPYI", "Birat Bitz"],
    album: "ICE BLUE",
    duration: "3:01"
  },
  {
    id: 7,
    albumId: 17,
    title: "FENDI BAG",
    image: Albums[16].cover,
    artists: ["OPYI", "Birat Bitz"],
    album: "ICE BLUE",
    duration: "2:59"
  },
  /*-------Proof disc 1--------- */
  {
    id: 1,
    albumId: 18,
    title: "Born Singer",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:58"
  },
  {
    id: 2,
    albumId: 18,
    title: "No More Dream",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:42"
  },
  {
    id: 3,
    albumId: 18,
    title: "N.O",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:29"
  },
  {
    id: 4,
    albumId: 18,
    title: "Boy In Luv",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:51"
  },
  {
    id: 5,
    albumId: 18,
    title: "Danger",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "4:05"
  },
  {
    id: 6,
    albumId: 18,
    title: "I NEED U",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:30"
  },
  {
    id: 7,
    albumId: 18,
    title: "RUN",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:56"
  },
  {
    id: 8,
    albumId: 18,
    title: "Burning Up (FIRE)",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:23"
  },
  {
    id: 9,
    albumId: 18,
    title: "Blood Sweat & Tears",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:37"
  },
  {
    id: 10,
    albumId: 18,
    title: "Spring Day",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "4:34"
  },
  {
    id: 11,
    albumId: 18,
    title: "DNA",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:43"
  },
  {
    id: 12,
    albumId: 18,
    title: "fake love",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "4:02"
  },
  {
    id: 13,
    albumId: 18,
    title: "IDOL",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:42"
  },
  {
    id: 14,
    albumId: 18,
    title: "Boy With Luv (Feat. Hallsey)",
    image: Albums[17].cover,
    artists: ["BTS", "Halsey"],
    album: "Proof",
    duration: "4:55"
  },
  {
    id: 15,
    albumId: 18,
    title: "ON",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "4:06"
  },
  {
    id: 16,
    albumId: 18,
    title: "Dynamite",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:19"
  },
  {
    id: 17,
    albumId: 18,
    title: "Life Goes On",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:28"
  },
  {
    id: 18,
    albumId: 18,
    title: "Butter",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "2:44"
  },
  {
    id: 19,
    albumId: 18,
    title: "Yet To Come",
    image: Albums[17].cover,
    artists: ["BTS"],
    album: "Proof",
    duration: "3:13"
  },
  /*-------eternal sunshine--------- */
  {
    id: 1,
    albumId: 19,
    title: "intro (end of the world)",
    image: Albums[18].cover,
    artists: ["Ariana Grande"],
    album: "eternal sunshine",
    duration: "1:32"
  },
  {
    id: 2,
    albumId: 19,
    title: "bye",
    image: Albums[18].cover,
    artists: ["Ariana Grande"],
    album: "eternal sunshine",
    duration: "2:44"
  },
  {
    id: 3,
    albumId: 19,
    title: "don't wanna break up again",
    image: Albums[18].cover,
    artists: ["Ariana Grande"],
    album: "eternal sunshine",
    duration: "2:54"
  },
  {
    id: 4,
    albumId: 19,
    title: "Saturn Returns Interlude",
    image: Albums[18].cover,
    artists: ["Ariana Grande"],
    album: "eternal sunshine",
    duration: "0:42"
  },
  {
    id: 5,
    albumId: 19,
    title: "eternal sunshine",
    image: Albums[18].cover,
    artists: ["Ariana Grande"],
    album: "eternal sunshine",
    duration: "3:30"
  },
  {
    id: 6,
    albumId: 19,
    title: "supernatural",
    image: Albums[18].cover,
    artists: ["Ariana Grande"],
    album: "eternal sunshine",
    duration: "2:43"
  },
  {
    id: 7,
    albumId: 19,
    title: "true story",
    image: Albums[18].cover,
    artists: ["Ariana Grande"],
    album: "eternal sunshine",
    duration: "2:43"
  },
  {
    id: 8,
    albumId: 19,
    title: "the boy is mine",
    image: Albums[18].cover,
    artists: ["Ariana Grande"],
    album: "eternal sunshine",
    duration: "2:16"
  },
  {
    id: 9,
    albumId: 19,
    title: "yes, and?",
    image: Albums[18].cover,
    artists: ["Ariana Grande"],
    album: "eternal sunshine",
    duration: "3:34"
  },
  {
    id: 10,
    albumId: 19,
    title: "we can't be friends (wait for your love)",
    image: Albums[18].cover,
    artists: ["Ariana Grande"],
    album: "eternal sunshine",
    duration: "3:48"
  },
  {
    id: 11,
    albumId: 19,
    title: "i wish i hated you",
    image: Albums[18].cover,
    artists: ["Ariana Grande"],
    album: "eternal sunshine",
    duration: "2:33"
  },
  {
    id: 12,
    albumId: 19,
    title: "imperfect for you",
    image: Albums[18].cover,
    artists: ["Ariana Grande"],
    album: "eternal sunshine",
    duration: "3:02"
  },
  {
    id: 13,
    albumId: 19,
    title: "ordinary things (feat. Nonna)",
    image: Albums[18].cover,
    artists: ["Ariana Grande", "Nonna"],
    album: "eternal sunshine",
    duration: "2:48"
  }
];

const $$Astro$k = createAstro();
const $$SideMenuItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$SideMenuItem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a class="flex gap-4 items-center py-3 px-5 font-medium
        text-zinc-400 hover:text-zinc-100 
        transition duration-300"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/components/SideMenuItem.astro", void 0);

const $$Astro$j = createAstro();
const $$SideMenuCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$SideMenuCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-zinc-500"> <!-- Picture elemnto para envolver imagenes en vez de usar div --> <picture class="h-12 w-12 flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"> </picture> <div class="flex flex-auto flex-col truncate"> <h4 class="text-white text-sm"> ${title} </h4> <span class="text-xs text-gray-400"> ${artistsString} </span> </div> </a>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/components/SideMenuCard.astro", void 0);

const $$Astro$i = createAstro();
const $$Arrow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Arrow;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" fill="currentColor" aria-hidden="true" viewBox="0 0 16 16"> <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/Arrow.astro", void 0);

const $$Astro$h = createAstro();
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Create;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" fill="currentColor" aria-hidden="true" viewBox="0 0 16 16"> <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/Create.astro", void 0);

const $$Astro$g = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="20" width="20" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24"> <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/Home.astro", void 0);

const $$Astro$f = createAstro();
const $$Library = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Library;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24"> <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/Library.astro", void 0);

const $$Astro$e = createAstro();
const $$List = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$List;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16"> <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/List.astro", void 0);

const $$Astro$d = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" fill="currentColor" aria-hidden="true" viewBox="0 0 16 16"> <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/Search.astro", void 0);

const $$Astro$c = createAstro();
const $$AsideMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$AsideMenu;
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col flex-1 gap-2"> <div class="bg-zinc-900 rounded-lg p-2"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeIcon", $$Home, {})}
Home
` })} ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/#" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SearchIcon", $$Search, {})}
Search
` })} </ul> </div> <div class="bg-zinc-900 rounded-lg p-2 flex-1"> <div class="flex justify-between gap-4 items-center py-3 px-5 font-medium text-zinc-400 hover:text-zinc-100 
            transition duration-300"> <div class=" flex flex-row gap-4"> ${renderComponent($$result, "LibraryIcon", $$Library, {})}
Your Library
</div> <div class="flex  flex-row gap-4"> ${renderComponent($$result, "Create", $$Create, {})} ${renderComponent($$result, "Arrow", $$Arrow, {})} </div> </div> <!-- Todo Filters --> <div class="flex gap-2 items-center ml-2 overflow-x-hidden text-sm"> <button class="rounded-full bg-zinc-800 px-3 py-1 ">Playlists</button> <button class="rounded-full bg-zinc-800 px-3 py-1 ">Albums</button> <button class="rounded-full bg-zinc-800 px-3 py-1 ">Artists</button> <button class="rounded-full bg-zinc-800 px-3 py-1 grow-0" disabled aria-disabled="true">Podcast</button> </div> <div class="flex items-center justify-between mt-3 text-sm mx-4"> <button> ${renderComponent($$result, "Search", $$Search, {})} </button> <button class="flex gap-2">
Recents${renderComponent($$result, "List", $$List, {})} </button> </div> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" })} ${allPlaylists.map((playlist) => renderTemplate`${renderComponent($$result, "SideMenuCard", $$SideMenuCard, { "playlist": playlist })}`)} </ul> <!-- <CreatePlaylistIcon />
        <ArrowIcon /> --> </div> </nav>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/components/AsideMenu.astro", void 0);

const usePlayerStore = create ((set) => ({
    isPlaying: false,
    currentMusic: { playlist: null, song: null, songs: []},
    volume: 0.2,
    setVolume: (volume => set ({ volume })),
    setIsPlaying: (isPlaying) => set ({ isPlaying }),
    setCurrentMusic: (currentMusic) => set ( { currentMusic }) 
    

}));

const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex touch-none select-none items-center group",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-gray-800", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-primary bg-white group-hover:bg-green-400" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "hidden group-hover:block h-3 w-3  bg-white rounded-full border-2 border-primary bg-background \r\n    ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 \r\n    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

const Pause = ({ className }) => (
  // <Play />
  /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      role: "img",
      height: "16",
      width: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"
        }
      )
    }
  )
);
const Play = ({ className }) => (
  // <Pause /> los componentes en astro no puede ser renderizados de esta manera
  /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      role: "img",
      height: "16",
      width: "16",
      "aria-hidden": "true",
      viewBox: "0 0 16 16",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
        }
      )
    }
  )
);
const NextSong = () => /* @__PURE__ */ jsx(
  "svg",
  {
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
      }
    )
  }
);
const PreviousSong = () => /* @__PURE__ */ jsx(
  "svg",
  {
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
      }
    )
  }
);
const RandomSong = ({ className }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"
        }
      )
    ]
  }
);
const RepeatSong = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"
      }
    )
  }
);
const VolumeSilence = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    id: "volume-icon",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"
        }
      )
    ]
  }
);
const VolumeHigh = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    id: "volume-icon",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"
        }
      )
    ]
  }
);
const NowPlaying = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx("path", { d: "M11.196 8 6 5v6l5.196-3z" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"
        }
      )
    ]
  }
);
const Lirycs = () => /* @__PURE__ */ jsx(
  "svg",
  {
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"
      }
    )
  }
);
const Queue = () => /* @__PURE__ */ jsx(
  "svg",
  {
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"
      }
    )
  }
);
const ConnectDevice = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
        }
      )
    ]
  }
);
const OpenMiniPlayer = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z"
        }
      )
    ]
  }
);
const FullScreen = () => /* @__PURE__ */ jsx(
  "svg",
  {
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"
      }
    )
  }
);
const AddSong = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"
        }
      )
    ]
  }
);
const Added = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"
      }
    )
  }
);
const CurrentSong = ({ image, title, artists }) => {
  const [liked, setLiked] = useState(false);
  const likedHandleClick = () => {
    setLiked(!liked);
  };
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-5 relative overflow-hidden`, children: [
    /* @__PURE__ */ jsx("picture", { className: "w-16 h-16 bg-zin-800 rounded-md shadow-lg overflow-hidden bg-zinc-900", children: /* @__PURE__ */ jsx("img", { src: image, alt: title }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm block", children: title }),
        /* @__PURE__ */ jsx("span", { className: "text-xs opacity-80", children: artists?.join(", ") })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: likedHandleClick, children: liked ? /* @__PURE__ */ jsx(Added, { className: "text-green-500" }) : /* @__PURE__ */ jsx(AddSong, {}) })
    ] })
  ] });
};
const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);
  const isVolumeSilenced = volume < 0.1;
  const handleClickVolume = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };
  return (
    // Player Options right
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-x-2 text-white", children: [
      /* @__PURE__ */ jsxs("button", { children: [
        " ",
        /* @__PURE__ */ jsx(NowPlaying, {}),
        " "
      ] }),
      /* @__PURE__ */ jsxs("button", { children: [
        " ",
        /* @__PURE__ */ jsx(Lirycs, {}),
        " "
      ] }),
      /* @__PURE__ */ jsxs("button", { children: [
        " ",
        /* @__PURE__ */ jsx(Queue, {}),
        " "
      ] }),
      /* @__PURE__ */ jsxs("button", { children: [
        " ",
        /* @__PURE__ */ jsx(ConnectDevice, {}),
        " "
      ] }),
      /* @__PURE__ */ jsx("button", { className: "opacity-70 hover:opacity-100 transition", onClick: handleClickVolume, children: volume < 0.1 ? /* @__PURE__ */ jsx(VolumeHigh, {}) : /* @__PURE__ */ jsx(VolumeSilence, {}) }),
      /* @__PURE__ */ jsx(
        Slider,
        {
          defaultValue: [100],
          max: 100,
          min: 0,
          value: [volume * 100],
          className: "w-[95px]",
          onValueChange: (value) => {
            const [newVolume] = value;
            const volumeValue = newVolume / 100;
            setVolume(volumeValue);
          }
        }
      ),
      /* @__PURE__ */ jsxs("button", { children: [
        " ",
        /* @__PURE__ */ jsx(OpenMiniPlayer, {}),
        " "
      ] }),
      /* @__PURE__ */ jsxs("button", { children: [
        " ",
        /* @__PURE__ */ jsx(FullScreen, {}),
        " "
      ] })
    ] })
  );
};
const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };
  const formatTime = (time) => {
    if (time == null)
      return `0:00`;
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const duration = audio?.current?.duration ?? 0;
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2 text-xs pt-2", children: [
    /* @__PURE__ */ jsx("span", { className: "opacity-50 w-12 text-right", children: formatTime(currentTime) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        value: [currentTime],
        max: audio?.current?.duration ?? 0,
        min: 0,
        className: "w-[400px]",
        onValueChange: (value) => {
          const [newCurrentTime] = value;
          audio.current.currentTime = newCurrentTime;
        }
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "opacity-50 w-12", children: duration ? formatTime(duration) : "0:00" })
  ] });
};
function Player() {
  const { currentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore((state) => state);
  const audioRef = useRef();
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    const { song, playlist } = currentMusic;
    if (song) {
      const src2 = `/music/${playlist?.id}/${song.id}.mp3`;
      audioRef.current.src = src2;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  }, [currentMusic]);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  let indice = null;
  indice = currentMusic.songs.findIndex((song) => song.id == currentMusic.song.id);
  let SkipBack = () => {
    if (indice == 0 || indice == 1) {
      indice = currentMusic.songs.length - 1;
      const src2 = `/music/${currentMusic.playlist?.id}/${indice}.mp3`;
      audioRef.current.src = src2;
      audioRef.current.play();
    } else {
      indice = indice - 1;
      const src2 = `/music/${currentMusic.playlist?.id}/${indice}.mp3`;
      audioRef.current.src = src2;
      audioRef.current.play();
    }
  };
  let SkipToNext = () => {
    if (indice == currentMusic.songs.length - 1) {
      indice = currentMusic.songs[0].id;
      const src2 = `/music/${currentMusic.playlist?.id}/${indice}.mp3`;
      audioRef.current.src = src2;
      audioRef.current.play();
    } else {
      indice = indice + 1;
      const src2 = `/music/${currentMusic.playlist?.id}/${indice}.mp3`;
      audioRef.current.src = src2;
      audioRef.current.play();
    }
  };
  const [active, setActive] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const randomSongs = () => {
    setActive(!active);
  };
  const repeatSongs = () => {
    setRepeat(!repeat);
    repeat ? src = `/music/${currentMusic.playlist?.id}/${currentMusic.songs.id}.mp3` : src = `/music/${currentMusic.playlist?.id}/${indice}.mp3`;
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row  justify-between w-full px-2 z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[200px]", children: /* @__PURE__ */ jsx(CurrentSong, { ...currentMusic.song }) }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center gap-4 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx("button", { onClick: randomSongs, children: active ? /* @__PURE__ */ jsx(RandomSong, { className: "text-green-500" }) : /* @__PURE__ */ jsx(RandomSong, {}) }),
        /* @__PURE__ */ jsxs("button", { onClick: SkipBack, children: [
          " ",
          /* @__PURE__ */ jsx(PreviousSong, {}),
          " "
        ] }),
        /* @__PURE__ */ jsx("button", { className: "bg-white rounded-full p-2", onClick: handleClick, children: isPlaying ? /* @__PURE__ */ jsx(Play, {}) : /* @__PURE__ */ jsx(Pause, {}) }),
        /* @__PURE__ */ jsxs("button", { onClick: SkipToNext, children: [
          " ",
          /* @__PURE__ */ jsx(NextSong, {}),
          " "
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: repeatSongs, children: repeat ? /* @__PURE__ */ jsx(RepeatSong, { className: "text-green-500" }) : /* @__PURE__ */ jsx(RepeatSong, {}) })
      ] }),
      /* @__PURE__ */ jsx(SongControl, { audio: audioRef }),
      /* @__PURE__ */ jsx("audio", { ref: audioRef })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center", children: /* @__PURE__ */ jsx(VolumeControl, {}) })
  ] });
}

const $$Astro$b = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$a = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none", "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="app" class="relative h-screen p-2 gap-2 flex items-stretch" data-astro-cid-sckkx6r4> <aside class="[grid-area:aside] flex flex-col overflow-y-auto" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AsideMenu", $$AsideMenu, { "data-astro-cid-sckkx6r4": true })} </aside> <main class="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto w-full" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="[grid-area:player] h-[80px]" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Player", Player, { "client:load": true, "data-astro-transition-persist": "media-player", "client:component-hydration": "load", "client:component-path": "@/components/Player", "client:component-export": "Player", "data-astro-cid-sckkx6r4": true, "data-astro-transition-scope": renderTransition($$result, "p74ezckc", "", "media-player") })} </footer> </div> <!-- Grid -->   </body> </html>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/layouts/Layout.astro", "self");

const $$Astro$9 = createAstro();
const $$Added = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Added;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/Added.astro", void 0);

const $$Astro$8 = createAstro();
const $$AddSong = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$AddSong;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path> <path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/AddSong.astro", void 0);

const $$Astro$7 = createAstro();
const $$Time = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Time;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path> <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/Time.astro", void 0);

const $$Astro$6 = createAstro();
const $$MusicsTable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MusicsTable;
  const { songs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="table-auto text-left min-w-full divide-y-2 divide-gray-500/20 
hover:bg-white/10 rounded-lg overflow-hidden"> <thead class=""> <tr class="text-gray-300 text-sm font-light"> <th class="px-4 py-2 font-light">#</th> <th class="px-4 py-2 font-light">Title</th> <th class="px-4 py-2 font-light">Album</th> <th class=" font-light"></th> <th class="px-1 py-2 font-light">${renderComponent($$result, "Time", $$Time, {})}</th> </tr> </thead> <tbody> <tr class="h-[16px]"></tr> ${songs.map((song, index) => renderTemplate`<tr class="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 
            overflow-hidden transition duration-300"> <td class="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">${index + 1}</td> <td class="px-4 py-2 flex gap-3"> <picture class="flex gap-2"> <img${addAttribute(song.image, "src")}${addAttribute(song.title, "alt")} class="w-11 h-11"> <div class="flex flex-col"> <h3 class="text-white text-base font-normal">${song.title}</h3> <span>${song.artists.join(", ")}</span> </div> </picture> </td> <td class="px-4 py-2">${song.album}</td> <div class="flex flex-row"> <td> <button> ${renderTemplate`${renderComponent($$result, "Added", $$Added, {})}`} </button> </td> <td class=""> ${song.duration} </td> </div> </tr>`)} </tbody> </table> <!-- Degradado 
         <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"  >
        </div> -->`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/components/MusicsTable.astro", void 0);

function CardPlayButton({ id, size = "small" }) {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;
  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/get-info-playlist.json?id=${id}`).then((res) => res.json()).then((data) => {
      const { songs, playlist } = data;
      setIsPlaying(true);
      setCurrentMusic({ songs, playlist, song: songs[0] });
    });
  };
  const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";
  return /* @__PURE__ */ jsx("button", { onClick: handleClick, className: "card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400", children: isPlayingPlaylist ? /* @__PURE__ */ jsx(Play, { className: iconClassName }) : /* @__PURE__ */ jsx(Pause, { className: iconClassName }) });
}

const $$Astro$5 = createAstro();
const $$Back = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Back;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16"> <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/Back.astro", void 0);

const $$Astro$4 = createAstro();
const $$Front = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Front;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16"> <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/Front.astro", void 0);

const $$Astro$3 = createAstro();
const $$Install = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Install;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" fill="currentColor" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"> <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path> <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/Install.astro", void 0);

const $$Astro$2 = createAstro();
const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$News;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path> </svg>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/icons/News.astro", void 0);

const $$Astro$1 = createAstro();
const $$NavMain = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavMain;
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-row items-center justify-between  mt-3 mx-6 text-sm"> <div class="flex flex-row gap-2 "> <div class="flex bg-slate-500/10 rounded-full p-2"> <a href="/"> ${renderComponent($$result, "Back", $$Back, {})} </a> </div> <div class="flex bg-slate-500/10 rounded-full p-2"> ${renderComponent($$result, "Front", $$Front, {})} </div> </div> <div class="flex gap-2 items-center"> <button class="rounded-full items-center bg-zinc-200/80 pl-3 pr-3 pb-1.5 pt-1.5 text-black">Explore Premium</button> <button class="flex gap-1 rounded-full items-center bg-slate-500/10 pl-3 pr-3 pb-1.5 pt-1.5"> ${renderComponent($$result, "Install", $$Install, {})} <a target="_blank" href="https://www.spotify.com/mx/download/windows/">Install App</a> </button> <button class="items-center bg-slate-500/10 p-2 rounded-full "> ${renderComponent($$result, "News", $$News, {})} </button> <button class="items-center bg-slate-500/10 p-1 rounded-full "> <img class="w-6 h-6 rounded-full" src="/public/images/user.webp" alt="Gustavo"> </button> </div> </nav>`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/components/NavMain.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find((playlist2) => playlist2.id === id);
  const playListSongs = songs.filter((song) => song.albumId === playlist?.albumId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify Free Music Clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative flex flex-col h-full bg-zinc-900 overflow-x-hidden"${addAttribute(renderTransition($$result2, "lwbbxtwc", "", `playlist ${id} box`), "data-astro-transition-scope")}> <!-- <PageHeader /> --> <!-- class="absolute inset-0 bg-gradient-to-t from-green-500 via-zinc-900/80 -z-[1]"--> <!--   \${playlist?.color} --> <header${addAttribute(`flex flex-col inset-0 bg-gradient-to-b ${playlist?.color} to-zinc-900/80`, "class")}> ${renderComponent($$result2, "NavMain", $$NavMain, {})} <div class="flex flex-row gap-8 px-6 mt-12"> <picture class="aspect-square w-52 h-52 flex-none  "> <img${addAttribute(playlist?.cover, "src")}${addAttribute(`Cover of ${playlist?.title}`, "alt")} class="object-cover w-full h-full shadow-lg"${addAttribute(renderTransition($$result2, "fqoafyvh", "", `playlist ${playlist?.id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col justify-between"> <h2 class="flex flex-1 items-end">Playlist</h2> <div> <h1 class="text-5xl font-bold block text-white"> ${playlist?.title} <span${addAttribute(renderTransition($$result2, "h7a2vprm", "", `playlist ${playlist?.id} title`), "data-astro-transition-scope")}></span> </h1> </div> <div class="flex-1 flex items-end"> <div class="text-sm text-gray-300 font-normal"> <div${addAttribute(renderTransition($$result2, "pxbg4ij5", "", `playlist ${playlist?.id} artists`), "data-astro-transition-scope")}> <span>${playlist?.artists.join(", ")}</span> </div> <p class="mt-1"> <span class="text-white">${playListSongs.length} canciones</span>,
                  3 h aproximadamente
</p> </div> </div> </div> </div> <div class="pl-6 pt-6"> ${renderComponent($$result2, "CardPlayButton", CardPlayButton, { "id": id, "client:load": true, "size": "large", "client:component-hydration": "load", "client:component-path": "@/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> </header> <section class="p-2"> ${renderComponent($$result2, "MusicsTable", $$MusicsTable, { "songs": playListSongs })} </section> </div> ` })}`;
}, "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/pages/playlist/[id].astro", "self");

const $$file = "C:/Users/Gustavo/Desktop/Midu/SpotifyApp/spotify-clone/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$NavMain as $, CardPlayButton as C, _id_ as _, allPlaylists as a, popular as b, $$Layout as c, playlists as p, recently as r, songs as s, thisIs as t };
