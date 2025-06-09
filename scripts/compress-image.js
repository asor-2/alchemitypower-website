// scripts/compress-images.js
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');

(async () => {
  // Compress existing images
  const files = await imagemin(['src/components/images/*.{jpg,png}'], {
    destination: 'src/components/images/optimized',
    plugins: [
      imageminMozjpeg({quality: 85}),
      imageminPngquant({
        quality: [0.8, 0.9]
      })
    ]
  });

  // Create WebP versions
  await imagemin(['src/components/images/*.{jpg,png}'], {
    destination: 'src/components/images/webp',
    plugins: [
      imageminWebp({quality: 85})
    ]
  });

  console.log('Images optimized!');
})();