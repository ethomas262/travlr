/*Get Travel view*/

const tripsEndpoint = 'http://localhost:3000/api/trips'

const options = {
    method: 'Get',
    headers: {
        'Accept' : 'application/json'
    }
}

const travel = async function(req, res, next){
    console.log('travel controller begin');

    await fetch(tripsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            let message = null;
            if(!(json instanceof Array)){
                message = 'API lookup error';
                json = [];
            }
            else{
                if(!json.length){
                    message = 'No trips exist in our database'
                }
            }
            res.render('Ttravel', {title: 'Travlr Getaways', trips: json});
        })
        .catch(err => res.status(500).send(e.message));
        console.log('Travel controller after render');
}

module.exports = {
    travel
}