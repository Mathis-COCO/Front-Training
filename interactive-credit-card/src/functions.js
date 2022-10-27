
$(document).ready(function(){
    $("#c-h-name").keyup(function(){
        // Getting the current value of textarea
        let currentText = $(this).val();
        if (($(this).val()) == "" || undefined) {
            currentText = "Jane Appleseed"
        }
        // Setting the Div content
        $(".cardname").text(currentText);
    });
    if (!($("#c-h-name").keyup())) { /* condition pour exécuter quand même */ }
    
    $("#c-nbr").keyup(function(){
        // Getting the current value of textarea
        let currentText = $(this).val();
        if (($(this).val()) == "" || undefined) {
            currentText = "0000000000000000"
        }
        let parts = currentText.match(/.{1,4}/g);
        let modified_num = parts.join(" ")
        
        // Setting the Div content
        $(".cardnumber").text(modified_num);
    });
    if (!($("#c-nbr").keyup())) { /* */ }
    
    $("#c-month").keyup(function(){
        // Getting the current value of textarea
        let currentText = $(this).val();
        if (($(this).val()) == "" || undefined) {
            currentText = "12"
        }
        // Setting the Div content
        $(".cardmonth").text(currentText);
    });
    if (!($("#c-month").keyup())) { /* */ }
    
    $("#c-year").keyup(function(){
        // Getting the current value of textarea
        let currentText = $(this).val();
        if (($(this).val()) == "" || undefined) {
            currentText = "34"
        }
        // Setting the Div content
        $(".cardyear").text(currentText);
    });
    if (!($("#c-year").keyup())) { /* */ }

    $("#cvv").keyup(function(){
        // Getting the current value of textarea
        let currentText = $(this).val();
        if (($(this).val()) == "" || undefined) {
            currentText = "123"
        }
        // Setting the Div content
        $(".cardcvv").text(currentText);
    });
    if (!($("#cvv").keyup())) { /* */ }
});
