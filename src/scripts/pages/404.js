import img404 from '../../public/images/404.svg';

const notFound = () => /* html */ `
    <div class="not-found">
      <img src="${img404}" alt="Page not found" />
      <h2>Upss.. Halaman Tidak Ditemukan</h2>
    </div>
  `;

export default notFound;
