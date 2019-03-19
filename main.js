//This record label works with Funk and Rap artist.
let jumpstop = (genre, name, age) => ({
    "genre": genre,
    "Name": name,
    "age": age
})
//This record label works with Country and Bluegrass artist.
let chattenRecords = (genre, name, age) => ({
    "genre": genre,
    "Name": name,
    "age": age
})
//This record label works with Pop artist.
let polarRecords = (genre, name, age) => ({
    "genre": genre,
    "Name": name,
    "age": age
})

// Bruce Atikins is a Country artist and is 23 years old
let artist1 = ("Bruce Atkins","Country","23")

// Jensen Brown is a Pop artist and is 20 years old
let artist2 = ("Jensen Brown","Pop","20")

// Dre Funkz is a Funk artist and is 25 years old
let artist3 = ("Dre Funkz","Funk","25")

// Dusta Grimes is a Rap artist and is 21 years old
let artist4 = ("Dusta Grimes","Rap","21")

// Bartholomew Danielson is a Bluegrass artist and is 23 years old
let artist5 = ("Bartholomew Danielson","Bluegrass","23")

// Avilee Dallas is a Country artist and is 19 years old
let artist6 = ("Avilee Dallas","Country","19")

// Austin Kinkaid is a Pop artist and is 22 years old
let artist7 = ("Austin Kinkaid","Pop","22")

// Loyoncé Branis is a Rap artist and is 27 years old
let artist8 = ("Loyoncé Branis","Rap","27")

jumpstop.push(artist3,artist4,artist8)
chattenRecords.push(artist1,artist5,artist6)
polarRecords.push(artist2,artist7)
