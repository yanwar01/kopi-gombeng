import Cards from "../components/cards"
import Hero from "../components/hero"
import Layout from "../components/layout"

const Shop = () => {
    return (
        <Layout>
            <Hero title="Produk" />
            <section>
                <div className="album bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
                            <Cards image="/image/2.jpg" title="Beli Sekarang" nama="Kopi 1" />
                            <Cards image="/image/2.jpg" title="Beli Sekarang" nama="Kopi 2" />
                            <Cards image="/image/2.jpg" title="Beli Sekarang" nama="Kopi 3" />
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
                            <Cards image="/image/2.jpg" title="Beli Sekarang" nama="Kopi 4" />
                            <Cards image="/image/2.jpg" title="Beli Sekarang" nama="Kopi 5" />
                            <Cards image="/image/2.jpg" title="Beli Sekarang" nama="Kopi 6" />
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <Cards image="/image/2.jpg" title="Beli Sekarang" nama="Kopi 7" />
                            <Cards image="/image/2.jpg" title="Beli Sekarang" nama="Kopi 8" />
                            <Cards image="/image/2.jpg" title="Beli Sekarang" nama="Kopi 9" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default Shop