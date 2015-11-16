var OpenDataPoitiersAdmin = (function () {
    var buttons = [
        {buttonId : "reload-bike-shelters-button", reloadURL : "/admin/reload/bike-shelters"},
        {buttonId : "reload-disable-parking-button", reloadURL : "/admin/reload/disabled-parkings"},
        {buttonId : "reload-all-button", reloadURL : "/admin/reload/all"},
        ];
    var module = {};

    module.buttonSubscription = function(){
        buttons.forEach(function (button){
            $("#"+button.buttonId).click(function(){
                $("#alert-success").hide();
                $("#alert-error").hide();

                $.ajax({
                    url: button.reloadURL,
                    dataType: 'text',
                    success : function(data){
                        $("#alert-success").show();
                    },
                    error : function(data){
                        $("#alert-error").show();
                    }
                });
            });
        });
    }

    return module;
})();

OpenDataPoitiersAdmin.buttonSubscription();