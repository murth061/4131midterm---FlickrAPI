
        /*JavaScript Method*/
        function JavaScriptFetch() {
            var script = document.createElement('script');
            script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=travel," + document.getElementById("search").value;;
            document.querySelector('head').appendChild(script);
        }

        function jsonFlickrFeed(data) {
            var image = "";
            data.items.forEach(function (element) {
                image += "<img src=\"" + element.media.m + "\"/>";
            });

            document.getElementById("outputDiv").innerHTML = image;
        }
        /*End*/
    </script>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#reset").click(function (e) {
                location.reload();
            });

            $("#submit").click(function (e) {
                $("#outputDiv").html("");

               
            });
        });

    

  
