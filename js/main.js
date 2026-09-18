(function($) {
	"use strict";

	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(400).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click', function(e) {
		e.preventDefault();
		$('#header').toggleClass('nav-collapse');
	});

	// Mobile Dropdown Click Handler
	$('.main-menu li.dropdown > a').on('click', function(e) {
		if ($(window).width() < 768) {
			e.preventDefault();
			$(this).parent('li').toggleClass('open');
			$(this).next('.dropdown-menu').slideToggle(200);
		}
	});

	// Interactive Course/Program Search & Filtering
	$('#programme-search-input').on('keyup', function() {
		var value = $(this).val().toLowerCase();
		$('.programme-item').filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});

	$('.filter-nav button').on('click', function() {
		$('.filter-nav button').removeClass('active');
		$(this).addClass('active');
		var filterValue = $(this).attr('data-filter');

		if (filterValue === 'all') {
			$('.programme-item').fadeIn(300);
		} else {
			$('.programme-item').hide();
			$('.programme-item[data-category*="' + filterValue + '"]').fadeIn(300);
		}
	});

	// Interactive Form Submission (Information Request / Contact Form)
	$('.utamu-form').on('submit', function(e) {
		e.preventDefault();
		var $form = $(this);
		var $btn = $form.find('button[type="submit"]');
		var origText = $btn.html();

		$btn.html('<i class="fa fa-spinner fa-spin"></i> Submitting...').prop('disabled', true);

		setTimeout(function() {
			$form.html('<div class="alert alert-success" style="padding:25px; border-radius:6px; background:#E8F5E9; border-left:4px solid #2E7D32; color:#1B5E20;">' +
				'<h4><i class="fa fa-check-circle"></i> Thank You!</h4>' +
				'<p>Your application inquiry has been received by UTAMU Admissions Office. Our academic counselors will get back to you within 24 hours.</p>' +
				'<p style="margin-top:10px;"><strong>Inquiries Desk:</strong> info@utamu.ac.ug | +256 702 646093</p>' +
				'</div>');
		}, 800);
	});

	// Program Category Dynamic Selector in Modal/Form
	$('#prog-category').on('change', function() {
		var cat = $(this).val();
		var $progSelect = $('#prog-name');
		$progSelect.empty();
		
		var options = {
			'masters': [
				'Master of Business Administration (MBA)',
				'Executive MBA (EMBA)',
				'Master of Science in Computing',
				'Master of Public Administration & Management',
				'Master of Laws (LLM)',
				'Master of AI and Data Science',
				'Masters in Monitoring and Evaluation',
				'Master of Information Technology',
				'Master of Education (M.Ed)'
			],
			'undergraduate': [
				'Bachelor of Science in Computer Science',
				'Bachelor of Science in Software Engineering',
				'Bachelor of Science in Computer Security & Forensics',
				'Bachelor of Laws (LLB)',
				'Bachelor of Business Administration (BBA)',
				'Bachelor of Procurement & Supply Chain Management',
				'Bachelor of Information Systems & Technology',
				'Bachelor of Science in Accounting & Finance',
				'Bachelor of Education – Secondary'
			],
			'postgraduate': [
				'PGD in Artificial Intelligence & Data Science',
				'PGD in Computing',
				'PGD in Information Systems',
				'PGD in Oil Governance & Management',
				'PGD in Public Procurement',
				'PGD in Human Resource Management',
				'PGD in Financial Management',
				'PGD in Monitoring & Evaluation'
			],
			'diploma': [
				'Diploma in Computing',
				'Diploma in Business Administration',
				'Diploma in Procurement & Supply Chain Management',
				'Diploma in Project Planning & Management'
			],
			'certificate': [
				'Higher Education Certificate (HEC)',
				'Postgraduate Certificate in AI for Lawyers',
				'Postgraduate Certificate in Digital Literacy',
				'Certificate in Legal Writing and Drafting',
				'Certificate in AI for Work and Business',
				'Certificate in Computer Applications & Workplace Skills'
			]
		};

		if (options[cat]) {
			$progSelect.append('<option value="">-- Select Specific Programme --</option>');
			$.each(options[cat], function(i, item) {
				$progSelect.append($('<option>', { value: item, text: item }));
			});
		} else {
			$progSelect.append('<option value="">-- Choose Category First --</option>');
		}
	});

})(jQuery);
