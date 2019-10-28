

            
           // gets the image urls
        function fetchData() {
            var script = document.createElement('script');
            // flickr public api 
            script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=travel,food," + document.getElementById("search").value;;
            
            document.querySelector('head').appendChild(script);
            document.getElementById('line').innerHTML = "RESULTS:"
        }
        // to get the photos 
        function jsonFlickrFeed(data) {
            var image = " ";
            data.items.forEach(function (element) {
                image += "<img src=\"" + element.media.m + "\"/>";
            });
            // adding the images 
            document.getElementById("photos").innerHTML = image;
            
        }
    
    </script> 
    
    
    <script type="text/javascript">
        $(document).ready(function () {

            $("#submit").click(function (e) {
                $("#photos").html("");

               
            });
        });
    

  
