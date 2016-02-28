var allEvents = {
  allEvents: [],
  allVenues: [
    {venuePage:"Aaniwalli",
     venueName: "Ääniwalli Club",
     venueAddress: "Pälkäneentie 13"
    },
/*
    {venuePage:"thecircushelsinki",
     venueName: "The Circus",
     venueAddress: "Salomonkatu 1-3"
    },

    {venuePage:"Elokuvateatteri.Orion",
     venueName: "Orion Cinema",
     venueAddress: "Eerikinkatu 15"
    },

    {venuePage:"barloose",
     venueName: "Bar Loose",
     venueAddress: "Annankatu 21"
    },
    
    {venuePage:"185536111518913",
     venueName: "Putte's Bar & Pizza",
     venueAddress: "Kalevankatu 6"
    },
*/

    {venuePage:"goethe.suomi",
     venueName:"Goethe-Institut",
     venueAddress:"Salomonkatu 5 B"
    },

    {venuePage:"siltanenbar",
     venueName:"Siltanen",
     venueAddress:"Hämeentie 13 B"
    },

    {venuePage:"cafemascot",
     venueName: "Cafe Mascot",
     venueAddress: "Neljäs linja 2"
    },

    {venuePage:"docpoint",
     venueName: "DocPoint - Helsinki Documentary Film Festival",
     venueAddress: "Helsinki"
    },

    {venuePage:"mbarhelsinki",
     venueName: "mbar",
     venueAddress: "Mannerheimintie 22-24"
    },

    {venuePage:"Kokojazzclub",
     venueName: "Koko Jazz Club",
     venueAddress: "Hämeentie 3"
    },

    {venuePage:"laiturihelsinki",
     venueName: "Luituri",
     venueAddress: "Narinkka 2"
    },

    {venuePage:"62180036631",
     venueName: "Oksasenkatu 11",
     venueAddress: "Oksasenkatu 11"
    },

    {venuePage:"teatteriwhs",
     venueName: "WHS Teatteri Union",
     venueAddress: "Siltavuorenranta"
    },

    {venuePage:"VuotaloTiedotus",
     venueName: "Vuotalo",
     venueAddress: "Mosaiikkitori 2"
    },

    {venuePage:"113677588801661",
     venueName: "Oranssi Ry",
     venueAddress: "Kaasutehtaankatu 1, building 11"
    },

    {venuePage:"114962855198875",
     venueName: "Arkadia International Bookshop",
     venueAddress: "Nervanderinkatu 11"
    },

    {venuePage:"Korjaamo",
     venueName: "Korjaamo",
     venueAddress: "Töölönkatu 51"
    },

    {venuePage:"taidehalli",
     venueName: "Taidehalli Art Gallery",
     venueAddress: "Nervanderinkatu 3"
    },

    {venuePage:"Sibatapahtumat",
     venueName: "Sibelius Academy",
     venueAddress: "Helsinki"
    },

    {venuePage:"BrewDogHel",
     venueName: "BrewDog Helsinki Bar",
     venueAddress: "Tarkkampujankatu 20"
    },

    {venuePage:"tavastia",
     venueName: "Tavastia Club",
     venueAddress: "Urho Kekkosen katu 4-6"
    },

    {venuePage:"KiasmaMuseum",
     venueName: "Kiasma Museum",
     venueAddress: "Mannerheiminaukio 2"
    },

    {venuePage:"semifinalhelsinki",
     venueName: "Semifinal",
     venueAddress: "Postikuja 2"
    },

    {venuePage:"Sanomatalo2012",
     venueName: "Sanomatalo",
     venueAddress: "Urho Kekkosen katu 6"
    },

    {venuePage:"129430223795105",
     venueName: "Kaapelitehdas",
     venueAddress: "Tallberginkatu 1"
    },

//From here on - generative list full of strage places

  {
    venuePage: "439744599555602",
    venueName: "Helsingin Jäähalli",
    venueAddress: ""
  },
  {
    venuePage: "21709195960",
    venueName: "Kiasma",
    venueAddress: "Mannerheiminaukio 2"
  },
  {
    venuePage: "109595459060079",
    venueName: "Helsinki",
    venueAddress: ""
  },
  {
    venuePage: "126658464044674",
    venueName: "Helsinki Central railway station",
    venueAddress: "Asema-aukio"
  },
  {
    venuePage: "195334740500288",
    venueName: "Sokos Hotel Vaakuna",
    venueAddress: "Asema-aukio 2"
  },
  {
    venuePage: "133471616688076",
    venueName: "Musiikkitalo",
    venueAddress: "Mannerheimintie 13a"
  },
  {
    venuePage: "157890094412919",
    venueName: "Lasipalatsi",
    venueAddress: "Mannerheimintie 22-24"
  },
  {
    venuePage: "196450000415734",
    venueName: "Centrum Helsinki",
    venueAddress: ""
  },
  {
    venuePage: "314727251926432",
    venueName: "Finnkino Tennispalatsi",
    venueAddress: "Salomonkatu 15"
  },
  {
    venuePage: "275546769137",
    venueName: "The Circus",
    venueAddress: "Salomonkatu 1-3, Narinkkatori"
  },
  {
    venuePage: "117379624945704",
    venueName: "Motivus",
    venueAddress: "Motivus Center HKI: Simonkatu 9"
  },
  {
    venuePage: "155573717799400",
    venueName: "Sokos Hotel Torni",
    venueAddress: "Yrjönkatu 26"
  },
  {
    venuePage: "182505265200391",
    venueName: "Hard Rock Cafe Helsinki",
    venueAddress: "Aleksanterinkatu 21"
  },
  {
    venuePage: "1641837949408012",
    venueName: "G Lounge - Skybar&club",
    venueAddress: "Simonkatu 8"
  },
  {
    venuePage: "749351795184277",
    venueName: "Naughty BRGR",
    venueAddress: "Lönnrotinkatu 13"
  },
  {
    venuePage: "191503754226301",
    venueName: "Virgin Oil Co. Helsinki",
    venueAddress: "Kaivopiha Mannerheimintie 5"
  },
  {
    venuePage: "126817834059757",
    venueName: "Tilausteatteri Bio Rex",
    venueAddress: "Mannerheimintie 22-24"
  },

  {
    venuePage: "106583576043864",
    venueName: "Töölö",
    venueAddress: ""
  },
  {
    venuePage: "226817820682229",
    venueName: "Helsinki Senate Square",
    venueAddress: "Senaatintori"
  },
  {
    venuePage: "323810370980443",
    venueName: "Milliklubi Bar & Disco",
    venueAddress: "Kaivokatu 12"
  },
  {
    venuePage: "107706732591923",
    venueName: "Kamppi",
    venueAddress: ""
  },
  {
    venuePage: "536909296363656",
    venueName: "Rautatieasema Jarnvagsstation",
    venueAddress: ""
  },
  {
    venuePage: "198160460202260",
    venueName: "Loiste*",
    venueAddress: ""
  },
  {
    venuePage: "156651897731298",
    venueName: "Finnkino Kinopalatsi",
    venueAddress: "Kaisaniemenkatu 2"
  },
  {
    venuePage: "300665400020310",
    venueName: "Viikinkiravintola Harald",
    venueAddress: "Aleksanterinkatu 21, Citykäytävä 2. kerros"
  },
  {
    venuePage: "654710421310311",
    venueName: "New Forum, Forum Helsinki",
    venueAddress: ""
  },
  {
    venuePage: "124410517640888",
    venueName: "Helsingin tuomiokirkkoseurakunta",
    venueAddress: "Bulevardi 16 B, PL 168"
  },
  {
    venuePage: "946470902046589",
    venueName: "M/S Baltic Queen",
    venueAddress: "Tyynenmerenkatu 8"
  },
  {
    venuePage: "142254632506564",
    venueName: "Pikkuparlamentti",
    venueAddress: "Arkadiankatu 3"
  },

  {
    venuePage: "187966484575774",
    venueName: "Ravintola Vltava",
    venueAddress: "Elielinaukio 2"
  },
  {
    venuePage: "146349548717486",
    venueName: "Bravuria",
    venueAddress: "Salomonkatu 1"
  },
  {
    venuePage: "187346501299571",
    venueName: "Helsingin Keskuspuisto",
    venueAddress: ""
  },
  {
    venuePage: "140724956000634",
    venueName: "Scandic Simonkenttä",
    venueAddress: "Simonkatu 9"
  },
  {
    venuePage: "102429389833496",
    venueName: "Memphis Kamppi",
    venueAddress: "Urho Kekkosen katu 1 A 40"
  },
  {
    venuePage: "204258166256766",
    venueName: "Mann's Street",
    venueAddress: "Mannerheimintie 12 A"
  },
  {
    venuePage: "6804582571",
    venueName: "Henry's Pub Helsinki",
    venueAddress: "Simonkatu 3"
  },
  {
    venuePage: "884537268269627",
    venueName: "Iloinen Katupoika",
    venueAddress: "Saarisen piha, Kaivokatu 8"
  },
  {
    venuePage: "518663144872022",
    venueName: "O'Learys Forum Helsinki",
    venueAddress: "Yrjönkatu 27"
  },
  {
    venuePage: "341910682520258",
    venueName: "KIILA Food & Bar",
    venueAddress: "Kalevankatu 1"
  },
  {
    venuePage: "267989986633523",
    venueName: "Mbar Terrace",
    venueAddress: "Mannerheimintie 22-24"
  },
  {
    venuePage: "271784562937058",
    venueName: "Kauppakeskus Kamppi",
    venueAddress: "Urho Kekkosen katu 1"
  },
  {
    venuePage: "458386517524007",
    venueName: "Helsinki Train Station",
    venueAddress: ""
  },
  {
    venuePage: "336451983289",
    venueName: "Flow Festival Helsinki",
    venueAddress: "Parrukatu"
  },
  {
    venuePage: "266310676734392",
    venueName: "Sokos Hotelli Presidentti",
    venueAddress: "Eteläinen Rautatiekatu 4"
  },
  {
    venuePage: "1444544992473495",
    venueName: "Onnibus",
    venueAddress: "Mannerheimintie / Kiasma"
  },
  {
    venuePage: "164117987009431",
    venueName: "Sokos Helsinki",
    venueAddress: "Mannerheimintie 9"
  },
  {
    venuePage: "852154564869151",
    venueName: "Why join the navy when you can be a pirate",
    venueAddress: "Annankatu 28"
  },
  {
    venuePage: "197558136953138",
    venueName: "Dubliner",
    venueAddress: "Mannerheimintie 5"
  },
  {
    venuePage: "110418265677496",
    venueName: "Mannerheimintie",
    venueAddress: ""
  },
  {
    venuePage: "243093422533224",
    venueName: "Suomenlinna Island",
    venueAddress: ""
  },
  {
    venuePage: "202992233069354",
    venueName: "Pressa",
    venueAddress: "Eteläinen rautatiekatu 4"
  },
  {
    venuePage: "984503344915280",
    venueName: "Salon Reza",
    venueAddress: "Kauppakeskus Itis"
  },
  {
    venuePage: "413187095359592",
    venueName: "Helsinki Music Hall",
    venueAddress: ""
  },
  {
    venuePage: "562646470482457",
    venueName: "Töölönlahti",
    venueAddress: ""
  },
  {
    venuePage: "134768486556720",
    venueName: "City-Center",
    venueAddress: "Kaivokatu 8"
  },
  {
    venuePage: "1582034422051375",
    venueName: "HAM",
    venueAddress: "Tennispalatsi"
  },
  {
    venuePage: "138241322866541",
    venueName: "Forum (shopping centre)",
    venueAddress: "Mannerheimintie 14–20"
  },
  {
    venuePage: "162269973810740",
    venueName: "Colorado Bar & Grill Helsinki",
    venueAddress: "Simonkatu 9"
  },
  {
    venuePage: "640836726007060",
    venueName: "Pastor",
    venueAddress: "Erottajakatu 4"
  },
  {
    venuePage: "167338563353503",
    venueName: "Club Vatican",
    venueAddress: "Simonkatu 6"
  },
  {
    venuePage: "205250632842827",
    venueName: "Hotelli Seurahuone Helsinki",
    venueAddress: "Kaivokatu 12"
  },
  {
    venuePage: "211065328915526",
    venueName: "Kauppakeskus Forum",
    venueAddress: "Mannerheimintie 14-20"
  },
  {
    venuePage: "194075560625509",
    venueName: "Ravintola Zetor",
    venueAddress: "Mannerheimintie 3-5"
  },
  {
    venuePage: "139280192934478",
    venueName: "Café Lasipalatsi",
    venueAddress: "Mannerheimintie 22 - 24"
  },
  {
    venuePage: "155579541171026",
    venueName: "Kaarna Baari & Keittiö",
    venueAddress: "Mannerheimintie 20"
  },
  {
    venuePage: "299957050078018",
    venueName: "Lasipalatsin Laituri",
    venueAddress: "Mannerheimintie 22-24"
  },
  {
    venuePage: "194554417244525",
    venueName: "Elielinaukio",
    venueAddress: "Elielinaukio"
  },
  {
    venuePage: "1009541415725051",
    venueName: "Postitalo",
    venueAddress: "Postikatu 1"
  },
  {
    venuePage: "7242328708",
    venueName: "mbar",
    venueAddress: "Mannerheimintie 22-24"
  },
  {
    venuePage: "185981091448095",
    venueName: "Camionette - Café et Crêpes",
    venueAddress: "Liikkuva"
  },
  {
    venuePage: "163828617011833",
    venueName: "Ravintola Lasipalatsi",
    venueAddress: "Mannerheimintie 22-24"
  },
  {
    venuePage: "293923650765303",
    venueName: "Eatos Mexican Diner",
    venueAddress: "Töölönlahdenkatu 3"
  },
  {
    venuePage: "113356402018117",
    venueName: "Kirjasto 10",
    venueAddress: "Elielinaukio 2 G"
  },
  {
    venuePage: "136587939712245",
    venueName: "Market Square, Helsinki",
    venueAddress: "Kauppatori"
  },
  {
    venuePage: "1490135471208769",
    venueName: "Steam Hellsinki",
    venueAddress: "Olavinkatu 1"
  },
  {
    venuePage: "248306052898",
    venueName: "Ateneum",
    venueAddress: "Kaivokatu 2"
  },
  {
    venuePage: "573049576041530",
    venueName: "Painobaari",
    venueAddress: "Postikuja 2"
  },
  {
    venuePage: "110548665662729",
    venueName: "Kamppi Center",
    venueAddress: "Urho Kekkosen katu 1"
  },
  {
    venuePage: "108604175838541",
    venueName: "Esplanadi",
    venueAddress: ""
  },
  {
    venuePage: "134940536579037",
    venueName: "Narinkkatori",
    venueAddress: "Narinkka 1"
  },
  {
    venuePage: "102622579825544",
    venueName: "Casa Largo",
    venueAddress: "Asema-Aukio 2"
  },
  {
    venuePage: "218155391536345",
    venueName: "Apollo Live Club",
    venueAddress: "Mannerheimintie 16"
  },
  {
    venuePage: "202433666063",
    venueName: "Teerenpeli Helsinki",
    venueAddress: "Olavinkatu 2"
  },
  {
    venuePage: "216896564988862",
    venueName: "La Famiglia",
    venueAddress: "Keskuskatu 3"
  },
  {
    venuePage: "202387489792040",
    venueName: "Sports Academy Helsinki",
    venueAddress: "Kaivokatu 8"
  },
  

  {
    venuePage: "149491241893263",
    venueName: "Salakauppa",
    venueAddress: "Postikatu 1"
  },
  {
    venuePage: "1608105882738693",
    venueName: "Kissakahvila Helsinki / Cat Cafe Helsinki",
    venueAddress: "Fredrikinkatu 55"
  },
  {
    venuePage: "208989569124918",
    venueName: "Praha",
    venueAddress: "Mannerheimintie 5"
  },
  {
    venuePage: "69827402802",
    venueName: "THE TIGER",
    venueAddress: "Urho Kekkosenkatu 1"
  },
  {
    venuePage: "320107284696906",
    venueName: "Old Hat",
    venueAddress: "Mannerheimintie 3"
  },
  {
    venuePage: "116321975046809",
    venueName: "TAVASTIA-klubi",
    venueAddress: "Urho Kekkosen katu 4-6"
  },
  {
    venuePage: "138829072812550",
    venueName: "Helsinki Cathedral",
    venueAddress: "Unionsgatan 29, 00170 Helsingfors"
  },
  {
    venuePage: "862263723798402",
    venueName: "OnniBus.com",
    venueAddress: "Mannerheimintie / Kiasma"
  },
  {
    venuePage: "1525923221051346",
    venueName: "EA & VPD Pop-Up Pelikauppa",
    venueAddress: "Mannerheimintie 22-24"
  },
  {
    venuePage: "113322068703469",
    venueName: "Kansallisteatteri",
    venueAddress: "Läntinen Teatterikuja 1"
  },
  {
    venuePage: "154220884751904",
    venueName: "Koirien geenitutkimus",
    venueAddress: ""
  },
  {
    venuePage: "114275915294162",
    venueName: "M/S Silja Serenade",
    venueAddress: ""
  },
  {
    venuePage: "147269155335714",
    venueName: "Uusi ylioppilastalo",
    venueAddress: "Mannerheimintie 5 A"
  },
  {
    venuePage: "201571993334781",
    venueName: "Maxime",
    venueAddress: "Urho Kekkosen katu 1 A, 6. krs."
  },
  {
    venuePage: "143539872446934",
    venueName: "Forum La Grill",
    venueAddress: ""
  },
  {
    venuePage: "349159461861006",
    venueName: "Leonardo Bar&Ristorante",
    venueAddress: "Kaivokatu 6"
  },
  {
    venuePage: "705216329546571",
    venueName: "SATS Eliel",
    venueAddress: "Elielinaukio 3"
  },
  {
    venuePage: "823407647711143",
    venueName: "Manhattan Steak House",
    venueAddress: "Eteläesplanadi 24"
  },
  {
    venuePage: "330178537064387",
    venueName: "Kamppi Chapel Of Silence",
    venueAddress: "Simonkatu 7"
  },
  {
    venuePage: "107287799345953",
    venueName: "Länsiterminaali",
    venueAddress: "Tyynenmerenkatu 8"
  },
  {
    venuePage: "181998645178282",
    venueName: "Sanomatalo - Veripalvelu",
    venueAddress: "Töölönlahdenkatu 2"
  },
  {
    venuePage: "103684678318",
    venueName: "Aussie Bar",
    venueAddress: "Salomonkatu 5"
  },
  {
    venuePage: "748320658614324",
    venueName: "Hakasalmen huvila",
    venueAddress: "Mannerheimintie 13b"
  },
  {
    venuePage: "165064420251377",
    venueName: "Sanomatalo",
    venueAddress: "Töölönlahdenkatu 2"
  },
  {
    venuePage: "1014379501938786",
    venueName: "Exit Room Helsinki",
    venueAddress: "Eurantie 2"
  },
  {
    venuePage: "653000368071366",
    venueName: "Woolshed Bar & Kitchen",
    venueAddress: "Töölönlahdenkatu 3 B 1"
  },
  {
    venuePage: "274260609287761",
    venueName: "Habibi Ravintola",
    venueAddress: "Malminrinne 6 (Sähkötalo)"
  },
  {
    venuePage: "214766615201403",
    venueName: "Ravintola Teatteri",
    venueAddress: "Pohjoisesplanadi 2"
  },
  {
    venuePage: "549569398456187",
    venueName: "Starbucks Helsinki",
    venueAddress: "Esplanadi 39"
  },
  {
    venuePage: "141399059297256",
    venueName: "Allegro Train Helsinki-St. Petersburg",
    venueAddress: ""
  },
  {
    venuePage: "491632330874754",
    venueName: "Brasserie Le Havre",
    venueAddress: "Kaivokatu 12"
  },
  {
    venuePage: "143101622373097",
    venueName: "Tennispalatsi",
    venueAddress: "Salomonkatu 15"
  },
  {
    venuePage: "207613389258512",
    venueName: "Kamppi - shopping center",
    venueAddress: "Urho Kekkosen katu 1"
  },
  {
    venuePage: "287159184684736",
    venueName: "Boulevard Social",
    venueAddress: "Bulevardi 6"
  },
  {
    venuePage: "224485250904414",
    venueName: "Port of Helsinki",
    venueAddress: ""
  },
  {
    venuePage: "1402265633346628",
    venueName: "K-supermarket Postitalo",
    venueAddress: "Elielinaukio 2 G"
  },
  {
    venuePage: "358294160903505",
    venueName: "Pub Ikkuna",
    venueAddress: "Salomonkatu 4"
  },
  {
    venuePage: "412908228804220",
    venueName: "Teatteri Forum",
    venueAddress: "Yrjönkatu 31"
  },
  {
    venuePage: "333074230037043",
    venueName: "Ravintola MorriSon's",
    venueAddress: "Keskuskatu 7"
  },
  {
    venuePage: "149667585166879",
    venueName: "Baana",
    venueAddress: ""
  },
  {
    venuePage: "558782394152783",
    venueName: "Beanie",
    venueAddress: "Urho Kekkosen katu 1"
  },
  {
    venuePage: "188374857856669",
    venueName: "Bar Loose",
    venueAddress: "Annankatu 21"
  },
  {
    venuePage: "252698586593",
    venueName: "Bar Base",
    venueAddress: "Kalevankatu 3"
  },
  {
    venuePage: "538370766186429",
    venueName: "Willensauna, Kansallisteatteri",
    venueAddress: "Läntinen teatterikuja 1"
  },
  {
    venuePage: "215998235260346",
    venueName: "Burger King Rautatieasema",
    venueAddress: "Kaivokatu1"
  },

  {
    venuePage: "392436894212756",
    venueName: "Radisson Blu Royal Helsinki",
    venueAddress: "Runeberginkatu 2"
  },
  {
    venuePage: "1038571636176208",
    venueName: "Secret Spot Helsinki",
    venueAddress: "Pohjoinen Rautatiekatu 15"
  },
  {
    venuePage: "246585515355815",
    venueName: "Ylioppilasteatteri",
    venueAddress: "Aleksanterinkatu 23"
  },
  {
    venuePage: "269515813086909",
    venueName: "Namu",
    venueAddress: "Kaivokatu 6"
  },
  {
    venuePage: "198951926796359",
    venueName: "Ooster Bar",
    venueAddress: "Elielinaukio 3"
  },
  {
    venuePage: "209728039043086",
    venueName: "Stockmann",
    venueAddress: "Aleksanterinkatu 52"
  },
  {
    venuePage: "369193726533480",
    venueName: "Foto Cafe Postitalo",
    venueAddress: "Mannerheiminaukio 1"
  },
  {
    venuePage: "259549280807007",
    venueName: "Checkpoint Helsinki",
    venueAddress: ""
  },
  {
    venuePage: "180001335528226",
    venueName: "Holiday Inn Helsinki City Centre",
    venueAddress: "Elielinaukio 5"
  },
  {
    venuePage: "375706939159827",
    venueName: "Inaruwa, Sunsari, Nepal",
    venueAddress: ""
  },
  {
    venuePage: "156278107761346",
    venueName: "Vanha ylioppilastalo",
    venueAddress: "Mannerheimintie 3"
  },
  {
    venuePage: "371210692904005",
    venueName: "Patrona",
    venueAddress: "Annankatu 20"
  },
  {
    venuePage: "179880572099924",
    venueName: "McDonald's Helsinki Sokos",
    venueAddress: "Asema-aukio 2"
  },
  {
    venuePage: "682985315105615",
    venueName: "Sinne Helsinki",
    venueAddress: "Eerikinkatu 2"
  },
  {
    venuePage: "166226726767212",
    venueName: "Coffee House",
    venueAddress: "Mikonkatu 9"
  },
  {
    venuePage: "269910624154",
    venueName: "Luonnontieteellinen museo",
    venueAddress: "Pohjoinen Rautatiekatu 13"
  },
  {
    venuePage: "134808179886623",
    venueName: "Parliament House, Helsinki",
    venueAddress: "Mannerheimintie 30, 00100 Helsinki"
  },
  {
    venuePage: "259614660847240",
    venueName: "Davinci Ristorante",
    venueAddress: "Mannerheimintie 22-24"
  },
  {
    venuePage: "297889040296445",
    venueName: "Tallink Star",
    venueAddress: ""
  },
  {
    venuePage: "168663706522290",
    venueName: "Kitty's Public House",
    venueAddress: "Keskuskatu 6"
  },
  {
    venuePage: "1527411440902553",
    venueName: "Marks and Spencer",
    venueAddress: "Asema-aukio 2 C"
  },
  {
    venuePage: "307578006004408",
    venueName: "Club Capital",
    venueAddress: "Fredrikinkatu 51"
  },
  {
    venuePage: "400753563456811",
    venueName: "Palma tapas way of life",
    venueAddress: "Lönnrötinkatu 9"
  },
  {
    venuePage: "330251400439107",
    venueName: "Ravintola Loisteen Terassi",
    venueAddress: ""
  },
  {
    venuePage: "167289596662487",
    venueName: "Fazer Café Forum",
    venueAddress: "Mannerheimintie 20"
  },
  {
    venuePage: "202817583070353",
    venueName: "Viking Line M/S Mariella",
    venueAddress: ""
  },
  {
    venuePage: "75343679462",
    venueName: "Lady Moon",
    venueAddress: "Kaivokatu 12"
  },
  {
    venuePage: "136945113043850",
    venueName: "Mehiläinen Forum",
    venueAddress: "Mannerheimintie 20 b"
  },
  {
    venuePage: "166200220070398",
    venueName: "Anna K.",
    venueAddress: "Annankatu 23"
  },
  {
    venuePage: "133722886667937",
    venueName: "Kingdom of Finland",
    venueAddress: ""
  },
  {
    venuePage: "179475572084322",
    venueName: "DTM",
    venueAddress: "Mannerheimintie 6 B"
  },
  {
    venuePage: "143013095769067",
    venueName: "Helsinki Film Festival-Rakkautta & Anarkiaa",
    venueAddress: "Mannerheimintie 22-24"
  },
  {
    venuePage: "161032123955964",
    venueName: "Manhattan Steak House",
    venueAddress: "Mannerheimintie 20"
  },
  {
    venuePage: "211961402152115",
    venueName: "Tallink Silja M/S Superstar",
    venueAddress: ""
  },
  {
    venuePage: "557958447669445",
    venueName: "Opettajankoulutuslaitos",
    venueAddress: "Siltavuorenpenger 5 A (PL 9)"
  },
  {
    venuePage: "463134527140181",
    venueName: "Tough Viking Finland",
    venueAddress: ""
  },
  {
    venuePage: "144823298916724",
    venueName: "Pizza Hut Citykäytävä",
    venueAddress: "Aleksanterinkatu 21"
  },
  {
    venuePage: "288780214682",
    venueName: "Panimoravintola Bruuveri",
    venueAddress: "Fredrikinkatu 63ab"
  },
  {
    venuePage: "102396413908",
    venueName: "Restaurant Farang",
    venueAddress: "Ainonkatu 3"
  },
  {
    venuePage: "185718781464730",
    venueName: "MS Viking XPRS",
    venueAddress: "Katajanokanlaituri 8"
  },
  {
    venuePage: "593733230726637",
    venueName: "Hotel Lilla Roberts",
    venueAddress: "Pieni Roobertinkatu 1-3"
  },
  {
    venuePage: "189936604352843",
    venueName: "Elokuvateatteri Orion",
    venueAddress: "Eerikinkatu 15"
  },
  {
    venuePage: "115835111798471",
    venueName: "Kampin Keilahalli",
    venueAddress: "Urho Kekkosen katu 1 / Kauppakeskus Kamppi 4. krs"
  },
  {
    venuePage: "587237684659804",
    venueName: "Praha",
    venueAddress: "Mannerheimintie 5"
  },
  {
    venuePage: "142566519092743",
    venueName: "Helsinki Ice Hall",
    venueAddress: "Nordenskiöldinkatu 11-13"
  },
  {
    venuePage: "102859746464386",
    venueName: "Thai Restaurant Orchid Helsinki",
    venueAddress: "Yrjönkatu 15"
  },
  {
    venuePage: "687545767927143",
    venueName: "Virgin Oil",
    venueAddress: "Kaivopiha, Mannerheimintie 5"
  },
  {
    venuePage: "129360383776928",
    venueName: "Helsinki International Film Festival - Love & Anarchy",
    venueAddress: "Simonkatu 12 B 13"
  },
  {
    venuePage: "289576914907",
    venueName: "Suomalainen Olutravintola Villi Wäinö",
    venueAddress: "Kalevankatu 4"
  },
  {
    venuePage: "161654887181561",
    venueName: "Hercules",
    venueAddress: "Lönnrotinkatu 4"
  },
  {
    venuePage: "160403060707245",
    venueName: "Kansalaistori",
    venueAddress: "Alvar Aallon kuja 2"
  },
  {
    venuePage: "202576293183281",
    venueName: "Robert's Coffee Rautatieasema",
    venueAddress: "Rautatieasema"
  },
  {
    venuePage: "353698764695758",
    venueName: "Harald Viking Restaurant",
    venueAddress: "Aleksanterinkatu 21"
  },
  {
    venuePage: "182976501857863",
    venueName: "Burger King Suomi",
    venueAddress: "Mannerheimintie 12"
  },
  {
    venuePage: "126698514099046",
    venueName: "Sali 1, Tennispalatsi",
    venueAddress: "Tennispalatsi"
  },
  {
    venuePage: "207623359262444",
    venueName: "Tang Dynasty",
    venueAddress: "Salomonkatu 3"
  },
  {
    venuePage: "197257076989569",
    venueName: "Korkeasaaren eläintarha",
    venueAddress: "Mustikkamaanpolku 12"
  },
  {
    venuePage: "197092963648465",
    venueName: "Robert's Coffee Citykäytävä",
    venueAddress: "Aleksanterinkatu 21"
  },
  {
    venuePage: "169056673184288",
    venueName: "Fazer Café City Center",
    venueAddress: "Kaivokatu 8"
  },
  {
    venuePage: "193633030667871",
    venueName: "Pickwick Pub",
    venueAddress: "Kaivokatu 10"
  },
  {
    venuePage: "110054199074125",
    venueName: "The Pullman Bar",
    venueAddress: "Kaivokatu 1"
  },

  {
    venuePage: "196320753731305",
    venueName: "Southern Fried Chicken Helsinki",
    venueAddress: "Mannerheimintie 18"
  },
  {
    venuePage: "675229525861623",
    venueName: "Hartwall Arena",
    venueAddress: "Areenankuja 1"
  },
  {
    venuePage: "185536111518913",
    venueName: "Putte's Bar&Pizza",
    venueAddress: "Kalevankatu 6"
  },
  {
    venuePage: "437697616326868",
    venueName: "Club Showroom",
    venueAddress: "Keskuskatu 8"
  },
  {
    venuePage: "186146234755900",
    venueName: "Esport",
    venueAddress: "Salomonkatu 1"
  },
  {
    venuePage: "170756259648931",
    venueName: "Kaukoliikenteen Terminaali - Kamppi",
    venueAddress: ""
  },
  {
    venuePage: "607233512631883",
    venueName: "Manala / Botta",
    venueAddress: "Dagmarinkatu 2"
  },
  {
    venuePage: "129430223795105",
    venueName: "Kaapelitehdas",
    venueAddress: "Tallberginkatu 1 00180 Helsinki"
  },
  {
    venuePage: "542627969181618",
    venueName: "Ristorante Italo",
    venueAddress: "Mannerheimintie 20"
  },
  {
    venuePage: "188937894457189",
    venueName: "Katajanokan terminaali",
    venueAddress: "Katajanokanlaituri 8"
  },
  {
    venuePage: "134831446548216",
    venueName: "LeBonk",
    venueAddress: "Yrjönkatu 24"
  },
  {
    venuePage: "343069202370307",
    venueName: "Picnic Kamppi",
    venueAddress: "Urho Kekkosen katu 1"
  },
  {
    venuePage: "129405200405887",
    venueName: "Laituri",
    venueAddress: "Narinkka 2"
  },
  {
    venuePage: "160063397357605",
    venueName: "Eduskuntatalo - Parliament House",
    venueAddress: "Mannerheimintie 30"
  },
  {
    venuePage: "1644363812446114",
    venueName: "Scandic Marski",
    venueAddress: "Mannerheimintie 10"
  },
  {
    venuePage: "766366926771632",
    venueName: "Hauskafe",
    venueAddress: "Mannerheimintie 22-24, Lasipalatsi"
  },
  {
    venuePage: "125313294240832",
    venueName: "On the Rocks",
    venueAddress: "Mikonkatu 15"
  },
  {
    venuePage: "474612212708004",
    venueName: "Helsinki PC repair shop",
    venueAddress: "Metropolitan Area"
  },
  {
    venuePage: "145351535475441",
    venueName: "Kaakaopuu",
    venueAddress: ""
  },
  {
    venuePage: "1442686696022333",
    venueName: "Hernesaaren Ranta",
    venueAddress: "Hernesaarenranta 6"
  },
  {
    venuePage: "205552206133770",
    venueName: "Karl Fazer Café",
    venueAddress: "Kluuvikatu 3"
  },
  {
    venuePage: "135187819845001",
    venueName: "Helsinki Olympic Stadium",
    venueAddress: "Paavo Nurmen tie 1"
  },
  {
    venuePage: "106572039365864",
    venueName: "Solita",
    venueAddress: "Alvar Aallon katu 5"
  },
  {
    venuePage: "709390205873225",
    venueName: "ศิษย์เก่าโรงเรียนบ้านนาห่อม",
    venueAddress: "ต นาห่อม"
  },
  {
    venuePage: "927756303984653",
    venueName: "Riviera",
    venueAddress: "Harjukatu 2"
  },
  {
    venuePage: "458496547645181",
    venueName: "HypnoSynnytys",
    venueAddress: ""
  },
  {
    venuePage: "118031212433",
    venueName: "Animalia",
    venueAddress: "Suvilahdenkatu 4"
  },
  {
    venuePage: "174883565902048",
    venueName: "Allegro-juna Pietariin",
    venueAddress: ""
  },
  {
    venuePage: "118940414852081",
    venueName: "Ravintola Don Corleone",
    venueAddress: "Urho Kekkosenkatu 1, Kampin keskus"
  },
  {
    venuePage: "723242454447995",
    venueName: "Tiketti Galleria",
    venueAddress: "Urho Kekkosen katu 4-6"
  },
  {
    venuePage: "192041626715",
    venueName: "Ooppera & Baletti",
    venueAddress: "Helsinginkatu 58"
  },
  {
    venuePage: "634131079942687",
    venueName: "MAMMA MIA på Svenska Teatern i Helsingfors",
    venueAddress: "Svenska Teatern, Norra esplanaden 2"
  },
  {
    venuePage: "230482323727455",
    venueName: "Messukeskus Helsinki",
    venueAddress: ""
  },
  {
    venuePage: "149725855099773",
    venueName: "Singapore Hot Wok",
    venueAddress: "Urho Kekkosen katu 1"
  },
  {
    venuePage: "727916843967609",
    venueName: "Ravintola India House",
    venueAddress: "Simonkatu 8"
  },
  {
    venuePage: "756654617786773",
    venueName: "Mako Nordic",
    venueAddress: ""
  },
  {
    venuePage: "1612407922335294",
    venueName: "Iloinen vauva",
    venueAddress: "hakaniemi"
  },

  {
    venuePage: "169319793101189",
    venueName: "Svenska Teatern",
    venueAddress: "Norra esplanaden 2"
  },
  {
    venuePage: "1559141357660714",
    venueName: "Day With A Local Helsinki",
    venueAddress: ""
  },
  {
    venuePage: "1115841645107900",
    venueName: "TarvikePuoti",
    venueAddress: "PL 171"
  },
  {
    venuePage: "663271780444145",
    venueName: "REMAX Niko Koivisto",
    venueAddress: "Mikonkatu 18 b 10"
  },
  {
    venuePage: "200739723082",
    venueName: "University of Helsinki",
    venueAddress: "PL 33 (Yliopistonkatu 4)"
  },
  {
    venuePage: "840160702687525",
    venueName: "The Finnish Film Affair",
    venueAddress: ""
  },
  {
    venuePage: "215433665136161",
    venueName: "Orchid Thai Quick & Tasty",
    venueAddress: "Urho Kekkosen Katu 1(Kamppikeskus)"
  },
  {
    venuePage: "1581769182062189",
    venueName: "Suomi - Israel Yhdistysten Liitto",
    venueAddress: "PL 247"
  },
  {
    venuePage: "917083461691073",
    venueName: "Eläinlääkäri Mona Wendelin",
    venueAddress: "Toukola"
  },
  {
    venuePage: "656607697799856",
    venueName: "Onnistumisen kulttuuri -seminaari",
    venueAddress: "Kulttuuritehdas Korjaamo, Töölönkatu 5"
  },
  {
    venuePage: "1583799185225948",
    venueName: "Mamu Töihin",
    venueAddress: ""
  },
  {
    venuePage: "1424128081225692",
    venueName: "MUK-1 Viiniauto",
    venueAddress: ""
  },
  {
    venuePage: "1668906366672455",
    venueName: "Riksakesä",
    venueAddress: "Helsinki 2015"
  },
  {
    venuePage: "297675003655404",
    venueName: "Musiikkitalon Puisto",
    venueAddress: ""
  },
  {
    venuePage: "114332028679199",
    venueName: "McDonald's Helsinki Forum katutaso",
    venueAddress: "Mannerheimintie 16"
  },
  {
    venuePage: "228725067313683",
    venueName: "Splizzeria",
    venueAddress: "Kaivokatu 10"
  },
  {
    venuePage: "233652500055565",
    venueName: "Sportpub Chelsea",
    venueAddress: "Töölönlahdenkatu 1"
  },
  {
    venuePage: "720915464587572",
    venueName: "Hodari & Hummeri",
    venueAddress: "Urho Kekkosenkatu 1, Kampin Ostoskeskus"
  },
  {
    venuePage: "453563484714535",
    venueName: "Finlandia-talo",
    venueAddress: "Mannerheimintie 13 e"
  },
  {
    venuePage: "464464786910012",
    venueName: "Ravintola Tang Dynasty",
    venueAddress: "Salomonkatu 3"
  },
  {
    venuePage: "233071830206763",
    venueName: "Estetia Oy - Helsinki",
    venueAddress: "Töölönlahdenkatu 2, Sanomatalo"
  },
  {
    venuePage: "88027597383",
    venueName: "BACKSTAGE, HELSINKI",
    venueAddress: "Pohjoinen Rautatiekatu 21"
  },
  {
    venuePage: "171677074103",
    venueName: "Eckerö Line",
    venueAddress: "Tyynenmerenkatu 8"
  },
  {
    venuePage: "210579339115343",
    venueName: "Kaupunkiverstas",
    venueAddress: "Elielinaukio 2G"
  },
  {
    venuePage: "173181615806",
    venueName: "KILROY Finland",
    venueAddress: "Kaivokatu 10 D"
  },
  {
    venuePage: "1604810556413384",
    venueName: "Vacaciones activas en Finlandia",
    venueAddress: ""
  },
  {
    venuePage: "102635686490380",
    venueName: "Nepalilainen Ravintola Mount Everest",
    venueAddress: "Vilhonkatu 9"
  },
  {
    venuePage: "43409043262",
    venueName: "Klaus K",
    venueAddress: "Bulevardi  2-4"
  },
  {
    venuePage: "189835218208",
    venueName: "Viking Line Suomi",
    venueAddress: "Katajanokan terminaali"
  },
  {
    venuePage: "569202699881684",
    venueName: "50 Shades of Grey",
    venueAddress: ""
  },
  {
    venuePage: "238479976360056",
    venueName: "Wayne's Coffee Forum",
    venueAddress: "Simonkatu 8"
  },
  {
    venuePage: "871583256202183",
    venueName: "Elixia Kamppi",
    venueAddress: "Fredrikinkatu 48 A"
  },
  {
    venuePage: "111196415641527",
    venueName: "Maya Bar & Grill",
    venueAddress: "Mikonkatu 18"
  },
  {
    venuePage: "550050481805814",
    venueName: "CIMO yleissivistävä koulutus",
    venueAddress: ""
  },
  {
    venuePage: "11395570946",
    venueName: "Taidehalli",
    venueAddress: "Nervanderinkatu 3"
  },
  {
    venuePage: "1576273565937357",
    venueName: "Tapasfestivaali",
    venueAddress: ""
  },
  {
    venuePage: "523626201075437",
    venueName: "Reaktor Ventures",
    venueAddress: "Mannerheimintie 2"
  },
  {
    venuePage: "338108096362675",
    venueName: "Hodarifillari",
    venueAddress: ""
  },
  {
    venuePage: "662321153836047",
    venueName: "Kasvublogi",
    venueAddress: ""
  },
  {
    venuePage: "536738403092264",
    venueName: "Tabac Original Suomi",
    venueAddress: "Maahantuoja: Berner Oy, PL 15"
  },
  {
    venuePage: "1427202894215675",
    venueName: "Sannimaria Photography",
    venueAddress: ""
  },
  {
    venuePage: "254561961385483",
    venueName: "Primaq",
    venueAddress: ""
  },
  {
    venuePage: "491998420911635",
    venueName: "Tokoitech",
    venueAddress: "www.tokoitech.fi"
  },
  {
    venuePage: "455713694551769",
    venueName: "Lastenpsykiatri Janna Rantala",
    venueAddress: ""
  },
  {
    venuePage: "146166298800927",
    venueName: "HELATORSTAI-KLUBI (HENRYS PUB, HELSINKI)",
    venueAddress: "SIMONKATU 3"
  },
  {
    venuePage: "7752531838",
    venueName: "Finnmatkat",
    venueAddress: "Mannerheimintie 16"
  },
  {
    venuePage: "602344396499735",
    venueName: "Ravintola Bronda",
    venueAddress: "Eteläesplanadi 20"
  },
  {
    venuePage: "676601802426881",
    venueName: "NYT/liikunta",
    venueAddress: "Paavo Nurmen kuja 1 c"
  },
  {
    venuePage: "153147844705785",
    venueName: "KPMG Finland",
    venueAddress: "Töölönlahdenkatu 3 A"
  },
  {
    venuePage: "612106298840076",
    venueName: "Angel Goa",
    venueAddress: ""
  },
  {
    venuePage: "631213260248348",
    venueName: "SuomiMed",
    venueAddress: ""
  },
  {
    venuePage: "563754627022071",
    venueName: "Mindfulness-ohjaaja Juho Leppiniemi",
    venueAddress: ""
  },
  {
    venuePage: "467195420127122",
    venueName: "Nide",
    venueAddress: "Fredrikinkatu 35"
  },
  {
    venuePage: "528437427189115",
    venueName: "Ruotuväki",
    venueAddress: "Pääesikunta/Viestintäosasto, Ruotuväki, PL 25"
  },
  {
    venuePage: "668076876540052",
    venueName: "Strength4Life",
    venueAddress: ""
  },
  {
    venuePage: "129766470556964",
    venueName: "Voimia.com",
    venueAddress: ""
  },
  {
    venuePage: "551644251552559",
    venueName: "BGBody",
    venueAddress: ""
  },
  {
    venuePage: "147755112083974",
    venueName: "Hevostarvike Equitar",
    venueAddress: ""
  },
  {
    venuePage: "306412989409499",
    venueName: "Taste of Helsinki",
    venueAddress: ""
  },
  {
    venuePage: "1582046208738755",
    venueName: "Kulttuurisalonki",
    venueAddress: "Yrjönkatu 31 (Teatteri Forum)"
  },
  {
    venuePage: "94452073098",
    venueName: "Silja Line Suomi",
    venueAddress: "PL 100"
  },
  {
    venuePage: "205180286160466",
    venueName: "Lavaklubi FNT",
    venueAddress: "Läntinen Teatterikuja 1"
  },
  {
    venuePage: "705061099605549",
    venueName: "Vanhan Joulutori",
    venueAddress: "Mannerheimintie 3"
  },
  {
    venuePage: "323809397823391",
    venueName: "Kings Tattoo & Piercing Helsinki",
    venueAddress: "Kampin kauppakeskus 5.krs"
  },
  {
    venuePage: "413556648691598",
    venueName: "Hekumania",
    venueAddress: ""
  },
  {
    venuePage: "179359442115037",
    venueName: "Storyville",
    venueAddress: "Museokatu 8"
  },
  {
    venuePage: "257360004340687",
    venueName: "Old Student House, Helsinki",
    venueAddress: "Mannerheimintie 3"
  },
  {
    venuePage: "128223000539075",
    venueName: "Summer Heat",
    venueAddress: "Mannerheimintie 3"
  },
  {
    venuePage: "348329225252022",
    venueName: "Helina Nails & Beauty",
    venueAddress: ""
  },
  {
    venuePage: "567485956683650",
    venueName: "La Crêperie Café",
    venueAddress: "Aleksanterinkatu 23, Kolmen sepän käytävä"
  },
  {
    venuePage: "132744690182860",
    venueName: "Special Security Group",
    venueAddress: ""
  },
  {
    venuePage: "101293423313970",
    venueName: "T'UOMO Menswear",
    venueAddress: "Bulevardi 1"
  },
  {
    venuePage: "803925583023700",
    venueName: "Vltava",
    venueAddress: "Elielinaukio 2"
  },
  {
    venuePage: "198200966944177",
    venueName: "Havana Cigars & Adventures",
    venueAddress: "Kalasatama"
  },
  {
    venuePage: "186258978069578",
    venueName: "Bakers Night",
    venueAddress: "Mannerheimintie 12"
  },
  {
    venuePage: "257752367639796",
    venueName: "Picnic",
    venueAddress: "Itälahdenkatu 27 A"
  },
  {
    venuePage: "297451380274391",
    venueName: "Club Venue",
    venueAddress: "Pohjoinen Rautatiekatu 21"
  },
  {
    venuePage: "176735082341464",
    venueName: "Business Meeting Park",
    venueAddress: "Mannerheimintie 20 B"
  },
  {
    venuePage: "320382734796132",
    venueName: "Cityterveys",
    venueAddress: "Fredrikinkatu 48"
  },
  {
    venuePage: "1454409554788911",
    venueName: "Meira",
    venueAddress: "Aleksis Kiven katu 15"
  },
  {
    venuePage: "88831650993",
    venueName: "Tallink Suomi",
    venueAddress: "PL 100"
  },
  {
    venuePage: "196824077044849",
    venueName: "San Pedro Tex-Mex",
    venueAddress: "Urho Kekkosen katu 1"
  },
  {
    venuePage: "142563802549026",
    venueName: "Bubble Tea Helsinki",
    venueAddress: "Asematunneli, Helsinki"
  },
  {
    venuePage: "438655026168026",
    venueName: "K-market",
    venueAddress: "Ruokakesko Oy, Satamakatu 3"
  },
  {
    venuePage: "243478152377643",
    venueName: "Hunaja",
    venueAddress: "Kasarmikatu 26 C"
  },
  {
    venuePage: "209038507089",
    venueName: "Agent Pekka",
    venueAddress: "Nervanderinkatu 5 D 61"
  },
  {
    venuePage: "1498252577122401",
    venueName: "Tomorrow",
    venueAddress: ""
  },
  {
    venuePage: "955980411100708",
    venueName: "Robert's Coffee Gelato Factory",
    venueAddress: "Citykäytävä"
  },
  {
    venuePage: "108356709208909",
    venueName: "Warner Music Live",
    venueAddress: "Olavinkatu 1 B"
  },
  {
    venuePage: "612318075514894",
    venueName: "VANS Store Helsinki",
    venueAddress: "Kauppakeskus Forum, Mannerheimintie 20"
  },
  {
    venuePage: "120291387997909",
    venueName: "Visma Finland",
    venueAddress: "Elielinaukio 5"
  },
  {
    venuePage: "106376529406183",
    venueName: "Suomen Olutseura ry",
    venueAddress: "Suomi"
  },
  {
    venuePage: "120642851281629",
    venueName: "Fini",
    venueAddress: ""
  },
  {
    venuePage: "184193477670",
    venueName: "Verkkokauppa.com",
    venueAddress: "Tyynenmerenkatu 11"
  },
  {
    venuePage: "119745348087994",
    venueName: "Rolling Resistance",
    venueAddress: "Finland"
  },
  {
    venuePage: "923720527695201",
    venueName: "Kiasman ystävät",
    venueAddress: "Mannerheiminaukio 2"
  },
  {
    venuePage: "220884089007",
    venueName: "Suomen luonnonsuojeluliitto",
    venueAddress: "Itälahdenkatu 22 b A"
  },
  {
    venuePage: "222843281102736",
    venueName: "Danske Bank Suomi",
    venueAddress: "Hiililaiturinkuja 2"
  },
  {
    venuePage: "126192814092720",
    venueName: "Supercell",
    venueAddress: "Itämerenkatu 11-13"
  },
  {
    venuePage: "199864880048969",
    venueName: "Barona (Barona Group Oy)",
    venueAddress: "Töölönlahdenkatu 3 B, 2.krs"
  },
  {
    venuePage: "324048634313353",
    venueName: "Jolla",
    venueAddress: "Fredrikinkatu 42"
  },
  {
    venuePage: "134388706632350",
    venueName: "Unity Technologies Finland",
    venueAddress: "Kaivokatu 8 B"
  },
  {
    venuePage: "303480956476982",
    venueName: "NOM Helsinki",
    venueAddress: "Töölönlahdenkatu 3"
  },
  {
    venuePage: "1574651132763677",
    venueName: "SunTori CleanTech",
    venueAddress: "PL 1"
  },
  {
    venuePage: "61914400755",
    venueName: "Raikastamo",
    venueAddress: ""
  },
  {
    venuePage: "158241367569598",
    venueName: "Nordea Suomi",
    venueAddress: ""
  },
  {
    venuePage: "169604269722672",
    venueName: "Cafe Carusel",
    venueAddress: "Merisatamanranta 10"
  },
  {
    venuePage: "172043384568",
    venueName: "Mummon Wintti Oy",
    venueAddress: "www.muwi.fi"
  },
  {
    venuePage: "209399938432",
    venueName: "Radio Rock",
    venueAddress: "Töölönlahdenkatu 2"
  },
  {
    venuePage: "266438865355",
    venueName: "MTV Uutiset",
    venueAddress: "Ilmalantori 2"
  },
  {
    venuePage: "131572113549519",
    venueName: "Kluuvi",
    venueAddress: "Aleksanterinkatu 9"
  },
  {
    venuePage: "608072049287741",
    venueName: "Pohjolan Liikenne",
    venueAddress: "Postintaival 3"
  },
  {
    venuePage: "388849524474798",
    venueName: "Pyöräkeskus",
    venueAddress: "Narinkka 3"
  },
  {
    venuePage: "106281509406411",
    venueName: "Galerie Anhava",
    venueAddress: "Fredrikinkatu 43"
  },
  {
    venuePage: "571810332841952",
    venueName: "Smartly.io",
    venueAddress: "Itämerenkatu 1"
  },
  {
    venuePage: "1401562913395372",
    venueName: "Café Rouge",
    venueAddress: "Urho Kekkosen katu 4"
  },
  {
    venuePage: "164499243608748",
    venueName: "Fashion at Home",
    venueAddress: "Elielinaukio 3 Helsinki. Raide 11 vieressä."
  },
  {
    venuePage: "236855515452",
    venueName: "Warner Music Finland",
    venueAddress: "Arkadiankatu 4-6 (Käyntiosoite: Olavinkatu 1 B, 7. kerros)"
  },
  {
    venuePage: "216510545194390",
    venueName: "KC Professional",
    venueAddress: "Runeberginkatu 5 B"
  },
  {
    venuePage: "111948925573314",
    venueName: "Kauneushoitola Blue Lagoon",
    venueAddress: ""
  },
  {
    venuePage: "166018263275",
    venueName: "Esteettisen Hammashoidon Klinikka",
    venueAddress: "Mannerheimintie 20 B, 5.krs"
  },
  {
    venuePage: "162397657258623",
    venueName: "The Look / Kauneusklinikka Tiina Jylhä Helsinki",
    venueAddress: "Snellmaninkatu 15"
  },
  {
    venuePage: "235027700032744",
    venueName: "Visit Finland - RU",
    venueAddress: "Porkkalankatu 1"
  },
  {
    venuePage: "299629104871",
    venueName: "Jouluradio",
    venueAddress: "Uutiskatu 2"
  },
  {
    venuePage: "297805220415202",
    venueName: "Alasti-klubi",
    venueAddress: "Mannerheimintie 5"
  },
  {
    venuePage: "162890210442941",
    venueName: "Tapahtumat Helsinki",
    venueAddress: "Mannerheimintie"
  },
  {
    venuePage: "140504222955",
    venueName: "Linnanmäki",
    venueAddress: "Tivolikuja 1"
  },
  {
    venuePage: "107471754306",
    venueName: "F-Secure",
    venueAddress: ""
  },
  {
    venuePage: "588164231212816",
    venueName: "Fonum",
    venueAddress: "Eerikinkatu 10"
  },
  {
    venuePage: "302300286482088",
    venueName: "Crazy Hedgehog Tea House",
    venueAddress: "Töölönlahdenkatu 3"
  },
  {
    venuePage: "172659206933",
    venueName: "Svensk Ungdom",
    venueAddress: "Simonkatu 8 A"
  },
  {
    venuePage: "166211710057843",
    venueName: "Mattolaituri",
    venueAddress: "Ehrenströmintie 3 A"
  },
  {
    venuePage: "1478351245761002",
    venueName: "KC Models",
    venueAddress: "Runeberginkatu 5 B 3. krs"
  },
  {
    venuePage: "962644803777802",
    venueName: "Levykauppa Keltainen Jäänsärkijä -Record Store",
    venueAddress: "Urho Kekkosen katu 4-6"
  },
  {
    venuePage: "138834982821944",
    venueName: "Kauppalehti",
    venueAddress: "Alvar Aallon katu 3c"
  },
  {
    venuePage: "733699220095242",
    venueName: "Symbio Finland",
    venueAddress: "Kaivokatu 10 A"
  },
  {
    venuePage: "267328025069",
    venueName: "SpinFM",
    venueAddress: ""
  },
  {
    venuePage: "269771616490513",
    venueName: "PRH Patentti- ja rekisterihallitus",
    venueAddress: "Arkadiankatu 6 A"
  },
  {
    venuePage: "186676058046611",
    venueName: "Kellopeli Lifestyle Clinic Oy",
    venueAddress: "Simonkatu 9"
  },
  {
    venuePage: "275038856985",
    venueName: "HYY",
    venueAddress: "Mannerheimintie 5 A"
  },
  {
    venuePage: "539670436187847",
    venueName: "Kustantajien joulukauppa",
    venueAddress: "Kaivokatu 10"
  },
  {
    venuePage: "345097714681",
    venueName: "Helsingin sarjakuvafestivaalit - Helsinki Comics Festival",
    venueAddress: "Mannerheimintie 22"
  },
  {
    venuePage: "210473944067",
    venueName: "Euroopan parlamentti - Europaparlamentet",
    venueAddress: "Malminkatu 16 - Malmgatan 16"
  },
  {
    venuePage: "237584782429",
    venueName: "Iltalehti",
    venueAddress: ""
  },
  {
    venuePage: "69248299970",
    venueName: "Audiovisual Finland",
    venueAddress: "Urho Kekkosen katu 2 C"
  },
  {
    venuePage: "476671835815233",
    venueName: "Sham's Flavours",
    venueAddress: "Asema-aukio 1 Helsinki"
  },
  {
    venuePage: "133258140197886",
    venueName: "POP UP ILO",
    venueAddress: "Kaivokatu 8"
  },
  {
    venuePage: "1619324141636275",
    venueName: "Durga",
    venueAddress: "Yrjönkatu 23 a 2 krs"
  },
  {
    venuePage: "121147944734511",
    venueName: "Helsinki Design School",
    venueAddress: "Fabianinkatu 19"
  },
  {
    venuePage: "1460121337540103",
    venueName: "Jaff Parturi & Kampaamo",
    venueAddress: "kaivokatu 12"
  },
  {
    venuePage: "1375738002667726",
    venueName: "Monimuotoiset perheet",
    venueAddress: "Simonkatu 8 A, 3. krs."
  },
  {
    venuePage: "116399773126",
    venueName: "Suomen Punainen Risti",
    venueAddress: "Tehtaankatu 1 a"
  },
  {
    venuePage: "108191125965885",
    venueName: "MTV",
    venueAddress: "Ilmalankatu 2"
  },
  {
    venuePage: "129286757147002",
    venueName: "Tehy",
    venueAddress: "Asemamiehenkatu 4"
  },
  {
    venuePage: "311591032184369",
    venueName: "Martat vinkkaa",
    venueAddress: "Lapinlahdenkatu 3 A"
  }
  ],
  cacheDom: function() {
   this.$html = $('#events');
   //Here comes a mistake with cross templating. Or stmh like this. Temporarily replaced with the template in JS
   //this.$html.find('#template').html();
   this.template  = "";
   this.template += "{{#allEvents}}";
   this.template += "<div>";
   this.template += "<p class='event-details'>";
   this.template += "{{venue_address}} | {{start_time}}";
//   this.template += "{{venue_address}}  | {{start_time}} | {{price}}";
   this.template += "</p>";
   this.template += "<h2 class='subheader'>";
   this.template += "<a href='http://facebook.com/{{id}}' target='_blank'>";   
   this.template += "{{name}}";
   this.template += "</a>";
   this.template += "</h2>";
   this.template += "<p class='event-venue-name'>";
   this.template += "{{venue_name}}";
   this.template += "</p>";
   this.template += "<hr>";
   this.template += "</div>";
   this.template += "{{/allEvents}}";
  },
  prepareForRender: function (data) {
  var data = data;
  var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  for (var i=0; i<data.allEvents.length; i++){
   var eventStartTime = new Date(data.allEvents[i].start_time);
   var month = months[eventStartTime.getMonth()];
   data.allEvents[i].start_time = month+ " " + eventStartTime.getDate() + ", " + data.allEvents[i].start_time.substring(11,16);
  };
  this.render(data);
  },
  render: function(data) {
    this.$html.html(
     Mustache.render(this.template, data)
    );
    $('#preloader').css("display", "none");
/*
     this.$html.append (
     "<div>" +
     "<h2 class='subheader'>" +
     data.allEvents[1].name +
     "</h2>" +
     "</div>");
*/
/*
    var dateToday = new Date();
    var timeNow = (new Date()).getTime();
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //console.log (data);
    for (var i=0; i<data.allEvents.length; i++){
     var eventStartTime = new Date(data.allEvents[i].start_time);
      //console.log (eventStartTime.getTime() - timeNow + " " + eventStartTime + " " + dateftoday




       );
      if (1){
      //if (eventStartTime.getTime() - timeNow > 0) {
      var eventDiv = $ ("<div></div>");
      var month = months[eventStartTime.getMonth()];
      var eventDetails = $("<p></p>")
      .addClass("event-details")
      .html (data.allEvents[i].venue_address + " | " + month+ " " + eventStartTime.getDate() + ", " + data.allEvents[i].start_time.substring(11,16) + " | " + data.allEvents[i].price);

      var eventName = $("<h2></h2>")
      .addClass("sub-header")
      .html ("<a href='http://facebook.com/"+data.allEvents[i].id+"' target='_blank'>" + data.allEvents[i].name + "</a>");      

      var eventVenueName = $("<p></p>")
      .addClass("event-venue-name")
      .html (data.allEvents[i].venue_name);    
      eventDiv.append(eventDetails);
      eventDiv.append(eventName);
      eventDiv.append(eventVenueName);
      eventDiv.append("<hr>");
      $("#events").append(eventDiv);
      }

      if (false)
       $("#events").append("<p class='event-details'>"+ dateToday.getDate() + " " +  months[dateToday.getMonth()] + "</p><h2 class='sub-header'>Helsinki is going to be dead</h2><p class='event-venue-name'>Try Berlin</p>");

    }
*/    
  },

  //At the moment this is an entry function in the variable
  sortEvents: function() {
   var data = {
     allEvents: this.allEvents,
   };
   data.allEvents.sort(function(a,b){
   var c = new Date(a.start_time);
   var d = new Date(b.start_time);
   return c-d;
   });
   this.prepareForRender(data);
  },
  callAPI: function(i, thisVenue) {
    FB.api(
     "/"+ thisVenue.venuePage + "/events?limit=100",
     function (response) {
      allEvents.eventsInVenue (response, thisVenue)
     }
    );
  },
  addEvent: function (data) {
  //console.log ((new Date()).getTime() - (new Date(data.start_time)).getTime());
  var fits = (new Date()).getTime() - (new Date(data.start_time)).getTime();
  if (fits < 0)
  {
    //begin
        var placeName;
        var placeLocationLongitude;
        var placeLocationLatitude;
        var placeLocationStreet;
        if (data.place === undefined)
        {
          //console.log (data);
          placeName                = "Not sure where";
          placeLocationStreet      = "Somewhere in Helsinki";
        }
        else
        {
          placeName                = data.place.name;
          if (data.place.location != undefined)
          {
            placeLocationStreet    = data.place.location.street;
            placeLocationLongitude = data.place.location.longitude;
            placeLocationLatitude  = data.place.location.latitude;
            if (data.place.location.street === undefined) {
            placeLocationStreet    = "Somewhere in Helsinki";  
            }  
          }    
        };
        this.allEvents.push(
          {
           id: data.id,
           name: data.name.toLowerCase(),
           start_time: data.start_time,
           venue_name: placeName,
           venue_address: placeLocationStreet,
           price: "0-100$"
          }
        );
    //end
  }

  }
};

window.onload = allEvents.cacheDom();

