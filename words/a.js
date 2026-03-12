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
	'Abordnung',  // Abordnung: 
	'abpassen',   // abpassen: 
	'abreiben, Abreibung',  
	'absäbeln',  //  absäbeln: 
	'Abschaum',  // Abschaum: 
	'abschüssig',  // abschüssig: 
	'absegnen',  // absegnen: 
	'abspecken',  // abspecken: 
	'abspulen',   // abspulen:  
	'abstauben',  // abstauben: 
	'abstottern', // abstottern: 
	'abstumpfen',  // abstumpfen:
	'abtrünnig',  // abtrünnig: 
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
	'anberaumen',  // anberaumen: 
	'Anbiederung', // Anbiederung:
	'anbinden, kurz angebunden',   // duplicated  
	'anblaffen',    // anblaffen:    
	'anbrechen',    // anbrechen:  
	'andrehen',   // andrehen: 
	'anecken',      // anecken:  
	'anfunkeln',  // anfunkeln: 
	'angeben, Angeber',    
	'angeschickert', // angeschickert: 
	'anherrschen',  // anherrschen:
	'anheuern',  // anheuern: 
	'anhimmeln',    // anhimmeln: 
	'anleinen',     // anleinen: 
	'anmotzen',  // anmotzen:
	'anpeilen',  // anpeilen:   
	'Anpfiff' ,     // Anpfiff:  
	'anpflaumen',   // anpflaumen:  
	'anpumpen',     // anpumpen: 
	'anquatschen',   // anquatschen: 
	'Anrichte',     // Anrichte: 
	'ans Bein binden',  //  duplicated 
	'anschmachten, schmachten', //  duplicated 
	'anschmiegsam', // anschmiegsam: 
	'anschnauzen',  // anschnauzen: 
	'anschwärzen',  // anschwärzen:  
	'ansengen',     // ansengen:  
	'Ansinnen' ,    // Ansinnen:  
	'anstandslos',  // anstandslos:  
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
	'Attest, attestieren',     
	'ätzen, wegätzen',  // duplicated 
	'auf Biegen und Brechen', 
	'auf dem Buckel, Buckel, buckeln, bucklig', // duplicated 
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
	'auf die Tube drücken/treten',   //  duplicated 
	'auf etwas aus sein',   
	'auf Granit beißen',  
	'auf Halde legen',
	'auf links drehen', 
	'auf Trab bringen/halten',   
	'auf Zack sein',     
	'aufbahren',   // aufbahren:
	'aufbäumen',  // aufbäumen:  ä sorted as ae 
	'aufbrummen', // aufbrummen: 
	'aufdonnern',  // aufdonnern: 
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
	'aufscheuchen',    // aufscheuchen:   
	'aufschichten',   // aufschichten: 
	'aufspießen, spießen, Spieß',  // duplicated 
	'aufstemmen',  // aufstemmen:
	'aufstieben',    // aufstieben:  
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
	'ausladend',  // ausladend:
	'ausleiern', // ausleiern: 
	'ausloben',  //  ausloben:
	'ausmergeln', // ausmergeln:
	'ausmisten',  // ausmisten:   
	'ausquetschen',  // ausquetschen: 
	'ausräuchern', // ausräuchern:  
	'Ausreißer',    // Ausreißer:  
	'ausreizen',  // ausreizen: 
	'Aussatz, Aussätziger, aussätzig', 
	'Ausschachtung',  // Ausschachtung: 
	'ausschlachten', // ausschlachten:  
	'ausschwärmen',  // ausschwärmen: 
	'Ausschweifung, ausschweifend', 
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