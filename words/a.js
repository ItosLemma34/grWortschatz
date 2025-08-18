const a = [
	'aalglatt',   // aalglatt:     
	'abbinden',   // abbinden:  
	'abblitzen',  // abblitzen: 
	'abebben',    // abebben:  
	'abfackeln',  // abfackeln:  
	'abgebrüht',  // abgebrüht:   
	'abgrasen',   // abgrasen:   
	'abgreifen, abgegriffen',   
//	'abhängen',   // abhängen:  include only if more examples found for "leave behind"
	'abheften, heften, Hefter', // triplicated *
	'abkanzeln' , // abkanzeln:  
	'abklappern', // abklappern: 
	'abknallen',  // abknallen:  
	'abkommandieren',  // abkommandieren: 
	'Ablage',     // Ablage:  
	'abluchsen',  // abluchsen: *
	'Abordnung',  // Abordnung:
	'abpassen',   // abpassen:
	'absäbeln',  //  absäbeln:
	'abschaben, schaben',  // duplicated  *
	'abschüssig',  // abschüssig:  
	'abspecken',  // abspecken:
	'abspulen',   // abspulen:  
	'abstauben',  // abstauben: 
	'abstottern', // abstottern: 
	'abtrünnig',  // abtrünnig: 
	'abtupfen, betupfen, T(t)upfen',  
	'abwiegeln',  // abwiegeln:      
	'abwimmeln',  // abwimmeln:     
	'abzocken',  // abzocken:  
	'Abzweig, abzweigen',  //  
	'Achterbahn', // Achterbahn: 
	'achtkantig hinauswerfen',  
	'ächzen',     // ächzen: 
	'Ader',  // Ader: 
	'Adlatus', // Adlatus:  
	'adrett',   // adrett:  
	'Affekthandlung',   // Affekthandlung: 
	'alle naselang', 
	'Allerwerteste',   // Allerwerteste:  
	'alteingesessen',  // alteingesessen: 
	'an der Backe haben', 
	'an die große Glocke hängen',  
	'anbändeln',    // anbändeln: 
	'Anbiederung', // Anbiederung:  
	'anblaffen',    // anblaffen:    
	'anbrechen',    // anbrechen:  
	'anecken',      // anecken:   
	'anekeln, Ekel',      //  duplicated 
	'anfauchen, fauchen', //  duplicated
	'anflehen',  // anflehen: * add flehen, make dupicated
	'angeben, Angeber',  //   duplicated
	'angeschickert', // angeschickert: 
	'anglotzen, glotzen', //  duplicated  *
	'anheuern',  // anheuern: 
	'anhimmeln',    // anhimmeln:
	'ankotzen, Kotze, kotzen',  // duplicated  * 
	'anleinen',     // anleinen: 
	'anpeilen',  // anpeilen:  * 
	'Anpfiff' ,     // Anpfiff:  
	'anpflaumen',   // anpflaumen:  
	'anpumpen',     // anpumpen: 
	'anquatschen',   // anquatschen: 
	'anraunzen',     // anraunzen: 
	'anrempeln, rempeln, Rempler',  //  duplicated
	'Anrichte',     // Anrichte: 
	'anrücken, ausrücken, nachrücken', //  triplicated  
	'ans Bein binden',  //  duplicated
	'anschleichen (sich)', // 
	'anschmachten, schmachten', //  duplicated
	'anschmiegsam', // anschmiegsam: 
	'anschnauzen',  // anschnauzen: 
	'anschnorren, schnorren', //  duplicated
	'anschwärzen',  // anschwärzen:  
	'ansengen',     // ansengen:  
	'Ansinnen' ,    // Ansinnen:  
	'anstandslos',  // anstandslos:  
	'anstieren, stieren',  //  duplicated
	'anstupsen',    // anstupsen: 
	'antanzen',     // antanzen:  * 
	'Anwesen',      // Anwesen: 
	'anwidern',     // anwidern: 
	'Anzeige erstatten',
	'anzetteln',  // anzetteln:  
	'anzüglich',  //  anzüglich:
//	'anzwinkern',  // anzwinkern:  excluded, for now; if include, include also zuzwinkern?
	'apportieren', // apportieren: 
	'Areal' ,  // Areal: 
	'Arm (auf den A. nehmen)',  //  duplicated
	'Armbeuge',    // Armbeuge:   
	'arme Ritter', //   duplicated
	'armer Schlucker', //  duplicated
	'Arsch (in den A. kriechen)', // duplicated *  
	'Asservat',  // Asservat:  
	'Ast, Geäst', //  duplicated
	'Attest',     //  Attest: 
	'ätzen, wegätzen',  // duplicated *
	'auf Biegen und Brechen',  
	'auf dem Kerbholz haben', //  duplicated
	'auf dem Kieker haben', //  duplicated
	'auf dem Sprung',      //  duplicate
	'auf dem Trockenen sitzen', // *
	'auf den Arm nehmen',  //  duplicated
	'auf den Leim gehen',  //  duplicated
	'auf den Putz hauen',  //   duplicated
	'auf den Schlips treten', //  duplicated
	'auf den Strich gehen', //  duplicated
	'auf den Wecker gehen', //  duplicated *
	'auf den Zahn fühlen',  //  duplicated *
	'auf der Hut sein',  //  duplicated
	'auf der Nase herumtanzen',  //   duplicated
	'auf die Nase binden',  //  duplicated
	'auf die Palme treiben/bringen',  //  duplicated 
	'auf die Pelle rücken',   //  duplicated
	'auf die Schliche kommen',  //  duplicated
	'auf die Tube drücken',   //  duplicated
	'auf etwas aus sein',  
	'auf Granit beißen', 
	'auf Halde legen',   
	'auf Zack sein',    
	'aufbahren',   // aufbahren:  
	'aufbauschen, bauschen', // duplicated   
	'aufbrummen', // aufbrummen: 
	'aufdonnern (sich)',  
	'auffächern, fächern', //  duplicated
	'auffliegen',  // auffliegen: * 
	'aufgabeln',   // aufgabeln:  
	'aufgedunsen', // aufgedunsen:  
	'aufgekratzt', // aufgekratzt: 
	'aufgelöst',   // aufgelöst:  only for the "distraught" definition
	'aufgeweckt',  // aufgeweckt: 
	'aufgießen, Aufguss', 
	'aufglimmen, glimmen',  //  duplicated  
	'aufhalsen',   // aufhalsen: 
	'aufjaulen',   // aufjaulen:  
	'auflauern',   // auflauern: 
	'aufmucken',   // aufmucken:  
	'aufmüpfig',  // aufmüpfig: 
	'aufpäppeln',  // aufpäppeln:  
//	'aufplustern', // aufplustern:  
	'aufputschen',  // aufputschen: 
	'aufrappeln, hochrappeln', // duplicated  *
	'aufs Auge drücken',   
	'aufs Dach steigen',    // duplicated *   
	'aufs Korn nehmen',  
	'aufschaukeln, schaukeln', //  duplicated  
	'aufscheuchen',    // aufscheuchen:   
	'aufschichten',   // aufschichten:  
	'aufstieben',    // aufstieben:  
	'aufstöbern',    // aufstöbern:  
	'aufstöhnen, stöhnen', //  duplicated
	'aufsummen, summen', //  duplicated
	'auftakeln',     // auftakeln: 
	'auftischen',    // auftischen:  *
	'Aufwartung machen', 
	'aufwiegen',     // aufwiegen:  
	'aufwühlen, aufgewühlt', 
	'aus dem Konzept bringen',     
	'aus dem Staub machen (sich)', //  duplicated
	'aus dem Häuschen sein',   //  
	'aus der Haut fahren',  // 
	'ausbaldowern', // ausbaldowern:
	'ausborgen',  // ausborgen:  *
	'ausbügeln',  // ausbügeln:  
	'ausbremsen', // ausbremsen:  
	'ausbüxen',    // ausbüxen:  
	'Ausdünstung',  // Ausdünstung:  
	'Ausfallstraße',   // Ausfallstraße:  
	'ausfressen',   // ausfressen:  
	'ausheben, Aushebung',     
	'ausklinken, einklinken',  // duplicated
	'ausleiern', // ausleiern:
	'ausmisten',  // ausmisten:   
	'ausquetschen',  // ausquetschen: 
	'ausräuchern', // ausräuchern:  
	'Ausreißer',    // Ausreißer:  
	'ausreizen',  // ausreizen: 
	'ausrücken, anrücken, nachrücken',  //  triplicated
	'aussägen, sägen', //   duplicated  
	'Ausschachtung',  // Ausschachtung: 
	'ausscheren',   // ausscheren:  
	'ausschlachten', // ausschlachten:  
	'ausschwärmen',  // ausschwärmen: 
	'Ausschweifung',  // Ausschweifung:
	'ausspannen, einspannen',  // duplicated *
	'ausspucken',   // ausspucken: 
	'ausstaffieren',  // ausstaffieren:   
	'ausstopfen',    // ausstopfen: 
	'austoben (sich)',    
	'austüfteln',  // austüfteln:
	'auswischen',  // auswischen:  
	'auswringen', // auswringen:  
];

export default a;