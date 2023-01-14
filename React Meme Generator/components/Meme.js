import React from 'react'

function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://avatars.githubusercontent.com/u/80483910?v=4",
    });
    const [api, setApi] = React.useState( [] );
    React.useEffect( ()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then( res => res.json() )
        .then( data => setApi( data.data.memes ))
        .catch((error) => console.error(error) )
    }, [])
    function newMeme() {
        let randNum = Math.floor(Math.random()*api.length);
        let url = api[randNum].url
        setMeme( (prev) => {
            return {
                ...prev, 
                // randomImage: `https://picsum.photos/id/${randNum()}/720/500`
                randomImage: url
            }
        } )
        console.log(api[0].url)
    }
    function handleChange(event){
        setMeme( prev=>{
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

  return (
    <main className='container'>
        <div className='image-container'>
            <img 
            alt=''
            width="100%"
            height="100%"
            src={meme.randomImage} />
            <h2 className='top-text'>{meme.topText}</h2>
            <h2 className='bottom-text'>{meme.bottomText}</h2>
        </div>
        <div className='grid-container'>
            <input 
            className='input'
            placeholder='Top text...'
            onChange={handleChange}
            name="topText"
            value={meme.topText}
            />
            <input 
            className='input'
            placeholder='Bottom text...'
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
            />
            <button 
            onClick={newMeme}
            className='button'>Don't Click Me for a new Meme! Ugh!</button>
        </div>  
        {/* <p>{JSON.stringify(api[2])}</p> */}
        <p>14.1.2023-Cumartesi</p>
    </main>
  )
}

export default Meme