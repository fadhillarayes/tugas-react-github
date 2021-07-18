import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Card/card.css";
import BlogImg from "../../Assets/Image/blog.jpeg";
import Review1 from "../../Assets/Image/bookreview1.jpeg";
import Review3 from "../../Assets/Image/bookreview3.jpeg";

const Card = () => {
  return (
    <div className="card">
      <h2 class="d-flex justify-content-center" style={{ color: "#079992;" }}>
        Posts
      </h2>
      <div className="card-group">
        <div className="card">
          <img
            src={Review3}
            className="card-img-top"
            style={{ width: "250px;" }}
            alt={"..."}
          />
          <div className="card-body">
            <h5 className="card-title">Cecilia and the Angle - Review</h5>
            <p className="card-text">
              Pernahkah engkau bertanya-tanya bagaimana jadinya jika manusia
              dapat melihat, atau bahkan berdialog, dengan malaikat? Apa saja
              pertanyaan yang hendak kauajukan?
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <a
                href={
                  "https://fadhillarayes.medium.com/ulasan-cecilia-and-the-angel-9dad07df4f8c"
                }
              >
                Read more...
              </a>
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={BlogImg}
            className="card-img-top"
            style={{ width: "350px;" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              Blog - Ada Kehampaan di Sekitar Kampusku
            </h5>
            <p className="card-text">
              Di tahun-tahun awal kuliah, setidak-tidaknya aku menemukan dua
              orang di Jalan Teknika, sebelah Utara Fakultas Biologi UGM,
              fakultasku. Yang satu laki-laki dengan gerobaknya. Yang satunya
              lagi laki-laki dengan karungnya. Laki-laki bergerobak lebih muda
              dibandingkan yang berkarung, aku melihat sekilas dari perawakan
              mereka.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <a href="https://fadhillarys.blogspot.com/">Read more...</a>
            </small>
          </div>
        </div>
        <div className="card">
          <img
            src={Review1}
            className="card-img-top"
            style={{ width: "250px;" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">The Newcomer - Review</h5>
            <p className="card-text">
              Kisah detektif selalu menarik minat bacaku berkali-kali lipat.
              Satu kisah datang dari Keigo Higashino dalam serial Detektif Kaga
              — The Newcomer. Membaca buku ini mengingatkanku pada satu kasus di
              Tanah Air.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <a
                href={
                  "https://fadhillarayes.medium.com/kemanusiaan-dalam-kasus-pembunuhan-ff530aa1dfa4"
                }
              >
                Read more...
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
