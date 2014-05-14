/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['allan, sans-serif']='<script src=\"http://use.edgefonts.net/allan:n7:all.js\"></script>';
    fonts['bad-script, cursive']='<script src=\"http://use.edgefonts.net/bad-script:n4:all.js\"></script>';
    fonts['parisienne, cursive']='<script src=\"http://use.edgefonts.net/parisienne:n4:all.js\"></script>';
    fonts['actor, sans-serif']='<script src=\"http://use.edgefonts.net/actor:n4:all.js\"></script>';
    fonts['galdeano, sans-serif']='<script src=\"http://use.edgefonts.net/galdeano:n4:all.js\"></script>';
    fonts['didact-gothic, sans-serif']='<script src=\"http://use.edgefonts.net/didact-gothic:n4:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text',
                type: 'text',
                rect: ['428px', '25px','auto','auto','auto', 'auto'],
                text: "Tratado de ",
                font: ['parisienne, cursive', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['382px', '53px','auto','auto','auto', 'auto'],
                text: "BREST-LITOVSK",
                align: "left",
                font: ['actor, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['458px', '78px','45px','22px','auto', 'auto'],
                text: "1918",
                align: "left",
                font: ['galdeano, sans-serif', 17, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['305px', '410px','362px','113px','auto', 'auto'],
                text: "Era el año 1928 y Alemania siendo la cabeza central de los imperios, presionaba con adquirir nuevos territorios",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy',
                type: 'text',
                rect: ['305px', '591px','362px','179px','auto', 'auto'],
                text: "Alemania sabia que el gobierno Ruso y su ejército estaban en crisis, por lo cual se aprovechaba para beneficiarse de estas debilidades. ",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy2',
                type: 'text',
                rect: ['305px', '807px','392px','113px','auto', 'auto'],
                text: "Rusia entendía la problemática por la que estaba pasando, por lo que su objetivo era de alguna manera poder salir de la guerra.",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy3',
                type: 'text',
                rect: ['305px', '996px','392px','222px','auto', 'auto'],
                text: "Alemania aprovechando la decisión de Rusia ofreció un tratado, de nombre “Brest-Litovsk” mediante el cual Rusia podía salir de la guerra y estar en paz, pero todo esto no era gratis, Alemania pedía algunos territorios Rusos como tributo por el tratado.",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy4',
                type: 'text',
                rect: ['305px', '1298px','392px','128px','auto', 'auto'],
                text: "Es ahí donde se genera una gran problemática interna Rusa, al generarse 3 corrientes con diferentes puntos de vista.",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy5',
                type: 'text',
                rect: ['305px', '1489px','392px','128px','auto', 'auto'],
                text: "La primera a cargo de Lenin, decía aceptar las condiciones de Alemania por terribles que fueran para la salvación de Rusia.",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy6',
                type: 'text',
                rect: ['305px', '1674px','392px','141px','auto', 'auto'],
                text: "La segunda a cargo de Bujarin que decía no firmar nada y basarse en el crecimiento del ejército rojo, para un futuro enfrentamiento con los Alemanes.",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy7',
                type: 'text',
                rect: ['305px', '1885px','392px','113px','auto', 'auto'],
                text: "Y la tercera a cargo de Trotski que por su parte decía, ni paz ni guerra con la finalidad de la recuperación del ejercito rojo.<br><br>",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy8',
                type: 'text',
                rect: ['305px', '2083px','392px','113px','auto', 'auto'],
                text: "Alemania logra descubrir los planes rusos el 11 de febrero, por lo cual deciden aplicar un ultimátum de 7 días.",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy9',
                type: 'text',
                rect: ['305px', '2266px','392px','113px','auto', 'auto'],
                text: "En Rusia no logran llegar a ningún acuerdo por sus diferentes puntos de vista.",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy10',
                type: 'text',
                rect: ['305px', '2432px','392px','141px','auto', 'auto'],
                text: "Al llegar el 18 de febrero y sin tener respuesta por parte de Rusia. Alemania de manera catastrófica que logra conquistar varios territorios rusos.",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy11',
                type: 'text',
                rect: ['305px', '2651px','392px','141px','auto', 'auto'],
                text: "Rusia al ver la catástrofe que llegaba sobre ellos deciden de manera desesperada aceptar el tratado Brest-Litovsk.",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy12',
                type: 'text',
                rect: ['305px', '2839px','392px','141px','auto', 'auto'],
                text: "Los Alemanes por la tardanza de Rusia y su indecisión deciden aumentar mas territorios al tributo del tratado.<br>",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy13',
                type: 'text',
                rect: ['305px', '3041px','392px','198px','auto', 'auto'],
                text: "Este tratado de Brest-Litovsk permite a Rusia salir de la 1ra Guerra mundial, pero a costa de territorios como: Finlandia, Polonia, Ucrania, Bielorrusia, parte del Caucas, algunos países Bálticos y de Besarabia.",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy14',
                type: 'text',
                rect: ['305px', '3315px','392px','222px','auto', 'auto'],
                text: "En noviembre de 1918 estalla la revolución Alemana, lo que provoca la caída de su imperio y el derrumbe de los imperios centrales, permitiendo a Rusia la recuperación de los países Bálticos, llevándolos al termino del tratado de Brest-Litovsk.",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text4Copy15',
                type: 'text',
                rect: ['305px', '3636px','392px','250px','auto', 'auto'],
                text: "El tratado solo duro 9 meses de Marzo a Noviembre, siendo una prueba para Rusia, donde se juegan las posiciones de salvar la Revolución a costa de lo que fuera para una recuperación a futuro o encerrarse en oposiciones rigurosas que los condenarían a la derrota total de Rusia.",
                align: "left",
                font: ['didact-gothic, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'App2_03',
                type: 'image',
                rect: ['324px', '3995px','332px','179px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"App2_03.png",'0px','0px']
            },
            {
                id: 'lazo2',
                type: 'image',
                rect: ['344px', '3886px','49px','162px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy',
                type: 'image',
                rect: ['344px', '3537px','49px','99px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy2',
                type: 'image',
                rect: ['344px', '3239px','49px','76px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy3',
                type: 'image',
                rect: ['344px', '2953px','49px','76px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy4',
                type: 'image',
                rect: ['344px', '2764px','49px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy5',
                type: 'image',
                rect: ['344px', '2578px','49px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy6',
                type: 'image',
                rect: ['344px', '2356px','49px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy7',
                type: 'image',
                rect: ['344px', '2195px','49px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy8',
                type: 'image',
                rect: ['344px', '2007px','49px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy9',
                type: 'image',
                rect: ['344px', '1815px','49px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy10',
                type: 'image',
                rect: ['344px', '1603px','49px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy11',
                type: 'image',
                rect: ['344px', '1415px','49px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy12',
                type: 'image',
                rect: ['344px', '1223px','49px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy13',
                type: 'image',
                rect: ['344px', '925px','49px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy14',
                type: 'image',
                rect: ['344px', '737px','49px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy15',
                type: 'image',
                rect: ['344px', '523px','49px','66px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            },
            {
                id: 'lazo2Copy16',
                type: 'image',
                rect: ['344px', '256px','49px','141px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lazo2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text4Copy28}": [
                ["style", "top", '932px'],
                ["style", "opacity", '0.028776999562978745'],
                ["style", "height", '222px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '305px'],
                ["style", "width", '392px']
            ],
            "${_lazo2Copy10}": [
                ["style", "top", '1539px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "width", '49px']
            ],
            "${_lazo2Copy12}": [
                ["style", "top", '1159px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "width", '49px']
            ],
            "${_lazo2Copy5}": [
                ["style", "top", '2514px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "width", '49px']
            ],
            "${_Text2}": [
                ["style", "top", '133px'],
                ["style", "width", '296px'],
                ["style", "height", '39px'],
                ["style", "font-family", 'actor, sans-serif'],
                ["style", "left", '344px'],
                ["style", "font-size", '35px']
            ],
            "${_Text4Copy13}": [
                ["style", "top", '2977px'],
                ["style", "opacity", '0'],
                ["style", "height", '198px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_lazo2Copy14}": [
                ["style", "top", '673px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '344px'],
                ["style", "width", '49px']
            ],
            "${_lazo2Copy16}": [
                ["style", "top", '192px'],
                ["style", "height", '141px'],
                ["style", "opacity", '0'],
                ["style", "left", '344px'],
                ["style", "width", '49px']
            ],
            "${_Text4Copy12}": [
                ["style", "top", '2775px'],
                ["style", "opacity", '0'],
                ["style", "height", '141px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy8}": [
                ["style", "top", '2019px'],
                ["style", "opacity", '0'],
                ["style", "height", '113px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy23}": [
                ["style", "top", '2019px'],
                ["style", "opacity", '0'],
                ["style", "height", '113px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy9}": [
                ["style", "top", '2202px'],
                ["style", "opacity", '0'],
                ["style", "height", '113px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy27}": [
                ["style", "top", '1234px'],
                ["style", "opacity", '0'],
                ["style", "height", '128px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_App2_03}": [
                ["style", "top", '3924px'],
                ["style", "height", '179px'],
                ["style", "opacity", '0'],
                ["style", "left", '310px'],
                ["style", "width", '332px']
            ],
            "${_lazo2Copy7}": [
                ["style", "top", '2131px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "width", '49px']
            ],
            "${_Text4Copy30}": [
                ["style", "top", '527px'],
                ["style", "opacity", '0'],
                ["style", "height", '179px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '305px'],
                ["style", "width", '362px']
            ],
            "${_Text4Copy16}": [
                ["style", "top", '3572px'],
                ["style", "opacity", '0'],
                ["style", "height", '250px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_lazo2}": [
                ["style", "top", '3822px'],
                ["style", "height", '162px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '323px'],
                ["style", "width", '49px']
            ],
            "${_Text4Copy2}": [
                ["style", "top", '743px'],
                ["style", "opacity", '0'],
                ["style", "height", '113px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '305px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy26}": [
                ["style", "top", '1425px'],
                ["style", "opacity", '0'],
                ["style", "height", '128px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy21}": [
                ["style", "top", '2368px'],
                ["style", "opacity", '0'],
                ["style", "height", '141px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy14}": [
                ["style", "top", '3251px'],
                ["style", "opacity", '0'],
                ["style", "height", '222px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy6}": [
                ["style", "top", '1610px'],
                ["style", "opacity", '0'],
                ["style", "height", '141px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_lazo2Copy9}": [
                ["style", "top", '1751px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "width", '49px']
            ],
            "${_Text4Copy29}": [
                ["style", "top", '743px'],
                ["style", "opacity", '0'],
                ["style", "height", '113px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '305px'],
                ["style", "width", '392px']
            ],
            "${_Text3}": [
                ["style", "top", '165px'],
                ["style", "font-size", '28px'],
                ["style", "height", '29px'],
                ["style", "font-family", 'galdeano, sans-serif'],
                ["style", "left", '405px'],
                ["style", "width", '81px']
            ],
            "${_Text4Copy25}": [
                ["style", "top", '1610px'],
                ["style", "opacity", '0'],
                ["style", "height", '141px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy24}": [
                ["style", "top", '1821px'],
                ["style", "opacity", '0'],
                ["style", "height", '113px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_lazo2Copy4}": [
                ["style", "top", '2700px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "width", '49px']
            ],
            "${_lazo2Copy13}": [
                ["style", "top", '872px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '344px'],
                ["style", "width", '49px']
            ],
            "${_Text4Copy5}": [
                ["style", "top", '1425px'],
                ["style", "opacity", '0'],
                ["style", "height", '128px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy18}": [
                ["style", "top", '2977px'],
                ["style", "opacity", '0'],
                ["style", "height", '198px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy20}": [
                ["style", "top", '2587px'],
                ["style", "opacity", '0'],
                ["style", "height", '141px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_lazo2Copy6}": [
                ["style", "top", '2292px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "width", '49px']
            ],
            "${_Text4Copy17}": [
                ["style", "top", '3251px'],
                ["style", "opacity", '0'],
                ["style", "height", '222px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(204,186,144,1.00)'],
                ["style", "width", '960px'],
                ["style", "height", '5453px'],
                ["style", "overflow", 'hidden']
            ],
            "${_lazo2Copy11}": [
                ["style", "top", '1351px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "width", '49px']
            ],
            "${_Text4Copy10}": [
                ["style", "top", '2368px'],
                ["style", "opacity", '0'],
                ["style", "height", '141px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_lazo2Copy15}": [
                ["style", "top", '459px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '344px'],
                ["style", "width", '49px']
            ],
            "${_Text4Copy15}": [
                ["style", "top", '3572px'],
                ["style", "opacity", '0'],
                ["style", "height", '250px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_lazo2Copy}": [
                ["style", "top", '3473px'],
                ["style", "height", '99px'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "width", '49px']
            ],
            "${_Text4Copy4}": [
                ["style", "top", '1234px'],
                ["style", "opacity", '0'],
                ["style", "height", '128px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4}": [
                ["style", "top", '336px'],
                ["style", "opacity", '0'],
                ["style", "height", '113px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '305px'],
                ["style", "width", '362px']
            ],
            "${_Text4Copy19}": [
                ["style", "top", '2775px'],
                ["style", "opacity", '0'],
                ["style", "height", '141px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy11}": [
                ["style", "top", '2587px'],
                ["style", "opacity", '0'],
                ["style", "height", '141px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_lazo2Copy8}": [
                ["style", "top", '1943px'],
                ["style", "height", '66px'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "width", '49px']
            ],
            "${_Text4Copy3}": [
                ["style", "top", '932px'],
                ["style", "opacity", '0.028776999562978745'],
                ["style", "height", '222px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '305px'],
                ["style", "width", '392px']
            ],
            "${_Text}": [
                ["style", "top", '96px'],
                ["style", "width", '178px'],
                ["style", "height", '28px'],
                ["style", "font-family", 'parisienne, cursive'],
                ["style", "left", '385px'],
                ["style", "font-size", '34px']
            ],
            "${_Text4Copy}": [
                ["style", "top", '527px'],
                ["style", "opacity", '0'],
                ["style", "height", '179px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '305px'],
                ["style", "width", '362px']
            ],
            "${_lazo2Copy2}": [
                ["style", "top", '3175px'],
                ["style", "height", '76px'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "width", '49px']
            ],
            "${_lazo2Copy3}": [
                ["style", "top", '2889px'],
                ["style", "height", '76px'],
                ["style", "opacity", '0'],
                ["style", "left", '334px'],
                ["style", "width", '49px']
            ],
            "${_Text4Copy7}": [
                ["style", "top", '1821px'],
                ["style", "opacity", '0'],
                ["style", "height", '113px'],
                ["style", "font-family", 'didact-gothic, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ],
            "${_Text4Copy22}": [
                ["style", "top", '2202px'],
                ["style", "opacity", '0'],
                ["style", "height", '113px'],
                ["style", "font-family", 'allan, sans-serif'],
                ["style", "left", '295px'],
                ["style", "width", '392px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7887,
            autoPlay: false,
            timeline: [
                { id: "eid109", tween: [ "style", "${_lazo2Copy11}", "opacity", '1', { fromValue: '0'}], position: 1465, duration: 112 },
                { id: "eid677", tween: [ "style", "${_Text4Copy8}", "left", '305px', { fromValue: '295px'}], position: 1754, duration: 1192 },
                { id: "eid346", tween: [ "style", "${_Text4Copy8}", "left", '294px', { fromValue: '305px'}], position: 2946, duration: 2610 },
                { id: "eid82", tween: [ "style", "${_lazo2Copy15}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 105 },
                { id: "eid631", tween: [ "style", "${_Text4Copy5}", "left", '305px', { fromValue: '295px'}], position: 1242, duration: 379 },
                { id: "eid386", tween: [ "style", "${_Text4Copy5}", "left", '294px', { fromValue: '305px'}], position: 1621, duration: 3423 },
                { id: "eid632", tween: [ "style", "${_lazo2}", "top", '4239px', { fromValue: '3822px'}], position: 2750, duration: 3802 },
                { id: "eid652", tween: [ "style", "${_Text4Copy2}", "top", '732px', { fromValue: '743px'}], position: 1068, duration: 3802 },
                { id: "eid665", tween: [ "style", "${_lazo2Copy7}", "left", '344px', { fromValue: '334px'}], position: 1942, duration: 1372 },
                { id: "eid378", tween: [ "style", "${_lazo2Copy7}", "left", '333px', { fromValue: '344px'}], position: 3314, duration: 2430 },
                { id: "eid102", tween: [ "style", "${_lazo2Copy12}", "opacity", '1', { fromValue: '0'}], position: 1087, duration: 120 },
                { id: "eid396", tween: [ "style", "${_lazo2Copy12}", "left", '333px', { fromValue: '334px'}], position: 1087, duration: 3802 },
                { id: "eid58", tween: [ "style", "${_Text2}", "height", '39px', { fromValue: '39px'}], position: 634, duration: 0 },
                { id: "eid137", tween: [ "style", "${_Text4Copy9}", "opacity", '1', { fromValue: '0'}], position: 3407, duration: 186 },
                { id: "eid52", tween: [ "style", "${_Text2}", "font-size", '35px', { fromValue: '35px'}], position: 634, duration: 0 },
                { id: "eid663", tween: [ "style", "${_lazo2Copy6}", "left", '344px', { fromValue: '334px'}], position: 2000, duration: 1693 },
                { id: "eid382", tween: [ "style", "${_lazo2Copy6}", "left", '333px', { fromValue: '344px'}], position: 3693, duration: 2109 },
                { id: "eid648", tween: [ "style", "${_Text4Copy9}", "top", '2291px', { fromValue: '2202px'}], position: 1900, duration: 3802 },
                { id: "eid620", tween: [ "style", "${_Text4Copy13}", "left", '305px', { fromValue: '295px'}], position: 2327, duration: 2651 },
                { id: "eid400", tween: [ "style", "${_Text4Copy13}", "left", '294px', { fromValue: '305px'}], position: 4978, duration: 1151 },
                { id: "eid164", tween: [ "style", "${_Text4Copy13}", "opacity", '1', { fromValue: '0'}], position: 4978, duration: 151 },
                { id: "eid645", tween: [ "style", "${_lazo2Copy4}", "left", '344px', { fromValue: '334px'}], position: 2250, duration: 2242 },
                { id: "eid358", tween: [ "style", "${_lazo2Copy4}", "left", '333px', { fromValue: '344px'}], position: 4492, duration: 1560 },
                { id: "eid23", tween: [ "style", "${_Text2}", "left", '331px', { fromValue: '344px'}], position: 0, duration: 2948 },
                { id: "eid680", tween: [ "style", "${_Text2}", "left", '307px', { fromValue: '331px'}], position: 2948, duration: 3802 },
                { id: "eid613", tween: [ "style", "${_lazo2Copy}", "top", '3815px', { fromValue: '3473px'}], position: 2615, duration: 3802 },
                { id: "eid753", tween: [ "style", "${_lazo2Copy}", "top", '3777px', { fromValue: '3815px'}], position: 6417, duration: 225 },
                { id: "eid182", tween: [ "style", "${_App2_03}", "opacity", '1', { fromValue: '0'}], position: 6275, duration: 95 },
                { id: "eid112", tween: [ "style", "${_Text4Copy5}", "opacity", '1', { fromValue: '0'}], position: 1621, duration: 133 },
                { id: "eid628", tween: [ "style", "${_lazo2Copy14}", "top", '665px', { fromValue: '673px'}], position: 1122, duration: 3802 },
                { id: "eid674", tween: [ "style", "${_lazo2Copy11}", "top", '1360px', { fromValue: '1351px'}], position: 1198, duration: 802 },
                { id: "eid746", tween: [ "style", "${_lazo2Copy11}", "top", '1350px', { fromValue: '1360px'}], position: 2000, duration: 3000 },
                { id: "eid179", tween: [ "style", "${_lazo2}", "opacity", '1', { fromValue: '0.000000'}], position: 6097, duration: 110 },
                { id: "eid49", tween: [ "style", "${_Text}", "width", '178px', { fromValue: '178px'}], position: 634, duration: 0 },
                { id: "eid655", tween: [ "style", "${_App2_03}", "left", '320px', { fromValue: '310px'}], position: 2673, duration: 3457 },
                { id: "eid187", tween: [ "style", "${_App2_03}", "left", '312px', { fromValue: '320px'}], position: 6275, duration: 56 },
                { id: "eid760", tween: [ "style", "${_App2_03}", "left", '312px', { fromValue: '312px'}], position: 6370, duration: 0 },
                { id: "eid758", tween: [ "style", "${_App2_03}", "left", '312px', { fromValue: '312px'}], position: 7887, duration: 0 },
                { id: "eid390", tween: [ "style", "${_lazo2Copy15}", "left", '332px', { fromValue: '344px'}], position: 500, duration: 698 },
                { id: "eid625", tween: [ "style", "${_lazo2Copy15}", "left", '333px', { fromValue: '332px'}], position: 1198, duration: 3802 },
                { id: "eid619", tween: [ "style", "${_Text4Copy13}", "top", '3242px', { fromValue: '2977px'}], position: 2327, duration: 3802 },
                { id: "eid160", tween: [ "style", "${_lazo2Copy3}", "opacity", '1', { fromValue: '0'}], position: 4893, duration: 145 },
                { id: "eid170", tween: [ "style", "${_Text4Copy14}", "opacity", '1', { fromValue: '0'}], position: 5349, duration: 151 },
                { id: "eid671", tween: [ "style", "${_lazo2Copy10}", "left", '344px', { fromValue: '334px'}], position: 1388, duration: 512 },
                { id: "eid360", tween: [ "style", "${_lazo2Copy10}", "left", '342px', { fromValue: '344px'}], position: 1900, duration: 197 },
                { id: "eid747", tween: [ "style", "${_lazo2Copy10}", "left", '333px', { fromValue: '342px'}], position: 2097, duration: 3093 },
                { id: "eid679", tween: [ "style", "${_lazo2Copy9}", "left", '344px', { fromValue: '334px'}], position: 1577, duration: 750 },
                { id: "eid336", tween: [ "style", "${_lazo2Copy9}", "left", '333px', { fromValue: '344px'}], position: 2327, duration: 3052 },
                { id: "eid618", tween: [ "style", "${_Text4Copy7}", "left", '305px', { fromValue: '295px'}], position: 1621, duration: 870 },
                { id: "eid372", tween: [ "style", "${_Text4Copy7}", "left", '294px', { fromValue: '305px'}], position: 2491, duration: 2932 },
                { id: "eid640", tween: [ "style", "${_Text4Copy10}", "top", '2503px', { fromValue: '2368px'}], position: 2000, duration: 3802 },
                { id: "eid48", tween: [ "style", "${_Text}", "font-size", '34px', { fromValue: '34px'}], position: 634, duration: 0 },
                { id: "eid340", tween: [ "style", "${_Text4}", "left", '294px', { fromValue: '305px'}], position: 279, duration: 808 },
                { id: "eid657", tween: [ "style", "${_Text4}", "left", '294px', { fromValue: '294px'}], position: 1087, duration: 3802 },
                { id: "eid95", tween: [ "style", "${_lazo2Copy13}", "opacity", '1', { fromValue: '0'}], position: 830, duration: 106 },
                { id: "eid634", tween: [ "style", "${_Text4Copy11}", "top", '2766px', { fromValue: '2587px'}], position: 2097, duration: 3802 },
                { id: "eid439", tween: [ "style", "${_Text}", "left", '389px', { fromValue: '385px'}], position: 0, duration: 6750 },
                { id: "eid670", tween: [ "style", "${_lazo2Copy10}", "top", '1552px', { fromValue: '1539px'}], position: 1388, duration: 709 },
                { id: "eid748", tween: [ "style", "${_lazo2Copy10}", "top", '1557px', { fromValue: '1552px'}], position: 2097, duration: 3093 },
                { id: "eid654", tween: [ "style", "${_App2_03}", "top", '4354px', { fromValue: '3924px'}], position: 2818, duration: 3802 },
                { id: "eid350", tween: [ "style", "${_lazo2Copy13}", "left", '333px', { fromValue: '344px'}], position: 830, duration: 238 },
                { id: "eid639", tween: [ "style", "${_lazo2Copy13}", "left", '333px', { fromValue: '333px'}], position: 1068, duration: 3802 },
                { id: "eid134", tween: [ "style", "${_lazo2Copy7}", "opacity", '1', { fromValue: '0'}], position: 3314, duration: 135 },
                { id: "eid149", tween: [ "style", "${_Text4Copy11}", "opacity", '1', { fromValue: '0'}], position: 4189, duration: 150 },
                { id: "eid25", tween: [ "style", "${_Text}", "top", '77px', { fromValue: '96px'}], position: 0, duration: 6750 },
                { id: "eid660", tween: [ "style", "${_lazo2Copy16}", "top", '184px', { fromValue: '192px'}], position: 1087, duration: 3802 },
                { id: "eid669", tween: [ "style", "${_Text4Copy14}", "left", '305px', { fromValue: '295px'}], position: 2448, duration: 2901 },
                { id: "eid366", tween: [ "style", "${_Text4Copy14}", "left", '294px', { fromValue: '305px'}], position: 5349, duration: 901 },
                { id: "eid627", tween: [ "style", "${_Text4Copy12}", "left", '305px', { fromValue: '295px'}], position: 2215, duration: 2356 },
                { id: "eid342", tween: [ "style", "${_Text4Copy12}", "left", '294px', { fromValue: '305px'}], position: 4571, duration: 1446 },
                { id: "eid176", tween: [ "style", "${_Text4Copy15}", "opacity", '1', { fromValue: '0'}], position: 5712, duration: 190 },
                { id: "eid656", tween: [ "style", "${_Text4}", "top", '328px', { fromValue: '336px'}], position: 1087, duration: 3802 },
                { id: "eid131", tween: [ "style", "${_Text4Copy8}", "opacity", '1', { fromValue: '0'}], position: 2946, duration: 180 },
                { id: "eid622", tween: [ "style", "${_Text4Copy6}", "top", '1615px', { fromValue: '1610px'}], position: 1465, duration: 750 },
                { id: "eid749", tween: [ "style", "${_Text4Copy6}", "top", '1622px', { fromValue: '1615px'}], position: 2215, duration: 3052 },
                { id: "eid644", tween: [ "style", "${_lazo2Copy4}", "top", '2918px', { fromValue: '2700px'}], position: 2250, duration: 3802 },
                { id: "eid152", tween: [ "style", "${_lazo2Copy4}", "opacity", '1', { fromValue: '0'}], position: 4492, duration: 114 },
                { id: "eid380", tween: [ "style", "${_Text4Copy}", "left", '294px', { fromValue: '305px'}], position: 605, duration: 593 },
                { id: "eid659", tween: [ "style", "${_Text4Copy}", "left", '294px', { fromValue: '294px'}], position: 1198, duration: 3802 },
                { id: "eid662", tween: [ "style", "${_lazo2Copy6}", "top", '2413px', { fromValue: '2292px'}], position: 2000, duration: 3802 },
                { id: "eid666", tween: [ "style", "${_lazo2Copy8}", "top", '2005px', { fromValue: '1943px'}], position: 1824, duration: 3802 },
                { id: "eid140", tween: [ "style", "${_lazo2Copy6}", "opacity", '1', { fromValue: '0'}], position: 3693, duration: 109 },
                { id: "eid646", tween: [ "style", "${_lazo2Copy5}", "top", '2677px', { fromValue: '2514px'}], position: 2135, duration: 3802 },
                { id: "eid115", tween: [ "style", "${_lazo2Copy10}", "opacity", '1', { fromValue: '0'}], position: 1900, duration: 120 },
                { id: "eid155", tween: [ "style", "${_Text4Copy12}", "opacity", '1', { fromValue: '0'}], position: 4571, duration: 150 },
                { id: "eid664", tween: [ "style", "${_lazo2Copy7}", "top", '2208px', { fromValue: '2131px'}], position: 1942, duration: 3802 },
                { id: "eid668", tween: [ "style", "${_Text4Copy14}", "top", '3563px', { fromValue: '3251px'}], position: 2448, duration: 3802 },
                { id: "eid745", tween: [ "style", "${_lazo2Copy13}", "top", '868px', { fromValue: '872px'}], position: 936, duration: 132 },
                { id: "eid638", tween: [ "style", "${_lazo2Copy13}", "top", '859px', { fromValue: '868px'}], position: 1068, duration: 3802 },
                { id: "eid673", tween: [ "style", "${_lazo2Copy3}", "left", '344px', { fromValue: '334px'}], position: 2387, duration: 2506 },
                { id: "eid334", tween: [ "style", "${_lazo2Copy3}", "left", '333px', { fromValue: '344px'}], position: 4893, duration: 1296 },
                { id: "eid651", tween: [ "style", "${_Text4Copy15}", "left", '305px', { fromValue: '295px'}], position: 2555, duration: 3157 },
                { id: "eid330", tween: [ "style", "${_Text4Copy15}", "left", '294px', { fromValue: '305px'}], position: 5712, duration: 645 },
                { id: "eid615", tween: [ "style", "${_lazo2Copy2}", "top", '3459px', { fromValue: '3175px'}], position: 2500, duration: 3802 },
                { id: "eid624", tween: [ "style", "${_lazo2Copy15}", "top", '451px', { fromValue: '459px'}], position: 1198, duration: 3802 },
                { id: "eid173", tween: [ "style", "${_lazo2Copy}", "opacity", '1', { fromValue: '0'}], position: 5667, duration: 105 },
                { id: "eid55", tween: [ "style", "${_Text3}", "font-size", '28px', { fromValue: '28px'}], position: 634, duration: 0 },
                { id: "eid630", tween: [ "style", "${_Text4Copy5}", "top", '1421px', { fromValue: '1425px'}], position: 1242, duration: 3802 },
                { id: "eid352", tween: [ "style", "${_lazo2Copy16}", "left", '332px', { fromValue: '344px'}], position: 139, duration: 948 },
                { id: "eid661", tween: [ "style", "${_lazo2Copy16}", "left", '333px', { fromValue: '332px'}], position: 1087, duration: 3802 },
                { id: "eid128", tween: [ "style", "${_lazo2Copy8}", "opacity", '1', { fromValue: '0'}], position: 2876, duration: 140 },
                { id: "eid626", tween: [ "style", "${_Text4Copy12}", "top", '3015px', { fromValue: '2775px'}], position: 2215, duration: 3802 },
                { id: "eid635", tween: [ "style", "${_Text4Copy11}", "left", '305px', { fromValue: '295px'}], position: 2097, duration: 2092 },
                { id: "eid398", tween: [ "style", "${_Text4Copy11}", "left", '294px', { fromValue: '305px'}], position: 4189, duration: 1710 },
                { id: "eid57", tween: [ "style", "${_Text3}", "width", '81px', { fromValue: '81px'}], position: 634, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Text3}", "height", '29px', { fromValue: '29px'}], position: 634, duration: 0 },
                { id: "eid658", tween: [ "style", "${_Text4Copy}", "top", '522px', { fromValue: '527px'}], position: 1198, duration: 3802 },
                { id: "eid649", tween: [ "style", "${_Text4Copy9}", "left", '301px', { fromValue: '295px'}], position: 1900, duration: 1200 },
                { id: "eid761", tween: [ "style", "${_Text4Copy9}", "left", '305px', { fromValue: '301px'}], position: 3100, duration: 307 },
                { id: "eid348", tween: [ "style", "${_Text4Copy9}", "left", '294px', { fromValue: '305px'}], position: 3407, duration: 2295 },
                { id: "eid650", tween: [ "style", "${_Text4Copy15}", "top", '3953px', { fromValue: '3572px'}], position: 2555, duration: 3802 },
                { id: "eid384", tween: [ "style", "${_Text4Copy2}", "left", '294px', { fromValue: '305px'}], position: 710, duration: 358 },
                { id: "eid653", tween: [ "style", "${_Text4Copy2}", "left", '294px', { fromValue: '294px'}], position: 1068, duration: 3802 },
                { id: "eid667", tween: [ "style", "${_lazo2Copy8}", "left", '344px', { fromValue: '334px'}], position: 1824, duration: 1052 },
                { id: "eid362", tween: [ "style", "${_lazo2Copy8}", "left", '333px', { fromValue: '344px'}], position: 2876, duration: 2750 },
                { id: "eid122", tween: [ "style", "${_lazo2Copy9}", "opacity", '1', { fromValue: '0'}], position: 2327, duration: 120 },
                { id: "eid92", tween: [ "style", "${_Text4Copy2}", "opacity", '1', { fromValue: '0'}], position: 710, duration: 120 },
                { id: "eid642", tween: [ "style", "${_Text4Copy3}", "top", '924px', { fromValue: '932px'}], position: 1068, duration: 3802 },
                { id: "eid621", tween: [ "style", "${_lazo2Copy12}", "top", '1151px', { fromValue: '1159px'}], position: 1087, duration: 3802 },
                { id: "eid676", tween: [ "style", "${_Text4Copy8}", "top", '2088px', { fromValue: '2019px'}], position: 1754, duration: 3802 },
                { id: "eid637", tween: [ "style", "${_Text4Copy4}", "left", '305px', { fromValue: '295px'}], position: 1122, duration: 120 },
                { id: "eid388", tween: [ "style", "${_Text4Copy4}", "left", '294px', { fromValue: '305px'}], position: 1242, duration: 3682 },
                { id: "eid641", tween: [ "style", "${_Text4Copy10}", "left", '305px', { fromValue: '295px'}], position: 2000, duration: 1802 },
                { id: "eid356", tween: [ "style", "${_Text4Copy10}", "left", '294px', { fromValue: '305px'}], position: 3802, duration: 2000 },
                { id: "eid437", tween: [ "style", "${_Text3}", "top", '148px', { fromValue: '165px'}], position: 0, duration: 2948 },
                { id: "eid683", tween: [ "style", "${_Text3}", "top", '150px', { fromValue: '148px'}], position: 2948, duration: 3802 },
                { id: "eid647", tween: [ "style", "${_lazo2Copy5}", "left", '344px', { fromValue: '334px'}], position: 2135, duration: 1947 },
                { id: "eid332", tween: [ "style", "${_lazo2Copy5}", "left", '333px', { fromValue: '344px'}], position: 4082, duration: 1855 },
                { id: "eid143", tween: [ "style", "${_Text4Copy10}", "opacity", '1', { fromValue: '0'}], position: 3802, duration: 145 },
                { id: "eid672", tween: [ "style", "${_lazo2Copy3}", "top", '3139px', { fromValue: '2889px'}], position: 2387, duration: 3802 },
                { id: "eid118", tween: [ "style", "${_Text4Copy6}", "opacity", '1', { fromValue: '0'}], position: 2097, duration: 118 },
                { id: "eid438", tween: [ "style", "${_Text2}", "top", '116px', { fromValue: '133px'}], position: 0, duration: 2948 },
                { id: "eid681", tween: [ "style", "${_Text2}", "top", '110px', { fromValue: '116px'}], position: 2948, duration: 3802 },
                { id: "eid633", tween: [ "style", "${_lazo2}", "left", '333px', { fromValue: '323px'}], position: 2750, duration: 3802 },
                { id: "eid617", tween: [ "style", "${_Text4Copy7}", "top", '1864px', { fromValue: '1821px'}], position: 1621, duration: 3802 },
                { id: "eid675", tween: [ "style", "${_lazo2Copy11}", "left", '344px', { fromValue: '334px'}], position: 1198, duration: 267 },
                { id: "eid338", tween: [ "style", "${_lazo2Copy11}", "left", '333px', { fromValue: '344px'}], position: 1465, duration: 3535 },
                { id: "eid167", tween: [ "style", "${_lazo2Copy2}", "opacity", '1', { fromValue: '0'}], position: 5302, duration: 99 },
                { id: "eid623", tween: [ "style", "${_Text4Copy6}", "left", '305px', { fromValue: '295px'}], position: 1465, duration: 632 },
                { id: "eid392", tween: [ "style", "${_Text4Copy6}", "left", '294px', { fromValue: '305px'}], position: 2097, duration: 3170 },
                { id: "eid59", tween: [ "style", "${_Text2}", "width", '296px', { fromValue: '296px'}], position: 634, duration: 0 },
                { id: "eid402", tween: [ "style", "${_Text4Copy3}", "left", '295px', { fromValue: '305px'}], position: 936, duration: 132 },
                { id: "eid643", tween: [ "style", "${_Text4Copy3}", "left", '294px', { fromValue: '295px'}], position: 1068, duration: 3802 },
                { id: "eid125", tween: [ "style", "${_Text4Copy7}", "opacity", '1', { fromValue: '0'}], position: 2491, duration: 182 },
                { id: "eid76", tween: [ "style", "${_lazo2Copy16}", "opacity", '1', { fromValue: '0'}], position: 139, duration: 140 },
                { id: "eid79", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 279, duration: 110 },
                { id: "eid86", tween: [ "style", "${_Text4Copy}", "opacity", '1', { fromValue: '0'}], position: 605, duration: 105 },
                { id: "eid21", tween: [ "style", "${_Text3}", "left", '430px', { fromValue: '405px'}], position: 0, duration: 2948 },
                { id: "eid682", tween: [ "style", "${_Text3}", "left", '414px', { fromValue: '430px'}], position: 2948, duration: 3802 },
                { id: "eid106", tween: [ "style", "${_Text4Copy4}", "opacity", '1', { fromValue: '0'}], position: 1242, duration: 147 },
                { id: "eid616", tween: [ "style", "${_lazo2Copy2}", "left", '344px', { fromValue: '334px'}], position: 2500, duration: 2802 },
                { id: "eid368", tween: [ "style", "${_lazo2Copy2}", "left", '333px', { fromValue: '344px'}], position: 5302, duration: 1000 },
                { id: "eid370", tween: [ "style", "${_lazo2Copy14}", "left", '333px', { fromValue: '344px'}], position: 634, duration: 488 },
                { id: "eid629", tween: [ "style", "${_lazo2Copy14}", "left", '333px', { fromValue: '333px'}], position: 1122, duration: 3802 },
                { id: "eid89", tween: [ "style", "${_lazo2Copy14}", "opacity", '1', { fromValue: '0'}], position: 634, duration: 130 },
                { id: "eid98", tween: [ "style", "${_Text4Copy3}", "opacity", '1', { fromValue: '0.028776999562978745'}], position: 936, duration: 132 },
                { id: "eid614", tween: [ "style", "${_lazo2Copy}", "left", '344px', { fromValue: '334px'}], position: 2615, duration: 3052 },
                { id: "eid354", tween: [ "style", "${_lazo2Copy}", "left", '340px', { fromValue: '344px'}], position: 5667, duration: 105 },
                { id: "eid755", tween: [ "style", "${_lazo2Copy}", "left", '333px', { fromValue: '340px'}], position: 6039, duration: 378 },
                { id: "eid754", tween: [ "style", "${_lazo2Copy}", "left", '332px', { fromValue: '333px'}], position: 6417, duration: 225 },
                { id: "eid636", tween: [ "style", "${_Text4Copy4}", "top", '1222px', { fromValue: '1234px'}], position: 1122, duration: 3802 },
                { id: "eid146", tween: [ "style", "${_lazo2Copy5}", "opacity", '1', { fromValue: '0'}], position: 4082, duration: 145 },
                { id: "eid678", tween: [ "style", "${_lazo2Copy9}", "top", '1773px', { fromValue: '1751px'}], position: 1577, duration: 870 },
                { id: "eid750", tween: [ "style", "${_lazo2Copy9}", "top", '1789px', { fromValue: '1773px'}], position: 2447, duration: 2932 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1174114");
