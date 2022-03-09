var footer = document.getElementsByClassName("site-footer")[0]; 
var paraPoweredBy = footer.getElementsByTagName("p")[1];
paraPoweredBy.remove();

$(document).ready(function(){
    $(".people-widget").after("<div id = 'art-contain' class='article-container'></div>");
    $("#art-contain").append("<div id ='art-style' class = 'article-style' ></div>");
    $("#art-style").append("<div id = 'alumni' class = 'alumni-people'><h2>Alumni<h2></div>");
    $("#alumni").after("<div id ='Dmitrii' class = 'alumni-people'><b>Dmitrii Bug</b>, visiting scientist, <i>The Ohio State University</i>, 2019</div>");
    $("#Dmitrii").after("<div id ='Philipp' class = 'alumni-people'><b>Philipp Popp</b>, visiting PhD student, <i>The Ohio State University</i>, 2018-2019</div>");
    $("#Philipp").after("<div id ='Marharyta' class = 'alumni-people'><b>Marharyta Petukh</b>, postdoc, <i>University of Tennessee - Oak Ridge National Laboratory</i>, 2015-2018</div>");
    $("#Marharyta").after("<div id ='Artem' class = 'alumni-people'><b>Artem Tishkov</b>, visiting scientist, <i>University of Tennessee, 2014; The Ohio State University</i>, 2019</div>");
    $("#Artem").after("<div id ='Alexander' class = 'alumni-people'><b>Alexander Reznik</b>, visiting scientist, <i>University of Tennessee</i>, 2014</div>");
    $("#Alexander").after("<div id = 'Ogun' class = 'alumni-people'><b>Ogun Adebali</b>, PhD student, <i>University of Tennessee - Oak Ridge National Laboratory</i>, 2011-2016</div>");
    $("#Ogun").after("<div id ='Amit' class = 'alumni-people'><b>Amit Upadhyay</b>, PhD student, <i>University of Tennessee - Oak Ridge National Laboratory</i>, 2010-2015</div>");
    $("#Amit").after("<div id ='Sangita' class = 'alumni-people'><b>Sangita Choudhury</b>, postdoc, <i>University of Tennessee - Oak Ridge National Laboratory</i>, 2010-2011</div>");
    $("#Sangita").after("<div id ='SeRan' class = 'alumni-people'><b>Se-Ran Jun</b>, research associate, <i>University of Tennessee - Oak Ridge National Laboratory</i>, 2010-2011</div>");
    $("#SeRan").after("<div id = 'Leonid' class = 'alumni-people'><b>Leonid Sukharnikov</b>, postdoc, <i>University of Tennessee - Oak Ridge National Laboratory</i>, 2009-2012</div>");
    $("#Leonid").after("<div id = 'Aaron' class = 'alumni-people'><b>Aaron Fleetwood</b>, PhD student, <i>University of Tennessee - Oak Ridge National Laboratory</i>, 2008-2014</div>");
    $("#Aaron").after("<div id = 'Brian' class = 'alumni-people'><b>Brian Cantwell</b>, postdoc, <i>University of Tennessee - Oak Ridge National Laboratory</i>, 2008-2010</div>");
    $("#Brian").after("<div id = 'Bhanu' class = 'alumni-people'><b>Bhanu Rekapalli</b>, PhD student, <i>University of Tennessee - Oak Ridge National Laboratory</i>, 2008-2011</div>");
    $("#Bhanu").after("<div id = 'Harold' class = 'alumni-people'><b>Harold Shanafield</b>, MS student, <i>University of Tennessee - Oak Ridge National Laboratory</i>, 2007-2008</div>");
    $("#Harold").after("<div id = 'Davi' class = 'alumni-people'><b>Davi Ortega</b>, PhD student, <i>University of Tennessee - Oak Ridge National Laboratory</i>, 2006-2012</div>");
    $("#Davi").after("<div id = 'Roger' class = 'alumni-people'><b>Roger Alexander</b>, PhD student, <i>Georgia Institute of Technology</i>, 2003-2007</div>");
    $("#Roger").after("<div id = 'Kunmi' class = 'alumni-people'><b>Kunmi Ayanbule</b>, MS student, <i>Georgia Institute of Technology</i>, 2003-2005</div>");
    $("#Kunmi").after("<div id = 'Kristin' class = 'alumni-people'><b>Kristin Wuichet</b>, PhD student, <i>Georgia Institute of Technology</i>, 2002-2007</div>");
    $("#Kristin").after("<div id = 'Siddarth' class = 'alumni-people'><b>Siddarth Joshi</b>, MS student, <i>Georgia Institute of Technology</i>, 2002-2004</div>");
    $("#Siddarth").after("<div id = 'William' class = 'alumni-people'><b>William Black</b>, MS student, <i>Georgia Institute of Technology</i>, 2002-2004</div>");
    $("#William").after("<div id = 'Luke' class = 'alumni-people'><b>Luke Ulrich</b>, PhD student, <i>Georgia Institute of Technology</i>, 2001-2006</div>");
    $("#Luke").after("<div id = 'Chengyi' class = 'alumni-people'><b>Chengyi Shu</b>, undergraduate student, <i>Georgia Institute of Technology</i>, 2001-2003</div>");
    $("#Chengyi").after("<div id = 'Omar' class = 'alumni-people'><b>Omar Alexander</b>, MS student, <i>Georgia Institute of Technology</i>, 2001-2003</div>");
    $("#Omar").after("<div id = 'Lance' class = 'alumni-people'><b>Lance Miller</b>, PhD student, <i>Georgia Institute of Technology</i>, 2001-2006</div>");
    $("#Lance").after("<div id = 'Christophe' class = 'alumni-people'><b>Christophe Mougel</b>, postdoc, <i>Georgia Institute of Technology</i>, 2000-2001</div>");
    $("#Christophe").after("<div id = 'Enid' class = 'alumni-people'><b>Enid McKinley</b>, MS student, <i>Loma Linda University</i>, 1999-2000</div>");
    $("#Enid").after("<div id = 'Gladys' class = 'alumni-people'><b>Gladys Alexandre</b>, postdoc, <i>Loma Linda University</i>, 1997-2000; <i>Georgia Institute of Technology</i>, 2000-2001</div>");
    $("#Gladys").after("<div id = 'Subrata' class = 'alumni-people'><b>Subrata Das</b>, postdoc, <i>Loma Linda University</i>, 1997-1998</div>");
    $("#Subrata").after("<div id = 'Sean' class = 'alumni-people'><b>Sean Bullock</b>, MS student, <i>Loma Linda University</i>, 1997-1999</div>");
    $("#Sean").after("<div id = 'Suzanne' class = 'alumni-people'><b>Suzanne Greer-Phillips</b>, PhD student, <i>Loma Linda University</i>, 1997-2001</div>");
    $("#Suzanne").after("<div id ='Vyacheslav' class = 'alumni-people'><b>Vyacheslav Bespalov</b>, visiting PhD student, <i>Loma Linda University</i>, 1995-1996</div>");

    //Forceto change the nav bar menue elements 'contact' and 'people' colours upon selection class 'active' gets removed by the woochemy.
    var pathname = window.location.pathname;
    if (pathname === '/contact/') {
        var contactLink = $('a[href="/contact"]');
        contactLink.addClass("altactive");
    } else if (pathname === '/') {
        var contactLink = $('a[href="/"]');
        contactLink.addClass("altactive");
    } else if (pathname === '/people/' || pathname.split("/")[1] === 'author') {
        var contactLink = $('a[href="/people"]');
        contactLink.addClass("altactive");
        //After adding divs with alumni page footer disapers because it gets overlapped by the previous div. For this reason I am adding a class with padding-top set to 70px
        if (pathname === '/people/')
            $('div.page-footer').addClass("page-footer-extend") 
    }

    $(".share-box").remove();
});