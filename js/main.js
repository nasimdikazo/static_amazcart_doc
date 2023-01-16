(function($) {
	'use strict';

	// var nav_offset_top = $('header').height() + 50;
	// /*-------------------------------------------------------------------------------
	//   Navbar
	// -------------------------------------------------------------------------------*/

	// //* Navbar Fixed
	// function navbarFixed(){
	//     if ( $('.header_area').length ){
	//         $(window).scroll(function() {
	//             var scroll = $(window).scrollTop();
	//             if (scroll >= nav_offset_top ) {
	//                 $(".header_area").addClass("navbar_fixed");
	//             } else {
	//                 $(".header_area").removeClass("navbar_fixed");
	//             }
	//         });
	//     };
	// };
	// navbarFixed();

	/*-------------------------------------------------------------------------------
         Start Primary Button Ripple Effect
	   -------------------------------------------------------------------------------*/
	$('.primary-btn').on('click', function(e) {
		// Remove any old one
		$('.ripple').remove();

		// Setup
		var primaryBtnPosX = $(this).offset().left,
			primaryBtnPosY = $(this).offset().top,
			primaryBtnWidth = $(this).width(),
			primaryBtnHeight = $(this).height();

		// Add the element
		$(this).prepend("<span class='ripple'></span>");

		// Make it round!
		if (primaryBtnWidth >= primaryBtnHeight) {
			primaryBtnHeight = primaryBtnWidth;
		} else {
			primaryBtnWidth = primaryBtnHeight;
		}

		// Get the center of the element
		var x = e.pageX - primaryBtnPosX - primaryBtnWidth / 2;
		var y = e.pageY - primaryBtnPosY - primaryBtnHeight / 2;

		// Add the ripples CSS and start the animation
		$('.ripple')
			.css({
				width: primaryBtnWidth,
				height: primaryBtnHeight,
				top: y + 'px',
				left: x + 'px'
			})
			.addClass('rippleEffect');
	});
	/*-------------------------------------------------------------------------------
         End Primary Button Ripple Effect
	   -------------------------------------------------------------------------------*/

	/*-------------------------------------------------------------------------------
         Start Upload file and chane placeholder name
	   -------------------------------------------------------------------------------*/
	var fileInput = document.getElementById('browseFile');
	if (fileInput) {
		fileInput.addEventListener('change', showFileName);
		function showFileName(event) {
			var fileInput = event.srcElement;
			var fileName = fileInput.files[0].name;
			document.getElementById('placeholderInput').placeholder = fileName;
		}
	}
	/*-------------------------------------------------------------------------------
         End Upload file and chane placeholder name
	   -------------------------------------------------------------------------------*/

	/*-------------------------------------------------------------------------------
         Start Input Field Effect
	   -------------------------------------------------------------------------------*/
	$(window).on('load', function() {
		$('.input-effect input').focusout(function() {
			if ($(this).val() != '') {
				$(this).addClass('has-content');
			} else {
				$(this).removeClass('has-content');
			}
		});
	});

	/*-------------------------------------------------------------------------------
         End Input Field Effect
	   -------------------------------------------------------------------------------*/
	// Search icon
	$('#search-icon').on('click', function() {
		$('#search').focus();
	});
	$('#start-date-icon').on('click', function() {
		$('#startDate').focus();
	});
	$('#end-date-icon').on('click', function() {
		$('#endDate').focus();
	});
	$('.primary-input.date').datepicker({
		autoclose: true
	});
	$('.primary-input.date').on('changeDate', function(ev) {
		// $(this).datepicker('hide');
		$(this).focus();
	});
	$('.primary-input.time').datetimepicker({
		format: 'LT'
	});

	/*-------------------------------------------------------------------------------
         Start Side Nav Active Class Js
       -------------------------------------------------------------------------------*/
	$('#sidebarCollapse').on('click', function() {
		$('#sidebar').toggleClass('active');
	});
	$('#sidebar ul li a').click(function() {
		$('#sidebar ul li a').removeClass('active');
		$(this).addClass('active');
	});
	/*-------------------------------------------------------------------------------
         Start Side Nav Active Class Js
	   -------------------------------------------------------------------------------*/
	$(window).on('load', function() {
		$('.dataTables_wrapper .dataTables_filter input').on('focus', function() {
			$('.dataTables_filter > label').addClass('jquery-search-label');
		});

		$('.dataTables_wrapper .dataTables_filter input').on('blur', function() {
			$('.dataTables_filter > label').removeClass('jquery-search-label');
		});
	});

	// Student Details
	$('.close-activity .primary-btn').on('click', function() {
		$(this).closest('.sub-activity-box').remove();
	});

	$('.single-cms-box .btn').on('click', function() {
		$(this).fadeOut(500, function() {
			$(this).closest('.single-cms-box ').hide();
		});
	});

	/*----------------------------------------------------*/
	/*  Magnific Pop up js (Image Gallery)
    /*----------------------------------------------------*/
	$('.pop-up-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/*-------------------------------------------------------------------------------
         Jquery Table
       -------------------------------------------------------------------------------*/
	$('#table_id, .school-table-data').DataTable({
		bLengthChange: false,
		language: {
			search: "<i class='ti-search'></i>",
			searchPlaceholder: 'Quick Search',
			paginate: {
				next: "<i class='ti-arrow-right'></i>",
				previous: "<i class='ti-arrow-left'></i>"
			}
		},
		dom: 'Bfrtip',
		buttons: [
			{
				extend: 'copyHtml5',
				text: '<i class="fa fa-files-o"></i>',
				titleAttr: 'Copy'
			},
			{
				extend: 'excelHtml5',
				text: '<i class="fa fa-file-excel-o"></i>',
				titleAttr: 'Excel'
			},
			{
				extend: 'csvHtml5',
				text: '<i class="fa fa-file-text-o"></i>',
				titleAttr: 'CSV'
			},
			{
				extend: 'pdfHtml5',
				text: '<i class="fa fa-file-pdf-o"></i>',
				titleAttr: 'PDF'
			},
			{
				extend: 'print',
				text: '<i class="fa fa-print"></i>',
				titleAttr: 'Print'
			},
			{
				extend: 'colvis',
				text: '<i class="fa fa-columns"></i>',
				postfixButtons: [ 'colvisRestore' ]
			}
		],
		columnDefs: [
			{
				visible: false
			}
		],
		responsive: true
	});
	/*-------------------------------------------------------------------------------
         Nice Select 
       -------------------------------------------------------------------------------*/
	$('select').niceSelect();
})(jQuery);



