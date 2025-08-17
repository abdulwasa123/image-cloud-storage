const renderIndexPage = async (req, res) => {
        res.render("index.ejs"); // Render the home page  
};

module.exports = {
    renderIndexPage
};