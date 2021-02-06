
function DayStickerRender({sticker, handleDeleteSticker, dayStickers}){

    //THis is the day_sticker 

    const daySid = dayStickers.find( (dayS) => {
        return (sticker.id === dayS)
    })

    function handleDeleteClick(){
        //console.log(post.id)
        const id = sticker.id.toString()
        fetch(`http://localhost:3000/day_stickers/${id}`, {
            method: "DELETE",
        });
        handleDeleteSticker(sticker);
    }

    return (
        <div>
            <img src={sticker.image}/>
            <button onClick={handleDeleteClick}>Erase</button>
        </div>
        
    )
}

export default DayStickerRender