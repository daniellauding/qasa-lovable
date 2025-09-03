export const sv = {
  // Common
  common: {
    previous: 'Föregående',
    next: 'Nästa',
    loading: 'Laddar...',
    error: 'Något gick fel',
    verified: 'Verifierad',
    premium: 'Premium',
    cancel: 'Avbryt',
    apply: 'Tillämpa',
    back: 'Tillbaka',
    language: 'Språk',
    clear: 'Rensa',
    helpCenter: 'Hjälpcenter',
    skip: 'Hoppa över',
  },

  // Header
  header: {
    homes: 'Bostäder',
    tenants: 'Hyresgäster', 
    howItWorks: 'Så fungerar det',
    rentOut: 'Hyr ut',
    login: 'Logga in',
    signup: 'Registrera dig',
    messages: 'Meddelanden',
    favorites: 'Favoriter',
    profile: 'Profil',
    menu: 'Meny',
    close: 'Stäng',
  },

  // Header Menu Items
  headerMenu: {
    leases: 'Hyresavtal och bokningar',
    profile: 'Profil',
    savedSearches: 'Sparade sökningar',
    settings: 'Inställningar',
    howItWorks: 'Så fungerar det',
    help: 'Hjälp',
    language: 'Språk',
    logout: 'Logga ut',
    premiumTitle: 'Hitta ditt nästa hem enklare med',
    premiumBrand: 'Qasa Premium',
  },

  // Authentication
  auth: {
    login: {
      title: 'Välkommen tillbaka',
      subtitle: 'Logga in för att hantera din uthyrning eller hitta ditt nästa hem.',
      emailLabel: 'E-post',
      passwordLabel: 'Lösenord',
      forgotPassword: 'Glömt lösenord?',
      loginButton: 'Logga in',
      noAccount: 'Har du inget konto?',
      signupButton: 'Registrera dig',
    },
    forgotPassword: {
      title: 'Glömt lösenord',
      subtitle: 'Ange din e-postadress nedan så skickar vi ett mejl för att återställa ditt lösenord.',
      emailLabel: 'E-post',
      resetButton: 'Återställ lösenord',
      backButton: 'Tillbaka',
    },
    register: {
      title: 'Välkommen hem',
      subtitle: 'Skapa ett gratis konto för att hitta eller hyra ut ett hem.',
      userTypeLabel: 'Jag vill:',
      userTypes: {
        tenant: 'Hyra en bostad',
        landlord: 'Hyra ut en bostad',
      },
      emailLabel: 'E-post',
      passwordLabel: 'Lösenord',
      createAccountButton: 'Skapa konto',
      hasAccount: 'Har du redan ett konto?',
      loginButton: 'Logga in',
      step2: {
        title: 'Verifiera din mejl',
        subtitle: 'Fyll i koden vi skickade till',
        resendCode: 'skicka en ny kod',
        didntGetCode: 'Fick du inte koden?',
        checkSpam: 'Kontrollera din skräppost eller',
        verifyButton: 'Verifiera',
        instruction: 'Klicka var som helst för att fortsätta eller fyll i alla 6 siffror för att gå vidare automatiskt',
      },
      step3: {
        title: 'Välkommen in!',
        subtitle: 'Berätta gärna lite mer om dig själv.',
        firstNameLabel: 'Förnamn',
        lastNameLabel: 'Efternamn',
        phoneLabel: 'Telefonnummer',
        phonePlaceholder: 'Ex: +4673 xxx xx xx',
        addPhoto: 'Lägg till bild',
        changePhoto: 'Ändra bild',
        removePhotoLabel: 'Ta bort profilbild',
        privacyNote: 'Ditt efternamn och telefonnummer är endast synliga för dig.',
        nextButton: 'Nästa',
        profilePicHint: 'Ladda upp en profilbild för att öka dina chanser att få svar.',
        bioLabel: 'Beskriv dig själv med några meningar',
        bioOptional: '(Valfritt)',
        bioPlaceholder: 'Exempel: Jag bor just nu i Sundsvall och letar boende i Göteborg tillsammans med min pojkvän Adam, eftersom vi ska flytta dit i juli. Vi är ansvarsfulla och lugna personer som tycker om att vara ute i naturen.',
        tenantCountLabel: 'Antal hyresgäster',
        tenantCountOptional: '(Valfritt)',
        moveInLabel: 'Inflytt',
        moveInAsap: 'Snarast möjligt',
        moveInChooseDate: 'Välj datum',
      },

    },
  },

  // Language Modal
  languageModal: {
    title: 'Språk',
    subtitle: 'Välj ditt föredragna språk',
  },

  // Property Details
  propertyDetails: {
    title: 'Billingevägen, Röstånga',
    rooms: 'rum',
    sqm: 'm²',
    price: 'kr/mån',
    moveInDate: 'Inflyttning',
    duration: 'Tillsvidare',
    location: 'Plats',
    allImages: 'Alla bilder',
    description: 'Beskrivning',
    quickInsights: 'Snabba insikter',
    contact: 'Kontakta',
    superApply: 'Superansök',
    rentBetter: 'Hyr bättre och tryggare med Qasa',
    rentBetterDescription: 'Detta hem har en verifierad hyresvärd, ett tryggt hyresavtal och dedikerad support 7 dagar i veckan. Alla betalningar hanteras genom oss.',
    readMore: 'Läs mer',
    showMore: 'Visa mer',
    applyTo: 'Ansök till',
    datesTitle: 'Hyresperiod',
    rentTitle: 'Hyra',
    amenitiesTitle: 'Bekvämligheter',
    houseRulesTitle: 'Husregler och tillgänglighet',
    published: 'Publicerad',
    today: 'Idag',
    viewings: 'Visningar',
    applicants: 'Antal sökande',
    responseTime: 'Svarstid',
    lessThan24h: '< 24h',
    busStop: 'min till busshållplats',
    toCenter: 'min till centrum',
    amenities: {
      balcony: 'Balkong',
      internet: 'Internet',
      ownShower: 'Egen dusch',
      bathtub: 'Badkar',
      parking: 'Parkering',
      dishwasher: 'Diskmaskin',
      oven: 'Ugn',
      storage: 'Förråd'
    },
    rentDetails: {
      monthlyCost: 'Månadskostnad',
      rent: 'Hyra',
      serviceFee: 'Serviceavgift',
      additionalCosts: 'Övriga kostnader',
      electricityFee: 'Elkostnad',
      included: 'Detta ingår'
    },
    landlord: {
      meetYourLandlord: 'Möt din hyresvärd',
      landlordName: 'Samtrygg AB',
      landlordType: 'Hyresvärd',
      landlordDescription: 'Vi publicerar nya annonser varje dag. Följ länken i våra annonser till samtrygg.se för att boka visning tryggt, enkelt och kostnadsfritt. Samtrygg is the safe marketplace for home rentals. Follow the link in our ads to book a viewing.',
      insights: 'Insikter',
      publishedDaysAgo: 'Publicerad {days} dagar sedan',
      views: '{views} visningar',
      applicantsCount: '{count} sökande',
      conversations: '{count} öppna konversationer',
      similarRent: 'Hyra för liknande hem inte tillgänglig',
      responseTime: 'Svarar vanligtvis inom {time}',
      unlockInsights: 'Lås upp alla insikter med',
      getPremium: 'Skaffa Qasa Premium',
      readMore: 'Läs mer'
    },
    amenitiesTitle: 'Bekvämligheter',
    houseRulesTitle: 'Husregler och tillgänglighet',
    houseRules: {
      upToTenants: 'Upp till {count} hyresgäster',
      noPets: 'Inga husdjur',
      notWheelchairAccessible: 'Ej rullstolsanpassad',
      noSmoking: 'Rökning förbjuden'
    },
    datesTitle: 'Datum',
    rentTitle: 'Hyra',
    rentDetails: {
      monthlyCost: 'Månadskostnad',
      rent: 'Hyra',
      serviceFee: 'Serviceavgift',
      additionalCosts: 'Tilläggskostnader',
      electricityFee: 'Elavgift',
      included: 'Ingår',
      deposit: 'Deposition'
    },
    description: {
      modernApartment: 'Modern lägenhet med öppen planlösning och gott om naturligt ljus. Lägenheten ligger i ett lugnt område med närhet till kommunikationer och service. Parkering ingår och fiber finns indraget.',
      autoTranslated: 'Den här beskrivningen har översatts automatiskt till engelska och kan innehålla felaktigheter. Visa original'
    },
    moreHomes: {
      title: 'Fler bostäder du kanske gillar',
      allHomesIn: 'Alla bostäder i {location}',
      allApartmentsIn: 'Alla lägenheter i {location}'
    }
  },

  // Footer
  footer: {
    homepage: 'Startsidan',
    searchHome: 'Sök bostad',
    findTenant: 'Hitta hyresgäst',
    messages: 'Meddelanden',
    myListings: 'Mina annonser',
    rentals: 'Uthyrningar',
    help: 'Hjälp',
    logout: 'Logga ut',
    sitemap: 'Sitemap',
    premium: 'Qasa Premium',
    pricing: 'Prissättning',
    housingRentals: 'Förstahand',
    forCompanies: 'Företag',
    termsConditions: 'Användarvillkor',
    blog: 'Blogg',
    careers: 'Jobba hos oss',
    pressMedia: 'Press & media',
    language: 'Svenska',
  },

  // Homes Page
  homes: {
    title: 'Hitta bostad att hyra',
    searchPlaceholder: 'Sök på stad eller område',
    resultsCount: '{count} bostäder',
    sortBy: 'Sortera efter',
    sortOptions: {
      newest: 'Nyast',
      oldest: 'Äldst',
      priceAsc: 'Pris: Lägst till högst',
      priceDesc: 'Pris: Högst till lägst',
      sizeAsc: 'Storlek: Liten till stor',
      sizeDesc: 'Storlek: Stor till liten',
    },
  },

  // Find Tenant Page
  findTenant: {
    title: 'Hitta din ideala hyresgäst',
    subtitle: 'Bläddra bland verifierade hyresgästprofiler och träffa kvalitetsinhyrare',
    tenantCount: '{count} hyresgäster i Sverige',
    landlordCTA: {
      title: 'Letar du efter en hyresgäst?',
      description: 'Skapa ett hem för att kontakta våra verifierade hyresgäster.',
    },
    createProfile: {
      title1: 'Vill du att hyresgäster ska hitta dig?',
      description1: 'Lägg upp din fastighet och låt verifierade hyresgäster kontakta dig direkt.',
      button1: 'Lägg upp fastighet',
      title2: 'Nå fler hyresgäster',
      description2: 'Uppgradera till premium för bättre synlighet och snabbare matchningar.',
      button2: 'Bli premium',
    },
    tenantProfile: {
      viewProfile: 'Visa {name}s profil',
      people: 'personer',
      rooms: 'rum',
      maxRent: 'Max hyra',
      furnished: 'Möblerad',
      unfurnished: 'Omöblerad',
      partiallyFurnished: 'Delvis möblerad',
      either: 'Spelar ingen roll',
      moveDate: 'Inflyttningsdatum',
      untilFurtherNotice: 'Tills vidare',
    },
  },

  // Tenant Descriptions (original Swedish content)
  tenantDescriptions: {
    1: 'Gift par som söker lägenhet i Jonsered eller Partille.',
    2: 'Studentpar som letar efter mysig lägenhet i Stockholm',
    3: 'Ung yrkesverksam som söker modern lägenhet',
    4: 'Doktorand som letar efter tyst studieplats',
    5: 'Familj med ett barn som söker större lägenhet',
    6: 'Yrkesverksam inom tech, ren och pålitlig',
    7: 'Kreativ designer som söker inspirerande miljö',
    8: 'Musikstudent som behöver lugn och ro för övning',
    9: 'Ung läkare som söker närhet till sjukhus',
    10: 'Konstnär som letar efter ljus ateljélägenhet',
    11: 'Ingenjör som föredrar moderna faciliteter',
    12: 'Journalist som söker central lägenhet',
    13: 'Lärare som vill bo nära skola och kollektivtrafik',
    14: 'Arkitekt som uppskattar designdetaljer',
    15: 'Ekonom som söker praktisk och funktionell bostad',
  },

  // Landing Page
  landing: {
    hero: {
      title: 'Ett bättre sätt att hyra',
      subtitle: 'Hitta ett hem som känns rätt. Enkelt, tryggt och schysst.',
      ctaPrimary: 'Sök bostäder',
      ctaSecondary: 'Så fungerar det'
    },
    cities: {
      count: '{count} hem',
    },
    featuresTitle: 'Hyr med Qasa och känna dig trygg',
    premium: {
      label: 'För hemletare',
      title: 'Hitta ditt nästa hem dubbelt så enkelt med',
      button: 'Läs mer',
    },
    husfrid: {
      label: 'HusFrid – ett initiativ från Qasa för att hjälpa kvinnor och barn till ett hem fritt från våld',
      title: 'Genom HusFrid hjälper vi våldsutsatta kvinnor och barn hitta ett nytt hem.',
      button: 'Läs mer',
    },
    firstHand: {
      label: 'Förstahandskontrakt',
      title: 'Nu har vi flest förstahandskontrakt.',
      subtitle: 'Ställ dig i bostadskön, helt gratis!',
      button: 'Gå med i kön',
    },
    testimonials: {
      items: {
        0: { quote: 'Jämförelsevis en av de bästa plattformarna för hyresbostäder. Mycket enkelt och transparent efter att man fått en match.', author: 'Marina' },
        1: { quote: 'Jag provade flera sätt att hitta lägenhet och Qasa är bäst.', author: 'Jan' },
      },
    },
    features: {
      noDeposit: { title: 'Ingen deposition', desc: 'Behåll dina pengar — vi tar hand om depositionen.' },
      payLater: { title: 'Flytta in först, betala sen', desc: 'Flexibilitet när livet händer.' },
      protection: { title: 'Skydd och expertstöd', desc: 'Trygga avtal och personlig support.' }
    },
    stats: {
      applicants: '5+ miljoner', applicantsHint: 'ansökningar varje år',
      homes: '600 000+', homesHint: 'publicerade hem sedan starten',
      rating: '4,4 av 5', ratingHint: 'på Trustpilot'
    },
    faq: {
      title: 'Vanliga frågor',
      links: {
        0: 'Så funkar det för hyresvärdar',
        1: 'Så funkar det för hyresgäster',
        2: 'Så hyr du ut semesterboende',
        3: 'Vad händer om hyresgästen inte betalar?',
        4: 'Är min uthyrning försäkrad?',
        5: 'Vad kan jag hyra ut för?',
        6: 'Behöver jag tillstånd för att hyra ut?',
        7: 'Hur skriver jag hyresavtal?',
        8: 'Vad är Qasa Premium',
      },
    },
    cta: {
      title: 'Redo att komma igång?',
      subtitle: 'Skapa ett gratis konto och börja din resa idag.',
      button: 'Skapa profil'
    }
  },

  landlords: {
    createListing: {
      step1: { title: 'Berätta lite om ditt hem.', description: 'Låt oss börja med att lägga grunden för din annons, såsom storlek och plats.' },
      step2: { 
        title: 'Vilken adress har bostaden?', 
        description: 'Vi behöver din fullständiga adress för att kunna visa ditt hem på en karta. Endast gatunamnet syns i annonsen.',
        fillManually: 'Fyll i adressen manuellt'
      },
      step3: {
        title: 'Är markören på rätt ställe?',
        description: 'Justera markörens position så den visar var din bostad ligger.'
      },
      step6: {
        title: 'Vilken typ av bostad är det?',
        propertyTypes: {
          apartment: 'Lägenhet',
          house: 'Villa',
          terrace: 'Radhus',
          cottage: 'Stuga',
          duplex: 'Parhus',
          corridor: 'Korridorsrum',
          loft: 'Loftgångshus',
          other: 'Övrigt'
        },
        ownershipLabel: 'Bostadsform',
        ownershipPlaceholder: 'Ange bostadsform',
        ownership: {
          condominium: 'Bostadsrätt',
          proprietary: 'Villa eller äganderätt',
          tenancy: 'Hyresrätt'
        },
        propertyTypeHint: 'Välj "Övrigt" om ingen av alternativen ovan matchar din typ av bostad',
        ownershipHint: 'Informationen kommer inte att visas i annonsen, men finns här så att vi kan hjälpa dig skriva ett korrekt hyresavtal när du är redo.'
      },
      step7: {
        title: 'Hur stor är bostaden?',
        sizeLabel: 'Storlek',
        roomsLabel: 'Antal rum',
        bedroomsLabel: 'Antal sovrum',
        bedroomsOptional: '(Valfritt)',
        bedroomsHint: 'Sovrum är inkluderade i totalt antal rum'
      },
      step8: {
        title: 'När vill du hyra ut bostaden?',
        moveInLabel: 'Inflytt',
        moveOutLabel: 'Utflytt',
        moveInASAP: 'Snarast möjligt',
        moveOutIndefinite: 'Tillsvidare',
        selectDate: 'Välj datum',
        onlyRentalQuestion: 'Är detta den enda bostad du hyr ut?',
        onlyRentalYes: 'Ja, det är min enda uthyrning',
        onlyRentalNo: 'Nej, det är inte min enda uthyrning'
      },
      step9: {
        partIndicator: 'Del 2 av 3',
        title: 'Vad får ditt hem att sticka ut?',
        description: 'Lägg till bilder och beskrivning för att få din annons att stå ut ur mängden.'
      },
      step10: {
        title: 'Vilka bekvämligheter finns i bostaden?',
        description: 'Markera allt som ingår i uthyrningen.',
        categories: {
          kitchen: 'Kök',
          bathroom: 'Badrum',
          laundry: 'Tvätt',
          popular: 'Populära',
          technology: 'Teknik',
          parkingAndStorage: 'Parkering och hjälpmedel'
        },
        amenities: {
          fridge: 'Kylskåp',
          freezer: 'Frys',
          oven: 'Ugn',
          stove: 'Spis',
          dishwasher: 'Diskmaskin',
          microwave: 'Mikrovågsugn',
          kitchenette: 'Kokvrå',
          shower: 'Egen dusch',
          toilet: 'Egen toalett',
          bathtub: 'Badkar',
          washing_machine: 'Tvättmaskin',
          dryer: 'Torktumlare',
          laundry_room: 'Tvättstuga',
          drying_room: 'Torkrum',
          balcony: 'Balkong',
          french_balcony: 'Fransk balkong',
          patio: 'Uteplats',
          sauna: 'Egen bastu',
          shared_sauna: 'Delad bastu',
          jacuzzi: 'Bubbelpool',
          fireplace: 'Eldstad inomhus',
          pool: 'Pool',
          ac: 'Luftkonditionering',
          internet: 'Internet',
          tv: 'TV',
          bike_room: 'Cykelrum',
          storage: 'Förråd',
          elevator: 'Hiss',
          car_charger: 'Laddbox till elbil',
          parking_included: 'Parkering ingår',
          parking_available: 'Parkering tillgänglig',
          recycling: 'Återvinningsrum',
          security_door: 'Säkerhetsdörr',
          alarm: 'Inbrottslarm',
          stroller_room: 'Barnvagnsrum'
        },
        insuranceTitle: 'Försäkrad genom Qasa',
        insuranceDescription: 'Vi står för skador på din fastighet under hela hyresperioden.'
      },
      step11: {
        title: 'Mer om bostaden och dess skick',
        description: 'Sökande är ofta intresserade av renoveringar och när huset byggdes.',
        conditionLabel: 'Bostadens skick',
        buildYearLabel: 'Bostadens byggnadsår',
        bathroomRenoLabel: 'Badrum - år sedan renovering',
        kitchenRenoLabel: 'Kök - år sedan renovering',
        energyClassLabel: 'Energiklass',
        optional: '(Valfritt)',
        conditionOptions: {
          unknown: 'Vet inte',
          new: 'Nyskick',
          good: 'Bra',
          satisfactory: 'Tillfredsställande',
          poor: 'Dålig'
        },
        renovationOptions: {
          unknown: 'Vet inte',
          '0-4': '0-4',
          '5-9': '5-9',
          '10-19': '10-19',
          '20+': '20+'
        }
      },
      step12: {
        title: 'Beskriv din bostad',
        description: 'Beskriv din bostad, området och det du vill förmedla i annonstexten. Du kan enkelt ändra din beskrivning senare.',
        aboutHomeLabel: 'Om bostaden',
        placeholder: 'Beskrivning',
        hintTitle: 'Saker hyresgäster ofta undrar över:',
        hintItems: [
          'Planlösning',
          'Vad som ingår i hyran',
          'Kommunikation',
          'Varför du hyr ut din bostad'
        ]
      },
      step13: {
        title: 'Bilder på ditt hem',
        description: 'Ladda upp ljusa och tydliga bilder – ju fler desto bättre. Några bra foton gör att annonsen sticker ut och sparar dig från onödiga frågor.',
        uploadButton: 'Ladda upp bilder',
        uploading: 'Laddar upp bilder...',
        fileInfo: 'Du kan ladda upp PNG och JPG. Maximal storlek per foto är 30MB.',
        mainImageTitle: 'Visningsbild',
        otherImagesTitle: 'Övriga bilder',
        guidelinesTitle: 'Riktlinjer för bilder',
        guidelinesButton: 'Se alla riktlinjer',
        modalTitle: 'Riktlinjer för bilder',
        modalDescription: 'Några fantastiska bilder kan vara skillnaden mellan en snabb matchning och veckors väntan.',
        guidelines: [
          'Ta bilder i liggande format av alla rum i hemmet',
          'Undvik text, stående bilder, skärmdumpar och suddiga bilder'
        ]
      },
      step14: {
        partIndicator: 'Del 3 av 3',
        title: 'Bra jobbat! Bara några få frågor kvar.',
        description: 'Gör klart din annons och förhandsgranska den innan publicering.'
      },
      step15: {
        title: 'Regler och tillgänglighet',
        description: 'Ange regler och tillgänglighet för ditt boende',
        maxOccupantsLabel: 'Hur många kan bo här?',
        petsAllowedLabel: 'Husdjur tillåtet',
        smokingAllowedLabel: 'Rökning tillåten',
        wheelchairAccessibleLabel: 'Tillgänglig med rullstol',
        yes: 'Ja',
        no: 'Nej'
      },
      step16: {
        title: 'Vilken hyra hade du tänkt dig?',
        description: 'Fyll i hyran utan övriga kostnader.',
        recommendedRentLabel: 'Rekommenderad hyra',
        recommendedRentAmount: '7 730 kr',
        rentLabel: 'Hyra',
        rentHelperText: 'Hyresgästens månadskostnad är hyran + 5.95% serviceavgift. Den hyra du anger är vad du får utbetalt varje månad - inga kostnader tillkommer för dig som hyresvärd.',
        overRecommendedChip: 'Över rekommenderad hyra',
        modalTitle: 'Vad innebär rekommenderad hyra?',
        modalDescription: 'Enligt vår statistik på tusentals uthyrda bostäder som liknar din, är hyresrekommendationen på en nivå som vi tror kommer ge en snabb och framgångsrik uthyrning.',
        modalPriceRange: 'Baserat på den information vi har om ditt hem och vår statistik på tidigare signerade kontrakt tror vi att en bra hyra ligger någonstans mellan 7 189 kr och 8 271 kr.',
        modalFactorsTitle: 'Den rekommenderade hyran baseras på information om ditt hem, till exempel:',
        modalFactors: {
          size: 'Storlek (m²) och antal rum',
          address: 'Adress',
          amenities: 'Bekvämligheter'
        },
        paymentGuaranteeTitle: 'Alltid hyran betald',
        paymentGuaranteeDescription: 'Få betalt i tid varje gång, även om hyresgästen missar eller är sen med betalningen.'
      },
      step17: {
        title: 'Övriga kostnader',
        electricityCostLabel: 'Elkostnad',
        electricityAmountLabel: 'Elkostnad',
        electricityAmountPlaceholder: 'Ange elkostnad',
        electricityOptions: {
          included_in_rent: 'El ingår i hyran',
          not_included_in_rent: 'El ingår inte i hyran',
          tenant_managed: 'Hyresgästen upprättar eget elavtal',
          fixed_fee: 'Elkostnad tillkommer utöver hyran'
        }
      },
      step18: {
        title: 'Visningar',
        description: 'Låt hyresgäster boka en visning när de kontaktar dig. Skapa tidsluckor när du har möjlighet att hålla visningar för intresserade hyresgäster. Bokade visningar kan avbokas när som helst via din annons-dashboard.',
        addViewingButton: 'Lägg till tider för visningar',
        deleteAllButton: 'Ta bort alla',
        modalTitle: 'Lägg till tider för visningar',
        modalDescription: 'Välj datum och tid när du är tillgänglig för att träffa hyresgäster. Visningstider har en varaktighet på 20 minuter.',
        dateLabel: 'Datum',
        timeFromLabel: 'Från',
        timeToLabel: 'Till',
        timeHint: 'Sätt en starttid från när du är tillgänglig så skapar vi visningstiderna åt dig.',
        createButton: 'Skapa',
        closeButton: 'Stäng',
        selectDate: 'Välj datum',
        selectTime: 'Välj en tid',
        viewingTypes: {
          multiple: 'Flera visningar',
          single: 'Enskild visning'
        },
        infoTitle: 'Bra att veta',
        infoDescription: 'Du kan alltid lägga till och ta bort visningar under tiden din annons är publicerad. Endast ID-verifierade hyresgäster kan boka visningar.'
      },
      step19: {
        title: 'Information inför visningar',
        description: 'Lägg till lite extra information för att göra visningarna så smidiga som möjligt. Informationen delas med hyresgästen innan visning.',
        phoneLabel: 'Telefonnummer',
        phoneHint: 'Telefonnumret är kopplat till ditt Qasa-konto och till visningen.',
        practicalInfoLabel: 'Praktisk information',
        practicalInfoOptional: '(Valfritt)',
        practicalInfoPlaceholder: 'Fyll i portkod eller annan information för intresserade hyresgäster',
        saveButton: 'Spara',
        reviewButton: 'Nästa',
        infoTitle: 'Bra att veta',
        infoDescription: 'Telefonnummer delas 8 timmar innan den bokade visningen. Du kan alltid avboka visningar under tiden din annons är publicerad.'
      },
      step20: {
        title: 'Information inför visningar',
        description: 'Lägg till lite extra information för att göra visningarna så smidiga som möjligt. Informationen delas med hyresgästen innan visning.',
        phoneLabel: 'Telefonnummer',
        phoneHint: 'Telefonnumret är kopplat till ditt Qasa-konto och till visningen.',
        practicalInfoLabel: 'Praktisk information',
        practicalInfoOptional: '(Valfritt)',
        practicalInfoPlaceholder: 'Fyll i portkod eller annan information för intresserade hyresgäster',
        saveButton: 'Spara',
        reviewButton: 'Granska',
        infoTitle: 'Bra att veta',
        infoDescription: 'Telefonnummer delas 8 timmar innan den bokade visningen. Du kan alltid avboka visningar under tiden din annons är publicerad.'
      },
    }
  },

  // Edit Listing
  editListing: {
    previewAndPublish: 'Granska och publicera'
  },

  // Listing Preview
  listingPreview: {
    headerText: 'Förhandsvisning på hur din annons kommer ses av hyresgäster'
  },

  // Add these to the tenant section
  tenant: {
    listing: {
      step1: {
        title: 'Skapa profilannons',
        subtitle: 'Se till att du är synlig för hyresvärdar och öka dina chanser att få en bostad.',
        benefit1: {
          title: 'Visa upp dig för hyresvärdar',
          description: 'Skapa en profilannons så att hyresvärdar med bostäder som matchar dina behov enkelt kan komma i kontakt med dig.'
        },
        benefit2: {
          title: 'Verifierade hyresvärdar och ett schysst hyresavtal',
          description: 'Alla våra hyresvärdar är id-verifierade för din säkerhet. Vi hjälper dig att skapa ett tryggt hyresvavtal med schyssta villkor för dig under hela hyrestiden.'
        },
        benefit3: {
          title: 'Personlig support under hela hyrestiden',
          description: 'Vi finns här för dig från början och tills du flyttar ut. Kontakta oss om du behöver stöd eller råd.'
        }
      },
      step2: {
        title: 'Var söker du bostad?',
        subtitle: 'Ange de områden du är intresserad av att bo i',
        searchLabel: 'Var letar du bostad?',
        searchPlaceholder: 'Sök på stad eller område',
        addAreaPlaceholder: 'Lägg till område',
        error: 'Du måste välja ett område'
      },
      step3: {
        title: 'Vad vill du hyra?',
        subtitle: 'Berätta för hyresvärden vad du är ute efter. Dina krav kommer att visas i din annons.',
        sharedQuestion: 'Vill du hyra ett eget eller delat boende?',
        sharedAll: 'Spelar ingen roll (delat eller eget boende)',
        sharedPrivate: 'Eget boende',
        sharedInfo: 'Ett delat boende innebär att du kommer att dela bostaden med andra personer.',
        furnishedQuestion: 'Vill du hyra möblerat eller omöblerat?',
        furnishedBoth: 'Båda',
        furnishedYes: 'Möblerat',
        furnishedNo: 'Omöblerat',
        propertyTypesQuestion: 'Vilken typ av bostad letar du efter?',
        apartment: 'Lägenhet',
        house: 'Hus',
        terraceHouse: 'Radhus',
        duplex: 'Parhus',
        other: 'Övrigt',
        propertyTypesInfo: 'Övrigt kan vara andra typer av bostäder som inte visas här, exempelvis husbåt.',
        tenantTypeQuestion: 'Är du pensionär eller student?',
        tenantNone: 'Inget utav dessa',
        tenantStudent: 'Student',
        tenantSenior: 'Pensionär',
        tenantTypeInfo: 'Om du är student eller pensionär kan du ha rätt till ett särskilt hyresavtal',
      },
      step4: {
        title: 'Hur stort hem letar du efter?',
        tenantsLabel: 'Antal hyresgäster',
        tenantsPlaceholder: 'Ange hur många ni är som söker bostad',
        roomsLabel: 'Antal rum (minst)',
        roomsPlaceholder: 'Välj antal rum',
        squareMetersLabel: 'Kvadratmeter (minst)',
        squareMetersPlaceholder: 'Ange minsta storlek',
      },
      step5: {
        title: 'När vill du hyra?',
        moveInLabel: 'Inflytt',
        moveInASAP: 'Snarast möjligt',
        moveInChooseDate: 'Välj datum',
        moveOutLabel: 'Utflytt',
        moveOutIndefinite: 'Tillsvidare',
        moveOutChooseDate: 'Välj datum',
        selectDate: 'Välj datum',
      },
      step6: {
        title: 'Har du några krav på bostaden?',
        subtitle: 'Markera dina strikta krav.',
        preferencesLabel: 'Preferenser',
        wheelchairAccessible: 'Tillgänglig med rullstol',
        petsAllowed: 'Husdjur tillåtet',
        smokingAllowed: 'Rökning tillåten',
      },
      step7: {
        title: 'Har du några särskilda preferenser?',
        subtitle: 'Markera de saker som är viktiga för dig.',
        preferencesLabel: 'Preferenser',
        balcony: 'Balkong',
        storage: 'Förråd',
        dishWasher: 'Diskmaskin',
        washingMachine: 'Tvättmaskin',
        tumbleDryer: 'Torktumlare',
        bathtub: 'Badkar',
        bikeRoom: 'Cykelrum',
        parking: 'Parkering',
        recycling: 'Återvinningsrum',
        inhomeSauna: 'Egen bastu',
      },
      step8: {
        title: 'Vilken hyra kan du maximalt betala?',
        subtitle: 'Ange din maxhyra per månad. Detta hjälper hyresvärdar att se om ni matchar.',
        maxRentLabel: 'Hyra (max)',
        maxRentPlaceholder: 'Ange den högsta hyran du kan tänka dig att betala',
        noDepositTitle: 'Ingen deposition',
        noDepositMessage: 'Hos Qasa behöver du inte betala deposition när du hyr en bostad.',
        noDepositDescription: 'Håll i dina pengar, vi tar hand om depositionen.',
        complete: 'Skapa annons',
      },
      step9: {
        title: 'Vem är du?',
        profilePictureLabel: 'Profilbild',
        changeImage: 'Ändra bild',
        firstNameLabel: 'Förnamn',
        lastNameLabel: 'Efternamn',
        lastNameHint: 'Ditt efternamn visas inte för andra användare.',
        phoneLabel: 'Telefonnummer',
        phoneHint: 'Telefonnummer kommer inte att visas för hyresvärdar.',
      },
      step10: {
        title: 'Hur bor du idag?',
        firstHand: 'Första hand',
        secondHand: 'Andra hand',
        livingWithFamily: 'Bor hos familj',
        ownCondominium: 'Bostadsrätt',
        ownHouse: 'Eget hus',
        studentHousing: 'Studentboende',
        coLiving: 'Inneboende',
        otherAccommodation: 'Annan boendeform',
      },
      step11: {
        title: 'Var bor du?',
        cityLabel: 'Stad eller område',
        cityPlaceholder: 'Exempel: Stockholm',
      },
      step12: {
        title: 'Vad är din anledning till att flytta?',
        reasonPlaceholder: 'Exempel: Jag har fått jobb i Stockholm',
      },
      step13: {
        title: 'Lägg till boendereferens',
        subtitle: 'Studentboende',
        landlordNameLabel: 'Hyresvärdens företagsnamn',
        landlordNamePlaceholder: 'Exempel: Sverigebostäder AB',
        phoneLabel: 'Telefonnummer',
        phonePlaceholder: 'Exempel: 073-133 70 22',
        referenceTitle: 'Referens',
        referenceHint: 'Ett märke (boendereferens) kommer läggas till din profil.',
        privacyHint: 'Detta är privat information. Vi delar den enbart med hyresvärdar du ansöker till.',
      },
      step14: {
        title: 'Var har du tidigare bott?',
        bioLivedPlaceholder: 'Exempel: Jag har bott i Barcelona och ...',
      },
      step15: {
        title: 'Sysselsättning',
        addOccupation: 'Lägg till sysselsättning',
        occupationTypes: {
          studies: 'Om dina studier',
          work: 'Om ditt arbete',
          other: 'Om sysselsättning',
          pension: 'Om din pension',
        },
        program: 'Program',
        school: 'Skola',
        jobTitle: 'Jobbtitel',
        company: 'Företag',
        title: 'Titel',
        fullTime: 'Heltid',
        partTime: 'Deltid',
        dates: 'Datum',
        startMonth: 'Startmånad',
        startYear: 'Startår',
        endMonth: 'Slutmånad',
        endYear: 'Slutår',
        ongoingOccupation: 'Pågående sysselsättning',
        ongoing: 'Pågående',
      },
    }
  },
  settings: {
    title: 'Inställningar',
    personal: {
      title: 'Personligt',
      description: 'Din personliga information och hur vi kan kontakta dig',
      name: 'Namn',
      firstName: 'Förnamn',
      lastName: 'Efternamn',
      email: 'E-postadress',
      emailVerified: 'E-post verifierad',
      phone: 'Telefonnummer',
      phoneExample: 'Ex: +4673 xxx xx xx',
      birthDate: 'Födelsedatum',
      birthDateNote: 'Ditt födelsedatum sätts genom ID-verifiering.',
      privateNote: 'Det här är dina privata uppgifter. Endast ditt förnamn visas i din profil.'
    },
    account: {
      title: 'Konto',
      description: 'Ställ in din kontotyp',
      role: 'Roll',
      roleValue: 'Hyresvärd',
      accountType: 'Kontotyp',
      privateAccount: 'Privatkonto',
      businessAccount: 'Företagskonto',
      premium: {
        title: 'Qasa Premium',
        description: 'Ansök innan alla andra till utvalda bostäder, få exklusiva insikter och mycket mer. Med Qasa Premium.',
        getButton: 'Skaffa Qasa Premium'
      }
    },
    verifications: {
      title: 'Verifieringar',
      description: 'Dina verifieringar och intyg',
      idVerification: 'ID-verifiering',
      verified: 'Verifierat',
      creditCheck: 'Kreditupplysning',
      creditCheckCompleted: 'Kreditupplysning genomförd',
      validUntil: 'Giltigt till {date}',
      creditHistory: 'Kredithistorik',
      notVerified: 'Inte verifierat',
      references: 'Boendereferens'
    },
    notifications: {
      title: 'Notiser',
      description: 'Dina notisinställningar',
      frequency: 'Hur ofta vill du ha notiser?',
      notProvided: 'Ej angivet',
      contactRequests: 'Kontaktförfrågningar och meddelanden',
      notifyMe: 'Meddela mig',
      smsNotifications: 'SMS-notiser',
      noThanks: 'Nej tack'
    },
    bankAccount: {
      title: 'Bankkonto',
      description: 'Ditt bankkonto och folkbokföring',
      active: 'Aktiv',
      bankName: 'Bankens namn',
      clearingNumber: 'Clearingnummer',
      accountNumber: 'Kontonummer',
      country: 'Land',
      civilRegistration: 'Folkbokföringsadress',
      added: 'Tillagt'
    },
    privacy: {
      title: 'Datahantering',
      description: 'Hantera cookies och datadelning',
      cookieSettings: 'Hantera cookies och datadelning'
    },
    taxReports: {
      title: 'Deklarationsunderlag',
      description: 'Summering av dina utbetalningar (DAC-7)',
      seeReports: 'Dina rapporter'
    },
    deleteAccount: {
      title: 'Inaktivera konto',
      description: 'Du kan inaktivera ditt konto här',
      button: 'Inaktivera mitt konto'
    },
    promotionalCode: {
      title: 'Kampanjkod',
      description: 'Lägg till kampanjkod',
      activeCode: 'Angiven kampanjkod'
    },
    save: 'Spara'
  },
  
  howItWorks: {
    title: 'Så fungerar det',
    subtitle: 'Tryggt och enkelt att hyra ut eller hitta ett hem',
    hero: {
      badge: 'Så fungerar det',
      title: 'Hyr med Qasa',
      description: 'Hantera din uthyrning på rätt sätt - tryggt och enkelt.',
      imageAlt: 'Hjältebild som visar uthyrningsprocessen'
    },
    features: {
      advertising: {
        title: 'Annonsering av bostäder',
        description: 'Nordens största annonsplats för uthyrning av bostäder. För hyresgäster och hyresvärdar.'
      },
      management: {
        title: 'Rental management',
        description: 'Smidig uthyrningshantering från publicering av annonser, skapande och signering av hyresavtal till automatiska hyresbetalningar.'
      },
      security: {
        title: 'Garanterad säkerhet',
        description: 'Garanterad hyra, försäkrad bostad och ett team av experter för en modern och trygg hyresupplevelse.'
      }
    },
    tabs: {
      landlord: 'Hyr ut',
      tenant: 'Hitta bostad'
    },
    steps: {
      landlord: {
        step1: {
          title: 'Publicera din bostad',
          description: 'Din bostad visas för tusentals hyresgäster genom våra externa samarbeten för att säkerställa maximal exponering.'
        },
        step2: {
          title: 'Hitta din perfekta hyresgäst',
          description: 'Mottag kontaktförfrågningar eller kontakta matchande hyresgäster själv. Vi verifierar dem och kan hjälpa dig välja den bästa hyresgästen för dig.'
        },
        step3: {
          title: 'Signera hyresavtal digitalt',
          description: 'Signera hyresavtalet som det är, eller skräddarsy det efter dina behov. Vårt hyresavtal är framtaget av jurister för att vara säkert för både dig och hyresgästen.'
        },
        step4: {
          title: 'Få hyran i tid',
          description: 'Vi betalar din hyra i tid även om hyresgästen slutar betala. Din hyra är garanterad upp till 6 månader av oss så att du inte behöver oroa dig.'
        },
        step5: {
          title: 'Hantera din uthyrning',
          description: 'Rapportera händelser, hantera din uthyrning och få en överblick av dina tidigare och kommande utbetalningar. Allt på ett ställe.'
        },
        step6: {
          title: 'Fortsätt hyra ut',
          description: 'Om en hyresgäst flyttar ut kan du ge ut din bostad på nytt. Med Qasa hittar du enkelt en ny hyresgäst – inget krångel och ingen slöseri med tid.'
        }
      },
      tenant: {
        step1: {
          title: 'Skapa din profil',
          description: 'Bygg en omfattande hyresgästprofil som visar vem du är och vad du letar efter.'
        },
        step2: {
          title: 'Sök och ansök',
          description: 'Bläddra bland tillgängliga fastigheter och ansök direkt genom vår plattform med din verifierade profil.'
        },
        step3: {
          title: 'Bli matchad',
          description: 'Vår algoritm matchar dig med lämpliga fastigheter och hyresvärdar baserat på dina preferenser.'
        },
        step4: {
          title: 'Signera digitalt',
          description: 'Signera ditt hyresavtal digitalt med vår säkra och juridiskt bindande process.'
        },
        step5: {
          title: 'Flytta in tryggt',
          description: 'Flytta in i ditt nya hem med depositionsfria alternativ och full försäkringsskydd.'
        },
        step6: {
          title: 'Njut av ditt hem',
          description: 'Lev bekvämt med vetskapen om att du har stöd och skydd under hela din hyresperiod.'
        }
      }
    },
    safety: {
      title: 'Tryggt och säkert',
      subtitle: 'Med oss är du trygg även om det oväntade händer',
      features: {
        insured: {
          title: 'Ditt hem är försäkrat',
          description: 'Du är skyddad utöver din vanliga försäkring.'
        },
        guaranteed: {
          title: 'Din hyra är garanterad',
          description: 'Få alltid din hyra i tid, även om hyresgästen betalar sent.'
        },
        verified: {
          title: 'Verifierade hyresgäster och hyresvärdar',
          description: 'Vi använder de senaste tjänsterna för att verifiera hyresvärdar och hyresgäster.'
        },
        depositFree: {
          title: 'Depositionsfritt som standard',
          description: 'Vi garanterar depositionen, så att hyresgäster kan hyra depositionsfritt.'
        },
        reporting: {
          title: 'Händelserapportering',
          description: 'Enkel ärenderapportering på din dedikerade uthyrningssida.'
        },
        mediation: {
          title: 'Medlingsstöd',
          description: 'Vi finns här och hjälper dig vid tvister eller vräkningar vid behov.'
        }
      }
    },
    support: {
      title: 'Dedikerad support och råd av våra experter',
      description: 'Vårt interna team av experter finns här för att stötta dig före, under och efter din hyresperiod.',
      cta: 'Kontakta oss'
    },
    testimonials: {
      title: 'Älskad av både hyresvärdar och hyresgäster',
      subtitle: 'Utmärkt omdöme på Trustpilot'
    },
    pricing: {
      title: 'Prissättning',
      subtitle: 'Serviceavgifter tillkommer under uthyrningen och varierar lokalt',
      landlord: {
        title: 'För hyresvärdar',
        subtitle: 'Vad ingår?',
        features: [
          'Publicera din bostad',
          'Automatiserade hyresgästrekommendationer',
          'Digital avtalssignering',
          'Verktyg för uthyrningshantering',
          'Hyresgaranti',
          'Dedikerad support'
        ],
        cta: 'Se pris'
      },
      tenant: {
        title: 'För hyresgäster',
        subtitle: 'Vad ingår?',
        features: [
          'Hyresgästprofiler',
          'Depositionshantering',
          'Digital avtalssignering',
          'Betalningsöversikt och hantering',
          'Trygga betalningar genom Qasa',
          'Dedikerad support'
        ],
        cta: 'Se pris'
      },
      propertyOwner: {
        title: 'Är du en fastighetsägare?',
        cta: 'Läs mer'
      }
    },
    getStarted: {
      title: 'Sätt igång',
      subtitle: 'Bostäder och hyresgäster väntar',
      landlord: {
        title: 'Publicera annons',
        description: 'Skapa en annons och hitta din hyresgäst redan idag.',
        cta: 'Skapa annons'
      },
      tenant: {
        title: 'Sök bostad',
        description: 'Skapa en hyresgästprofil gratis och hitta ditt nästa hem.',
        cta: 'Skapa profil'
      }
    }
  },
  
  tenantProfile: {
    title: 'Hyresgästprofil',
    verified: 'ID verifierat',
    notVerified: 'Ej verifierad',
    hasReference: 'Har boendereferens',
    lastActive: 'Aktiv för {time} sedan',
    contact: 'Kontakta',
    reportProfile: 'Anmäl användare',
    
    sections: {
      overview: {
        title: 'Överblick',
        firstName: 'Förnamn',
        headline: 'Din rubrik',
        headlinePlaceholder: 'Exempel: Skötsam student söker liten lägenhet',
        headlineDescription: 'Beskriv dig själv med en mening.',
        verificationTitle: 'Ej verifierad',
        verificationDescription: 'Verifierat personnummer visar att du är en pålitlig användare.',
        verifyButton: 'Verifiera'
      },
      
      introduction: {
        title: 'Introduktion',
        description: 'Din introduktion',
        placeholder: 'Exempel: Jag bor just nu i Sundsvall och söker boende i Göteborg tillsammans med min pojkvän Adam...',
        petsLabel: 'Vilka husdjur har du, om något?',
        petsPlaceholder: 'Exempel: Jag har en söt gammal katt :)',
        petsDescription: 'Vilken sorts husdjur har du - en tax, en innekatt, en vandrande pinne?',
        noPets: 'Inga husdjur',
        characterCount: '{count} / {max}'
      },
      
      lookingFor: {
        title: 'Letar efter',
        searchArea: 'Sökområde',
        searchAreaPlaceholder: 'Ange en stad eller ett område',
        maxRent: 'Hyra (max)',
        maxRentPlaceholder: 'Ange den högsta hyran du kan tänka dig att betala',
        perMonth: 'kr/månad',
        moveIn: 'Inflytt',
        moveOut: 'Utflytt',
        asap: 'Snarast möjligt',
        indefinite: 'Tillsvidare',
        specificDate: 'Välj datum',
        numberOfTenants: 'Antal hyresgäster',
        numberOfTenantsPlaceholder: 'Ange hur många ni är som söker bostad',
        location: '{location}',
        rooms: '{rooms} rum, {size} m²',
        people: 'Boende för {count} person',
        people_plural: 'Boende för {count} personer',
        furnished: 'Möblerad eller omöblerad bostad',
        propertyTypes: 'Lägenhet, Radhus, Villa, Parhus / Eget boende',
        dates: 'Snarast möjligt → Tillsvidare',
        maxRentAmount: 'Max {amount} kr'
      },
      
      preferences: {
        title: 'Preferenser',
        noPreferences: 'Inga preferenser',
        balcony: 'Balkong',
        storage: 'Förråd',
        dishwasher: 'Diskmaskin',
        washingMachine: 'Tvättmaskin',
        tumbleDryer: 'Torktumlare',
        bathtub: 'Badkar',
        bikeRoom: 'Cykelrum',
        parking: 'Parkering',
        recycling: 'Återvinningsrum',
        sauna: 'Egen bastu'
      },
      
      requirements: {
        title: 'Krav',
        wheelchairAccessible: 'Tillgänglig med rullstol',
        petsAllowed: 'Husdjur tillåtet',
        smokingAllowed: 'Rökning tillåten'
      },
      
      employment: {
        title: 'Sysselsättning',
        addEmployment: 'Lägg till sysselsättning',
        fullTime: 'Heltid',
        partTime: 'Deltid',
        ongoing: 'Pågående'
      },
      
      housingSituation: {
        title: 'Boendesituation',
        currentSituation: 'Nuvarande boendesituation',
        currentSituationTitle: 'Hur bor du idag?',
        movingReason: 'Anledning till flytt',
        previousLocation: 'Tidigare boende',
        reference: 'Referens',
        
        types: {
          first_hand_renting: 'Första hand',
          second_hand_renting: 'Andra hand',
          living_with_family: 'Bor hos familj',
          own_condominium: 'Bostadsrätt',
          own_house: 'Eget hus',
          student_housing: 'Studentboende',
          co_living: 'Inneboende',
          other_agreement_type: 'Annan boendeform'
        }
      },
      
      contactHistory: {
        title: 'Tidigare kontaktförfrågningar',
        locations: 'Bostäderna ligger i: {locations}',
        priceRange: 'Priserna har legat mellan: {min} och {max}',
        rooms: 'Antal rum: {count}'
      }
    },
    
    status: {
      published: 'Publicerad',
      publishedDescription: 'Hyresvärdar kan hitta din profil och kontakta dig.',
      unpublish: 'Avpublicera',
      publish: 'Publicera'
    },
    
    sidebar: {
      rentBetter: 'Hyr bättre',
      rentBetterDescription: 'Du får alltid skydd mot hyresförlust, en skräddarsydd uthyrningsförsäkring, och personlig service när du hyr ut med oss.',
      readMore: 'Läs mer'
    },
    
    modals: {
      basicInfo: {
        title: 'Redigera grundläggande information',
        placeholder: 'Redigera ditt namn, ålder, titel och bio här.'
      },
      lookingFor: {
        title: 'Redigera vad du söker',
        placeholder: 'Redigera dina sökkriterier inklusive plats, antal rum, storlek och preferenser här.'
      },
      preferences: {
        title: 'Redigera preferenser',
        placeholder: 'Redigera dina bostadspreferenser och krav här.'
      },
      employment: {
        title: 'Redigera anställningsinformation',
        placeholder: 'Redigera dina anställningsdetaljer inklusive jobbtitel, företag och arbetsstatus här.'
      },
      housingSituation: {
        title: 'Redigera bostadssituation',
        placeholder: 'Redigera din nuvarande bostadssituation och flyttskäl här.'
      }
    },
    
    common: {
      save: 'Spara',
      cancel: 'Avbryt',
      edit: 'Redigera',
      back: 'Tillbaka',
      next: 'Nästa'
    }
  }
}; 