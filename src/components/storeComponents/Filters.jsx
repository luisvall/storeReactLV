import { handlerFilters } from "./filterHook";

export default function Filters({ products }) {

  const { handleFilter } = handlerFilters();
  const grados = products.map((product) => product.grados);
  const prs = Array.from(new Set(grados));
  
  return (
    <>
      <section className="filters">
        <div className="container centerFlex pb30">
          {prs.map((pr, i) => {
            return (
              <button value={pr} onClick={handleFilter} key={i}>
                {pr}
              </button>
            );
          })}
          <button value="all" onClick={handleFilter} key="1000">
            all
          </button>
        </div>
      </section>
    </>
  );
}
