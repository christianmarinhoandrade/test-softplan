import { useSelector } from 'react-redux'
import { spinnerSelector } from 'store/spinner/selector'

import { Header, Navbar, Link, Footer, Spinner } from './styles'
import Logo from 'assets/img/softplan.png'

type DefaultProps = {
  children: JSX.Element
}

function DefaultContainer({ children }: DefaultProps) {
  const load = useSelector(spinnerSelector)

  return (
    <div className="App">
      <Header>
        <Navbar className={`container`}>
          <Link to="/pais/list" aria-label="Dogs - Home">
            <img src={Logo} alt="Logo" />
          </Link>
        </Navbar>
      </Header>
      <main className="AppBody">
        {load && <Spinner name="line-spin-fade-loader" />}
        <section className="container">{children}</section>
      </main>
      <Footer>
        <img src={Logo} alt="Logo" />

        <p>Softplan | {new Date().getFullYear()}</p>
      </Footer>
    </div>
  )
}

export default DefaultContainer
