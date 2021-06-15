const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const hero = 'src/public/images/hero-image.jpg';
const target = [hero];
const destination = path.resolve(__dirname, 'src/public/images/responsive');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

target.forEach((image) => {
  sharp(hero)
    .resize(800)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.slice(18).split('.').slice(0, -1).join('.')}-large.jpg`,
      ),
    );

  sharp(hero)
    .resize(480)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.slice(18).split('.').slice(0, -1).join('.')}-small.jpg`,
      ),
    );
});
