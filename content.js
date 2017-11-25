// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('localhost:27017/kitty');
// var express = require('express');
// var router = express.Router();

InboxSDK.load('1', 'sdk_kitty_95d79f53b5').then(function(sdk){

	// the SDK has been loaded, now do something with it!
	sdk.Compose.registerComposeViewHandler(function(composeView){

		// a compose view has come into existence, do something with it!
		composeView.addButton({
			title: "kitty fund",
			iconUrl: 'https://i.imgur.com/y93E6tx.png',
			hasDropdown: true,

            onClick: function(event){
                    var m = composeView.getSubject();
                    console.log(m);

                    var r = composeView.getToRecipients();
                    console.log(r);


			    // console.log(message.getSubject());
			    // console.log(event);
                var button = {text:"Lead", title:"buttonTest", onClick: function () {
                    console.log(this.text);
                    this.text="Lead ✔";
                    button={text:this.text,title:"buttonTest", onClick:function(){}};
                    modelView.close();
                    myFunction(button,button2,button3,button4);
                }};
                var button2 = {text:"Pitch", title:"buttonTest", onClick: myFunction};
                var button3 = {text:"Follow-Up", title:"buttonTest", onClick: myFunction};
                var button4 = {text:"Close", title:"buttonTest", onClick: myFunction};
                var modelView = sdk.Widgets.showModalView({
                    el:"<h2>hello</h2>",
                    title:"Save to kitty fund",
					buttons:[button, button2, button3,button4]
                });

                var header = document.querySelector(".Kj-JD-Jz.inboxsdk__modal_content h2");
                header.textContent = "Subject: " + m + r[0].emailAddress;

                var buttons = document.querySelectorAll(".T-I.J-J5-Ji.ar7.L3.inboxsdk__button.T-I-ax7");

								for (i=0; i<buttons.length;i++){
									buttons[i].style.background="#039be5 ";
									buttons[i].style.color="white";
								}

            }});

        });

    function myFunction(button,button2,button3,button4) {
        sdk.Widgets.showModalView({
            el:"<h3>New todo Item Created</h3>",
            title:"Add Todo",
            buttons:[button, button2, button3,button4]
        });
    }
    });
