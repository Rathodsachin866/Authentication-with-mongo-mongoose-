const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username:username,
        password:password,
       
    
    })
    res.json({
        msg: " User created successfully"
    })
});

router.post('/coruses/:coruseId', userMiddleware ,(req, res) => {
    // Implement admin signup logic
   const coruseId = req.params.coruseId;
   const username = req.headers.username;

   User.updateOne({
    username,
   },
{
    "$push": {
     purchasedCourses : coruseId
    }
});
res.json({
    msg:"purchased completed"
})
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router