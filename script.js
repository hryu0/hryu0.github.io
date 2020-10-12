/*$.getJSON('http://apis.data.kr/B552584/RfidFoodWasteService/getCityAptDateList?ServiceKey=Wn9%2FJ2m7Gc5cXVDBnWcUwliRkEHjvZJz%2B6imbK4t8na13fYat0skOBUCTZ%2F9IvZnH8r3UjlZ%2BOObPV1Hgdf3Ow%3D%3D&type=json&page=1&rowNum=1&disYear=2020&disMonth=07&cityCode=W34&aptCode=W34129', 
    function(dt) {
        //console.log(dt);
        var qnt_kg = dt.data.list[0].disQuantity/1000;

        $(".inKG").append(qnt_kg);

        document.getElementById("co2").innerHTML = qnt_kg*1.7; 
        document.getElementById("tree").innerHTML = qnt_kg/4.87; 
        document.getElementById("energy").innerHTML = qnt_kg*1.67; 
        document.getElementById("washingMachine").innerHTML = qnt_kg*12; 
        //1인분: 719g; 1.7kgCO2e/kg = 8.7km car = 4.87/그루/연,; 1.67kwh/kg 세탁기 12회/kg
        
    }
);

// 아파트 랭킹
var rank_js = '{"아파트":"대구서구청","지역":"대구광역시 서구","배출량(kg)":"     7.1"},{"아파트":"평리 동서1차","지역":"대구광역시 서구","배출량(kg)":" 1,119.8"},{"아파트":"내당코오롱맨션","지역":"대구광역시 서구","배출량(kg)":" 1,305.2"},{"아파트":"중리시영2차","지역":"대구광역시 서구","배출량(kg)":" 1,692.7"},{"아파트":"광장타운2차아파트","지역":"대구광역시 서구","배출량(kg)":" 2,302.9"},{"아파트":"중리 진달래2차","지역":"대구광역시 서구","배출량(kg)":" 2,476.2"},{"아파트":"꽃동네아파트","지역":"대구광역시 서구","배출량(kg)":" 3,731.7"},{"아파트":"비산한신휴플러스","지역":"대구광역시 서구","배출량(kg)":" 4,278.6"},{"아파트":"내당 황제맨션","지역":"대구광역시 서구","배출량(kg)":" 6,315.6"},{"아파트":"평리청구타운","지역":"대구광역시 서구","배출량(kg)":" 6,338.1"}';
$(document).ready(function() {
    var dt_rank = JSON.parse(rank_js);
    for (let key in dt_rank) {

    }
    $('#rankTable').DataTable(dt_rank);
} );
*/

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}