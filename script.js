let names = ['Anna', 'Jan', 'Jonatan', 'Kilian'];

names.forEach((name) => {
    if (name === 'Jan') {
        $('ul').append(
            '<li id=myName>'+ name +'</li>');    
    } else {
        $('ul').append(
            '<li>'+ name +'</li>');
           }
});

$('#myName').css('font-weight', 'bold');


let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$('body').append(
    '<h1>'+ additionalBlock['title'] +'</h1>'
    )
$('body').append(
    '<p>'+ additionalBlock['text'] +'</p>'
)