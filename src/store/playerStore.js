import { create } from "zustand";

export const usePlayerStore = create ((set) => ({
    isPlaying: false,
    currentMusic: { playlist: null, song: null, songs: []},
    volume: 0.2,
    setVolume: (volume => set ({ volume })),
    setIsPlaying: (isPlaying) => set ({ isPlaying }),
    setCurrentMusic: (currentMusic) => set ( { currentMusic }) 
    

}));
