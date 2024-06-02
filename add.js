document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.cards .crd');
    const buyPage = document.querySelector('.buyPage');
    const mainPage = document.querySelector('.main');
    const shopSection = document.querySelector('.shop');
    const mainImage = buyPage.querySelector('.main_image img');
    const optionImages = buyPage.querySelectorAll('.option img');
    const productName = buyPage.querySelector('.right h3');
    const productPrice = buyPage.querySelector('.right h4');
    const productDescription = buyPage.querySelector('.right p');
    const quantityLabel = document.getElementById('quantity-label');
    const nabbar = document.getElementById('nabbar');
    const headerss = document.querySelector('.headerss');
    const containervv = document.querySelector('.containervv');
    const content1 = document.querySelector('.content1');
    const revv = document.querySelector('.revv');
    const conbb = document.querySelector('.conbb');
    const main = document.querySelector('.main-content');
    const bottom = document.querySelector('.bottom');
    const paymentFormContainer = document.querySelector('.wrapperpp');
    const logo = document.querySelector('.logo');

    let currentQuantity = 1;

    const products = [
        {
            img: 'c2.jpg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c3.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c3.jpeg', 'c2.jpg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c4.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c4.jpeg', 'c2.jpg', 'c3.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c5.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c6.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c7.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c8.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c9.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },

        {
            img: 'c10.jpg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c11.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c12.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c13.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c14.webp',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c15.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c16.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c17.webp',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c18.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },
        {
            img: 'c19.webp',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },


        {
            img: 'c20.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },

        {
            img: 'c21.jpeg',
            name: 'Top',
            price: 221,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto.',
            options: ['c2.jpg', 'c3.jpeg', 'c4.jpeg', 'c5.jpeg', 'c6.jpeg', 'c7.jpeg']
        },

    ];

    productCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const product = products[index];
            showProductDetails(product);
        });
    });

    optionImages.forEach((img) => {
        img.addEventListener('click', (e) => {
            const src = e.target.getAttribute('src');
            mainImage.setAttribute('src', src);
        });
    });

    function showProductDetails(product) {
        buyPage.style.display = 'flex';
        logo.style.display = 'none';
        nabbar.style.display = 'none';
        headerss.style.display = 'none';
        mainPage.style.display = 'none';
        shopSection.style.display = 'none';
        containervv.style.display = 'none';
        content1.style.display = 'none';
        revv.style.display = 'none';
        conbb.style.display = 'none';
        main.style.display = 'none';
        bottom.style.display = 'none';
        mainImage.setAttribute('src', product.img);
        productName.textContent = product.name;
        productPrice.innerHTML = `<small>$</small>${product.price}`;
        productDescription.textContent = product.description;
        optionImages.forEach((img, index) => {
            img.setAttribute('src', product.options[index]);
        });
        updateQuantity(0);
    }

    function updateQuantity(change) {
        currentQuantity += change;
        if (currentQuantity < 1) {
            currentQuantity = 1;
        }
        quantityLabel.textContent = currentQuantity;
    }

    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const change = e.target.classList.contains('fa-plus') ? 1 : -1;
            updateQuantity(change);
        });
    });

    document.querySelector('.buyPage button').addEventListener('click', () => {
        buyPage.style.display = 'none';
        paymentFormContainer.style.display = 'block';
    });
});
