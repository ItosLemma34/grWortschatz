const a = [
	'aalglatt',   // aalglatt:  *   
	'abbinden',   // abbinden:  *
	'abblitzen',  // abblitzen: *
	'abebben',    // abebben:  *
	'abfackeln',  // abfackeln:  *
	'abgebrüht',  // abgebrüht:  * 
	'abgrasen',   // abgrasen:   *
	'abgreifen, abgegriffen',  // *
//	'abhängen',   // abhängen:  include only if more examples found for "leave behind"
	'abkanzeln' , // abkanzeln:  *
	'abklappern', // abklappern: *
	'abknallen',  // abknallen:  *
	'abkommandieren',  // abkommandieren: *
	'Ablage',     // Ablage:  *
	'abluchsen',  // abluchsen: *
	'abschüssig',  // abschüssig: * 
	'abspulen',   // abspulen:  *
	'abstottern', // abstottern: *
	'abtrünnig',  // abtrünnig:  *
	'abwiegeln',  // abwiegeln:  *    
	'abwimmeln',  // abwimmeln:  *   
	'abzocken',  // abzocken:  *
	'Abzweig, abzweigen',  //  *
	'Achterbahn', // Achterbahn: *
	'achtkantig hinauswerfen', // *
	'ächzen',     // ächzen: *
	'Ader',  // Ader: *
	'adrett',   // adrett:  *
	'Affekthandlung',   // Affekthandlung: *
	'alle naselang', // *
	'Allerwerteste',   // Allerwerteste:  *
	'alteingesessen',  // alteingesessen: *
	'an der Backe haben', // *
	'an die große Glocke hängen', // * 
	'anbändeln',    // anbändeln: *
	'Anbiederung', // Anbiederung:  *
	'anblaffen',    // anblaffen: *   
	'anbrechen',    // anbrechen: * 
	'anecken',      // anecken: *  
	'anekeln, Ekel',      // * duplicated 
	'anfauchen, fauchen', // * duplicated
	'angeben, Angeber',  //  * duplicated
	'angeschickert', // angeschickert: *
	'anglotzen, glotzen', // * duplicated 
	'anheuern',  // anheuern: *
	'anhimmeln',    // anhimmeln: *  
	'anleinen',     // anleinen:  *
	'Anpfiff' ,     // Anpfiff: * 
	'anpflaumen',   // anpflaumen: * 
	'anpumpen',     // anpumpen: *
	'anquatschen',   // anquatschen: *
	'anraunzen',     // anraunzen: *
	'anrempeln',    // anrempeln: *
	'Anrichte',     // Anrichte: *
	'anrücken, ausrücken, nachrücken', // * triplicated  
	'ans Bein binden',  // * duplicated
	'anschleichen (sich)', // *
	'anschmachten, schmachten', // * duplicated
	'anschmiegsam', // anschmiegsam: *
	'anschnauzen',  // anschnauzen: *
	'anschnorren, schnorren', // * duplicated
	'anschwärzen',  // anschwärzen:  *
	'ansengen',     // ansengen:  *
	'Ansinnen' ,    // Ansinnen: * 
	'anstupsen',    // anstupsen: *
	'antanzen',     // antanzen: *  
	'Anwesen',      // Anwesen: *
	'anwidern',     // anwidern: *
	'Anzeige erstatten', // * 
//	'anzwinkern',  // anzwinkern:  excluded, for now; if include, include also zuzwinkern?
	'apportieren', // apportieren: *
	'Areal' ,  // Areal: *
	'Arm (auf den A. nehmen)',  // * duplicated
	'Armbeuge',    // Armbeuge:  * 
	'arme Ritter', // *  duplicated
	'armer Schlucker', // * duplicated
	'Arsch (jmdm. in den A. kriechen)',  // *
	'Asservat',  // Asservat:  *
	'Ast, Geäst', // * duplicated
	'Attest',     //  Attest: *
	'auf Biegen und Brechen',  // *
	'auf dem Kerbholz haben', // * duplicated
	'auf dem Kieker haben', // * duplicated
	'auf dem Sprung',      // * duplicate
	'auf den Arm nehmen',  // * duplicated
	'auf den Leim gehen',  // * duplicated
	'auf den Putz hauen',  //  * duplicated
	'auf den Schlips treten', // * duplicated
	'auf den Strich gehen', // * duplicated
	'auf den Wecker gehen', // * duplicated
	'auf den Zahn fühlen',  // * duplicated
	'auf der Hut sein',  // * duplicated
	'auf die Nase binden',  // * duplicated
	'auf die Palme treiben/bringen',  // * duplicated 
	'auf die Pelle rücken',   // * duplicated
	'auf die Schliche kommen',  // * duplicated
	'auf die Tube drücken',   // * duplicated
	'auf etwas aus sein',  // *
	'auf Granit beißen', // *
	'auf Halde legen',   // *
	'auf Zack sein',    // *
	'aufbahren',   // aufbahren:  *
	'aufbauschen, bauschen', // duplicated  * 
	'aufbrummen', // aufbrummen: *
	'aufdonnern (sich)',  // *
	'auffächern, fächern', // * duplicated
	'auffliegen',  // auffliegen:  * 
	'aufgabeln',   // aufgabeln:  *
	'aufgedunsen', // aufgedunsen:  *
	'aufgekratzt', // aufgekratzt: * 
	'aufgelöst',   // aufgelöst:  only for the "distraught" definition
	'aufgießen, Aufguss', // *
	'aufglimmen, glimmen',  // * duplicated  
	'aufhalsen',   // aufhalsen: *
	'aufjaulen',   // aufjaulen: * 
	'auflauern',   // auflauern: *
	'aufmucken',   // aufmucken:  *
	'aufmüpfig',  // aufmüpfig: *
	'aufpäppeln',  // aufpäppeln: * 
//	'aufplustern', // aufplustern:  
	'aufputschen',  // aufputschen: *
	'aufs Auge drücken',  // * 
	'aufs Dach steigen',  // * 
	'aufs Korn nehmen',  // * 
	'aufschaukeln, schaukeln', // * duplicated  
	'aufscheuchen',    // aufscheuchen: *  
	'aufschichten',   // aufschichten: * 
	'aufstieben',    // aufstieben:  *
	'aufstöbern',    // aufstöbern: * 
	'aufsummen, summen', // * duplicated
	'auftakeln',     // auftakeln: *
	'auftischen',    // auftischen: * 
	'Aufwartung machen', // *
	'aufwiegen',     // aufwiegen:  *
	'aus dem Konzept bringen',   // *  
	'aus dem Staub machen (sich)', // * 
	'aus dem Häuschen sein',   // * 
	'aus der Haut fahren',  // *
	'ausbaldowern', // ausbaldowern:  *
	'ausbremsen', // ausbremsen:  *
	'ausbuddeln, buddeln', //  * duplicated;   also pair with "einbuddeln" if found
	'ausbüxen',    // ausbüxen:  *
	'Ausdünstung',  // Ausdünstung:  *
	'Ausfallstraße',   // Ausfallstraße: * 
	'ausfressen',   // ausfressen:  *
	'ausheben, Aushebung',  //  * 
	'aushorchen',  // aushorchen:  * 
	'ausklinken',  // ausklinken: *
	'ausmisten',  // ausmisten: *  
	'ausquetschen',  // ausquetschen: *
	'ausräuchern', // ausräuchern: * 
	'Ausreißer',    // Ausreißer:  *
	'ausreizen',  // ausreizen: *
	'ausrücken, anrücken, nachrücken',  // * triplicated
	'aussägen, sägen', // *  duplicated  
	'Ausschachtung',  // Ausschachtung: *
	'ausscheren',   // ausscheren:  *
	'ausschlachten', // ausschlachten:  *
	'ausschwärmen',  // ausschwärmen: *
	'ausspucken',   // ausspucken: *
	'ausstaffieren',  // ausstaffieren:  * 
	'ausstopfen',    // ausstopfen: *
	'austoben (sich)',  // *  
	'austüfteln',  // austüfteln:  *
	'auswringen', // auswringen: * 
];

export default a;