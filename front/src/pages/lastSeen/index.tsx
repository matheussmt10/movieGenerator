import { Header } from "../../components/Header"
import { Navbar } from "../../components/Navbar"
import { ContainerGenerator } from "../../components/Section"

function LastSeen() {
    return (
        <>
        <Header />
        <div style={{
            display: 'flex',
            width: '98vw',
            height: '88vh'
            }}>
        <Navbar />
        {/* <ContainerGenerator /> */}
        </div>
        </>
    )
  }
  
  export default LastSeen