import { ContImg, Item } from './CastItem.styled'
import notImage from './not-image.png'
const CastItem = ({actors}) => {
    console.log(actors);

    
    return (
        <>
    {
        actors.map((el) => (
            <Item key={el.id}>
                <ContImg>
                <img src={!el.profile_path ? notImage : `https://image.tmdb.org/t/p/w200/${el.profile_path}`} alt={el.original_name} />
                </ContImg>
                <div>
                <p>{el.original_name}</p>
                <br />
                <p>{el.character}</p>
                </div>
            </Item>
        ))
        
    }
    </>
    )
}

export default CastItem;