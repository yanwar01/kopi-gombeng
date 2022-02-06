import Link from "next/link"
const CardsArtikel = (props) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src={props.image} width="360" height="auto" />
                <div className="card-body">
                    <div className="row">
                        <p className="card-text">{props.nama}</p>
                        <Link href="/artikel">
                            <a className="btn btn-sm btn-secondary">{props.title}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardsArtikel