<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="utf-8">
    <title>Download example</title>
</head>
<body>
    <button type="button" id="exportIcal">
        export ical
    </button>
    <script type="text/javascript">

	// buffer from external file...
        var content = "";

        function download(filename, content) {

            if (filename == '' || filename == null || typeof filename === 'undefined') {
                return;
            } else if (!content.length || typeof content != 'string') {
                return;
            }

            var e = document.createElement('a');
                e.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
                e.setAttribute('download', filename + '.ics');
                e.style.display = 'none';
                document.body.appendChild(e);
                e.click();
                document.body.removeChild(e);
        }

        var btn = document.getElementById('exportIcal');

        btn.addEventListener('click', function () {
            var filename = prompt('Enter the name for the file', 'example');
            download(filename, content);
        })

    </script>
</body>
</html>

