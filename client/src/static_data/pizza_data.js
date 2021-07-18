const PIZZAS = [{

    "name": "PEPPER BARBECUE CHICKEN",
    "varients": [
        "small",
        "medium",
        "large"
    ],
    "prices": [
        {
            "small": 200,
            "medium": 350,
            "large": 400
        }
    ],
    "category": "nonveg",
    "image": "https://i0.wp.com/chefchoice.com.np/wp-content/uploads/2020/07/Pepper_Barbeque.jpg",
    "description": "Pepper Barbecue Chicken I Cheese"
},{

    "name": "Non Veg Supreme",
    "varients": [
        "small",
        "medium",
        "large"
    ],
    "prices": [
        {
            "small": 200,
            "medium": 350,
            "large": 400
        }
    ],
    "category": "nonveg",
    "image": "https://i2.wp.com/onlychilly.com/wp-content/uploads/2020/08/Non-Veg-Supreme.jpg",
    "description": "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers"
},{

    "name": "Golden Corn Pizza",
    "varients": [
        "small",
        "medium",
        "large"
    ],
    "prices": [
        {
            "small": 180,
            "medium": 250,
            "large" : 360
        }
    ],
    "category": "veg",
    "description": "Corn over the base makes it look beautiful. It is served with tomato sauce and chili flakes are sprinkled over the topping according the taste. After mixing all the ingredients, it is baked by adding cheese and corn for added flavor to pizza. Corn adds health and sweet taste to the pizza.",
    "image": "https://pizzahot.co.in/wp-content/uploads/2021/04/Sweet-Corn-Pizza-1.jpg"
},{

    "name": "Jalapeno & Red Paprika Pizza",
    "varients": [
        "small",
        "medium",
        "large"
    ],
    "prices": [
        {
            "small": 200,
            "medium": 300,
            "large": 420
        }
    ],
    "category": "veg",
    "image": "https://bkpizza.nyc/wp-content/uploads/2020/04/Jalapeno-Chicken%E2%80%93-Round-2.jpg",
    "description": "This pizza is amazing and can become more delicious if we will add some more cheese in it. Ingredients are yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding Jalapeno and Paprika with corns over the cheese layer. The base is made crunchy to give it best taste. It can be made more tasty by sprinkling chili flakes and Oregano as per the taste."
},{

    "name": "Margerita",
    "varients": [
        "small",
        "medium",
        "large"
    ],
    "prices": [
        {
            "small": 150,
            "medium": 220,
            "large": 300
        }
    ],
    "category": "veg",
    "image": "https://media.istockphoto.com/photos/pizza-margarita-with-cheese-top-view-isolated-on-white-background-picture-id1168754685?k=6&m=1168754685&s=612x612&w=0&h=UKuKcencxoEAipHKk1D7DTfMbFxGTpI3qXV57rnDfpM=",
    "description": "The pizza base is made by mixing yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding single layer of cheese over it. It is mouth-watering pizza for cheese lovers."
},{

    "name": "Double Cheese Margherita Pizza",
    "varients": [
        "small",
        "medium",
        "large"
    ],
    "prices": [
        {
            "small": 250,
            "medium": 380,
            "large":500
        }
    ],
    "category": "veg",
    "image": "data:image/jpeg;base64,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",
    "description": "This is a plain pizza which have cheese on it which is margherita and is delicious because of the loads of cheese. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding double layer of cheese over it"
}]
export default PIZZAS;