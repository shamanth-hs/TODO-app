
//Todo DB Schema import
const TodoData = require('../model/todo_data');

//Options for category in view
var optionsData = [
    "School",
    "work",
    "Business",
    "Family",
    "Enterntainment"
]

//Function to get all TODO object
module.exports.display = function (req, res) {
    TodoData.find({},function (err,content){
        if(err){
            console.log(err);
            return;
        }
        return res.render('index', {
            title: "TODO APP",
            content: content,
            "options":optionsData
        });
    }
    );
    
}


//Function to add Todo Object into DB
module.exports.addTodo = function(req,res){
    TodoData.create(req.body, function (err, newTodo){
        if(err){
            console.log("Error while Creating todo",err);
            return;
        }
        return res.redirect('back');
    });
    
}

//Function to Delete Todo Objects in DB

module.exports.deleteTodo = function (req,res){
    TodoData.deleteMany({ _id: {$in:  req.body.checkbox_todo}}, function(err) {
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('back');
    });
}