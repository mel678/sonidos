// JavaScript Document

$(document).ready(function(e){
	$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
		document.addEventListener("deviceready",function(){
		//precarga el sonido
		//sonido de aniales doesticos
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('perro','audio/perro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gato','audio/gato.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('caballo','audio/caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gallo','audio/gallo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('pato','audio/pato.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cerdo','audio/cerdo.mp3',function(){},function(e){alert('Error '+e);});
		//sonido de aniales salvajes
	    audio.preloadFX('elefante','audio/elefante.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('leon','audio/leon.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('mono','audio/mono.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('tigre','audio/tigre.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('lobo','audio/lobo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('toro','audio/toro.mp3',function(){},function(e){alert('Error '+e);});
		
		//reproducir las notas
		$('.anI').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.anI').bind('touchend',function(){$(this).removeClass('tocada');});
		
		$('.anD').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.anD').bind('touchend',function(){$(this).removeClass('tocada');});
		
		$('.aniI1').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.aniI1').bind('touchend',function(){$(this).removeClass('tocada');});
		
		$('.aniD1').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.aniD1').bind('touchend',function(){$(this).removeClass('tocada');});
		
		$('.aniI2').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.aniI2').bind('touchend',function(){$(this).removeClass('tocada');});
		
		$('.aniD2').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.aniD2').bind('touchend',function(){$(this).removeClass('tocada');});
		
		
		},false); //deviceready
}); //ready