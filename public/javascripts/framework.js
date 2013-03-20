(function(){
    function init(){
        Handlers.bind();
    }

    var Handlers = {};
    (function(Handlers){

        Handlers.mainMenuClicked = function(){
            var element = $(this);
            if(element.hasClass("menu-closed")){
                element.removeClass("menu-closed").addClass("menu-opened");
            }
            else{
                element.removeClass("menu-opened").addClass("menu-closed");
            }
        };

        Handlers.bind = function(){
            $("#main-menu").unbind("click").bind("click", Handlers.mainMenuClicked);
        };

    })(Handlers);

    function log(value) {
        (typeof (value) == "object") ? window.console.dir(value) : window.console.log(value);
    }

    $(init);
})();
