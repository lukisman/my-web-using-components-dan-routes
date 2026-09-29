function About() {
  return (
    <div>
      <h1>About Page</h1>
      <br />
      <h3>Tentang Saya</h3>
      <p>
        Saya adalah Lukman Hakim. Seorang mahasiswa Pendidikan Ilmu Komputer di
        Universitas Pendidikan Indonesia angkatan 2025. Saya sedang mengampu
        mata kuliah Pemrograman Internet dengan dosen Pak Erlangga S.Kom, M.T
      </p>
      <hr />
      <h3>Gallery: </h3>
      <div className="galeri">
        <img src="/upi.jpg" alt="kemakom" />
        <img src="/cuking.jpg" alt="kucing" />
        <img src="/singa.jpg" alt="singa" />
      </div>
    </div>
  );
}

export default About;
