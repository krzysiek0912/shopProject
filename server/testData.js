const Product = require('./models/product.model');

const loadTestData = async () => {
  const data = [
    {
      img: '/assets/notes.jpg',
      category: 'Electronics',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!",
      price: 399.0,
      stock: 2,
      name: 'Produkt 5',
    },
    {
      img: '/assets/shoes.jpg',
      category: 'Electronics',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!",
      price: 199.99,
      label: 'Nowość',
      stock: 24,
      name: 'Produkt 6',
    },
    {
      img: '/assets/glasses.jpg',
      category: 'Sporting Goods',
      content:
        "Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?",
      price: 159.0,
      label: 'Ostatnia Sztuka',
      stock: 4,
      name: 'AProdukt 2',
    },
    {
      img: '/assets/notes.jpg',
      category: 'Electronics',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!",
      price: 399.0,
      stock: 2,
      name: 'Produkt 5',
    },
    {
      img: '/assets/shoes.jpg',
      category: 'Electronics',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!",
      price: 199.99,
      label: 'Nowość',
      stock: 24,
      name: 'Produkt 6',
    },
    {
      img: '/assets/glasses.jpg',
      category: 'Sporting Goods',
      content:
        "Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?",
      price: 159.0,
      label: 'Ostatnia Sztuka',
      stock: 4,
      name: 'AProdukt 2',
    },
    {
      img: '/assets/notes.jpg',
      category: 'Electronics',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!",
      price: 399.0,
      stock: 2,
      name: 'Produkt 5',
    },
    {
      img: '/assets/shoes.jpg',
      category: 'Electronics',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!",
      price: 199.99,
      label: 'Nowość',
      stock: 24,
      name: 'Produkt 6',
    },
    {
      img: '/assets/glasses.jpg',
      category: 'Sporting Goods',
      content:
        "Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?",
      price: 159.0,
      label: 'Ostatnia Sztuka',
      stock: 4,
      name: 'AProdukt 2',
    },
    {
      img: '/assets/notes.jpg',
      category: 'Electronics',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!",
      price: 399.0,
      stock: 2,
      name: 'Produkt 5',
    },
    {
      img: '/assets/shoes.jpg',
      category: 'Electronics',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!",
      price: 199.99,
      label: 'Nowość',
      stock: 24,
      name: 'NewProdukt 6',
    },
    {
      img: '/assets/glasses.jpg',
      category: 'Sporting Goods',
      content:
        "Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?",
      price: 159.0,
      label: 'Ostatnia Sztuka',
      stock: 4,
      name: 'AProdukt 2',
    },
    {
      img: '/assets/notes.jpg',
      category: 'Electronics',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!",
      price: 399.0,
      stock: 2,
      name: 'LProdukt 5',
    },
    {
      img: '/assets/shoes.jpg',
      category: 'Electronics',
      content:
        "Oh... It won't be so easy. I won't give you a list. <i>But... I'm going to give you some tips that will surely help you on the road.</i> So, let's get started!",
      price: 199.99,
      label: 'Nowość',
      stock: 24,
      name: 'GProdukt 6',
    },
    {
      img: '/assets/glasses.jpg',
      category: 'Sporting Goods',
      content:
        "Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don't have a lot to offer. But don't worry.</b> There is something you can do! I'll teach you everything you need to know. Are you ready?",
      price: 159.0,
      label: 'Ostatnia Sztuka',
      stock: 4,
      name: 'BProdukt 2',
    },
  ];

  try {
    const counter = await Product.countDocuments();
    if (counter === 0) {
      await Product.create(data);
    }
  } catch (err) {
    console.log("Couldn't load test data", err);
  }
};

module.exports = loadTestData;
