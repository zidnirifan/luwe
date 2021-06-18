const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const hero = 'src/public/images/hero-image.jpg';
const target = [hero];
const destination = path.resolve(__dirname, 'src/public/images/responsive');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

const resizeImage = ({ image, size, name }) => {
  sharp(image)
    .resize(size)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.slice(18).split('.').slice(0, -1).join('.')}-${name}.jpg`,
      ),
    );
};

target.forEach((image) => {
  resizeImage({ image, size: 1000, name: 'xl' });
  resizeImage({ image, size: 800, name: 'large' });
  resizeImage({ image, size: 600, name: 'medium' });
  resizeImage({ image, size: 400, name: 'small' });
});
