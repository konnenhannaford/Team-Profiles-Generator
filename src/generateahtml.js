async function generateHTML(manager, engineers, interns) {
  let html = "";
  html += 
  `
<div class="card" >
  <div class="card-header">
    <h3> ${manager.name} </h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li >Manager </li>
      <li >ID: ${manager.id}</li>
      <li >Email: <a href="mailto:${manager.email}">${manager.email}</a></li>    
      <li >Office Number: ${manager.office}</li>
    </ul>
  </div>
</div>`;

engineers.forEach((engineer) => {
  html += `
<div class="card" >
  <div class="card-header">
    <h3>${engineer.name}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li >Engineer</li>
      <li >ID: ${engineer.id}</li>
      <li >Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
      <li >Github: <a href="http://github.com/${engineer.github}" target="_blank">${engineer.git}</a></li>  </div>
</div>`;

});
interns.forEach((intern) => {
  html += `
  <div class="card" >
  <div class="card-header">
  <h3>${intern.name}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li >Intern </li>
      <li >ID: ${intern.id}</li>
      <li >Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
      <li >School: ${intern.school}</li>
    </ul>
  </div>
</div>`;
});
return
`
<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
  <title>Hannaford Corp - Team Profile Generator</title>
  <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/> -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poiret+One&family=Raleway&display=swap" rel="stylesheet">    
  <link rel="stylesheet" href="index.css"> 
</head>
<body>
    <header class="main-header">
      <h1 >Team Profile Generator</h1>
      <h2>Sort your staff</h2>     
    </header>

    <main class="teampage">
      ${html}
    </main>
</body>
</html>`;
}

module.exports = generateHTML;