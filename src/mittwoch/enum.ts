// ENUMS geben uns die möglichkeit für eine bestimmte sache feste werte anzulegen 
// ist super hilfreich für standards 
// keyword enum, bliebiger name, {werte...}
enum Farben {
    Rot, 
    Blau, 
    Gelb
}
console.log(Farben);
console.log(Farben.Rot);
console.log(Farben.Blau);
console.log(Farben.Gelb);
// wenn ich ein enum anlege ohne den keys einen wert zuzuteilen, geben sie eine zahl/ index von 0 beginnend aus 
enum Farben2 {
    Rot = "Rot", 
    Blau = "Blau",
    Gelb = "Gelb"
}
console.log(Farben2);
console.log(Farben2.Rot);
console.log(Farben2.Blau);
console.log(Farben2.Gelb);
// doch wofür kann man enums denn jetzt verwenden?
// wir haben eine app und in dieser gibt es benutzergruppen 
// es gibt keinen standard für diese benutzergruppen 
type TUser = {
    firstName: string, 
    lastName: string, 
    role: string,
}
enum Role {
    Member, 
    Admin, 
    Guest
}
const User123: TUser = {
    firstName: "Bruce",
    lastName: "Wayne",
    role: Role.Member
}
const user5678: TUser = {
    firstName: "Toni",
    lastName: "Stark"
    role: Role.Member
}
const user9012: TUser = {
    firstName: "Natasha",
    lastName: "Ronamoff", 
    role: Role.Admin
}
// ? da es keine einheitliche schreibweise für die rollen im code vorgegeben worden sind, gestaltet sich jetzt unsere abfrage etwas komplexer --> hier könnten Enums helfen

const checkUser = (userToCheck): TUser => {
    console.log(userToCheck.role);
    // problem mit den verschiedenen schreibweisen von der rolle member ist hiermit nur temporär gelöst
    if(
        userToCheck.role === "Member" ||
        userToCheck.role === "member" ||
        userToCheck.role === "memBer"
    ){
        console.log("User hat Zugriff");
    } else {
        console.log("User hat keinen Zugriff");
    }
    }
checkUser(User123);
checkUser(user5678)
checkUser(user9012)
// ? Abfrage mit ENUMS macht hier mehr SINN, weil die erste lösung nur temporär ist
const checkUser = (userToCheck: TUser) => {
    console.log(userToCheck);
    if (userToCheck.role ==== Role.Member){
        console.log("user hat zugriff");
    } else {
        console.log("der user keinen zugriff");        
    }
}
// ? mit enums können wir unseren code noch ein stück besser strukturieren und standardisieren, dies gibt automatisch eine bessere lesbar- wartbarkeit
// TODO: anwendungsfälle für emuns --> OrderStatus, Wochentage, Sprachverwaltung, ThemenVerwaltung
