
		
		
		if ( $( '#agree_check' ).length ) {
			var element = $( '#agree_check' ).find( 'input[type="checkbox"]' );
			
			if ( element.prop( 'checked' ) === false ) {
				$( 'span.error_check' ).css( 'display', 'block' );
				error++;
				scroll_point = compare_method( scroll_point, element.offset().top - 300 );
			} else {
				$( 'span.error_check' ).css( 'display', 'none' );
			}
		}