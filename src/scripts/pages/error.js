import errorImg from '../../public/images/error.svg';

const errorPage = () => /* html */ `
    <div class="error-page">
      <img src="${errorImg}" alt="Error" />
      <h2>Upss.. Terjadi Kesalahan</h2>
      <h3>Coba periksa koneksi dan muat ulang</h3>
    </div>
  `;

export default errorPage;
