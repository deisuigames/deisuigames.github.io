<?php

		if ( isset( $_POST['writing_time'] ) && $_POST['writing_time'] !== '' ) {
			$this->writing_time = $this->sanitize_post( $_POST['writing_time'], $mode );
			$this->writing_time = mb_convert_kana( $this->writing_time, 'a' );
		}