import Aside from "../../components/Aside";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

function Home(){
  return(
    <>
      <Header title={"Home"}/>
      <Navbar />
      <Aside />
      <Main>
        <Button variante={"cancelar"} text={"Cancelar"}/>
        <Button variante={"confirmar"} text={"Confirmar"}/>
      </Main>
      <Footer />
    </>
  )
}

export default Home