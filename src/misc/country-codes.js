const countryCodes = [
  {
    "label": "+972",
    "description": "Israel",
    "additional": "IL",
    "value": "+972"
  },
  {
    "label": "+93",
    "description": "Afghanistan",
    "additional": "AF",
    "value": "+93"
  },
  {
    "label": "+355",
    "description": "Albania",
    "additional": "AL",
    "value": "+355"
  },
  {
    "label": "+213",
    "description": "Algeria",
    "additional": "DZ",
    "value": "+213"
  },
  {
    "label": "+1 684",
    "description": "AmericanSamoa",
    "additional": "AS",
    "value": "+1 684"
  },
  {
    "label": "+376",
    "description": "Andorra",
    "additional": "AD",
    "value": "+376"
  },
  {
    "label": "+244",
    "description": "Angola",
    "additional": "AO",
    "value": "+244"
  },
  {
    "label": "+1 264",
    "description": "Anguilla",
    "additional": "AI",
    "value": "+1 264"
  },
  {
    "label": "+1268",
    "description": "Antigua and Barbuda",
    "additional": "AG",
    "value": "+1268"
  },
  {
    "label": "+54",
    "description": "Argentina",
    "additional": "AR",
    "value": "+54"
  },
  {
    "label": "+374",
    "description": "Armenia",
    "additional": "AM",
    "value": "+374"
  },
  {
    "label": "+297",
    "description": "Aruba",
    "additional": "AW",
    "value": "+297"
  },
  {
    "label": "+61",
    "description": "Australia",
    "additional": "AU",
    "value": "+61"
  },
  {
    "label": "+43",
    "description": "Austria",
    "additional": "AT",
    "value": "+43"
  },
  {
    "label": "+994",
    "description": "Azerbaijan",
    "additional": "AZ",
    "value": "+994"
  },
  {
    "label": "+1 242",
    "description": "Bahamas",
    "additional": "BS",
    "value": "+1 242"
  },
  {
    "label": "+973",
    "description": "Bahrain",
    "additional": "BH",
    "value": "+973"
  },
  {
    "label": "+880",
    "description": "Bangladesh",
    "additional": "BD",
    "value": "+880"
  },
  {
    "label": "+1 246",
    "description": "Barbados",
    "additional": "BB",
    "value": "+1 246"
  },
  {
    "label": "+375",
    "description": "Belarus",
    "additional": "BY",
    "value": "+375"
  },
  {
    "label": "+32",
    "description": "Belgium",
    "additional": "BE",
    "value": "+32"
  },
  {
    "label": "+501",
    "description": "Belize",
    "additional": "BZ",
    "value": "+501"
  },
  {
    "label": "+229",
    "description": "Benin",
    "additional": "BJ",
    "value": "+229"
  },
  {
    "label": "+1 441",
    "description": "Bermuda",
    "additional": "BM",
    "value": "+1 441"
  },
  {
    "label": "+975",
    "description": "Bhutan",
    "additional": "BT",
    "value": "+975"
  },
  {
    "label": "+387",
    "description": "Bosnia and Herzegovina",
    "additional": "BA",
    "value": "+387"
  },
  {
    "label": "+267",
    "description": "Botswana",
    "additional": "BW",
    "value": "+267"
  },
  {
    "label": "+55",
    "description": "Brazil",
    "additional": "BR",
    "value": "+55"
  },
  {
    "label": "+246",
    "description": "British Indian Ocean Territory",
    "additional": "IO",
    "value": "+246"
  },
  {
    "label": "+359",
    "description": "Bulgaria",
    "additional": "BG",
    "value": "+359"
  },
  {
    "label": "+226",
    "description": "Burkina Faso",
    "additional": "BF",
    "value": "+226"
  },
  {
    "label": "+257",
    "description": "Burundi",
    "additional": "BI",
    "value": "+257"
  },
  {
    "label": "+855",
    "description": "Cambodia",
    "additional": "KH",
    "value": "+855"
  },
  {
    "label": "+237",
    "description": "Cameroon",
    "additional": "CM",
    "value": "+237"
  },
  {
    "label": "+1",
    "description": "Canada",
    "additional": "CA",
    "value": "+1"
  },
  {
    "label": "+238",
    "description": "Cape Verde",
    "additional": "CV",
    "value": "+238"
  },
  {
    "label": "+ 345",
    "description": "Cayman Islands",
    "additional": "KY",
    "value": "+ 345"
  },
  {
    "label": "+236",
    "description": "Central African Republic",
    "additional": "CF",
    "value": "+236"
  },
  {
    "label": "+235",
    "description": "Chad",
    "additional": "TD",
    "value": "+235"
  },
  {
    "label": "+56",
    "description": "Chile",
    "additional": "CL",
    "value": "+56"
  },
  {
    "label": "+86",
    "description": "China",
    "additional": "CN",
    "value": "+86"
  },
  {
    "label": "+61",
    "description": "Christmas Island",
    "additional": "CX",
    "value": "+61"
  },
  {
    "label": "+57",
    "description": "Colombia",
    "additional": "CO",
    "value": "+57"
  },
  {
    "label": "+269",
    "description": "Comoros",
    "additional": "KM",
    "value": "+269"
  },
  {
    "label": "+242",
    "description": "Congo",
    "additional": "CG",
    "value": "+242"
  },
  {
    "label": "+682",
    "description": "Cook Islands",
    "additional": "CK",
    "value": "+682"
  },
  {
    "label": "+506",
    "description": "Costa Rica",
    "additional": "CR",
    "value": "+506"
  },
  {
    "label": "+385",
    "description": "Croatia",
    "additional": "HR",
    "value": "+385"
  },
  {
    "label": "+53",
    "description": "Cuba",
    "additional": "CU",
    "value": "+53"
  },
  {
    "label": "+537",
    "description": "Cyprus",
    "additional": "CY",
    "value": "+537"
  },
  {
    "label": "+420",
    "description": "Czech Republic",
    "additional": "CZ",
    "value": "+420"
  },
  {
    "label": "+45",
    "description": "Denmark",
    "additional": "DK",
    "value": "+45"
  },
  {
    "label": "+253",
    "description": "Djibouti",
    "additional": "DJ",
    "value": "+253"
  },
  {
    "label": "+1 767",
    "description": "Dominica",
    "additional": "DM",
    "value": "+1 767"
  },
  {
    "label": "+1 849",
    "description": "Dominican Republic",
    "additional": "DO",
    "value": "+1 849"
  },
  {
    "label": "+593",
    "description": "Ecuador",
    "additional": "EC",
    "value": "+593"
  },
  {
    "label": "+20",
    "description": "Egypt",
    "additional": "EG",
    "value": "+20"
  },
  {
    "label": "+503",
    "description": "El Salvador",
    "additional": "SV",
    "value": "+503"
  },
  {
    "label": "+240",
    "description": "Equatorial Guinea",
    "additional": "GQ",
    "value": "+240"
  },
  {
    "label": "+291",
    "description": "Eritrea",
    "additional": "ER",
    "value": "+291"
  },
  {
    "label": "+372",
    "description": "Estonia",
    "additional": "EE",
    "value": "+372"
  },
  {
    "label": "+251",
    "description": "Ethiopia",
    "additional": "ET",
    "value": "+251"
  },
  {
    "label": "+298",
    "description": "Faroe Islands",
    "additional": "FO",
    "value": "+298"
  },
  {
    "label": "+679",
    "description": "Fiji",
    "additional": "FJ",
    "value": "+679"
  },
  {
    "label": "+358",
    "description": "Finland",
    "additional": "FI",
    "value": "+358"
  },
  {
    "label": "+33",
    "description": "France",
    "additional": "FR",
    "value": "+33"
  },
  {
    "label": "+594",
    "description": "French Guiana",
    "additional": "GF",
    "value": "+594"
  },
  {
    "label": "+689",
    "description": "French Polynesia",
    "additional": "PF",
    "value": "+689"
  },
  {
    "label": "+241",
    "description": "Gabon",
    "additional": "GA",
    "value": "+241"
  },
  {
    "label": "+220",
    "description": "Gambia",
    "additional": "GM",
    "value": "+220"
  },
  {
    "label": "+995",
    "description": "Georgia",
    "additional": "GE",
    "value": "+995"
  },
  {
    "label": "+49",
    "description": "Germany",
    "additional": "DE",
    "value": "+49"
  },
  {
    "label": "+233",
    "description": "Ghana",
    "additional": "GH",
    "value": "+233"
  },
  {
    "label": "+350",
    "description": "Gibraltar",
    "additional": "GI",
    "value": "+350"
  },
  {
    "label": "+30",
    "description": "Greece",
    "additional": "GR",
    "value": "+30"
  },
  {
    "label": "+299",
    "description": "Greenland",
    "additional": "GL",
    "value": "+299"
  },
  {
    "label": "+1 473",
    "description": "Grenada",
    "additional": "GD",
    "value": "+1 473"
  },
  {
    "label": "+590",
    "description": "Guadeloupe",
    "additional": "GP",
    "value": "+590"
  },
  {
    "label": "+1 671",
    "description": "Guam",
    "additional": "GU",
    "value": "+1 671"
  },
  {
    "label": "+502",
    "description": "Guatemala",
    "additional": "GT",
    "value": "+502"
  },
  {
    "label": "+224",
    "description": "Guinea",
    "additional": "GN",
    "value": "+224"
  },
  {
    "label": "+245",
    "description": "Guinea-Bissau",
    "additional": "GW",
    "value": "+245"
  },
  {
    "label": "+595",
    "description": "Guyana",
    "additional": "GY",
    "value": "+595"
  },
  {
    "label": "+509",
    "description": "Haiti",
    "additional": "HT",
    "value": "+509"
  },
  {
    "label": "+504",
    "description": "Honduras",
    "additional": "HN",
    "value": "+504"
  },
  {
    "label": "+36",
    "description": "Hungary",
    "additional": "HU",
    "value": "+36"
  },
  {
    "label": "+354",
    "description": "Iceland",
    "additional": "IS",
    "value": "+354"
  },
  {
    "label": "+91",
    "description": "India",
    "additional": "IN",
    "value": "+91"
  },
  {
    "label": "+62",
    "description": "Indonesia",
    "additional": "ID",
    "value": "+62"
  },
  {
    "label": "+964",
    "description": "Iraq",
    "additional": "IQ",
    "value": "+964"
  },
  {
    "label": "+353",
    "description": "Ireland",
    "additional": "IE",
    "value": "+353"
  },
  {
    "label": "+972",
    "description": "Israel",
    "additional": "IL",
    "value": "+972"
  },
  {
    "label": "+39",
    "description": "Italy",
    "additional": "IT",
    "value": "+39"
  },
  {
    "label": "+1 876",
    "description": "Jamaica",
    "additional": "JM",
    "value": "+1 876"
  },
  {
    "label": "+81",
    "description": "Japan",
    "additional": "JP",
    "value": "+81"
  },
  {
    "label": "+962",
    "description": "Jordan",
    "additional": "JO",
    "value": "+962"
  },
  {
    "label": "+7 7",
    "description": "Kazakhstan",
    "additional": "KZ",
    "value": "+7 7"
  },
  {
    "label": "+254",
    "description": "Kenya",
    "additional": "KE",
    "value": "+254"
  },
  {
    "label": "+686",
    "description": "Kiribati",
    "additional": "KI",
    "value": "+686"
  },
  {
    "label": "+965",
    "description": "Kuwait",
    "additional": "KW",
    "value": "+965"
  },
  {
    "label": "+996",
    "description": "Kyrgyzstan",
    "additional": "KG",
    "value": "+996"
  },
  {
    "label": "+371",
    "description": "Latvia",
    "additional": "LV",
    "value": "+371"
  },
  {
    "label": "+961",
    "description": "Lebanon",
    "additional": "LB",
    "value": "+961"
  },
  {
    "label": "+266",
    "description": "Lesotho",
    "additional": "LS",
    "value": "+266"
  },
  {
    "label": "+231",
    "description": "Liberia",
    "additional": "LR",
    "value": "+231"
  },
  {
    "label": "+423",
    "description": "Liechtenstein",
    "additional": "LI",
    "value": "+423"
  },
  {
    "label": "+370",
    "description": "Lithuania",
    "additional": "LT",
    "value": "+370"
  },
  {
    "label": "+352",
    "description": "Luxembourg",
    "additional": "LU",
    "value": "+352"
  },
  {
    "label": "+261",
    "description": "Madagascar",
    "additional": "MG",
    "value": "+261"
  },
  {
    "label": "+265",
    "description": "Malawi",
    "additional": "MW",
    "value": "+265"
  },
  {
    "label": "+60",
    "description": "Malaysia",
    "additional": "MY",
    "value": "+60"
  },
  {
    "label": "+960",
    "description": "Maldives",
    "additional": "MV",
    "value": "+960"
  },
  {
    "label": "+223",
    "description": "Mali",
    "additional": "ML",
    "value": "+223"
  },
  {
    "label": "+356",
    "description": "Malta",
    "additional": "MT",
    "value": "+356"
  },
  {
    "label": "+692",
    "description": "Marshall Islands",
    "additional": "MH",
    "value": "+692"
  },
  {
    "label": "+596",
    "description": "Martinique",
    "additional": "MQ",
    "value": "+596"
  },
  {
    "label": "+222",
    "description": "Mauritania",
    "additional": "MR",
    "value": "+222"
  },
  {
    "label": "+230",
    "description": "Mauritius",
    "additional": "MU",
    "value": "+230"
  },
  {
    "label": "+262",
    "description": "Mayotte",
    "additional": "YT",
    "value": "+262"
  },
  {
    "label": "+52",
    "description": "Mexico",
    "additional": "MX",
    "value": "+52"
  },
  {
    "label": "+377",
    "description": "Monaco",
    "additional": "MC",
    "value": "+377"
  },
  {
    "label": "+976",
    "description": "Mongolia",
    "additional": "MN",
    "value": "+976"
  },
  {
    "label": "+382",
    "description": "Montenegro",
    "additional": "ME",
    "value": "+382"
  },
  {
    "label": "+1664",
    "description": "Montserrat",
    "additional": "MS",
    "value": "+1664"
  },
  {
    "label": "+212",
    "description": "Morocco",
    "additional": "MA",
    "value": "+212"
  },
  {
    "label": "+95",
    "description": "Myanmar",
    "additional": "MM",
    "value": "+95"
  },
  {
    "label": "+264",
    "description": "Namibia",
    "additional": "NA",
    "value": "+264"
  },
  {
    "label": "+674",
    "description": "Nauru",
    "additional": "NR",
    "value": "+674"
  },
  {
    "label": "+977",
    "description": "Nepal",
    "additional": "NP",
    "value": "+977"
  },
  {
    "label": "+31",
    "description": "Netherlands",
    "additional": "NL",
    "value": "+31"
  },
  {
    "label": "+599",
    "description": "Netherlands Antilles",
    "additional": "AN",
    "value": "+599"
  },
  {
    "label": "+687",
    "description": "New Caledonia",
    "additional": "NC",
    "value": "+687"
  },
  {
    "label": "+64",
    "description": "New Zealand",
    "additional": "NZ",
    "value": "+64"
  },
  {
    "label": "+505",
    "description": "Nicaragua",
    "additional": "NI",
    "value": "+505"
  },
  {
    "label": "+227",
    "description": "Niger",
    "additional": "NE",
    "value": "+227"
  },
  {
    "label": "+234",
    "description": "Nigeria",
    "additional": "NG",
    "value": "+234"
  },
  {
    "label": "+683",
    "description": "Niue",
    "additional": "NU",
    "value": "+683"
  },
  {
    "label": "+672",
    "description": "Norfolk Island",
    "additional": "NF",
    "value": "+672"
  },
  {
    "label": "+1 670",
    "description": "Northern Mariana Islands",
    "additional": "MP",
    "value": "+1 670"
  },
  {
    "label": "+47",
    "description": "Norway",
    "additional": "NO",
    "value": "+47"
  },
  {
    "label": "+968",
    "description": "Oman",
    "additional": "OM",
    "value": "+968"
  },
  {
    "label": "+92",
    "description": "Pakistan",
    "additional": "PK",
    "value": "+92"
  },
  {
    "label": "+680",
    "description": "Palau",
    "additional": "PW",
    "value": "+680"
  },
  {
    "label": "+507",
    "description": "Panama",
    "additional": "PA",
    "value": "+507"
  },
  {
    "label": "+675",
    "description": "Papua New Guinea",
    "additional": "PG",
    "value": "+675"
  },
  {
    "label": "+595",
    "description": "Paraguay",
    "additional": "PY",
    "value": "+595"
  },
  {
    "label": "+51",
    "description": "Peru",
    "additional": "PE",
    "value": "+51"
  },
  {
    "label": "+63",
    "description": "Philippines",
    "additional": "PH",
    "value": "+63"
  },
  {
    "label": "+48",
    "description": "Poland",
    "additional": "PL",
    "value": "+48"
  },
  {
    "label": "+351",
    "description": "Portugal",
    "additional": "PT",
    "value": "+351"
  },
  {
    "label": "+1 939",
    "description": "Puerto Rico",
    "additional": "PR",
    "value": "+1 939"
  },
  {
    "label": "+974",
    "description": "Qatar",
    "additional": "QA",
    "value": "+974"
  },
  {
    "label": "+40",
    "description": "Romania",
    "additional": "RO",
    "value": "+40"
  },
  {
    "label": "+250",
    "description": "Rwanda",
    "additional": "RW",
    "value": "+250"
  },
  {
    "label": "+685",
    "description": "Samoa",
    "additional": "WS",
    "value": "+685"
  },
  {
    "label": "+378",
    "description": "San Marino",
    "additional": "SM",
    "value": "+378"
  },
  {
    "label": "+966",
    "description": "Saudi Arabia",
    "additional": "SA",
    "value": "+966"
  },
  {
    "label": "+221",
    "description": "Senegal",
    "additional": "SN",
    "value": "+221"
  },
  {
    "label": "+381",
    "description": "Serbia",
    "additional": "RS",
    "value": "+381"
  },
  {
    "label": "+248",
    "description": "Seychelles",
    "additional": "SC",
    "value": "+248"
  },
  {
    "label": "+232",
    "description": "Sierra Leone",
    "additional": "SL",
    "value": "+232"
  },
  {
    "label": "+65",
    "description": "Singapore",
    "additional": "SG",
    "value": "+65"
  },
  {
    "label": "+421",
    "description": "Slovakia",
    "additional": "SK",
    "value": "+421"
  },
  {
    "label": "+386",
    "description": "Slovenia",
    "additional": "SI",
    "value": "+386"
  },
  {
    "label": "+677",
    "description": "Solomon Islands",
    "additional": "SB",
    "value": "+677"
  },
  {
    "label": "+27",
    "description": "South Africa",
    "additional": "ZA",
    "value": "+27"
  },
  {
    "label": "+500",
    "description": "South Georgia and the South Sandwich Islands",
    "additional": "GS",
    "value": "+500"
  },
  {
    "label": "+34",
    "description": "Spain",
    "additional": "ES",
    "value": "+34"
  },
  {
    "label": "+94",
    "description": "Sri Lanka",
    "additional": "LK",
    "value": "+94"
  },
  {
    "label": "+249",
    "description": "Sudan",
    "additional": "SD",
    "value": "+249"
  },
  {
    "label": "+597",
    "description": "Suriname",
    "additional": "SR",
    "value": "+597"
  },
  {
    "label": "+268",
    "description": "Swaziland",
    "additional": "SZ",
    "value": "+268"
  },
  {
    "label": "+46",
    "description": "Sweden",
    "additional": "SE",
    "value": "+46"
  },
  {
    "label": "+41",
    "description": "Switzerland",
    "additional": "CH",
    "value": "+41"
  },
  {
    "label": "+992",
    "description": "Tajikistan",
    "additional": "TJ",
    "value": "+992"
  },
  {
    "label": "+66",
    "description": "Thailand",
    "additional": "TH",
    "value": "+66"
  },
  {
    "label": "+228",
    "description": "Togo",
    "additional": "TG",
    "value": "+228"
  },
  {
    "label": "+690",
    "description": "Tokelau",
    "additional": "TK",
    "value": "+690"
  },
  {
    "label": "+676",
    "description": "Tonga",
    "additional": "TO",
    "value": "+676"
  },
  {
    "label": "+1 868",
    "description": "Trinidad and Tobago",
    "additional": "TT",
    "value": "+1 868"
  },
  {
    "label": "+216",
    "description": "Tunisia",
    "additional": "TN",
    "value": "+216"
  },
  {
    "label": "+90",
    "description": "Turkey",
    "additional": "TR",
    "value": "+90"
  },
  {
    "label": "+993",
    "description": "Turkmenistan",
    "additional": "TM",
    "value": "+993"
  },
  {
    "label": "+1 649",
    "description": "Turks and Caicos Islands",
    "additional": "TC",
    "value": "+1 649"
  },
  {
    "label": "+688",
    "description": "Tuvalu",
    "additional": "TV",
    "value": "+688"
  },
  {
    "label": "+256",
    "description": "Uganda",
    "additional": "UG",
    "value": "+256"
  },
  {
    "label": "+380",
    "description": "Ukraine",
    "additional": "UA",
    "value": "+380"
  },
  {
    "label": "+971",
    "description": "United Arab Emirates",
    "additional": "AE",
    "value": "+971"
  },
  {
    "label": "+44",
    "description": "United Kingdom",
    "additional": "GB",
    "value": "+44"
  },
  {
    "label": "+1",
    "description": "United States",
    "additional": "US",
    "value": "+1"
  },
  {
    "label": "+598",
    "description": "Uruguay",
    "additional": "UY",
    "value": "+598"
  },
  {
    "label": "+998",
    "description": "Uzbekistan",
    "additional": "UZ",
    "value": "+998"
  },
  {
    "label": "+678",
    "description": "Vanuatu",
    "additional": "VU",
    "value": "+678"
  },
  {
    "label": "+681",
    "description": "Wallis and Futuna",
    "additional": "WF",
    "value": "+681"
  },
  {
    "label": "+967",
    "description": "Yemen",
    "additional": "YE",
    "value": "+967"
  },
  {
    "label": "+260",
    "description": "Zambia",
    "additional": "ZM",
    "value": "+260"
  },
  {
    "label": "+263",
    "description": "Zimbabwe",
    "additional": "ZW",
    "value": "+263"
  },
  {
    "label": "",
    "description": "land Islands",
    "additional": "AX",
    "value": ""
  },
  {
    "label": null,
    "description": "Antarctica",
    "additional": "AQ",
    "value": null
  },
  {
    "label": "+591",
    "description": "Bolivia, Plurinational State of",
    "additional": "BO",
    "value": "+591"
  },
  {
    "label": "+673",
    "description": "Brunei Darussalam",
    "additional": "BN",
    "value": "+673"
  },
  {
    "label": "+61",
    "description": "Cocos (Keeling) Islands",
    "additional": "CC",
    "value": "+61"
  },
  {
    "label": "+243",
    "description": "Congo, The Democratic Republic of the",
    "additional": "CD",
    "value": "+243"
  },
  {
    "label": "+225",
    "description": "Cote d'Ivoire",
    "additional": "CI",
    "value": "+225"
  },
  {
    "label": "+500",
    "description": "Falkland Islands (Malvinas)",
    "additional": "FK",
    "value": "+500"
  },
  {
    "label": "+44",
    "description": "Guernsey",
    "additional": "GG",
    "value": "+44"
  },
  {
    "label": "+379",
    "description": "Holy See (Vatican City State)",
    "additional": "VA",
    "value": "+379"
  },
  {
    "label": "+852",
    "description": "Hong Kong",
    "additional": "HK",
    "value": "+852"
  },
  {
    "label": "+98",
    "description": "Iran, Islamic Republic of",
    "additional": "IR",
    "value": "+98"
  },
  {
    "label": "+44",
    "description": "Isle of Man",
    "additional": "IM",
    "value": "+44"
  },
  {
    "label": "+44",
    "description": "Jersey",
    "additional": "JE",
    "value": "+44"
  },
  {
    "label": "+850",
    "description": "Korea, Democratic People's Republic of",
    "additional": "KP",
    "value": "+850"
  },
  {
    "label": "+82",
    "description": "Korea, Republic of",
    "additional": "KR",
    "value": "+82"
  },
  {
    "label": "+856",
    "description": "Lao People's Democratic Republic",
    "additional": "LA",
    "value": "+856"
  },
  {
    "label": "+218",
    "description": "Libyan Arab Jamahiriya",
    "additional": "LY",
    "value": "+218"
  },
  {
    "label": "+853",
    "description": "Macao",
    "additional": "MO",
    "value": "+853"
  },
  {
    "label": "+389",
    "description": "Macedonia, The Former Yugoslav Republic of",
    "additional": "MK",
    "value": "+389"
  },
  {
    "label": "+691",
    "description": "Micronesia, Federated States of",
    "additional": "FM",
    "value": "+691"
  },
  {
    "label": "+373",
    "description": "Moldova, Republic of",
    "additional": "MD",
    "value": "+373"
  },
  {
    "label": "+258",
    "description": "Mozambique",
    "additional": "MZ",
    "value": "+258"
  },
  {
    "label": "+970",
    "description": "Palestinian Territory, Occupied",
    "additional": "PS",
    "value": "+970"
  },
  {
    "label": "+872",
    "description": "Pitcairn",
    "additional": "PN",
    "value": "+872"
  },
  {
    "label": "+262",
    "description": "Réunion",
    "additional": "RE",
    "value": "+262"
  },
  {
    "label": "+7",
    "description": "Russia",
    "additional": "RU",
    "value": "+7"
  },
  {
    "label": "+590",
    "description": "Saint Barthélemy",
    "additional": "BL",
    "value": "+590"
  },
  {
    "label": "+290",
    "description": "Saint Helena, Ascension and Tristan Da Cunha",
    "additional": "SH",
    "value": "+290"
  },
  {
    "label": "+1 869",
    "description": "Saint Kitts and Nevis",
    "additional": "KN",
    "value": "+1 869"
  },
  {
    "label": "+1 758",
    "description": "Saint Lucia",
    "additional": "LC",
    "value": "+1 758"
  },
  {
    "label": "+590",
    "description": "Saint Martin",
    "additional": "MF",
    "value": "+590"
  },
  {
    "label": "+508",
    "description": "Saint Pierre and Miquelon",
    "additional": "PM",
    "value": "+508"
  },
  {
    "label": "+1 784",
    "description": "Saint Vincent and the Grenadines",
    "additional": "VC",
    "value": "+1 784"
  },
  {
    "label": "+239",
    "description": "Sao Tome and Principe",
    "additional": "ST",
    "value": "+239"
  },
  {
    "label": "+252",
    "description": "Somalia",
    "additional": "SO",
    "value": "+252"
  },
  {
    "label": "+47",
    "description": "Svalbard and Jan Mayen",
    "additional": "SJ",
    "value": "+47"
  },
  {
    "label": "+963",
    "description": "Syrian Arab Republic",
    "additional": "SY",
    "value": "+963"
  },
  {
    "label": "+886",
    "description": "Taiwan, Province of China",
    "additional": "TW",
    "value": "+886"
  },
  {
    "label": "+255",
    "description": "Tanzania, United Republic of",
    "additional": "TZ",
    "value": "+255"
  },
  {
    "label": "+670",
    "description": "Timor-Leste",
    "additional": "TL",
    "value": "+670"
  },
  {
    "label": "+58",
    "description": "Venezuela, Bolivarian Republic of",
    "additional": "VE",
    "value": "+58"
  },
  {
    "label": "+84",
    "description": "Viet Nam",
    "additional": "VN",
    "value": "+84"
  },
  {
    "label": "+1 284",
    "description": "Virgin Islands, British",
    "additional": "VG",
    "value": "+1 284"
  },
  {
    "label": "+1 340",
    "description": "Virgin Islands, U.S.",
    "additional": "VI",
    "value": "+1 340"
  }
];

export default countryCodes;