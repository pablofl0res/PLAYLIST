class Reproductor {
    constructor(listaCanciones) {
      this.listaCanciones = listaCanciones;
      this.enReproduccion = false;
      this.ahoraSuena = 0;
    }
  
    playPause() {
      this.enReproduccion = !this.enReproduccion;
      let mensaje = this.enReproduccion ? `Ahora suena: ${this.listaCanciones[this.ahoraSuena].nombre}` : "Haz pausado la reproducción";
      console.log(mensaje);
    }
  
    shuffle() {
      let indiceAleatorio = Math.floor(Math.random() * this.listaCanciones.length);
      this.ahoraSuena = indiceAleatorio;
      this.showSongInSite();
    }
  
    next() {
      if (this.ahoraSuena < this.listaCanciones.length - 1) {
        this.ahoraSuena++;
        this.showSongInSite();
      }
    }
  
    prev() {
      if (this.ahoraSuena > 0) {
        this.ahoraSuena--;
        this.showSongInSite();
      }
    }
  
    stop() {
      console.log("Haz detenido la reproducción");
      this.ahoraSuena = -1;
      this.showSongInSite();
      document.getElementById("portada-album").src = "https://images.vexels.com/media/users/3/163240/isolated/preview/2f5a168ac9a6765dc5edfeb0b375d2ef-musica-icono-de-nota-musical.png";
    }
  
    play(songIndex) {
      this.ahoraSuena = songIndex;
      this.showSongInSite();
    }
  
    songsList() {
      let listaHTML = "";
      this.listaCanciones.forEach((cancion, index) => {
        listaHTML += `<li><a href="#" onclick="miReproductor.play(${index})">${cancion.nombre}</a></li>`;
      });
      document.getElementById("lista-de-canciones").innerHTML = listaHTML;
    }
  
    showSongInSite() {
      if (this.ahoraSuena !== -1) {
        const cancionActual = this.listaCanciones[this.ahoraSuena];
  
        document.getElementById("titulo-cancion").textContent = cancionActual.nombre;
        document.getElementById("artista-cancion").textContent = cancionActual.artista;
        document.getElementById("album-cancion").textContent = cancionActual.album;
        document.getElementById("duracion-cancion").textContent = `Duración: ${cancionActual.duracion}`;
        document.getElementById("portada-album").src = cancionActual.imagen;
      } else {
        document.getElementById("titulo-cancion").textContent = "No hay canción seleccionada";
        document.getElementById("artista-cancion").textContent = "";
        document.getElementById("album-cancion").textContent = "";
        document.getElementById("duracion-cancion").textContent = "";
        document.getElementById("portada-album").src = "";
      }
    }
  }
  
  let listaCanciones = [
    {
        nombre: "A World Alone",
        album: "Pure Heorine",
        artista: "Lorde",
        duracion: "4:54",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Lorde_Pure_Heroine.png/800px-Lorde_Pure_Heroine.png"
    },

    {
        nombre: "How to disappear",
        album: "Norman F*cking Rockwell!",
        artista: "Lana del Rey",
        duracion: "3:48",
        imagen: "https://i.scdn.co/image/ab67616d0000b273879e9318cb9f4e05ee552ac9"
    },

    {
        nombre: "Tornado Warnings",
        album: "emails i can´t send",
        artista: "Sabrina Carpenter",
        duracion: "3:24",
        imagen: "https://m.media-amazon.com/images/I/71bZG4fuxzL._UF1000,1000_QL80_DpWeblab_.jpg"
    },

    {
        nombre: "Green light",
        album: "Melodrama",
        artista: "Lorde",
        duracion: "3:54",
        imagen: "https://indierocks.sfo3.digitaloceanspaces.com/wp-content/uploads/2017/03/lorde-melodrama.png"
    },

    {
        nombre: "Let the Light in",
        album: "Did you know that there´s a tunnel under Ocean Blvrd",
        artista: "Lana del Rey Ft. Father John Misty",
        duracion: "4:38",
        imagen: "https://ishopmx.vtexassets.com/arquivos/ids/252555/602448591753.jpg?v=638107791153570000"
    },

    {
        nombre: "cowboy like me",
        album: "evermore",
        artista: "Taylor Swift",
        duracion: "4:35",
        imagen: "https://m.media-amazon.com/images/I/81xh22kBAUL._UF1000,1000_QL80_DpWeblab_.jpg"
    },

    {
        nombre: "Snooze",
        album: "SOS",
        artista: "SZA",
        duracion: "3:21",
        imagen: "https://media.pitchfork.com/photos/638902d2e5592afa444298b9/master/pass/SZA-SOS.jpg"
    },

    {
        nombre: "Groupie Love",
        album: "Lust for Life",
        artista: "Lana del Rey Ft. A$AP Rocky",
        duracion: "4:24",
        imagen: "https://indierocks.sfo3.digitaloceanspaces.com/wp-content/uploads/2017/04/Lana-Del-Rey-Lust-For-Life.jpg"
    },

    {
        nombre: "Peter",
        album: "The Tortured Poets Department",
        artista: "Taylor Swift",
        duracion: "4:43",
        imagen: "https://i.scdn.co/image/ab67616d0000b2738ecc33f195df6aa257c39eaa"
    },

    {
        nombre: "Pienso en tu mirá- Cap.3:Celos",
        album: "El Mal Querer",
        artista: "Rosalia",
        duracion: "3:13",
        imagen: "https://m.media-amazon.com/images/I/61pO8rENBML._UF1000,1000_QL80_.jpg"
    },

    {
        nombre: "listen before I go",
        album: "When we all fall sleep where do we go?",
        artista: "Billie Eilish",
        duracion: "4:02",
        imagen: "https://m.media-amazon.com/images/I/81idxQqxTlL._UF1000,1000_QL80_DpWeblab_.jpg"
    },

    {
        nombre: "City of Stars- From La La Land Soundtrack",
        album: "La La Land (Original Motion Picture Soundtrack)",
        artista: "Varios Artistas",
        duracion: "2:29",
        imagen: "https://upload.wikimedia.org/wikipedia/en/0/03/La_La_Land_%28Original_Motion_Picture_Soundtrack%29.png"
    },

    {
        nombre: "Less Than Zero",
        album: "Dawn FM",
        artista: "The Weeknd",
        duracion: "3:31",
        imagen: "https://upload.wikimedia.org/wikipedia/en/0/03/La_La_Land_%28Original_Motion_Picture_Soundtrack%29.png"
    },

    {
        nombre: "ALIEN SUPERSTAR",
        album: "RENNAISSANCE",
        artista: "Beyonce",
        duracion: "3:35",
        imagen: "https://upload.wikimedia.org/wikipedia/en/0/03/La_La_Land_%28Original_Motion_Picture_Soundtrack%29.png"
    },

    {
        nombre: "That find of woman",
        album: "Future Nostalgia",
        artista: "Dua Lipa",
        duracion: "3:20",
        imagen: "https://m.media-amazon.com/images/I/81Z4Y0940wL._UF1000,1000_QL80_DpWeblab_.jpg"
    },

  
  ];
  
  let miReproductor = new Reproductor(listaCanciones);
  miReproductor.songsList();