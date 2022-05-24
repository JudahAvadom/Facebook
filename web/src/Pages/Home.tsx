import React from 'react'
import LoginForm from '../Components/Auth/LoginForm'
import Footer from '../Components/util/Fooiter'

const Home = () => {
    return (
        <div className="home__wrapper">
            <section className="home__section">
                <LoginForm />
            </section>
            <Footer />
        </div>
    )
}

export default Home
