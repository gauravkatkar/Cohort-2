const express = require("express");
const app = express();

var users = [{

  name : "Gaurav",
  kidneys: [{
    healthy: false,
  }]

}];

app.use(express.json());

app.get("/", function(req,res)
{
  const gauravsKidneys = users[0].kidneys;
  const numberOfKidneys = gauravsKidneys.length;
  let numberOfHealtyKidneys = 0;
  for(let i=0; i<gauravsKidneys.length ; i++)
  {
    if(gauravsKidneys[i].healthy == true)
    {
      numberOfHealtyKidneys = numberOfHealtyKidneys + 1;
    }
  }
  const numberOfUnhealtyKidneys = numberOfKidneys - numberOfHealtyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealtyKidneys,
    numberOfUnhealtyKidneys
  })
  console.log(gauravsKidneys);
})

app.post("/", function(req, res)
{
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })

  res.json({
    msg: 'Done!'
  })
})

app.put("/", function(req,res)
{
  for(let i =0; i< users[0].kidneys.length; i++)
  {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
})

app.delete("/", function(req,res)
{
  const newKidneys = [];
  for(let i=0; i< users[0].kidneys.length; i++)
  {
    if(users[0].kidneys[i].healthy)
    {
      newKidneys.push({
        healthy: true
      })
    }
  }

  users[0].kidneys = newKidneys;
  res.json({msg:"Done!"});
})

app.listen(3000);