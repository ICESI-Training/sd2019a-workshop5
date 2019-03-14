/**
 * Fixed menu pregrado content view
 */

function moveContactInfo() {
  jQuery("#pregradoRight .rowRight").append(jQuery("#Left-inner").removeClass("hidden-xs hidden-sm"));
  jQuery("#Left-inner").wrap( "<div class='row'></div>" );
}

jQuery(document).ready(function () {

  // init Isotope
  var $grid = jQuery('.grid').isotope({
    // options
  });
  // filter items on button click
  jQuery('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = jQuery(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  function tabNotScrollToTop(container){
    jQuery(container + " ul.nav-tabs > li > a").on("shown.bs.tab", function(e) {
      e.preventDefault();
      var id = jQuery(e.target).attr("href").substr(1);
      window.location.hash = id;
      console.log(id);
      jQuery('html, body').animate({
          scrollTop: jQuery("#"+id).offset().top-450
      }, 800);
    });
  }

  tabNotScrollToTop('.container-ul-timeline');
  tabNotScrollToTop('.sidebar-facultad_programas');

  jQuery("ul.nav-tabs > li > a").on("shown.bs.tab", function(e) {
    e.preventDefault();
    var id = jQuery(e.target).attr("href").substr(1);
    window.location.hash = id;
    jQuery(window).scrollTop(0);
  });


  jQuery(".btn-back").click(function(e){
    e.preventDefault();
    var referrer =  document.referrer;
    window.location.href = referrer+window.location.hash;

  });
  //Volver instalaciones
  //jQuery(".sidebar-facultad-instalaciones_thumbs a").on('click',function(e){
    //e.preventDefault();
    //var lin_insta = jQuery(this).attr('href')+jQuery('.tabs-pregradro').find('li.active').find('a').attr('href');
      //window.location.href = lin_insta;
  //});
  //volver equipo
  //jQuery(".container-bottom-equipo .hvLink a").on('click',function(e){
    //e.preventDefault();
    //var lin_equipo = jQuery(this).attr('href')+jQuery('.tabs-pregradro').find('li.active').find('a').attr('href');
      //window.location.href = lin_equipo;
  //});




  var states = [
  {
    "link": "pregrado-facultad-de-ciencias-administrativas",
    "value": "Administración de Empresas con énfasis en Negocios Internacionales",
    "tokens": [
      "Administración",
      "de",
      "Empresas",
      "con",
      "énfasis",
      "en",
      "Negocios",
      "Internacionales"
    ]
  },
  {
    "link": "facultad_ciencias_administrativas_economicas/pregrado/contaduria-publica-y-finanzas-internacionales",
    "value": "Contaduría Pública y Finanzas Internacionales",
    "tokens": [
      "Contaduría",
      "Pública",
      "y",
      "Finanzas",
      "Internacionales"
    ]
  },
  {
    "link": "facultad_ciencias_administrativas_economicas/pregrado/economia",
    "value": "Economía",
    "tokens": [
      "Economía"
    ]
  },
  {
    "link": "facultad_ciencias_administrativas_economicas/pregrado/mercadeo-internacional-y-publicidad",
    "value": "Mercadeo Internacional y Publicidad",
    "tokens": [
      "Mercadeo",
      "Internacional",
      "y",
      "Publicidad"
    ]
  },
  {
    "link": "facultad_ciencias_administrativas_economicas/pregrado/economia-y-negocios-internacionales",
    "value": "Economía y Negocios Internacionales",
    "tokens": [
      "Economía",
      "y",
      "Negocios",
      "Internacionales"
    ]
  },
  {
    "link": "facultad_ingenieria/ingenieria/diseno-industrial",
    "value": "Diseño Industrial",
    "tokens": [
      "Diseño",
      "Industrial"
    ]
  },
  {
    "link": "facultad_ingenieria/ingenieria/diseno-medios-interactivos",
    "value": "Diseño Medios Interactivos",
    "tokens": [
      "Diseño",
      "Medios",
      "Interactivos"
    ]
  },
  {
    "link": "facultad_ingenieria/ingenieria/ingenieria-de-sistemas",
    "value": "Ingeniería de Sistemas",
    "tokens": [
      "Ingeniería",
      "de",
      "Sistemas"
    ]
  },
  {
    "link": "facultad_ingenieria/ingenieria/ingenieria-telematica",
    "value": "Ingeniería Telemática",
    "tokens": [
      "Ingeniería",
      "Telemática"
    ]
  },
  {
    "link": "facultad_ingenieria/ingenieria/ingenieria-industrial",
    "value": "Ingeniería Industrial",
    "tokens": [
      "Ingeniería",
      "Industrial"
    ]
  },
  {
    "link": "facultad_ingenieria/ingenieria/ingenieria-bioquimica",
    "value": "Ingeniería Bioquímica",
    "tokens": [
      "Ingeniería",
      "Bioquímica"
    ]
  },
  {
    "link": "facultad_derecho_ciencias_sociales/derecho-y-ciencias-sociales/antropologia",
    "value": "Antropología",
    "tokens": [
      "Antropología"
    ]
  },
  {
    "link": "facultad_derecho_ciencias_sociales/derecho-y-ciencias-sociales/ciencia-politica",
    "value": "Ciencia Política con énfasis en Relaciones Internacionales",
    "tokens": [
      "Ciencia",
      "Política",
      "con",
      "énfasis",
      "en",
      "Relaciones",
      "Internacionales"
    ]
  },
  {
    "link": "facultad_derecho_ciencias_sociales/derecho-y-ciencias-sociales/derecho",
    "value": "Derecho",
    "tokens": [
      "Derecho"
    ]
  },
  {
    "link": "facultad_derecho_ciencias_sociales/derecho-y-ciencias-sociales/psicologia",
    "value": "Psicología",
    "tokens": [
      "Psicología"
    ]
  },
  {
    "link": "facultad_derecho_ciencias_sociales/derecho-y-ciencias-sociales/sociologia",
    "value": "Sociología",
    "tokens": [
      "Sociología"
    ]
  },
  {
    "link": "facultad_derecho_ciencias_sociales/derecho-y-ciencias-sociales/musica",
    "value": "Música",
    "tokens": [
      "Música"
    ]
  },
  {
    "link": "facultad_ciencias_naturales/facultad-de-ciencias-naturales/biologia",
    "value": "Biología con concentraciones en Conservación y Biología Molecular/Biotecnología",
    "tokens": [
      "Biología",
      "con",
      "concentraciones",
      "en",
      "Conservación",
      "y",
      "Biología"
    ]
  },
  {
    "link": "facultad_ciencias_naturales/facultad-de-ciencias-naturales/quimica-farmaceutica",
    "value": "Química Farmacéutica",
    "tokens": [
      "Química",
      "Farmacéutica"
    ]
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud/medicina",
    "value": "Medicina",
    "tokens": [
      "Medicina"
    ]
  },
  {
    "link": "escuela-ciencias-educacion/facultad-escuela-de-ciencias-de-la-educacion/educacion-basica-primaria",
    "value": "Licenciatura en Educación Básica Primaria",
    "tokens": [
      "Licenciatura",
      "en",
      "Educación",
      "Básica",
      "Primaria"
    ]
  },
  {
    "link": "escuela-ciencias-educacion/facultad-escuela-de-ciencias-de-la-educacion/licenciatura-en-literatura-y-lengua-castellana",
    "value": "Licenciatura en Literatura y Lengua Castellana",
    "tokens": [
      "Licenciatura",
      "en",
      "Literatura",
      "y",
      "Lengua",
      "Castellana"
    ]
  },
  {
    "link": "escuela-ciencias-educacion/facultad-escuela-de-ciencias-de-la-educacion/licenciatura-en-artes-con-enfasis-en-tecnologias-para-la-creacion",
    "value": "Licenciatura en Artes con énfasis en tecnologías para la creación",
    "tokens": [
      "Licenciatura",
      "en",
      "Artes",
      "con",
      "énfasis",
      "en",
      "tecnologías",
      "para",
      "la",
      "creación"
    ]
  },
  {
    "link": "escuela-ciencias-educacion/facultad-escuela-de-ciencias-de-la-educacion/licenciatura-en-lenguas-extranjeras-con-enfasis-en-ingles",
    "value": "Licenciatura en Lenguas Extranjeras con énfasis en inglés",
    "tokens": [
      "Licenciatura",
      "en",
      "Lenguas",
      "con",
      "Extranjeras",
      "con",
      "énfasis",
      "en",
      "inglés"
    ]
  },
  {
    "link": "escuela-ciencias-educacion/facultad-escuela-de-ciencias-de-la-educacion/licenciatura-en-ciencias-sociales",
    "value": "Licenciatura en Ciencias Sociales",
    "tokens": [
      "Licenciatura",
      "en",
      "Ciencias",
      "Sociales"
    ]
  },
  {
    "link": "escuela-ciencias-educacion/facultad-escuela-de-ciencias-de-la-educacion/licenciatura-en-ciencias-naturales",
    "value": "Licenciatura en Ciencias Naturales",
    "tokens": [
      "Licenciatura",
      "en",
      "Ciencias",
      "Naturales"
    ]
  },
  {
    "link": "facultad_ciencias_administrativas_economicas/posgrado/mba-icesi",
    "value": "MBA Icesi"
  },
  {
    "link": "facultad_ciencias_administrativas_economicas/posgrado/maestria-en-mercadeo",
    "value": "Maestría en Mercadeo"
  },
  {
    "link": "facultad_ciencias_administrativas_economicas/posgrado/mba-global-con-doble-titulacion",
    "value": "Global MBA"
  },
  {
    "link": "facultad_ciencias_administrativas_economicas/posgrado/maestria-en-finanzas",
    "value": "Maestría en Finanzas"
  },
  {
    "link": "facultad_ciencias_administrativas_economicas/posgrado/maestria-en-gerencia-de-organizaciones-de-salud",
    "value": "Maestría en Gerencia de Organizaciones de Salud"
  },
  {
    "link": "facultad_ciencias_administrativas_economicas/posgrado/maestria-en-contabilidad-y-tributacion",
    "value": "Maestría en Contabilidad y Tributacion"
  },
  {
    "link": "facultad_ingenieria/ingenieria-posgrado/maestria-en-gestion-informatica-y-telecomunicaciones",
    "value": "Maestría en Gestión Informática y Telecomunicaciones"
  },
  {
    "link": "facultad_ingenieria/ingenieria-posgrado/maestria-en-ingenieria-industrial-con-concentracion-en-logistica-y-cadenas-de-abastecimiento",
    "value": "Maestría en Ingeniería Industrial con concentración en Logística y Cadenas de Abastecimiento"
  },
  {
    "link": "facultad_ingenieria/ingenieria-posgrado/maestria-en-informatica-y-telecomunicaciones-en-modalidad-de-investigacion",
    "value": "Maestría en Informática y Telecomunicaciones en modalidad de investigación"
  },
  {
    "link": "facultad_ingenieria/ingenieria-posgrado/maestria-en-gestion-de-la-innovacion",
    "value": "Maestría en Gestión de la Innovación"
  },
  {
    "link": "facultad_ingenieria/ingenieria-posgrado/maestria-en-gerencia-de-proyectos",
    "value": "Maestría en Gerencia de Proyectos"
  },
  {
    "link": "facultad_ingenieria/ingenieria-posgrado/especializacion-en-calidad-para-la-competitividad",
    "value": "Especialización en Calidad para la Competitividad"
  },
  {
    "link": "facultad_ingenieria/ingenieria-posgrado/especializacion-en-medio-ambiente",
    "value": "Especialización en Gerencia del Medio Ambiente"
  },
  {
    "link": "facultad_ingenieria/ingenieria-posgrado/maestria-en-ingenieria-industrial-con-concentracion-en-operaciones-y-servicios",
    "value": "Maestría en Ingeniería Industrial con concentración en Operaciones y Servicios"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/maestria-en-derecho-en-modalidad-de-investigacion",
    "value": "Maestría en Derecho en modalidad de investigación"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/maestria-en-estudios-sociales-y-politicos-en-modalidad-de-investigacion",
    "value": "Maestría en Estudios Sociales y Políticos en modalidad de investigación"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/maestria-en-gerencia-para-la-innovacion-social",
    "value": "Maestría en Gerencia para la Innovación Social"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/maestria-en-derecho",
    "value": "Maestría en Derecho"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/maestria-en-intervencion-psicosocial",
    "value": "Maestría en Intervención Psicosocial"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/especializacion-derecho-laboral-y-de-seguridad-social",
    "value": "Especialización Derecho Laboral y de la Seguridad Social"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/especializacion-en-derecho-comercial",
    "value": "Especialización en Derecho Comercial"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/especializacion-en-derecho-judicial",
    "value": "Especialización en Derecho Judicial"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/especializacion-en-derecho-penal",
    "value": "Especialización en Derecho Penal"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/especializacion-en-derecho-procesal",
    "value": "Especialización en Derecho Procesal"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/especializacion-en-derecho-publico",
    "value": "Especialización en Derecho Público"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/especializacon-en-derecho-empresarial",
    "value": "Especialización en Derecho Empresarial"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/especializacion-en-derecho-tributario",
    "value": "Especialización en Derecho Tributario"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/especializacion-en-derecho-para-no-abogados",
    "value": "Especialización en Derecho para No Abogados"
  },
  {
    "link": "facultad_derecho_ciencias_sociales/facultad-de-derecho-y-ciencias-sociales/especializacion-en-legislacion-tributaria-para-no-abogados",
    "value": "Especialización en Legislación Tributaria para No Abogados"
  },
  {
    "link": "facultad_ciencias_naturales/facultad-ciencias-naturales/maestria-en-ciencias-biotecnologia",
    "value": "Maestría en Ciencias Biotecnología"
  },
  {
    "link": "facultad_ciencias_naturales/facultad-ciencias-naturales/maestria-en-biotecnologia",
    "value": "Maestría en Biotecnología"
  },
  {
    "link": "facultad_ciencias_naturales/facultad-ciencias-naturales/maestria-en-formulacion-de-productos-quimicos-y-derivados",
    "value": "Maestría en Formulacion de Productos Químicos y Derivados"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-dermatologia",
    "value": "Especialización en Dermatología"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-medicina-interna",
    "value": "Especialización en Medicina interna"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-pediatria",
    "value": "Especialización en Pediatría"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-reumatologia",
    "value": "Especialización en Reumatología"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-hematologia-y-oncologia",
    "value": "Especialización en Hematología y Oncología"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-cardiologia-pediatrica",
    "value": "Especialización en Cardiología Pediátrica"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-radiologia-e-imagenes-diagnosticas",
    "value": "Especialización en Radiología e imágenes diagnósticas"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-cirugia-de-trasplantes-de-organos-abdominales",
    "value": "Especialización en Cirugía de Trasplantes de Órganos Abdominales"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-cardiologia",
    "value": "Especialización en Cardiología"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-nefrologia",
    "value": "Especialización en Nefrología"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-psiquiatria-de-enlace",
    "value": "Especialización en Psiquiatría de Enlace"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-ginecologia-y-obstetricia",
    "value": "Especialización en Ginecología y Obstetricia"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-alergologia",
    "value": "Especialización en Alergología"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-medicina-de-emergencia",
    "value": "Especialización en Medicina de Emergencia"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-psiquiatria",
    "value": "Especialización en Psiquiatría"
  },
  {
    "link": "facultad_ciencias_salud/facultad-de-ciencias-de-la-salud-posgrado/especializacion-en-artroscopia",
    "value": "Especialización en Artroscopia"
  },
  {
    "link": "escuela-ciencias-educacion/escuela-de-ciencia-de-la-educacion/maestria-en-educacion",
    "value": "Maestría en Educación"
  },
  {
    "link": "escuela-ciencias-educacion/escuela-de-ciencia-de-la-educacion/master-s-program-in-the-teaching-of-english-as-a-foreign-language",
    "value": "Master's Program in the Teaching of English as a Foreign Language"
  },
  {
    "link": "cdeef/centro-de-espiritu-empresarial-posgrado/mce",
    "value": "Maestría en creación de empresas"
  },
  {
    "link": "facultad_ciencias_administrativas_economicas/ciencias-administrativas-y-economicas-doctorado/doctorado-en-economia-de-los-negocios",
    "value": "Doctorado en Economía de los Negocios"
  }
];

  var programas = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // url points to a json file that contains an array of country names, see
    // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json

    //prefetch: 'http://icesi.xyz/templates/main/js/countries.json'

    local: states

  });

 jQuery('#custom-templates .typeahead').typeahead(null, {
   name: 'programas',
   display: 'value',
   source: programas,
   templates: {
    empty: [
      '<div class="empty-message">',
        'No hay resultados',
      '</div>'
    ].join('\n'),
    suggestion: function(data) {
      return '<div class="tt-suggestion tt-selectable"><a href="'  + data.link + '">' + data.value + '</a></div>';
      }
    }
  });




  jQuery('.tabprofesores .tab-content .tab-pane ul li a').on('click',function(){
    jQuery('.tabprofesores .tab-content .tab-pane').removeClass('active');
    jQuery('.tabprofesores .nav.nav-tabs.pull-right li').removeClass('active');
  });

	//hover items del menu
	jQuery( "#mainMenu.navbar.nav-main .navbar-collapse .navbar-nav.nav-main ul.dropdown-menu li.child-ul-li" ).each(function() {
		jQuery( this ).mouseover(function() {
			jQuery( "ul.web li" ).addClass("fadeli");
		});
		jQuery( this ).mouseleave(function() {
			jQuery( "ul.web li" ).removeClass("fadeli");
		});
	});

	jQuery('.item-130-web .dropdown-menu>li>a.dropdown-toggle').on('click',function(e){e.preventDefault(); return false;})
	jQuery('.item-131-web .dropdown-menu>li>a.dropdown-toggle').on('click',function(e){e.preventDefault(); return false;})
	jQuery(document).on('click', '.item-130-web .dropdown-menu',function(e){e.stopPropagation();});
	jQuery(document).on('click', '.item-131-web .dropdown-menu',function(e){e.stopPropagation();});



    //jQuery("#fin-asunto").prepend(" <div class='select-side'> <i class='glyphicon glyphicon-menu-down blue'></i> </div> ");
    jQuery("#fin-estudiante_colegio label").prepend("<span></span>");
    jQuery("#fin-tratamiento_datos label").prepend("<span></span>");

    /*jQuery( window ).resize(function() {
      if( jQuery( document ).width() < 992 )
         moveContactInfo()
    });*/
    //if( jQuery( document ).width() < 992 )
       //moveContactInfo()

    // unicesi
      // Agrega una p entre los abbr de los articulos de unicesi
    jQuery( "abbr" ).wrap( "<p></p>" );

    // PAGINACION UNICESI
    jQuery('#unicesiNewsletterBlogLayout .pagination ul').addClass('pager').addClass('pagenav');
    jQuery('#unicesiMainContent .pagination ul').addClass('pager').addClass('pagenav');

      // Clona las redes y lo pone de primero en los articulos de unicesi
    var unishareclone = jQuery('.uni-share').clone();
    var unishare  = unishareclone.removeClass('hidden-xs').removeClass('hidden-sm').addClass('hidden-md').addClass('hidden-lg');
    jQuery('.byline').after(unishare);
    // FIN UNICESI

    window.onload = function(){
        var url = document.location.toString();
        if (url.match('#')) {
            jQuery('.nav-tabs a[href=#' + url.split('#')[1] + ']').tab('show');
        }
        //Change hash for page-reload
        jQuery('.nav-tabs a[href=#' + url.split('#')[1] + ']').on('shown', function (e) {
            window.location.hash = e.target.hash;

        });
    }

    if (jQuery('#171').hasClass("flecha_azul")){
        jQuery('.circle_banner').removeClass("hidden");
    }


    jQuery('.menu-blue-left ul.menu li+li').click('a', function () {
      if (jQuery('#Left-inner ul li').hasClass('active')){
        jQuery('.menu-blue-left ul.menu li');
        //find('.dropdown-toggle').text(jQuery('.select_padres .nav-child').find('.active').text());
      }
    });

		jQuery('ul.select_padres li ul.nav-child li').each(function(i){
			if(jQuery(this).hasClass('current')){
				jQuery('ul.select_padres li a.dropdown-toggle').text(jQuery(this).find('a').text());
			}
			else if(jQuery('.empresamenu ul.menu li').hasClass('active')){
				jQuery('ul.select_padres li a.dropdown-toggle').text('Una empresa');
			}
			else if(jQuery('.menu-blue-left ul.menu li').hasClass('active')){
				jQuery('ul.select_padres li a.dropdown-toggle').text('Una egresado');
			}
		});


    jQuery('.select_saber_pro').find('.deeper.parent.dropdown .dropdown-toggle').text(); // Pruebas Saber

    var $saberpro_child = jQuery('.select_saber_pro').find('.nav-child').find('.current').text();
    var $saberpro_child2 = jQuery('.menu-blue-left').find('.nav.menu .current.active').text();
    jQuery('.select_saber_pro').find('.deeper.parent.dropdown .dropdown-toggle').text($saberpro_child);
    jQuery('.select_saber_pro').find('.deeper.parent.dropdown .dropdown-toggle').text($saberpro_child2);

    if (jQuery('body.contacto').length > 0) {
    jQuery('body.contacto').find('.container-fluid.inner-content').removeClass('container-fluid').addClass('container');
    }

    if (jQuery('body.inner-page-article').length > 0) {
        jQuery('body.inner-page-article').find('.container-fluid.inner-content').removeClass('container-fluid').addClass('container').addClass('container-articles');
    }

    if (jQuery('body.inner-page-article-internas').length > 0) {
        jQuery('body.inner-page-article-internas').find('.container-fluid.inner-content').removeClass('container-fluid').addClass('container').addClass('container-articles');
    }

    jQuery('#chronoform-contacto').find('#form-row-nombre').addClass('col-sm-6');
    jQuery('#chronoform-contacto').find('#form-row-telefono').addClass('col-sm-6');
    jQuery('#chronoform-contacto').find('#form-row-correo').addClass('col-sm-6');
    jQuery('#chronoform-contacto').find('#form-row-verificar_correo').addClass('col-sm-6 paddingtop_form');
    jQuery('#chronoform-contacto').find('#bfLabel31').addClass('hidden');
    jQuery('#chronoform-contacto').find('#bfLabel33').addClass('hidden');
    jQuery('#chronoform-contacto').find('#bfLabel51').addClass('hidden');
    jQuery('#chronoform-contacto').find('#form-row-asunto').addClass('col-sm-12');
    jQuery('#chronoform-contacto').find('#form-row-estudiante_colegio').addClass('col-sm-12');
    jQuery('#chronoform-contacto').find('#form-row-nombre_colegio').addClass('col-sm-12');
    jQuery('#chronoform-contacto').find('#form-row-comentario').addClass('col-sm-12');
    jQuery('#chronoform-contacto').find('#fin-tratamiento_datos').addClass('col-sm-12');
    if (jQuery(this).scrollTop() > 100) {
        jQuery('#logo').addClass('hidden');
        jQuery('#icono').removeClass('hidden');
        jQuery('#mainMenu.navbar.nav-main .navbar-default.navbar-top').addClass('scroll');
        jQuery('#logoBack').addClass('scroll');
        jQuery('.navbar-header').addClass('scroll');
        jQuery('#mainMenu.navbar.nav-main .navbar-collapse').addClass('scroll');
    }
    jQuery(document).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#logo').addClass('hidden');
            jQuery('#icono').removeClass('hidden');
            jQuery('#mainMenu.navbar.nav-main .navbar-default.navbar-top').addClass('scroll');
            jQuery('#logoBack').addClass('scroll');
            jQuery('.navbar-header').addClass('scroll');
            jQuery('.logo-icesi').removeClass('col-sm-2 col-md-2 col-lg-2');
            jQuery('.logo-icesi').addClass('col-sm-1 col-md-1 col-lg-1');
            jQuery('.submenu-bar-bot').removeClass('col-sm-10 col-md-10 col-lg-10');
            jQuery('.submenu-bar-bot').addClass('col-sm-11 col-md-11 col-lg-11');
            jQuery('#mainMenu.navbar.nav-main .navbar-collapse').addClass('scroll');
        } else if (jQuery(this).scrollTop() < 100) {
            jQuery('#logo').removeClass('hidden');
            jQuery('#icono').addClass('hidden');
            jQuery('#mainMenu.navbar.nav-main .navbar-default.navbar-top').removeClass('scroll');
            jQuery('#logoBack').removeClass('scroll');
            jQuery('.navbar-header').removeClass('scroll');
            jQuery('.logo-icesi').removeClass('col-sm-1 col-md-1 col-lg-1');
            jQuery('.logo-icesi').addClass('col-sm-2 col-md-2 col-lg-2');
            jQuery('.submenu-bar-bot').removeClass('col-sm-11 col-md-11 col-lg-11');
            jQuery('.submenu-bar-bot').addClass('col-sm-10 col-md-10 col-lg-10');
            jQuery('#mainMenu.navbar.nav-main .navbar-collapse').removeClass('scroll');
        }
    });

    // Tab107 doctorado desktop
      jQuery('#js-doctorado_inicio_competencias_slick').slick({
          infinite: false,
          speed: 300,
          dots: true,
          dotsClass: 'dots_class',
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="icon-arrow-right-circle text--h1 text--white"></span></button>',
          nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="icon-arrow-right-circle text--h1 text--white"></span></button>',
          responsive: [
              {
                  breakpoint: 641,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: false,
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: false,
                  }
              }
          ]
      });

    // Tab2 doctorado desktop
    jQuery('[href="#tab-108"]').on('shown.bs.tab', function (e) {
        jQuery('#js-doctorado_laboratorios_slick .container-slick1').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            arrows: true,
            asNavFor: '#js-doctorado_laboratorios_slickk .container-slick2',
            prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="icon-arrow-right-circle text--h2"></span></button>',
            nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="icon-arrow-right-circle text--h2"></span></button>',
            dots: true,
            customPaging: function (slider, i) {
                var thumb =  jQuery(slider.$slides[i]).data();
                return '<a>' + i + '</a>';
            },
            responsive: [
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                }
            ]
        });
    });

    // Tab2 doctorado mobil
    // nuevo
    jQuery('[href="#tab-108"]').on('shown.bs.tab', function (e) {
      jQuery('#js-doctorado_laboratorios_slickk .container-slick2').slick({
          infinite: true,
          speed: 300,
          dots: true,
          //dotsClass: 'dots_class',
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          asNavFor: '#js-doctorado_laboratorios_slick .container-slick1',
          prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="icon-arrow-right-circle text--h2"></span></button>',
          nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="icon-arrow-right-circle text--h2"></span></button>',
          customPaging: function (slider, i) {
              var thumb = jQuery(slider.$slides[i]).data();
              return '<a>' + i + '</a>';
          },
          responsive: [
              {
                  breakpoint: 641,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                  }
              }
          ]
      });
    });

    // Tab9 doctorado desktop
    jQuery('[href="#tab-109"]').on('shown.bs.tab', function (e) {
        jQuery('#js-estructura_avanza_slick sidebar-estructura_avanza_carousel hidden-sm hidden-xs slick-initialized slick-slider').slick({
            infinite: true,
            slidesPerRow: 2,
            rows: 2,
            slidesToShow: 2,
            dots: false,
            dotsClass: 'dots_class',
            arrows: true,
            prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="icon-arrow-right-circle text--h1 text--white"></span></button>',
            nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="icon-arrow-right-circle text--h1 text--white"></span></button>',
            customPaging: function (slider, i) {
                var thumb = jQuery(slider.$slides[i]).data();
                return '<a>' + i + '</a>';
            },
            responsive: [
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                }
            ]
        });

    });

    if(jQuery('[href="#tab-65"]').parent().hasClass('active')) {
      jQuery('#js-doctorado_laboratorios_slicke').slick({
          infinite: true,
          speed: 300,
          slidesToShow: 2,
          arrows: true,
          prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="icon-arrow-right-circle text--h2"></span></button>',
          nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="icon-arrow-right-circle text--h2"></span></button>',
          dots: true,
          customPaging: function (slider, i) {
              var thumb = jQuery(slider.$slides[i]).data();
              return '<a>' + i + '</a>';
          },
      });

      jQuery('#js-doctorado_laboratorios_slickke').slick({
          infinite: true,
          speed: 300,
          dots: true,
          //dotsClass: 'dots_class',
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="icon-arrow-right-circle text--h2"></span></button>',
          nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="icon-arrow-right-circle text--h2"></span></button>',
          customPaging: function (slider, i) {
              var thumb = jQuery(slider.$slides[i]).data();
              return '<a>' + i + '</a>';
          },
          responsive: [
              {
                  breakpoint: 641,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: true,
                  }
              }
          ]
      });
    }


    /*jQuery(window).scroll(function(){
      if( jQuery(window).scrollTop() > stickyHeaderTop-window_top ) {
              jQuery('.tabs-responsive-left-inner').css({position: 'fixed !important', top: '85px'});
      } else {
              jQuery('.tabs-responsive-left-inner').css({position: 'static', top: '0px'});
      }
    });*/


    if(jQuery('#Left-inner-mobil').length > 0){
      var scrollmenu = jQuery('#Left-inner-mobil').position().top;
      //console.log(scrollmenu);
      jQuery(window).on('scroll', function(){
        if (jQuery(this).scrollTop() >= scrollmenu-60) {
          jQuery('body').removeClass('fixed2');
          jQuery('#Left-inner-mobil').addClass('menu-fixed-inner');
        } else if (jQuery(this).scrollTop() < scrollmenu-60) {
          jQuery('#Left-inner-mobil').removeClass('menu-fixed-inner');
          jQuery('body').addClass('fixed2');
        }
      });
    }

    jQuery( "#linka2" ).click(function( e ) {
        e.preventDefault();
    });

    var slick=false;
    jQuery('[href="#facultad"]').on('shown.bs.tab', function (e) {
        if(!slick){
          jQuery('#js-doctorado_competencias_slick').slick({
              infinite: false,
              speed: 300,
              dots: true,
              autoplay: true,
              autoplaySpeed: 2000,
              dotsClass: 'dots_class',
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="icon-arrow-right-circle text--h1 text--white"></span></button>',
              nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="icon-arrow-right-circle text--h1 text--white"></span></button>',
              responsive: [
                  {
                      breakpoint: 641,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          arrows: true,
                          dots: false
                      }
                  },
                  {
                      breakpoint: 480,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          arrows: true,
                          dots: false
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          arrows: true,
                          dots: false
                      }
                  },
                  {
                      breakpoint: 960,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          arrows: true,
                          dots: false
                      }
                  },
              ]
          });
          slick=true;
        }

    });

    jQuery('[href="#tab-436"]').on('shown.bs.tab', function (e){
  		jQuery('#js-acerca_de_slick').slick({
  				infinite: false,
  				speed: 300,
  				dots: true,
  				autoplay: true,
  				autoplaySpeed: 2000,
  				dotsClass: 'dots_class',
  				slidesToShow: 1,
  				slidesToScroll: 1,
  				arrows: true,
  				prevArrow: '<button type="button" class="slick-arrow slick-prev"><span class="icon-arrow-right-circle text--h1 text--white"></span></button>',
  				nextArrow: '<button type="button" class="slick-arrow slick-next"><span class="icon-arrow-right-circle text--h1 text--white"></span></button>',
  				responsive: [
  						{
  								breakpoint: 641,
  								settings: {
  										slidesToShow: 1,
  										slidesToScroll: 1,
  										arrows: true,
  										dots: false
  								}
  						},
  						{
  								breakpoint: 480,
  								settings: {
  										slidesToShow: 1,
  										slidesToScroll: 1,
  										arrows: true,
  										dots: false
  								}
  						},
  						{
  								breakpoint: 768,
  								settings: {
  										slidesToShow: 1,
  										slidesToScroll: 1,
  										arrows: true,
  										dots: false
  								}
  						},
  						{
  								breakpoint: 960,
  								settings: {
  										slidesToShow: 1,
  										slidesToScroll: 1,
  										arrows: true,
  										dots: false
  								}
  						},
  				]
  		});
  	});


    jQuery('[href="#egresados"]').on('shown.bs.tab', function (e) {
        jQuery('#js-facultad-egresados_icesistas_slick').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: false,
            speed: 300,
            dots: true,
            dotsClass: 'dots_class',
            arrows: false,
            responsive: [
                {
                    breakpoint: 641,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });
    });


    if (jQuery("ul.tabs-pregradro").length > 0) {
        jQuery(document).scroll(function () {
            if (jQuery(this).scrollTop() > 300) {
                jQuery("ul.tabs-pregradro li").each(function (n) {
                    if (jQuery(this).hasClass('active')) {
                        addPregradoFixedMenuTitle(jQuery('.blog h2 span.subheading-category').text(), jQuery(this).find('a').text());
                    }
                    jQuery('#pregrado-fixed-menu').removeClass('hidden');
                });
            } else {
                if (jQuery(this).scrollTop() < 300) {
                    jQuery('#pregrado-fixed-menu').addClass('hidden');
                }
            }
        });

    }

    jQuery("ul.tabs-pregradro li").each(function (n) {
        jQuery(this).click(function (e) {
            addPregradoFixedMenuTitle(jQuery('.blog h3.titlefac').text(), jQuery(this).find('a').text());
        });
    });

        jQuery("ul.tabs-pregradro li").on('click',function(){
                addPregradoFixedMenuTitle(jQuery('.blog h2 span.subheading-category').text(), jQuery(this).find('a').text());
        });

    function addPregradoFixedMenuTitle(titleFac, activeTab) {
        jQuery('#pregrado-fixed-menu h5').html(titleFac + '<small> |  ' + activeTab + '</small>');
    }

    jQuery('.back_to_top').click(function (e) {
        event.preventDefault();
        jQuery('body,html').animate({
                scrollTop: 0,
            }, 3000
        );
    });
    jQuery('.scroll_top').click(function (e) {
        event.preventDefault();
        jQuery('body,html').animate({
                scrollTop: 0,
            }, 3000
        );
    });
    jQuery('.plan_diurno').click(function (e) {
        event.preventDefault();
        jQuery('body,html').animate({
                scrollTop: jQuery('#plan_diurno').position().top, // 478
            }, 3000
        );
    });
    jQuery('.plan_nocturno').click(function (e) {
        event.preventDefault();
        jQuery('body,html').animate({
                scrollTop: jQuery('#plan_nocturno').position().top,
            }, 3000
        );
    });





    jQuery("ul.tabs-pregradro").find('li').each(function (n) {
        jQuery(this).on('click', function (e) {
            //Diego
            var container = jQuery('.container-enlaces-interes');
            var enlaces = container.find('#enlaces-interes');
            if (container.find(enlaces).length == 0) {
                container.append(enlaces.clone().removeClass('hidden'));
            }
            var containerBecas = jQuery('.becas_convenios_fac');
            var fac = jQuery('#faculties');
            if (containerBecas.find(fac).length == 0) {
                containerBecas.append(fac.clone().removeClass('hidden'));
            }
            //Felipe
            var clickedTab = jQuery.trim(jQuery(this).find('a').text());
            //console.log(clickedTab);
            if (clickedTab !== 'Acerca del programa' && clickedTab !== 'Acerca del programa B' && clickedTab !== 'La Maestría') {
                jQuery('#news-events-inner').addClass('hidden');
                //console.log("1");
            } else {
                jQuery('#news-events-inner').removeClass('hidden');
                //console.log("2");
            }
        });
    });
    // jQuery("ul.tabs-pregradro-li").find('li').each(function(n) {
    //     jQuery(this).on('click', function(e) {
    //         var containerBecas = jQuery('.becas_convenios_fac');
    //         var fac = jQuery('#faculties');
    //         if(containerBecas.find(fac).length == 0) {
    //             containerBecas.append(fac.clone().removeClass('hidden'));
    //         }
    //     });
    // });
    var $PregTabsNav = jQuery("#PregTabsNav");
    if ($PregTabsNav.length > 0) {
        var getPrev = function($prev){
          $prev = $prev.prev();
          while ($prev.hasClass('hidden')) {
            $prev = $prev.prev();
          }
          return $prev;
        }
        var getNext = function($next){
          $next = $next.next();
          while ($next.hasClass('hidden')) {
            $next = $next.next();
          }

          return $next;
        }

        var $ulTabs = jQuery('.tabs-pregradro');
        var $ulTabLiGr = $ulTabs.find('.tabs-pregradro-li');
        var $actLi = $ulTabs.find('.tabs-pregradro-li.active');
        var $nextLi = getNext($actLi);
        var $prevLi = getPrev($actLi);
        var $nextMenu = $PregTabsNav.find('.tab-next');
        var $backMenu = $PregTabsNav.find('.tab-back');
        $nextMenu.find('._tab-name').text($nextLi.find('a').text());
        $nextMenu.attr('href', $nextLi.find('a').attr('href'));
        $nextMenu.on('click', function (evt) {
            evt.preventDefault();
            var body = jQuery('html, body');
            body.stop().animate({scrollTop: 0}, '300', 'swing', function () {
            });
            /*
             * DOC NOTE:
             *
             * We ask for the href then trigger the tab with the same attribute href,
             * Then we let Bootstrap do our work changing states and stuff!
             * */
            var $this = jQuery(this);
            var _href = $this.attr('href');
            $ulTabLiGr.find('a[href="' + _href + '"]').tab('show');
            var clickedTab = jQuery.trim(jQuery("ul.tabs-pregradro").find('li.active').find('a').text());
            //console.log(clickedTab);
            if (clickedTab !== 'Acerca del programa' && clickedTab !== 'Acerca del programa B' && clickedTab !== 'La Maestría') {
                jQuery('#news-events-inner').addClass('hidden');
            } else {
                jQuery('#news-events-inner').removeClass('hidden');
            }
        });
        $backMenu.on('click', function (evt) {
            evt.preventDefault();
            var body = jQuery('html, body');
            body.stop().animate({scrollTop: 0}, '300', 'swing', function () {
            });
            /*
             * DOC NOTE:
             *
             * We ask for the href then trigger the tab with the same attribute href,
             * Then we let Bootstrap do our work changing states and stuff!
             * */
            var $this = jQuery(this);
            var _href = $this.attr('href');
            $ulTabLiGr.find('a[href="' + _href + '"]').tab('show');
            var clickedTab = jQuery.trim(jQuery("ul.tabs-pregradro").find('li.active').find('a').text());
            if (clickedTab !== 'Acerca del programa' && clickedTab !== 'Acerca del programa B' && clickedTab !== 'La Maestría') {
                jQuery('#news-events-inner').addClass('hidden');
            } else {
                jQuery('#news-events-inner').removeClass('hidden');
            }
        });
        $ulTabLiGr.find('a').on('shown.bs.tab', function (evt) {
            //console.log(evt);
            $actLi = $ulTabs.find('.active');
            $nextLi = getNext($actLi);
            $prevLi = getPrev($actLi);
            if ($actLi.attr('data-count-key') === "0") {
                $backMenu.parent().addClass('disabled-item');
                $nextMenu.parent().removeClass('disabled-item');
            } else if ($actLi.attr('data-count-key') === ("" + ($ulTabLiGr.length - 1))) {
                $nextMenu.parent().addClass('disabled-item');
                $backMenu.parent().removeClass('disabled-item');
            } else {
                $nextMenu.parent().removeClass('disabled-item');
                $backMenu.parent().removeClass('disabled-item');
            }
            $nextMenu.find('._tab-name').text($nextLi.find('a').text());
            $nextMenu.attr('href', $nextLi.find('a').attr('href'));
            $backMenu.find('._tab-name').text($prevLi.find('a').text());
            $backMenu.attr('href', $prevLi.find('a').attr('href'));
        });
    }
    jQuery('.btn-subjects').on('click', function () {
        setTimeout(function () {
            jQuery.each(jQuery('.btn-subjects').parent(), function (key, val) {
                if (jQuery(val).hasClass('collapsed')) {
                    jQuery(val).find('span').removeClass('icon-minus').addClass('icon-plus').addClass('circle-bg-plus').removeClass('circle-bg-minus');
                } else {
                    jQuery(val).find('span').removeClass('icon-plus').addClass('icon-minus').addClass('circle-bg-minus').removeClass('circle-bg-plus');
                }
            });
        });
    });
    jQuery('.sidebar-panels_planEstudio.panel-default').on('show.bs.collapse', function () {
        jQuery(this).find('.panel-heading').addClass('active');
        jQuery(this).find('.panel-collapse').addClass('active');
    });
    jQuery('.sidebar-panels_planEstudio.panel-default').on('hide.bs.collapse', function () {
        jQuery(this).find('.panel-heading').removeClass('active');
        jQuery(this).find('.panel-collapse').removeClass('active');
    });


    jQuery('#unicesiFilterLinks a').click('#unicesiFilterTodayNews', function () {
        if(jQuery(this).hasClass('collapsed')){
            jQuery('#unicesiMainContent').animate({"padding-top":"30px"}, "slow");

        }else{
            jQuery('#unicesiMainContent').animate({"padding-top":"0px"}, "slow");
        }
    });

    jQuery('#unicesiFilterLinks a').click('#unicesiFilterTodayNews', function () {
        if(jQuery(this).hasClass('collapsed')){
            jQuery('.event-list ').animate({"padding-top":"30px"}, "slow");

        }else{
            jQuery('.event-list ').animate({"padding-top":"0px"}, "slow");
        }
    });

    jQuery('#unicesiEvents').parent().css('background','#F5F5F5');



    //
    // jQuery('.sidebar-panels_planEstudio .panel-heading a').click(function() {
    //   jQuery(this).parents('.sidebar-panels_planEstudio').removeClass('actives');
    //   jQuery(this).parents('.sidebar-panels_planEstudio').addClass('actives');
    //  });
    //Acerca del Programa Leer Mas - Leer Menos
    jQuery('.collapse').on('shown.bs.collapse', function () {
        jQuery(this).parent().find('.text-view').text('Leer Menos');
    })
    jQuery('.collapse').on('hidden.bs.collapse', function () {
        jQuery(this).parent().find('.text-view').text('Leer Más');
    })
    jQuery.fn.addCountItems = function (options) {
        var carousel = this;
        var totalItems = carousel.find('.item').length;
        carousel.find('.count-items').find('span').text("1/" + totalItems);
        carousel.on('slid.bs.carousel', function () {
            currentIndex = carousel.find('div.active').index() + 1;
            carousel.find('.count-items').find('span').text(currentIndex + '/' + totalItems);
        });
    };
    jQuery('#myCarousel').addCountItems({});
    jQuery('#myCarousel2-acercab').addCountItems({});
    jQuery.fn.addCountItems = function (options) {
        var carousel = this;
        var totalItems = carousel.find('.item').length;
        carousel.find('.count-items-testi').find('span').text("TESTIMONIOS (1-" + totalItems + ")");
        carousel.on('slid.bs.carousel', function () {
            currentIndex = carousel.find('div.active').index() + 1;
            carousel.find('.count-items-testi').find('span').text('TESTIMONIOS (' + currentIndex + '-' + totalItems + ')');
        });
    };
    jQuery('#myCarousel-testimonios').addCountItems({});
    jQuery('.search-btn-mobile').on('click', function (evt) {
        evt.preventDefault();
    });
    var $mobileMenuContent = jQuery('#mobile-menu-content');
    jQuery('.menu-btn-mobile').on('click', function (evt) {
        evt.preventDefault();
        $mobileMenuContent.addClass('open');
    });
    $mobileMenuContent.find('.has-child').on('click', function (evt) {
        evt.preventDefault();
        var $this = jQuery(this);
        $this.next().addClass('open');
    });
    $mobileMenuContent.find('.close-submenu-mobile').on('click', function (evt) {
        evt.preventDefault();
        $mobileMenuContent.removeClass('open');
        $mobileMenuContent.find('.child-container').removeClass('open');
    });
    $mobileMenuContent.find('.closeChildContainer').on('click', function (evt) {
        evt.preventDefault();
        var $this = jQuery(this);
        $this.parent().removeClass('open');
    });


    var $container = jQuery('.facultad-nuestros-programas-masonry');
    $container.imagesLoaded(function () {
        $container.masonry({
            columnWidth: '.grid-sizer',
            itemSelector: '.grid-item',
        });
    });

    jQuery('#js-facultad-nuestros-programas-masonry a[data-toggle=tab]').each(function () {
        var $this = jQuery(this);

        $this.on('shown.bs.tab', function () {
            $container.imagesLoaded(function () {
                $container.masonry({
                    columnWidth: '.grid-sizer',
                    itemSelector: '.grid-item',
                });
            });
        });
    });

    jQuery('.sidebar-facultad-departamentos_boxes > a').on('click', function () {
        var scrollAnchor = jQuery(this).attr('data-scroll'),
            scrollPoint = jQuery('section[data-anchor="' + scrollAnchor + '"]').offset().top - 110;
        jQuery('body,html').animate({
            scrollTop: scrollPoint
        }, 1000);
        return false;
    });
    /* stick redes sociales custom fields */
    var newredes=jQuery('.new_redes').find('ul');
    jQuery('.facultad-redes').append(newredes);
    /* stick End redes sociales custom fields */

    /* stick investigaciones thumbs */
    var investThumbs=jQuery('.investigaciones-thumbs');
    jQuery('.investigando').append(investThumbs);
    jQuery('.investigando .investigaciones-thumbs').removeClass('hidden');
    /* stick End investigaciones thumbs */

    /* stick investigaciones Productos y servicios thumbs */
    var investProducts=jQuery('.investigaciones-productos');
    jQuery('.invest-products').append(investProducts);
    /* stick End investigaciones Productos y servicios thumbs */

    /* stick investigaciones Productos y servicios thumbs */
    var investGroups=jQuery('.investigaciones-grupos');
    jQuery('.stick-invest-groups').append(investGroups);
    /* stick End investigaciones Productos y servicios thumbs */

    /* stick investigaciones Noticias inicio */
    var investInicioNews=jQuery('.icesi_unicesi_news_events');
    jQuery('.stick-noticias-invest').append(investInicioNews);
    /* stick End investigaciones Noticias inicio */

    /* stick carusel bienestar estudiantil */
    var itemcaruselbienestar=jQuery('#carusel_bienestar').find('.news-banner-container');
    jQuery('.bienestar_estudiantil .col-sm-12').append(itemcaruselbienestar);
    /* End stick lcarusel bienestar estudiantil */

    /* stick contenedor Maestrias */
    var containerlogosmba=jQuery('.logosappend');
    jQuery('.logos-mba').append(containerlogosmba);
    /* End stick contenedor Maestrias */

    /* stick logo centros */
    var itemlogo=jQuery('.logo_centro_container').find('.logo_centro');
    jQuery('.stick_logo_centro').append(itemlogo);
    /* End stick logo centros */

    /* stick analisis - centros */
    var itemlogo=jQuery('.analisis_thumbs').find('.container');
    jQuery('.analisis-stick').append(itemlogo);
    /* End stick analisis - centros */

    var perfilegresados=jQuery('.perfil_thumbs').find('.container');
    jQuery('.perfil-stick').append(perfilegresados);
    /* End Stick perfon egresados*/

    if(jQuery('.perfil_thumbs2').length){
    var perfilegresados2=jQuery('.perfil_thumbs2').find('.container');
    jQuery('.perfilposgrado-stick').append(perfilegresados2);
    jQuery('.container-mod-egresados').removeClass('hidden');
    }
    /* End stick posgrado - centros */

    var perfilegresados3=jQuery('.perfil_thumbs3').find('.container');
    jQuery('.perfilpregrado-stick').append(perfilegresados3);
    /* End stick perfil pregrado - centros */

    var button_view_more=jQuery('.button').find('.container');
    jQuery('.stick_button').append(button_view_more);

    /* stick analisis - centros */
    var itemlogo=jQuery('.personal_thumbs').find('.container');
    jQuery('.personal-stick').append(itemlogo);
    /* End stick analisis - centros */

    /* stick congresos y programas - centros */
    var itemlogo=jQuery('.congresos_thumbs').find('.container');
    jQuery('.congresos-stick').append(itemlogo);
    /* End stick congresos y programas - centros */

    /* stick contacto centros */
    var itemContacto = jQuery('.container-contactos').find('.contactos-centros');
    jQuery('.stick_contacto').append(itemContacto);

    /* End stick contacto centros */
    var contact_chronoforms = jQuery('#chronoforms').find('.chronoforms');
    jQuery('.stick_chronoforms').append(contact_chronoforms);

    /* stick analisis centros Imagen */
    var itemAnalisis = jQuery('.item-image').find('img');
    jQuery('.container-image-article-interna').append(itemAnalisis);
    jQuery('.container-image-article-interna').find('img').addClass('img-responsive');
    /* End stick analisis centros Imagen */

    /* stick analisis centros Info Personal */
    var itemInfoAnalisis = jQuery('.info-person-articuloAnalisis').find('.container-info-personal-articles');
    jQuery('.stick-info-personal').append(itemInfoAnalisis);
    /* End stick contacto centros */

    /* stick noticias - centros y bienestar */
    var itemNoticias = jQuery('.icesi_unicesi_news_events');
    jQuery('.stick-noticias').append(itemNoticias);
    /* End stick noticias - centros y bienestar */

    /* stick noticias - centros y bienestar */
    var itemNoticias2 = jQuery('#news-events-inner');
    jQuery('.stick-noticias2').append(itemNoticias2);
    /* End stick noticias - centros y bienestar */

		if(jQuery('.icesi_unicesi_news_events').length){
			var itemNoticias3 = jQuery('.icesi_unicesi_news_events');
			jQuery('.stick-noticias3').append(itemNoticias3);
		}

		/* stick noticias - bienestar tab */
		if(jQuery('.icesi_unicesi_news_events_news-events-tab').length){
			var noticiasventostab = jQuery('.icesi_unicesi_news_events_news-events-tab');
			jQuery('.stick-noticias-eventos-bienestar').append(noticiasventostab);
		}
		/* End stick noticias - noticias - bienestar tab */

    /* stick noticias - vida icesi banner */
    var itemNoticiasBanner = jQuery('.icesi_unicesi_news_banner');
    jQuery('.stick-noticias-banner').append(itemNoticiasBanner);
    /* End stick noticias - vida icesi banner */

    /* stick banner la universidad */
    var bannerUniversidad=jQuery('.banner_launiversidad_container').find('.banner_centro');
    jQuery('.stick_banner_universidad').append(bannerUniversidad);
    /* End stick banner la universidad */

    /* stick timeline */
    var itemTimelines = jQuery('.timeline').find('.moduletable');
    jQuery('.stick-timeline').append(itemTimelines);
    /* End stick timeline */

    /* stick timeline */
    var iconsegre = jQuery('.container-icons-pre-footer');
    jQuery('.stick-icons-egre').append(iconsegre);
    /* End stick timeline */

    /* stick noticias - departamentos tab */
    var itemNoticiasdepartamentos = jQuery('.icesi_unicesi_news_events');
    jQuery('.stick-noticias-departamentos').append(itemNoticiasdepartamentos);
    /* End stick noticias - departamentos tab */

    /* stick noticias - departamentos programas tab */
    var itemNoticiasProgramasdepartamentos = jQuery('.departamentos-programas');
    jQuery('.stick-programas-departamentos').append(itemNoticiasProgramasdepartamentos);
    /* End stick noticias - departamentos programas tab */

		/* stick noticias - departamentos tab */
		if(jQuery('.icesi_unicesi_news_events_news-events-tab').length){
			var noticiasventostabdepartamentos = jQuery('.icesi_unicesi_news_events_news-events-tab');
			jQuery('.stick-noticias-departamentos-tab').append(noticiasventostabdepartamentos);
		}
		/* End stick noticias - noticias - departamentos tab */

    /* stick Materias - departamentos materias tab */
		if(jQuery('.materias-departamentos').length){
			var materiasdepartamentos = jQuery('.materias-departamentos');
			jQuery('.stick-materias-departamentos').append(materiasdepartamentos);
		}
		/* End stick Materias - departamentos materias tab */

    /* stick Grupos - departamentos investigacion tab */

			var gruposdepartamentos = jQuery('.grupos-departamentos');
			jQuery('.stick-grupos-departamentos-investigaciones-tab').append(gruposdepartamentos);

		/* End stick Grupos - departamentos investigacion tab */

    /* stick filtros relaciones */
    if(jQuery('.filtros-relaciones').length){
    var filtrosRelaciones=jQuery('.filtros-relaciones');
    jQuery('.stick-filtros-relaciones').append(filtrosRelaciones);
    }
    /* End stick filtros relaciones */

    var diplomados = jQuery('.container-cards-carusel').removeClass('hidden');
    jQuery('.stick-diplomados').append(diplomados);

    var filters_centros = jQuery('.filters-container');
    jQuery('.stick-filterscentros').append(filters_centros);

    var searchinterna = jQuery('#global-search-interna').find('.global-search-interna');
    jQuery('.stick-search').append(searchinterna);

    var searchinterna = jQuery('#global-search-menu ').find('.global-search-menu');
    jQuery('.stick-search-menu').append(searchinterna);

    var stickicesipiensa = jQuery('#icesi_piensa_en_ti');
    jQuery('.stick_icesi_piensa_en_ti').append(stickicesipiensa);

    var comoaplicarposgrado = jQuery('#mod_apl_posgrado').find('.container_mod_apl_posgrado');
    jQuery('.stick_apli_posgrado').append(comoaplicarposgrado);

    var content_text_article_category_1 = jQuery('#content_text_article_category_1');
    jQuery('.stick_content_text_article_category_1').append(content_text_article_category_1);

    var content_text_article_category_2 = jQuery('#content_text_article_category_2');
    jQuery('.stick_content_text_article_category_2').append(content_text_article_category_2);

    var content_text_pregrado_1 = jQuery('#content_text_pregrado_1');
    jQuery('.stick_content_text_pregrado_1').append(content_text_pregrado_1);
    var content_text_pregrado_2 = jQuery('#content_text_pregrado_2');
    jQuery('.stick_content_text_pregrado_2').append(content_text_pregrado_2);

    jQuery( "#programs-modules ul>li+li, #programs-modules ul>li" ).click(function() {
      var text_programas_childrens2 = jQuery(this).find('a span').eq(0).text();
      jQuery('.container-menu-programas').find('a').eq(0).text(text_programas_childrens2);
    });
    var text_programas_childrens = jQuery('#programs-modules ul>li span').eq(0).text();
    jQuery('.container-menu-programas').find('a').eq(0).text(text_programas_childrens);


    jQuery( "#sitios_relaciones #myTabs>li ul li+li, #sitios_relaciones #myTabs>li ul li" ).click(function() {
      var sitios_interes_dropdown = jQuery(this).find('a').eq(0).text();
      jQuery('#sitios_relaciones #myTabs>li a p').eq(0).text(sitios_interes_dropdown);
    });
    var sitios_interes_dropdown2 = jQuery('#sitios_relaciones #myTabs>li ul li a').eq(0).text();
    jQuery('#sitios_relaciones #myTabs>li a p').eq(0).text(sitios_interes_dropdown2);


    jQuery('.child-ul')
      .mouseover(function(){
        var activeLi  = jQuery(this).find('.dropdown-submenu:first-child');
        var activeLiA = jQuery(this).find('.dropdown-submenu:first-child > a');
        var activeLiHover  = jQuery(this).find('.dropdown-submenu:first-child:hover');
        jQuery(activeLi).css({
            'background': 'none',
            'border-bottom-color': 'transparent'
        });
        jQuery(activeLiA).css({
            'background': 'none',
            'border-bottom-color': '#154993',
            'color' : 'white'
        });
        jQuery(activeLiHover).css({
            'background': '#0F284C',
            'border-bottom-color': 'red',
        });
      });

    if('.child-ul .dropdown-submenuul li:first-child'){

    }

    jQuery('.egresados .nav.nav-tabs.tabs-pregradro li').on('shown.bs.tab', function (e) {
      if(jQuery('.egresados .nav.nav-tabs.tabs-pregradro li.active')){
        var tabid = jQuery(this).find('a').attr('href');
        if(tabid == "#tab-65" || tabid == "#tab-81") {
          console.log("entro");
          jQuery('.container-icons-pre-footer').removeClass('hidden');
        } else{
          jQuery('.container-icons-pre-footer').addClass('hidden');
        }
      }
    });

    //console.log(pos);
    if(jQuery('#pregradoRight').length > 0){
      var pos = jQuery('#pregradoRight').offset().top;
      if(jQuery(window).width() < 1024 ){
        jQuery( "#pregradoLeft ul.menu li" ).each(function( index ) {
          var url = jQuery(this).find('a').attr('href');
          var hashPre = jQuery('#pregradoRight').attr('id');
          var asd = url+'#'+hashPre;
          jQuery(this).find('a').attr('href',asd);
          url = "";
          hashPre = "";
          asd = "";
        });
      }
    }

    if(jQuery(window).width() < 1024 ){
      jQuery(window).load(function(){
        var hash = location.hash.replace('#','');
        //console.log(hash);
        if(hash != ''){
          jQuery('html, body').animate({
            scrollTop: jQuery('#'+hash).offset().top-100
          }, 700, 'swing');
        }
      });
    };


		/* stick Icesi y la Fundación Posgrado Especial */
		var sectionIcesiFuncacion = jQuery('#info_posgrados_especiales_1');
		jQuery('#fundacion_espec').append(sectionIcesiFuncacion.removeClass('hidden'));

		var sectionIcesiAcreditacion = jQuery('#info_posgrados_especiales_2');
		jQuery('#acreditacion_espec').append(sectionIcesiAcreditacion.removeClass('hidden'));
		/* End */

		/* stick Sobre la funcación valle del lili */
		var sectionSobreFundacion = jQuery('#info_posgrados_especiales_3');
		jQuery('#sobre_fundacion_espec').append(sectionSobreFundacion.removeClass('hidden'));
		/* End */

    /* Stick brochure posgrado */
    var brochure = jQuery('.brochure-posgrado');
		jQuery('#brochure-posgrado-raiz').append(brochure.removeClass('hidden'));
    /* End */

    /* Stick brochure doctorado */
    var brochure = jQuery('.brochure-doctorado');
		jQuery('#brochure-doctorado-raiz').append(brochure.removeClass('hidden'));
    /* End */

    /* Redes MBA posgrado */
    var redesMBA = jQuery('.redes-original');
		jQuery('#redes-mba-pos').append(redesMBA.removeClass('hidden'));
    /* End */

    /* stick calendario */
    var calendarioacademico = jQuery('#calendario-academico');
    jQuery('.stick_calendario_academico').append(calendarioacademico);
    jQuery('.stick_calendario_academico').find('#calendario-academico').removeClass('hidden');
    /* End stick calendario */


    /* stick noticias egresados */
    var noticias_egresados = jQuery('#noticias-egresados-izquierdo');
		jQuery('.stick-noticias-egresados-left').append(noticias_egresados);

    var noticiasegresados2 = jQuery('#noticias-egresados-right');
    jQuery('.stick-noticias-egresados-right').append(noticiasegresados2);
    /* End */

    /* stick Instalaciones Pregrado Tab */
    var instalacions_pretab = jQuery('#instalaciones_pregrado_tab .moduletable');
		jQuery('#stick-instalaciones-tab-pregrado').append(instalacions_pretab);

    /* End */

    var boletines_revistas = jQuery('#know .container-fluid');
    jQuery('.stick-desarrollos-egresados').append(boletines_revistas);

    var noticias_banners_egresados = jQuery('.news-banner-container');
    jQuery('.stick-noticias-banner').append(noticias_banners_egresados);

    var noticias_eventos_egresados = jQuery('#noticias-egresados');
    jQuery('.stick-noticias-egresados').append(noticias_eventos_egresados);

    /* stick educontinua */
    var stickeducontinua = jQuery('#news-events-inner');
    jQuery('.stick-news-events-educontinua').append(stickeducontinua);
    jQuery('.stick-news-events-educontinua').find('#news-events-inner').removeClass('hidden');
    /* End stick educontinua */

    /* Menu Filters Unicesi */
    var filter_module = jQuery('#mobile-menu-filters');
    jQuery('.mobile-menu-filters-unicesi').append(filter_module);

    /* Menu Fechas boletines */
    var menu_dates = jQuery('.icesi_centers_menu');
    //jQuery('#menu-fechas-position-p').append(menu_dates);
    //jQuery('#menu-fechas-position-p').find('.icesi_centers_menu').removeClass('hidden');

    /* Menu Fechas interna boletines */
    var menu_dates = jQuery('.icesi_centers_menu');
    jQuery('#menu-fechas-position-c').append(menu_dates);
    jQuery('#menu-fechas-position-c').find('.icesi_centers_menu').removeClass('hidden');


    jQuery('.btn-contact-ec').on('click',function(){
      var url_actual = window.location.href;
      jQuery('.url-ec').val(url_actual);
    });



    jQuery(window).scroll(function() {
        var wh = jQuery('body').height();
        var hei = jQuery('body').scrollTop() + jQuery(window).height();
        var hei2 = (hei * 100) / wh;
        var win = jQuery('body').width();
        var win2 = (((win * hei2)) / 100);

        //console.log(hei);
        //console.log(wh);

        jQuery('#pregrado-fixed-menu').animate({
            width: jQuery('.pregrado-fixed-menu-border').width(win2)
        }, 500);
    });

    jQuery('<li class="arrow-back-menu"><a href="#"></a></li>').prependTo('#mainMenu.navbar.nav-main .navbar-collapse .navbar-nav.nav-main ul.dropdown-menu .third-level.sub-1, #mainMenu.navbar.nav-main .navbar-collapse .navbar-nav.nav-main ul.dropdown-menu .third-level.sub-2, #mainMenu.navbar.nav-main .navbar-collapse .navbar-nav.nav-main ul.dropdown-menu .third-level.sub-3, #mainMenu.navbar.nav-main .navbar-collapse .navbar-nav.nav-main ul.dropdown-menu .third-level.sub-4, #mainMenu.navbar.nav-main .navbar-collapse .navbar-nav.nav-main ul.dropdown-menu .third-level.sub-5, #mainMenu.navbar.nav-main .navbar-collapse .navbar-nav.nav-main ul.dropdown-menu .third-level.sub-6');

    $unicesiFilter = jQuery('#unicesiFilterLinks');
    $unicesiFilterContent = jQuery('#unicesiFilterCollapse');
    $unicesiFilter.find('a[data-toggle="collapse"]').on('click', function (evt) {
        evt.preventDefault();
        var $this = jQuery(this);

        $unicesiFilterContent.find('.collapse').collapse('hide');
        jQuery($this.attr('href')).collapse('show');
    });

    $mobileFiltersUnicesi = jQuery('#mobile-menu-filters');
    jQuery('#unicesiEventsButton .unicesiHead .btn-filter').on('click', function (evt) {
      $mobileFiltersUnicesi.addClass('open');
    });

    $mobileFiltersUnicesi .find('.close-submenu-mobile').on('click', function (evt) {
        evt.preventDefault();
        $mobileFiltersUnicesi.removeClass('open');
        //$mobileMenuContent.find('.child-container').removeClass('open');
    });

    jQuery('#accordion .collapse ').on('show.bs.collapse', function () {
      jQuery(this).parent().find(".main-menu-item a").addClass("color-filter-g");
    });

    jQuery('#accordion .collapse ').on('hide.bs.collapse', function () {
      jQuery(this).parent().find(".main-menu-item a").removeClass("color-filter-g");
    });

    $globalSearch = jQuery('#global-search');

    jQuery('.icesi-btn-search').on('click', function (evt) {
        evt.preventDefault();
        jQuery('body').toggleClass('searching-body')
        $globalSearch.toggleClass('open');
    });

    $globalSearch.find('.close-btn').on('click', function (evt) {
        evt.preventDefault();
        jQuery('body').toggleClass('searching-body')
        $globalSearch.toggleClass('open');
    });

    $leftSearchModules = jQuery('#left-search-modules');
    $leftSearchModulesContainer = jQuery('#search-left-modules');
    if ($leftSearchModules.length > 0) {
        $leftSearchModulesContainer.append($leftSearchModules.clone().removeClass('hidden'));
    } else {
        $leftSearchModulesContainer.removeClass('col-sm-3');
        jQuery('#search-right-content').removeClass('col-sm-9').addClass('col-sm-12');
    }

    /*  BANNER Vida_Icesi   */
    jQuery('.container-banner-img').find('img').show();
    var first = jQuery('.tab-pane.active').find('.container-banner .container-banner-img img').attr('src');
    jQuery('.master-banner').css('background-image' , 'url('+first+')');

    /*  BANNER Doctorado   */
    jQuery('.container-banner-img-doctorado').find('img').show();
    var first = jQuery('.container-banner-img-doctorado').find('img').attr('src');
    jQuery('.master-banner-doctorado').css('background-image' , 'url('+first+')');

    jQuery(".tabs-pregradro li a").on('click',function(){
        var $this = jQuery(this);
        var tabid = $this.attr('href');
        var tab = jQuery('.tab-content').find(tabid).find('.container-banner .container-banner-img img').attr('src');
        jQuery('.master-banner').css('background-image' , 'url('+tab+')');
    });

    jQuery(".thumbnail-bienvenidos a").on('click',function(){
        var $this = jQuery(this);
        var tabid = $this.attr('href');
        jQuery('.tab-content').find(tabid);
        jQuery('.tabs-pregradro-li')
            .removeClass('active')
            .find('a[href="'+tabid+'"]')
            .parent()
            .addClass('active');

        $this.tab('show');
        var tab = jQuery('.tab-content').find(tabid).find('.container-banner .container-banner-img img').attr('src');
        jQuery('.master-banner').css('background-image' , 'url('+tab+')');
    });

    jQuery("#PregTabsNavCont ul li a").on('click',function(){
        var $this = jQuery('.tabs-pregradro').find('.active a');
        var tabid = $this.attr('href');
        var tab = jQuery('.tab-content').find(tabid).find('.container-banner .container-banner-img img').attr('src');
        jQuery('.master-banner').css('background-image' , 'url('+tab+')');
    });

    jQuery(".thumbnail-bienvenidos-centros a").on('click',function(){
       var tabid = jQuery(this).attr('href');
        jQuery('.tab-content').find(tabid);
        jQuery('.tabs-pregradro-li')
            .removeClass('active')
            .find('a[href="'+tabid+'"]')
            .parent()
            .addClass('active');
        jQuery('body').animate({
            scrollTop: 0
        }, 1000);
        jQuery(this).tab('show');
    });

    jQuery(".sidebar-facultad_bienvenidos_thumbs a").on('click',function(){
       var tabid = jQuery(this).attr('href');
        jQuery('.tab-content').find(tabid);
        jQuery('.tabs-pregradro-li')
            .removeClass('active')
            .find('a[href="'+tabid+'"]')
            .parent()
            .addClass('active');
        jQuery('body').animate({
            scrollTop: 0
        }, 1000);
        jQuery(this).tab('show');
    });

    jQuery(".go-tab").on('click', function(e){
      var $this = jQuery(this);
      var tabid = $this.attr('href');
      jQuery('.tab-content').find(tabid);
      jQuery('.tabs-pregradro-li')
          .removeClass('active')
          .find('a[href="'+tabid+'"]')
          .parent()
          .addClass('active');
      jQuery('body').animate({
        scrollTop: 0
      }, 1000);
      $this.tab('show');
    });

    jQuery(".container-bienvenidos .conoce-centro").on('click',function(){
        var $this = jQuery(this);
        var tabid = $this.attr('href');
        jQuery('.tab-content').find(tabid);
        jQuery('.tabs-pregradro-li')
            .removeClass('active')
            .find('a[href="'+tabid+'"]')
            .parent()
            .addClass('active');
        jQuery('body').animate({
            scrollTop: 0
        }, 1000);
        $this.tab('show');
    });

    jQuery(".tabs-pregradro li a").on('click',function(){
        var $this = jQuery(this);
        var tabid = $this.attr('href');
        var tab = jQuery('.tab-content').find(tabid).find('.container-banner .container-banner-img img').attr('src');
        jQuery('.master-banner').css('background-image' , 'url('+tab+')');
    });

    /* SCROLLBAR DRAG LIST */
    var x,left,down;
    jQuery(".panel-heading .container-ul-timeline .nav-tabs").mousedown(function(e){
        e.preventDefault();
        down=true;
        x=e.pageX;
        left=jQuery(this).scrollLeft();
    });
    jQuery(".panel-heading .container-ul-timeline .nav-tabs").mousemove(function(e){
        if(down){
            var newX=e.pageX;
            jQuery(".panel-heading .container-ul-timeline .nav-tabs").scrollLeft(left-newX+x);
        }
    });
    jQuery(".panel-heading .container-ul-timeline .nav-tabs").mouseup(function(e){down=false;});

    /*Validaciones de resolucion*/
    if (jQuery(window).width() < 768) {
        var bannerUniversidad2 = jQuery('.banner_launiversidad_container').find('.banner_centro');
        jQuery('.banner-centro2').append(bannerUniversidad2);
    }

    // Inicio 404
    jQuery('.page_not_found #global-search').find('.close').removeClass('hidden');
    jQuery('.page_not_found #global-search').find('.input-group').removeClass('input-group');
    jQuery('.page_not_found #global-search').find('.search-query').removeClass('form-control');
    jQuery('.page_not_found #global-search').find('.search-query').attr('id','mod-search-searchword');

    jQuery('.page_not_found #global-search').find('.search-icn').replaceWith('<a class="search-icn" onclick="this.form.submit();"><i class="icon-search"></i></a>');
    jQuery('.page_not_found #global-search').find('.element-invisible').removeClass('hidden');
    // Fin 404

    //Validation Banner centros
    if(jQuery('.box-carousel-centros .item').length > 1){
      jQuery('.box-carousel-centros a.carousel-control').show();
    }else{
      jQuery('.box-carousel-centros a.carousel-control').hide();
    }

    var tab1_filter = jQuery('.tab1_filter');
    jQuery('.stick_tab1_filter').append(tab1_filter);

    var tab2_filter = jQuery('.tab2_filter');
    jQuery('.stick_tab2_filter').append(tab2_filter);

    var tab3_filter = jQuery('.tab3_filter');
    jQuery('.stick_tab3_filter').append(tab3_filter);

    var tab4_filter = jQuery('.tab4_filter');
    jQuery('.stick_tab4_filter').append(tab4_filter);

    var tab5_filter = jQuery('.tab5_filter');
    jQuery('.stick_tab5_filter').append(tab5_filter);

    var tab6_filter = jQuery('.tab6_filter');
    jQuery('.stick_tab6_filter').append(tab6_filter);

    var tab7_filter = jQuery('.tab7_filter');
    jQuery('.stick_tab7_filter').append(tab7_filter);

    var tab8_filter = jQuery('.tab8_filter');
    jQuery('.stick_tab8_filter').append(tab8_filter);


    jQuery('#ultest2 li').each(function(i,val){
				if(jQuery(val).hasClass('active')){
						//console.log(jQuery(val));
						jQuery('#linka2').html(jQuery(val).find('a').text());
				}
		});

    jQuery( ".inner-content .blog .items-leading .container-ul-timeline .nav-tabs>li+li" ).click(function() {
        var a = jQuery(this).find('a').text();
        jQuery('#anouniversidad').text(a);
    })




		//Submenu de investigación del menu principal
		jQuery('#mainMenu.navbar.nav-main .navbar-collapse .navbar-nav.nav-main li.item-132-web').find('.dropdown-menu').hide();
		//
    var $cursos = jQuery('.educontinua #pregradoRight .cursos-cat h5');
    jQuery('.educontinua #pregradoRight .stick-cursos').append($cursos);

    var $tiempo = jQuery('.educontinua #pregradoRight .tiempo p');
    jQuery('.educontinua #pregradoRight .stick-d-text').append($tiempo);


    // RELACIONES
    var faculties_relaciones = jQuery('#faculties');
    jQuery('.stick_faculties_relaciones').append(faculties_relaciones);
    var nuestras_instalaciones = jQuery('.sidebar-facultad_imagenes');
    jQuery('.stick_nuestras_instalaciones').append(nuestras_instalaciones);

    /*MENU IAM*/
    jQuery(".showRight").click( function (e)
    {
      e.preventDefault();
      jQuery(this).toggleClass('active');
      jQuery("#cbp-spmenu-s2").toggleClass('cbp-spmenu-open');
      jQuery(".showLeft").removeClass('active');
      if (jQuery("#cbp-spmenu-s2").hasClass('cbp-spmenu-open'))
      {
        jQuery(this).addClass('active');
        jQuery(this).html("Cerrar");
      }
      else
      {
        jQuery(this).removeClass('active');
        jQuery(this).html("Yo soy");
      };

    });

});
/** Codigo para  mod_uicesi_news_calendar **/
(function($){
	/*variable para guardar el estado initial del html en el carrousel*/
	var itemsHtml = "";
	$(function(){
		var $window =$(window);
		var change = true;
		//se guarda el estado inicial del html en el carousel
		itemsHtml =$('#carousel-news-calendar').find('.carousel-inner').html();

		/*funcion para hacer el cambio de html para pantallas inferiores a 768px*/
		var setCarouselSM = function(){
			var $carousel = $('#carousel-news-calendar');
			$carousel.carousel('pause');
			var flexItem = $carousel.find('.carousel-inner').find('.flex-item');
			$carousel.find('.carousel-inner').html("");
			$.each(flexItem,function(key,val){
				var $item = $('<div class="item '+(key==0?'active':'')+'"></div>');
				$carousel.find('.carousel-inner').append($item.append(val))
			});
			var items = $carousel.find('.carousel-inner').find('.item');
			if(items.length>1){
				$carousel.find('.carousel-control').removeClass('hidden');
			}else{
					$carousel.find('.carousel-control').addClass('hidden');
			}
			$carousel.carousel();
		}
		/*funcion para hacer el cambio de html para pantallas mayores o iguales 768px*/
		var setCarouselMD = function(){
			var $carousel = $('#carousel-news-calendar');
			$carousel.carousel('pause');
			$carousel.find('.carousel-inner').html(itemsHtml);
			var items = $carousel.find('.carousel-inner').find('.item');
			if(items.length>1){
				$carousel.find('.carousel-control').removeClass('hidden');
			}else{
					$carousel.find('.carousel-control').addClass('hidden');
			}
			$carousel.carousel();
		}



		/* Evento para cambios de tamaño en la pantalla*/
		$window.resize(function() {
			if($window.width()<1024 && change){
				setCarouselSM();
				change = false;
			}else if($window.width()>=1024 && !change){
				setCarouselMD();
				change = true;
			}
		});
		/* se ejecuta en la carga inicial una sola vez*/
		/*if($window.width()<1024){
			setCarouselSM();
		}*/
	})
})(jQuery);

//se agrega plugin redes sociales
(function($){

    $.fn.sharedSocial = function() {
        var addEvents = function(that,social){
            that.on('click',function(event) {
                event.preventDefault();

                var createModal =function(title,url){
                    var  popitup = function(url, title, w, h) {
                        // Fixes dual-screen position                         Most browsers      Firefox
                        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
                        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

                        width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
                        height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

                        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
                        var top = ((height / 2) - (h / 2)) + dualScreenTop;
                        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

                        // Puts focus on the newWindow
                        if (window.focus) {
                            newWindow.focus();
                        }
                    }

                    popitup(url,title,400,500);

                }
                var current_link = window.location.href;
                var text = $('meta[name=description]').attr("content");
                switch (social) {
                    case "facebook":
                        var url = "https://www.facebook.com/sharer/sharer.php?u="+current_link;
                        createModal("Facebook",url);

                        break;
                    case "twitter":
                        var url = 'https://twitter.com/intent/tweet?text='+text+'&url='+current_link;
                        createModal("Twitter",url);
                        break;
                    case "google":

                        var url = "https://plus.google.com/share?url="+current_link;
                        createModal("Twitter",url);
                        break;

                }
            });
        }
        this.each(function() {

            if($(this).hasClass("shared-facebook")){
                addEvents($(this),"facebook");
            }else if($(this).hasClass("shared-google")){
                addEvents($(this),"google");
            }else if($(this).hasClass("shared-twitter")){
                addEvents($(this),"twitter");
            }
        });
        return this;
    }

    $(function(){
        $(document).find('.shared-social').sharedSocial();
    });
})(jQuery)


    jQuery('ul.nav.navbar-nav li.dropdown ul.dropdown-menu li:not(.deeper.dropdown.dropdown-submenu )').addClass('vinculo-noCollapse');

    // Collapse menu Azul
      var $idcollapse = jQuery('.menu-blue-bienestar #Left-inner .menu-blue-left').find('ul li.parent').find('ul.nav-child').attr('id');

      jQuery('.menu-blue-bienestar #Left-inner .menu-blue-left').find('ul li.parent').find('a.vinculo-collapse').attr('href', '#212');

      var programas = [
        {id:"ADD",name:"Administración Empresas"},
        {id:"ADN",name:"Administración Empresas"},
        {id:"ANT",name:"Antropología"},
        {id:"ATC",name:"Licenciatura en Artes"},
        {id:"BIO",name:"Biología"},
        {id:"CIP",name:"Ciencia Política"},
        {id:"COF",name:"Contaduría Pública Y Finanzas"},
        {id:"DER",name:"Derecho"},
        {id:"DIS",name:"Diseño Industrial"},
        {id:"DMI",name:"Diseño de Medios Interactivos"},
        {id:"EBP",name:"Licenciatura en Educación Básica Primaria"},
        {id:"ECO",name:"Economía"},
        {id:"ENI",name:"Economía Y Negocios Internacionales"},
        {id:"ESH",name:"Licenciatura en Ciencias Sociales"},
        {id:"IBQ",name:"Ingeniería Bioquímica"},
        {id:"IND",name:"Ingeniería Industrial"},
        {id:"ING",name:"Año Básico De Ingeniería"},
        {id:"LCN",name:"Licenciatura en Ciencias Naturales"},
        {id:"LEI",name:"Licenciatura en Lenguas Extranjeras"},
        {id:"LYL",name:"Licenciatura en Literatura y Lengua C"},
        {id:"MED",name:"Medicina"},
        {id:"MIP",name:"Mercadeo Internacional Y Publicidad"},
        {id:"MUS",name:"Música"},
        {id:"PSI",name:"Psicología"},
        {id:"QUF",name:"Química Farmacéutica"},
        {id:"QUI",name:"Química"},
        {id:"SIS",name:"Ingeniería De Sistemas"},
        {id:"SOC",name:"Sociología"},
        {id:"TEL",name:"Ingeniería Telemática"},
        {id:"PO001",name:"Especialización en Negocios En Internet"},
        {id:"PO002",name:"Especialización en Gerencia De Logística"},
        {id:"PO003",name:"Especialización en Auditoría En Salud"},
        {id:"PO004",name:"Maestría En Biotecnología"},
        {id:"PO005",name:"Especialización en Neg Inter Conve Sabana"},
        {id:"PO006",name:"Especialización en Diseño Medios Digitales"},
        {id:"PO007",name:"Maestría en Gestión de la Innovación"},
        {id:"PO008",name:"Especialización en Calidad para la Competitividad"},
        {id:"PO009",name:"Maestría En Finanzas"},
        {id:"PO010",name:"Maestría en Gerencia de Organizaciones de Salud"},
        {id:"PO011",name:"Especialización en Ginecología y Obstetricia"},
        {id:"PO012",name:"Maestría En Finanzas 1 año"},
        {id:"PO013",name:"Especialización en Psiquiatría"},
        {id:"PO014",name:"Especialización en Derecho Comercial"},
        {id:"PO015",name:"MBA Icesi"},
        {id:"PO016",name:"Maestría Administración Ibagué"},
        {id:"PO017",name:"Maestría Administración 1 año"},
        {id:"PO018",name:"Maestría En Mercadeo"},
        {id:"PO019",name:"Maestría En Mercadeo 1 año"},
        {id:"PO020",name:"Maestría en Gerencia para la Innovación Social"},
        {id:"PO021",name:"Maestría en Gestión Informática y Telecomunicaciones"},
        {id:"PO022",name:"Maestría Gesti. Infor Teleco 1 año"},
        {id:"PO023",name:"Maestría En Economía"},
        {id:"PO024",name:"Maestría en Ingeniería Industrial"},
        {id:"PO025",name:"Mae  Ingeniería Indus. 1 año"},
        {id:"PO026",name:"Especialización Derecho Laboral y de la Seguridad Social"},
        {id:"PO027",name:"Especialización Legislación Laboral y de la Seguridad Social para no abogados"},
        {id:"PO028",name:"Especialización en Pediatría"},
        {id:"PO029",name:"Especialización en Dermatología"},
        {id:"PO030",name:"Especialización en Artroscopia"},
        {id:"PO031",name:"Especialización en Cardiología Pediátrica"},
        {id:"PO032",name:"Especialización en Cirugía de Trasplantes de Órganos Abdominales"},
        {id:"PO033",name:"Especialización en Radiología e imágenes diagnósticas"},
        {id:"PO034",name:"Especialización en Reumatología"},
        {id:"PO035",name:"Especialización en Medicina Interna"},
        {id:"PO036",name:"Maestría en Informática y Telecomunicaciones en modalidad de investigación"},
        {id:"PO037",name:"Maestría en Derecho"},
        {id:"PO038",name:"Especialización en Hematología y Oncología"},
        {id:"PO039",name:"Maestría En Educación"},
        {id:"PO040",name:"Maestría en Formulación de Productos Químicos y Derivados"},
        {id:"PO041",name:"Especialización en Gerencia y Mercadeo Estratégico"},
        {id:"PO042",name:"Especialización en Auditoría a los Sistemas Informáticos"},
        {id:"PO043",name:"Maestría En Gobierno"},
        {id:"PO044",name:"Maestría Intervención Psicosocial"},
        {id:"PO045",name:"Especialización en Gerencia del Medio Ambiente"},
        {id:"PO046",name:"Especialización en Gerencia de Empresas Comerciales"},
        {id:"PO047",name:"Especialización en Gerencia de Negocios Internacionales"},
        {id:"PO048",name:"Especialización en Gerencia Tributaria"},
        {id:"PO049",name:"Maestría en Enseñanza del Inglés como Lengua Extranjera"},
        {id:"PO050",name:"Especialización en Gerencia de Sistemas Informáticos"},
        {id:"PO051",name:"Especialización en Administración"},
        {id:"PO052",name:"Especialización en Administración Agroindustrial"},
        {id:"PO053",name:"Especialización en Finanzas"},
        {id:"PO054",name:"Especialización en Mercados"},
        {id:"PO055",name:"Especialización en Gerencia de Producción"},
        {id:"PO056",name:"Especialización en Ingeniería de Software"},
        {id:"PO057",name:"Maestría Admon Antiguo Convenio"},
        {id:"PO058",name:"Especialización en Gestión de la Salud"},
        {id:"PO059",name:"Especialización en Gerencia de Informática Organizacional"},
        {id:"PO060",name:"Maestría En Periodismo"},
        {id:"PO061",name:"Especialización en Derecho Procesal"},
        {id:"PO062",name:"Especialización en Derecho Empresarial"},
        {id:"PO063",name:"Especialización en Derecho Público"},
        {id:"PO064",name:"Especialización en Derecho Penal"},
        {id:"PO065",name:"Especialización en Derecho Judicial"},
        {id:"PO066",name:"Maestría En Derecho 1 año"},
        {id:"PO067",name:"Especialización en Nefrología"},
        {id:"PO068",name:"Especialización en Cardiología"},
        {id:"PO069",name:"Especialización en Psiquiatría de Enlace"},
        {id:"PO070",name:"Especialización en Administración Pública"},
        {id:"PO071",name:"Especialización en Gestión Humana en las Organizaciones"},
        {id:"PO072",name:"Maestría en Estudios Sociales y Políticos"},
        {id:"PO073",name:"Especialización Derecho Laboral y de la Seguridad Social"},
        {id:"PO074",name:"Especialización en Redes y Comunicaciones"},
        {id:"PO075",name:"MBA Global"},
        {id:"PO076",name:"Maestría en Ciencias Biotecnología"},
        {id:"PO077",name:"Maestría Admin. Doble Titu 1 año"},
        {id:"PO078",name:"Especialización En Alergología"},
        {id:"PO079",name:"Especialización en Medicina de Emergencia"},
        {id:"PO080",name:"Especialización en Cirugía de Cabeza y Cuello"},
        {id:"PO081",name:"Especialización En Legislación"},
        {id:"PO082",name:"Especialización En Derecho Tributario"},
        {id:"PO083",name:"Maestría En Derecho en modalidad de investigación"},
        {id:"PO084",name:"Maestría En Ciencias Administrativas"},
        {id:"PO085",name:"Maestría En Finanzas Cuantitativas"},
        {id:"PO086",name:"Doctorado En Economía De Los Negocios"},
        {id:"PO087",name:"Especialización En Derecho Comercial"},
        {id:"PO088",name:"Maestría en Creación De Empresas"},
        {id:"PO089",name:"Maestría en Contabilidad y Tributación"},
        {id:"PO090",name:"Maestría en Gerencia de proyectos"},
        {id:"PO091",name:"Especialización en Nefrología Pediátrica"},
        {id:"PO092",name:"Especialización en Neurocirugía"},
        {id:"PO093",name:"Especialización en Neurología"},
        {id:"PO094",name:"Especialización en Anestesiología"},
        {id:"PO095",name:"Especialización en Ortopedia y Traumatología"},
        {id:"PO096",name:"Especialización en Docencia Universitaria"},
        {id:"PO097",name:"Maestría en Educación mediada por las TIC"},
        {id:"PO098",name:"MBA Global"},
        {id:"PO099",name:"Especialización Infectología"},
        {id:"PO100",name:"Especialización en Analítica aplicada a los negocios"},
        {id:"PO101",name:"Especialización en Derecho para no abogados"},
        {id:"PO103",name:"Maestría en Ciencia de Datos"},
        {id:"FIN",name:"Finanzas"},
      ];

      var departamentos = [
        {id:"ACU",name:"Actividades Culturales"},
        {id:"CBI",name:"Ciencias Biológicas"},
        {id:"CBM",name:"Ciencias Básicas Médicas"},
        {id:"CCM",name:"Ciencias Clínicas Médicas"},
        {id:"CFC",name:"Ciencias Farmacéuticas"},
        {id:"CFT",name:"Ciencias Físicas Y Tecnológica"},
        {id:"CLI",name:"Cursos Libres"},
        {id:"CQU",name:"Ciencias Químicas"},
        {id:"DEP",name:"Deportes"},
        {id:"DHU",name:"Desarrollo Humano"},
        {id:"DIS",name:"Diseño"},
        {id:"ECO",name:"Economía"},
        {id:"EDC",name:"Educación continua"},
        {id:"EEM",name:"Espíritu Empresarial"},
        {id:"EPO",name:"Estudios Políticos"},
        {id:"ESJ",name:"Estudios Jurídicos"},
        {id:"ESO",name:"Estudios Sociales"},
        {id:"ESP",name:"Estudios Psicológicos"},
        {id:"FIN",name:"Finanzas"},
        {id:"GES",name:"Gestión Organizacional"},
        {id:"HPO",name:"Histórico de posgrado"},
        {id:"HUM",name:"Humanidades"},
        {id:"IBQ",name:"Ingeniería Bioquímica"},
        {id:"IDI",name:"Idiomas"},
        {id:"IND",name:"Ingeniería Industrial"},
        {id:"LEN",name:"Lenguaje"},
        {id:"MAT",name:"Matemáticas Y Estadística"},
        {id:"MER",name:"Mercadeo y Negocios Internacio"},
        {id:"NIN",name:"Negocios Internacionales"},
        {id:"PDP",name:"Desarrollo Profesional"},
        {id:"PED",name:"Pedagogía"},
        {id:"RCO",name:"Redes Y Comunicaciones"},
        {id:"REC",name:"Rectoría"},
        {id:"SPM",name:"Salud Pública y Medicina Comun"},
        {id:"TIC",name:"Tecnologías de Información y C"},
      ];
