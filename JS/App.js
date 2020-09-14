var count = 0;

$("h2").text("Khela Hobe Akhoni Khelbo");

$(".baggor").click(function() {
    count = count + 1;
    //$(this).text("X");
    //$(this).text(count);

    if (count % 2 == 0) {
        $(this).text("0");
    } else {
        $(this).text("X");
    }
})