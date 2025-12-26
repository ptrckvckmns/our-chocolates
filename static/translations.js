// Centralized translations for the entire website
const translations = {
  nl: {
    // Navigation
    home: 'Home',
    directory: 'Gids',
    pairings: 'Pairings',
    history: 'Geschiedenis',
    about: 'Over Ons',
    
    // Homepage
    siteTitle: 'Belgische Chocolade Gids',
    heroTitle: 'Ontdek de Beste Belgische Chocolatiers',
    heroSubtitle: 'Van traditionele pralines tot moderne creaties',
    heroDescription: 'Van generaties-oude familiebedrijven tot innovatieve chocolatiers - ontdek de complete kaart van Belgische chocolade-excellentie.',
    exploreButton: 'Ontdek Chocolatiers',
    
    // Search bar
    searchLocation: 'Locatie',
    searchType: 'Type',
    searchKeyword: 'Zoekwoord',
    searchButton: 'Zoeken',
    searchAllTypes: 'Alle Types',
    searchWinkel: 'Winkel',
    searchFabrikant: 'Fabrikant',
    searchBeide: 'Beide',
    
    // Featured section
    featuredTitle: 'Uitgelichte Chocolatiers',
    loadingBusinesses: 'Bedrijven laden...',
    viewAllButton: 'Bekijk Alle Chocolatiers',
    
    // Mission section
    missionTitle: 'Onze Missie',
    missionText: 'België staat wereldwijd bekend om zijn chocolade vakmanschap. Onze gids werd gecreëerd om verborgen pareltjes in de schijnwerpers te zetten - kleine ambachtelijke chocolatiers die met passie en precisie de meest verfijnde creaties maken.',
    
    // Features
    featuresTitle: 'Waarom Belgische Chocolade Gids?',
    feature1Title: 'Belgische Gids',
    feature1Text: 'Ontdek chocolatiers door heel België',
    feature2Title: 'Kwaliteit Gegarandeerd',
    feature2Text: 'Alleen de beste ambachtslieden',
    feature3Title: 'Passie voor Chocolade',
    feature3Text: 'Van boon tot reep',
    
    // CTA Section
    ctaTitle: 'Mist je Chocoladebedrijf?',
    ctaDescription: 'Maak deel uit van onze directory en bereik chocoladeliefhebbers door heel België. Presenteer uw ambachtelijke creaties aan een gepassioneerd publiek.',
    ctaButton: 'Voeg Uw Bedrijf Toe',
    ctaHistoryButton: 'Ontdek Onze Geschiedenis',
    ctaBenefit1Title: 'Bereik Meer Klanten',
    ctaBenefit1Text: 'Duizenden chocoladeliefhebbers bezoeken onze gids',
    ctaBenefit2Title: 'Boost Uw Zichtbaarheid',
    ctaBenefit2Text: 'Prominente plaatsing in onze directory',
    ctaBenefit3Title: 'Groei Uw Business',
    ctaBenefit3Text: 'Verbind met lokale en internationale klanten',
    
    // Homepage Pairings section
    pairingsHomeTitle: 'Chocolade Pairings',
    pairingsHomeSubtitle: 'Ontdek de perfecte combinaties voor uw chocolade ervaring',
    pairingsWhiskyTitle: 'Whisky & Bourbon',
    pairingsWhiskyText: 'Pure chocolade (70%+) met single malt Scotch of bourbon. De complexe smaken van hout, karamel en specerijen harmoniseren perfect.',
    pairingsWineTitle: 'Wijn',
    pairingsWineText: 'Rode port of Cabernet Sauvignon met donkere chocolade. Zoete dessertwijnen met melkchocolade. De tannines en zoetigheden balanceren elkaar.',
    pairingsCoffeeTitle: 'Koffie',
    pairingsCoffeeText: 'Espresso of sterke koffie met pure chocolade. De bittere tonen complementeren elkaar. Cappuccino met melkchocolade voor zachtheid.',
    pairingsCheeseTitle: 'Kaas',
    pairingsCheeseText: 'Gerijpte kazen zoals Manchego met pure chocolade. Blauwe kaas met melkchocolade. De zoute en zoete smaken creëren een unieke balans.',
    pairingsViewAllButton: 'Ontdek Alle Pairings',
    
    // Stats
    visitors: 'Duizenden chocoladeliefhebbers bezoeken onze gids',
    featured: 'Prominente plaatsing in onze directory',
    connection: 'Verbind met lokale en internationale klanten',
    
    // About section
    aboutText: 'Belgische Chocolade Gids verbindt chocoladeliefhebbers met de beste ambachtelijke chocolatiers van België.',
    
    // Directory page
    directoryTitle: 'Chocolatier Directory',
    directorySubtitle: 'Ontdek ambachtelijke chocolatiers door heel België',
    filterByType: 'Filter op Type',
    filterByProvince: 'Filter op Provincie',
    filterByCity: 'Filter op Stad',
    searchPlaceholder: 'Zoek op naam...',
    resetButton: 'Reset',
    allTypes: 'Alle Types',
    allProvinces: 'Alle Provincies',
    allCities: 'Alle Steden',
    
    // Business types
    winkel: 'Winkel',
    atelier: 'Atelier',
    museum: 'Museum',
    fabriek: 'Fabriek',
    cafe: 'Café',
    
    // Business details
    callUs: 'Bel ons',
    emailUs: 'Email ons',
    visitWebsite: 'Bezoek website',
    details: 'Details',
    
    // Results
    business: 'bedrijf',
    businesses: 'bedrijven',
    found: 'gevonden',
    noResults: 'Geen bedrijven gevonden. Pas uw filters aan.',
    errorLoading: 'Fout bij laden van bedrijven. Probeer het later opnieuw.',
    
    // Pairings page
    pairingsTitle: 'Chocolade Food Pairings',
    pairingsIntro: 'Ontdek de perfecte combinaties met Belgische chocolade',
    pairingsArtTitle: 'De Kunst van Chocolade Pairing',
    pairingsArtText: 'Chocolade pairing is een verfijnde kunst waarbij smaken, texturen en aroma\'s elkaar complementeren en versterken. Van whisky en wijn tot koffie en kaas - ontdek de perfecte combinaties die uw chocolade ervaring naar een hoger niveau tillen.',
    
    // Whisky section
    whiskyTitle: 'Whisky & Bourbon',
    whiskyIntro: 'Whisky en chocolade delen complexe smaakprofielen met hout, specerijen, karamel en rooknoten die elkaar prachtig aanvullen.',
    whisky1Title: 'Pure Chocolade (70-80%)',
    whisky1Pairing: '+ Single Malt Scotch (Speyside)',
    whisky1Text: 'Speyside whisky\'s met honing, fruitige en bloemige tonen complementeren de bitterzoete complexiteit van pure chocolade. Probeer Glenfiddich of Macallan.',
    whisky2Title: 'Chocolade met gezouten karamel',
    whisky2Pairing: '+ Bourbon (Kentucky)',
    whisky2Text: 'De vanille, karamel en zoete maïstonen van bourbon zijn perfect voor chocolade met gezouten karamel. Probeer Buffalo Trace of Maker\'s Mark.',
    whisky3Title: 'Extra pure chocolade (85%+)',
    whisky3Pairing: '+ Peated Islay Whisky',
    whisky3Text: 'De rokerige, turfachtige tonen van Islay whisky zoals Laphroaig of Ardbeg creëren een dramatische, intense pairing met zeer pure chocolade.',
    whisky4Title: 'Melkchocolade met noten',
    whisky4Pairing: '+ Irish Whiskey',
    whisky4Text: 'De zachte, drievoudig gedistilleerde Irish whiskey met zachte vanille en nootachtige tonen past bij melkchocolade met hazelnoot of amandel.',
    whisky5Title: 'Chocolade met specerijen',
    whisky5Pairing: '+ Rye Whiskey',
    whisky5Text: 'De kruidige, peppery tonen van rye whiskey zijn ideaal voor chocolade met kaneel, chili of andere specerijen. Probeer Bulleit Rye.',
    whisky6Title: 'Chocolade met kersen of bessen',
    whisky6Pairing: '+ Sherry Cask Whisky',
    whisky6Text: 'Whisky gerijpt op sherry vaten (zoals GlenDronach) met gedroogd fruit en noten harmonieert met chocolade met kersen, frambozen of rozijnen.',
    
    // Whisky tips
    whiskyTipsTitle: 'Proeftips voor whisky & chocolade',
    whiskyTip1: 'Voeg geen ijs toe - Dit verdunt de whisky en verhindert de pairing',
    whiskyTip2: 'Neem kleine slokken - Laat de whisky mengen met de chocolade in je mond',
    whiskyTip3: 'Begin met lagere ABV - 40-43% alcohol werkt beter dan cask strength',
    whiskyTip4: 'Match intensiteiten - Sterke whisky met pure chocolade, zachte met melkchocolade',
    whiskyTip5: 'Ruik eerst - De neus van beide producten bereidt je smaakpapillen voor',
    
    // Tasting order
    tastingOrderTitle: 'Proefvolgorde',
    tastingOrder1: 'Neem een kleine slok whisky, laat circuleren en doorslikken',
    tastingOrder2: 'Wacht 10-15 seconden om de smaak te laten bezinken',
    tastingOrder3: 'Neem een stukje chocolade en laat langzaam smelten',
    tastingOrder4: 'Wanneer de chocolade half gesmolten is, neem een kleine slok whisky',
    tastingOrder5: 'Laat beide smaken mengen en ontdek nieuwe smaakdimensies',
    tastingOrder6: 'Let op de finish - hoe lang blijven de smaken hangen?',
    
    // Wine section
    wineTitle: 'Wijn Pairings',
    wineIntro: 'Wijn en chocolade creëren magische combinaties wanneer tannines, zuren en zoetigheden in balans zijn.',
    wine1Title: 'Donkere Chocolade (70%+)',
    wine1Pairing: '+ Rode Port of Cabernet Sauvignon',
    wine1Text: 'Volle rode wijnen met sterke tannines balanceren de bitterheid van pure chocolade. Port met zijn zoetigheden complementeert perfect.',
    wine2Title: 'Melkchocolade',
    wine2Pairing: '+ Moscato d\'Asti of Banyuls',
    wine2Text: 'Zoete dessertwijnen met lichte moussering en fruitige aroma\'s harmoniseren met de romigheid van melkchocolade.',
    wine3Title: 'Witte Chocolade',
    wine3Pairing: '+ Riesling of Champagne',
    wine3Text: 'De zuurgraad van deze wijnen klieft door de zoetigheden en boteraccenten van witte chocolade.',
    wine4Title: 'Chocolade met Fruit',
    wine4Pairing: '+ Pinot Noir of Lambrusco',
    wine4Text: 'Fruitige rode wijnen met kersen- en bessenaroma\'s matchen perfect met chocolade met frambozen of kersen.',
    wineTipsTitle: 'Wijn Pairing Tips',
    wineTip1: 'Wijn moet zoeter zijn dan chocolade om bitterheid te vermijden',
    wineTip2: 'Match intensiteiten - lichte chocolade met lichte wijn',
    wineTip3: 'Serveer op kamertemperatuur voor optimale smaak',
    
    // Coffee section
    coffeeTitle: 'Koffie Pairings',
    coffeeIntro: 'Koffie en chocolade delen diepe, complexe smaken die perfect harmoniseren wanneer ze goed gecombineerd worden.',
    coffee1Title: 'Pure Chocolade (70-85%)',
    coffee1Pairing: '+ Espresso of Franse Pers',
    coffee1Text: 'Sterke, pure koffie met de bittere tonen van donkere chocolade creëert een intense, bevredigende combinatie.',
    coffee2Title: 'Melkchocolade',
    coffee2Pairing: '+ Cappuccino of Latte',
    coffee2Text: 'Koffie met melk en melkchocolade delen romigheid en zachte smaken die elkaar aanvullen.',
    coffee3Title: 'Chocolade met Noten',
    coffee3Pairing: '+ Macchiato of Cortado',
    coffee3Text: 'De nootachtige tonen in beide producten resoneren en creëren een harmonieuze ervaring.',
    coffee4Title: 'Chocolade met Caramel',
    coffee4Pairing: '+ Cold Brew of Ijskoffie',
    coffee4Text: 'De zachte, zoete smaken van cold brew complementeren caramel chocolade zonder bitterheid.',
    coffeeTipsTitle: 'Koffie Pairing Tips',
    coffeeTip1: 'Laat koffie iets afkoelen voor optimale smaakbeleving',
    coffeeTip2: 'Probeer single-origin koffies voor specifieke smaakprofielen',
    coffeeTip3: 'Neem kleine stukjes chocolade tussen slokken door',
    
    // Cheese section
    cheeseTitle: 'Kaas Pairings',
    cheeseIntro: 'De combinatie van zoete chocolade met zoute, umami-rijke kazen creëert verrassende en heerlijke contrasten.',
    cheese1Title: 'Donkere Chocolade (70%+)',
    cheese1Pairing: '+ Manchego of Pecorino',
    cheese1Text: 'Gerijpte schapenkazen met nootachtige smaken en korrelstructuur matchen met pure chocolade.',
    cheese2Title: 'Melkchocolade',
    cheese2Pairing: '+ Blauwe Kaas (Roquefort, Gorgonzola)',
    cheese2Text: 'De zoete romigheid van melkchocolade balanceert de sterke, zoute smaken van blauwe kaas perfect.',
    cheese3Title: 'Witte Chocolade',
    cheese3Pairing: '+ Brie of Camembert',
    cheese3Text: 'Zachte, romige kazen met boter-achtige smaken harmoniseren met de zoete vanille noten van witte chocolade.',
    cheese4Title: 'Chocolade met Noten',
    cheese4Pairing: '+ Oude Gouda of Gruyère',
    cheese4Text: 'De karamel-achtige kristallen in oude kazen en noten in chocolade creëren een rijke, complexe combinatie.',
    cheeseTipsTitle: 'Kaas Pairing Tips',
    cheeseTip1: 'Laat kaas 30 minuten voor serving op kamertemperatuur komen',
    cheeseTip2: 'Begin met mildere combinaties en werk naar intensere smaken',
    cheeseTip3: 'Voeg noten en honing toe voor extra dimensie',
    
    // Other pairings
    otherPairingsTitle: 'Andere Verrassende Pairings',
    fruitTitle: 'Fruit',
    fruitText: 'Verse frambozen, aardbeien of sinaasappel met donkere chocolade. De zuren in fruit klieven door de rijkdom.',
    chiliTitle: 'Chili',
    chiliText: 'Donkere chocolade met chipotle of cayenne peper. De hitte versterkt de complexiteit van cacao.',
    teaTitle: 'Thee',
    teaText: 'Earl Grey met melkchocolade, of groene thee met witte chocolade. Tannines en aroma\'s zijn synergieën.',
    baconTitle: 'Bacon',
    baconText: 'Gerookt bacon met donkere chocolade. Zoet, zout, en umami creëren een onverwachte maar heerlijke combinatie.',
    iceCreamTitle: 'IJs',
    iceCreamText: 'Vanille ijs met warme chocoladesaus. De temperatuurcontrasten en texturen maken dit tijdloos.',
    saltTitle: 'Zout',
    saltText: 'Zeezout of fleur de sel op pure chocolade. Het zout versterkt de zoetigheden en complexiteit.',
    
    // Pairing principles
    principlesTitle: 'Algemene Pairing Principes',
    principle1Title: 'Match of Contrast',
    principle1Text: 'Je kunt smaken matchen (bv. nootachtige chocolade met nootachtige kaas) of contrasteren (zoet vs zout).',
    principle2Title: 'Intensiteit Balans',
    principle2Text: 'Sterke smaken met sterke chocolade, subtiele smaken met milde chocolade. Balans is de sleutel.',
    principle3Title: 'Temperatuur',
    principle3Text: 'Laat chocolade en pairings op kamertemperatuur komen voor optimale smaakbeleving.',
    principle4Title: 'Experimenteer',
    principle4Text: 'De beste pairings ontdek je door te experimenteren. Vertrouw je smaakpapillen en heb plezier!',
    
    // History page
    historyTitle: 'Geschiedenis van Belgische Chocolade',
    historyIntro: 'Van de uitvinding van de praline tot hedendaagse innovaties',
    historyIntro1: 'België\'s chocoladetraditie is wereldberoemd en strekt zich uit over meer dan vier eeuwen. Van de eerste cacaobonen die in de 17e eeuw in Europa aankwamen, tot de innovatieve pralines die we vandaag kennen - de Belgische chocolade geschiedenis is een verhaal van passie, innovatie en vakmanschap.',
    historyIntro2: 'Ontdek hoe België uitgroeide tot een van de meest gerespecteerde chocoladeproducenten ter wereld.',
    timelineTitle: 'Tijdlijn',
    
    // Timeline events
    year1635: '1635',
    year1635Title: 'Cacao komt naar de Lage Landen',
    year1635Desc: 'Via Spaanse en Portugese handelaren komen de eerste cacaobonen naar België. De Spaanse bezetters introduceren chocolade als luxeproduct voor de adel.',
    
    year1857: '1857',
    year1857Title: 'Neuhaus wordt opgericht',
    year1857Desc: 'Jean Neuhaus opent zijn apotheek in de Galerijen Sint-Hubert in Brussel, waar hij chocolade verkoopt als medicijn om bittere remedies te maskeren.',
    
    year1912: '1912',
    year1912Title: 'De Praline wordt uitgevonden',
    year1912Desc: 'Jean Neuhaus Jr. creëert de eerste praline - een chocoladeschil gevuld met ganache, noga of zachte caramel. Deze uitvinding verandert de chocolade-industrie voor altijd.',
    
    year1915: '1915',
    year1915Title: 'De Ballotin wordt geïntroduceerd',
    year1915Desc: 'Louise Agostini, echtgenote van Jean Neuhaus Jr., ontwerpt de eerste ballotin - een elegante verpakking speciaal voor pralines. Dit wordt de standaard voor luxe chocoladeverpakkingen.',
    
    year1926: '1926',
    year1926Title: 'Godiva wordt geboren',
    year1926Desc: 'Pierre Draps Sr. opent zijn eerste Godiva-winkel in Brussel. Het merk wordt vernoemd naar Lady Godiva en groeit uit tot een wereldwijde luxechocolade-icoon.',
    
    year1958: '1958',
    year1958Title: 'Guylian\'s zeeschelpen',
    year1958Desc: 'Guylian introduceert hun iconische zeeschelp-chocolaatjes gevuld met hazelnotenpraline. Deze innovatieve vorm en vulling worden wereldwijd populair.',
    
    year1980s: '1980s',
    year1980sTitle: 'Opkomst van Ambachtelijke Chocolatiers',
    year1980sDesc: 'Een nieuwe generatie chocolatiers zoals Pierre Marcolini en Wittamer brengt artisanale methoden en innovatieve smaken, waarbij ze traditioneel vakmanschap combineren met moderne creativiteit.',
    
    year2000s: '2000s',
    year2000sTitle: 'Bean-to-Bar Beweging',
    year2000sDesc: 'Belgische chocolatiers omarmen de bean-to-bar filosofie, waarbij ze controle nemen over het hele proces van cacaoboon tot eindproduct. Dit zorgt voor transparantie en kwaliteit.',
    
    yearToday: 'Vandaag',
    yearTodayTitle: 'Wereldwijde Erkenning',
    yearTodayDesc: 'België produceert meer dan 220.000 ton chocolade per jaar en blijft wereldwijd toonaangevend in kwaliteit, innovatie en vakmanschap. Belgische chocolade is een beschermd cultureel erfgoed.',
    
    // Belgian facts
    factsTitle: 'Belgische Chocolade Feiten',
    fact1Title: 'Uitvinder van de Praline',
    fact1Text: 'België bedacht de gevulde praline in 1912 - nu wereldwijd gekopieerd maar nooit geëvenaard',
    fact2Title: '2.000+ Chocoladewinkels',
    fact2Text: 'Meer chocoladewinkels per capita dan elk ander land ter wereld',
    fact3Title: '220.000 ton per jaar',
    fact3Text: 'België produceert jaarlijks meer dan 220.000 ton hoogwaardige chocolade',
    fact4Title: '8 kg per persoon',
    fact4Text: 'Belgen consumeren gemiddeld 8 kilogram chocolade per persoon per jaar',
    fact5Title: 'Wereldwijde Export',
    fact5Text: 'Belgische chocolade wordt geëxporteerd naar meer dan 100 landen wereldwijd',
    fact6Title: 'Generaties Vakmanschap',
    fact6Text: 'Vele chocoladebedrijven zijn familiebedrijven die hun ambacht van generatie op generatie doorgeven',
    
    // History CTA
    historyCTATitle: 'Ontdek de Traditie',
    historyCTAText: 'Bezoek de chocolatiers die deze rijke traditie voortzetten en proef het verschil van generaties vakmanschap.',
    historyCTAButton: 'Bekijk Directory',
    
    // About page
    aboutTitle: 'Over Onze Gids',
    aboutIntro1: 'Belgische Chocolade Gids werd geboren uit een passie voor authentieke Belgische chocolade en een wens om de kleinere, ambachtelijke chocolatiers in de schijnwerpers te zetten.',
    aboutIntro2: 'We geloven dat elke chocolatier een uniek verhaal heeft en zijn eigen bijdrage levert aan de rijke traditie van Belgische chocolade.',
    aboutFeature1Title: 'Verborgen Juweeltjes',
    aboutFeature1Text: 'We helpen je de kleinere ambachtelijke chocolatiers ontdekken die vaak over het hoofd worden gezien maar uitzonderlijke kwaliteit leveren.',
    aboutFeature2Title: 'Authentieke Kwaliteit',
    aboutFeature2Text: 'Alleen chocolatiers die trouw blijven aan traditionele methoden en kwaliteitsingrediënten komen in onze gids.',
    
    // Footer
    footerAboutTitle: 'Over',
    footerLinksTitle: 'Snelle Links',
    footerContactTitle: 'Contact',
    footerFollowTitle: 'Volg Ons',
    footerText: '© 2024 Belgische Chocolade Gids. Alle rechten voorbehouden',
    privacyPolicy: 'Privacy Beleid',
    termsOfService: 'Gebruiksvoorwaarden',
    contact: 'Contact'
  },
  
  fr: {
    // Navigation
    home: 'Accueil',
    directory: 'Annuaire',
    pairings: 'Accords',
    history: 'Histoire',
    about: 'À Propos',
    
    // Homepage
    siteTitle: 'Guide du Chocolat Belge',
    heroTitle: 'Découvrez les Meilleurs Chocolatiers Belges',
    heroSubtitle: 'Des pralines traditionnelles aux créations modernes',
    heroDescription: 'Des entreprises familiales ancestrales aux chocolatiers innovants - découvrez la carte complète de l\'excellence chocolatière belge.',
    exploreButton: 'Explorer les Chocolatiers',
    
    // Search bar
    searchLocation: 'Emplacement',
    searchType: 'Type',
    searchKeyword: 'Mot-clé',
    searchButton: 'Rechercher',
    searchAllTypes: 'Tous les Types',
    searchWinkel: 'Magasin',
    searchFabrikant: 'Fabricant',
    searchBeide: 'Les Deux',
    
    // Featured section
    featuredTitle: 'Chocolatiers en Vedette',
    loadingBusinesses: 'Chargement des entreprises...',
    viewAllButton: 'Voir Tous les Chocolatiers',
    
    // Mission section
    missionTitle: 'Notre Mission',
    missionText: 'La Belgique est mondialement reconnue pour son savoir-faire chocolatier. Notre guide a été créé pour mettre en lumière les joyaux cachés - de petits chocolatiers artisanaux qui créent les créations les plus raffinées avec passion et précision.',
    
    // Features
    featuresTitle: 'Pourquoi le Guide du Chocolat Belge?',
    feature1Title: 'Guide Belge',
    feature1Text: 'Découvrez des chocolatiers dans toute la Belgique',
    feature2Title: 'Qualité Garantie',
    feature2Text: 'Seulement les meilleurs artisans',
    feature3Title: 'Passion pour le Chocolat',
    feature3Text: 'De la fève à la tablette',
    
    // CTA Section
    ctaTitle: 'Votre Entreprise Chocolatière Manque?',
    ctaDescription: 'Rejoignez notre annuaire et touchez les amateurs de chocolat dans toute la Belgique. Présentez vos créations artisanales à un public passionné.',
    ctaButton: 'Ajoutez Votre Entreprise',
    ctaHistoryButton: 'Découvrez Notre Histoire',
    ctaBenefit1Title: 'Touchez Plus de Clients',
    ctaBenefit1Text: 'Des milliers d\'amateurs de chocolat visitent notre guide',
    ctaBenefit2Title: 'Boostez Votre Visibilité',
    ctaBenefit2Text: 'Placement en vedette dans notre annuaire',
    ctaBenefit3Title: 'Développez Votre Activité',
    ctaBenefit3Text: 'Connectez-vous avec des clients locaux et internationaux',
    
    // Homepage Pairings section
    pairingsHomeTitle: 'Accords Chocolat',
    pairingsHomeSubtitle: 'Découvrez les combinaisons parfaites pour votre expérience chocolat',
    pairingsWhiskyTitle: 'Whisky & Bourbon',
    pairingsWhiskyText: 'Chocolat noir (70%+) avec single malt écossais ou bourbon. Les saveurs complexes de bois, caramel et épices s\'harmonisent parfaitement.',
    pairingsWineTitle: 'Vin',
    pairingsWineText: 'Porto rouge ou Cabernet Sauvignon avec chocolat noir. Vins de dessert sucrés avec chocolat au lait. Les tanins et les douceurs s\'équilibrent.',
    pairingsCoffeeTitle: 'Café',
    pairingsCoffeeText: 'Espresso ou café fort avec chocolat noir. Les notes amères se complètent. Cappuccino avec chocolat au lait pour la douceur.',
    pairingsCheeseTitle: 'Fromage',
    pairingsCheeseText: 'Fromages affinés comme le Manchego avec chocolat noir. Fromage bleu avec chocolat au lait. Les saveurs salées et sucrées créent un équilibre unique.',
    pairingsViewAllButton: 'Découvrir Tous les Accords',
    
    // Stats
    visitors: 'Des milliers d\'amateurs de chocolat visitent notre guide',
    featured: 'Placement en vedette dans notre annuaire',
    connection: 'Connectez-vous avec des clients locaux et internationaux',
    
    // About section
    aboutText: 'Le Guide du Chocolat Belge connecte les amateurs de chocolat avec les meilleurs chocolatiers artisanaux de Belgique.',
    
    // Directory page
    directoryTitle: 'Annuaire des Chocolatiers',
    directorySubtitle: 'Découvrez des chocolatiers artisanaux dans toute la Belgique',
    filterByType: 'Filtrer par Type',
    filterByProvince: 'Filtrer par Province',
    filterByCity: 'Filtrer par Ville',
    searchPlaceholder: 'Rechercher par nom...',
    resetButton: 'Réinitialiser',
    allTypes: 'Tous les Types',
    allProvinces: 'Toutes les Provinces',
    allCities: 'Toutes les Villes',
    
    // Business types
    winkel: 'Magasin',
    atelier: 'Atelier',
    museum: 'Musée',
    fabriek: 'Usine',
    cafe: 'Café',
    
    // Business details
    callUs: 'Appelez-nous',
    emailUs: 'Envoyez-nous un email',
    visitWebsite: 'Visitez le site web',
    details: 'Détails',
    
    // Results
    business: 'entreprise',
    businesses: 'entreprises',
    found: 'trouvées',
    noResults: 'Aucune entreprise trouvée. Ajustez vos filtres.',
    errorLoading: 'Erreur lors du chargement des entreprises. Veuillez réessayer plus tard.',
    
    // Pairings page
    pairingsTitle: 'Accords Chocolat',
    pairingsIntro: 'Découvrez les combinaisons parfaites avec le chocolat belge',
    pairingsArtTitle: 'L\'Art de l\'Accord Chocolat',
    pairingsArtText: 'L\'accord chocolat est un art raffiné où saveurs, textures et arômes se complètent et se renforcent mutuellement. Du whisky et du vin au café et au fromage - découvrez les combinaisons parfaites qui élèvent votre expérience chocolat à un niveau supérieur.',
    
    // Whisky section
    whiskyTitle: 'Whisky & Bourbon',
    whiskyIntro: 'Le whisky et le chocolat partagent des profils de saveurs complexes avec du bois, des épices, du caramel et des notes fumées qui se complètent magnifiquement.',
    whisky1Title: 'Chocolat Noir (70-80%)',
    whisky1Pairing: '+ Single Malt Écossais (Speyside)',
    whisky1Text: 'Les whiskies Speyside avec des notes de miel, fruitées et florales complètent la complexité douce-amère du chocolat noir. Essayez Glenfiddich ou Macallan.',
    whisky2Title: 'Chocolat au caramel salé',
    whisky2Pairing: '+ Bourbon (Kentucky)',
    whisky2Text: 'Les notes de vanille, caramel et maïs sucré du bourbon sont parfaites pour le chocolat au caramel salé. Essayez Buffalo Trace ou Maker\'s Mark.',
    whisky3Title: 'Chocolat extra noir (85%+)',
    whisky3Pairing: '+ Whisky Islay Tourbé',
    whisky3Text: 'Les notes fumées et tourbées du whisky Islay comme Laphroaig ou Ardbeg créent un accord dramatique et intense avec du chocolat très noir.',
    whisky4Title: 'Chocolat au lait avec noix',
    whisky4Pairing: '+ Whiskey Irlandais',
    whisky4Text: 'Le whiskey irlandais doux, triple distillé avec des notes douces de vanille et de noisette se marie avec le chocolat au lait aux noisettes ou aux amandes.',
    whisky5Title: 'Chocolat aux épices',
    whisky5Pairing: '+ Whiskey de Seigle',
    whisky5Text: 'Les notes épicées et poivrées du whiskey de seigle sont idéales pour le chocolat à la cannelle, au piment ou autres épices. Essayez Bulleit Rye.',
    whisky6Title: 'Chocolat aux cerises ou baies',
    whisky6Pairing: '+ Whisky Vieilli en Fût de Sherry',
    whisky6Text: 'Le whisky vieilli en fûts de sherry (comme GlenDronach) avec fruits secs et noix s\'harmonise avec le chocolat aux cerises, framboises ou raisins.',
    
    // Whisky tips
    whiskyTipsTitle: 'Conseils de dégustation whisky & chocolat',
    whiskyTip1: 'N\'ajoutez pas de glace - Cela dilue le whisky et empêche l\'accord',
    whiskyTip2: 'Prenez de petites gorgées - Laissez le whisky se mélanger avec le chocolat dans votre bouche',
    whiskyTip3: 'Commencez avec un ABV inférieur - 40-43% d\'alcool fonctionne mieux que cask strength',
    whiskyTip4: 'Accordez les intensités - Whisky fort avec chocolat noir, doux avec chocolat au lait',
    whiskyTip5: 'Sentez d\'abord - Le nez des deux produits prépare vos papilles',
    
    // Tasting order
    tastingOrderTitle: 'Ordre de Dégustation',
    tastingOrder1: 'Prenez une petite gorgée de whisky, laissez circuler et avalez',
    tastingOrder2: 'Attendez 10-15 secondes pour laisser la saveur s\'installer',
    tastingOrder3: 'Prenez un morceau de chocolat et laissez fondre lentement',
    tastingOrder4: 'Quand le chocolat est à moitié fondu, prenez une petite gorgée de whisky',
    tastingOrder5: 'Laissez les deux saveurs se mélanger et découvrez de nouvelles dimensions gustatives',
    tastingOrder6: 'Notez la finale - combien de temps les saveurs persistent-elles?',
    
    // Wine section
    wineTitle: 'Accords Vin',
    wineIntro: 'Le vin et le chocolat créent des combinaisons magiques lorsque les tanins, acides et douceurs sont en équilibre.',
    wine1Title: 'Chocolat Noir (70%+)',
    wine1Pairing: '+ Porto Rouge ou Cabernet Sauvignon',
    wine1Text: 'Les vins rouges corsés avec de forts tanins équilibrent l\'amertume du chocolat noir. Le Porto avec sa douceur complète parfaitement.',
    wine2Title: 'Chocolat au Lait',
    wine2Pairing: '+ Moscato d\'Asti ou Banyuls',
    wine2Text: 'Les vins de dessert sucrés avec une légère effervescence et des arômes fruités s\'harmonisent avec l\'onctuosité du chocolat au lait.',
    wine3Title: 'Chocolat Blanc',
    wine3Pairing: '+ Riesling ou Champagne',
    wine3Text: 'L\'acidité de ces vins traverse la douceur et les accents beurrés du chocolat blanc.',
    wine4Title: 'Chocolat aux Fruits',
    wine4Pairing: '+ Pinot Noir ou Lambrusco',
    wine4Text: 'Les vins rouges fruités avec des arômes de cerises et baies s\'accordent parfaitement avec le chocolat aux framboises ou cerises.',
    wineTipsTitle: 'Conseils d\'Accord Vin',
    wineTip1: 'Le vin doit être plus sucré que le chocolat pour éviter l\'amertume',
    wineTip2: 'Accordez les intensités - chocolat léger avec vin léger',
    wineTip3: 'Servez à température ambiante pour un goût optimal',
    
    // Coffee section
    coffeeTitle: 'Accords Café',
    coffeeIntro: 'Le café et le chocolat partagent des saveurs profondes et complexes qui s\'harmonisent parfaitement lorsqu\'ils sont bien combinés.',
    coffee1Title: 'Chocolat Noir (70-85%)',
    coffee1Pairing: '+ Espresso ou Presse Française',
    coffee1Text: 'Le café fort et pur avec les notes amères du chocolat noir crée une combinaison intense et satisfaisante.',
    coffee2Title: 'Chocolat au Lait',
    coffee2Pairing: '+ Cappuccino ou Latte',
    coffee2Text: 'Le café au lait et le chocolat au lait partagent onctuosité et saveurs douces qui se complètent.',
    coffee3Title: 'Chocolat aux Noix',
    coffee3Pairing: '+ Macchiato ou Cortado',
    coffee3Text: 'Les notes de noisette dans les deux produits résonnent et créent une expérience harmonieuse.',
    coffee4Title: 'Chocolat au Caramel',
    coffee4Pairing: '+ Cold Brew ou Café Glacé',
    coffee4Text: 'Les saveurs douces et sucrées du cold brew complètent le chocolat au caramel sans amertume.',
    coffeeTipsTitle: 'Conseils d\'Accord Café',
    coffeeTip1: 'Laissez le café refroidir légèrement pour une expérience gustative optimale',
    coffeeTip2: 'Essayez des cafés d\'origine unique pour des profils de saveur spécifiques',
    coffeeTip3: 'Prenez de petits morceaux de chocolat entre les gorgées',
    
    // Cheese section
    cheeseTitle: 'Accords Fromage',
    cheeseIntro: 'La combinaison de chocolat sucré avec des fromages salés et riches en umami crée des contrastes surprenants et délicieux.',
    cheese1Title: 'Chocolat Noir (70%+)',
    cheese1Pairing: '+ Manchego ou Pecorino',
    cheese1Text: 'Les fromages de brebis affinés avec des saveurs de noisette et une texture granuleuse s\'accordent avec le chocolat noir.',
    cheese2Title: 'Chocolat au Lait',
    cheese2Pairing: '+ Fromage Bleu (Roquefort, Gorgonzola)',
    cheese2Text: 'L\'onctuosité sucrée du chocolat au lait équilibre parfaitement les saveurs fortes et salées du fromage bleu.',
    cheese3Title: 'Chocolat Blanc',
    cheese3Pairing: '+ Brie ou Camembert',
    cheese3Text: 'Les fromages doux et crémeux aux saveurs beurrées s\'harmonisent avec les notes de vanille sucrées du chocolat blanc.',
    cheese4Title: 'Chocolat aux Noix',
    cheese4Pairing: '+ Vieux Gouda ou Gruyère',
    cheese4Text: 'Les cristaux caramélisés dans les vieux fromages et les noix dans le chocolat créent une combinaison riche et complexe.',
    cheeseTipsTitle: 'Conseils d\'Accord Fromage',
    cheeseTip1: 'Laissez le fromage revenir à température ambiante 30 minutes avant de servir',
    cheeseTip2: 'Commencez par des combinaisons plus douces et progressez vers des saveurs plus intenses',
    cheeseTip3: 'Ajoutez des noix et du miel pour une dimension supplémentaire',
    
    // Other pairings
    otherPairingsTitle: 'Autres Accords Surprenants',
    fruitTitle: 'Fruits',
    fruitText: 'Framboises fraîches, fraises ou orange avec chocolat noir. Les acides des fruits traversent la richesse.',
    chiliTitle: 'Piment',
    chiliText: 'Chocolat noir avec piment chipotle ou cayenne. La chaleur amplifie la complexité du cacao.',
    teaTitle: 'Thé',
    teaText: 'Earl Grey avec chocolat au lait, ou thé vert avec chocolat blanc. Tanins et arômes sont synergies.',
    baconTitle: 'Bacon',
    baconText: 'Bacon fumé avec chocolat noir. Sucré, salé et umami créent une combinaison inattendue mais délicieuse.',
    iceCreamTitle: 'Glace',
    iceCreamText: 'Glace vanille avec sauce chocolat chaude. Les contrastes de température et textures rendent cela intemporel.',
    saltTitle: 'Sel',
    saltText: 'Sel de mer ou fleur de sel sur chocolat noir. Le sel amplifie les douceurs et la complexité.',
    
    // Pairing principles
    principlesTitle: 'Principes Généraux d\'Accord',
    principle1Title: 'Accord ou Contraste',
    principle1Text: 'Vous pouvez accorder les saveurs (ex. chocolat noisette avec fromage noisette) ou contraster (sucré vs salé).',
    principle2Title: 'Équilibre d\'Intensité',
    principle2Text: 'Saveurs fortes avec chocolat fort, saveurs subtiles avec chocolat doux. L\'équilibre est la clé.',
    principle3Title: 'Température',
    principle3Text: 'Laissez le chocolat et les accords revenir à température ambiante pour une expérience gustative optimale.',
    principle4Title: 'Expérimentez',
    principle4Text: 'Les meilleurs accords se découvrent en expérimentant. Faites confiance à vos papilles et amusez-vous!',
    
    // History page
    historyTitle: 'Histoire du Chocolat Belge',
    historyIntro: 'De l\'invention de la praline aux innovations contemporaines',
    historyIntro1: 'La tradition chocolatière belge est mondialement célèbre et s\'étend sur plus de quatre siècles. Des premières fèves de cacao arrivées en Europe au 17e siècle aux pralines innovantes que nous connaissons aujourd\'hui - l\'histoire du chocolat belge est une histoire de passion, d\'innovation et de savoir-faire.',
    historyIntro2: 'Découvrez comment la Belgique est devenue l\'un des producteurs de chocolat les plus respectés au monde.',
    timelineTitle: 'Chronologie',
    
    // Timeline events
    year1635: '1635',
    year1635Title: 'Le Cacao Arrive aux Pays-Bas',
    year1635Desc: 'Via les commerçants espagnols et portugais, les premières fèves de cacao arrivent en Belgique. Les occupants espagnols introduisent le chocolat comme produit de luxe pour la noblesse.',
    
    year1857: '1857',
    year1857Title: 'Fondation de Neuhaus',
    year1857Desc: 'Jean Neuhaus ouvre sa pharmacie dans les Galeries Royales Saint-Hubert à Bruxelles, où il vend du chocolat comme médicament pour masquer les remèdes amers.',
    
    year1912: '1912',
    year1912Title: 'Invention de la Praline',
    year1912Desc: 'Jean Neuhaus Jr. crée la première praline - une coquille de chocolat remplie de ganache, nougat ou caramel mou. Cette invention change à jamais l\'industrie du chocolat.',
    
    year1915: '1915',
    year1915Title: 'Introduction du Ballotin',
    year1915Desc: 'Louise Agostini, épouse de Jean Neuhaus Jr., conçoit le premier ballotin - un emballage élégant spécialement pour les pralines. Cela devient la norme pour les emballages de chocolat de luxe.',
    
    year1926: '1926',
    year1926Title: 'Naissance de Godiva',
    year1926Desc: 'Pierre Draps Sr. ouvre sa première boutique Godiva à Bruxelles. La marque est nommée d\'après Lady Godiva et devient une icône mondiale du chocolat de luxe.',
    
    year1958: '1958',
    year1958Title: 'Les Coquillages de Guylian',
    year1958Desc: 'Guylian introduit ses iconiques chocolats en forme de coquillage remplis de praliné aux noisettes. Cette forme et garniture innovantes deviennent populaires dans le monde entier.',
    
    year1980s: '1980s',
    year1980sTitle: 'Émergence des Chocolatiers Artisanaux',
    year1980sDesc: 'Une nouvelle génération de chocolatiers comme Pierre Marcolini et Wittamer apporte des méthodes artisanales et des saveurs innovantes, combinant savoir-faire traditionnel et créativité moderne.',
    
    year2000s: '2000s',
    year2000sTitle: 'Mouvement Bean-to-Bar',
    year2000sDesc: 'Les chocolatiers belges adoptent la philosophie bean-to-bar, prenant le contrôle de tout le processus de la fève de cacao au produit final. Cela assure transparence et qualité.',
    
    yearToday: 'Aujourd\'hui',
    yearTodayTitle: 'Reconnaissance Mondiale',
    yearTodayDesc: 'La Belgique produit plus de 220.000 tonnes de chocolat par an et reste leader mondial en qualité, innovation et savoir-faire. Le chocolat belge est un patrimoine culturel protégé.',
    
    // Belgian facts
    factsTitle: 'Faits sur le Chocolat Belge',
    fact1Title: 'Inventeur de la Praline',
    fact1Text: 'La Belgique a inventé la praline fourrée en 1912 - maintenant copiée dans le monde entier mais jamais égalée',
    fact2Title: '2.000+ Chocolateries',
    fact2Text: 'Plus de chocolateries par habitant que tout autre pays au monde',
    fact3Title: '220.000 tonnes par an',
    fact3Text: 'La Belgique produit plus de 220.000 tonnes de chocolat de haute qualité par an',
    fact4Title: '8 kg par personne',
    fact4Text: 'Les Belges consomment en moyenne 8 kilogrammes de chocolat par personne par an',
    fact5Title: 'Export Mondial',
    fact5Text: 'Le chocolat belge est exporté vers plus de 100 pays dans le monde',
    fact6Title: 'Savoir-faire Générationnel',
    fact6Text: 'Beaucoup d\'entreprises chocolatières sont des entreprises familiales qui transmettent leur savoir-faire de génération en génération',
    
    // History CTA
    historyCTATitle: 'Découvrez la Tradition',
    historyCTAText: 'Visitez les chocolatiers qui perpétuent cette riche tradition et goûtez la différence du savoir-faire générationnel.',
    historyCTAButton: 'Voir l\'Annuaire',
    
    // About page
    aboutTitle: 'À Propos de Notre Guide',
    aboutIntro1: 'Le Guide du Chocolat Belge est né d\'une passion pour le chocolat belge authentique et d\'un désir de mettre en lumière les petits chocolatiers artisanaux.',
    aboutIntro2: 'Nous croyons que chaque chocolatier a une histoire unique et apporte sa propre contribution à la riche tradition du chocolat belge.',
    aboutFeature1Title: 'Joyaux Cachés',
    aboutFeature1Text: 'Nous vous aidons à découvrir les petits chocolatiers artisanaux souvent négligés mais offrant une qualité exceptionnelle.',
    aboutFeature2Title: 'Qualité Authentique',
    aboutFeature2Text: 'Seuls les chocolatiers fidèles aux méthodes traditionnelles et aux ingrédients de qualité figurent dans notre guide.',
    
    // Footer
    footerAboutTitle: 'À Propos',
    footerLinksTitle: 'Liens Rapides',
    footerContactTitle: 'Contact',
    footerFollowTitle: 'Suivez-nous',
    footerText: '© 2024 Guide du Chocolat Belge. Tous droits réservés',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions d\'Utilisation',
    contact: 'Contact'
  },
  
  en: {
    // Navigation
    home: 'Home',
    directory: 'Directory',
    pairings: 'Pairings',
    history: 'History',
    about: 'About',
    
    // Homepage
    siteTitle: 'Belgian Chocolate Guide',
    heroTitle: 'Discover the Best Belgian Chocolatiers',
    heroSubtitle: 'From traditional pralines to modern creations',
    heroDescription: 'From generations-old family businesses to innovative chocolatiers - discover the complete map of Belgian chocolate excellence.',
    exploreButton: 'Explore Chocolatiers',
    
    // Search bar
    searchLocation: 'Location',
    searchType: 'Type',
    searchKeyword: 'Keyword',
    searchButton: 'Search',
    searchAllTypes: 'All Types',
    searchWinkel: 'Shop',
    searchFabrikant: 'Manufacturer',
    searchBeide: 'Both',
    
    // Featured section
    featuredTitle: 'Featured Chocolatiers',
    loadingBusinesses: 'Loading businesses...',
    viewAllButton: 'View All Chocolatiers',
    
    // Mission section
    missionTitle: 'Our Mission',
    missionText: 'Belgium is world-renowned for its chocolate craftsmanship. Our guide was created to spotlight hidden gems - small artisan chocolatiers who create the most refined creations with passion and precision.',
    
    // Features
    featuresTitle: 'Why Belgian Chocolate Guide?',
    feature1Title: 'Belgian Guide',
    feature1Text: 'Discover chocolatiers across Belgium',
    feature2Title: 'Quality Guaranteed',
    feature2Text: 'Only the finest craftsmen',
    feature3Title: 'Passion for Chocolate',
    feature3Text: 'From bean to bar',
    
    // CTA Section
    ctaTitle: 'Missing Your Chocolate Business?',
    ctaDescription: 'Join our directory and reach chocolate lovers across Belgium. Showcase your artisan creations to a passionate audience.',
    ctaButton: 'Add Your Business',
    ctaHistoryButton: 'Discover Our History',
    ctaBenefit1Title: 'Reach More Customers',
    ctaBenefit1Text: 'Thousands of chocolate lovers visit our guide',
    ctaBenefit2Title: 'Boost Your Visibility',
    ctaBenefit2Text: 'Featured placement in our directory',
    ctaBenefit3Title: 'Grow Your Business',
    ctaBenefit3Text: 'Connect with local and international customers',
    
    // Homepage Pairings section
    pairingsHomeTitle: 'Chocolate Pairings',
    pairingsHomeSubtitle: 'Discover the perfect combinations for your chocolate experience',
    pairingsWhiskyTitle: 'Whisky & Bourbon',
    pairingsWhiskyText: 'Dark chocolate (70%+) with single malt Scotch or bourbon. The complex flavors of wood, caramel and spices harmonize perfectly.',
    pairingsWineTitle: 'Wine',
    pairingsWineText: 'Red port or Cabernet Sauvignon with dark chocolate. Sweet dessert wines with milk chocolate. The tannins and sweetness balance each other.',
    pairingsCoffeeTitle: 'Coffee',
    pairingsCoffeeText: 'Espresso or strong coffee with dark chocolate. The bitter notes complement each other. Cappuccino with milk chocolate for smoothness.',
    pairingsCheeseTitle: 'Cheese',
    pairingsCheeseText: 'Aged cheeses like Manchego with dark chocolate. Blue cheese with milk chocolate. The salty and sweet flavors create a unique balance.',
    pairingsViewAllButton: 'Discover All Pairings',
    
    // Stats
    visitors: 'Thousands of chocolate lovers visit our guide',
    featured: 'Featured placement in our directory',
    connection: 'Connect with local and international customers',
    
    // About section
    aboutText: 'Belgian Chocolate Guide connects chocolate lovers with the finest artisan chocolatiers in Belgium.',
    
    // Directory page
    directoryTitle: 'Chocolatier Directory',
    directorySubtitle: 'Discover artisan chocolatiers across Belgium',
    filterByType: 'Filter by Type',
    filterByProvince: 'Filter by Province',
    filterByCity: 'Filter by City',
    searchPlaceholder: 'Search by name...',
    resetButton: 'Reset',
    allTypes: 'All Types',
    allProvinces: 'All Provinces',
    allCities: 'All Cities',
    
    // Business types
    winkel: 'Shop',
    atelier: 'Workshop',
    museum: 'Museum',
    fabriek: 'Factory',
    cafe: 'Café',
    
    // Business details
    callUs: 'Call us',
    emailUs: 'Email us',
    visitWebsite: 'Visit website',
    details: 'Details',
    
    // Results
    business: 'business',
    businesses: 'businesses',
    found: 'found',
    noResults: 'No businesses found. Adjust your filters.',
    errorLoading: 'Error loading businesses. Please try again later.',
    
    // Pairings page
    pairingsTitle: 'Chocolate Food Pairings',
    pairingsIntro: 'Discover the perfect combinations with Belgian chocolate',
    pairingsArtTitle: 'The Art of Chocolate Pairing',
    pairingsArtText: 'Chocolate pairing is a refined art where flavors, textures and aromas complement and enhance each other. From whisky and wine to coffee and cheese - discover the perfect combinations that elevate your chocolate experience to a higher level.',
    
    // Whisky section
    whiskyTitle: 'Whisky & Bourbon',
    whiskyIntro: 'Whisky and chocolate share complex flavor profiles with wood, spices, caramel and smoky notes that beautifully complement each other.',
    whisky1Title: 'Dark Chocolate (70-80%)',
    whisky1Pairing: '+ Single Malt Scotch (Speyside)',
    whisky1Text: 'Speyside whiskies with honey, fruity and floral notes complement the bittersweet complexity of dark chocolate. Try Glenfiddich or Macallan.',
    whisky2Title: 'Chocolate with salted caramel',
    whisky2Pairing: '+ Bourbon (Kentucky)',
    whisky2Text: 'The vanilla, caramel and sweet corn notes of bourbon are perfect for chocolate with salted caramel. Try Buffalo Trace or Maker\'s Mark.',
    whisky3Title: 'Extra dark chocolate (85%+)',
    whisky3Pairing: '+ Peated Islay Whisky',
    whisky3Text: 'The smoky, peaty notes of Islay whisky like Laphroaig or Ardbeg create a dramatic, intense pairing with very dark chocolate.',
    whisky4Title: 'Milk chocolate with nuts',
    whisky4Pairing: '+ Irish Whiskey',
    whisky4Text: 'The smooth, triple distilled Irish whiskey with soft vanilla and nutty notes pairs with milk chocolate with hazelnut or almond.',
    whisky5Title: 'Chocolate with spices',
    whisky5Pairing: '+ Rye Whiskey',
    whisky5Text: 'The spicy, peppery notes of rye whiskey are ideal for chocolate with cinnamon, chili or other spices. Try Bulleit Rye.',
    whisky6Title: 'Chocolate with cherries or berries',
    whisky6Pairing: '+ Sherry Cask Whisky',
    whisky6Text: 'Whisky aged in sherry casks (like GlenDronach) with dried fruit and nuts harmonizes with chocolate with cherries, raspberries or raisins.',
    
    // Whisky tips
    whiskyTipsTitle: 'Tasting tips for whisky & chocolate',
    whiskyTip1: 'Don\'t add ice - This dilutes the whisky and prevents the pairing',
    whiskyTip2: 'Take small sips - Let the whisky mix with the chocolate in your mouth',
    whiskyTip3: 'Start with lower ABV - 40-43% alcohol works better than cask strength',
    whiskyTip4: 'Match intensities - Strong whisky with dark chocolate, mild with milk chocolate',
    whiskyTip5: 'Smell first - The nose of both products prepares your taste buds',
    
    // Tasting order
    tastingOrderTitle: 'Tasting Order',
    tastingOrder1: 'Take a small sip of whisky, let it circulate and swallow',
    tastingOrder2: 'Wait 10-15 seconds to let the flavor settle',
    tastingOrder3: 'Take a piece of chocolate and let it melt slowly',
    tastingOrder4: 'When the chocolate is half melted, take a small sip of whisky',
    tastingOrder5: 'Let both flavors mix and discover new flavor dimensions',
    tastingOrder6: 'Note the finish - how long do the flavors linger?',
    
    // Wine section
    wineTitle: 'Wine Pairings',
    wineIntro: 'Wine and chocolate create magical combinations when tannins, acids and sweetness are in balance.',
    wine1Title: 'Dark Chocolate (70%+)',
    wine1Pairing: '+ Red Port or Cabernet Sauvignon',
    wine1Text: 'Full-bodied red wines with strong tannins balance the bitterness of dark chocolate. Port with its sweetness complements perfectly.',
    wine2Title: 'Milk Chocolate',
    wine2Pairing: '+ Moscato d\'Asti or Banyuls',
    wine2Text: 'Sweet dessert wines with light fizz and fruity aromas harmonize with the creaminess of milk chocolate.',
    wine3Title: 'White Chocolate',
    wine3Pairing: '+ Riesling or Champagne',
    wine3Text: 'The acidity of these wines cuts through the sweetness and buttery accents of white chocolate.',
    wine4Title: 'Chocolate with Fruit',
    wine4Pairing: '+ Pinot Noir or Lambrusco',
    wine4Text: 'Fruity red wines with cherry and berry aromas match perfectly with chocolate with raspberries or cherries.',
    wineTipsTitle: 'Wine Pairing Tips',
    wineTip1: 'Wine must be sweeter than chocolate to avoid bitterness',
    wineTip2: 'Match intensities - light chocolate with light wine',
    wineTip3: 'Serve at room temperature for optimal taste',
    
    // Coffee section
    coffeeTitle: 'Coffee Pairings',
    coffeeIntro: 'Coffee and chocolate share deep, complex flavors that harmonize perfectly when well combined.',
    coffee1Title: 'Dark Chocolate (70-85%)',
    coffee1Pairing: '+ Espresso or French Press',
    coffee1Text: 'Strong, pure coffee with the bitter notes of dark chocolate creates an intense, satisfying combination.',
    coffee2Title: 'Milk Chocolate',
    coffee2Pairing: '+ Cappuccino or Latte',
    coffee2Text: 'Coffee with milk and milk chocolate share creaminess and soft flavors that complement each other.',
    coffee3Title: 'Chocolate with Nuts',
    coffee3Pairing: '+ Macchiato or Cortado',
    coffee3Text: 'The nutty notes in both products resonate and create a harmonious experience.',
    coffee4Title: 'Chocolate with Caramel',
    coffee4Pairing: '+ Cold Brew or Iced Coffee',
    coffee4Text: 'The smooth, sweet flavors of cold brew complement caramel chocolate without bitterness.',
    coffeeTipsTitle: 'Coffee Pairing Tips',
    coffeeTip1: 'Let coffee cool slightly for optimal taste experience',
    coffeeTip2: 'Try single-origin coffees for specific flavor profiles',
    coffeeTip3: 'Take small pieces of chocolate between sips',
    
    // Cheese section
    cheeseTitle: 'Cheese Pairings',
    cheeseIntro: 'The combination of sweet chocolate with salty, umami-rich cheeses creates surprising and delicious contrasts.',
    cheese1Title: 'Dark Chocolate (70%+)',
    cheese1Pairing: '+ Manchego or Pecorino',
    cheese1Text: 'Aged sheep cheeses with nutty flavors and grainy texture match with dark chocolate.',
    cheese2Title: 'Milk Chocolate',
    cheese2Pairing: '+ Blue Cheese (Roquefort, Gorgonzola)',
    cheese2Text: 'The sweet creaminess of milk chocolate perfectly balances the strong, salty flavors of blue cheese.',
    cheese3Title: 'White Chocolate',
    cheese3Pairing: '+ Brie or Camembert',
    cheese3Text: 'Soft, creamy cheeses with buttery flavors harmonize with the sweet vanilla notes of white chocolate.',
    cheese4Title: 'Chocolate with Nuts',
    cheese4Pairing: '+ Aged Gouda or Gruyère',
    cheese4Text: 'The caramel-like crystals in aged cheeses and nuts in chocolate create a rich, complex combination.',
    cheeseTipsTitle: 'Cheese Pairing Tips',
    cheeseTip1: 'Let cheese come to room temperature 30 minutes before serving',
    cheeseTip2: 'Start with milder combinations and work towards more intense flavors',
    cheeseTip3: 'Add nuts and honey for extra dimension',
    
    // Other pairings
    otherPairingsTitle: 'Other Surprising Pairings',
    fruitTitle: 'Fruit',
    fruitText: 'Fresh raspberries, strawberries or orange with dark chocolate. The acids in fruit cut through the richness.',
    chiliTitle: 'Chili',
    chiliText: 'Dark chocolate with chipotle or cayenne pepper. The heat amplifies the complexity of cacao.',
    teaTitle: 'Tea',
    teaText: 'Earl Grey with milk chocolate, or green tea with white chocolate. Tannins and aromas are synergies.',
    baconTitle: 'Bacon',
    baconText: 'Smoked bacon with dark chocolate. Sweet, salty and umami create an unexpected but delicious combination.',
    iceCreamTitle: 'Ice Cream',
    iceCreamText: 'Vanilla ice cream with warm chocolate sauce. The temperature contrasts and textures make this timeless.',
    saltTitle: 'Salt',
    saltText: 'Sea salt or fleur de sel on dark chocolate. The salt amplifies the sweetness and complexity.',
    
    // Pairing principles
    principlesTitle: 'General Pairing Principles',
    principle1Title: 'Match or Contrast',
    principle1Text: 'You can match flavors (e.g. nutty chocolate with nutty cheese) or contrast (sweet vs salty).',
    principle2Title: 'Intensity Balance',
    principle2Text: 'Strong flavors with strong chocolate, subtle flavors with mild chocolate. Balance is key.',
    principle3Title: 'Temperature',
    principle3Text: 'Let chocolate and pairings come to room temperature for optimal taste experience.',
    principle4Title: 'Experiment',
    principle4Text: 'The best pairings are discovered through experimentation. Trust your taste buds and have fun!',
    
    // History page
    historyTitle: 'History of Belgian Chocolate',
    historyIntro: 'From the invention of the praline to contemporary innovations',
    historyIntro1: 'Belgium\'s chocolate tradition is world-famous and spans more than four centuries. From the first cacao beans that arrived in Europe in the 17th century to the innovative pralines we know today - Belgian chocolate history is a story of passion, innovation and craftsmanship.',
    historyIntro2: 'Discover how Belgium grew into one of the most respected chocolate producers in the world.',
    timelineTitle: 'Timeline',
    
    // Timeline events
    year1635: '1635',
    year1635Title: 'Cacao Arrives in the Low Countries',
    year1635Desc: 'Via Spanish and Portuguese traders, the first cacao beans arrive in Belgium. The Spanish occupiers introduce chocolate as a luxury product for the nobility.',
    
    year1857: '1857',
    year1857Title: 'Neuhaus is Founded',
    year1857Desc: 'Jean Neuhaus opens his pharmacy in the Galeries Royales Saint-Hubert in Brussels, where he sells chocolate as medicine to mask bitter remedies.',
    
    year1912: '1912',
    year1912Title: 'The Praline is Invented',
    year1912Desc: 'Jean Neuhaus Jr. creates the first praline - a chocolate shell filled with ganache, nougat or soft caramel. This invention changes the chocolate industry forever.',
    
    year1915: '1915',
    year1915Title: 'The Ballotin is Introduced',
    year1915Desc: 'Louise Agostini, wife of Jean Neuhaus Jr., designs the first ballotin - an elegant packaging especially for pralines. This becomes the standard for luxury chocolate packaging.',
    
    year1926: '1926',
    year1926Title: 'Godiva is Born',
    year1926Desc: 'Pierre Draps Sr. opens his first Godiva shop in Brussels. The brand is named after Lady Godiva and grows into a global luxury chocolate icon.',
    
    year1958: '1958',
    year1958Title: 'Guylian\'s Seashells',
    year1958Desc: 'Guylian introduces their iconic seashell chocolates filled with hazelnut praliné. This innovative shape and filling become popular worldwide.',
    
    year1980s: '1980s',
    year1980sTitle: 'Rise of Artisan Chocolatiers',
    year1980sDesc: 'A new generation of chocolatiers like Pierre Marcolini and Wittamer bring artisanal methods and innovative flavors, combining traditional craftsmanship with modern creativity.',
    
    year2000s: '2000s',
    year2000sTitle: 'Bean-to-Bar Movement',
    year2000sDesc: 'Belgian chocolatiers embrace the bean-to-bar philosophy, taking control of the entire process from cacao bean to final product. This ensures transparency and quality.',
    
    yearToday: 'Today',
    yearTodayTitle: 'Global Recognition',
    yearTodayDesc: 'Belgium produces more than 220,000 tons of chocolate per year and remains a global leader in quality, innovation and craftsmanship. Belgian chocolate is a protected cultural heritage.',
    
    // Belgian facts
    factsTitle: 'Belgian Chocolate Facts',
    fact1Title: 'Inventor of the Praline',
    fact1Text: 'Belgium invented the filled praline in 1912 - now copied worldwide but never equaled',
    fact2Title: '2,000+ Chocolate Shops',
    fact2Text: 'More chocolate shops per capita than any other country in the world',
    fact3Title: '220,000 tons per year',
    fact3Text: 'Belgium produces more than 220,000 tons of high-quality chocolate per year',
    fact4Title: '8 kg per person',
    fact4Text: 'Belgians consume an average of 8 kilograms of chocolate per person per year',
    fact5Title: 'Global Export',
    fact5Text: 'Belgian chocolate is exported to more than 100 countries worldwide',
    fact6Title: 'Generational Craftsmanship',
    fact6Text: 'Many chocolate companies are family businesses that pass down their craft from generation to generation',
    
    // History CTA
    historyCTATitle: 'Discover the Tradition',
    historyCTAText: 'Visit the chocolatiers who continue this rich tradition and taste the difference of generational craftsmanship.',
    historyCTAButton: 'View Directory',
    
    // About page
    aboutTitle: 'About Our Guide',
    aboutIntro1: 'Belgian Chocolate Guide was born from a passion for authentic Belgian chocolate and a desire to spotlight smaller, artisan chocolatiers.',
    aboutIntro2: 'We believe that every chocolatier has a unique story and makes their own contribution to the rich tradition of Belgian chocolate.',
    aboutFeature1Title: 'Hidden Gems',
    aboutFeature1Text: 'We help you discover smaller artisan chocolatiers that are often overlooked but deliver exceptional quality.',
    aboutFeature2Title: 'Authentic Quality',
    aboutFeature2Text: 'Only chocolatiers who remain true to traditional methods and quality ingredients are included in our guide.',
    
    // Footer
    footerAboutTitle: 'About',
    footerLinksTitle: 'Quick Links',
    footerContactTitle: 'Contact',
    footerFollowTitle: 'Follow Us',
    footerText: '© 2024 Belgian Chocolate Guide. All rights reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    contact: 'Contact'
  }
};

// Global translation function
let currentLang = 'nl';

function t(key) {
  // Ensure translations object exists
  if (!translations) {
    console.error('Translations object not loaded');
    return key;
  }
  
  // Get translation with fallback chain
  const translation = translations[currentLang]?.[key] || translations.nl?.[key];
  
  // Return translation or key if not found
  return translation || key;
}

function initLanguage() {
  // Get language from URL, localStorage, or default to nl
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const storedLang = localStorage.getItem('language');
  
  if (urlLang && ['nl', 'fr', 'en'].includes(urlLang)) {
    currentLang = urlLang;
    localStorage.setItem('language', urlLang);
  } else if (storedLang && ['nl', 'fr', 'en'].includes(storedLang)) {
    currentLang = storedLang;
  }
  
  // Update HTML lang attribute
  document.documentElement.lang = currentLang;
  
  // Update language selector dropdowns
  const selectors = document.querySelectorAll('#languageSelector, #mobileLanguageSelector');
  selectors.forEach(selector => {
    if (selector) selector.value = currentLang;
  });
  
  // Update all navigation links to include current language
  updateNavigationLinks();
  
  // Translate page content
  translatePage();
}

function updateNavigationLinks() {
  const links = document.querySelectorAll('a[href^="/"], a[href^="?"]');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.includes('lang=')) {
      const separator = href.includes('?') ? '&' : '?';
      link.setAttribute('href', `${href}${separator}lang=${currentLang}`);
    }
  });
}

function translatePage() {
  // Translate elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && translations && translations[currentLang]) {
      const translation = translations[currentLang][key];
      // Only update textContent if translation exists
      if (translation) {
        el.textContent = translation;
      }
    }
  });
  
  // Translate placeholders
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && translations && translations[currentLang]) {
      const translation = translations[currentLang][key];
      if (translation) {
        el.placeholder = translation;
      }
    }
  });
  
  // Update page title if it has data-i18n-title
  const titleKey = document.body.getAttribute('data-i18n-title');
  if (titleKey && translations && translations[currentLang]) {
    const titleTranslation = translations[currentLang][titleKey];
    const siteTranslation = translations[currentLang]['siteTitle'];
    if (titleTranslation && siteTranslation) {
      document.title = `${titleTranslation} - ${siteTranslation}`;
    }
  }
}

// Setup language switchers
function setupLanguageSwitchers() {
  const selectors = document.querySelectorAll('#languageSelector, #mobileLanguageSelector');
  selectors.forEach(selector => {
    selector?.addEventListener('change', (e) => {
      const newLang = e.target.value;
      localStorage.setItem('language', newLang);
      
      // Update URL with new language
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('lang', newLang);
      window.location.search = urlParams.toString();
    });
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    setupLanguageSwitchers();
  });
} else {
  initLanguage();
  setupLanguageSwitchers();
}
