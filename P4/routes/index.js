const express = require('express');
const router = express.Router();

router.use("/",(req, res)=> {
    // format data json
    const data ={
        caption: "Mahasiswa",
        layout : "layout/main-layout",
        data :[
            {
                npm : "2226240105",
                nama : "Safina"
            },
            {
                npm : "2226240092",
                nama : "Alya"

            },
            {
                npm : "2226240123",
                nama : "Dedi"
            }
        ]
    };
    res.render("index", data);
    //menuju ke views/index.ejs

});

module.exports = router;
