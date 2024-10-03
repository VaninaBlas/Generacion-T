let miAuto = {};
miAuto.marca = "Toyota";
miAuto.anio = 2024;
miAuto.nuevo = true;
let propertyKey = "modelo";
miAuto[propertyKey] = "Fix 23";
let anotherPropertyKey = "precio";
miAuto[anotherPropertyKey] = 45000;
let nextProperty = "color";
miAuto[nextProperty] = "negro";
for (let dato in miAuto) {
  console.log(`${dato}: ${miAuto[dato]}`);
}
// miAuto[propertyKey] nos devuelve Fix 23
// miAuto["modelo"] nos devuelve Fix 23
// miAuto[nextProperty] nos devuelve negro
// miAuto["color"] nos devuelve negro
