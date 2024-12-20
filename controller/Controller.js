const adminmodel = require("../model")

const admin1 = async (req, res) => {
    const user = req.user;
    res.render("header", { username: user ? user.username : undefined });
}
const signUP = async (req, res) => {
    const { username, passowrd, email } = req.body;
    const user = await adminmodel.create({ username, passowrd, email });
    console.log("signIn successfully", user);

    req.user = user;
    res.render("login");
}
const login = async (req, res) => {
    const { email } = req.body;
    const user = await adminmodel.findOne({ email });

    if (!user) {
        res.send({ message: "User not Found" });
    } else {
        req.user = user;
        res.render("blog", { username: user.username });
        console.log("login successfully")
    }
}





const logout = async (req, res) => {
    const { username } = req.body;

    try {
        const deletedUser = await adminmodel.findOneAndDelete({ username });

        if (!deletedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        return res.redirect('/user/login');
    } catch (error) {
        console.error('Error during logout:', error);
        return res.status(500).send({ message: "Internal server error" });
    }
};







const admin = async (req, res) => {
    res.render("form")

}

const loginfile = (req, res) => {
    res.render("login")
}
const header = (req, res) => {
    res.render("header")
}

const blog = (req, res) => {
    res.render("blog")
}

///add
const addproducts = async (req, res) => {
    console.log("Received form data:", req.body); // Log incoming data

    const { ProductUrl, title, price } = req.body;

    if (!ProductUrl || !title || !price) {
        return res.status(400).send({ message: "All fields are required!" });
    }

    try {
        await adminmodel.create({ ProductUrl, title, price });
        console.log("Data added successfully");
        res.redirect("/user/data");
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};


const alldata = async (req,res)=>{
    const products = await adminmodel.find({});

    res.render("data", { products });
    
}


const delet = async (req, res) => {
    const { productId } = req.body;

        const deletedProduct = await adminmodel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).send({ message: "Product not found" });
        }

        return res.redirect('/user/data');
 
};

const updateProductForm = async (req, res) => {
    const { id } = req.params;

        const product = await adminmodel.findById(id);

        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }

        res.render("update", { product });

};

const update = async (req, res) => {
    const { id, ProductUrl, title, price } = req.body;

        const updatedProduct = await adminmodel.findByIdAndUpdate(id, { ProductUrl, title, price }, { new: true });

        if (!updatedProduct) {
            return res.status(404).send({ message: "Product not found" });
        }

        res.redirect('/user/data');

};



module.exports = {
    signUP,
    admin,
    login,
    logout,
    loginfile,
    header,
    admin1,
    blog,
    addproducts,
    alldata,
    delet,
    update,
    updateProductForm
}