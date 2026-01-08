const a = [
	'aalglatt',   // aalglatt:     
	'abbinden',   // abbinden:  
	'abblitzen',  // abblitzen: 
	'abebben',    // abebben:  
	'abfackeln',  // abfackeln:  
	'abgebrüht',  // abgebrüht:   
	'abgrasen',   // abgrasen:   
	'abgreifen, abgegriffen',
	'abhalftern, abgehalftert',   
//	'abhängen',   // abhängen:  include only if more examples found for "leave behind"
	'abkanzeln' , // abkanzeln:  
	'abklappern', // abklappern: 
	'abknallen',  // abknallen:  
	'abkommandieren',  // abkommandieren: 
	'Ablage',     // Ablage:  
	'abluchsen',  // abluchsen: 
	'abmühen, mühen',  // duplicated
	'Abordnung',  // Abordnung: 
	'abpassen',   // abpassen: 
	'abreiben, Abreibung',  
	'absäbeln',  //  absäbeln: 
	'abschaben, schaben',  // duplicated 
	'Abschaum',  // Abschaum: 
	'abschüssig',  // abschüssig: 
	'abschweifen, schweifen',   // duplicated
	'absegnen',  // absegnen: 
	'abspecken',  // abspecken: 
	'abspulen',   // abspulen:  
	'abstauben',  // abstauben: 
	'abstottern', // abstottern: 
	'abstumpfen',  // abstumpfen:
	'abtrünnig',  // abtrünnig: 
	'abtupfen, betupfen, T(t)upfen', // triplicated   
	'abwiegeln',  // abwiegeln:      
	'abwimmeln',  // abwimmeln:     
	'abzocken',  // abzocken:  
	'Abzweig, abzweigen',    
	'Achterbahn', // Achterbahn: 
	'achtkantig hinauswerfen',  
	'Ader',  // Ader: 
	'Adlatus', // Adlatus:  
	'adrett',   // adrett:  
	'ächzen',     // ächzen:  ä sorted as ae 
	'Affekthandlung',   // Affekthandlung: 
	'Affenzahn (mit einem A.)', // duplicated
	'Albernheit, albern, herum-',
	'alle naselang',  
	'Allerwerteste',   // Allerwerteste:  
	'alteingesessen',  // alteingesessen: 
	'an den Pranger',  
	'an der Backe haben',  
	'an die große Glocke hängen',   
	'anbändeln',    // anbändeln:  
	'Anbiederung', // Anbiederung:
	'anbinden, kurz angebunden',   // duplicated  
	'anblaffen',    // anblaffen:    
	'anbrechen',    // anbrechen:  
	'andrehen',   // andrehen: 
	'anecken',      // anecken:  
	'anfauchen, fauchen', //  duplicated 
	'anflehen, flehen, flehentlich',  // duplicated
	'anfunkeln',  // anfunkeln: 
	'angeben, Angeber',    
	'angeschickert', // angeschickert: 
	'angiften, giften', // duplicated
	'angrienen',  // angrienen:
	'anherrschen',  // anherrschen:
	'anheuern',  // anheuern: 
	'anhimmeln',    // anhimmeln: 
	'ankotzen, Kotze, kotzen',  // duplicated   
	'anleinen',     // anleinen: 
	'anpeilen',  // anpeilen:   
	'Anpfiff' ,     // Anpfiff:  
	'anpflaumen',   // anpflaumen:  
	'anpumpen',     // anpumpen: 
	'anquatschen',   // anquatschen: 
	'anraunzen',     // anraunzen:  
	'anrempeln, rempeln, Rempler',  //  duplicated 
	'Anrichte',     // Anrichte: 
	'anrücken, ausrücken, nachrücken', //  triplicated   
	'ans Bein binden',  //  duplicated 
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
	'antanzen',     // antanzen:   
	'Anwesen',      // Anwesen: 
	'anwidern',     // anwidern:
	'anwinkeln',  // anwinkeln: 
	'anzapfen, Zapfen, zapfen', // duplicated
	'Anzeige erstatten',  
	'anzetteln',  // anzetteln:  
	'anzüglich',  //  anzüglich:  
	'apportieren', // apportieren: 
	'Areal' ,  // Areal:  
	'Arm (auf den A. nehmen)',  //  duplicated 
	'Armaturenbrett, Brett, Bretter-', // duplicated
	'Armbeuge',    // Armbeuge:   
	'arme Ritter', //   duplicated 
	'armer Schlucker', //  duplicated 
	'Arsch (in den A. kriechen)', // duplicated   
	'Asservat',  // Asservat:  
	'Ast, Geäst', //  duplicated 
	'Attest',     //  Attest:  
	'ätzen, wegätzen',  // duplicated 
	'auf Biegen und Brechen', 
	'auf dem Buckel, Buckel, bucklig', // duplicated 
	'auf dem Kerbholz haben', //  duplicated  
	'auf dem Kieker haben', //  duplicated 
	'auf dem Sprung',      //  duplicated  
	'auf dem Trockenen sitzen', // duplicated 
	'auf den Arm nehmen',  //  duplicated 
	'auf den Leim gehen',  //  duplicated 
	'auf den letzten Drücker',  // duplicated
	'auf den Putz hauen',  //   duplicated 
	'auf den Schlips treten', //  duplicated 
	'auf den Strich gehen', //  duplicated 
	'auf den Wecker gehen', //  duplicated 
	'auf den Zahn fühlen',  //  duplicated 
	'auf der hohen Kante',
	'auf der Hut',  
	'auf der Nase herumtanzen',  // duplicated 
	'auf die Nase binden',  //  duplicated 
	'auf die Palme treiben/bringen',  //  duplicated 
	'auf die Pelle rücken',   //  duplicated 
	'auf die Schliche kommen',  //  duplicated 
	'auf die Sprünge helfen',   // duplicated
	'auf die Tube drücken',   //  duplicated 
	'auf etwas aus sein',   
	'auf Granit beißen',  
	'auf Halde legen', 
	'auf Trab bringen/halten',   
	'auf Zack sein',     
	'aufbahren',   // aufbahren:
	'aufbäumen',  // aufbäumen:  ä sorted as ae 
	'aufbauschen, bauschen', // duplicated   
	'aufbrummen', // aufbrummen: 
	'aufdonnern',  // aufdonnern: 
	'auffächern, fächern', //  duplicated 
	'auffliegen',  // auffliegen:  
	'aufgabeln',   // aufgabeln:
	'Aufgebot',  // Aufgebot:  
	'aufgedunsen', // aufgedunsen:  
	'aufgelöst',   // aufgelöst:   only for the "distraught" definition
	'aufgeweckt',  // aufgeweckt: 
	'aufgießen, Aufguss',  
	'aufglimmen, glimmen',  //  duplicated  
	'aufhalsen',   // aufhalsen: 
	'aufjaulen',   // aufjaulen:  
	'aufkratzen, aufgekratzt', 
	'auflauern',   // auflauern: 
	'aufmucken',   // aufmucken:  
	'aufmüpfig',  // aufmüpfig: 
	'aufpäppeln',  // aufpäppeln:  
//	'aufplustern', // aufplustern:  why not?
	'aufputschen',  // aufputschen: 
	'aufrappeln, hochrappeln', // duplicated  
	'aufs Auge drücken', // duplicated   
	'aufs Dach steigen',       
	'aufs Korn nehmen',  // duplicated 
	'aufschaukeln, schaukeln', //  duplicated  
	'aufscheuchen',    // aufscheuchen:   
	'aufschichten',   // aufschichten: 
	'aufspießen, spießen, Spieß',  // duplicated 
	'aufstieben',    // aufstieben:  
	'aufstöbern, stöbern',    // duplicated  
	'aufstöhnen, stöhnen', //  duplicated 
	'aufsummen, summen', //  duplicated 
	'auftakeln',     // auftakeln: 
	'auftischen',    // auftischen:  
	'Aufwartung machen',  
	'aufwiegen',     // aufwiegen: 
	'aufwirbeln, wirbeln',  // duplicated 
	'aufwühlen, aufgewühlt',  
	'Auge (aufs A. drücken)',  // duplicted 
	'aus dem Konzept bringen', // duplicated     
	'aus dem Staub machen', //  duplicated 
	'aus dem Häuschen sein',     
	'aus der Haut fahren',   
	'ausbaldowern', // ausbaldowern:  
	'ausborgen',  // ausborgen:  
	'ausbremsen', // ausbremsen:  
	'ausbügeln',  // ausbügeln:  
	'Ausdünstung',  // Ausdünstung:  
	'ausbüxen',    // ausbüxen:  
	'Ausfallstraße',   // Ausfallstraße:
	'ausfransen',  // ausfransen:  
	'ausfressen',   // ausfressen:  
	'ausheben, Aushebung', 
	'ausklinken, einklinken',  // duplicated 
	'ausleiern', // ausleiern: 
	'ausmergeln', // ausmergeln:
	'ausmisten',  // ausmisten:   
	'ausquetschen',  // ausquetschen: 
	'ausräuchern', // ausräuchern:  
	'Ausreißer',    // Ausreißer:  
	'ausreizen',  // ausreizen: 
	'ausrücken, anrücken, nachrücken',  //  triplicated 
	'aussägen, sägen', //   duplicated 
	'Aussatz, Aussätziger, aussätzig', 
	'Ausschachtung',  // Ausschachtung: 
	'ausscheren, scheren, Schere',  // duplicated
	'ausschlachten', // ausschlachten:  
	'ausschwärmen',  // ausschwärmen: 
	'Ausschweifung',  // Ausschweifung: 
	'ausspannen, einspannen',  // duplicated 
	'ausspucken',   // ausspucken: 
	'ausstaffieren',  // ausstaffieren:   
	'ausstopfen',    // ausstopfen: 
	'austoben',   // austoben:  
	'austüfteln',  // austüfteln: 
	'auswischen',  // auswischen:  
	'auswringen, wringen', // duplicated  
];
export default a;