var RpgCharacter = {};
(function(RC){
    function initialize(){
        Handlers.bind();
        if(!isAuthenticated()){
            $("#isAuthenticated").dialog({
                title: "Login",
                height: 90
            });
        }
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
        if(typeof (value) === "object"){
            window.console.dir(value)
        }
        else{
            window.console.log(value);
        }
    }

    function isAuthenticated(){
        return $("#isAuthenticated").data("auth");
    }

    RC.log = log;

    $(initialize);
})(RpgCharacter);
