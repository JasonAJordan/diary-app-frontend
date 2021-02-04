
function DayStickerRender({sticker, handleDeleteSticker}){


    function handleDeleteClick(){
        //console.log(post.id)
        const id = sticker.id.toString()
        fetch(`http://localhost:3000/stickers/${id}`, {
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