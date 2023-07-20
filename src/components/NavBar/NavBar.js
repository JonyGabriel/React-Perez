import CartWidget from "./CartWidget/CartWidget"
const NavBar = () => {
  return (
    <nav>
      <h3 className="title">Compu SV</h3>
      <div className="navs">
        <div>
        <button type="button" class="btn btn-outline-light">Graficas</button>
        </div>
        <div>
        <button type="button" class="btn btn-outline-light">Hardware</button>
        </div>
          <div>
          <button type="button" class="btn btn-outline-light">PC Armadas</button>
        </div>
        <div>
        <CartWidget />
        </div>
      </div>
    
    </nav>
  )
}
export default NavBar