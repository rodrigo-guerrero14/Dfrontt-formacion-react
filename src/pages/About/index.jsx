import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Main from "../../components/Main"

function About(){
  return(
    <>
    <Header title={"About"}/>
      <Navbar />
      <Main >
        <p>About main</p>
      </Main>
      <Footer />
    </>
  )
}

export default About