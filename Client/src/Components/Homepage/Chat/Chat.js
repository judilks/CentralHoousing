import React, { Component } from 'react';
import './Chat.css';
import send from './Assets/SendButton.png'
class Chat extends Component {

    constructor() {
        super();
        var me = {};
        var you = {};
    } 

    /*componentDidMount () {
        const script = document.createElement("script");

        <script src="../src/Components/Chat/ChatScript.js"></script>
        script.async = true;

        document.body.appendChild(script);
    }*/
    
    
    render() {
        var textStyle = {background:'whitesmoke, !important'};
        var iconStyle = {padding:'10px'};
        return (
            <div container="container" className="center">
                <ul></ul>
                <div className="msj-rta macro">                        
                    <div className="text text-r">
                        <input className="mytext" placeholder="Type a message" style={textStyle}/>
                    </div> 
                </div>
                <div style={iconStyle}>
                    <span className="glyphicon glyphicon-share-alt"></span>
                </div>                
            </div>
            
        )
    }
    /*
    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }            

    //-- No use time. It is a javaScript effect.
    insertChat(who, text, time){
        if (time === undefined){
            time = 0;
        }
        var control = "";
        var date = this.formatAMPM(new Date());
        
        if (who == "me"){
            control = '<li style="width:100%">' +
                            '<div className="msj macro">' +
                                '<div class="text text-l">' +
                                    '<p>'+ text +'</p>' +
                                    '<p><small>'+date+'</small></p>' +
                                '</div>' +
                            '</div>' +
                        '</li>';                    
        }else{
            control = '<li style="width:100%;">' +
                            '<div className="msj-rta macro">' +
                                '<div className="text text-r">' +
                                    '<p>'+text+'</p>' +
                                    '<p><small>'+date+'</small></p>' +
                                '</div>' +                                
                    '</li>';
        }
        setTimeout(
            function(){                        
                document.getElementsByTagName("ul").append(control).scrollTop(document.getElementById("ul").prop('scrollHeight'));
            }, time);
        
    }

    resetChat(){
        document.getElementsByTagName("ul").empty();
    }

    /*
    $(".mytext").on("keydown", function(e){
        if (e.which == 13){
            var text = $(this).val();
            if (text !== ""){
                insertChat("me", text);              
                $(this).val('');
            }
        }
    });

    $('body > div > div > div:nth-child(2) > span').click(function(){
        $(".mytext").trigger({type: 'keydown', which: 13, keyCode: 13});
    })
    */
}
export default Chat;