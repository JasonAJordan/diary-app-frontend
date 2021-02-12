function UserStickers({sticker}){




    return (
        <div className="stickerCard"> 
                
                <span className="radio__input">
                    <a>{sticker.name}</a>

                    <label><input type="radio" name="choice" value={sticker.id}/></label>
                    {/* <span class="radio__control"></span> */}

                </span>
            
            <div className="image-center">
                <img src={sticker.image} alt={sticker.name} width="40" height="40" key={sticker.id}/>
            </div>
        </div>
    )
}

export default UserStickers

{/* <input type="radio" name="choice" value="yes"> */}

{/* <label class="radio">
  <span class="radio__input">
    <input type="radio" name="radio">
    <span class="radio__control"></span>
  </span>
  <span class="radio__label">Radio 1</span>
</label> */}