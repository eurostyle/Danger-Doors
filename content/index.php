<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      href="https://fonts.googleapis.com/css?family=Merienda+One&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
      <script src="stats.js" defer></script>
    <title>Danger door</title>
  </head>
  <body>
    <nav>
      <div class="container-fluid row text-center justify-content-center">
        <h1>Danger Doors</h1>
      </div>
    </nav>
    <main>
        <form method="post" action="index.php">
          <div  class="container myContainter justify-content-center text-center">
            <div class="row ">
              <div class="col ">
                <div class="card myCard" id="card1">
                  <h2>1</h2>
                  <div class="card-body">
                    <button class="btn btn-primary" name="btn" value="1">ENTER ?</button>
                  </div>
                </div>
              </div>
              <div class="col ">
                <div class="card myCard" id="card2">
                  <h2>2</h2>
                  <div class="card-body">
                      <button class="btn btn-primary" name="btn" value="2">ENTER ?</button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card myCard" id="card3">
                  <h2>3</h2>
                  <div class="card-body">
                      <button class="btn btn-primary" name="btn" value="3">ENTER ?</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <?php
            if (isset($_POST['btn']))
            {   $total_points = 0;
                $total_points_str = "$total_points";
                $rnd = random_int(1,3);
                if ($rnd == 1)
                {
                    echo "<style>
                          #card1 
                          {
                          background-color: darkred;
                          }                             
                      </style>";
                }
                elseif ($rnd == 2)
                {
                    echo "<style>
                          #card2 
                          {
                          background-color: darkred;
                          }                             
                      </style>";
                }
                elseif ($rnd == 3)
                {
                    echo "<style>
                          #card3 
                          {
                          background-color: darkred;
                          }                             
                      </style>";
                }
            if ($rnd != $_POST['btn'])
            {
                switch ($_POST['btn'])
                {
                    case 1:
                        echo "<style>
                              #card1 
                              {
                              background-color: darkgreen;
                              }
                          </style>";
                        $total_points++;
                        break;
                    case 2:
                        echo "<style>
                              #card2 
                              {
                              background-color: darkgreen;
                              }
                          </style>";
                        $total_points++;
                        break;
                    case 3:
                        echo "<style>
                              #card3 
                              {
                              background-color: darkgreen;
                              }
                          </style>";
                        $total_points++;
                        break;
                }
            }

            }
        ?>
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <h4>Stats</h4>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Points Earned</td>
              <td id="totalPoints"></td>
            </tr>
            <tr>
              <td>Incorrect Entries</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Correct Entries</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </body>
</html>
