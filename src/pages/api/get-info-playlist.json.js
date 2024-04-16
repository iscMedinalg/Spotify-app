import { allPlaylists} from "@/lib/data";
import { songs as allSongs } from "@/lib/songs"

// params
export async function GET({request}){
    // get the id from the url search params
    // const[, querystring] = url.split('?')
    // const searchParams = new URLSearchParams(querystring)
    const { url } = request
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get('id')

    const playlist = allPlaylists.find((playlist) => playlist.id === id)
    const songs = allSongs.filter(song => song.albumId === playlist?.albumId)

    return new Response(JSON.stringify({ playlist, songs }),{
        headers: { "content-type": "application/json" },
    })
}