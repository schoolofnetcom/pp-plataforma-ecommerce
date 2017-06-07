const Cart = require('./../../schemas/cart')
const Product = require('./../../schemas/product')

module.exports = (req, res) => {
    if (!req.session.cart_id) {
        let cart = new Cart()
        return Product
            .findById(req.body.product_id)
            .then((product) => {
        
                cart.products.push({ product: product._id })
                cart.customer = req.user && req.user._id || undefined

                return cart
                        .save()
                        .then((cart) => {
                            req.session.cart_id = cart._id
                            return res.redirect('/product/'.concat(product.slug))
                        })
            })
    }

    return Cart
            .findById(req.session.cart_id)
            .then((cart) => {
                let exists = cart && cart.products && cart.products.filter(product => product['product'] == req.body.product_id ? true : false)

                if (!exists || !exists.length) {
                    cart && cart.products && cart.products.push({ product: req.body.product_id })
                    return cart
                            .save()
                            .then((saved) => {
                                return res.redirect('/product/'.concat(req.body.product_slug))
                            })
                }

                Cart 
                    .findOneAndUpdate({
                        _id: cart._id,
                        'products.product': req.body.product_id
                    }, {
                        $set: {
                            'products.$.product': req.body.product_id,
                            'products.$.quantity': exists && exists[0] && exists[0].quantity + 1
                        }
                    }, {
                        safe: true,
                        upsert: true
                    })
                    .then((updated) => {
                        return res.redirect('/product/'.concat(req.body.product_slug))
                    })
            })
            .catch((error) => {
                console.log(error)
            })

}