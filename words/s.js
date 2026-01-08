const s = [
   'sabbern',  // sabbern:  
   'Sägemehl', // Sägemehl: 
   'sägen, aussägen', // duplicated 
   'Salbung, salbungsvoll', 
   'Samen',  // Samen:
   'Sammelsurium', // Sammelsurium:  
   'Samt', // Samt:  
   'Sauklaue', // Sauklaue:  
   'Saum, säumen',  
   'säumig',  // säumig:
   'Säure, säuerlich',   
   'Sause',  // Sause:  
   'sausen', // sausen:  
   'schaben, abschaben', // duplicated 
   'Schablone',  // Schablone:
   'Schachtel',  // Schachtel:   
   'schade (zu schade sein)',   //duplicated 
   'Schäferstündchen', // Schäferstündchen:
   'schälen', // schälen:    
   'Schank',  // Schank: 
   'Schar',  // Schar:  
   'Scharfmacher', // Scharfmacher:   
   'schassen',   // schassen:  
   'Schauder, schaudern', 
   'schauern, erschauern',  // duplicated 
   'schaufeln, Schaufel',  // 
   'Schaukasten', // Schaukasten:   
   'schaukeln, aufschaukeln',   // duplicated  
   'Scheffel (Licht unter den S.)', // duplicated
   'scheiteln, Scheitel', // 
   'Scheiterhaufen',  // Scheiterhaufen: 
   'schellen',  // schellen: 
   'Schemel',  // Schemel: 
   'scheppern',  // scheppern: 
   'Scherbe',  // Scherbe:   
   'Schere, scheren, aus-',  // duplicated
   'scheuern',  // scheuern: 
   'Schieblehre', // Schieblehre:  
   'Schiefertafel', // Schiefertafel: 
   'schielen',  // schielen:
//   'Schienenstrang, Strang', // duplicated 
   'schikanieren', // schikanieren: 
   'Schilde (im S. führen)', //  duplicated  
   'Schimmel, (ver)schimmeln', // 
//   'Schimmer (keinen blassen S.)', // 
   'schimmern, Schimmer, keinen S. haben', 
   'Schinder, schinden, geschunden',  // duplicated 
   'Schippe (von der S. springen)',  // duplicated
   'schlabbern', // schlabbern: 
   'Schlacke',  // Schlacke: 
   'Schlagseite',  // Schlagseite: 
   'schlaksig', // schlaksig: 
   'Schlamassel', // Schlamassel: 
   'Schlampe', // Schlampe: 
   'Schlamperei, schlampen, schlampig',  
   'schlängeln',  // schlängeln:  
   'schlapp, schlappmachen',
   'Schlappschwanz',  // Schlappschwanz: 
   'Schlauberger', // Schlauberger: 
   'Schlauch', // Schlauch:
   'schleichen', 
   'schleifen, Schleifer',  
   'schlendern' , // schlendern:  
   'Schlendrian', // Schlendrian: 
   'Schlenker',  // Schlenker:
   'schleudern', // schleudern: 
   'Schleuse, schleusen',  
   'Schliche (auf die S. kommen)', //  duplicated 
   'Schliere, schlieren',  
   'schliddern, schlittern', 
   'Schliff',  // Schliff: 
   'Schlips (auf den S. treten)', //  duplicated 
   'schluchzen' ,  // schluchzen: 
   'Schlucker (armer)', //  duplicated 
   'Schlund',  // Schlund:  
   'schlüpfen', // schlüpfen: 
   'Schlüpfer',  // Schlüpfer: 
   'schlüpfrig', // schlüpfrig: 
   'schlurfen',  // schlurfen:  
   'Schmach', // Schmach:  
   'schmachten, anschmachten', // duplicated 
   'schmächtig', // schmächtig: 
   'schmählich',  // schmählich: 
   'schmatzen',  // schmatzen:
   'schmettern', // schmettern: 
   'schmiegen', // 
   'Schmiere stehen', // 
   'Schmiererei, schmieren, schmierig', // 
   'Schmierfink', // Schmierfink: 
   'Schminke', // Schminke:  
   'schmissig', // schmissig: 
   'schmollen',  // schmollen:
   'Schmonzette', // Schmonzette: 
   'schmoren' , // schmoren:  
   'schmökern', // schmökern: 
   'Schmuck, schmuck', // 
   'Schmuddel, -wetter, schmuddelig', // 
   'Schmunzeln, schmunzeln' , // 
   'Schmutzfink',  // Schmutzfink:  
   'Schnalle, schnallen', //  
   'Schnapsidee' ,  // Schnapsidee:  
   'schnarchen' ,  // schnarchen:  
   'schnarren',  // schnarren:  
   'schnattern',  // schnattern: 
   'schnauben', // schnauben: 
   'schnaufen',  // schnaufen: 
   'Schneid abkaufen',   // duplicated as "den Schneid abkaufen";   put as 'Schneid, Schneid abkaufen' if Schneid by itself found
   'schneidig',  // schneidig: 
   'Schneise',  // Schneise:   
   'schnieke',  // schnieke:  
   'schnippen',  // schnippen: 
   'schnippisch', // schnippisch:
   'schnöde',  // schnöde:  schnoede 
   'schnörkelig, Schnörkel', 
   'Schnösel',  // Schnösel:  Schnoesel
   'schnorren, anschnorren', // duplicated 
   'Schnulze',  // Schnulze:
   'schnuppern, erschnuppern',  // duplicated 
   'Schnur, schnüren', // 
   'Schnürchen (wie am S.)',  // duplicated
   'Schnürsenkeln',   // Schnürsenkeln:
   'schnurstracks', // schnurstracks: 
   'schnurz­pie­pe, schnurzegal', //    make duplicate if example of "schnurzegal found"
   'Schoppen',  // Schoppen: 
   'Schotter', // Schotter: 
   'schraffieren',  // schraffieren:
   'schrammen', // schrammen:  
   'schrappen',  // schrappen: 
   'Schraubstock', // Schraubstock:  
   'Schrebergarten', // Schrebergarten:  
   'Schrippe', // Schrippe:  
   'Schritt',  // Schritt:  
   'Schrotflinte', // Schrotflinte: 
   'Schrott, schrottreif',   
   'Schrubber, schrubben',    
   'schubsen',  // schubsen:  
   'schüchtern, verschüchtern',  // duplicated  
   'schummrig',  // schummrig: 
   'Schund',  // Schund: 
   'schunkeln', // schunkeln: 
   'Schuppen',  // Schuppen:   
   'schüren',  // schüren: 
   'schürfen, Schürfwunde', 
   'schurigeln', // schurigeln:         
   'Schürze',  // Schürze:  
   'Schuss (in S. sein)', //  duplicated 
   'Schüssel, Kloschüssel',  // duplicate 
   'schütten, aus-, ver-, zu-', //          
   'schütter',  // schütter:  
   'Schutzbefohlene',  // Schutzbefohlene:  
   'Schütze, Schützengraben',  
   'Schwaden', // Schwaden:  
   'schwafeln', // schwafeln
   'Schwall',  // Schwall: 
   'schwanen', // schwanen:  
   'schwängern, geschwängert',  // duplicated
   'Schwanz, S. einziehen/einkneifen',  
   'schwänzen',  // schwänzen:
   'Schwebebahn',  // Schwebebahn: 
   'schweifen, abschweifen',  // duplicated
   'schwelgen', // schwelgen: 
   'Schwenker', // Schwenker: 
   'Schwerenöter',  // Schwerenöter: 
   'schwirren', // schwirren: 
   'Schwitzkasten', // Schwitzkasten: 
   'schwül, Schwüle',  
   'schwülstig',  // schwülstig: 
   'seicht',  // seicht: 
   'Seidel', // Seidel:
   'Seil',  // Seil: 
   'Seilschaft',  // Seilschaft: 
   'sezieren',  // sezieren:
   'Sichtblende', // Sichtblende:  
   'sickern', // sickern: 
   'Siegel, versiegeln', // duplicated 
   'Sims',  //  Sims: 
   'Sippenhaft', // Sippenhaft: 
   'skandieren', // skandieren:  
   'Sore',  // Sore: 
   'soufflieren',  // soufflieren: 
   'Spalier',  // Spalier:  
   'Span, Späne', // 
   'Spanner', // Spanner:  
   'Spaten',  // Spaten:  
   'speckig', // speckig: 
   'Speichel',  // Speichel:  
   'speiübel', // speiübel: 
   'spendabel, spendable',
   'sperrangelweit',  // sperrangelweit:  
   'Sperrhaken',  // Sperrhaken:  
   'sperrig',  // sperrig:       
   'spicken',  // spicken:  
   'Spieß, spießen, aufspießen',  //  duplicated
   'Spind',  // Spind:
   'Splint',  // Splint:
   'spinnert',  // spinnert:
   'spitzfindig',  // spitzfindig:
   'spitzkriegen',  // spitzkriegen:  
   'Sprechmuschel',  // Sprechmuschel: 
   'spreizen', // spreizen: 
   'Sprenkel', // Sprenkel: 
   'Spreu vom Weizen trennen',  // 
   'Sprung (auf dem S.)',  //  duplicated  
   'Sprosse',  // Sprosse:  
   'Sprünge (auf die S. helfen)',  // duplicated
   'spülen; Spül -ung, -e, -stein, -bürste',  
   'Spund, Jungspund', // duplicated  
   'spuren',  // spuren: 
   'sputen', // sputen: 
   'Stadtstreicher', // Stadtstreicher:  
   'Staffage', // Staffage: 
   'staksen',  // staksen: 
   'stämmig',  // stämmig: 
   'Standpauke',  // Standpauke: 
   'Stange',  // Stange:  
   'Stapel, stapeln',  
   'stapfen, Fußstapfe',   // duplicated 
   'starren (vor Schmutz starren)', // duplicated (with "vor Schmutz starren") 
   'Statist', // Statist:  
   'Stativ',  // Stativ:  
   'statuieren', // statuieren:  
   'Staub (aus dem S. machen)', //  duplicated 
   'stauchen', // stauchen:  
   'Steckbrief', // Steckbrief:  
   'Stecknadel im Heuhaufen',  
   'Steg', // Steg: 
   'stibitzen', // stibitzen: 
//   'Stich, einen S. versetzen',   // revive later
   'Stiefel, stiefeln',  
   'stieren, anstieren',  // duplicated 
   'stöbern, aufstöbern',  // duplicated   
   'stochern',  // stochern:  
   'stöckeln, Stöckelschuh',  
   'stöhnen, aufstöhnen', //   duplicated 
   'stopfen, Stopfen',  
   'Stöpsel',   // Stöpsel: 
   'stolzieren', // stolzieren: 
   'strampeln',  // strampeln: 
   'Strang, Schienen-, Kabel-',  
   'Stränge (über die S. schlagen)',  // duplicated 
   'Strauch, Gesträuch',  // duplicated 
   'Strebe', // Strebe: 
   'strecken',  //strecken:
   'Streich, einen Streich spielen', // duplicated
   'Strich (auf den S. gehen)', //  duplicated 
   'Strich (gegen den S. gehen)', // duplicated
   'Strick (einen S. drehen)', // duplicated 
   'Strickjacke', // Strickjacke: 
   'Striemen',  // Striemen: 
   'Strippe',  // Strippe:  
   'stromern',  // stromern: 
   'strubbelig', // strubbelig: 
   'Strudel',  // Strudel: 
   'strunzdämlich',   // strunzdämlich:  
   'Stuck', // Stuck: 
   'Stulle',  // Stulle: 
	'stülpen', // stülpen:  
   'Stummel',  // Stummel: 
   'Stümper, stümperhaft', // 
   'Sturzbach',  // Sturzbach:
   'stutzig', // stutzig: 
   'süffisant',  // süffisant: 
   'summen, aufsummen', //  duplicated  
   'Sündenbock', // Sündenbock: 
   'Sündenpfuhl', // Sündenpfuhl: 
   'surren',   // surren:  
   ];

export default s;      
