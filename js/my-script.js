



$('#img1').click(function () {
    var imgVlaue = $(this).attr('src');
    $('#mainImage').attr('src', imgVlaue); b 
});

$('#img2').click(function () {
    var imgVlaue = $(this).attr('src');
    $('#mainImage').attr('src', imgVlaue); b 
});
$('#img3').click(function () {
    var imgVlaue = $(this).attr('src');
    $('#mainImage').attr('src', imgVlaue); b 
});
$('#img4').click(function () {
    var imgVlaue = $(this).attr('src');
    $('#mainImage').attr('src', imgVlaue); b 
});












$('#FirstName').keyup(function () {
    var firstNameValue = $('#FirstName').val();
    $('#res1').text(firstNameValue);
});

$('#LastName').keyup(function () {
    var lastNameValue= $('#LastName').val();
    $('#res2').text(lastNameValue);
});

$('#LastName').blur(function () {
    var firstNameValue = $('#FirstName').val();
    var lastNameValue= $('#LastName').val();
    $('#res3').text(firstNameValue+' ' +lastNameValue);
});


function createElement() {
   var newH1Element = document.createElement('h1');
   var newPelement = document.createElement('p');
   newH1Element.innerHTML = "This is Heading";
   newPelement.innerHTML = "This is paragraph";

   document.getElementById('demodiv').appendChild(newH1Element);
   document.getElementById('demodiv').appendChild(newPelement);
};

document.getElementById('btn').onclick = function () {
    createElement();
};