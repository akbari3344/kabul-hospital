ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([7697095.806402, 4094014.806780, 7705314.329442, 4098490.372001]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_hospital_1 = new ol.format.GeoJSON();
var features_hospital_1 = format_hospital_1.readFeatures(json_hospital_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospital_1.addFeatures(features_hospital_1);
cluster_hospital_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_hospital_1
});
var lyr_hospital_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_hospital_1, 
                style: style_hospital_1,
                popuplayertitle: 'hospital',
                interactive: true,
                title: '<img src="styles/legend/hospital_1.png" /> hospital'
            });

lyr_OSMStandard_0.setVisible(true);lyr_hospital_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_hospital_1];
lyr_hospital_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Facility_I': 'Facility_I', 'ViliCode': 'ViliCode', 'Facility_N': 'Facility_N', 'Facility_1': 'Facility_1', 'Facility_2': 'Facility_2', 'Location': 'Location', 'Location_D': 'Location_D', 'Location_P': 'Location_P', 'FacilityTy': 'FacilityTy', 'LAT': 'LAT', 'LON': 'LON', 'ActiveStat': 'ActiveStat', 'Date_Estab': 'Date_Estab', 'SubImpleme': 'SubImpleme', 'LocationSo': 'LocationSo', 'MOPH': 'MOPH', 'HPROReply': 'HPROReply', 'Facility_T': 'Facility_T', 'DIST_CODE': 'DIST_CODE', 'DIST_NA_EN': 'DIST_NA_EN', 'PROV_NA_EN': 'PROV_NA_EN', 'PROV_CODE': 'PROV_CODE', 'HPRO_Facil': 'HPRO_Facil', });
lyr_hospital_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Facility_I': 'TextEdit', 'ViliCode': 'TextEdit', 'Facility_N': 'TextEdit', 'Facility_1': 'TextEdit', 'Facility_2': 'TextEdit', 'Location': 'TextEdit', 'Location_D': 'TextEdit', 'Location_P': 'TextEdit', 'FacilityTy': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'ActiveStat': 'TextEdit', 'Date_Estab': 'DateTime', 'SubImpleme': 'TextEdit', 'LocationSo': 'TextEdit', 'MOPH': 'TextEdit', 'HPROReply': 'TextEdit', 'Facility_T': 'TextEdit', 'DIST_CODE': 'Range', 'DIST_NA_EN': 'TextEdit', 'PROV_NA_EN': 'TextEdit', 'PROV_CODE': 'Range', 'HPRO_Facil': 'TextEdit', });
lyr_hospital_1.set('fieldLabels', {'OBJECTID': 'no label', 'Facility_I': 'no label', 'ViliCode': 'inline label - visible with data', 'Facility_N': 'inline label - always visible', 'Facility_1': 'inline label - always visible', 'Facility_2': 'no label', 'Location': 'no label', 'Location_D': 'no label', 'Location_P': 'no label', 'FacilityTy': 'no label', 'LAT': 'inline label - always visible', 'LON': 'inline label - always visible', 'ActiveStat': 'no label', 'Date_Estab': 'no label', 'SubImpleme': 'no label', 'LocationSo': 'no label', 'MOPH': 'no label', 'HPROReply': 'no label', 'Facility_T': 'inline label - always visible', 'DIST_CODE': 'inline label - always visible', 'DIST_NA_EN': 'inline label - always visible', 'PROV_NA_EN': 'inline label - always visible', 'PROV_CODE': 'no label', 'HPRO_Facil': 'no label', });
lyr_hospital_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});