const a = [
	'aalglatt',   // aalglatt:  *   
	'abbinden',   //abbinden:  
	'abblitzen',  //abblitzen: 
	'abebben',    //abebben:  
	'abfackeln',  //abfackeln:  
	'abgebrüht',  // abgebrüht:  * 
	'abgrasen',   //abgrasen:   
	'abgreifen',  //abgreifen: 
	'abhängen',   //abhängen: 
	'abkanzeln' , // abkanzeln:
	'abklappern', // abklappern: *
	'abknallen',  //abknallen:  
	'abkommandieren',  //abkommandieren: 
	'Achterbahn', // Achterbahn: *
	'Ablage',     //Ablage:  
	'abluchsen',  //abluchsen: 
	'abschüssig',  //abschüssig:  
	'abspulen',   // abspulen: 
	'abstottern', // abstottern: *
	'abtrünnig',  //abtrünnig: 
	'abwiegeln',  // abwiegeln:  *    
	'abwimmeln',  // abwimmeln:  *   
	'abzocken',   //abzocken: 
	'Abzweig, abzweigen',  //  *
	'achtkantig hinauswerfen', // 
	'ächzen',     //ächzen:
	'Ader',  // Ader: *
	'adrett',   //adrett:  
	'Affekthandlung',   //Affekthandlung: 
	'alle naselang', // *
	'Allerwerteste',   //Allerwerteste:  
	'alteingesessen',  //alteingesessen: 
	'an der Backe haben', //
	'an die große Glocke hängen',  
	'anbändeln',    //anbändeln:
	'Anbiederung', // Anbiederung:  *
	'anblaffen',    // anblaffen:    
	'anbrechen',    //anbrechen:  
	'anecken',      //anecken:   
	'anekeln',      //anekeln:  
	'anfauchen, fauchen', //
	'angeben, Angeber',  //  * duplicated
	'angeschickert', //angeschickert:
	'anglotzen, glotzen', // * duplicated 
	'anheuern',  // anheuern: *
	'anhimmeln',    // anhimmeln: *  
	'anleinen',     //anleinen:  
	'Anpfiff' ,     //Anpfiff:  
	'anpflaumen',   //anpflaumen:  
	'anpumpen',     //anpumpen: 
	'anquatschen',   //anquatschen: 
	'anraunzen',     // anraunzen: *
	'anrempeln',    // anrempeln: *
	'Anrichte',     // Anrichte:
	'anrücken, ausrücken, nachrücken', // * triplicated  
	'ans Bein binden',  //
	'anschleichen (sich)', //
	'anschmachten, schmachten', // * duplicated
	'anschmiegsam', //anschmiegsam: 
	'anschnauzen',  // anschnauzen: 
	'anschnorren, schnorren', // * duplicated
	'anschwärzen',  // anschwärzen:  *
	'ansengen',     //ansengen:  
	'Ansinnen' ,    // Ansinnen: * 
	'anstupsen',    //anstupsen:  
	'antanzen',     // antanzen: *  
	'Anwesen',      // Anwesen: *
	'anwidern',     //anwidern:  
	'Anzeige erstatten', //  
	'anzwinkern',  //anzwinkern: 
	'apportieren', // apportieren: 
	'Areal' ,  // Areal:
	'Armbeuge',    //Armbeuge:   
	'arme Ritter', // *  duplicated
	'armer Schlucker', // * duplicated
	'Arsch, jmdm. in den A. kriechen',  //
	'Asservat',  // Asservat:
	'Ast, Geäst', // * duplicated
	'Attest',     //Attest: 
	'auf Biegen und Brechen',  // 
	'auf dem Kerbholz haben', // * duplicated
	'auf dem Kieker haben', //
	'auf dem Sprung',      //
	'auf den Arm nehmen',  //
	'auf den Leim gehen',  //
	'auf den Putz hauen',  //
	'auf den Schlips treten', // * duplicated
	'auf den Strich gehen', //
	'auf den Wecker gehen', // * duplicated
	'auf den Zahn fühlen',  // * duplicated
	'auf der Hut sein',  //
	'auf die Nase binden',  //
	'auf die Palme treiben/bringen',  
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
	'aufgelöst',   // aufgelöst:  complete search for other "aufgelöst" 
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