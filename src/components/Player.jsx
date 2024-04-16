import { usePlayerStore } from '@/store/playerStore'
import { useEffect, useRef, useState } from 'react'
import { Slider } from './Slider'



/** Reproductor **/
export const Pause = ({ className }) => (
    // <Play />
    <svg 
        className={className}
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        // fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"
        ></path>
    </svg>
)

export const Play = ({ className }) => (
    // <Pause /> los componentes en astro no puede ser renderizados de esta manera
    <svg 
        className={className}
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        // fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z">
        </path>
    </svg>
)

export const NextSong = () => (
    <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z">     
        </path>
    </svg>

)

export const PreviousSong = () => (
    <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
        >
        </path>
    </svg>
)

export const RandomSong = ({ className }) => (
    <svg
        className={className}
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"
        >
        </path>
        <path
            d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"
        >
        </path>
    </svg>
)

export const RepeatSong = ({ className }) => (
    <svg
        className={ className }
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"
        >
        </path>
    </svg>
)

export const VolumeSilence = () => (
    <svg
        role="presentation"
        height="16"
        width="16"
        aria-hidden="true"
        id="volume-icon"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
            <path
            d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z">
            </path>
            <path
            d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z">
            </path>
    </svg>

)

export const VolumeHigh = () => (
    <svg
        role="presentation"
        height="16"
        width="16"
        aria-hidden="true"
        id="volume-icon"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z">
        </path>
        <path
            d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z">
        </path>
    </svg>
)

export const NowPlaying = () => (
    <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path d="M11.196 8 6 5v6l5.196-3z"></path>
        <path
            d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"
        >
        </path>
    </svg>
) 

export const Lirycs = () => (
    <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"
        >
        </path>
</svg>
)

export const Queue = () => (
    <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"
        >
        </path>
    </svg>
)

export const ConnectDevice = () => (
    <svg
        role="presentation"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"
        >
        </path>
        <path
            d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
        >
        </path>
    </svg>
)

export const OpenMiniPlayer = () => (
    <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z"
        >
        </path>
        <path
            d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z"
        >
        </path>
    </svg>
)

export const FullScreen = () => (
    <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path
            d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"
        >
        </path>
    </svg>
)

export const AddSong = () => (
    <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 16 16"
        >
        <path
            d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
        >
        </path>
        <path
            d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"
        >
        </path>
    </svg>
)

export const Added = ({className}) => (
    <svg
        className={className}
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 16 16"
        
        ><path
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"
        ></path>
    </svg>
)

const CurrentSong = ({ image, title, artists }) => {
    const [liked, setLiked] = useState(false)

    const likedHandleClick = () => {
        setLiked(!liked)
    }
    return (
        <div className={`flex items-center gap-5 relative overflow-hidden`}>
            <picture className="w-16 h-16 bg-zin-800 rounded-md shadow-lg overflow-hidden bg-zinc-900">
                <img src={image} alt={title} />
            </picture>

            <div className='flex gap-3 items-center'>
                <div className='flex flex-col'>
                    <h3 className='font-semibold text-sm block'>
                        {title}
                    </h3>
                    <span className='text-xs opacity-80'>
                        {artists?.join(', ')}
                    </span>
                </div>

                <button onClick={likedHandleClick}>
                {  
                liked 
                ? <Added className="text-green-500" /> 
                : <AddSong/> 
                }
                </button>
                
            </div>
        </div>
    )
}

const VolumeControl = () => {
    const volume= usePlayerStore(state => state.volume)
    const setVolume = usePlayerStore(state => state.setVolume)
    const previousVolumeRef = useRef(volume)
    
    const isVolumeSilenced = volume < 0.1

    const handleClickVolume = () => {
        if(isVolumeSilenced){
            setVolume(previousVolumeRef.current)
        } else {
            previousVolumeRef.current = volume
            setVolume(0)
        }
        
    }
    
    return (

        // Player Options right
        <div className='flex justify-center gap-x-2 text-white'>
            <button> <NowPlaying /> </button>
            <button> <Lirycs /> </button>
            <button> <Queue /> </button>
            <button> <ConnectDevice /> </button>
            <button className='opacity-70 hover:opacity-100 transition' onClick={handleClickVolume}>
                { volume < 0.1 ? <VolumeHigh /> : <VolumeSilence /> }
            </button>

            <Slider 
                defaultValue={[100]}
                max={100}
                min={0}
                value={[ volume * 100 ]}
                className='w-[95px]'
                onValueChange={(value) => {
                    const [newVolume] = value
                    const volumeValue = newVolume / 100
                    setVolume(volumeValue)
                }}
            />
            <button> <OpenMiniPlayer /> </button>
            <button> <FullScreen /> </button>
        </div>
    )
}

const SongControl = ({ audio }) => {
    const [currentTime, setCurrentTime] = useState(0)
    // const [durationn, setDurationn] = useState(0)

    // const handleLoadStart = (e) => {
    //     console.log(e.nativeElement.srcElement.src)
    // }

    useEffect(() => {
        audio.current.addEventListener('timeupdate', handleTimeUpdate)

        return () => {
            audio.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [])

    const handleTimeUpdate = () => {
        setCurrentTime(audio.current.currentTime)
        
    }

    const formatTime = time => {
        if(time == null) return `0:00`
        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60)

        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    const duration = audio?.current?.duration ?? 0
    


    return (
        <div className='flex gap-x-2 text-xs pt-2'>
            <span className='opacity-50 w-12 text-right'>{formatTime(currentTime)}</span>
            <Slider 
                value={[ currentTime ]}
                max={audio?.current?.duration ?? 0}
                min={0}
                className='w-[400px]'
                onValueChange={(value) => {
                    const [newCurrentTime] = value
                    audio.current.currentTime = newCurrentTime
                }}
            />
            <span className='opacity-50 w-12'>
                {duration ? formatTime(duration) : '0:00'}
            </span>
        </div>
    )

}



export function Player () {  
    const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore(state => state)
    

    const audioRef = useRef()
    const volumeRef = useRef(1)

    useEffect(() => {
        isPlaying 
            ?  audioRef.current.play()
            :  audioRef.current.pause()
    }, [isPlaying])

    useEffect(() => {
        audioRef.current.volume = volume
    }, [volume] )

    useEffect(() => {
      const { song, playlist, songs } = currentMusic    
      if(song){
        const src = `/music/${playlist?.id}/${song.id}.mp3`
        audioRef.current.src = src
        audioRef.current.volume = volume
        audioRef.current.play()
      }
      
    }, [currentMusic])

    // useEffect(() => {
    //     const duration = audio?.current?.duration ?? 0

    //     duration == audio?.current.duration
    //     ?  SkipToNext()
    //     :  audioRef.current.pause()
    
      
    // }, [isPlaying])
    
    

    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }
     
    // let [indice, setIndice] = useState(null)
    let indice = null
    indice = currentMusic.songs.findIndex( song => song.id == currentMusic.song.id )
    
    let SkipBack = () => {
        
        if(indice == 0 || indice == 1) {
            indice = currentMusic.songs.length - 1 
            const src = `/music/${currentMusic.playlist?.id}/${indice}.mp3`
            audioRef.current.src = src
            audioRef.current.play()
        }
        else {
            indice = indice - 1
            const src = `/music/${currentMusic.playlist?.id}/${indice}.mp3`
            audioRef.current.src = src
            audioRef.current.play()
        }
    }

    let SkipToNext = () => {
        if(indice == currentMusic.songs.length - 1 ) {
            indice = currentMusic.songs[0].id
            const src = `/music/${currentMusic.playlist?.id}/${indice}.mp3`
            audioRef.current.src = src
            audioRef.current.play()
        } 

        else {
            indice = indice + 1
            const src = `/music/${currentMusic.playlist?.id}/${indice}.mp3`
            audioRef.current.src = src
            audioRef.current.play()
        }
    }

    const [active, setActive] = useState(false)
    const [repeat, setRepeat] = useState(false)

    const randomSongs = () => {
        setActive(!active)
    } 

    const repeatSongs = () => {
        setRepeat(!repeat)
        repeat 
        ? src = `/music/${currentMusic.playlist?.id}/${currentMusic.songs.id}.mp3`
        : src = `/music/${currentMusic.playlist?.id}/${indice}.mp3`
    }


    
    
    
    return (

        <div className='flex flex-row  justify-between w-full px-2 z-50'>
            <div className="w-[200px]">
                <CurrentSong {...currentMusic.song} />
            </div>

            <div className='grid place-content-center gap-4 flex-1'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <div className='flex flex-row items-center justify-center gap-4'>
                    
                        <button  onClick={randomSongs} > 
                        {
                            active
                            ? <RandomSong  className="text-green-500" />     
                            : <RandomSong /> 
                        }
                        
                        </button>
                        <button onClick={SkipBack}> <PreviousSong  /> </button>

                        <button className='bg-white rounded-full p-2' onClick={ handleClick }>
                            {
                                isPlaying 
                                ? <Play/> 
                                : <Pause/>
                            }
                        </button>

                        <button onClick={ SkipToNext }> <NextSong  /> </button>

                        <button onClick={repeatSongs}> 
                            {
                                repeat 
                                ? <RepeatSong className="text-green-500" />
                                : <RepeatSong />
                            }
                        </button>

                    </div>
                    <SongControl audio={audioRef}/>
                    <audio ref={audioRef}/>
                </div>
            </div>

            <div className='grid place-content-center'>
                <VolumeControl />
            </div>

        </div>
    )
}