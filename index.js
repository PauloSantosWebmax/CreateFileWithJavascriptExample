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

        var ics = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nCALSCALE:GREGORIAN\r\nX-WR-CALNAME:Primeira propriedade de teste@hostogether\r\nMETHOD:REQUEST\r\nPRODID:node-ical-toolkit\r\nX-WR-TIMEZONE:Europe/Lisbon\r\n\r\nBEGIN:VTIMEZONE\r\nTZID:Europe/Lisbon\r\nX-LIC-LOCATION:Europe/Lisbon\r\n\r\nBEGIN:STANDARD\r\nTZOFFSETFROM:+0100\r\nTZOFFSETTO:+0000\r\nTZNAME:WET\r\nDTSTART:19701025T020000\r\nRRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU\r\nEND:STANDARD\r\n\r\n\r\nBEGIN:DAYLIGHT\r\nTZOFFSETFROM:+0000\r\nTZOFFSETTO:+0100\r\nTZNAME:WEST\r\nDTSTART:19700329T010000\r\nRRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU\r\nEND:DAYLIGHT\r\n\r\nEND:VTIMEZONE\r\n\r\n\r\nBEGIN:VEVENT\r\nUID:5a5cabddbcfa46004362afc5@hostogether\r\nDTSTAMP:20180122T102524Z\r\nTRANSP:OPAQUE\r\nDTSTART;VALUE=DATE:20180307\r\nDTEND;VALUE=DATE:20180314\r\nSUMMARY:Hostogether event\r\nSEQUENCE:0\r\nDESCRIPTION:Hostogether.\r\nSTATUS:CONFIRMED\r\nORGANIZER;CN=\"HOSTOGETHER\":mailto:test@hostogether.com\r\nATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=HOSTOGETHER:MAILTO:test@hostogether.com\r\nHOSTOGETHER:HOSTOGETHER ICAL EVENT\r\nEND:VEVENT\r\n\r\n\r\nBEGIN:VEVENT\r\nUID:5a65b87c3c621e00432874c7@hostogether\r\nDTSTAMP:20180122T102524Z\r\nTRANSP:OPAQUE\r\nDTSTART;VALUE=DATE:20180122\r\nDTEND;VALUE=DATE:20180122\r\nSUMMARY:Hostogether event\r\nSEQUENCE:0\r\nDESCRIPTION:Hostogether.\r\nSTATUS:CONFIRMED\r\nORGANIZER;CN=\"HOSTOGETHER\":mailto:test@hostogether.com\r\nATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=HOSTOGETHER:MAILTO:test@hostogether.com\r\nHOSTOGETHER:HOSTOGETHER ICAL EVENT\r\nEND:VEVENT\r\n\r\n\r\nBEGIN:VEVENT\r\nUID:5a65b9063c621e00432874c8@hostogether\r\nDTSTAMP:20180122T102524Z\r\nTRANSP:OPAQUE\r\nDTSTART;VALUE=DATE:20180122\r\nDTEND;VALUE=DATE:20180122\r\nSUMMARY:Hostogether event\r\nSEQUENCE:0\r\nDESCRIPTION:Hostogether.\r\nSTATUS:CONFIRMED\r\nORGANIZER;CN=\"HOSTOGETHER\":mailto:test@hostogether.com\r\nATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=HOSTOGETHER:MAILTO:test@hostogether.com\r\nHOSTOGETHER:HOSTOGETHER ICAL EVENT\r\nEND:VEVENT\r\n\r\n\r\nBEGIN:VEVENT\r\nUID:5a65b9063c621e00432874c9@hostogether\r\nDTSTAMP:20180122T102524Z\r\nTRANSP:OPAQUE\r\nDTSTART;VALUE=DATE:20180307\r\nDTEND;VALUE=DATE:20180307\r\nSUMMARY:Hostogether event\r\nSEQUENCE:0\r\nDESCRIPTION:Hostogether.\r\nSTATUS:CONFIRMED\r\nORGANIZER;CN=\"HOSTOGETHER\":mailto:test@hostogether.com\r\nATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=HOSTOGETHER:MAILTO:test@hostogether.com\r\nHOSTOGETHER:HOSTOGETHER ICAL EVENT\r\nEND:VEVENT\r\n\r\n\r\nBEGIN:VEVENT\r\nUID:5a65b9063c621e00432874ca@hostogether\r\nDTSTAMP:20180122T102524Z\r\nTRANSP:OPAQUE\r\nDTSTART;VALUE=DATE:20180308\r\nDTEND;VALUE=DATE:20180308\r\nSUMMARY:Hostogether event\r\nSEQUENCE:0\r\nDESCRIPTION:Hostogether.\r\nSTATUS:CONFIRMED\r\nORGANIZER;CN=\"HOSTOGETHER\":mailto:test@hostogether.com\r\nATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=HOSTOGETHER:MAILTO:test@hostogether.com\r\nHOSTOGETHER:HOSTOGETHER ICAL EVENT\r\nEND:VEVENT\r\n\r\n\r\nBEGIN:VEVENT\r\nUID:5a65b9063c621e00432874cb@hostogether\r\nDTSTAMP:20180122T102524Z\r\nTRANSP:OPAQUE\r\nDTSTART;VALUE=DATE:20180309\r\nDTEND;VALUE=DATE:20180309\r\nSUMMARY:Hostogether event\r\nSEQUENCE:0\r\nDESCRIPTION:Hostogether.\r\nSTATUS:CONFIRMED\r\nORGANIZER;CN=\"HOSTOGETHER\":mailto:test@hostogether.com\r\nATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=HOSTOGETHER:MAILTO:test@hostogether.com\r\nHOSTOGETHER:HOSTOGETHER ICAL EVENT\r\nEND:VEVENT\r\n\r\n\r\nBEGIN:VEVENT\r\nUID:5a65b9063c621e00432874cc@hostogether\r\nDTSTAMP:20180122T102524Z\r\nTRANSP:OPAQUE\r\nDTSTART;VALUE=DATE:20180310\r\nDTEND;VALUE=DATE:20180310\r\nSUMMARY:Hostogether event\r\nSEQUENCE:0\r\nDESCRIPTION:Hostogether.\r\nSTATUS:CONFIRMED\r\nORGANIZER;CN=\"HOSTOGETHER\":mailto:test@hostogether.com\r\nATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=HOSTOGETHER:MAILTO:test@hostogether.com\r\nHOSTOGETHER:HOSTOGETHER ICAL EVENT\r\nEND:VEVENT\r\n\r\n\r\nBEGIN:VEVENT\r\nUID:5a65b9063c621e00432874cd@hostogether\r\nDTSTAMP:20180122T102524Z\r\nTRANSP:OPAQUE\r\nDTSTART;VALUE=DATE:20180311\r\nDTEND;VALUE=DATE:20180311\r\nSUMMARY:Hostogether event\r\nSEQUENCE:0\r\nDESCRIPTION:Hostogether.\r\nSTATUS:CONFIRMED\r\nORGANIZER;CN=\"HOSTOGETHER\":mailto:test@hostogether.com\r\nATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=HOSTOGETHER:MAILTO:test@hostogether.com\r\nHOSTOGETHER:HOSTOGETHER ICAL EVENT\r\nEND:VEVENT\r\n\r\n\r\nBEGIN:VEVENT\r\nUID:5a65b9063c621e00432874ce@hostogether\r\nDTSTAMP:20180122T102524Z\r\nTRANSP:OPAQUE\r\nDTSTART;VALUE=DATE:20180312\r\nDTEND;VALUE=DATE:20180312\r\nSUMMARY:Hostogether event\r\nSEQUENCE:0\r\nDESCRIPTION:Hostogether.\r\nSTATUS:CONFIRMED\r\nORGANIZER;CN=\"HOSTOGETHER\":mailto:test@hostogether.com\r\nATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=HOSTOGETHER:MAILTO:test@hostogether.com\r\nHOSTOGETHER:HOSTOGETHER ICAL EVENT\r\nEND:VEVENT\r\n\r\n\r\nBEGIN:VEVENT\r\nUID:5a65b9063c621e00432874cf@hostogether\r\nDTSTAMP:20180122T102524Z\r\nTRANSP:OPAQUE\r\nDTSTART;VALUE=DATE:20180313\r\nDTEND;VALUE=DATE:20180313\r\nSUMMARY:Hostogether event\r\nSEQUENCE:0\r\nDESCRIPTION:Hostogether.\r\nSTATUS:CONFIRMED\r\nORGANIZER;CN=\"HOSTOGETHER\":mailto:test@hostogether.com\r\nATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=HOSTOGETHER:MAILTO:test@hostogether.com\r\nHOSTOGETHER:HOSTOGETHER ICAL EVENT\r\nEND:VEVENT\r\n\r\nEND:VCALENDAR";

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
            download(filename, ics);
        })

    </script>
</body>
</html>

