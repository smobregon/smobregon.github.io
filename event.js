
$(document).ready(function()
{
    $("#countdown").click (function()
   {
        var dt = new Date("5/5/2019");
        var message = $("#message");

        //

        //calculate days
        var today = new Date();            //calls todays date
        var oneDay = 24*60*60*1000;
        var days = (dt.getTime() - today.getTime()) / oneDay;       //changed date to dt
        days = Math.ceil(days);

        //create and display message
        if (days == 0)
        {
            message.text("I graduate today!");
        }
        if (days < 0)
        {
            message.text("I graduated from Lipscomb University in May, 2019. I am on to the next big thing!")
        }
        if (days > 0)
        {
            message.text( days.toString().concat(" day(s) until graduation!"))
        }
        
    }); //end click
});    //end ready

