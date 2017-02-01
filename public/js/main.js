$(document).ready(function() {
  console.log("We are linked to the static js file");
  var updatingBear;
  $('.deleteBear').on('click', function(){
    var bearId = $(this).attr('id').slice(4);
    console.log(bearId);
    $.ajax({
      url: '/api/bears/'+bearId,
      method:'DELETE',
    }).done(function (data) {
      console.log(data);
      window.location = '/bears';
    })
  });

$('#newBear').submit(function (e) {
  e.preventDefault();
  var name = $('#name').val();
  var species = $('#species').val();
  var age = $('#age').val();
  var weight = $('#weight').val();
  var location = $('#location').val();
  var attitude = $('#attitude').val();
  $.ajax({
    url: '/api/bears',
    method: 'POST',
    data: {
      name: name,
      species: species,
      age: age,
      weight: weight,
      location: location,
      attitude: attitude,
    }
  }).done(function (data) {
    console.log(data);
    window.location = '/bears';
  });
});

$('.updateBear').on('click', function () {
  var bearId = $(this).attr('id').slice(7);
  updatingBear = bearId;
  console.log(bearId);
  $.get('/api/bears/'+bearId).done(function(data){
    console.log(data);
    $('#name').val(data.name);
    $('#species').val(data.species);
    $('#age').val(data.age);
    $('#weight').val(data.weight);
    $('#location').val(data.location);
    $('#attitude').val(data.attitude);
  });
});

$('#updateBearButton').on('click', function(e) {
  e.preventDefault();
  var updateData = {name: $('#name').val(),
                    age: $('#age').val(),
                    location: $('#location').val(),
                    weight: $('#weight').val(),
                    species: $('#species').val(),
                    attitude: $('#attitude').val(),
                  };
      $.ajax({
        url: '/api/bears/' + updatingBear,
        method: 'PUT',
        data: updateData
      }).done(function(data) {
        console.log(data)
        window.location = '/bears';
      })
  });
});
