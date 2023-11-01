var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_uscities_mainland_1 = new ol.format.GeoJSON();
var features_uscities_mainland_1 = format_uscities_mainland_1.readFeatures(json_uscities_mainland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uscities_mainland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uscities_mainland_1.addFeatures(features_uscities_mainland_1);
var lyr_uscities_mainland_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uscities_mainland_1, 
                style: style_uscities_mainland_1,
                interactive: true,
                title: '<img src="styles/legend/uscities_mainland_1.png" /> uscities_mainland'
            });

lyr_OSMStandard_0.setVisible(true);lyr_uscities_mainland_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_uscities_mainland_1];
lyr_uscities_mainland_1.set('fieldAliases', {'city': 'city', 'state_id': 'state_id', 'state_name': 'state_name', 'lat': 'lat', 'lng': 'lng', 'population': 'population', 'density': 'Pop.Density', 'timezone': 'timezone', 'sunrise_lo': 'sunrise_lo', 'sunset_lon': 'sunset_lon', 'sunrise_sh': 'Sunrise', 'sunset_sho': 'Sunset', 'day_length': 'day_length', 'night_leng': 'night_leng', 'daylight': 'Daylight (hours)', 'max_pop': 'Maximum Population', 'max_sunset': 'Latest Sunset Time', });
lyr_uscities_mainland_1.set('fieldImages', {'city': 'Hidden', 'state_id': 'TextEdit', 'state_name': 'Hidden', 'lat': 'TextEdit', 'lng': 'TextEdit', 'population': 'TextEdit', 'density': 'TextEdit', 'timezone': 'TextEdit', 'sunrise_lo': 'Hidden', 'sunset_lon': 'Hidden', 'sunrise_sh': 'TextEdit', 'sunset_sho': 'TextEdit', 'day_length': 'Hidden', 'night_leng': 'Hidden', 'daylight': 'TextEdit', 'max_pop': 'TextEdit', 'max_sunset': 'TextEdit', });
lyr_uscities_mainland_1.set('fieldLabels', {'state_id': 'no label', 'lat': 'no label', 'lng': 'no label', 'population': 'no label', 'density': 'no label', 'timezone': 'no label', 'sunrise_sh': 'no label', 'sunset_sho': 'no label', 'daylight': 'no label', 'max_pop': 'no label', 'max_sunset': 'no label', });
lyr_uscities_mainland_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});