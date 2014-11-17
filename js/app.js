
    var app = {
        config: {
            url: 'http://test1.ru/test.php'
        },
        sendReq: function(){
            var name = $('#mySuperInput').val();
            if (!name) {
                $('#mySuperAnswer').html('<div class="err">no name</div>')
            } else {
                $.get(app.config.url, {name: name}, function(data){
                    app.processAns(data);
                });
            }
        },
        processAns: function(data){
            if (data.err) {
                $('#mySuperAnswer').html('<div class="err">wrong params</div>');
            } else  if ( data.name){
                $('#mySuperAnswer').html('<div class="succ">Hi, '+data.name+'</div>');
            } else {
                $('#mySuperAnswer').html('<div class="err">HZ</div>');
            }
        }
    };

    $(document).ready(function() {
        $('#mySuperInput').keyup(function(event){
            if (event.keyCode == 13) {
                app.sendReq();
            }
        });
    });