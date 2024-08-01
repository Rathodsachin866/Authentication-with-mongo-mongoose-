const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db/index")
const router = Router();

// Admin Routes
router.post('/signup',  adminMiddleware , async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        msg:"Admin created successfully", 
    })

});

router.post('/courses',adminMiddleware,  async  (req, res) => {
    // Implement admin signup logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
   
    const newCourse = Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse);
    res.json({
        msg:"Course created successfully", courseId : newCourse._id
    })
});
router.get("/courses" , adminMiddleware, async (req , res) =>{
    const respone = await Course.find({})
    res.json({
        coruses:respone,
    })
})


module.exports = router;