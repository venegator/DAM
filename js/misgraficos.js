/* Mi Script */

var datosTarta = [
    {
        value: 10.2,
        color:"lime",
        label: "Acción"
    },
    {
        value: 9.4,
        color: "green",
        label: "Drama"
    },
    {
        value: 17.2,
        color: "red",
        label: "Comedia"
    },
    {
        value: 11,
        color: "purple",
        label: "Terror"
    },
    {
        value: 14.2,
        color: "blue",
        label: "Suspense"
    },
    {
        value: 13.4,
        color: "green",
        label: "Romántica"
    },
    {
        value: 10.2,
        color: "maroon",
        label: "Ciencia ficción"
    },
    {
        value: 5.5,
        color: "teal",
        label: "C. Autor"
    },
    {
        value: 11,
        color: "aqua",
        label: "Animación"
    }
];

var opcionesTarta ={
    //Lógico: ¿Mostrar el contorno de los segmentos?
    segmentShowStroke : true,
    //Color CSS: Color del contorno de los segmentos
    segmentStrokeColor : "#fff",
    //Número: Grosor del contorno de los segmentos
    segmentStrokeWidth : 2,
    //Número: Porcentaje del radio interno
    percentageInnerCutout : 0,
    //Número: Nº Frames de la animación
    animationSteps : 30,
    //Cadena: Efecto de la animación
    animationEasing : "easeOutBounce",
    //Lógico: ¿Animación de rotación?
    animateRotate : true,
    //Lógico: ¿Animación de escalado desde el centro?
    animateScale : true,
    //Código: Plantilla de la leyenda
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};


var datosBarraAsia = {
    labels: ["Acción", "Drama", "Comedia", "Terror", "Suspense", "Romántica", "Ciencia ficción", "C. Autor", "Animación"],
    datasets: [
        {
            label: "Ingresos en millones de euros",   
            fillColor: "yellow",
            strokeColor: "black",
            highlightFill: "rgba(0,255,0,0.5)",
            highlightStroke: "rgba(0,0,0,0.5)",
            data: [200,100,120,150,95,50,250,50,500]
        },
    ]
};

var datosBarraEuropa = {
    labels: ["Acción", "Drama", "Comedia", "Terror", "Suspense", "Romántica", "Ciencia ficción", "C. Autor", "Animación"],
    datasets: [
        {
            label: "Ingresos en millones de euros",   
            fillColor: "black",
            strokeColor: "black",
            highlightFill: "rgba(0,255,0,0.5)",
            highlightStroke: "rgba(0,0,0,0.5)",
            data: [320,550,450,480,490,500,400,300,390]
        },
    ]
};

var datosBarraAmerica = {
    labels: ["Acción", "Drama", "Comedia", "Terror", "Suspense", "Romántica", "Ciencia ficción", "C. Autor", "Animación"],
    datasets: [
        {
            label: "Ingresos en millones de euros",   
            fillColor: "blue",
            strokeColor: "black",
            highlightFill: "rgba(0,255,0,0.5)",
            highlightStroke: "rgba(0,0,0,0.5)",
            data: [1000,700,800,790,600,850,1200,500,780]
        },
    ]
};

var datosBarraAfrica = {
    labels: ["Acción", "Drama", "Comedia", "Terror", "Suspense", "Romántica", "Ciencia ficción", "C. Autor", "Animación"],
    datasets: [
        {
            label: "Ingresos en millones de euros",   
            fillColor: "red",
            strokeColor: "black",
            highlightFill: "rgba(0,255,0,0.5)",
            highlightStroke: "rgba(0,0,0,0.5)",
            data: [100,90,200,120,130,150,170,50,80]
        },
    ]
};

var datosBarraOceania = {
    labels: ["Acción", "Drama", "Comedia", "Terror", "Suspense", "Romántica", "Ciencia ficción", "C. Autor", "Animación"],
    datasets: [
        {
            label: "Ingresos en millones de euros",   
            fillColor: "green",
            strokeColor: "black",
            highlightFill: "rgba(0,255,0,0.5)",
            highlightStroke: "rgba(0,0,0,0.5)",
            data: [250,200,400,350,300,320,390,150,370]
        },
    ]
};



var opcionesBarra ={
    //Lógico: ¿Iniciar escala en 0 o valor más bajo?
    scaleBeginAtZero : false,
    //Lógico: ¿Se muestra la rejilla a través de la tabla?
    scaleShowGridLines : true,
    //Color CSS: Color del contorno de la rejilla
    scaleGridLineColor : "rgba(0,0,0,.05)",
    //Número: Grosor de las líneas de la rejilla
    scaleGridLineWidth : 1,
    //Lógico:  ¿Mostrar el contorno de las barras?
    barShowStroke : true,
    //Número: Grosor del contorno de las barras
    barStrokeWidth : 1,
    //Número: Espaciado entre cada uno de los grupos en el eje X
    barValueSpacing : 5,
    //Number: Espaciado entre las series de datos en el eje X
    barDatasetSpacing : 3,
    //Código: Plantilla de la leyenda
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};

function dibujar(){
	var ctx1 = document.getElementById("miTarta").getContext("2d");
    var miGraficoTarta = new Chart(ctx1).Pie(datosTarta,opcionesTarta);
    document.getElementById("leyendaGT").innerHTML = miGraficoTarta.generateLegend();

    legend(document.getElementById("leyendaGT"), datosTarta);
  
    var ctx2 = document.getElementById("misBarrasAsia").getContext("2d");
    var miGraficoBarrasAsia = new Chart(ctx2).Bar(datosBarraAsia,opcionesBarra);
    document.getElementById("leyendaGBAsia").innerHTML = miGraficoBarrasAsia.generateLegend();

    legend(document.getElementById("leyendaGBAsia"), datosBarraAsia);

    var ctx3 = document.getElementById("misBarrasEuropa").getContext("2d");
    var miGraficoBarrasEuropa = new Chart(ctx3).Bar(datosBarraEuropa,opcionesBarra);
    document.getElementById("leyendaGBEuropa").innerHTML = miGraficoBarrasEuropa.generateLegend();

    legend(document.getElementById("leyendaGBEuropa"), datosBarraEuropa);

    var ctx4 = document.getElementById("misBarrasAmerica").getContext("2d");
    var miGraficoBarrasAmerica = new Chart(ctx4).Bar(datosBarraAmerica,opcionesBarra);
    document.getElementById("leyendaGBAmerica").innerHTML = miGraficoBarrasAmerica.generateLegend();

    legend(document.getElementById("leyendaGBAmerica"), datosBarraAmerica);

    var ctx5 = document.getElementById("misBarrasAfrica").getContext("2d");
    var miGraficoBarrasAfrica = new Chart(ctx5).Bar(datosBarraAfrica,opcionesBarra);
    document.getElementById("leyendaGBAfrica").innerHTML = miGraficoBarrasAfrica.generateLegend();

    legend(document.getElementById("leyendaGBAfrica"), datosBarraAfrica);

    var ctx6 = document.getElementById("misBarrasOceania").getContext("2d");
    var miGraficoBarrasOceania = new Chart(ctx6).Bar(datosBarraOceania,opcionesBarra);
    document.getElementById("leyendaGBOceania").innerHTML = miGraficoBarrasOceania.generateLegend();

    legend(document.getElementById("leyendaGBOceania"), datosBarraOceania);
  
    
}

