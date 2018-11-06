console.log('hello wold');
//object literals

/*const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function()
    {
        console.log('draw');
    }
};

circle.draw();
*/

// factory, constructor function

/*function createCircle(radius)
{
    return 
    {
        radius,
        draw: function()
        {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
*/
/*
function Circle(radius)
{
    console.log('this', this);
    this.radius = radius;
    this.draw = function()
    {
        console.log('draw');
    }
}

const another = new Circle(1);
*/

/*
let obj = {value:10};
function inc(obj)
{
    obj.value++;
}
inc(obj);
console.log(obj);

let number = 10;
function increase(number)
{
    number++;
}
increase(number);
console.log(number);

function Circle(radius)
{
    console.log('this', this);
    this.radius = radius;
    this.draw = function()
    {
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.location = {x:1};

delete circle.location;

for (let key in circle)
{
    console.log(key);
}

const keys = Object.keys(circle);
console.log(keys);

if('radius' in circle)
console.log('radius is present in the circle');
*/

function Circle(radius)
{
    this.radius = radius; // public
    let defaultlocation = {x:10, y:10}; //private
    let computelocation = function(factor) //private
    {
        //someething.
    }
    this.draw = function() // public
    {
        computelocation(0.1); // this function can access the computelocation.
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultlocation', {get: function()
    {
        return defaultlocation;
    },
    set: function(value)
    {
        defaultlocation = value;
    }
});
}

const circle = new Circle(0.1); // circle object can only access radius and draw

