function Stopwatch()
{
    let time=0,running = false,starttime = null,endtime = null;
    this.startit = function()
    {
        if(running)
         Error('watch already running');
        else
        running = true;
        starttime = new Date();
    };

    this.stop = function()
    {
        if(!running)
        Error('watch not running already');
        else
        endtime = new Date();
        time = (endtime.getTime() - starttime.getTime())/1000;
    };

    this.show = function()
    {
        console.log(time);
    }

    this.reset = function()
    {
        time = 0;
        running = false;
        starttime = null;
        endtime = null;
        console.log('everything is reset');
    }

    let Error = function(string)
    {
        console.log(string);
    }
}

const sw = new Stopwatch();