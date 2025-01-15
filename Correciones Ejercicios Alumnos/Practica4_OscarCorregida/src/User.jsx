
function User(user) {
    /*if(this.props.src === undefined){
            imageToShow=Anonimous
        } else{
            imageToShow=this.props.src
        }*/
    return(
    <div id="box" style={{ backgroundColor: user.colorFondo ? user.colorFondo : "white"}}>
        <div id="image"><img src={user.src ? user.src : "../imgs/anonimo.png"} alt="" /></div>
        <div id="username">{user.username}</div>
    </div>)
}

export default User