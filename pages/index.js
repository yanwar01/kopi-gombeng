import CardsArtikel from "../components/cards-artikel"
import Cards2 from "../components/cards2"
import Layout from "../components/layout"
import Slider from "../components/slider"
import SubJudul from "../components/sub-judul"

const Home = () => {
  return (
    <Layout title="Kopi Gombeng">
      <Slider />
      <SubJudul sub="Produk"/>
      <section>
        <div className="album bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <Cards2 image="/image/1.jpg" nama="Kopi 1" title="Lihat Produk"/>
              <Cards2 image="/image/1.jpg" nama="Kopi 2" title="Lihat Produk"/>
              <Cards2 image="/image/1.jpg" nama="Kopi 3" title="Lihat Produk"/>
            </div>
          </div>
        </div>
      </section>
      <SubJudul sub="Artikel"/>
      <section>
        <div className="album bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <CardsArtikel image="/image/2.jpg" nama="Artikel 1" title="Lihat Artikel"/>
              <CardsArtikel image="/image/2.jpg" nama="Artikel 2" title="Lihat Artikel"/>
              <CardsArtikel image="/image/2.jpg" nama="Artikel 3" title="Lihat Artikel"/>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Home