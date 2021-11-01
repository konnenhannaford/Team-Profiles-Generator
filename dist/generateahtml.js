const generateHTML = () =>
`
<!DOCTYPE html>
<html lang="en-US">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <title>Hannaford Corp - Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"> -->
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poiret+One&family=Raleway&display=swap" rel="stylesheet">    
    <link rel="stylesheet" type="text/css" href="index.css"> 
  </head>
<body>
  <header class="main-header">
    <h1 >Team Profile Generator</h1>
    <h2>Sort your staff</h2>     
</header>

<div class="card" style="width: 18rem;">
  <div class="card-header">
    Card title
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: </li>
      <li class="list-group-item">Email: </li>
      <li class="list-group-item">Github: </li>
    </ul>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-header">
    Card title
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: </li>
      <li class="list-group-item">Email: </li>
      <li class="list-group-item">Github: </li>
    </ul>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-header">
    Card title
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: </li>
      <li class="list-group-item">Email: </li>
      <li class="list-group-item">Github: </li>
    </ul>
  </div>
</div>

<div class="card" style="width: 18rem;">
      <div class="card-header">
        Card title
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: </li>
          <li class="list-group-item">Email: </li>
          <li class="list-group-item">Github: </li>
        </ul>
      </div>
    </div>

<footer >
</footer>
<script src="index.js"></script>

</body>
`;

module.exports = generateHTML;