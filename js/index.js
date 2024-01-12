
    // Galeri div'ini seçin
    const galleryDiv = document.getElementById('gallery');

    // Rastgele bir resim çekmek için bir fonksiyon
    function getRandomImageURL() {
      for (let i = 0; i < 14; i++) {
                const imageUrl = `https://source.unsplash.com/random/300x300?sig=${i}`;
                gallery.innerHTML += `<img src="${imageUrl}" alt="Random Image ${i + 1}">`;
            }
      return "https://source.unsplash.com/random/300x300";
    }
        const img = document.createElement('img');
        img.src = getRandomImageURL();
      galleryDiv.appendChild(img);