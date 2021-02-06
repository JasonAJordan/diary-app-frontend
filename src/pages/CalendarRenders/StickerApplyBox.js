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
//     <form>
//     <input type="radio" name="choice" value="yes"> Yes
//     <input type="radio" name="choice" value="no"> No
//     </form>

    const stickersMapped = user.stickers.map((sticker) => {
        return <UserStickers sticker={sticker} key={sticker.id}/>
    })

    return (
        <div> This will be quick sticker function box! 

            <button onClick={handleToggleMode}>Enable Adding a Sticker </button>

            <form onChange={handleStickerChange}>
                {stickersMapped}
            </form>
            
            
        </div>
    )


}

export default StickerApplyBox