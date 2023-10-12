async function fetchData() {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    let link = window.location.href;
    console.log(link);
    for (let i = 0; i < data.length; i++) {
      for(let img of data[i].imagesZoom){
        let dataZoom = "";
        dataZoom = `
            <div class="slide--item">
                <a href="./img/products/${img}" data-fancybox="gallery">
                    <img src="./img/products/${img}" alt="">
                </a>
            </div>
        `;
        document.querySelector(".productIntro__slide").insertAdjacentHTML("beforeend", dataZoom);
      }
    }
  }
  fetchData();
  