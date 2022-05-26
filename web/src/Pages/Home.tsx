import React, { useState } from 'react'
import LoginForm from '../Components/Auth/LoginForm'
import Footer from '../Components/util/Fooiter'
import Modal from '../Components/util/Modal'
import RegisterForm from '../Components/Auth/RegisterForm'

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="home__wrapper">
            <section className="home__section">
                <LoginForm handleSignUp={() => setShowModal((prev) => !prev)} />
            </section>
            <Modal visible={showModal}>
                <RegisterForm handleClose={() => setShowModal(false)} />
            </Modal>
            <Footer />
        </div>
    )
}

export default Home
