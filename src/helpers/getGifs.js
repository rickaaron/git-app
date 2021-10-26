export const GetGifs = async (title) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=m9s9rFuxzAPaizgjKinNt9lEEcCD3O8O&q=${title}&limit=25&offset=0&rating=g&lang=en`;
    const request = await fetch(url);
    const {data} = await request.json();
    return data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    } );
} 