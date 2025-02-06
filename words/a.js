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
	'Ablage',     //Ablage:  
	'abluchsen',  //abluchsen: 
	'abschüssig',  //abschüssig:  
	'abspulen',   //abspulen: 
	'abstottern', // abstottern: *
	'abtrünnig',  //abtrünnig: 
	'abwiegeln',  // abwiegeln:  *    
	'abwimmeln',  //abwimmeln:     
	'abzocken',   //abzocken: 
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
	'anblaffen',    //anblaffen:    
	'anbrechen',    //anbrechen:  
	'anecken',      //anecken:   
	'anekeln',      //anekeln:  
	'anfauchen, fauchen', //
	'angeben, Angeber',  //  
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
	'Anrichte',     //Anrichte:  
	'ans Bein binden',  //
	'anschleichen (sich)', //
	'anschmiegsam', //anschmiegsam: 
	'anschnauzen',  // anschnauzen: 
	'anschnorren, schnorren', // * duplicated
	'anschwärzen',  // anschwärzen:  *
	'ansengen',     //ansengen:  
	'Ansinnen' ,    // Ansinnen: * 
	'anstupsen',    //anstupsen:  
	'antanzen',     //antanzen:  
	'Anwesen',      // Anwesen: *
	'anwidern',     //anwidern:  
	'Anzeige erstatten', //  
	'anzwinkern',  //anzwinkern: 
	'Areal' ,  // Areal:
	'Armbeuge',    //Armbeuge:   
	'arme Ritter', // *  duplicated
	'armer Schlucker', // * duplicated
	'Arsch, jmdm. in den A. kriechen',  //
	'Asservat',  // Asservat:
	'Attest',     //Attest: 
	'auf Biegen und Brechen',  // 
	'auf dem Sprung',      //
	'auf dem Kieker haben', //
	'auf den Arm nehmen',  //
	'auf den Leim gehen',  //
	'auf den Putz hauen',  //
	'auf den Strich gehen', //
	'auf den Wecker gehen', // * duplicated
	'auf den Zahn fühlen',  //
	'auf der Hut sein',  //
	'auf die Nase binden',  //
	'auf die Palme treiben/bringen',  
	'auf die Pelle rücken',   //
	'auf die Schliche kommen',  //
	'auf die Tube drücken',   //
	'auf etwas aus sein',  //
	'auf Granit beißen', // *
	'auf Halde legen',   //
	'auf Zack sein',    // *
	'aufbahren',   //aufbahren:  
	'aufbauschen', // aufbauschen:  * 
	'aufdonnern (sich)',  //
	'auffächern', //auffächern:
	'auffliegen',  // auffliegen:   
	'aufgabeln',   //aufgabeln:  
	'aufgedunsen', // aufgedunsen:  *
	'aufgekratzt', // aufgekratzt: * 
	'aufgelöst',   //aufgelöst:  
	'aufgießen, Aufguss', //
	'aufglimmen',  //aufglimmen:  
	'aufhalsen',   //aufhalsen:  
	'aufjaulen',   //aufjaulen:  
	'auflauern',   //auflauern:  
	'aufmucken',   //aufmucken:  
	'aufpäppeln',  //aufpäppeln:  
//	'aufplustern', //aufplustern:  
	'aufputschen',  //aufputschen:  
	'aufs Auge drücken',  //  
	'aufs Dach steigen',  //  
	'aufs Korn nehmen',  //  
	'aufschaukeln',    //aufschaukeln:  
	'aufscheuchen',    //aufscheuchen:  
	'aufschichten',   //aufschichten:  
	'aufstieben',    //aufstieben:  
	'aufstöbern',    // aufstöbern: * 
	'aufsummen, summen', // * duplicated
	'auftakeln',     //auftakeln:  
	'auftischen',    //auftischen:  
	'aufwiegen',     //aufwiegen:  
	'aus dem Konzept bringen',   //  
	'aus dem Staub machen (sich)', //  
	'aus dem Häuschen sein',   //  
	'aus der Haut fahren',  // 
	'ausbüxen',    //ausbüxen:  
	'Ausdünstung',  //Ausdünstung:  
	'Ausfallstraße',   //Ausfallstraße:  
	'ausfressen',   //ausfressen:  
	'ausheben, Aushebung',  //  * 
	'aushorchen',  //aushorchen:  
	'ausklinken',  //ausklinken:  
	'ausquetschen',  // ausquetschen: 
	'ausräuchern', // ausräuchern: * 
	'Ausreißer',    //Ausreißer:  
	'ausreizen',  // ausreizen: *
	'ausrücken',    //ausrücken:  
	'Ausschachtung',  // Ausschachtung:
	'ausscheren',   //ausscheren:  
	'ausschlachten', //ausschlachten:  
	'ausschwärmen',  //ausschwärmen:  
	'ausspucken',   //ausspucken:  
	'ausstaffieren',  //ausstaffieren:  
	'ausstopfen',    //ausstopfen: 
	'austoben (sich)',  // *  
	'austüfteln',     //austüfteln:  
	'auswringen',   //auswringen:  
];

export default a;