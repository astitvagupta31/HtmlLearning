/*
 
---> HTML - HyperText Markup Language (It is used to make webpages)

Note :

<!DOCTYPE html>        --------> Specifies this is an HTML5 doc
<html lang="en">       --------> It is a root of a HTML page
<head>                 --------> It contains page metadata ( Metadata --> Data about data )
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Learning</title>      -------> It contains the title of the page
</head>
<body>                            --------> It contains the page body (rendered on the browsers)
    <h1> Heading </h1>            --------> This is heading tag (h1 to h6)
    <p>  This is paragraph </p>   --------> This is paragraph tag
</body>                           --------> closing body tag
</html>                           --------> closing html tag

Note : Some tags have no content known as "Empty Tags" like (<br>)

Note : <br> ---> To give line space
       <hr> ---> To draw horizontal line  

Note : <!-- Comments in Html  -->     ----> They can help to document the source code / This code should not be parsed

Note : -> HTML is case insensitive language <H1> or <h1> is same but use lowercase tags
       -> <a href="https://www.google.com">Google</a>  (href,src,class,id etc. -> Attributes) (<a> -> Anchor tag for links)
       -> Attributes : It is used to add more information to the html tag or element
       -> <img src="headerBg.jpg" alt="pizza image" />  (src is source attribute to image, alt -> alternative)
       ->    <b> Hello Guys </b>   --> Bold tag to make text bold
             <i>Hello guys</i>     --> To make text italic
             <u>Hello Guys</u>     --> To make text underline
             <br>                  --> Empty tag (Insert New line )
             <big> </big>          
             <small> </small>
       -> <hr>                     --> To draw a line 
       ->    <!-- SubScript and SuperScript -->     (By using this tag we can add subscript and superscripts like (CO2, X^2))
                 <p>CO<sub>2</sub> </p>
                 <p>Four<sup>2</sup> </p>

Note : --> pretag is used to display a text as it is we want.
       --> <pre>  This is astitva
                   New haircut
                      In saloon </pre>                

       --> HTML ignores extra spaces and newlines. 

Note : Design a Website by using : 

------> <Header>
------> <Main>
------> <Footer>

---------------------> <Main> contains following tags : 
---------------------> <section> --> A page section
---------------------> <article> --> A self contained content
---------------------> <aside>   --> content aside from the content (like- Ads etc.)
---------------------> </main>   --> Main closing tag

Note : -> Above tags is SEO friendly
       -> <a href='google.com' target="_main">Contact Us </a>     (target="_main"/target="_blank"  ---> is open the new tab)
       -> <a src="img/imag.png"> (if iamges are in folders)

----> <div> -->  It is used as a container for other elements / Block level element      
            --> Always takes full width

----> <span> --> Span is a inline container / Inline element
             --> Takes as much width as necessary            


Notes : List --> List are used to display a content which represnt a list
             --> Types : 1. Unordered List    2. Ordered List     (used to list ordered items)

             ->  <ul type="square">                         -> <ol>
                      <li>Dosa</li>                  <li>Phone </li>
                      <li>Samosa</li>                <li>Laptop</li>
                      <li>Idli</li>              </ol>
                      <li>Pizza</li>
                 </ul>

        Table --> It is used to define tables in html
              --> It is used to format or display tabular data
           
           --> <tr> tag -> used to display table row
           --> <td> tag -> used to display table data
           --> <th> tag -> used in place of table data for displaying table headers     
           --> <caption> -> This tag is used to provide caption
           --> <thead> --> used to define table head
Example :    
<!-- 
    <div>
        <table>
        <thead>
        <captain> This is the marksheet score </caption>
            <tr>
                <th colspan="2">S.no</th>     (colspan -> when we need heading on two columns) (used to create cells spacing)
                <th>Maths</th>
                <th>Science</th>
            </tr>
            <tr>
                <th>1</th>
                <th>10</th>
                <th>50</th>                
            </tr>
            </thead>
            <tbody>
            <tr>
            <th></th>
            <th></th>
            </tr>
             <tr>
            <th></th>
            <th></th>
            </tr>           
            </tbody>
        </table>
    </div> --> 


-----> Note : HTML FORMS : It is used to collect input from the user.
                        ----> <form action="form.php"> Elements of the form </form>
                        ----> <input> -> this can be type (checkbox,radio button, text, submit etc.)
                        -----> <video src="videolink">
                        ------> <iframe src="videolink" frameborder="0" width="100px">

Note : SEO (Search Engine Optimization)
        -> It is used to improve the ranking of websites
        -> Types : 1. On page SEO   2. Off page SEO
        -> HTML SEO : 
                  -> Set the titile very nice and to the point
                  -> Set the meta description
                  -> <meta name="description" content="....">
                  -> Set a nice url slug
                  -> set a meta author tag
                  -> Set a favicon
                  -> Set a meta keyword tag
                  -> <meta name="keywords" content="....">
        -> favicon (<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">) 
        -> Compress image and other resources
        -> remove unused html,css and js files and compress them
        -> add alt text to images         























































*/
