
function DayStickerRender({sticker}){


    return (
        <div>
            <img src={sticker.image}/>
            <h5>{sticker.name}</h5>
        </div>
        
    )
}

export default DayStickerRender