
const products = [
  {
    id:1,
    trending:true,
    product:[
      {
        id:1,
        img:'/assets/img/shop/product/product-1.jpg',
        images:[
          {src:'/assets/img/shop/product/product-1.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-10.jpg',
        category:'Accessories',
        title:'Wooden container Bowl',
        price:96.00,
        old_price:120.00,
        rating:3,
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['L','XL','XXL'],
        colors:['Yellow','Blue','White',' Ocean Blue'],
        weight:.25,
        dimension:'62 × 56 × 12',
        brand:'sony',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },

      {
        id:2,
        img:'/assets/img/shop/product/product-5.jpg',
        images:[
          {src:'/assets/img/shop/product/product-5.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-11.jpg',
        category:'Clothing',
        title:'Euvira Rocking Chair',
        price:90.00,
        old_price:110.00,
        product__sale:['new','16%'],
        rating:4,
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['S','M','XXL'],
        colors:['Red','Yellow','Blue','White'],
        weight:.27,
        dimension:'62 × 68 × 12',
        brand:'panasonic',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:2,
    trending:true,
    product:[
      {
        id:3,
        img:'/assets/img/shop/product/product-2.jpg',
        images:[
          {src:'/assets/img/shop/product/product-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-11.jpg',
        category:"Men's",
        title:'Eunice coffee table',
        price:92.00,
        old_price:112.00,
        rating:3.5,
        product__sale:['new','16%'],
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['S','M','L',],
        colors:['Green','White',' Ocean Blue'],
        weight:.25,
        dimension:'62 × 59 × 12',
        brand:'panasonic',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },

      {
        id:4,
        img:'/assets/img/shop/product/product-6.jpg',
        images:[
          {src:'/assets/img/shop/product/product-6.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-7.jpg',
        category:"Music",
        title:'Euvira Rocking Chair',
        price:88.00,
        old_price:108.00,
        rating:3,
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['S','XXL'],
        colors:['Yellow','Black',' Ocean Blue'],
        weight:.22,
        dimension:'62 × 77 × 12',
        brand:'samsung',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:3,
    trending:true,
    product:[
      {
        id:5,
        img:'/assets/img/shop/product/product-3.jpg',
        images:[
          {src:'/assets/img/shop/product/product-3.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-8.jpg',
        category:"Decoration",
        title:'Set of 2 baskets',
        price:87.00,
        old_price:107.00,
        rating:3.8,
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['XL','XXL'],
        colors:['White',' Ocean Blue'],
        weight:.23,
        dimension:'62 × 59 × 12',
        brand:'apple',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },

      {
        id:6,
        img:'/assets/img/shop/product/product-7.jpg',
        images:[
          {src:'/assets/img/shop/product/product-7.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-1.jpg',
        category:"Chair",
        title:'Eames House Bird in Black',
        price:77.00,
        old_price:102.00,
        rating:3.7,
        product__sale:['new','19%'],
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['S','XL','XXL'],
        colors:['Yellow','Black'],
        weight:.22,
        dimension:'62 × 77 × 12',
        brand:'samsung',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:4,
    trending:true,
    product:[
      {
        id:7,
        img:'/assets/img/shop/product/product-4.jpg',
        images:[
          {src:'/assets/img/shop/product/product-4.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-12.jpg',
        category:"Lighting",
        title:'Micro Eslabon Wall Clock',
        price:70.00,
        old_price:90.00,
        rating:3.9,
        product__sale:['new','22%'],
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['S','XXL'],
        colors:['Green','White',' Ocean Blue'],
        weight:.22,
        dimension:'62 × 59 × 12',
        brand:'samsung',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },

      {
        id:8,
        img:'/assets/img/shop/product/product-8.jpg',
        images:[
          {src:'/assets/img/shop/product/product-8.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-3.jpg',
        category:"Accessories",
        title:'Georg Tv cabinet',
        price:75.00,
        old_price:95.00,
        rating:3.4,
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['S','XL'],
        colors:['Yellow','Black','Blue'],
        weight:.29,
        dimension:'62 × 77 × 12',
        brand:'apple',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:5,
    trending:true,
    product:[
      {
        id:9,
        img:'/assets/img/shop/product/product-5.jpg',
        images:[
          {src:'/assets/img/shop/product/product-5.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-11.jpg',
        category:"Clothing",
        title:'Stone Table Lamp',
        price:68.00,
        old_price:88.00,
        rating:4,
        product__sale:['new'],
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['L','XL'],
        colors:['Green',' Ocean Blue'],
        weight:.22,
        dimension:'62 × 59 × 12',
        brand:'sony',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },

      {
        id:10,
        img:'/assets/img/shop/product/product-4.jpg',
        images:[
          {src:'/assets/img/shop/product/product-4.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-1.jpg',
        category:"Men's",
        title:'Water Bottle',
        price:75.00,
        old_price:92.00,
        rating:3.5,
        product__sale:['new'],
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['S','M','XXL'],
        colors:['White',' Ocean Blue'],
        weight:.29,
        dimension:'62 × 77 × 12',
        brand:'panasonic',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:6,
    trending:true,
    product:[
      {
        id:11,
        img:'/assets/img/shop/product/product-6.jpg',
        images:[
          {src:'/assets/img/shop/product/product-6.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-2.jpg',
        category:"Music",
        title:'Tailored Fit Mesh-Panel',
        price:67.00,
        old_price:75.00,
        rating:4,
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['S','XXL'],
        colors:['Green','White',' Ocean Blue'],
        weight:.22,
        dimension:'62 × 59 × 12',
        brand:'samsung',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },

      {
        id:12,
        img:'/assets/img/shop/product/product-11.jpg',
        images:[
          {src:'/assets/img/shop/product/product-11.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-2.jpg',
        category:"Decoration",
        title:'Water Bottle',
        price:55.00,
        old_price:66.00,
        rating:3.5,
        product__sale:['new','23%'],
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['S','M'],
        colors:['Blue','White'],
        weight:.30,
        dimension:'62 × 77 × 12',
        brand:'apple',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:7,
    product:[
      {
        id:13,
        img:'/assets/img/shop/product/product-12.jpg',
        images:[
          {src:'/assets/img/shop/product/product-12.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-4.jpg',
        category:"Chair",
        title:'Rosmo Namino',
        price:99.00,
        old_price:112.00,
        rating:4,
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['L','XL'],
        colors:['Blue',' Ocean Blue'],
        weight:.17,
        dimension:'62 × 59 × 12',
        brand:'sony',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },

      {
        id:14,
        img:'/assets/img/shop/product/product-10.jpg',
        images:[
          {src:'/assets/img/shop/product/product-10.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-1.jpg',
        category:"Lighting",
        title:'Plaid Cotton Shirt',
        price:122.00,
        old_price:142.00,
        rating:3.5,
        product__sale:['new','25%'],
        desc:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
        sizes:['L','XXL'],
        colors:['Black','White'],
        weight:.30,
        dimension:'62 × 77 × 12',
        brand:'panasonic',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:8,
    product:[
      {
        id:15,
        featured:true,
        img:'/assets/img/shop/banner/banner-big-1.jpg',
        images:[
          {src:'/assets/img/shop/banner/banner-big-1.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-11.jpg',
        category:"Accessories",
        sm_title:'Products Essentials',
        title:'Bottle With Wooden Cork',
        price:59.25,
        old_price:75.25,
        rating:4,
        desc:<>Mirum est notare quam littera gothica, quam nunc putamus <br/> parum claram, anteposuerit litterarum
        formas.</>,
        desc_2:<>Mirum est notare quam littera gothica<br/> parum claram, antep</>,
        sizes:['M','XXL'],
        colors:['White','Yellow'],
        weight:.20,
        dimension:'59 × 60 × 12',
        brand:'sony',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:9,
    product:[
      {
        id:16,
        featured:true,
        img:'/assets/img/shop/banner/banner-big-2.jpg',
        images:[
          {src:'/assets/img/shop/banner/banner-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/product-11.jpg',
        category:"Accessories",
        sm_title:'Products Furniture',
        title:'Hauteville Plywood Chair',
        price:396.25,
        old_price:450.25,
        rating:4,
        desc:<>Mirum est notare quam littera gothica, quam nunc putamus <br/> parum claram, anteposuerit litterarum
        formas.</>,
        desc_2:<>Mirum est notare quam littera gothica<br/> parum claram, antep</>,
        sizes:['L','XL'],
        colors:['Yellow','Blue'],
        weight:.20,
        dimension:'59 × 60 × 12',
        brand:'apple',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:10,
    product:[
      {
        id:17,
        big:true,
        img:'/assets/img/shop/product/product-big-1.jpg',
        category:"Lighting",
        images:[
          {src:'/assets/img/shop/product/product-big-1.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        title:<>Creative Design <br/>Juicy Pendant Lamp</>,
        price:296.25,
        old_price:350.25,
        rating:4,
        desc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        sizes:['L','XL'],
        colors:['White','Yellow'],
        weight:.18,
        dimension:'59 × 60 × 12',
        brand:'panasonic',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:11,
    product:[
      {
        id:18,
        big_3:true,
        img:'/assets/img/shop/product/product-big-3.jpg',
        category:"Decoration",
        images:[
          {src:'/assets/img/shop/product/product-big-3.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        title:'Big sale canvas basket',
        price:287.25,
        old_price:325.25,
        rating:4,
        desc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        sizes:['L'],
        colors:['Green',' Ocean Blue'],
        weight:.18,
        dimension:'59 × 60 × 12',
        brand:'sumsung',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:13,
    product:[
      {
        id:19,
        big_2:true,
        img:'/assets/img/shop/product/product-big-2.jpg',
        category:"Music",
        images:[
          {src:'/assets/img/shop/product/product-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        title:'Big sale canvas basket',
        price:167.25,
        old_price:274.25,
        rating:3,
        desc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        sizes:['M','L'],
        colors:['Yellow','Blue','Green'],
        weight:.15,
        dimension:'59 × 60 × 12',
        brand:'sony',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:14,
    product:[
      {
        id:20,
        f_prd:true,
        new:true,
        feature_prd:true,
        img:'/assets/img/shop/product/fashion/fashion-2.webp',
        images:[
          {src:'/assets/img/shop/product/fashion/fashion-2.webp'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/fashion/fashion-1.webp',
        category:"Chair",
        title:"Haggar Men's Heather",
        price:85.00,
        old_price:96.00,
        rating:3,
        desc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        sizes:['XL','XXL'],
        colors:['Ocean Blue',' White'],
        weight:.17,
        dimension:'59 × 60 × 12',
        brand:'panasonic',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:15,
    product:[
      {
        id:21,
        f_prd:true,
        new:true,
        feature_prd:true,
        img:'/assets/img/shop/product/fashion/fashion-3.webp',
        category:"Accessories",
        images:[
          {src:'/assets/img/shop/product/fashion/fashion-3.webp'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/fashion/fashion-4.webp',
        title:"Cotton Twill Suit",
        price:108.00,
        old_price:120.00,
        rating:4,
        desc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        sizes:['L','XL','XXL'],
        colors:['Blue','Green'],
        weight:.9,
        dimension:'59 × 60 × 12',
        brand:'apple',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:16,
    product:[
      {
        id:22,
        img:'/assets/img/shop/product/fashion/fashion-b1.webp',
        images:[
          {src:'/assets/img/shop/product/fashion/fashion-b1.webp'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        f_prd_big:true,
        category:"Decoration",
        title:"Cotton Twill Suit",
        price:129.00,
        old_price:138.00,
        rating:4,
        desc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        sizes:['M','L','XL'],
        colors:['Ocean Blue',' White'],
        weight:.14,
        dimension:'59 × 60 × 12',
        brand:'sumsung',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:17,
    product:[
      {
        id:23,
        img:'/assets/img/shop/product/fashion/fashion-b2.webp',
        images:[
          {src:'/assets/img/shop/product/fashion/fashion-b2.webp'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        f_prd_big:true,
        category:"Men's",
        title:'Big sale canvas basket',
        price:142.00,
        old_price:152.00,
        rating:4,
        desc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        sizes:['L','XXL'],
        colors:['Ocean Blue','Green',' White'],
        weight:.15,
        dimension:'59 × 60 × 12',
        brand:'sony',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:18,
    product:[
      {
        id:24,
        f_prd:true,
        feature_prd:true,
        category:"Clothing",
        img:'/assets/img/shop/product/fashion/fashion-5.webp',
        images:[
          {src:'/assets/img/shop/product/fashion/fashion-5.webp'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/fashion/fashion-7.webp',
        title:"Adrianna Papell Women's",
        price:98.00,
        rating:4,
        desc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        sizes:['M','L'],
        colors:['Yellow','Green',' White'],
        weight:.9,
        dimension:'59 × 60 × 12',
        brand:'apple',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:19,
    product:[
      {
        id:25,
        f_prd:true,
        feature_prd:true,
        img:'/assets/img/shop/product/fashion/fashion-10.webp',
        images:[
          {src:'/assets/img/shop/product/fashion/fashion-10.webp'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/fashion/fashion-9.webp',
        category:"Clothing",
        title:"Calvin Klein Women's",
        price:80.00,
        rating:4,
        desc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        sizes:['XL','M','L'],
        colors:['Blue','Green',' White'],
        weight:.9,
        dimension:'59 × 60 × 12',
        brand:'apple',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },

  {
    id:20,
    product:[
      {
        id:26,
        f_prd:true,
        feature_prd:true,
        category:"Chair",
        img:'/assets/img/shop/product/fashion/fashion-12.webp',
        images:[
          {src:'/assets/img/shop/product/fashion/fashion-12.webp'},
          {src:'/assets/img/shop/product/quick-view/quick-big-2.jpg'},
          {src:'/assets/img/shop/product/quick-view/quick-big-3.jpg'},
        ],
        thumb_img:'/assets/img/shop/product/fashion/fashion-11.webp',
        title:"Calvin Klein Women's",
        price:65.00,
        rating:4,
        desc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
        sizes:['XL','L'],
        colors:['Ocean Blue'],
        weight:.9,
        dimension:'59 × 60 × 12',
        brand:'panasonic',
        reviews:[
          {
            img:'/assets/img/blog/comments/avater-1.png',
            name:'Siarhei Dzenisenka',
            time:'3 Months Ago',
            rating:4,
          },
          {
            img:'/assets/img/blog/comments/avater-2.png',
            name:'Julias Roy',
            time:'6 Months Ago',
            rating:4,
            children:true,
          },
          {
            img:'/assets/img/blog/comments/avater-3.png',
            name:'Arista Williamson',
            time:'6 Months Ago',
            rating:4,
          },
        ]
      },
    ]
  },
]


export default products;