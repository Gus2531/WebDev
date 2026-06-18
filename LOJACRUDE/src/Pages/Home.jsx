import { Link } from "react-router-dom";


function Home() {
  return (
    <div className=" mt-5">


      <div className="text-center">
        <div className="container">

        <div id="carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner " >
            <div class="carousel-item active">
              <img src="https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/d288bf76-08d1-40c8-a891-7b26ec0bb9de___046887f205fb1a3d1d1a307322893f96.jpg" class="d-block w-100" height={500} alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://www.riachuelo.com.br/_next/image?url=https%3A%2F%2Fmidia.fotos-riachuelo.com.br%2Ffotos%2Fmegamenu%2Fhome%2F2026%2Fjunho%2FMEC-2628%2F1%2FHero-MEC-2628-alto-inverno.jpg&w=1920&q=85" class="d-block w-100" height={500}alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/839ef658-e3ad-4f6d-ba6d-35b3097c481e___fda1359b5de1772754afc50cbfebe6e2.jpg" class="d-block w-100" height={500}alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>



        <div className="mt-5">
            <div className="d-flex ">
                <div>
                      <img
                        src="https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/32bf8e9e-7a0a-4b81-b5a7-a884b00f22a7___8576bb7ece73da1e78543329edf296f6.jpg"
                        alt="Imagem 1"
                        className="img-fluid d-block w-100"
                      />
                </div>

                <div>
                  <img
                    src="https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/e917f8df-a791-4043-b3f3-ab7ebbe30ea8___156d4f318cca0fa777ddc15bb3afdcb9.jpg"
                    alt="Imagem 2"
                    className="img-fluid d-block w-100"
                  />
                </div>

                <div>
                  <img
                    src="https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/38cee68b-3b9d-4450-a28c-7724eb0d7be4___15bbf4350f58bae88c9a4e46dcd6ea15.jpg"
                    alt="imagem 3"
                    className="img-fluid d-block w-100"
                  />
                </div>
            </div>
      </div>



        <div className="mt-4">


          <Link
            to="/produtos"
            className="btn btn-primary btn-lg"
          >
            Gerenciar Produtos
          </Link>


        </div>


      </div>


    </div>


  );
}


export default Home;
