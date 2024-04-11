var nickname = function()
{
    console.log("이예쁜");
};

nickname();

nickname = function(){
    console.log ("아귀엽");
};

nickname();

var username = nickname;

username();
nickname();