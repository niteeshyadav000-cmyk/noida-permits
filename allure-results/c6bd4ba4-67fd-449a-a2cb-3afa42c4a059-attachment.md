# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AEQP_flow.spec.js >> aviator sms >> Request Application
- Location: tests\AEQP_flow.spec.js:63:2

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f5e3]:
  - generic [ref=f5e4]:
    - button "Submit" [ref=f5e7] [cursor=pointer]
    - list [ref=f5e9]:
      - listitem [ref=f5e10]:
        - generic [ref=f5e11] [cursor=pointer]:
          - img "Inbox" [ref=f5e12]: 
          - generic [ref=f5e14]: Inbox
      - listitem [ref=f5e15]:
        - generic:
          - img "Dashboard": 
          - generic: Dashboard
      - listitem [ref=f5e16]:
        - generic:
          - img "Favourites": 
          - generic: Favourites
      - listitem [ref=f5e17]:
        - generic [ref=f5e18] [cursor=pointer]:
          - img "Refresh" [ref=f5e19]: 
          - generic [ref=f5e21]: Refresh
      - listitem [ref=f5e22]:
        - generic [ref=f5e23] [cursor=pointer]:
          - img [aria-hidden] [ref=f5e24]: 
          - generic [ref=f5e26]: Logout
      - listitem [ref=f5e27]:
        - button "A raju" [ref=f5e30] [cursor=pointer]
      - listitem [ref=f5e31]:
        - button "Submit" [disabled] [ref=f5e33]
  - generic [ref=f5e35]:
    - generic:  
    - generic [ref=f5e36]:
      - table
      - list [ref=f5e38]:
        - listitem [ref=f5e39] [cursor=pointer]:
          - link "Home Home" [ref=f5e40]:
            - /url: Menus.aspx
            - img "Home" [ref=f5e41]
            - generic [ref=f5e42]: Home
        - listitem [ref=f5e43] [cursor=pointer]:
          - link "Safety Policy Safety Policy" [ref=f5e44]:
            - /url: "#"
            - generic [ref=f5e45]:
              - img "Safety Policy" [ref=f5e46]
              - generic [ref=f5e47]: Safety Policy
        - listitem [ref=f5e48] [cursor=pointer]:
          - link "Safety Risk Management Safety Risk Management" [ref=f5e49]:
            - /url: "#"
            - generic [ref=f5e50]:
              - img "Safety Risk Management" [ref=f5e51]
              - generic [ref=f5e52]: Safety Risk Management
        - listitem [ref=f5e53] [cursor=pointer]:
          - link "Safety Assurance Safety Assurance" [ref=f5e54]:
            - /url: "#"
            - generic [ref=f5e55]:
              - img "Safety Assurance" [ref=f5e56]
              - generic [ref=f5e57]: Safety Assurance
        - listitem [ref=f5e58] [cursor=pointer]:
          - link "Permit Permit" [ref=f5e59]:
            - /url: "#"
            - generic [ref=f5e60]:
              - img "Permit" [ref=f5e61]
              - generic [ref=f5e62]: Permit
        - list [ref=f5e64]:
          - listitem [ref=f5e65] [cursor=pointer]:
            - link "Equipment Management Equipment Management" [ref=f5e66]:
              - /url: "#"
              - img "Equipment Management"
              - generic: Equipment Management
          - listitem [ref=f5e67] [cursor=pointer]:
            - link "Loss/Damage/Surrender Loss/Damage/Surrender" [ref=f5e68]:
              - /url: "#"
              - img "Loss/Damage/Surrender"
              - generic: Loss/Damage/Surrender
          - listitem [ref=f5e69] [cursor=pointer]:
            - link "Airside Driving Permit Airside Driving Permit" [ref=f5e70]:
              - /url: "#"
              - img "Airside Driving Permit"
              - generic: Airside Driving Permit
          - listitem [ref=f5e71] [cursor=pointer]:
            - link "Airside Equipment Permit Airside Equipment Permit" [ref=f5e72]:
              - /url: "#"
              - img "Airside Equipment Permit"
              - generic: Airside Equipment Permit
          - listitem [ref=f5e73] [cursor=pointer]:
            - link "Airside Vehicle Permit Airside Vehicle Permit" [ref=f5e74]:
              - /url: "#"
              - img "Airside Vehicle Permit"
              - generic: Airside Vehicle Permit
          - listitem [ref=f5e75] [cursor=pointer]:
            - link "TAEP TAEP" [ref=f5e76]:
              - /url: "#"
              - img "TAEP"
              - generic: TAEP
        - listitem [ref=f5e77] [cursor=pointer]:
          - link "ERS ERS" [ref=f5e78]:
            - /url: "#"
            - generic [ref=f5e79]:
              - img "ERS" [ref=f5e80]
              - generic [ref=f5e81]: ERS
  - generic [ref=f5e82]:
    - generic [ref=f5e83]:
      - generic [ref=f5e84]:
        - generic:
          - generic:
            - list:
              - listitem [ref=f5e85]:
                - generic [ref=f5e86]: Equipment and Location Details
      - button "Save" [ref=f5e88] [cursor=pointer]
    - generic:
      - table:
        - rowgroup:
          - row:
            - cell:
              - table:
                - rowgroup:
                  - row:
                    - cell
              - table [ref=f5e89]:
                - rowgroup [ref=f5e90]:
                  - row [ref=f5e91]:
                    - cell [ref=f5e92]
                    - cell:
                      - table
            - cell
    - table:
      - rowgroup:
        - row:
          - cell
    - generic:
      - table:
        - rowgroup:
          - row:
            - cell
    - generic:
      - table:
        - rowgroup:
          - row:
            - cell
    - generic:
      - table:
        - rowgroup:
          - row:
            - cell
    - generic [ref=f5e93]:
      - generic [ref=f5e94] [cursor=pointer]: Equipment and Location Details
      - generic [ref=f5e97]:
        - table [ref=f5e98]:
          - rowgroup [ref=f5e99]:
            - row [ref=f5e100]:
              - cell "Equipment General Details" [ref=f5e101]
            - row [ref=f5e102]:
              - cell "Equipment Id" [ref=f5e103]
              - cell [ref=f5e104]:
                - textbox "Auto Generated" [disabled] [ref=f5e105]
            - row [ref=f5e106]:
              - cell "Equipment owner *" [ref=f5e107]
              - cell "Entity" [ref=f5e108]:
                - combobox [disabled] [ref=f5e109]:
                  - option
                  - option "Entity" [selected]
                  - option "Noida Intl Airport"
              - cell "Entity" [ref=f5e110]
              - cell "LSG dealers" [ref=f5e111]:
                - combobox [disabled] [ref=f5e112]:
                  - option
                  - option
                  - option
                  - option
                  - option "aaron dealers"
                  - option "aaron dealers"
                  - option "Abid Hussain dealers"
                  - option "Accunetix"
                  - option "Aceware"
                  - option "Achut"
                  - option "ADAA DEALERS"
                  - option "ADI BLOSSOMS DEALERS"
                  - option "air africa"
                  - option "Air Arabia"
                  - option "air canada"
                  - option "air canada"
                  - option "Air India Pilot"
                  - option "Air Lounge_Foods & Beverages"
                  - option "airline1"
                  - option "Airlinee"
                  - option "Airlines"
                  - option "Airlines Adp"
                  - option "airlines employee"
                  - option "Airlines1"
                  - option "Airlines2"
                  - option "Airport"
                  - option "Airport Lounge Hospitality"
                  - option "Airside Operations Support"
                  - option "Airside_Saapad"
                  - option "Airside_Saapad"
                  - option "Akash"
                  - option "akbar dealers"
                  - option "Ambassador Sky Chef"
                  - option "Ambient dealers"
                  - option "amrutham dealers"
                  - option "anil dealers"
                  - option "AP Airlines"
                  - option "ARJUN DEALERS"
                  - option "ARVIND DEALERS"
                  - option "asdf"
                  - option "ashish dealers"
                  - option "Aster dealers"
                  - option "AVA dealers"
                  - option "AVFS dealers"
                  - option "Avinash Dealers"
                  - option "B.B. dealers"
                  - option "B2C_Entity"
                  - option "BA ADHOC"
                  - option "BBB Airlines"
                  - option "Bharathi dealers"
                  - option "bhargav dealers"
                  - option "Bird Worldwide Flight Services Indi"
                  - option "Bird Worldwide Flight Services India"
                  - option "BSSPL dealers"
                  - option "BVG dealers"
                  - option "camal"
                  - option "Cargo Logistics Partner"
                  - option "CATHAY dealers"
                  - option "Celebi dealers"
                  - option "Centurian dealers"
                  - option "Chandana Dealers"
                  - option "CISF dealers"
                  - option "Construction Entity"
                  - option "CPS dealers"
                  - option "Dharma dealers"
                  - option "Durga dealers"
                  - option "Ecotex dealers"
                  - option "EntityName02"
                  - option "EntityName1"
                  - option "EntityName1"
                  - option "EntityName2"
                  - option "EntityName3"
                  - option "EntityName4"
                  - option "Fariz dealers"
                  - option "FDH"
                  - option "Feul Suppliers"
                  - option "GALAXY TRAVELS C/O TPL"
                  - option "GFM dealers"
                  - option "GLOBE GROUND dealers"
                  - option "gowrii dealers"
                  - option "gowthami dealers"
                  - option "Ground Transport Coordination"
                  - option "GWM"
                  - option "HANUMAN DEALERS"
                  - option "HUSSAIN dealers"
                  - option "Hyder dealers"
                  - option "ICICI BANK LTD"
                  - option "Indigo"
                  - option "indigo"
                  - option "IOSTL dealers"
                  - option "Jagadeesh dealers"
                  - option "Jashikha"
                  - option "JAVID HUSSAIN dealers"
                  - option "JAY DEALERS"
                  - option "JYOTHI DEALERS"
                  - option "KALKI dealers"
                  - option "Kunamneni dealers"
                  - option "L & T dealers"
                  - option "lakshman dealers"
                  - option "Lakshmi dealers"
                  - option "Lavanya Airlines"
                  - option "Lavanya Airlines 2"
                  - option "lavanya dealers"
                  - option "Lohitha"
                  - option "Lokeshwari dealers"
                  - option "Lounge_Khaana"
                  - option "LSG dealers" [selected]
                  - option "Lufthansa dealers"
                  - option "Mahalaxmi dealers"
                  - option "mahesh dealers"
                  - option "malleshan"
                  - option "manikanta dealers"
                  - option "manirathnam dealers"
                  - option "Manju dealers"
                  - option "manohar dealers"
                  - option "MENZIES dealers"
                  - option "MHB dealers"
                  - option "MILLENNIUM dealers"
                  - option "MMM Airlines"
                  - option "MVV BUILDER"
                  - option "nandu dealers"
                  - option "narayana dealers"
                  - option "Noida Duty Free Retail"
                  - option "PayU"
                  - option "Payu Testing"
                  - option "PostAlign Customer E"
                  - option "praveen"
                  - option "Private Dealers"
                  - option "prosp"
                  - option "Raghavendra dealers"
                  - option "Raheja dealers"
                  - option "Rajamouli dealers"
                  - option "rajendra dealers"
                  - option "rajesh dealers"
                  - option "Ramaiah dealers"
                  - option "Ramasami dealers"
                  - option "Rayudu dealers"
                  - option "RBC Builders"
                  - option "RBC Builders"
                  - option "RealTimeSociety"
                  - option "Rohitha"
                  - option "saikumar dealers"
                  - option "Sairam Dealers"
                  - option "sankar dealers"
                  - option "saraswathi dealers"
                  - option "Sarath dealers"
                  - option "SATHISH DEALERS"
                  - option "Satish dealers"
                  - option "Shanmugan dealers"
                  - option "SHUBHODAYA DEALERS"
                  - option "Singur dealers"
                  - option "SmokeTest Customer Afrin"
                  - option "SmokeTest Customer C"
                  - option "SmokeTest Customer New"
                  - option "SmokeTest Customer P"
                  - option "SmokeTest Customer Vishwas"
                  - option "SmokeTest Customer Z"
                  - option "SPICE JET"
                  - option "Spice Jet"
                  - option "SRI KRISHNA DEALERS"
                  - option "SRI VINAYAKA dealers"
                  - option "srinivas dealers"
                  - option "Srinivasa Airlines"
                  - option "Srinivasa dealers"
                  - option "Srivass dealers"
                  - option "Star dealers"
                  - option "Sudhakar dealers"
                  - option "suresh dealers"
                  - option "Swetha entity"
                  - option "Taj dealers"
                  - option "TCS dealers"
                  - option "Terminal Parking Services"
                  - option "TEST CUSTOMER 21 MAR25"
                  - option "TEST ENTITY"
                  - option "Testing Agency"
                  - option "Turner India Limited"
                  - option "twer"
                  - option "Uniq Facilities Services Pvt Ltd"
                  - option "vamsi dealers"
                  - option "Vardharajan dealers"
                  - option "Vijay foods"
                  - option "Vinayaka dealers"
                  - option "Vistara (TATA SIA Airlines)"
                  - option "youi"
            - row [ref=f5e113]:
              - cell "Equipment/Vehicle Number *" [ref=f5e114]
              - cell [ref=f5e115]:
                - textbox [ref=f5e116]: AP 31 JR 0819
              - cell "Parent Equipment Id" [ref=f5e117]
              - cell [ref=f5e118]:
                - table [ref=f5e119]:
                  - rowgroup [ref=f5e120]:
                    - row [ref=f5e121]:
                      - cell [ref=f5e122]:
                        - textbox [ref=f5e123]
                        - button "Submit" [ref=f5e124] [cursor=pointer]
                    - row:
                      - cell
            - row [ref=f5e125]:
              - cell "Equipment Category *" [ref=f5e126]
              - cell "Non-Motorised" [ref=f5e127]:
                - combobox [ref=f5e128]:
                  - option
                  - option "Motorised"
                  - option "Non-Motorised" [selected]
                  - option "Others"
            - row [ref=f5e129]:
              - cell "Equipment Type *" [ref=f5e130]
              - cell "Maintenance" [ref=f5e131]:
                - combobox [ref=f5e132]:
                  - option
                  - option "GSE"
                  - option "Maintenance" [selected]
              - cell "Equipment Subtype" [ref=f5e133]
              - cell "Rotary Slasher" [ref=f5e134]:
                - combobox [ref=f5e135]:
                  - option
                  - option "Air Compressor"
                  - option "ARC Welding Machine"
                  - option "Bitumen Browser"
                  - option "Boom Sprayer"
                  - option "Canopy Stand"
                  - option "Concrete Cutter"
                  - option "Diesel Generator Without Trolley"
                  - option "Electric Cutting Machine"
                  - option "Falcon Lift"
                  - option "Fast Charger"
                  - option "Fixed Electric Ground Power"
                  - option "Gas Re-filler"
                  - option "Hand held Communication Set"
                  - option "Hand held Metal Detector"
                  - option "Hydra Floor Crane"
                  - option "Hydraulic Press"
                  - option "Line Laxer"
                  - option "Mig Welder"
                  - option "Mini Manual Roller"
                  - option "Mini Roller-IR"
                  - option "Others (Text box Required)"
                  - option "Passenger Board Bridge"
                  - option "PBB Maintenance Scaffold"
                  - option "PBB tow Bar"
                  - option "Plasma Cutter"
                  - option "Plate Compactor-IR"
                  - option "Rotary Slasher" [selected]
                  - option "Rotavator"
                  - option "Scissor Lift(4M, 12M & 14M)"
                  - option "Slow Charge"
                  - option "SOD Cutter"
                  - option "Srvice ladders"
                  - option "Tech Mach Up Lift"
                  - option "Trolley Mounted Gen set"
                  - option "Vacuum Cleaner"
                  - option "Weight Cart"
            - row [ref=f5e136]:
              - cell "Equipment Title *" [ref=f5e137]
              - cell [ref=f5e138]:
                - textbox [active] [ref=f5e139]: CRANE
            - row [ref=f5e140]:
              - cell "Description" [ref=f5e141]
              - cell [ref=f5e142]:
                - textbox [ref=f5e143]
            - row [ref=f5e144]:
              - cell "BA Device Time Span" [ref=f5e145]
              - cell [ref=f5e146]:
                - combobox [ref=f5e147]:
                  - option [selected]
                  - option "1 year (10000 Blows)"
                  - option "6 months (10000 Blows)"
            - row [ref=f5e148]:
              - cell "Owner ship of Vehicle" [ref=f5e149]
              - cell [ref=f5e150]:
                - combobox [ref=f5e151]:
                  - option [selected]
                  - option "Company Owned"
                  - option "Personal"
                  - option "Third Party"
            - row [ref=f5e152]:
              - cell "Permit / Pass No." [ref=f5e153]
              - cell [ref=f5e154]:
                - textbox [disabled] [ref=f5e155]
              - cell "Permit / Pass Date" [ref=f5e156]
              - cell [ref=f5e157]:
                - table [ref=f5e158]:
                  - rowgroup [ref=f5e159]:
                    - row [ref=f5e160]:
                      - cell [ref=f5e161]:
                        - textbox [disabled] [ref=f5e162]
            - row [ref=f5e163]:
              - cell "Cost" [ref=f5e164]
              - cell [ref=f5e165]:
                - textbox [ref=f5e166]
              - cell "Status *" [ref=f5e167]
              - cell "Active" [ref=f5e168]:
                - combobox [disabled] [ref=f5e169]:
                  - option
                  - option "Active" [selected]
                  - option "Inactive"
            - row [ref=f5e170]:
              - cell "Specifications(L*B*H)" [ref=f5e171]
              - cell [ref=f5e172]:
                - textbox [ref=f5e173]
              - cell "Used department" [ref=f5e174]
              - cell [ref=f5e175]:
                - textbox [ref=f5e176]
            - row [ref=f5e177]:
              - cell "Reason for Inactive" [ref=f5e178]
              - cell [ref=f5e179]:
                - combobox [disabled] [ref=f5e180]:
                  - option [selected]
                  - option "Breakdown"
                  - option "Duplicate entry"
                  - option "Others"
                  - option "Out of service"
              - cell "Effective Date" [ref=f5e181]
              - cell [ref=f5e182]:
                - table [ref=f5e183]:
                  - rowgroup [ref=f5e184]:
                    - row [ref=f5e185]:
                      - cell [ref=f5e186]:
                        - textbox [disabled] [ref=f5e187]
                        - button "Submit" [ref=f5e188] [cursor=pointer]
            - row [ref=f5e189]:
              - cell "Equipment Location Details" [ref=f5e190]
            - row [ref=f5e191]:
              - cell "Work Area" [ref=f5e192]
              - cell [ref=f5e193]:
                - combobox [ref=f5e194]:
                  - option [selected]
                  - option "Airside"
                  - option "Apron Taxi Lanes"
                  - option "Contact Stands"
                  - option "Landside"
                  - option "Other Airside Areas"
                  - option "Perimeter"
                  - option "Runway"
                  - option "Service Roads"
                  - option "Stands 23-38"
                  - option "Stands 39-49"
                  - option "Stands 50-65"
                  - option "Stands 65-86"
                  - option "Taxiway"
                  - option "Terminal"
                  - option "V Road"
              - cell "Work Location" [ref=f5e195]
              - cell [ref=f5e196]:
                - combobox [ref=f5e197]:
                  - option [selected]
            - row [ref=f5e198]:
              - cell "Department" [ref=f5e199]
              - cell [ref=f5e200]:
                - combobox [disabled] [ref=f5e201]:
                  - option [selected]
                  - option "Administration"
                  - option "Advertising & Marketing"
                  - option "Aero Commercial"
                  - option "Aircraft Rescue & Fire Fighting (ARFF)"
                  - option "airport planning"
                  - option "Airside Operations"
                  - option "Airside OPS"
                  - option "AOCC"
                  - option "aosc"
                  - option "APOC"
                  - option "APOC & Terminal Operations"
                  - option "APOC and Terminal Operations"
                  - option "ARFF"
                  - option "Assurance"
                  - option "Aviation Safety"
                  - option "bpm"
                  - option "Business Transformation"
                  - option "cargo"
                  - option "CCO Function - Hospitality"
                  - option "cco office"
                  - option "CDO Function - Engineering & Maintenance"
                  - option "CDO OFFICE"
                  - option "CEO office"
                  - option "CFO Function - Finance & Accounts"
                  - option "CFO Office"
                  - option "CIO office"
                  - option "civil"
                  - option "CNS/ATC/Flight Ops"
                  - option "Commercial"
                  - option "Construction (Terminal)"
                  - option "Construction? (Airside & Landside)"
                  - option "Construction? (Airside & Landside)"
                  - option "Construction? (Airside & Landside)"
                  - option "COO Function - Aircraft Rescue and Firefighting"
                  - option "COO Function - Security & Safety"
                  - option "COO Office"
                  - option "Corporate Communication"
                  - option "Corporate Communications"
                  - option "Crisis Management"
                  - option "Design"
                  - option "digital"
                  - option "E&M"
                  - option "emc"
                  - option "Engineering & Maintenance"
                  - option "Engineering & Maintenance"
                  - option "Environment & Sustainability"
                  - option "Environment & Sustainability"
                  - option "environment&sustainability"
                  - option "facilities"
                  - option "Finance & Accounts"
                  - option "flight operations"
                  - option "Ground Operations"
                  - option "Hospitality"
                  - option "Hospitality"
                  - option "Human Resources"
                  - option "ilhbs"
                  - option "ilhbs - security"
                  - option "information security"
                  - option "Infra Management Office"
                  - option "IT"
                  - option "Legal"
                  - option "mep & airport system"
                  - option "MEP & Airport Systems"
                  - option "Mobility"
                  - option "Non-Aero Commercial"
                  - option "Operations"
                  - option "orat"
                  - option "ORAT & Performance Management"
                  - option "Others"
                  - option "Planning & Development"
                  - option "Planning and Interface?"
                  - option "Planning and Interface?"
                  - option "Planning and Interface?"
                  - option "Planning and Interface?"
                  - option "Planning and Interface?"
                  - option "Planning and Interface?"
                  - option "Planning and Interface?"
                  - option "Planning and Interface?"
                  - option "Planning and Interface?"
                  - option "Planning and Interface?"
                  - option "Planning and Interface?"
                  - option "Planning and Interface?"
                  - option "Planning and Interface?"
                  - option "Procurement & Contracts"
                  - option "Program Management & ORAT"
                  - option "Project Delivery"
                  - option "Public Affairs"
                  - option "Real Estate"
                  - option "Safety"
                  - option "Security"
                  - option "security"
                  - option "Security - AOSC"
                  - option "Security - Daman"
                  - option "Security - Kaushal"
                  - option "Security - Pass Section"
                  - option "Security & Safetu"
                  - option "Security & Safety"
                  - option "Senior VP - OperationsOffice"
                  - option "Strategy, Planning and Performance Management"
                  - option "Technology & Innovation"
                  - option "Technology and Innovation"
                  - option "Technology and Innovation- IT Operations"
                  - option "Technology and Innovation-Digital"
                  - option "Technology and Innovation-Infrastructure Applications"
                  - option "Technology and Innovation-Project"
                  - option "technology enterprise"
                  - option "Technology Operations"
                  - option "technology projects"
                  - option "Terminal Operations"
                  - option "Terminal OPS"
              - cell "Responsible Person" [ref=f5e202]
              - cell [ref=f5e203]:
                - table [ref=f5e204]:
                  - rowgroup [ref=f5e205]:
                    - row [ref=f5e206]:
                      - cell [ref=f5e207]:
                        - textbox [disabled] [ref=f5e208]: "77000367"
                    - row:
                      - cell
                - text: (A RAJU)
            - row
            - row [ref=f5e209]:
              - cell "Make" [ref=f5e210]
              - cell [ref=f5e211]:
                - textbox [ref=f5e212]
              - cell "Model" [ref=f5e213]
              - cell [ref=f5e214]:
                - textbox [ref=f5e215]
            - row [ref=f5e216]:
              - cell [ref=f5e217]
              - cell [ref=f5e218]
            - row [ref=f5e219]:
              - cell [ref=f5e220]
            - row [ref=f5e221]:
              - cell "Attach photo/picture" [ref=f5e222]
              - cell [ref=f5e223]:
                - button "Attach" [ref=f5e224] [cursor=pointer]
            - row:
              - cell
            - row [ref=f5e225]:
              - cell [ref=f5e226]
        - table
        - table
```

# Test source

```ts
  1   | const{test,expect} = require ('@playwright/test')
  2   | 
  3   | const loginURL = 'https://uat-dxn.aviatorsms.com/';
  4   | const dashboardURL = 'https://uat-dxn.aviatorsms.com/Menus.aspx';
  5   | 
  6   | const username = 'lsg_222';
  7   | const password = 'welcome';
  8   | //zoom size
  9   |     /**
  10  |  * @param {import('@playwright/test').Page} page
  11  |  */
  12  | async function setZoom80(page) {
  13  |     await page.evaluate(() => {
  14  |         document.documentElement.style.zoom = '90%';
  15  |     });
  16  | }
  17  | // Equipment Management navigation
  18  | /**
  19  |  * @param {import('@playwright/test').Page} page
  20  |  */
  21  | async function openEquipmentManagement(page) {
  22  | 
  23  |     await page.locator('xpath=//*[@id="form1"]/div[4]/div[4]').click();
  24  | 
  25  |     await page.locator('xpath=//*[@id="div5_Liparent1"]/a').click();
  26  | 
  27  |     await page.locator('xpath=//*[@id="div5_ul1"]/li[1]/a/span').click();
  28  | 
  29  |     await setZoom80(page);
  30  |     
  31  | }
  32  |  function generateVehicleNumber(){
  33  | const state='AP';
  34  | const distrit='31';
  35  | const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  36  | const letter1 = letters[Math.floor(Math.random()*26)];
  37  | const letter2 = letters[Math.floor(Math.random()*26)];
  38  | const number = Math.floor(Math.random()*1000).toString().padStart(4,'0');
  39  | return`${state} ${distrit} ${letter1}${letter2} ${number}`;
  40  |  }
  41  |     //login 
  42  |     /**
  43  |  * @param {import('@playwright/test').Page} page
  44  |  */
  45  |     async function login(page) {
  46  |       await page.goto(loginURL);
  47  |       await  setZoom80(page);
  48  |       await page.locator("//*[@id='txt_Username']").fill(username);
  49  |        await page.locator("//*[@id='txt_Password']").fill(password);
  50  |   await page.locator("//*[@id='btn_Login']").click();
  51  |   await expect(page).toHaveURL(dashboardURL);
  52  | //   await setZoom80(page);
  53  |   await  openEquipmentManagement(page);
  54  |     }
  55  |     test('login function', async ({ page }) => {
  56  |       await login(page);
  57  |     })
  58  |     test.describe('aviator sms', ()=>{
  59  | test.beforeEach(async ({page}) =>{
  60  | await login(page);
  61  | })
  62  | 
  63  |  test('Request Application', async ({ page }) => {
  64  | 
  65  |     const vehicleNumber = generateVehicleNumber();
  66  |     await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_txt_3988_OF']").fill(vehicleNumber);
  67  |      await page.waitForTimeout(3000);
  68  |     await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_ddl_5747_ME_842']").selectOption({index:2});
  69  |     await page.waitForTimeout(3000);
  70  |     await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_ddl_5749_ME_844']").selectOption({index:2});
  71  |     await page.waitForTimeout(5000);
  72  |     await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_txt_2157_OF']").pressSequentially('CRANE');
  73  |    await page.waitForTimeout(3000);
  74  |    console.log(await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_ddl_5750_ME_845']").allTextContents());
  75  |      await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_ddl_5750_ME_845']").selectOption({label: 'Rotary Slasher'});
  76  |     await page.waitForTimeout(3000);
  77  |     await page.evaluate(() => {
  78  |     window.scrollBy(0,1100);
  79  | });
> 80  |  await page.waitForTimeout(3000);
      |             ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  81  |  const attach="//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_btn_2244_OF']"
  82  | await page.locator(attach).click();
  83  | const parentPage = page;
  84  | const context = page.context();
  85  | 
  86  | const attach1= "//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_btn_2244_OF']";
  87  | 
  88  | // Click Attachments and capture the new page
  89  | const [childPage] = await Promise.all([
  90  |     context.waitForEvent('page'),
  91  |     parentPage.locator(attach1).click()
  92  | ]);
  93  | 
  94  | await childPage.waitForLoadState('domcontentloaded');
  95  | 
  96  | console.log('Popup URL:', childPage.url());
  97  | 
  98  | // Work inside popup
  99  | await childPage.bringToFront();
  100 | 
  101 | await childPage.locator("#ctl00_ContentPlaceHolder1_txt_1992_OF")
  102 |     .pressSequentially('AADHAR');
  103 | 
  104 | await childPage.locator(
  105 |     '#ctl00_ContentPlaceHolder1_btn_AddAttachment'
  106 | ).click();
  107 | 
  108 | // Return to parent page
  109 | await parentPage.bringToFront();
  110 |  });
  111 | })
  112 | 
  113 | 
```