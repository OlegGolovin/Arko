const CATALOG = [
    {
        id: "1",
        name: "Шкаф Сидней 13.200 (Моби)",
        img: "https://mebel-online-kursk.ru/media_files/59e87c58434aac45a09ebbbab13f58ad.jpg",
        price: "11 953Р",
        oldprice: "13 279Р",
        sale: "- 20%",
    },
    {
        id: "2",
        name: "Сервант Куба (SM Мебель)",
        img: "https://mebel-online-kursk.ru/media_files/4b1971c0eaab5ca219baf2535082825e.jpg",
        price: "20 757Р",
        oldprice: "24 345Р",
        sale: "- 40%",
    },
    {
        id: "3",
        name: "Антресоль АН-002 Асти (Миф)",
        img: "https://mebel-online-kursk.ru/media_files/81cc3697966e63712dae0bcf113edab7.jpg",
        price: "9 345Р",
        oldprice: "11 112Р",
        sale: "hit",
    },
    {
        id: "4",
        name: "Гостиная Модерн К25 (Мебельсон)",
        img: "https://mebel-online-kursk.ru/media_files/e9bdd404bb8313566cc3ed97def27b8b.jpg",
        price: "36 251Р",
        oldprice: "44 279Р",
        sale: "- 30%",
    },
    {
        id: "5",
        name: "Модульная гостиная ПРОВАНС МБГ",
        img: "https://mebel-online-kursk.ru/media_files/4663a2cdfdfe74e5334f1740cf0f01ce.jpg",
        price: "43 553Р",
        oldprice: "51 569Р",
        sale: "hit",
    },
    {
        id: "6",
        name: "Стол журнальный ЖС-6 (Регион 058)",
        img: "https://mebel-online-kursk.ru/media_files/80070737f23775a266960fca4c3b0193.jpg",
        price: "10 853Р",
        oldprice: "14 279Р",
        sale: "",
    },
    {
        id: "7",
        name: "Гостиная Палермо-3 НМ (Стиль)",
        img: "https://mebel-online-kursk.ru/media_files/6b2cc69b27d6c9376431dd191a224f2b.jpg",
        price: "38 153Р",
        oldprice: "41 569Р",
        sale: "- 20%",
    },
    {
        id: "8",
        name: "Стеллаж (БТС)",
        img: "https://mebel-online-kursk.ru/media_files/a01c32993fde8da94523c80950f0b205.jpg",
        price: "9 553Р",
        oldprice: "11 549Р",
        sale: "",
    },
    {
        id: "9",
        name: "Гостиная Бриджит (Террикон)",
        img: "https://mebel-online-kursk.ru/media_files/c1a832174c25afd221ff0510482666d3.jpg",
        price: "17 753Р",
        oldprice: "",
        sale: "",
    },
    {
        id: "10",
        name: "Гостиная Лайк К45 (Мебельсон)",
        img: "https://mebel-online-kursk.ru/media_files/4d6219b8da79ecfca795022ac8eb52ff.jpg",
        price: "41 953Р",
        oldprice: "53 279Р",
        sale: "- 20%",
    },

]
const rootProducts = document.getElementById('popular-products');
class Products {
    render() {
        let htmlCatalog = "";

        CATALOG.forEach((element) => {

            htmlCatalog += ` 
    <div class="popular-card-block-card-wrap">
            <form class="popular-card-block-card">
                <div class="popular-card-block-card__img">
                    <img src="${element.img}">

                    
                </div>
                <div class="popular-card-block-card__title">
                    <h6>${element.name}</h6>
                </div>
                <div class="popular-card-block-card__colors">
                    <span class="color1"></span>
                    <span class="color2"></span>
                    <span class="color3"></span>
                    <span class="color1"></span>
                    <span class="color1"></span>
                    <span class="color1"></span>
                    <span class="color1"></span>
                    <span class="color1"></span>
                    <span class="color1"></span>
                    <span class="color1"></span>
                    <span class="color1"></span>
                    <span class="color1"></span>
                </div>
                <div class="popular-card-block-card__price">
                    <div class="oldprice">${element.oldprice}</div>
                    <div class="newprice">${element.price}</div>
                </div>
                <div class="popular-card-block-card-buy">
                    <button class="popular-card-block-card__btn">Купить</button>

                    <div class="popular-card-block-card__comment">
                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 19C10.7925 19.0044 10.5889 18.9191 10.4163 18.7554L1.70152 9.99543C-0.566195 7.71112 -0.566195 3.99652 1.70152 1.70392C2.91951 0.551949 4.35661 -0.0426701 5.81959 1.05619e-05C7.28349 -0.0389963 8.72066 0.559995 9.93765 1.71635L11 2.78181L12.0624 1.71635C14.333 -0.567958 18.0279 -0.567958 20.2985 1.71635C22.5691 4.00067 22.5691 7.71112 20.2985 10.0079L11.5866 18.7554C11.4129 18.9191 11.2084 19.0044 11 19ZM5.81959 1.65831C4.77154 1.63537 3.74374 2.06945 2.87477 2.90204C1.24914 4.53547 1.24914 7.1929 2.87477 8.82633L11 16.9976L19.1282 8.81803C20.7509 7.18461 20.7509 4.52718 19.1282 2.89375C17.5054 1.26032 14.8612 1.24374 13.2327 2.90204L11.5866 4.56034C11.4126 4.71975 11.21 4.80453 11.0029 4.80453C10.7959 4.80453 10.5932 4.71975 10.4192 4.56034L8.75564 2.90204C7.88905 2.07213 6.86463 1.63818 5.81959 1.65831Z"
                                fill="#E13B3F" />
                        </svg>
                        <!-- <img src="./img/svg/heart.svg" alt=""> -->
                        <span>Добавить в избранное</span>
                    </div>
                </div>
                <div class="popular-card-block-card-sizes">
                    <div class="popular-card-block-card-sizes__text">Размеры:
                    </div>
                    <span>Ширина <br> 1635 мм</span>
                    <span>Высота <br> 650 мм</span>
                    <span>Глубина <br> 2032 мм</span>
                </div>
            </form>
        </div>
    `;

        });

        rootProducts.innerHTML = htmlCatalog;

    }

}
const productsPage = new Products();
productsPage.render();

