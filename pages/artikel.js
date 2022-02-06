import CardsArtikel from "../components/cards-artikel"
import Hero from "../components/hero"
import Layout from "../components/layout"

const Artikel = () => {
    return (
        <Layout>
            <Hero title="Artikel" />
            <section>
                <div className="album bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
                            <CardsArtikel image="/image/2.jpg" nama="Artikel 1" title="Klik Disini"/>
                            <CardsArtikel image="/image/2.jpg" nama="Artikel 2" title="Klik Disini"/>
                            <CardsArtikel image="/image/2.jpg" nama="Artikel 3" title="Klik Disini"/>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-3">
                            <CardsArtikel image="/image/2.jpg" nama="Artikel 4" title="Klik Disini"/>
                            <CardsArtikel image="/image/2.jpg" nama="Artikel 5" title="Klik Disini"/>
                            <CardsArtikel image="/image/2.jpg" nama="Artikel 6" title="Klik Disini"/>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                            <CardsArtikel image="/image/2.jpg" nama="Artikel 7" title="Klik Disini"/>
                            <CardsArtikel image="/image/2.jpg" nama="Artikel 8" title="Klik Disini"/>
                            <CardsArtikel image="/image/2.jpg" nama="Artikel 9" title="Klik Disini"/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default Artikel