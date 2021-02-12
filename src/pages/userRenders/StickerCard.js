function StickerCard({sticker, onDeleteSticker}){

    function onDeleteClick(event){

        //console.log(post.id)
        const id = sticker.id.toString()
        console.log(id)
        fetch(`http://localhost:3000/stickers/${id}`, {
            method: "DELETE",
        });
        onDeleteSticker(sticker);
    }


    return (
        <div key={sticker.id} className="sticker">
            <a>{sticker.name}</a>
            <button onClick={onDeleteClick}>x</button>
            <br/>
            <img src={sticker.image} width="80" height="80"/>
            
        </div>
    )

}

export default StickerCard