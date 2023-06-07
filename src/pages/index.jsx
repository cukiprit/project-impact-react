import { Button, Card, Col, Container, Row, Image } from "react-bootstrap";
import "../assets/css/styles.css";

function Index() {
  return (
    <>
      <Card className="text-white bg-dark">
        <Card.Img
          height="400px"
          style={{ objectFit: "fill" }}
          src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        />
        <Card.ImgOverlay>
          <h2>Mari peduli lingkungan sekitarmu</h2>
          <p>
            Yuk mulai langkah nyata peduli lingkungan dengan cara membuang
            sampah pada tempatnya dan jangan lupa untuk memilah sampah sesuai
            dengan jenisnya ya.
          </p>
          <Button>Get Started</Button>
          <Button>Watch Video</Button>
        </Card.ImgOverlay>
      </Card>

      <Container>
        <h1 className="text-center">Tentang Kami</h1>
        <Row>
          <Col>
            <Row>
              <Col sm={12}>
                <h1>
                  Selamat datang di website kami yang berfokus pada lingkungan
                  dan pengelolaan sampah!
                </h1>
              </Col>
              <Col>
                <img src="../assets/environtment.svg" />
              </Col>
            </Row>
          </Col>

          <Col>
            <p>
              Kami ingin mengajak Anda untuk peduli terhadap lingkungan dan
              mengambil bagian dalam menjaga kebersihan dan kelestarian bumi
              kita. Kami menyadari bahwa masalah sampah merupakan masalah global
              yang sangat kompleks
            </p>

            <p>
              Di sini, Anda akan menemukan berbagai artikel dan tips tentang
              cara mengurangi sampah, memilah sampah, dan mengelola limbah.
            </p>

            <p>
              Kami juga menyajikan berita terbaru tentang isu-isu lingkungan
              terkini dari berbagai sumber terpercaya.
            </p>

            <p>
              Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan
              atau ingin berbagi ide mengenai bagaimana kita semua dapat
              bersama-sama menjaga kelestarian lingkungan.
            </p>

            <p>Terima kasih telah mengunjungi website kami!.</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <h1>Pilah Sampah</h1>

        <Row>
          <Col>
            <img src="../assets/organik.svg" />
            <h4>Organik</h4>
          </Col>

          <Col>
            <img src="../assets/anorganik.svg" />
            <h4>Anorganik</h4>
          </Col>

          <Col>
            <img src="../assets/b3.svg" />
            <h4>B3</h4>
          </Col>
        </Row>

        <h1>Artikel</h1>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h1>Predikat Sungai Tercemar di Dunia. Bagaimana Solusinya?</h1>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <h1>
                  Membuang Sampah di Sungai Bikin Sungai Jadi Tercemar Berat
                </h1>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <h1>Kurangi Sampah Plastik Lautan, Apa Strateginya?</h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h1>Berita</h1>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h1>
                  Dampak Bakar Sampah di Jabodetabek Nyaris Setara Karhutla di
                  Kalimantan
                </h1>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <h1>Badung Akui Tangani Sampah di TPST Belum Optimal</h1>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <h1>
                  Tumpukkan Sampah di Pintu Air Demangan Lama Solo Dibersihkan
                </h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h1>Contact</h1>
        <Container>
          <div className="big-circle"></div>
        </Container>
      </Container>
    </>
  );
}

export default Index;
