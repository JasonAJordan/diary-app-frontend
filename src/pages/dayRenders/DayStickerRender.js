
function DayStickerRender({sticker, handleDeleteSticker, dayStickers, user}){

    //THis is the day_sticker 

    let daySticker = dayStickers.find((dayS) => {
        return (sticker.id === dayS.sticker_id)
    })

    console.log(dayStickers, "daystickers")

    function handleDeleteClick(){
        //console.log(post.id)
        //const id = sticker.id.toString()
        fetch(`http://localhost:3000/day_stickers/${daySticker.id}`, {
            method: "DELETE",
        });
        handleDeleteSticker(sticker, daySticker);
    }

    return (
        <div>
            <img src={sticker.image}/>
            <button onClick={handleDeleteClick}>Erase</button>
        </div>
        
    )
}

export default DayStickerRender