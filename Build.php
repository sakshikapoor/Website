<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
 

<style>
#WebSiteName
{
  color:white;
  font-size: 25px;
  font-family: Trebuchet MS;
}
#next
{
  background-color: Tomato;
   cursor:pointer;
   float:right;
}
body
{
  background-color: LightGreen !important;
}
.navbar, .navbar-expand-lg, .navbar-light, .bg-dark
{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
}
#portfoliobk
{

  background-color: #e6e6e6;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
}
#carouselExampleControls
{
  margin:50px;
  height:auto;
}
.jumbotron
{
  margin:50px;
  height: 75%;
}
.navbar-nav > li
{
  margin-left:30px;
  margin-right:30px;
}

.btn:hover
{
  background-color: LightGreen;
}
 a:link:hover
{
    color:black ;
    text-decoration: none;
}
 a:link, a:visited{
  color: white;
  font-size: 18;
}
</style>
</head>
<body>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  <script type="text/javascript">
    function Values()
    {
    var ans = confirm('Continue with the selection?');

     if (ans == true) 
     {
      return true;
      }
     else {
    return false;
    }
    }
    
  </script>

  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="first.html" id="WebSiteName">MyResume</a>
        </div>
    </div>
  </nav>
  <div class="jumbotron" id="portfoliobk" >
      <h4 align="center">Select the contents you want to add</h4>
      </br>
  <form action="AddContent.php" method="post" onsubmit="return Values()" >
    <div class="container">
      <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <div data-toggle="buttons">
          <label class="btn btn-info">
            <input type="checkbox" checked autocomplete="off" value=0 id="cb" name="cb[]"> About Me
          </label>
        </br>
          <label class="btn btn-info">
            <input type="checkbox" autocomplete="off" value=1 id="cb" name="cb[]"> Profile Pic
          </label>
        </br>
        <label class="btn btn-info">
          <input type="checkbox" autocomplete="off" value=2 id="cb"  name="cb[]"> Education
        </label>
      </br>
          <label class="btn btn-info">
            <input type="checkbox" autocomplete="off" value=3 id="cb" name="cb[]"> Contact Info
          </label>
        </br>
          <label class="btn btn-info">
            <input type="checkbox" autocomplete="off" value=4 id="cb" name="cb[]"> Projects Undertaken
          </label>
        </br>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <div data-toggle="buttons">
          <label class="btn btn-info">
            <input type="checkbox" autocomplete="off" id="cb" value=5 name="cb[]"> Hobbies
          </label>
        </br>
              <label class="btn btn-info">
              <input type="checkbox" autocomplete="off" id="cb" value=6 name="cb[]"> Work Experience
                </label>
              </br>
              <label class="btn btn-info">
                <input type="checkbox" autocomplete="off" id="cb" value=7 name="cb[]"> Internships
              </label>
            </br>
            <label class="btn btn-info">
              <input type="checkbox" autocomplete="off" id="cb" value=8 name="cb[]"> Languages
            </label>
          </br>
          <label class="btn btn-info">
            <input type="checkbox" autocomplete="off" value=9 id="cb" name="cb[]"> Professional Skills
          </label>
        </br>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <div data-toggle="buttons">
          <label class="btn btn-info">
            <input type="checkbox"   autocomplete="off" id="cb" value=10 name="cb[]"> Softwares
          </label>
        </br>
              <label class="btn btn-info">
              <input type="checkbox" autocomplete="off" id="cb" value=11 name="cb[]"> Career Objective
                </label>
              </br>
              <label class="btn btn-info">
                <input type="checkbox" autocomplete="off" id="cb" value=12 name="cb[]"> Website
              </label>
            </br>
            <label class="btn btn-info">
              <input type="checkbox" autocomplete="off" id="cb" value=13 name="cb[]"> Other Accomplishments
            </label>
          </br>
          <label class="btn btn-info">
            <input type="checkbox" autocomplete="off" id="cb" value=14 name="cb[]"> Certifications
          </label>
        </div>
          <button type="submit" value="submit" class="btn" id="next">Next</button>
      </div>

    </div>

</div>

</form>
  </div>
</body>
</html>
