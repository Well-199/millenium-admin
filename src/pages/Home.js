

const Home = () => {

    const isAuth = localStorage.getItem('token')
    console.log(isAuth)

    return(
        <div>Home</div>
    )
}

export default Home