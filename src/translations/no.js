import { en } from './en';

// Temporary Norwegian (Bokmål) translations
// TODO: Replace with proper Norwegian copy. Falls back to English structure for now.
export const no = {
  // Common
  common: {
    previous: 'Forrige',
    next: 'Neste',
    loading: 'Laster...',
    error: 'Noe gikk galt',
    verified: 'Verifisert',
    premium: 'Premium',
    cancel: 'Avbryt',
    apply: 'Bruk',
    back: 'Tilbake',
    language: 'Språk',
    clear: 'Tøm',
    helpCenter: 'Hjelpesenter',
  },

  // Landing Page
  landing: {
    hero: {
      title: 'En bedre måte å leie på',
      subtitle: 'Finn et hjem som føles riktig. Enkelt, trygt og rettferdig.',
      ctaPrimary: 'Søk boliger',
      ctaSecondary: 'Slik fungerer det'
    },
    cities: {
      count: '{count} boliger',
    },
    featuresTitle: 'Lei med Qasa og føl deg trygg',
    premium: {
      label: 'For boligsøkere',
      title: 'Finn ditt neste hjem dobbelt så lett med',
      button: 'Les mer',
    },
    husfrid: {
      label: 'HusFrid – et initiativ fra Qasa for å hjelpe kvinner og barn til et hjem fritt fra vold',
      title: 'HusFrid hjelper kvinner som opplever vold i hjemmet å finne et nytt hjem.',
      button: 'Les mer',
    },
    firstHand: {
      label: 'Førstehåndskontrakter',
      title: 'Vi tilbyr nå det største utvalget av førstehåndskontrakter.',
      subtitle: 'Bli med i boligkøen gratis!',
      button: 'Bli med i køen',
    },
    testimonials: {
      items: {
        0: { quote: 'Sammenlignbart en av de beste plattformene for utleiebolig. Veldig enkel og gjennomsiktig prosess etter at du har fått en match.', author: 'Marina' },
        1: { quote: 'Jeg prøvde flere måter å finne leilighet på og Qasa er best.', author: 'Jan' },
      },
    },
    features: {
      noDeposit: { title: 'Ingen depositum', desc: 'Behold pengene dine — vi ordner depositumet.' },
      payLater: { title: 'Flytt inn først, betal senere', desc: 'Fleksibilitet når livet skjer.' },
      protection: { title: 'Beskyttelse og ekspertise', desc: 'Trygge kontrakter og personlig støtte.' }
    },
    stats: {
      applicants: '5+ millioner', applicantsHint: 'søknader hvert år',
      homes: '600 000+', homesHint: 'publiserte boliger siden starten',
      rating: '4,4 av 5', ratingHint: 'på Trustpilot'
    },
    faq: {
      title: 'Dine spørsmål - Besvart',
      links: {
        0: 'Slik fungerer det for utleiere',
        1: 'Slik fungerer det for leietakere',
        2: 'Slik leier du ut feriebolig',
        3: 'Hva skjer hvis leietakeren ikke betaler?',
        4: 'Er utleien min forsikret?',
        5: 'Hvor mye kan jeg leie ut for?',
        6: 'Trenger jeg tillatelse for å leie ut?',
        7: 'Skrive en leieavtale',
        8: 'Hva er Qasa Premium',
      },
    },
    cta: {
      title: 'Klar til å komme i gang?',
      subtitle: 'Opprett en gratis konto og start reisen i dag.',
      button: 'Opprett profil'
    }
  },

  landlords: {
    createListing: {
      step1: { title: 'Fortell litt om hjemmet ditt.', description: 'La oss starte med grunnleggende informasjon som størrelse og beliggenhet.' },
      step2: { title: 'Hva er adressen til boligen?', description: 'Vi trenger hele adressen for å vise hjemmet ditt på kartet. Bare gatenavn vises i annonsen.' },
    }
  },

  // Homes Page
  homes: {
    title: 'Finn bolig til leie',
    searchPlaceholder: 'Søk på by eller område',
    resultsCount: '{count} boliger',
    sortBy: 'Sorter etter',
    sortOptions: {
      newest: 'Nyeste',
      oldest: 'Eldste',
      priceAsc: 'Pris: Lavest til høyest',
      priceDesc: 'Pris: Høyest til lavest',
      sizeAsc: 'Størrelse: Liten til stor',
      sizeDesc: 'Størrelse: Stor til liten',
    },
  },

  // Header
  header: {
    homes: 'Boliger',
    tenants: 'Leietakere',
    howItWorks: 'Slik fungerer det',
    rentOut: 'Opprett annonse',
    login: 'Logg inn',
    signup: 'Registrer deg',
    messages: 'Meldinger',
    favorites: 'Favoritter',
    profile: 'Profil',
    menu: 'Meny',
    close: 'Lukk',
  },

  // Header Menu Items
  headerMenu: {
    leases: 'Leieavtaler og bestillinger',
    profile: 'Profil',
    savedSearches: 'Lagrede søk',
    settings: 'Innstillinger',
    howItWorks: 'Slik fungerer det',
    help: 'Hjelp',
    language: 'Språk',
    logout: 'Logg ut',
    premiumTitle: 'Finn ditt neste hjem enklere med',
    premiumBrand: 'Qasa Premium',
  },

  // Language Modal
  languageModal: {
    title: 'Språk',
    subtitle: 'Velg foretrukket språk',
  },

  // Property Details
  propertyDetails: {
    title: 'Billingevägen, Röstånga',
    rooms: 'rom',
    sqm: 'm²',
    price: 'kr/mnd',
    moveInDate: 'Innflyttingsdato',
    duration: 'Inntil videre',
    location: 'Plassering',
    allImages: 'Alle bilder',
    description: 'Beskrivelse',
    quickInsights: 'Raske innsikter',
    contact: 'Kontakt',
    superApply: 'Super søk',
    rentBetter: 'Lei bedre og tryggere med Qasa',
    rentBetterDescription: 'Dette hjemmet har en verifisert utleier, en trygg leieavtale og dedikert støtte 7 dager i uken. Alle betalinger håndteres gjennom oss.',
    readMore: 'Les mer',
    showMore: 'Vis mer',
    applyTo: 'Søk til',
    published: 'Publisert',
    today: 'I dag',
    viewings: 'Visninger',
    applicants: 'Antall søkere',
    responseTime: 'Responstid',
    lessThan24h: '< 24t',
    busStop: 'min til busstopp',
    toCenter: 'min til sentrum',
    amenities: {
      balcony: 'Balkong',
      internet: 'Internett',
      ownShower: 'Egen dusj',
      dishwasher: 'Oppvaskmaskin',
      oven: 'Ovn',
      storage: 'Lager'
    },
    landlord: {
      meetYourLandlord: 'Møt utleieren din',
      landlordName: 'Samtrygg AB',
      landlordType: 'Utleier',
      landlordDescription: 'Vi publiserer nye annonser hver dag. Følg lenken i våre annonser til samtrygg.se for å bestille visning trygt, enkelt og gratis. Samtrygg is the safe marketplace for home rentals. Follow the link in our ads to book a viewing.',
      insights: 'Innsikter',
      publishedDaysAgo: 'Publisert {days} dager siden',
      views: '{views} visninger',
      applicantsCount: '{count} søkere',
      conversations: '{count} åpne samtaler',
      similarRent: 'Leie for lignende boliger ikke tilgjengelig',
      responseTime: 'Svarer vanligvis innen {time}',
      unlockInsights: 'Lås opp alle innsikter med',
      getPremium: 'Få Qasa Premium',
      readMore: 'Les mer'
    },
    amenitiesTitle: 'Fasiliteter',
    houseRulesTitle: 'Husregler og tilgjengelighet',
    houseRules: {
      upToTenants: 'Opptil {count} leietakere',
      noPets: 'Ingen kjæledyr',
      notWheelchairAccessible: 'Ikke rullestolvennlig',
      noSmoking: 'Røyking forbudt'
    },
    datesTitle: 'Datoer',
    rentTitle: 'Leie',
    rentDetails: {
      monthlyCost: 'Månedlig kostnad',
      rent: 'Leie',
      serviceFee: 'Serviceavgift',
      additionalCosts: 'Tilleggskostnader',
      electricityFee: 'Strømavgift',
      included: 'Inkludert',
      deposit: 'Depositum'
    },
    description: {
      modernApartment: 'Moderne leilighet med åpen planløsning og mye naturlig lys. Leiligheten ligger i et rolig område med nærhet til transport og tjenester. Parkering er inkludert og fiber er installert.',
      autoTranslated: 'Denne beskrivelsen er automatisk oversatt til engelsk og kan inneholde unøyaktigheter. Vis original'
    },
    moreHomes: {
      title: 'Flere boliger du kanskje liker',
      allHomesIn: 'Alle boliger i {location}',
      allApartmentsIn: 'Alle leiligheter i {location}'
    }
  },

  // Footer
  footer: {
    homepage: 'Hjemmeside',
    searchHome: 'Søk bolig',
    findTenant: 'Finn leietaker',
    messages: 'Meldinger',
    myListings: 'Mine annonser',
    rentals: 'Mine leieforhold',
    help: 'Hjelp',
    logout: 'Logg ut',
    sitemap: 'Nettstedskart',
    premium: 'Qasa Premium',
    pricing: 'Priser',
    housingRentals: 'Boligutleie',
    forCompanies: 'For bedrifter',
    termsConditions: 'Vilkår og betingelser',
    blog: 'Blogg',
    careers: 'Karriere',
    pressMedia: 'Presse og media',
    language: 'Norsk',
  },

  // Find Tenant Page
  findTenant: {
    title: 'Finn din leietaker',
    subtitle: 'Bla gjennom verifiserte leietakerprofiler og ta kontakt med kvalitetsleietakere',
    tenantCount: '{count} leietakere i Sverige',
    landlordCTA: {
      title: 'Ser du etter en leietaker?',
      description: 'Opprett en bolig for å kontakte våre verifiserte leietakere.',
    },
    createProfile: {
      title1: 'Vil du at leietakere skal finne deg?',
      description1: 'Publiser boligen din og la verifiserte leietakere kontakte deg direkte.',
      button1: 'Publiser bolig',
      title2: 'Nå flere leietakere',
      description2: 'Oppgrader til premium for bedre synlighet og raskere matcher.',
      button2: 'Bli premium',
    },
    tenantProfile: {
      viewProfile: 'Vis {name}s profil',
      people: 'personer',
      rooms: 'rom',
      maxRent: 'Maks leie',
      furnished: 'Møblert',
      unfurnished: 'Umøblert',
      partiallyFurnished: 'Delvis møblert',
      either: 'Spiller ingen rolle',
      moveDate: 'Innflyttingsdato',
      untilFurtherNotice: 'Inntil videre',
      
      sections: {
        introduction: {
          noPets: 'Ingen kjæledyr',
        },
      },
    },
  },

  // Tenant Descriptions (realistic Norwegian content)
  tenantDescriptions: {
    1: 'Gift par som ser etter leilighet i Jonsered eller Partille.',
    2: 'Studentpar som ser etter en koselig leilighet i Stockholm',
    3: 'Ung profesjonell som søker moderne leilighet',
    4: 'Masterstudent som trenger et rolig sted å studere',
    5: 'Familie med ett barn som ønsker større leilighet',
    6: 'Yrkesaktiv i teknologibransjen, ryddig og pålitelig',
  },

  // Tenant Listing Creation
  tenant: {
    listing: {
      step1: {
        title: 'Opprett profilannonse',
        subtitle: 'Gjør deg synlig for utleiere og øk sjansen for å få bolig.',
        benefit1: {
          title: 'Vis deg frem for utleiere',
          description: 'Opprett en profilannonse slik at utleiere med boliger som passer dine behov enkelt kan kontakte deg.'
        },
        benefit2: {
          title: 'Verifiserte utleiere og rettferdig leieavtale',
          description: 'Alle våre utleiere er ID-verifisert for din sikkerhet. Vi hjelper deg å lage en trygg leieavtale med gode vilkår gjennom hele leieperioden.'
        },
        benefit3: {
          title: 'Personlig støtte gjennom hele leieperioden',
          description: 'Vi er her for deg fra start til slutt. Ta kontakt hvis du trenger støtte eller råd.'
        }
      },
      step2: {
        title: 'Hvor ser du etter bolig?',
        subtitle: 'Oppgi områdene du er interessert i å bo i',
        searchLabel: 'Hvor ser du etter bolig?',
        searchPlaceholder: 'Søk etter by eller område',
        addAreaPlaceholder: 'Legg til område',
        error: 'Du må velge et område'
      },
      step3: {
        title: 'Hva ønsker du å leie?',
        subtitle: 'Fortell utleieren hva du er ute etter. Kravene dine vil vises i annonsen.',
        sharedQuestion: 'Vil du leie privat eller delt bolig?',
        sharedAll: 'Spiller ingen rolle (delt eller privat bolig)',
        sharedPrivate: 'Privat bolig',
        sharedInfo: 'En delt bolig betyr at du deler boligen med andre personer.',
        furnishedQuestion: 'Ønsker du møblert eller umøblert?',
        furnishedBoth: 'Begge',
        furnishedYes: 'Møblert',
        furnishedNo: 'Umøblert',
        propertyTypesQuestion: 'Hvilken boligtype ser du etter?',
        apartment: 'Leilighet',
        house: 'Hus',
        terraceHouse: 'Rekkehus',
        duplex: 'Tomannsbolig',
        other: 'Annet',
        propertyTypesInfo: 'Annet kan være boligtyper som ikke er listet her, for eksempel husbåt.',
        tenantTypeQuestion: 'Er du pensjonist eller student?',
        tenantNone: 'Ingen av disse',
        tenantStudent: 'Student',
        tenantSenior: 'Pensjonist',
        tenantTypeInfo: 'Hvis du er student eller pensjonist kan du ha rett til en spesiell leieavtale',
      },
      step4: {
        title: 'Hvor stor bolig ser du etter?',
        tenantsLabel: 'Antall leietakere',
        tenantsPlaceholder: 'Oppgi hvor mange dere er som søker bolig',
        roomsLabel: 'Antall rom (minst)',
        roomsPlaceholder: 'Velg antall rom',
        squareMetersLabel: 'Kvadratmeter (minst)',
        squareMetersPlaceholder: 'Oppgi minste størrelse',
      },
      step5: {
        title: 'Når vil du leie?',
        moveInLabel: 'Innflytting',
        moveInASAP: 'Snarest mulig',
        moveInChooseDate: 'Velg dato',
        moveOutLabel: 'Utflytting',
        moveOutIndefinite: 'Inntil videre',
        moveOutChooseDate: 'Velg dato',
        selectDate: 'Velg dato',
      },
      step6: {
        title: 'Har du noen krav til boligen?',
        subtitle: 'Marker de strenge kravene dine.',
        preferencesLabel: 'Preferanser',
        wheelchairAccessible: 'Rullestoltilgjengelig',
        petsAllowed: 'Husdyr tillatt',
        smokingAllowed: 'Røyking tillatt',
      },
      step7: {
        title: 'Har du spesielle preferanser?',
        subtitle: 'Marker det som er viktig for deg.',
        preferencesLabel: 'Preferanser',
        balcony: 'Balkong',
        storage: 'Bod',
        dishWasher: 'Oppvaskmaskin',
        washingMachine: 'Vaskemaskin',
        tumbleDryer: 'Tørketrommel',
        bathtub: 'Badekar',
        bikeRoom: 'Sykkelrom',
        parking: 'Parkering',
        recycling: 'Gjenvinningsrom',
        inhomeSauna: 'Egen badstue',
      },
      step8: {
        title: 'Hva kan du betale i maksimal leie?',
        subtitle: 'Oppgi maksimal månedlig leie. Dette hjelper utleiere å se om dere matcher.',
        maxRentLabel: 'Leie (maks)',
        maxRentPlaceholder: 'Oppgi høyeste leie du kan betale',
        noDepositTitle: 'Ingen depositum',
        noDepositMessage: 'Hos Qasa trenger du ikke betale depositum når du leier bolig.',
        noDepositDescription: 'Behold pengene dine – vi tar hånd om depositumet.',
        complete: 'Opprett annonse',
      },
      step9: {
        title: 'Hvem er du?',
        profilePictureLabel: 'Profilbilde',
        changeImage: 'Endre bilde',
        firstNameLabel: 'Fornavn',
        lastNameLabel: 'Etternavn',
        lastNameHint: 'Etternavnet ditt vises ikke for andre brukere.',
        phoneLabel: 'Telefonnummer',
        phoneHint: 'Telefonnummeret vises ikke for utleiere.',
      },
      step10: {
        title: 'Hvordan bor du i dag?',
        firstHand: 'Førstehånd',
        secondHand: 'Andre hånd',
        livingWithFamily: 'Bor hos familie',
        ownCondominium: 'Eierleilighet',
        ownHouse: 'Enebolig',
        studentHousing: 'Studentbolig',
        coLiving: 'Bofellesskap',
        otherAccommodation: 'Annen bosituasjon',
      },
      step11: {
        title: 'Hvor bor du?',
        cityLabel: 'By eller område',
        cityPlaceholder: 'Eksempel: Stockholm',
      },
      step12: {
        title: 'Hva er grunnen til at du flytter?',
        reasonPlaceholder: 'Eksempel: Jeg har fått jobb i Stockholm',
      },
      step13: {
        title: 'Hvor har du bodd før?',
        bioLivedPlaceholder: 'Eksempel: Jeg har bodd i Barcelona og ...',
      },
      step14: {
        title: 'Arbeid',
        addEmployment: 'Legg til arbeid',
        occupationTypes: {
          work: 'Arbeid',
          student: 'Student',
          retired: 'Pensjonist',
          other: 'Annet',
        },
        workForm: {
          title: 'Om arbeidet ditt',
          jobTitle: 'Stillingstittel',
          company: 'Selskap',
          scheduleType: 'Stillingsprosent',
        },
        studentForm: {
          title: 'Om studiene dine',
          program: 'Program',
          school: 'Skole',
          scheduleType: 'Studieomfang',
        },
        retiredForm: {
          title: 'Om pensjonen din',
        },
        otherForm: {
          title: 'Om sysselsetting',
          jobTitle: 'Tittel',
        },
        scheduleTypes: {
          fullTime: 'Heltid',
          partTime: 'Deltid',
        },
        dates: {
          title: 'Datoer',
          startMonth: 'Startmåned',
          startYear: 'Startår',
          endMonth: 'Sluttmåned',
          endYear: 'Sluttår',
          ongoing: 'Pågående ansettelse',
        },
        months: {
          january: 'Januar',
          february: 'Februar',
          march: 'Mars',
          april: 'April',
          may: 'Mai',
          june: 'Juni',
          july: 'Juli',
          august: 'August',
          september: 'September',
          october: 'Oktober',
          november: 'November',
          december: 'Desember',
        },
        placeholders: {
          selectMonth: 'Velg måned',
          selectYear: 'Velg år',
          jobTitle: 'Skriv inn stillingstittel',
          company: 'Skriv inn selskapsnavn',
          program: 'Skriv inn program',
          school: 'Skriv inn skolenavn',
          title: 'Skriv inn tittel',
        },
      },
      step15: {
        title: 'Introduksjon',
        subtitle: 'Fortell oss mer om deg selv',
        bioTitle: {
          label: 'Din overskrift',
          placeholder: 'Eksempel: Ansvarlig student søker liten leilighet',
          hint: 'Beskriv deg selv med én setning.',
        },
        bio: {
          label: 'Din introduksjon',
          placeholder: 'Eksempel: Jeg bor for tiden i Sundsvall og ser etter bolig i Göteborg sammen med kjæresten min Adam, siden vi planlegger å flytte dit i sommer. Vi er ansvarlige og rolige mennesker som liker å være i naturen og plukke sopp. Vi ser frem til å finne et trygt og trivelig hjem.',
        },
        pets: {
          label: 'Hvilke kjæledyr har du, hvis noen?',
          optional: '(Valgfritt)',
          placeholder: 'Eksempel: Jeg har en søt, gammel katt :)',
          hint: 'Hva slags kjæledyr har du – en dachs, en innekatt, en vandrende pinne?',
        },
      },
    }
  },
  settings: {
    title: 'Innstillinger',
    personal: {
      title: 'Personlig',
      description: 'Din personlige informasjon og hvordan vi kan kontakte deg',
      name: 'Navn',
      firstName: 'Fornavn',
      lastName: 'Etternavn',
      email: 'E-post',
      emailVerified: 'E-post verifisert',
      phone: 'Telefonnummer',
      phoneExample: 'Eks: +47 xxx xx xxx',
      birthDate: 'Fødselsdato',
      birthDateNote: 'Din fødselsdato settes via ID-verifisering.',
      privateNote: 'Dette er dine private opplysninger. Bare fornavnet ditt vil være synlig i din offentlige profil.'
    },
    account: {
      title: 'Konto',
      description: 'Angi kontotype',
      role: 'Rolle',
      roleValue: 'Utleier',
      accountType: 'Kontotype',
      privateAccount: 'Privat konto',
      businessAccount: 'Bedriftskonto',
      premium: {
        title: 'Qasa Premium',
        description: 'Prioritert tilgang til utvalgte boliger, eksklusive innsikter og mer med Qasa Premium.',
        getButton: 'Få Qasa Premium'
      }
    },
    verifications: {
      title: 'Verifiseringer',
      description: 'Dine verifiseringer og sertifikater',
      idVerification: 'ID-verifisering',
      verified: 'Verifisert',
      creditCheck: 'Kredittsjekk',
      creditCheckCompleted: 'Kredittsjekk fullført',
      validUntil: 'Gyldig til {date}',
      creditHistory: 'Kreditthistorikk',
      notVerified: 'Ikke verifisert',
      references: 'Boligreferanser'
    },
    notifications: {
      title: 'Varsler',
      description: 'Dine varselinnstillinger',
      frequency: 'Hvor ofte vil du ha varsler?',
      notProvided: 'Ikke oppgitt',
      contactRequests: 'Kontaktforespørsler eller meldinger',
      notifyMe: 'Varsle meg',
      smsNotifications: 'SMS-varsler',
      noThanks: 'Nei takk'
    },
    bankAccount: {
      title: 'Bankkonto',
      description: 'Din bankkonto og folkeregistrering',
      active: 'Aktiv',
      bankName: 'Banknavn',
      clearingNumber: 'Clearingnummer',
      accountNumber: 'Kontonummer',
      country: 'Land',
      civilRegistration: 'Folkeregistrert adresse',
      added: 'Lagt til'
    },
    privacy: {
      title: 'Personvern',
      description: 'Administrer informasjonskapsler og personverninnstillinger',
      cookieSettings: 'Informasjonskapselinnstillinger'
    },
    taxReports: {
      title: 'Skatterapporter',
      description: 'Sammendrag av utbetalingene dine (DAC-7)',
      seeReports: 'Se rapporter'
    },
    deleteAccount: {
      title: 'Slett konto',
      description: 'Du kan slette kontoen din her',
      button: 'Slett konto'
    },
    promotionalCode: {
      title: 'Kampanjekode',
      description: 'Legg til en kampanjekode',
      activeCode: 'Aktiv kode'
    },
    save: 'Lagre'
  }
};
