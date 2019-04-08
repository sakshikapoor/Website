<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="bootstrap4-tagsinput-master\tagsinput.css"></script>
<script src="bootstrap4-tagsinput-master\tagsinput.js"></script>
<script type="text/javascript" src="bootstrap4-tagsinput-master\package.json"></script>

<style>
#WebSiteName
{
  color:white;
  font-size: 25px;
  font-family: Trebuchet MS;
}
#bday
{
  height:40px;

}
#browse
{
    cursor: pointer;
    height:40px;
}
.btn-file {
    position: relative;
    overflow: hidden;
}
.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 50%;
    min-height: 50%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;

    cursor: inherit;
    display: block;
}

#img-upload{
    max-width: 150px;
    max-height: 150px;
}
.vertical-center
{

  align-items: center;
}
.tab {
    float: left;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    width: 30%;
    height: 350px;
}

/* Style the buttons that are used to open the tab content */
.tab button {
    display: block;
    background-color: inherit;
    color: black;
    padding: 22px 16px;
    width: 100%;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
    background-color: #ddd;
}

/* Create an active/current "tab button" class */
.tab button.active {
    background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
    float: left;
    padding: 0px 12px;
    border: 1px solid #ccc;
    width: 70%;
    border-left: none;
    height: 350px;
}

#left
{
  background-color: #404040;
}
#right
{
  background-color: #404040;
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
#nextbutton
{
  background-color: Tomato;
  float: right;

}
#nextbutton:hover
{
background-color: LightPink;
}

li.hide
{
       display:none;
}
li.unhide
{
       
}

.navbar-nav > li
{
  margin-left:30px;
  margin-right:30px;
}
#ul{

  margin-top: 20px;

  max-height: 350px;
  overflow: scroll;



}
.clearfix{
  overflow: auto;
}
.list-group-item {


  border-bottom: 1px solid #ccc;

}
input[type=text], select {
    width: 25%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
input[type=submit]:hover {
    background-color: #45a049;
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
<script>
$(function () {
  $(".repeat").on('click', function (e) {
      e.preventDefault();
      var $self = $(this);
      $self.before($self.prev('div').clone());

    });
});
</script>
<script>
$('input').tagsinput({
  typeahead: {
    freeInput: true
  }
});
</script>
<script>

function loadYearSelector()
{

  //  document.getElementsByClassName('tabcontent').innerHTML += '<span>Label: <input type="text"><small>(ft)</small></span>\r\n';
  var start = 1975;
  var end = 2050;
  var options = "";


  for(var year = start ; year <=end; year++){
    options += "<option>"+ year +"</option>";
  }
  document.getElementById("From").innerHTML = options;
  document.getElementById("To").innerHTML = options;
  document.getElementById("From1").innerHTML = options;
  document.getElementById("To1").innerHTML = options;
  document.getElementById("From2").innerHTML = options;
  document.getElementById("To2").innerHTML = options;
  document.getElementById("On").innerHTML = options;

 
  
  // var a = hidden_array[14];
  // document.getElementById("14").class= "hide";
   //if (a == "hide")
   //document.getElementById("14").class= "hide";
   //else
   //document.getElementById("14").class = "unhide";
 

}


</script>
<script>

$(document).ready( function() {
    	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
		});

		$('.btn-file :file').on('fileselect', function(event, label) {

		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;

		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }

		});
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();

		        reader.onload = function (e) {
		            $('#img-upload').attr('src', e.target.result);
		        }

		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imgInp").change(function(){
		    readURL(this);
		});
	});
</script>



</head>
<body onLoad="document.getElementById('fullname').click();loadYearSelector();">
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  <p id="para"></p>
  <style>
li.hide
{
       display:none;
}
li.unhide
{
       
}
  
  </style>
 <?php  
 $var = $_POST["cb"] ;
 ?>

 <script type= "text/javascript">
 var js_array = <?php echo json_encode($var);  ?>;

 //var arr = JSON.parse(js_array[1]);
 //var arr2 = JSON.parse(js_array[2]);
 //var arr3 = JSON.parse(js_array[8]);
 var hidden_array =[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
 console.log(js_array.length);
 console.log(hidden_array.length);
 var len = js_array.length;
 for(var i = 1 ; i<=len ; i++)
 {

  hidden_array[js_array[i]]= false;

 }
 for(var i = 1 ; i <15 ; i++)
 {
 
console.log(hidden_array[i]);

}
 </script>


  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="first.html" id="WebSiteName">MyResume</a>
        </div>
        <ul class="nav navbar-nav">
             <li class="btn"><a href=first.html>Home</a></li>
             <li class="btn"><a href=About.html>About Us</a></li>
             <li class="btn"><a href=Portfolio.html>Portfolio</a></li>
             <li class="btn"><a href=Contact.html>Contact Us</a></li>
       </ul>
    </div>
  </nav>
      
  <div class="jumbotron clearfix" id="portfoliobk" >




  <div class="tab">
    <ul class="clearfix" style="max-height:350px;list-style:none;">

  <li><button class="tablinks " id="fullname" onclick="openCity(event, 'Name')">Basic Info</button></li>

  <li class = hidden_array[1]><button class="tablinks " id="1"  onclick="openCity(event, 'ProfilePic')">Profile Pic</button></li>
  <script type="text/javascript">
  document.getElementById("1").hidden=hidden_array[1];
  </script>

  <li><button class="tablinks " id="am" onclick="openCity(event, 'AboutMe')">About Me</button></li>
 
  <li class = hidden_array[2]><button class="tablinks " id="2" onclick="openCity(event, 'Education')">Education</button></li>
  <script type="text/javascript">
  document.getElementById("2").hidden=hidden_array[2];
  </script>
  <li class = hidden_array[4]><button class="tablinks " id="4" onclick="openCity(event, 'Projects')">Projects</button></li>
  <script type="text/javascript"> 
  document.getElementById("4").hidden=hidden_array[4];
  </script>
  <li class = hidden_array[3]><button class="tablinks " id="3" onclick="openCity(event, 'ContactInfo')">Contact Info</button></li>
  <script type="text/javascript">
  document.getElementById("3").hidden=hidden_array[3];
  </script>
  <li class = hidden_array[5]><button class="tablinks " id="5" onclick="openCity(event, 'Hobbies')">Hobbies</button></li>
  <script type="text/javascript">
  document.getElementById("5").hidden=hidden_array[5];
  </script>
  <li class = hidden_array[6]><button class="tablinks " id="6" onclick="openCity(event, 'WorkExperience')">Work Experience</button></li>
  <script type="text/javascript">
  document.getElementById("6").hidden=hidden_array[6];
  </script>
  <li class = hidden_array[7]><button class="tablinks " id="7" onclick="openCity(event, 'Internships')">Internships</button></li>
  <script type="text/javascript">
  document.getElementById("7").hidden=hidden_array[7];
  </script>
  <li class = hidden_array[8]><button class="tablinks " id="8" onclick="openCity(event, 'Languages')">Languages</button></li>
  <script type="text/javascript">
  document.getElementById("8").hidden=hidden_array[8];
  </script>
  <li class = hidden_array[9]><button class="tablinks " id="9" onclick="openCity(event, 'ProfessionalSkills')">Professional Skills</button></li>
  <script type="text/javascript">
  document.getElementById("9").hidden=hidden_array[9];
  </script>
  <li class = hidden_array[10]><button class="tablinks " id="10" onclick="openCity(event, 'Softwares')">Softwares</button></li>
  <script type="text/javascript">
  document.getElementById("10").hidden=hidden_array[10];
  </script>
  <li class = hidden_array[11]><button class="tablinks " id="11" onclick="openCity(event, 'CareerObj')">Career Objective</button></li>
  <script type="text/javascript">
  document.getElementById("11").hidden=hidden_array[11];
  </script>
  <li class = hidden_array[12]><button class="tablinks " id="12" onclick="openCity(event, 'Websites')">Websites</button></li>
  <script type="text/javascript">
  document.getElementById("12").hidden=hidden_array[12];
  </script>
  <li class = hidden_array[13]><button class="tablinks " id="13" onclick="openCity(event, 'Other')">Other Accomplishments</button></li>
  <script type="text/javascript">
  document.getElementById("13").hidden=hidden_array[13];
  </script>
  <li><button class="tablinks " id="14" onclick="openCity(event, 'Certifications')">Certifications</button></li>
  <script type="text/javascript">
  document.getElementById("14").hidden=hidden_array[14];
  </script>
</ul>
</div>

<div id="Name" class="tabcontent">
<center>
  <br>
  <h4>Enter your name</h4>
  <br>
  <label for="fname">First Name: </label>
   <input type="text" id="fname" name="firstname" placeholder="Your first name">
    <br>
   <label for="lname">Last Name: </label>
   <input type="text" id="lname" name="lastname" placeholder="Your last name">
   <br>
   <br>

   Birth Date: <input type="date" style="border:none;" id="bday"><br><br>
<br><br>
</center>
</div>


<div id="ProfilePic" class="tabcontent" >
<center>
  <br>

      <h4>Upload Image</h4>
        <br>
         <div class="input-group">
             <span class="input-group-btn">
                 <span class="btn btn-default btn-file" id="browse">
                  <u>Browse…</u><input type="file" id="imgInp">
                 </span>
             </span>
             <input type="text" class="form-control" readonly>
         </div>
         <br>
         <img id='img-upload'/>

<br><br>
</center>
</div>


<div id="AboutMe" class="tabcontent"  >
  <center><br>
  <h4>Write something about yourself </h4><br>
  <textarea class="form-control" rows="5" placeholder="Pitch yourself in 150 characters" style="max-width:500px;"></textarea>
  <br><br>
  </center>
</div>


<div id="Education" class="tabcontent clearfix" >
  <center>
    <br>
  <h4>Enter your education details</h4><br>
  <div class="repeatable"><div>
  <label for="CollegeName">College Name: </label>
   <input type="text" id="CollegeName" name="CollegeName" >
   <label for="Specialization">Specialization: </label>
   <input type="text" id="Specialization" name="Specialization" >
   <br>
   <label for="From">From: </label>
   <select id="From" name="From"></select>
   <label for="To">To: </label>
   <select id="To" name="To"></select>
   <br>
   Degree:
   <select id="BE">
      <option value="Bachelors">Bachelors</option>
      <option value="Masters">Masters</option>
      <option value="Phd">Phd</option>
      <option value="HSC">High School</option>
      <option value="SSC">Senior Secondary School</option>
    </select>
   <label for="Percentage">Percentage: </label>
   <input type="number" min="1" max="100" id="Percentage" name="Percentage" style="width:50px;" placeholder="00.00"> %
   <br><br></div>
  <button type="button" class="btn btn-default btn-md repeat">
        <i class="fa fa-plus-circle" aria-hidden="true" ></i> Add
  </button>
  &nbsp;</div>
</center>
</div>




<div id="ContactInfo" class="tabcontent" >
<center><br>
  <h4>Enter Contact Info</h4><br>
  Mobile Number: <input type="number" min="1" max="9999999999" id="mobilenumber" name="mobilenumber" style="width:150px;">
  <br><br>
  Address: <input type="text" id="address" name="address" style="width:300px;height:100px;">
  <br>
</center>
</div>




<div id="Projects" class="tabcontent clearfix" >
  <center><br>
    <h4>Enter Project Info</h4><br>
      <div class="repeatable">
        <div>
Project Name: <input type="text" id="ProjectName" name="ProjectName" ><br>
Project Description: <input type="text" id="ProjectDesc" name="ProjectDesc" style="width:350px;height:100px;">
<br><br></div>
<button type="button" class="btn btn-default btn-md repeat">
      <i class="fa fa-plus-circle" aria-hidden="true" ></i> Add
</button>
&nbsp;</div>
</center>
</div>



<div id="Hobbies" class="tabcontent" >
  <center><br>
    <h4>Enter your favourite hobbies</h4><br>
    <input type="text" style="width:75%;" data-role="tagsinput"  placeholder="Type & Hit Enter"/>
    <br><br>
</center>
</div>



<div id="WorkExperience" class="tabcontent clearfix">
  <center><br>
    <h4>Enter your Work Eperience</h4><br>
      <div class="repeatable">
        <div>
  Company Name:<input type="text" style="width:75%;"/><br>
  Job Position: <input type="text" style="width:75%;"  placeholder="eg: Senior Software Developer"/><br>
  Job Description: <input type="text" style="width:75%;" style="width:75%;height:150px;" /><br>
  <label for="From">From: </label>
  <select id="From1" name="From"></select>
  <label for="To">To: </label>
  <select id="To1" name="To"></select>
  <br><br></div>
  <button type="button" class="btn btn-default btn-md repeat">
        <i class="fa fa-plus-circle" aria-hidden="true" ></i> Add
  </button>&nbsp;</div>
</div>



<div id="Internships" class="tabcontent clearfix" >
  <center><br>
    <h4>Enter your Internships Info</h4><br>
      <div class="repeatable"><div>
  Company Name: <input type="text" style="width:75%;"/><br>
  Internship Description: <input type="text" style="width:75%;" style="width:75%;height:150px;" /><br>
  <label for="From">From: </label>
  <select id="From2" name="From"></select>
  <label for="To">To: </label>
  <select id="To2" name="To"></select>
  <br><br></div>
  <button type="button" class="btn btn-default btn-md repeat">
        <i class="fa fa-plus-circle" aria-hidden="true" ></i> Add
  </button>&nbsp;</div>
</div>




<div id="Languages" class="tabcontent clearfix" >
  <center><br>
    <h4>Enter Languages known</h4><br>
    <div class="repeatable"><div>
    Language:
    <select data-placeholder="Choose a Language...">
        <option value="AF">Afrikanns</option><option value="SQ">Albanian</option><option value="AR">Arabic</option>
        <option value="HY">Armenian</option><option value="EU">Basque</option>        <option value="BN">Bengali</option><option value="BG">Bulgarian</option>
        <option value="CA">Catalan</option><option value="KM">Cambodian</option>        <option value="ZH">Chinese (Mandarin)</option>
        <option value="HR">Croation</option><option value="CS">Czech</option>        <option value="DA">Danish</option><option value="NL">Dutch</option>
        <option value="EN">English</option><option value="ET">Estonian</option>        <option value="FJ">Fiji</option><option value="FI">Finnish</option>
        <option value="FR">French</option><option value="KA">Georgian</option>        <option value="DE">German</option><option value="EL">Greek</option>
        <option value="GU">Gujarati</option><option value="HE">Hebrew</option>        <option value="HI">Hindi</option><option value="HU">Hungarian</option>
        <option value="IS">Icelandic</option><option value="ID">Indonesian</option>        <option value="GA">Irish</option><option value="IT">Italian</option>
        <option value="JA">Japanese</option><option value="JW">Javanese</option> <option value="KO">Korean</option><option value="LA">Latin</option>
        <option value="LV">Latvian</option><option value="LT">Lithuanian</option>        <option value="MK">Macedonian</option><option value="MS">Malay</option>
        <option value="ML">Malayalam</option><option value="MT">Maltese</option>        <option value="MI">Maori</option><option value="MR">Marathi</option>
        <option value="MN">Mongolian</option><option value="NE">Nepali</option>        <option value="NO">Norwegian</option><option value="FA">Persian</option>
        <option value="PL">Polish</option> <option value="PT">Portuguese</option>        <option value="PA">Punjabi</option><option value="QU">Quechua</option>
        <option value="RO">Romanian</option><option value="RU">Russian</option>        <option value="SM">Samoan</option><option value="SR">Serbian</option>
        <option value="SK">Slovak</option><option value="SL">Slovenian</option>        <option value="ES">Spanish</option><option value="SW">Swahili</option>
        <option value="SV">Swedish </option><option value="TA">Tamil</option>        <option value="TT">Tatar</option><option value="TE">Telugu</option>
        <option value="TH">Thai</option><option value="BO">Tibetan</option>        <option value="TO">Tonga</option><option value="TR">Turkish</option>
        <option value="UK">Ukranian</option><option value="UR">Urdu</option>        <option value="UZ">Uzbek</option><option value="VI">Vietnamese</option>
        <option value="CY">Welsh</option><option value="XH">Xhosa</option>
      </select>
      Proficiency:
      <select id="proficiency">
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Native">Native</option>
      </select>
      <br><br></div>
      <button type="button" class="btn btn-default btn-md repeat">
            <i class="fa fa-plus-circle" aria-hidden="true" ></i> Add
      </button>&nbsp;</div>
</div>







<div id="ProfessionalSkills" class="tabcontent clearfix" >
  <center><br>
    <h4>Enter your Professional Skills</h4><br>
      <div class="repeatable"><div>
    <br>
    Skill: <input type="text" style="width:25%;"/>&nbsp;
    Rate Yourself: <input type="range" min="1" max="100" value="50">
  <br><br></div>
  <button type="button" class="btn btn-default btn-md repeat">
        <i class="fa fa-plus-circle" aria-hidden="true" ></i> Add
  </button>&nbsp;</div>
  </center>
</div>



<div id="Softwares" class="tabcontent">
  <center><br>
    <h4>Enter your Software Skills</h4><br>
    <input type="text" style="width:300px;" data-role="tagsinput"  placeholder="Type & Hit Enter"/>
    <br><br>
    </center>
</div>



<div id="CareerObj" class="tabcontent" >
  <center><br>
    <h4>Describe your Career Objective</h4><br>
    <textarea class="form-control" rows="5" placeholder="Pitch your career objective in 150 characters" style="max-width:500px;"></textarea>
    <br><br>
    </center>
</div>




<div id="Websites" class="tabcontent" >
  <center><br>
    <h4>Enter your Website</h4><br>
    <input type="text"  placeholder="Enter your website url" style="width:500px;"></input>
    <br><br>
    </center>
</div>




<div id="Other" class="tabcontent clearfix" >
  <center><br> <h4>Enter Other Accomplishments</h4><br>
    <div class="repeatable"><div>
     <input type="text"  placeholder="eg: Created a website www.abc.com" style="width:500px;"></input><br></div>
    <button type="button" class="btn btn-default btn-md repeat">
          <i class="fa fa-plus-circle" aria-hidden="true" ></i> Add
    </button>&nbsp;
  </div>
  </center>
  </div>



<div id="Certifications" class="tabcontent clearfix">
  <center><br>
    <h4>Enter your Certifications</h4><br>
      <div class="repeatable "><div>
    Certification: <input type="text"  placeholder="Enter Certification Name" style="width:500px;"></input><br>
    Company/Institute: <input type="text"  placeholder="eg: Oracle" style="width:300px;"></input><br>
    Year: <select id="On" name="On"></select>
    <br><br></div>
    <button type="button" class="btn btn-default btn-md repeat">
          <i class="fa fa-plus-circle" aria-hidden="true" ></i> Add
    </button>&nbsp;
  </div>
    </center>
</div>




  <button type="button" id="nextbutton" class="btn btn-default btn-md"><span>Next</span></button>


</div>




<script>
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}

// Get the element with id="defaultOpen" and click on it

   

</script>



</body>
</html>
