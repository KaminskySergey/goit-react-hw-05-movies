const RevievsItem = ({revievItem}) => {
    console.log(revievItem);
    
    
    return (
        <>
        {
            revievItem.map((el) => (
                <li key={el.id}>
                    <div>
                        <h3>{el.author_details.username}</h3>
                        <p>{el.content}</p>
                    </div>
                </li>
            ))
        }
        </>
    )
}

export default RevievsItem;