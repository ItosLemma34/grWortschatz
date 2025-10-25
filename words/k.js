const k = [
   'Kabuff',  // Kabuff: 
   'kacheln', // kacheln: 
   'Kaffeekränzchen',  // Kaffeekränzchen: 
   'kahl',  // kahl: 
   // Kahn -- pair with Lastkahn if "Kahn" found
   'Kajüte',  // Kajüte:  
   'Kalauer, kalauern', // 
   'Kanapee', // Kanapee: 
   'Kanne',  // Kanne: 
   'Kantholz',  // Kantholz: 
   'Karnickel', // Karnickel:
   'Karosserie', // Karosserie:
   'Karree',   // Karree:   
   'karren, Karren',  //  
   'Kaschemme',  // Kaschemme: 
   'kaschieren', // kaschieren: 
   'Kassiber',  // Kassiber: 
   'Kater, verkatert', // duplicated 
   'katzbuckeln',  // katzbuckeln: 
   'kauern',  // kauern: 
   'Kaution', // Kaution: 
   'Kauz, kauzig',  // 
   'kegeln',  // kegeln: 
   'keilen, Keil',  // 
   'Keim, keimen',  // 
   'kein Kraut gewachsen', // 
   'keinen Reim machen können', //  duplicated 
   'keinen S. haben, schimmern, Schimmer', // duplicated
   'keinen Zwang antun',  // duplicated 
   'Kelch',  // Kelch: 
   'Kerbholz (auf dem K. haben)',//  duplicated 
   'Kerbe',  // Kerbe:  
   'ketten, Kette, Kettenkarussell', // 
   'Keule', // Keule: 
   'kichern',  // kichern: 
   'Kieker (auf dem K. haben)', // 
   'Kies, Kiesel', // 
   'Kimme und Korn',  // 
   'Kinderficker',  // Kinderficker: 
   'Kinkerlitzchen', // Kinkerlitzchen: 
   'Kipplaster',  // Kipplaster: 
   'Kirschen essen', // 
   'Kittel',  // Kittel: 
   'kitten',  // kitten:
   'kitzeln', // kitzeln: 
   'klackern', // klackern: 
   'Klacks',  // Klacks: 
   'Kladde',  // Kladde: 
   'klaffen', // klaffen: 
   'klamm',  // klamm: 
   'Klammer, klammern', //  
   'klammheimlich', // klammheimlich: 
   'Klappe', // Klappe: 
   'klappern',  // klappern: 
   'klapprig',  // klapprig:  
   'Klapsmühle', // Klapsmühle: 
   'Klatsch, klatschen',   
   'klauben', // klauben:  
   'Klaue',  // Klaue: 
   'klebrig', // klebrig: 
   'kleistern, Kleister',  
   'Klemme, klemmen',   
   'Klette',  // Klette: 
   'klimpern', // klimpern: 
   'Klinge, über die K. springen', //  duplicated 
   'Klippe', //  Klippe: 
   'klirren, Geklirr', // duplicated
   'klitzeklein', // klitzeklein: 
   'Kloschüssel, Schüssel', // duplicate 
   'Kloß',   // Kloß: 
   'klotzen', // klotzen: 
   'Klumpen, Klumpfuß',  // 
   'Klüngel',  // Klüngel:   
   'knacken',  // knacken: 
   'Knall, knallen',  
   'Knarre',  // Knarre: 
   'knarren', // knarren: 
   'knarzen', // knarzen: 
   'knattern', // knattern: 
   'Knäuel',  // Knäuel: 
   'Knauf',  // Knauf: 
   'knebeln', // knebeln: 
   'kneifen', // kneifen: 
   'kneten', // kneten: 
   'kniff(e)lig', // kniff(e)lig: 
   'Knirps', // Knirps: 
   'knirschen', // knirschen:  
   'knistern', // knistern: 
   'Knöchel',  // Knöchel: 
   'Knochen/Kopf hinhalten', // duplicated 
   'knorke',  // knorke:  
   'knorrig',  // knorrig: 
   'Knuff, knuffen',  //   
   'knüllen, zerknüllen',  // duplicated  
   'Knüller',  // Knüller: 
   'Knüppel', // Knüppel: 
   'knurren',  // knurren:   
   'Köder',   // Köder: 
  // 'Kontor',
   'Konterfei',  // Konterfei: 
   'Konzept (aus dem K. bringen)', // duplicated  
   'köpfen',  // köpfen: 
   'Korb (einen K. bekommen/geben)',  // duplicated 
   'Korbstuhl',  // Korbstuhl:  
   'Kordel',  // Kordel: 
   'Korn (aufs K. nehmen)',  //  duplicated 
   'Kot, koten, Kotflügel',  
   'Kotze, kotzen, ankotzen', // duplicated 
   'krabbeln',  // krabbeln: 
   'krachen, Krach',  
   'Krähe, krähen',    
   'Krake', // Krake: 
   'krakelig/kraklig', // 'krakelig/kraklig':   needs the apostrophes 
   'Kralle, krallen',  
   'Kram (in den K. passen)', //  duplicated 
   'kramen',  // kramen: 
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
   'Kreuz (über K. sein/liegen)', // duplicated 
   'Kreuze (zu K. kriechen)',  // duplicated 
   'kreuzfidel', // kreuzfidel: 
   'Kribbeln',  // Kribbeln: 
   'Krimskrams',  // Krimskrams: 
   'Kringel',  // Kringel: 
   'Kritikaster',  // Kritikaster: 
   'kritzeln' ,  // kritzeln: 
   'Kroppzeug', // Kroppzeug: 
   'Kröte (K. schlucken)',  
   'Krücke', // Krücke:
   'Krümel',  // Krümel: 
   'krümmen', // krümmen:
   'Kühlerhaube, Haube', // duplicated 
   'kullern', // kullern: 
   'Kumpel', // Kumpel: 
   'kundschaften', // kundschaften: 
   'Kuppe',  // Kuppe:   
   'Kuppel',  // Kuppel: 
   'kurbeln', // kurbeln: 
   'kuscheln', // kuscheln: 
   'kuschen',  // kuschen: 
   'Kuvert',  // Kuvert:
];

export default k;   