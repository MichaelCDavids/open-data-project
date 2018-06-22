function OpenDataFactory(storedPeople){
  var persons = storedPeople;
  var areas = ["Adriaanse","Airlie","Alphen","Andas Estates","Annandale","Athlone","Atlantis","Atlantis Industrial","Avondale","Bantry Bay","Beacon Hill","Belgravia","Belhar","Belhar Ext 1","Belhar Ext 16","Belhar Ext 2","Belhar Ext 20","Belhar Ext 21","Belhar Ext 4","Belle Constantia","Bellville","Bene Township","Berbago","Big Bay","Bishop Lavis","Blackheath","Bloekombos","Bloemhof Bellville","Blouberg Sands","Bloubergstrand","Blue Downs","Bonnie Brae","Bonnie Brook","Bonteheuwel","Boston","Bothasig","Brackenfell","Bridgetown","Briza Township","Brooklyn","Burgundy Estate","Camps Bay","Cape Farms - District B","Cape Gate","Cape Town Airport","Cape Town CBD","Chris Nissen Park","Chrismar Bellville","Church Hill Goodwood","Churchill Estate","Clamhall","Claremont","Clifton","Constantia","Crawford","Croydon Vineyard Estate","De Duin","De Kuilen Kuils River","De Tijger","Delft South","Die Wingerd","District 6" ,"Dreyersdal","Driftsands","Durbanville","Durbanville Meadows","Eastridge Mitchells Plain","Edgemead","Eerste River","Electric City","Elsies River","Enkanini","Epping Industrial","Eyethu","Fairdale","Fairfield Estate","Fairways","Faure","Fir Grove","Fish Hoek","Flamingo Vlei","Foreshore","Fresnaye","Garden Village Oude Molen","Gardens","Gatesville","Glencairn","Glenlily","Goedemoed","Goodwood","Gordons Bay Village","Grassy Park","Green Point","Harare","Haumanshof","Hazendal","Heldervue","Highbury Kuils River","Highbury Kuilsriver","Houtbay","Ikwezi Park","Ilitha Park","Joostenberg Vlakte S.H","Kaapzicht","Kalamuda","Kalk Bay","Kaya","Kenever Bellville","Kenilworth","Kenridge Durbanville","Kensington","Khayelitsha","Killarney Gardens","Kirstenhof","Klein Begin","Kleinbosch Plattekloof","Kleinvlei","Kommetjie","Kraaifontein","Kraaifontein East","Kraaifontein Industry","Kuils Rivier","Landsdowne","Langa","Langeberg","Langeberg Hoogte","Langeberg Ridge","Langgewatch","Lentegeur Mitchells Plain","LentegeurMitchells Plain","Lochnerhof","Loevenstein Bellville","Loevenstien Bellville","Lotus River","Lourensford Estate","Macassar","Maitland","Malibu","Mandela Park","Mansfield Industria","Martinville","Melkbosstrand","Mfuleni","Milnerton","Mitchells Plain Cbd","Montague Gifts","Monte Vista","Mountainside Estate","Muizenberg","Nerina Durbanville","Newlands","Nova Constantia","Oak Glen","Oakdale","Oakdene","Observatory","Oosterzee-Bellville","Oranjezicht","Ottery","Panorama","Parkwood","Parow","Parow North","Peerless Park East","Peerless Park North","Peerless Park West","Pelikan Park","Pinehurst","Pinelands","Plattekloof","Plattekloof 1","Plattekloof 2","Plattekloof 3","Plumstead","Portlands Mitchells Plain","Portlands Mitchells Plain","Protea Park","Ravensmead","Retreat","Retreat Industrial Area","Richmond Estate","Richwood","Robinvale","Rocklands Mitchells Plain","Rome","Rosendal Bellville","Ruyterwacht","Salt River","Sarepta Kuilsriver","Schaapkraal","Schonenberg Estate","Sea Point","Silvertown","Simons Town","Somerset Ridge","Somerset West","Sonnekuil","Sonnendal","Sonstraal Heights","Stellenberg","Strand","Strandfontein","Strandvale","Summer Greens","Sun Valley","Sunbird Park","Sunny Dale","Table Mountain","Table View","Tafelsig Mitchells Plain","Tamboerskloof","The Hague","The Link","The Palms","Thembokwezi","Thornton","Tokai","Turf Hall","Tygerdal","Tygervalley Bellville","Uitsig","Uitzicht","Umrhabulo Triangle","Van Ryneveld","Vanguard","Viking Village","Vredehoek","Waterfront","Welgedacht Bellville","Welgelegen","Weltevreden Valley","Wesfleur","West Beach","Westridge Mitchells Plain","Windsor Park Estate","Winslow","Winston Estate","Woodlands Mitchells Plain","Woodstock","Wp Showgrounds","Wynberg","Zevenwatcht Kuils River","Zonnebloem"];


  if (storedPeople && storedPeople.length>0) {
     persons = [];
     for (var i = 0; i < storedPeople.length; i++) {
        persons.push(storedPeople[i]);
     }
  }
  function searchPersons(age,gender,area,doing){
    var filteredPersons = [];
    for (var i = 0; i < persons.length; i++) {
      if (persons[i].age === age || age === "") {
        if (persons[i].gender === gender || gender === "") {
          if (persons[i].area === area || area === "") {
            if (persons[i].doing === doing || doing === "") {
              filteredPersons.push(persons[i]);
            }
          }
        }
      }
    }
    var number = filteredPersons.length;
    console.log("search results contained: "+number+" person(s)");
    return filteredPersons;
  }

  function getPeoples(){
    return persons;
  }

  function getAreas(){
    return areas;
  }


  return {
    search : searchPersons,
    allPeople : getPeoples,
    getAreaList : getAreas
  }
}
