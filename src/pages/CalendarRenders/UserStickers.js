function UserStickers({sticker}){

    return (
        <div> 
            <h3>{sticker.name}</h3>
            <input type="radio" name="choice" value={sticker.id}/>
            <img src={sticker.image} alt={sticker.name} width="40" height="40" key={sticker.id}/>
        </div>
    )
}

export default UserStickers

{/* <input type="radio" name="choice" value="yes"> */}