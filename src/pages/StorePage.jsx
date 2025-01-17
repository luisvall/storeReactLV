import ProductCard from "../components/ProductCard";
import { consumoApi } from "../components/api";
import'./StorePage.css'

export default function StorePage() {
  const licores = consumoApi()[1];
  //console.log(licores);

  const renderLicores = licores.map((licor) => (
    <ProductCard
      key={licor.id}
      img={licor.imagen}
      tittle={licor.nombre}
      desc={licor.descripcion}
      price={licor.precio}
      id={licor.id}
    />
  ));

  return (
    <section className="section productSection">
      <div className="container">
        <h1 className="storeTittle">Store</h1>
        <div className="products">{renderLicores}</div>
      </div>
    </section>
  );
}
