function StickerCard({sticker, onDeleteSticker}){

    function onDeleteClick(event){

        //console.log(post.id)
        const id = sticker.id.toString()
        fetch(`http://localhost:3000/stickers/${id}`, {
            method: "DELETE",
        });
        onDeleteSticker(sticker);
    }


    return (
        <div key={sticker.id}>
        <h4>{sticker.name}</h4>
        <img src={sticker.image} width="80" height="80"/>
        <button onClick={onDeleteClick}>Delete</button>
        </div>
    )

}

export default StickerCard