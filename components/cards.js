import Link from "next/link"
const Cards = (props) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src={props.image} width="360" height="auto" />
                <div className="card-body">
                    <div className="row">
                        <p className="card-text">{props.nama}</p>
                        <Link href="https://wa.me/085608823931/?text=beli%sekarang ">
                            <a className="btn btn-sm btn-secondary">{props.title}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards