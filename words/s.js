const s = [
   'sabbern',  // sabbern:
   'Sägemehl', // Sägemehl: 
   'sägen, aussägen', // duplicated 
   'Sammelsurium', // Sammelsurium:  *
   'Samt', // Samt:  
   'Sauklaue', // Sauklaue:  
   'säumen', // säumen:  
   'Säure',  // Säure:  *
   'Sause',  //Sause:  
   'sausen', // sausen:  
   'schaben, abschaben', // duplicated *
   'Schablone',  // Schablone:   
   'schade (zu schade sein)',   //duplicated 
   'schälen', // schälen:    
   'Schank',  // Schank: *
   'Schar',  // Schar:  
   'Scharfmacher', // Scharfmacher:   
   'schassen',   // schassen:  
   'schauern, erschauern',  // duplicated *
   'schaufeln, Schaufel',  
   'Schaukasten', // Schaukasten:   
   'schaukeln, aufschaukeln',   //    duplicated
   'scheiteln, Scheitel', 
   'Scheiterhaufen',  // Scheiterhaufen: 
   'schellen',  // schellen: *
   'Schemel',  // Schemel: 
   'scheppern',  // scheppern: *
   'Scherbe',  // Scherbe: *  
   'scheren (sich)',  // 
   'scheuern',  // scheuern: 
   'Schieblehre', // Schieblehre:  
   'Schiefertafel', // Schiefertafel: 
   'schielen',  // schielen: *
   'schikanieren', // schikanieren: 
   'Schilde (im S. führen)', //  duplicated
   'Schimmel, (ver)schimmeln', 
   'Schimmer (keinen blassen S.)', // *
   'schimmern', // schimmern:  
   'Schinder, schinden, geschunden',  // duplicated *
   'schlabbern', // schlabbern: 
   'Schlacke',  // Schlacke:
   'Schlagseite',  // Schlagseite: 
   'schlaksig', // schlaksig: 
   'Schlamassel', // Schlamassel: 
   'Schlampe', // Schlampe: 
   'schlampig',  // schlampig: *
   'schlängeln',  // schlängeln:  *
   'Schlappschwanz',  // Schlappschwanz:
   'Schlauberger', // Schlauberger: 
   'Schlauch', // Schlauch: 
   'schleifen, Schleifer',  
   'schlendern' , // schlendern: 
   'Schlendrian', // Schlendrian: 
   'Schlenker',  // Schlenker:
   'Schleuse, schleusen', // *
   'Schliche (auf die S. kommen)', //  duplicated
   'Schliere, schlieren', 
   'schliddern, schlittern', // *
   'Schlips (auf den S. treten)', //  duplicated
   'schluchzen' ,  // schluchzen: 
   'Schlucker (armer)', //  duplicated
   'Schlund',  // Schlund:  *
   'schlüpfen', // schlüpfen: 
   'Schlüpfer',  // Schlüpfer: 
   'schlüpfrig', // schlüpfrig: 
   'schlurfen',  // schlurfen:
   'Schmach', // Schmach:  
   'schmachten, anschmachten', //  duplicated
   'schmächtig', // schmächtig:  *
   'schmettern', // schmettern: 
   'schmiegen (sich)', // 
   'Schmiere stehen', // 
   'Schmiererei, schmieren, schmierig', 
   'Schmierfink', // Schmierfink: 
   'Schminke', // Schminke:  
   'schmissig', // schmissig: 
   'Schmonzette', // Schmonzette: 
   'schmoren' , // schmoren:  *
   'schmökern', // schmökern: 
   'Schmuck, schmuck' , 
   'Schmuddel, -wetter, schmuddelig', 
   'Schmunzeln, schmunzeln' , 
   'Schmutzfink',  // Schmutzfink:  
   'Schnalle, schnallen', //  
   'Schnapsidee' ,  // Schnapsidee:  
   'schnarchen' ,  // schnarchen:
   'schnarren',  // schnarren:  
   'schnattern (in einem fort)',  //  duplicated
   'schnauben', // schnauben: 
   'schnaufen',  // schnaufen: *
   'schneidig',  // schneidig: 
   'Schneise',  // Schneise: 
   'schnieke',  // schnieke:  
   'schnippen',  // schnippen: *
   'schnippisch', // schnippisch: 
   'schnörkelig, Schnörkel', 
   'schnorren, anschnorren', //   duplicated
   'Schnösel' ,  // Schnösel:  
   'schnuppern, erschnuppern' ,  //   duplicated
   'Schnur, schnüren',
   'schnurstracks', // schnurstracks: 
//   'schnurzegal, schnurz­pie­pe', //  make duplicate if example of "schnurzegal found"
   'schnurz­pie­pe, schnurzegal', //   make duplicate if example of "schnurzegal found"
   'Schoppen',  // Schoppen: 
   'Schotter', // Schotter: 
   'schrammen', // schrammen:  
   'schrappen',  // schrappen: 
   'Schraubstock', // Schraubstock:  
   'Schrebergarten', // Schrebergarten:  
   'Schrippe', // Schrippe:  
   'Schritt',  // Schritt:  
   'Schrotflinte', // Schrotflinte: 
   'Schrott',  // Schrott:  *
   'Schrubber, schrubben', //   
   'schubsen',  // schubsen:  
   'schummrig',  // schummrig: 
   'Schund',  // Schund: 
   'schunkeln', // schunkeln: 
   'Schuppen',  // Schuppen:  * 
   'schüren',  // schüren:    
   'schurigeln', // schurigeln:         
   'Schürze',  // Schürze:  
   'Schuss (in S. sein)', //  duplicated
   'Schüssel, Kloschüssel',  //  duplicate
   'schütten, aus-, ver-, zu-', // *         
   'schütter',  // schütter:  
   'Schutzbefohlene',  // Schutzbefohlene:  
   'Schütze',  // Schütze: *
   'Schwaden', // Schwaden:  
   'schwafeln', // schwafeln 
   'schwanen', // schwanen:  
   'Schwanz einziehen/einkneifen', 
   'Schwebebahn',  // Schwebebahn: 
   'schwelgen', // schwelgen: 
   'Schwenker', // Schwenker:
   'Schwerenöter',  // Schwerenöter: *
   'schwirren', // schwirren: 
   'Schwitzkasten', // Schwitzkasten: 
   'schwül, Schwüle', // *
   'schwülstig',  // schwülstig:  
   'Seil',  // Seil: 
   'Seilschaft',  // Seilschaft: *
   'Sichtblende', // Sichtblende:  
   'sickern', // sickern: 
   'Siegel, versiegeln',
   'Sims',  //  Sims:
   'Sippenhaft', // Sippenhaft: 
   'skandieren', // skandieren:  
   'Sore',  // Sore: 
   'soufflieren',  // soufflieren: 
   'Spalier',  // Spalier:  
   'Span, Späne', 
   'Spanner', // Spanner:  
   'Spaten',  // Spaten:  
   'speckig', // speckig: 
   'speiübel', // speiübel: 
   'sperrangelweit',  // sperrangelweit:  
   'Sperrhaken',  // Sperrhaken:  
   'sperrig',  // sperrig:       
   'spicken',  // spicken: * 
   'Spieß, spießen',  
   'spitzkriegen',  // spitzkriegen:  
   'Sprechmuschel',  // Sprechmuschel:
   'spreizen', // spreizen: 
//   'Sprenkel', // Sprenkel: 
   'Spreu vom Weizen trennen',  
   'Sprung (auf dem S.)',  //  duplicated
   'Speichel',  // Speichel:  
   'Sprosse',  // Sprosse:  
   'Spülbürste',  // Spülbürste: 
   'Spüle, spülen, Spülung', // *
   'Spund', // Spund:  
   'spuren',  // spuren: 
   'sputen (sich)', 
   'Stadtstreicher', // Stadtstreicher:  
   'Staffage', // Staffage: 
   'staksen',  // staksen:  
   'Standpauke',  // Standpauke: 
   'Stange',  // Stange:  
   'Stapel, stapeln', 
   'stapfen, Fußstapfe',   // duplicated *
   'starren (vor Schmutz starren)', 
   'Statist', // Statist:  
   'Stativ',  // Stativ:  
   'statuieren', // statuieren:  
   'Staub (sich aus dem S. machen', //  duplicated
   'stauchen', // stauchen:  
   'Steckbrief', // Steckbrief:  
   'Stecknadel im Heuhaufen',  
   'Steg', // Steg: *
   'stibitzen', // stibitzen: 
   'Stich (einen Stich versetzen)', // * 
   'Stiefel, stiefeln', // *
   'stieren, anstieren',  //   duplicated
   'stöbern',  // stöbern:  
   'stochern',  // stochern:  *
   'stöckeln, Stöckelschuh', 
   'stöhnen, aufstöhnen', //   duplicated
   'stopfen, Stopfen', // *
   'Stöpsel',   // Stöpsel: 
   'stolzieren', // stolzieren: 
   'strampeln',  // strampeln: 
   'Strauch, Gesträuch',  //   duplicated
   'Strebe', // Strebe: 
   'Streich spielen', // *
   'Strich (auf den S. gehen)', //  duplicated
   'Strick (einen S. drehen)', // 
   'Strickjacke', // Strickjacke: 
   'Striemen',  // Striemen: 
   'Strippe',  // Strippe: 
   'stromern',  // stromern: 
   'strubbelig', // strubbelig: 
   'Strudel',  // Strudel:
   'strunzdämlich',   // strunzdämlich:   include Duden
   'Stuck', // Stuck: 
   'Stulle',  // Stulle: *
	'stülpen (sich)', 
   'Stummel',  // Stummel: *
   'Stümper, stümperhaft', // *
   'stutzig', // stutzig: 
   'süffisant',  // süffisant: 
   'summen, aufsummen', //  duplicated
   'Sündenbock', // Sündenbock: 
   'Sündenpfuhl', // Sündenpfuhl: 
   'surren',   //surren:  
   ];

export default s;      
