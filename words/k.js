const k = [
   'Kabuff',  // Kabuff:
   'Kajüte',  // Kajüte:  
   'kacheln', // kacheln: 
   'Kaffeekränzchen',  // Kaffeekränzchen: 
   'kahl',  // kahl: 
   // Kahn -- pair with Lastkahn if "Kahn" found
   'Kalauer, kalauern', // *
   'Kanapee', // Kanapee:
   'Kanne',  // Kanne:
   'Kantholz',  // Kantholz: 
   'Karnickel', // Karnickel: 
   'Karree',   // Karree:   
   'karren, Karren',  //  
   'Kaschemme',  // Kaschemme: 
   'kaschieren', // kaschieren: 
   'Kassiber',  // Kassiber: 
   'Kater, verkatert', // duplicated *
   'katzbuckeln',  // katzbuckeln: 
   'kauern',  // kauern: 
   'Kaution', // Kaution: 
   'Kauz, kauzig',  // *
   'kegeln',  // kegeln: 
   'keilen, Keil',
   'Keim, keimen',  
   'kein Kraut gewachsen', 
   'keinen Reim machen können', //  duplicated
   'keinen Zwang antun',  // duplicated *
   'Kelch',  // Kelch: 
   'Kerbholz (auf dem K. haben)',//  duplicated
   'Kerbe',  // Kerbe:  *
   'ketten, Kette, Kettenkarussell', // 
   'Keule', // Keule: 
   'kichern',  // kichern: 
   'Kieker (auf dem K. haben)', 
   'Kies, Kiesel', // *
   'Kimme und Korn',  // *
   'Kinderficker',  // Kinderficker: 
   'Kinkerlitzchen', // Kinkerlitzchen: 
   'Kipplaster',  // Kipplaster: 
   'Kirschen essen', // 
   'Kittel',  // Kittel: 
   'kitzeln', // kitzeln: 
   'klackern', // klackern: 
   'Klacks',  // Klacks: 
   'Kladde',  // Kladde: 
   'klaffen', // klaffen: 
   'klamm',  // klamm: 
   'Klammer, klammern', // * 
   'klammheimlich', // klammheimlich: 
   'Klappe', // Klappe: 
   'klappern',  // klappern: *
   'klapprig',  // klapprig:  
   'Klapsmühle', // Klapsmühle: 
   'Klatsch, klatschen',  
   'klauben', // klauben:  
   'Klaue',  // Klaue: 
   'klebrig', // klebrig: 
   'kleistern, Kleister', 
   'Klemme, klemmen',  // *
   'Klette',  // Klette: *
   'klimpern', // klimpern: 
   'Klinge', //  Klinge: 
   'Klippe', //  Klippe: 
   'klirren', // klirren: *
   'klitzeklein', // klitzeklein: 
   'Kloschüssel, Schüssel', 
   'Kloß',   // Kloß: 
   'klotzen', // klotzen: 
   'Klumpen, Klumpfuß',  
   'Klüngel',  // Klüngel:   
   'knacken',  // knacken: *
   'knallen', // knallen: 
   'Knarre',  // Knarre: *
   'knarren', // knarren: *
   'knarzen', // knarzen: *
   'knattern', // knattern: 
   'Knäuel',  // Knäuel: 
   'Knauf',  // Knauf: 
   'knebeln', //knebeln: 
   'kneifen', // kneifen: 
   'kneten', // kneten: 
   'kniff(e)lig', // kniff(e)lig:
   'Knirps', // Knirps: 
   'knirschen', // knirschen:  *
   'knistern', // knistern: 
   'Knöchel',  // Knöchel: 
 //  'Knochen/Kopf hinhalten', 
   'Knochen/Kopf hinhalten, hinhalten', // duplicated *
   'knorke',  // knorke:
   'knorrig',  // knorrig: 
   'Knuff, knuffen',    
   'knüllen, zerknüllen',  // duplicated  *
   'Knüller',  // Knüller: 
   'Knüppel', // Knüppel: *
   'knurren',  // knurren:   
   'Köder',   // Köder: *
  // 'Kontor',
   'Konterfei',  // Konterfei:   
   'köpfen',  // köpfen: 
   'Korb (einen K. bekommen)', 
   'Korbstuhl',  // Korbstuhl:  
   'Kordel',  // Kordel: 
   'Kot, koten, Kotflügel', 
   'Kotze, kotzen, ankotzen', // duplicated *
   'krabbeln',  // krabbeln: 
   'krachen, Krach', // *
   'Krähe, krähen', // *  
   'Krake', // Krake: 
   'krakelig/kraklig', // krakelig/kraklig: 
   'Kralle',  // Kralle: 
   'Kram (in den K. passen)', //  duplicated
   'kramen',  // kramen: *
   'Kran',  // Kran: 
   'Kratzbürstigkeit',  // Kratzbürstigkeit: 
   'kratzen',  // kratzen:  
   'kraulen',   // kraulen: 
   'kräuseln',  // kräuseln:
   'kraxeln',  // kraxeln:  
   'kreischen', // kreischen: 
   'Kreisel',  // Kreisel:  
   'Kreissäge',  // Kreissäge: 
   'Krempe',  // Krempe: 
   'Krempel',  // Krempel:
   'Kreuz (über K. sein/liegen)', // duplicated *
   'Kreuze (zu K. kriechen)',  // duplicated *
   'kreuzfidel', // kreuzfidel: 
   'Kribbeln',  // Kribbeln:
   'Krimskrams',  // Krimskrams: 
   'Kringel',  //Kringel: 
   'Kritikaster',  // Kritikaster: 
   'kritzeln' ,  // kritzeln: 
   'Kroppzeug', // Kroppzeug: 
   'Kröte (K. schlucken)', 
   'Krümel',  // Krümel: 
   'krümmen', // *
   'kullern', // kullern: *
   'Kumpel', // Kumpel: *
   'kundschaften', // kundschaften:
   'Kuppe',  // Kuppe: *  
   'Kuppel',  // Kuppel: 
   'kurbeln', // kurbeln: 
   'kuscheln (sich)', 
   'kuschen',  // kuschen: 
];

export default k;   