const User=(props)=>{
    console.log(props)
    return(
        <div className="userInfo-container">
            <h2>Dhaval Joshi</h2>
            <h2>{props.data.name}</h2>
            <h3>Developing FUNCTIONAL based components</h3>
            <h4>joshidhaval2002@gmail.com</h4>
        </div>
    )
}

export default User;