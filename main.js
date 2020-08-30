$(document).ready(function(){
    $("#text_search").keyup(function(){
        var search = $(this).val('');

        if(search != ""){
            $.ajax({
                url: "results.php",
                type: "post",
                data: {search:search, type:1},
                dataType: "json",
                success: function(response){
                    var len = response.length;
                    $("#searchResult").empty();
                    for(var i=0; i<len;i++){
                        var id = response[i]["id"];
                        var name = response[i]["name"];

                        $("searchResult").append("<li value'"+id+"'>" + name + "</li>");
                    }
                    // //binding click event to li
                    // $("#searchResult li").bind("click", function(){
                    //     setText(this);
                    // });
                }
            });
        }
    });
});

// function setText(element){

//     var value = $(element).text();
//     var userid = $(element).val();

//     $.ajax({
//         url: "results.php",
//         type: "post",
//         data: {userid:userid, type:2},
//         datatType: "json",
//         success: function(response){

//             var len = response.length;
//             $("#userdetail").empty();
//             if(len > 0){
//                 var username = response[0]["username"];
//                 var email = response[0]["email"];
//                 $("#userdetail").append("Username: " + username + "<br>");
//                 $("#userdetail").append("Email: " + email);

//             }
//         }
//     });
// }