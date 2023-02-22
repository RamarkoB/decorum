import { genDelegates } from "./state";

const committees = {
    "ECOFIN": ["Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia, Plurinational State of",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, Democratic Republic of the",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, Republic of the",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "São Tomé and Príncipe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Türkiye",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela, Bolivarian Republic of",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe"],
    "HGA":["Afghanistan",
    "Albania",
    "Algeria",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Australia",
    "Austria",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia, Plurinational State of",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, Democratic Republic of the",
    "Costa Rica",
    "Côte d'Ivoire",
    "Cuba",
    "Cyprus",
    "Czechoslovakia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, Republic of the",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kenya",
    "Kuwait",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia, Federated States of",
    "Mongolia",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "São Tomé and Príncipe",
    "Saudi Arabia",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Syria",
    "Tanzania, United Republic of",
    "Thailand",
    "Togo",
    "Trinidad and Tobago",
    "Tunisia",
    "Türkiye",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Vanuatu",
    "Venezuela, Bolivarian Republic of",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe"],
    "SOCHUM": ["Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia, Plurinational State of",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, Democratic Republic of the",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, Republic of the",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "São Tomé and Príncipe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Türkiye",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela, Bolivarian Republic of",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe"],
    "DISEC": ["Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia, Plurinational State of",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, Democratic Republic of the",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, Republic of the",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "São Tomé and Príncipe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Türkiye",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela, Bolivarian Republic of",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe"],
    "IAEA": ["Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia, Plurinational State of",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, Democratic Republic of the",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, Republic of the",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "São Tomé and Príncipe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Türkiye",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela, Bolivarian Republic of",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe"],
    "UNHCR": ["United States",
    "Canada",
    "France",
    "Venezuela",
    "Afghanistan",
    "South Sudan",
    "Myanmar",
    "Turkey",
    "Colombia",
    "Uganda",
    "Pakistan",
    "Germany",
    "Syrian Arab Republic",
    "Mexico",
    "Italy",
    "Lebanon",
    "Sri Lanka",
    "Rwanda",
    "Fiji",
    "United Arab Emirates",
    "Niger",
    "Malawi",
    "Jordan",
    "Iraq",
    "Ethiopia",
    "Kenya",
    "Philippines",
    "Russia",
    "Yemen",
    "Liberia",
    "Bangladesh",
    "Portugal",
    "Spain",
    "Iran",
    "Czech Republic",
    "Somalia",
    "Democratic Republic of the Congo",
    "Chad",
    "Chile",
    "China",
    "Egypt",
    "Nigeria",
    "Sweden",
    "Brazil",
    "India",
    "Tanzania",
    "United Kingdom",
    "Argentina",
    "Austria",
    "Malaysia",
    "Panama",
    "Thailand",
    "Netherlands",
    "South Africa",
    "Zambia",
    "Belgium",
    "Australia",
    "Norway",
    "Mali",
    "Denmark",
    "Serbia",
    "Finland",
    "Bulgaria",
    "Nepal",
    "Zimbabwe",
    "Morocco",
    "South Korea",
    "Mozambique",
    "Israel",
    "Georgia",
    "New Zealand",
    "Poland",
    "Japan",
    "Slovenia",
    "Latvia",
    "Sierra Leone",
    "Madagascar",
    "Honduras",
    "Vietnam",
    "Haiti",
    "Ukraine",
    "Romania",
    "Ireland"],
    "UNHRC": ["United States of America",
    "China",
    "United Kingdom",
    "Russian Federation",
    "Brazil",
    "South Africa",
    "Japan",
    "Republic of Korea",
    "France",
    "Canada",
    "Mexico",
    "India",
    "Australia",
    "Senegal",
    "Germany",
    "Switzerland",
    "Spain",
    "Egypt",
    "Argentina",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Cuba",
    "Iraq",
    "Italy",
    "Kenya",
    "Afghanistan",
    "Saudi Arabia",
    "Philippines",
    "Poland",
    "Chile",
    "Portugal",
    "Hungary",
    "Iceland",
    "Peru",
    "Indonesia",
    "Algeria",
    "Belgium",
    "Bahamas",
    "Costa Rica",
    "Democratic Republic of the Congo",
    "Panama",
    "Ukraine",
    "United Arab Emirates",
    "Nigeria",
    "Norway",
    "Qatar",
    "Pakistan",
    "Austria",
    "Bangladesh",
    "Denmark",
    "Sudan",
    "Thailand",
    "Netherlands",
    "Nicaragua",
    "Morocco",
    "Luxembourg",
    "Madagascar",
    "Uruguay",
    "Malaysia",
    "Libya",
    "Ecuador",
    "Uzbekistan",
    "Ireland",
    "El Salvador",
    "Finland",
    "Honduras",
    "Kazakhstan",
    "Uganda",
    "Lithuania",
    "Cameroon"],
    "CSD": ["Afghanistan",
    "Albania",
    "Algeria",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Bhutan",
    "Bolivia",
    "Botswana",
    "Boznia and Herzegovina",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Cambodia",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Djibouti",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Guatemala",
    "Guinea",
    "Guyana",
    "Haiti",
    "Honduras",
    "Iran",
    "Israel",
    "Ivory Coast",
    "Japan",
    "Libya",
    "Morocco",
    "Nigeria",
    "North Macedonia",
    "Paraguay",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Russia",
    "South Africa",
    "Switzerland",
    "Tajikistan",
    "Turkey",
    "Turkmenistan",
    "Uganda",
    "USA",
    "Zambia"],
    "CSTD": ["Australia",
    "Austria",
    "Belarus",
    "Belgium",
    "Botswana",
    "Brazil",
    "Burundi",
    "Cameroon",
    "Canada",
    "China",
    "Cuba",
    "Czech Republic",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "Estonia",
    "Ethiopia",
    "Finland",
    "France",
    "Gambia",
    "Germany",
    "Guatemala",
    "Guinea",
    "Hungary",
    
    "Iran (Islamic Republic of)",
    "Ireland",
    "Israel",
    "Italy",
    "Japan",
    "Kenya",
    "Latvia",
    "Liberia",
    "Madagascar",
    "Nepal",
    "Norway",
    "Oman",
    "Panama",
    "Paraguay",
    "Peru",
    "Philippines",
    "Portugal",
    "Republic of Korea (South Korea)",
    "Romania",
    "Russian Federation",
    "Saudi Arabia",
    "South Africa",
    "Switzerland",
    "Thailand",
    "Turkey",
    "Turkmenistan",
    "United Arab Emirates",
    "United Kingdom of Great Britain and Northern Ireland",
    "United States of America"],
    "CSW": ["Afghanistan",
    "Algeria",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Belarus",
    "Belgium",
    "Bolivia",
    "Brazil",
    "Bulgaria",
    "Burkina Faso",
    "Cabo Verde",
    "Cameroon",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Costa Rica",
    "Cote d'Ivoire",
    "Cuba",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Dominican Republic",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "France",
    "Germany",
    "Grenada",
    "India",
    "Iran",
    "Israel",
    "Italy",
    "Japan",
    "Kazahkstan",
    "Latvia",
    "Lebanon",
    "Liberia",
    "Malaysia",
    "Mauritania",
    "Mexico",
    "Mongolia",
    "Morocco",
    "Nepal",
    "Netherlands",
    "Nigeria",
    "Pakistan",
    "Panama",
    "Peru",
    "Philippines",
    "Poland",
    "Qatar",
    "Riwanda",
    "Russian Federation",
    "Senegal",
    "Slovakia",
    "Somalia",
    "South Africa",
    "Spain",
    "Switzerland",
    "Togo",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Zambia",
    "Zimbabwe"],
    "ICELAND": ["Þorvaldur Gylfason",
    "Salvör Nordal",
    "Ómar Þorfinnur Ragnarsson",
    "Andrés Magnússon",
    "Pétur Gunnlaugsson",
    "Þorkell Helgason",
    "Ari Teitsson",
    "Illugi Jökulsson",
    "Freyja Haraldsdóttir",
    "Silja Bára Ómarsdóttir",
    "Örn Bárður Jónsson",
    "Eiríkur Bergmann Einarsson",
    "Dögg Harðardóttir",
    "Vilhjálmur Þorsteinsson",
    "Þórhildur Þorleifsdóttir",
    "Pawel Bartoszek",
    "Arnfríður Guðmundsdóttir",
    "Erlingur Sigurdarson",
    "Inga Lind Karlsdóttir",
    "Katrín Oddsdóttir",
    " Guðmundur Gunnarsson",
    "Katrín Fjelsted",
    "Ástrós Gunnlaugsdóttir",
    "Gísli Tryggvason",
    "Lýður Árnason"],
    "EPCOT": ["Dick Nunis",
    "Joe Potter",
    "Claude R. Kirk, Jr",
    "W. Haydon Burns",
    "Robert Spencer “Bob” Carr",
    "William Willard Wirtz, Jr.",
    "Robert C. Weaver",
    "Linda Chapin: Women's Rights Activist",
    "Kiara Jackson",
    "Karen Miller",
    "Joe Fowler",
    "Bill Evans",
    "Card Walker",
    "Marvin Davis",
    "Don Escen",
    "Marty Skyler",
    "Anatoly Dobrynin",
    "Ray Watson",
    "Richard Irvine",
    "Bob Matheison",
    "Ub Iwerks",
    "Orlando Ferrante",
    "Ward Kimball",
    "John Hench",
    "Herb Ryman"],
    "CRC": ["Afghanistan",
    "Argentina",
    "Australia",
    "Brazil",
    "Canada",
    "Chile",
    "China",
    "Congo",
    "Ecuador",
    "France",
    "Germany",
    "Iceland",
    "India",
    "Iran",
    "Ireland",
    "Israel",
    "Japan",
    "Mexico",
    "New Zealand",
    "Nigeria",
    "Philippines",
    "Russia",
    "Saudi Arabia",
    "Somalia",
    "South Sudan",
    "Sweden",
    "Switzerland",
    "Syria",
    "Thailand",
    "Uganda",
    "United Kingdom",
    "United States"],
    "IOC": ["Afghanistan",
    "Algeria",
    "Argentina",
    "Australia",
    "Austria",
    "Belgium",
    "Brazil",
    "Cabo Verde",
    "Cameroon",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominican Republic",
    "Ethiopia",
    "Finland",
    "France",
    "Germany",
    "United Kingdom",
    "Greece",
    "Hungary",
    "Indonesia",
    "Ireland",
    "Israel",
    "Italy",
    "Japan",
    "Jordan",
    "Kenya",
    "Kuwait",
    "Liechtenstein",
    "Lithuania",
    "Monaco",
    "Morocco",
    "New Zealand",
    "Norway",
    "Pakistan",
    "Philippines",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Slovakia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Thailand",
    "Turkey",
    "Uganda",
    "Ukraine",
    "United States",
    "Zimbabwe"],
    "IRAN": ["Mirza Nasrullah Khan",
    "Mirza Jahangir Khan",
    "Mirza Sayyed Mohammed Tabatabai",
    "Mohammad-Kazem Khorasani",
    "Abdollah Behbahani",
    "Mohammed Kazem Tabataba'i",
    "Sheikh Fazlollah bin Abbas Mazindarani",
    "Mirza Abutaleb Zanjani",
    "Yeprem Khan",
    "Stepan Zorian",
    "Arshak 'Keri' Gavafian",
    "Allameh Ali Akbar Dehkhoda",
    "Sattar Khan",
    "Abolqassem Aref Qazvini",
    "Sardar Assad",
    "Ṣowlat al-Dowla",
    "Bibi Khanoom Astarabadi",
    "Mohammed Mosaddeq",
    "Abdol Majid Mirza Eyn-ed-Dowleh",
    "Eskandar Khan Davidkhanian",
    "Hassan Pirnia",
    "Prince Abdol-Hossein Farman Farma",
    "Sevkaretsi Sako",
    "Ahmad Kasravi",
    "Sayyid Jamal al-Din 'Va'iz' Esfahani",
    "Mirza Kuchak Khan"],
    "ARAB": ["Armenia",
    "Bahrain",
    "Brazil",
    "Comoros",
    "Djibouti",
    "Egypt",
    "Eritrea",
    "India",
    "Iraq",
    "Jordan",
    "Kuwait",
    "Lebanon",
    "Libya",
    "Mauritania",
    "Oman",
    "Qatar",
    "Saudi Arabia",
    "Somalia",
    "Sudan",
    "Syria",
    "Tunisia",
    "United Arab Emirates",
    "Venezuela",
    "Yemen",
    "Palestine"],
    "OAU": ["Algeria",
    "Cameroon",
    "Chad",
    "Egypt",
    "Ethiopia",
    "Gabon",
    "Ghana",
    "Guinea",
    "Cote d'Ivore",
    "Liberia",
    "Libya",
    "Mali",
    "Morocco",
    "Nigeria",
    "Rwanda",
    "Senegal",
    "Sudan",
    "Uganda"],
    "OIC": ["Republic of AZERBAIJAN",
    "Hashemite Kingdom of JORDAN",
    "Islamic Republic of AFGHANISTAN",
    "Republic of ALBANIA",
    "State of The UNITED ARAB EMIRATES",
    "Republic of INDONESIA",
    "Republic of UZBEKISTAN",
    "Republic of UGANDA",
    "Islamic Republic of IRAN",
    "Islamic Republic of PAKISTAN",
    "Kingdom of BAHRAIN",
    "BRUNEI-DARUSSALAM",
    "People's Republic of BANGLADESH",
    "Republic of BENIN",
    "BURKINA-FASO (then Upper Volta)",
    "Republic of TAJIKISTAN",
    "Republic of TURKEY",
    "Turkmenistan",
    "Republic of CHAD",
    "Republic of TOGO",
    "Republic of TUNISIA",
    "People's Democratic Republic of ALGERIA",
    "Republic of DJIBOUTI",
    "Kingdom of SAUDI ARABIA",
    "Republic of SENEGAL",
    "Republic of The SUDAN",
    "SYRIAN Arab Republic",
    "Republic of SURINAME",
    "Republic of SIERRA LEONE",
    "Republic of SOMALIA",
    "Republic of IRAQ",
    "Sultanate of OMAN",
    "Republic of GABON",
    "Republic of The Gambia",
    "Republic of GUYANA",
    "Republic of GUINEA",
    "Republic of GUINEA-BISSAU",
    "State of PALESTINE",
    "Union of The COMOROS",
    "KYRGYZ Republic",
    "State of QATAR",
    "Republic of KAZAKHSTAN",
    "Republic of CAMEROON",
    "Republic of COTE D'IVOIRE",
    "State of KUWAIT",
    "Republic of LEBANON",
    "Libya",
    "Republic of MALDIVES",
    "Republic of MALI",
    "MALAYSIA",
    "Arab Republic of EGYPT",
    "Kingdom of MOROCCO",
    "Islamic Republic of MAURITANIA",
    "Republic of MOZAMBIQUE",
    "Republic of NIGER",
    "Federal Republic of NIGERIA",
    "Republic of YEMEN"],
    "BOLIVIA": ["Victor Paz Estenssoro",
    "Hernán Siles Zuazo",
    "Marcelo Quiroga Santa Cruz",
    "Juan Lechin",
    "Raúl Botelho Gozalves",
    "Raúl López Leyton",
    "Hugo Céspedes Espinoza",
    "Blanca Alba Quiroz",
    "José Olvis Árias",
    "Ariel Ascarrunz Hurtado",
    "Vito Ramírez López",
    "Óscar Jaime Pammo Rodríguez",
    "Jorge Echazú Aguirre",
    "Rolando Saravia Ortuño",
    "Luisa Rivera Palacios",
    "María Salomón Soria",
    "Víctor Aguilar Dorado",
    "Guillermo Gandarillas Suárez",
    "Juan Mantilla Medina",
    "'The Great Shadow'",
    "Felicia Barrientos",
    "Alfaro Montes",
    "Jorge Campuzano",
    "Lidia Gueiler Tejada",
    "Marcelo Pérez Monasterios",
    "Óscar Lugones Encinas",
    "José Clemente Maurer",
    "Carlos Otero",
    "Gonzalo Lamar",
    "José Francisco Martins"],
    "CHILE": ["Adrián Ramos",
    "Adrían Ramos",
    "Alberto Curamil",
    "Alejandro Foxley",
    "Aucán Huilcamán",
    "Aylén Cayancura",
    "Bernarda Guzmán",
    "Carlos Ominami",
    "Catalina Santana",
    "Cecilia Riquelme",
    "Elisa Loncón",
    "Emilia Nuyado Ancapichun",
    "Enrique Krauss",
    "Enrique Silva Cimma",
    "Joaquín Lavín",
    "Juan Gabriel Valdés",
    "Julia Carrasco",
    "Luis Corvalán",
    "María Josefa Morales",
    "Mario Waissbluth",
    "Newen Huenecura",
    "Pablo Portales",
    "Ricardo Rojas",
    "Santiago Rojas"],
    "TRUCIAL": ["Minister of Defense from Dubai",
    "Minister of Education from Abu Dhabi",
    "Minister of Development from Ajman",
    "Minister of Foreign Trade from Ras al-Khaimah",
    "Minister of State for International Cooperation from Sharjah",
    "Minister of Justice from Fujairah",
    "Minister of Infrastructure from Umm al-Quwain",
    "Minister of Finance from Abu Dhabi",
    "Minister of the Interior form Ajman",
    "Minister of State from Ras a-Khaimah",
    "Minister of Health from Dubai",
    "Minister of Energy from Sharjah",
    "Minister of Finance form Fujairah",
    "Minister of Defense from Umm al-Quwain",
    "Minister of Community Development and Youth Programs form Abu Dhabi"],
    "UNSC": ["China",
    "France",
    "UK",
    "US",
    "USSR",
    "El Salvador",
    "Honduras",
    "Guatemala",
    "Nicaragua",
    "Niger",
    "Tunisia",
    "Uganda",
    "Philippines",
    "Bangladesh",
    "Mexico",
    "Ireland",
    "Spain",
    "East Germany"],
    "HAITI": ["Anténor Firmin",
    "Tirésias Simon Sam",
    "Pierre Théoma Boisrond-Canal",
    "Alson Verne",
    "Archbishop Constant-Mathurin Hillion",
    "Maria Beausejour",
    "Jocelerme Beaumont",
    "Cincinnatus Leconte",
    "Francois Franneau",
    "Hubert Dieujust",
    "Frédéric Marcelin",
    "Clement Haentjens",
    "Monpoint Jeune",
    "Pierre Nord Alexis",
    " Manoucheka Brunel",
    "Tancrede Auguste",
    "Judith Dorval",
    "Dr. Jean-Marie David",
    " Elisabeth Denis",
    "Jean-Jaques Jules Saint Macary",
    "Seïde Thélémaque",
    "Solon Menos",
    "Liautaud Beaujolais",
    "Jacques Nicolas Leger",
    "Alibée Féry",],
    "PHILIPPINES": ["Cardinal Ricardo Vidal",
    "Cardinal Jaime Sin",
    "Sister Lea Salonga",
    "Adolpho Corazon",
    "Salvador Escudero III",
    "Cesar Virata",
    "Estelito Mendoza",
    "Salvador H. Laurel",
    "Nicanor E. Yñiguez, Jr.",
    "Rene Saguisag",
    "Conrado Estrella, Sr.",
    "Jaime Ongpin",
    "Teodoro Locsin Jr.",
    "Mita Pardo de Tavera",
    "Rogaciano Mercado",
    "Solita Monsod",
    "Jovito Salonga",
    "Doy Laurel",
    "Rafael Montinola Salas",
    "Jesus Valdepeñas",
    "John Henry Osmeña",
    "Vicente Estanislao",
    "Ramon Osías",
    "Joaquin Roces",
    "June Keithly"],
    "MATILDA": ["King David I of Scotland",
    "Robert Fitzborn of Gloucester",
    "Brian Fitz Count of Wallingford",
    "Peter of Soissons",
    "Anselm of Canterbury",
    "Hildegard (of Bingen)",
    "Eustace Fitz John, Lord of Malton and Alnwick",
    "Alice Cumin of York",
    "William Murdac",
    "Agnes Alton",
    "Roger Comyn, Lord of Coldingham",
    "Geoffrey of Oxford",
    "Thomas Flambard",
    "Maud, Abbess of Montivilliers",
    "Miles of Gloucester",
    "Lefan Breckon",
    "Clemence of Flamstead",
    "Erik Nielsen II of Denmark",
    "Loretta of Blois",
    "Agnes of Waiblingen",
    "Beatrix of Howden",
    "Juliana Giffard",
    "Guiscard Archambeau of France",
    "Richard Rolfe",
    "Chleb Tarnowski",
    "Héloïse of France"],
    "INDIA":["Pranab Mukherjee",
    "P. Chidambaram",
    "Sharad Pawar",
    "Vayalar Ravi",
    "Anand Sharma",
    "Murli Deora",
    "A. K. Antony",
    "Kapil Sibal",
    "Pranab Mukherjee",
    "Subodh Kant Sahay",
    "Ghulam Nabi Azad",
    "Vilasrao Deshmukh",
    "Ambika Soni",
    "Mallikarjun Kharge",
    "Veerappa Moily",
    "Virbhadra Singh",
    "Pawan Kumar Bansal",
    "Mamata Banerjee",
    "Kamal Nath",
    "G. K. Vasan",
    "Dayanidhi Maran",
    "Bharatsinh Solanki",
    "Jyotiraditya Scindia",
    " Krishna Tirath",
    "Jitendra Singh"],
    "CARBONARI": ["Gabriele Rossetti",
    "Amand Bazard",
    "Silvio Pellico",
    "Pietro Maroncelli",
    "Giuseppe Mazzini",
    "Marquis de Lafayette",
    "Louis-Napoléon Bonaparte",
    "Louis Auguste Blanqui",
    "Lord Byron",
    "Giuseppe Garibaldi",
    "Guglielmo Pepe",
    "Rafael del Riego",
    "Giovanni Andrea Pieri",
    "Michele Amari",
    "Michele Morelli",
    "Giuseppe Silvati",
    "Federico Confalonieri",
    "Ciro Menotti",
    "Cristina Trivulzio",
    "Abbot Minichini",
    "Philippe Buonarroti",
    "Tadeusz Krępowiecki",
    "Jacques Laffitte",
    "Jacques-Charles Dupont de l'Eure",
    "Vincenzo Gioberti"],
    "AD HOC": ["Estefania Palomar",
    "Bianca Recanati",
    "Fanny Rodriguez",
    "Constanza Vazquez",
    "Gabriela Chavez",
    "Florencia Quiñones",
    "Carolina Troncoso",
    "Fabiana Vallejos",
    "Americo Tesoriere",
    "Delfin Benitez Caceres",
    "Juan Alberto Estrada",
    "Severino Varela",
    "Norberto Madurga",
    "Ernesto Grillo",
    "Hugo Gatti",
    "Julio Melendez",
    "Jose Borello",
    "Alcides Silveira",
    "Juan Carlos Colman",
    "Alfredo Rojas"],
    "TEST": genDelegates(15)
}

export default committees;