
function DayStickerRender({sticker, handleDeleteSticker, dayStickers}){

    //THis is the day_sticker 

    let daySticker = dayStickers.find((dayS) => {
        return (sticker.id === dayS.sticker_id)
    })

    //console.log(dayStickers, "daystickers")

    function handleDeleteClick(){
        //console.log(post.id)
        //const id = sticker.id.toString()
        fetch(`http://localhost:3000/day_stickers/${daySticker.id}`, {
            method: "DELETE",
        });
        handleDeleteSticker(sticker, daySticker);
    }

    return (
        <div className="sticker-day">
            <img src={sticker.image} width="80" height="80"/>
            <button onClick={handleDeleteClick}><a>x</a></button>
        </div>
        
    )
}

export default DayStickerRender