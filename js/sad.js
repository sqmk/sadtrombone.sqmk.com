/**
 * This allows things to be all like, wah wah wah waaaah.
 */
$(document).ready(function () {
    var url = location.pathname.replace(/^\//, '');

    if (url.match(/^https?:\/\//i)) {
        $('#fail').attr('src', url).show();
        $('#fail').load(function () {
            $('title').text(
                $('title').text() + ' @ ' + url
            );
            $('#trombone')[0].play();
        });
    } else {
        $('#about').show();
        $('#wahwahwahwaaaah').click(function () {
            $('#trombone')[0].play();
        }).click();
    }
});