var colorDiv = document.getElementsByClassName("option-type");

//Generates Random Color
for (let div of colorDiv) {
    var color = "rgb(" + 255 * Math.random() + "," + 255 * Math.random() + "," + 255 * Math.random() + ")";
    div.style.backgroundColor = color;
}


//Validation to add todo Form 
function validForm() {

    //Checks description is filled or not
    var desc = document.forms['add-todo-form']['description'].value;
    if (desc == "") {
        alert("Please Enter description");
        return false;
    }
    //Checks type is filled or not
    var category = document.forms['add-todo-form']['category'].value;
    if (category == "" || category == "select") {
        alert("Please Select category");
        return false;
    }
    //Checks date is filled or not
    var type = document.forms['add-todo-form']['dateof'].value;
    if (type == "") {
        alert("Please Enter date");
        return false;
    }
    return true;
}

//To validate Checkbox
function checkBoxValidation() {
    //Get all CheckBoxes
    var checkboxValue = document.forms['add-todo-form']['checkbox_todo'];

    //if only one checkBox is present
    if (checkboxValue.checked != undefined) {
        if (checkboxValue.checked) {
            return true;
        } else {
            alert("please select atleast One Todo to delete");
            return false;
        }
        //if CheckBoxes are more
    } else {
        for (let checkboxes of checkboxValue) {
            //If any one of checkbox is selected then return true
            if (checkboxes.checked) {
                return true;
            }
        }
    }
    alert("please select atleast One Todo to delete");
    return false;
}