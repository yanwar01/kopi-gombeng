import Link from "next/link"
import { useRouter } from "next/router"
const Navbar = () => {
    const router = useRouter()
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand"><i className="fas fa-mug-hot me-3"></i>Kopi Gombeng</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className={router.pathname == "/"?"nav-link active":"nav-link"} aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/shop">
                                <a className={router.pathname == "/shop"?"nav-link active":"nav-link"} aria-current="page">Shop</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/artikel">
                                <a className={router.pathname == "/artikel"?"nav-link active":"nav-link"} aria-current="page">Artikel</a>
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link href="/keranjang">
                                <a className={router.pathname == "/keranjang"?"nav-link active":"nav-link"} aria-current="page">Keranjang</a>
                            </Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link href="/login">
                                <a className="btn btn-primary text-white ms-2 px-2" aria-current="page">Login</a>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar