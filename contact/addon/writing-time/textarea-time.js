
	
	
	if ( $( 'textarea' ).length ) {
		$( 'textarea' )
			.focus(function() {
				start_time = new Date();
			})
			.blur(function() {
				stop_time     = new Date();
				writing_time += Math.round( ( stop_time - start_time ) / 1000 );
			});
	}