import Axios from "axios";
import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Image,
  Row,
  Modal,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  const [article, setArticle] = useState([]);
  const [news, setNews] = useState([]);
  const [modalAlert, setModalAlert] = useState(false);

  const handleModal = () => {
    setModalAlert(!modalAlert);
  };

  Axios.get("https://648442b4ee799e3216266fea.mockapi.io/article")
    .then((res) => {
      setArticle(res.data);
    })
    .catch((err) => console.log("Gagal memuat data"));

  Axios.get("https://648442b4ee799e3216266fea.mockapi.io/news")
    .then((res) => {
      setNews(res.data);
    })
    .catch((err) => console.log("Gagal memuat data"));
  return (
    <main id="main">
      <div className="breadcrumbs">
        <nav>
          <div className="container">
            <ol>
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>Pilah sampah</li>
            </ol>
          </div>
        </nav>
      </div>

      <Container className="mt-4 section-header">
        <h2>Tentang Kami</h2>
        <Row>
          <Col md={6}>
            <h3 className="text-start">
              Selamat datang di website kami yang berfokus pada lingkungan dan
              pengelolaan sampah!
            </h3>
            <Image src="/environment.svg" />
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-start">
              <p className="mb-3">
                Kami ingin mengajak Anda untuk peduli terhadap lingkungan dan
                mengambil bagian dalam menjaga kebersihan dan kelestarian bumi
                kita. Kami menyadari bahwa masalah sampah merupakan masalah
                global yang sangat kompleks.
              </p>

              <p className="mb-3">
                Di sini, Anda akan menemukan berbagai artikel dan tips tentang
                cara mengurangi sampah, memilah sampah, dan mengelola limbah.
              </p>

              <p className="mb-3">
                Kami juga menyajikan berita terbaru tentang isu-isu lingkungan
                terkini dari berbagai sumber terpercaya.
              </p>

              <p className="mb-3">
                Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan
                atau ingin berbagi ide mengenai bagaimana kita semua dapat
                bersama-sama menjaga kelestarian lingkungan.
              </p>

              <p>Terima kasih telah mengunjungi website kami!.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        className="section-header"
        style={{ backgroundColor: "#f6f6f6" }}
        fluid
      >
        <h2 className="pt-4">Pilah Sampah</h2>
        <Row>
          <Col md={4}>
            <Card border="light" className="p-4">
              <Card.Img variant="top" src="/organik.svg" />
              <Card.Title>Organik</Card.Title>
              <a href="#" className="readmore stretched-link">
                Read more
              </a>
            </Card>
          </Col>

          <Col md={4}>
            <Card border="light" className="p-4">
              <Card.Img variant="top" src="/anorganik.svg" />
              <Card.Title>Anorganik</Card.Title>
              <a href="#" className="readmore stretched-link">
                Read more
              </a>
            </Card>
          </Col>

          <Col md={4}>
            <Card border="light" className="p-4">
              <Card.Img variant="top" src="/b3.svg" />
              <Card.Title>B3</Card.Title>
              <a href="#" className="readmore stretched-link">
                Read more
              </a>
            </Card>
          </Col>
        </Row>

        <h2 className="pt-4">Artikel</h2>
        <Row>
          {article.map((item) => (
            <Col>
              <Card style={{ minHeight: "100px" }} border="light" key={item.id}>
                <Card.Body>{item.title}</Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="pt-4">Berita</h2>
        <Row>
          {news.map((item) => (
            <Col>
              <Card style={{ minHeight: "100px" }} border="light" key={item.id}>
                <Card.Body>{item.title}</Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <section id="Contact" className="Contact">
        <div className="section-header">
          <h2>Kontak Kami</h2>
        </div>
        <div className="contact-container">
          <div className="form">
            <div className="contact-info">
              <h3 className="title">Let's get in touch</h3>
              <p className="text">
                Silahkan tinggalkan pesan Anda pada kolom yang tersedia
              </p>

              <div className="info">
                <div className="information">
                  <i className="fa-solid fa-map-location-dot icon"></i>
                  <p>
                    Jl. Simprug Golf 8 No. 6, RT.2/RW.8, Grogol Sel., Kec. Kby.
                    Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                    12220
                  </p>
                </div>
                <div className="information">
                  <i className="fa-solid fa-envelope icon"></i>
                  <p>info@skilvul.com</p>
                </div>
              </div>

              <div className="social-media">
                <p>Connect with Us</p>
                <div className="social-icons">
                  <a href="https://www.instagram.com/skilvul/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/skilvul">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/skilvul/mycompany/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <Modal show={modalAlert} onHide={setModalAlert}>
                <Modal.Header closeButton>
                  <Modal.Title>Pemberitahuan</Modal.Title>
                </Modal.Header>
                <Modal.Body>Pesan Terkirim</Modal.Body>
              </Modal>
              <form id="my-form">
                <h3 className="title">Kontak Kami</h3>
                <div className="input-container">
                  <input
                    type="text"
                    className="input"
                    placeholder=""
                    required
                  />
                  <label htmlFor="">Nama</label>
                  <span>Nama</span>
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    className="input"
                    placeholder=""
                    required
                  />
                  <label htmlFor="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input
                    type="telp"
                    className="input"
                    placeholder=""
                    required
                  />
                  <label htmlFor="">Telp</label>
                  <span>Telp</span>
                </div>
                <div className="input-container textarea">
                  <textarea name="message" className="input"></textarea>
                  <label htmlFor="">Pesan</label>
                  <span>Pesan</span>
                </div>
                <button onClick={handleModal} className="btn">
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
