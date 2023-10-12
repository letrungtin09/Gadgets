async function fetchData() {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
      for(let img of data[i].imagesNav){
        let dataNav = "";
        dataNav = `
            <div class="nav--item">
                <div class="item--img">
                    <img src="./img/products/${img}" alt="">
                </div>
            </div>
        `;
        document
            .querySelector(".productIntro__nav")
            .insertAdjacentHTML("beforeend", dataNav);
      }
    }
  }
  fetchData();
  