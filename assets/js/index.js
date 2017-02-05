var timeLoop = function(){
  
  var self = this;

  this.event = function(title, img, msg, next){
    $('#title').html(title);
    $('#img').attr("src", './assets/img/' + img);
    $('#msg').html(msg);
    return setTimeout(next, 7000);
  };

  this.sendMessagePast = function(){
    self.event(
      'Presente',
      'message.png',
      "LUEGO DE ENCONTRARSE EN EL HOTEL CON SU YO DEL PASADO, DIRK Y TODD VAN A DONDE ESTA LA MAQUINA DEL TIEMPO Y LE ENVIAN UN MENSAJE A ZACKARIAH", 
      self.start
    );
  };

  this.goToHotelPast = function(){
    self.event(
      'Una semana en el futuro',
      'travel.png',
      "DIRK Y TODD VIAJAN AL PASADO PARA PREVENIR LA MUERTE DE ZACKARIAH", 
      self.sendMessagePast
    );
  };

  this.resolveMistery = function(){
    self.event(
      'Unos dias en el futuro',
      'puzzle.png', 
      "TODD Y DIRK ENCUENTRAN EL LUGAR DONDE ESTA LA MAQUINA DEL TIEMPO RESOLVIENDO LOS ACERTIJOS QUE DEJO ZACKARIAH", 
      self.goToHotelPast
    );
  };

  this.dirkHotel = function(){
    self.event(
      'Presente',
      'dirkhotel.png',
      'DIRK (llamado telefónico) SE ENCUENTRA CON DIRK (viajero del tiempo) EL CUAL LE DICE QUE DEBE SER AMIGO DE TODD Y LE DA LAS RESPUESTAS A UNOS ACERTIJOS', 
      self.resolveMistery
    );
  };

  this.initDirk = function(){
    self.event(
      'Presente',
      'dirkphone.png',
      'DIRK RECIBE UN LLAMADO DE ZACKARIAH (PADRE DE LYDIA) Y SE DIRIJE AL HOTEL', 
      self.dirkHotel
    );
  };

  this.initAssesin = function(){
    self.event(
      'Presente',
      'hotel.png',
      'LAS PERSONAS DE LA SECTA SE JUNTAN CON ZACKARIAH EN EL HOTEL DONDE TRABAJA TODD, ZACKARIAH LLAMA A DIRK Y LUEGO ES ASESINADO', 
      self.initDirk
    );
  };

  this.machineTravelFuture = function(){
    self.event(
      'AÑO 1968',
      'sect.png',
      'LA MAQUINA DEL TIEMPO LLEGA AL FUTURO, SE CREA UNA SECTA QUE UTILIZA LA MAQUINA PARA INTERCAMBIAR ALMAS, SE ARMA UNA GUERRA CON ZACKARIAH POR LA MAQUINA', 
      self.initAssesin
    );
  };

  this.start = function(){
    self.event(
      'AÑO 1880',
      'dirk_start.png',
      'ZACKARIAH WEBB RECIBE UN MENSAJE DE DIRK DEL FUTURO CON LA MAQUINA QUE ACABA DE CREAR', 
      self.machineTravelFuture
    );
  };
}

$( document ).ready(function() {
  // Start time loop
  var tl = new timeLoop();
  $('.init').click(function(){
    $('.init').hide();
    $('.events').show();
    tl.start();
  });
});

