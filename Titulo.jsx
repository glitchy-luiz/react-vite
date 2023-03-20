function Titulo(){

    let nome = "bingus"
    const url = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsproutsocial.com%2Finsights%2Fsocial-media-image-sizes-guide%2F&psig=AOvVaw3RUQ4sUrQEwEwdvk4XZGDa&ust=1679404404527000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjSmInL6v0CFQAAAAAdAAAAABAE"

    return (
    <div>
        <h1>coloque um titulo {nome}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est beatae corrupti, fugiat asperiores tempora maxime sequi laudantium reiciendis quam molestias dolores doloremque. Iste, perferendis sunt? Nesciunt repellat quos vel placeat!</p>
        <img src={url} alt="" />
    </div>
    )
}

export default Titulo