var $infectedgp = $('.infectedgp');

$infectedgp.on('mouseenter', function(){
    $infectedgp.get(0).play();
});

$infectedgp.on('mouseout', function(){
    $infectedgp.get(0).pause();
});

