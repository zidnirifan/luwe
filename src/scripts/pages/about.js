// eslint-disable-next-line arrow-body-style
const about = () => {
  const height = window.innerHeight - 130;

  return /* html */ `
    <div class="about-page" style="height: ${height}px; text-align: center;">
      <a href="https://linkedin.com/in/zidnirifan" target="_blank">
        <h1>Linkedin</h1>
      </a>
    </div>
    `;
};

export default about;
