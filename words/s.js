const s = [
   'sabbern',  // sabbern:  
   'Sägemehl', // Sägemehl: 
   'sägen, aus-, auf', 
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
   'schaben, ab-',  
   'Schablone',  // Schablone:
   'Schachtel',  // Schachtel:   
   'schade (zu schade sein)',   //duplicated 
   'Schäferstündchen', // Schäferstündchen:
   'schälen', // schälen:    
   'Schank',  // Schank: 
   'Schar',  // Schar:  
   'Scharfmacher', // Scharfmacher:
   'Scharmützel',  // Scharmützel:   
   'schassen',   // schassen:  
   'Schauder, schaudern', 
   'schauern, erschauern',  // duplicated 
   'schaufeln, Schaufel',  // 
   'Schaukasten', // Schaukasten:   
   'schaukeln, auf-',     
   'Scheffel (Licht unter den S.)', // duplicated
   'scheiteln, Scheitel', // 
   'Scheiterhaufen',  // Scheiterhaufen: 
   'schellen',  // schellen: 
   'Schemel',  // Schemel: 
   'scheppern',  // scheppern: 
   'Scherbe',  // Scherbe:   
   'Schere, scheren, aus-',  
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
   'Schinken',  // Schinken:
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
   'schleichen, an-, heran-, nach-, herum-, hinaus-', 
   'Schleife',  // Schleife:
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
   'Schmuck, schmuck',  
   'Schmuddel, -wetter, schmuddelig',  
   'Schmunzeln, schmunzeln',  
   'Schmutzfink',  // Schmutzfink:  
   'Schnalle, schnallen',   
   'Schnapsidee',  // Schnapsidee:  
   'schnarchen',  // schnarchen:  
   'schnarren',  // schnarren:  
   'schnattern',  // schnattern: 
   'schnauben', // schnauben: 
   'schnaufen',  // schnaufen: 
   'Schneid abkaufen',   
   'schneidig',  // schneidig: 
   'Schneise',  // Schneise:   
   'schnieke',  // schnieke: 
   'schnippeln', // schnippeln: 
   'schnippen',  // schnippen: 
   'schnippisch', // schnippisch:
   'schnöde',  // schnöde:   
   'schnörkelig, Schnörkel', 
   'Schnösel',  // Schnösel:  
   'schnorren, an-', 
   'Schnulze',  // Schnulze:
   'schnuppern, erschnuppern',  // duplicated 
   'Schnur, schnüren', // 
   'Schnürchen (wie am S.)',  // duplicated
   'Schnürsenkeln',   // Schnürsenkeln:
   'schnurstracks', // schnurstracks: 
   'schnurz­pie­pe, schnurzegal', //    make duplicate if example of "schnurzegal found"
   'Schoppen',  // Schoppen: 
   'Schott, S. dicht machen',  
   'Schotter', // Schotter: 
   'schraffieren',  // schraffieren:
   'schrammen', // schrammen: 
   'Schränker', // Schränker: 
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
   'Schutt',  // Schutt:
   'schütten, aus-, ver-, zu-',           
   'schütter',  // schütter:  
   'Schutzbefohlene',  // Schutzbefohlene:  
   'Schütze, Schützengraben',
   'schwächeln',  // schwächeln:  
   'Schwaden', // Schwaden:  
   'schwafeln', // schwafeln
   'Schwall',  // Schwall: 
   'schwanen', // schwanen:  
   'schwängern, geschwängert',  // duplicated
   'Schwanz, S. einziehen/einkneifen',  
   'schwänzen',  // schwänzen:
   'Schwarte',  // Schwarte:
   'Schwebebahn',  // Schwebebahn: 
   'schweifen, ab-', 
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
   'Siegel, siegeln, ver-', 
   'Sims',  //  Sims: 
   'Sippenhaft', // Sippenhaft: 
   'skandieren', // skandieren:  
   'Sore',  // Sore: 
   'soufflieren',  // soufflieren: 
   'Spalier',  // Spalier:  
   'Span, Späne', // 
   'Spange',  //  Spange:
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
   'Ständchen',  // Ständchen:
   'Standesdünkel, Dünkel', 
   'Standpauke',  // Standpauke: 
   'Stange',  // Stange:  
   'Stapel, stapeln, stapelweise',  
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
   'Stich, einen S. versetzen',   
   'Stiefel, stiefeln',  
   'stieren, an-',  
   'stöbern, auf-',    
   'stochern',  // stochern:  
   'stöckeln, Stöckelschuh',  
   'stöhnen, auf-',  
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
   'Suff',  // Suff:
   'süffisant',  // süffisant: 
   'summen, auf-', 
   'Sumpf',  // Sumpf:    
   'Sündenbock', // Sündenbock: 
   'Sündenpfuhl', // Sündenpfuhl: 
   'surren',   // surren:  
   ];

export default s;      
