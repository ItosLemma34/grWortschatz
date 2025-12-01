const v = [
   'Ventil',  // Ventil: 
   'veralbern', // veralbern:  *stopped general check-up;  DWDS not showin
   'Verband' ,  // Verband: 
   'verbeulen, zerbeulen, Beule, beulen', // triplicated
   'verblassen', // verblassen: 
   'verbocken' , // verbocken: 
   'verbohrt',  // verbohrt: 
   'verdampfen',  // verdampfen: 
   'Verdeck',  // Verdeck: 
   'verdenken' ,  // verdenken: 
   'verdonnern' , // verdonnern: 
   'verdruckst',  //verdruckst: 
   'verdünnisieren', // verdünnisieren: 
   'verdunsten',  // verdunsten: 
   'verdutzt',  // verdutzt: 
   'verflachen', // verflachen:  
   'verfilzen' ,  // verfilzen:  
  // 'verflixt',  open with more examples
   'vergackeiern',  // vergackeiern:  
   'vergaloppieren', // vergaloppieren:  
   'vergeigen', //  vergeigen: 
   'vergewissern', //  vergewissern:  
   'ver­grau­len, Vergraulung', // 
   'vergreifen', // vergreifen:  
   'verhageln' ,  // verhageln:  
   'verhallen' ,  // verhallen: 
   'verheben',  // verheben:  
   'verheddern',  // verheddern: 
   'verheult, ausheulen, heulen',  // triplicated
   'verhexen',   // verhexen: 
   'verhökern',  // verhökern: 
   'verhunzen',  // verhunzen: 
   'verkatert, Kater',  //  duplicated 
   'verkneifen, verkniffen',  // 
   'verknicken',  // verknicken:
   'verknittern, zerknittern',  // duplicated 
   'verknoten',  // verknoten:  
   'verkommen',  // verkommen: 
   'verkorkst',   // verkorkst:  
   'verköstigen, beköstigen',  // duplicated  with beköstigen if beköstigen ever appears   
   'verkrampfen',  // verkrampfen:
   'verkriechen',  // verkriechen:  
   'verkrümeln',  // verkrümeln:  
   'vermaledeit', // vermaledeit: 
   'vermasseln',  // vermasseln: 
   'verminen',  // verminen: 
   'vermodern', // vermodern: 
   'verpetzen', // verpetzen:  
   'verpfeifen',  // verpfeifen: 
   'verpfuschen, verpfuscht',
   'verplappern', // verplappern:   
   'verplempern',  // verplempern: 
   'verpönen, verpönt', 
   'verputzen',  // verputzen: 
   'verquirlen', // verquirlen 
   'verrammeln',  // verrammeln:  
   'verrecken',  // verrecken:  
   'verrenken',  // verrenken:  
   'verrennen',  // verrennen:  
   'verrucht',  // verrucht:  
   'verrufen', // verrufen:  
   'verrußt, Ruß', // duplicated 
   'verrutschen',  // verrutschen:  
   'versacken',  // versacken:  
   'versauen',   // versauen:  
   'versaufen', // versaufen: 
   'verschanzen',  // verschanzen:  
   'verscharren',    // verscharren: 
   'verschaukeln',  // verschaukeln: 
   'verscherbeln', // verscherbeln: 
   'verscherzen',  // verscherzen:  
   'verschieben',  // verschieben:   check for other entries
   'verschimmeln',  // verschimmeln:  
   'Verschlag',   // Verschlag:  
   'verschleißen', // verschleißen:  check for other entries
   'verschmieren', // verschmieren: 
   'verschmitzt',  // verschmitzt:
   'verschnörkelt, verschnörkeln', //  check for other entries
   'verschnupft',  // verschnupft:  
   'verschnüren',  // verschnüren:  
   'verschollen', // verschollen:  
   'verschorft, verschorfen', // 
   'verschränken, verschränkt, Verschränkung',  //   
   'verschrumpeln',  // verschrumpeln: 
   'verschüchtern, schüchtern',  //duplicated
   'verschwägert, verschwägern',
   'verschwimmen',  // verschwimmen: 
   'versehen',  // versehen: 
   'versehentlich',  // versehentlich:  
//   'versehren',   need more past examples
   'versengen',  // versengen:  
   'verseuchen', // verseuchen:
   'versickern',  // versickern: 
   'versieben',  // versieben:  check for other entries
   'versiegeln, Siegel', // duplicated 
   'versiegen',   // versiegen: 
   'versifft',  // versifft: 
   'versprengen', // versprengen:   
   'verstauen',  // verstauen:  
   'versteifen', //  check for other entries  
   'Verstellung',  // Verstellung:   combine with verstellen if verstellen found
   'verstockt' ,  // verstockt:  
   'verstohlen',   // verstohlen:  
   'verstümmeln, Verstümmelung', // 
   'vertilgen',  // vertilgen: 
   'vertrackt',   // vertrackt:     combine with Vertrackt if found
   'vertreten (sich die Beine)', //  duplicated   
   'Vertriebsweg', // Vertriebsweg:  
   'vertrödeln',  // vertrödeln 
   'vertun, vertan',  // 
   'verunfallen',  // verunfallen:
   'verunglimpfen',  // verunglimpfen:  
   'verunzieren',  // verunzieren:  
   'verwackeln, wackeln', // duplicated
   'Verwahrlosung, verwahrlosen',  
   'verwaisen, verwaist',   
   'verweben, weben', // duplicated
   'verwegen',  // verwegen:  
   'verwesen, Verwesung', //  
   'verwetten',  // verwetten: 
   'verwinkelt',  // verwinkelt:
   'verwittern', // verwittern:  
   'verwuscheln, verwuschelt',  
   'verwüsten',  // verwüsten:
   'verzapfen',  // verzapfen:
   'verzieren', // verzieren:  
   'verzückt', // verzückt:  
   'vierschrötig', // vierschrötig:   
   'vögeln',    // vögeln: 
   'vollsaugen', // vollsaugen:  
   'Vollwaise', // Vollwaise:  
   'von der Fahne gehen', //  duplicated 
   'von der Schippe springen',  // duplicated
   'vor die Hunde gehen',  // duplicated 
   'vor Schmutz starren',  // duplicated with "starren"
   'vorbauen',  // vorbauen:
   'vorführen',  // vorführen:  
   'vorgaukeln',  // vorgaukeln:  
   'Vorgeplänkel, Geplänkel',  // duplicated 
   'Vorhängeschloss',  // Vorhängeschloss: 
   'vorheucheln, heucheln',  // duplicate 
   'vorknöpfen',  // vorknöpfen:    
   'vorliebnehmen',  // vorliebnehmen: 
   'Vornehm/Nobel geht die Welt zugrunde', // duplicated 
   'Vorsatz, vorsätzlich, Vorsätzlichkeit', 
   'vorsintflutlich',  // vorsintflutlich: 
];

export default v;    