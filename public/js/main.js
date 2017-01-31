$(document).ready(function() {
  console.log("We are linked to the static js file");
  $('.deleteBear').on('click', function(){
    var bearId = $(this).attr('id');
    console.log(bearId);
    $.ajax({
      url: '/api/bears/'+bearId,
      method:'DELETE',
    }).done(function (data) {
      console.log(data, 'im inside the delete function');
      window.location = '/bears';
    })
  });
});
