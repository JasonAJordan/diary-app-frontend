import UserStickers from "./UserStickers"

function StickerApplyBox({user, stickerMode, setStickerMode, setStickerSelected}){

    //console.log(user.stickers)

    function handleToggleMode(event){
        setStickerMode(!stickerMode)
    }

    function handleStickerChange(event){
        setStickerSelected(event.target.value)
        console.log(event.target.value, "stickerSelected")
    }

    const stickersMapped = user.stickers.map((sticker) => {
        return <UserStickers sticker={sticker} key={sticker.id}/>
    })

    return (
        <div> 
            {(stickerMode === true) ? <button onClick={handleToggleMode}>Stop Adding Stickers</button> :
            <button onClick={handleToggleMode}>Add a Sticker</button> }


            {(stickerMode === true)
                ?<form onChange={handleStickerChange}>
                    <div className="stickerBox">{stickersMapped}</div>
                </form>
                : null
            }

        </div>
    )


}

export default StickerApplyBox