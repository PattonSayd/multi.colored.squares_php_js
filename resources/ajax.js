function insertAjax(id) {

     $.ajax({
         type: "POST",
         url: "model/insert.php",
         data: {
             id:id
            },
         success: (data) => {
            data = JSON.parse(data);
            if (data.error) {
                $('.message').text(data.error)
            }else{
                $('.message').text(data.success)
            }
            $('.message').css("top", '20px')
            setTimeout(function () {  
                $('.message').css("top", '-44px')
            }, 900)


         }

     });
}

function deleteAjax(id) {

    $.ajax({
        type: "POST",
        url: "model/delete.php",
        data: {
            id: id
        },
        success: (data) => {
            data = JSON.parse(data);
            if (data.error) {
                $('.message').text(data.error)
            } else {
                $('.message').text(data.success)
            }
            $('.message').css("top", '20px')
            setTimeout(function () {
                $('.message').css("top", '-44px')
            }, 900)


        }

    });
}