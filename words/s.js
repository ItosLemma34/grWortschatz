const s = [
   'Sägemehl', // Sägemehl: *
   'Samt', // Samt:  *
   'Sauklaue', // Sauklaue:  *
   'säumen', // säumen:  *
   'Sause',  //Sause:  *
   'sausen', // sausen:  *
   'schaben', // schaben:  * 
   'schade (zu schade sein)',   //duplicated *
   'schälen', // schälen:  *  
 //  'Schank',  // Schank: needs work
   'Schar',  // Schar:  *
   'Scharfmacher', // Scharfmacher:  * 
   'schassen',   // schassen:  *
   'schaufeln, Schaufel',  // *  
   'schaukeln',   // schaukeln: *
   'scheiteln, Scheitel', // *
   'Scheiterhaufen',  // Scheiterhaufen: *
   'schellen',  // schellen: *
   'scheppern',  // scheppern: *
   'Scherbe',  // Scherbe:  *
   'scheren (sich)',  // *
   'scheuern',  // scheuern: *
   'Schieblehre', // Schieblehre:  *
   'Schiefertafel', // Schiefertafel: *
   'schielen',  // schielen: *
   'schikanieren', // schikanieren: *
   'Schilde (etwas im S. führen)', // *
   'Schimmel, (ver)schimmeln', // *
   'Schimmer (keinen blassen S.)', // *
   'schimmern', // schimmern:  *
   'Schinder, schinden' , // *
   'Schlagseite',  // Schlagseite: *
   'schlaksig', // schlaksig: *
   'Schlamassel', // Schlamassel: *
   'Schlampe', // Schlampe: *
   'schlampig',  // schlampig: *
   'Schlauberger', // Schlauberger: *
   'Schlauch', // Schlauch: *
   'schleifen, Schleifer' ,  //  *
   'schlendern' , // schlendern: *
   'Schleuse, schleusen', // *
   'Schliere, schlieren', // *
   'schliddern, schlittern', // *
   'schluchzen' ,  // schluchzen: *
   'Schlucker (armer)', // * duplicated
   'Schlund',  // Schlund: *
   'Schlüpfer',  // Schlüpfer: *
   'schlüpfrig', // schlüpfrig: *
   'Schmach', // Schmach:  *
   'schmächtig', // schmächtig:  *
   'schmettern', // schmettern: *
   'schmiegen (sich)', // *
   'Schmiere stehen', // *
   'Schmiererei, schmieren, schmierig', // *
   'Schmierfink', // Schmierfink: *
   'Schminke', // Schminke:  *
   'schmissig', // schmissig: *
   'Schmonzette', // Schmonzette: *
   'schmoren' , // schmoren: *
   'schmökern', // schmökern: *
   'Schmuck, schmuck' ,  // *
   'Schmuddel, -wetter, schmuddelig', // *
   'Schmunzeln, schmunzeln' , // *
   'Schmutzfink',  // Schmutzfink:  *
   'Schnalle, schnallen', //  *
   'Schnapsidee' ,  // Schnapsidee:  *
   'schnarchen' ,  // schnarchen:
   'schnarren',  // schnarren:  *
   'schnattern (in einem fort)',  // * duplicated
   'schnauben', // schnauben: *
   'schnaufen',  // schnaufen: *
   'schneidig',  // schneidig: *
   'schnieke',  // schnieke:  *
   'schnippen',  // schnippen: *
   'schnippisch' , // schnippisch: *
   'schnörkelig, Schnörkel' , //  *
   'schnorren, anschnorren', // *  duplicated
   'Schnösel' ,  // Schnösel:  *
   'schnuppern, erschnuppern' ,  //  * duplicated
   'Schnur', //  Schnur: *
   'schnurstracks', // schnurstracks: *
//   'schnurzegal, schnurz­pie­pe', //  make duplicate if example of "schnurzegal found"
   'schnurz­pie­pe, schnurzegal', // *  make duplicate if example of "schnurzegal found"
   'Schotter', // Schotter: *
   'schrammen', // schrammen:  *
   'schrappen',  // schrappen: *
   'Schraubstock', // Schraubstock:  *
   'Schrippe', // Schrippe:  *
   'Schritt',  // Schritt:  *
   'Schrotflinte', // Schrotflinte: *
   'Schrott',  // Schrott:  *
   'Schrubber, schrubben', // *  make duplicate if schrubben found
   'schubsen',  // schubsen:  *
   'schummrig',  // schummrig: *
   'Schund',  // Schund: *
   'schunkeln', // schunkeln: *
   'Schuppen',  // Schuppen:  *
   'schüren',  // schüren:  *  
   'schurigeln', // schurigeln: *        
   'Schürze',  // Schürze:  *
   'Schuss (in S. sein)', // * duplicated
   'Schüssel',  // Schüssel: *
   'schütten',  // schütten:  *       
   'schütter',  // schütter:  *
   'Schütze',  // Schütze:  *
   'schwafeln', // schwafeln *
   'schwanen', // schwanen:  *
   'Schwanz einziehen/einkneifen', // *
   'Schwebebahn',  // Schwebebahn: *
   'schwelgen', // schwelgen: *
   'Schwenker', // Schwenker: *
   'schwirren', // schwirren: *
   'Schwitzkasten', // Schwitzkasten: *
   'schwül, Schwüle', // *
   'schwülstig',  // schwülstig:  *
   'Seil',  // Seil: *
   'Sichtblende', // Sichtblende:  *
   'sickern', // sickern: *
   'Sippenhaft', // Sippenhaft: *
   'skandieren', //skandieren:  *
   'Sore',  // Sore: *
   'soufflieren',  // soufflieren: *
   'Spalier',  // Spalier:  *
   'Span, Späne', // *
   'Spanner', // Spanner:  *
   'Spaten',  // Spaten:  *
   'speckig', // speckig: *
   'sperrangelweit',  // sperrangelweit:  *
   'Sperrhaken',  // Sperrhaken:  *
   'sperrig',  // sperrig:  *     
   'spicken',  // spicken:  *
   'Spieß, spießen',  // 'Spieß, spießen' *
   'spitzkriegen',  // spitzkriegen:  *
   'Sprechmuschel',  // Sprechmuschel:
   'spreizen', // spreizen: *
//   'Sprenkel', // Sprenkel: *
   'Spreu vom Weizen trennen',  //  *
   'Speichel',  // Speichel:  *
   'Sprosse',  // Sprosse:  *
   'Spülbürste',  // Spülbürste: *
   'Spüle, spülen', // *
   'Spund', // Spund:  *
   'spuren',  // spuren: *
   'sputen (sich)', // *
   'Stadtstreicher', // Stadtstreicher:  *
   'Staffage', // Staffage: *
   'staksen',  // staksen:  *
   'Standpauke',  // Standpauke: *
   'Stange',  // Stange:  *
   'Stapel, stapeln', //  *
   'stapfen',  //stapfen:  *
   'starren (vor Schmutz starren)', // *
   'Statist', // Statist:  *
   'Stativ',  // Stativ:  *
   'statuieren', // statuieren:  *
   'stauchen', // stauchen:  *
   'Steckbrief', // Steckbrief:  *
   'Stecknadel im Heuhaufen',  // *
   'Steg', // Steg: *
   'stibitzen', // stibitzen: *
   'Stich (einen Stich versetzen)', // *
   'Stiefel, stiefeln', // *
   'stieren',  // stieren:  *
   'stöbern',  // stöbern:  *
   'stochern',  // stochern: *
   'stöckeln, Stöckelschuh', // *
   'stöhnen', // stöhnen: *
   'stopfen, Stopfen', // *
   'Stöpsel',   // Stöpsel: *
   'stolzieren', // stolzieren: *
   'strampeln',  // strampeln: *
   'Strauch, Gesträuch',  //  * duplicated
   'Strebe', // Strebe: *
   'Streich spielen', // *
   'Strickjacke', // Strickjacke: *
   'Striemen',  // Striemen: *
   'Strippe',  // Strippe: *
   'stromern',  // stromern: *
   'strubbelig', // strubbelig: *
   'Strudel',  // Strudel:
   'strunzdämlich',   // strunzdämlich:   include Duden
   'Stuck', // Stuck: *
   'Stulle',  // Stulle: *
	'stülpen (sich)', // *
   'Stummel',  // Stummel: *
   'stümperhaft', // stümperhaft: *
   'stutzig', // stutzig: *
   'süffisant',  // süffisant: *
   'summen, aufsummen', // * duplicated
   'Sündenbock', // Sündenbock: *
   'Sündenpfuhl', // Sündenpfuhl: *
   'surren',   //surren:  *
   ];

export default s;      
