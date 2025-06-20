var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2025_Parcels_Winslow_Twp_1 = new ol.format.GeoJSON();
var features_2025_Parcels_Winslow_Twp_1 = format_2025_Parcels_Winslow_Twp_1.readFeatures(json_2025_Parcels_Winslow_Twp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2025_Parcels_Winslow_Twp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025_Parcels_Winslow_Twp_1.addFeatures(features_2025_Parcels_Winslow_Twp_1);
var lyr_2025_Parcels_Winslow_Twp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025_Parcels_Winslow_Twp_1, 
                style: style_2025_Parcels_Winslow_Twp_1,
                popuplayertitle: '2025_Parcels_Winslow_Twp',
                interactive: true,
                title: '<img src="styles/legend/2025_Parcels_Winslow_Twp_1.png" /> 2025_Parcels_Winslow_Twp'
            });
var format_survey_boundaries_2 = new ol.format.GeoJSON();
var features_survey_boundaries_2 = format_survey_boundaries_2.readFeatures(json_survey_boundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_survey_boundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_survey_boundaries_2.addFeatures(features_survey_boundaries_2);
var lyr_survey_boundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_survey_boundaries_2, 
                style: style_survey_boundaries_2,
                popuplayertitle: 'survey_boundaries',
                interactive: true,
                title: '<img src="styles/legend/survey_boundaries_2.png" /> survey_boundaries'
            });

lyr_OSMStandard_0.setVisible(true);lyr_2025_Parcels_Winslow_Twp_1.setVisible(true);lyr_survey_boundaries_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_2025_Parcels_Winslow_Twp_1,lyr_survey_boundaries_2];
lyr_2025_Parcels_Winslow_Twp_1.set('fieldAliases', {'PAMS_PIN': 'PAMS_PIN', 'MUN': 'MUN', 'BLOCK': 'BLOCK', 'LOT': 'LOT', 'QCODE': 'QCODE', 'LASTUPDATE': 'LASTUPDATE', 'PIN_NODUP': 'PIN_NODUP', 'DUP': 'DUP', 'PUB_DATE': 'PUB_DATE', 'PCL_GUID': 'PCL_GUID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'FID_': 'FID_', 'OBJECTID_1': 'OBJECTID_1', 'MUN_1': 'MUN_1', 'COUNTY': 'COUNTY', 'MUN_LABEL': 'MUN_LABEL', 'MUN_TYPE': 'MUN_TYPE', 'NAME': 'NAME', 'GNIS_NAME': 'GNIS_NAME', 'GNIS': 'GNIS', 'SSN': 'SSN', 'MUN_CODE': 'MUN_CODE', 'KEY': 'KEY', 'CENSUS2010': 'CENSUS2010', 'ACRES': 'ACRES', 'SQ_MILES': 'SQ_MILES', 'POP2010': 'POP2010', 'POP2000': 'POP2000', 'POP1990': 'POP1990', 'POP1980': 'POP1980', 'POPDEN2010': 'POPDEN2010', 'POPDEN2000': 'POPDEN2000', 'POPDEN1990': 'POPDEN1990', 'POPDEN1980': 'POPDEN1980', 'GLOBALID': 'GLOBALID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_survey_boundaries_2.set('fieldAliases', {'fid': 'fid', 'Survey_Name': 'Survey_Name', 'Survey_Date': 'Survey_Date', 'PDF_Link': 'PDF_Link', });
lyr_2025_Parcels_Winslow_Twp_1.set('fieldImages', {'PAMS_PIN': 'TextEdit', 'MUN': 'TextEdit', 'BLOCK': 'TextEdit', 'LOT': 'TextEdit', 'QCODE': 'TextEdit', 'LASTUPDATE': 'DateTime', 'PIN_NODUP': 'TextEdit', 'DUP': 'TextEdit', 'PUB_DATE': 'DateTime', 'PCL_GUID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'FID_': 'Range', 'OBJECTID_1': 'Range', 'MUN_1': 'TextEdit', 'COUNTY': 'TextEdit', 'MUN_LABEL': 'TextEdit', 'MUN_TYPE': 'TextEdit', 'NAME': 'TextEdit', 'GNIS_NAME': 'TextEdit', 'GNIS': 'TextEdit', 'SSN': 'TextEdit', 'MUN_CODE': 'TextEdit', 'KEY': 'TextEdit', 'CENSUS2010': 'TextEdit', 'ACRES': 'TextEdit', 'SQ_MILES': 'TextEdit', 'POP2010': 'Range', 'POP2000': 'Range', 'POP1990': 'Range', 'POP1980': 'Range', 'POPDEN2010': 'Range', 'POPDEN2000': 'Range', 'POPDEN1990': 'Range', 'POPDEN1980': 'Range', 'GLOBALID': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', });
lyr_survey_boundaries_2.set('fieldImages', {'fid': 'TextEdit', 'Survey_Name': 'TextEdit', 'Survey_Date': 'DateTime', 'PDF_Link': 'TextEdit', });
lyr_2025_Parcels_Winslow_Twp_1.set('fieldLabels', {'PAMS_PIN': 'hidden field', 'MUN': 'inline label - always visible', 'BLOCK': 'inline label - always visible', 'LOT': 'inline label - always visible', 'QCODE': 'hidden field', 'LASTUPDATE': 'hidden field', 'PIN_NODUP': 'hidden field', 'DUP': 'hidden field', 'PUB_DATE': 'hidden field', 'PCL_GUID': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'FID_': 'hidden field', 'OBJECTID_1': 'hidden field', 'MUN_1': 'hidden field', 'COUNTY': 'hidden field', 'MUN_LABEL': 'hidden field', 'MUN_TYPE': 'hidden field', 'NAME': 'hidden field', 'GNIS_NAME': 'hidden field', 'GNIS': 'hidden field', 'SSN': 'hidden field', 'MUN_CODE': 'hidden field', 'KEY': 'hidden field', 'CENSUS2010': 'hidden field', 'ACRES': 'hidden field', 'SQ_MILES': 'hidden field', 'POP2010': 'hidden field', 'POP2000': 'hidden field', 'POP1990': 'hidden field', 'POP1980': 'hidden field', 'POPDEN2010': 'hidden field', 'POPDEN2000': 'hidden field', 'POPDEN1990': 'hidden field', 'POPDEN1980': 'hidden field', 'GLOBALID': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Ar_1': 'hidden field', });
lyr_survey_boundaries_2.set('fieldLabels', {'fid': 'hidden field', 'Survey_Name': 'inline label - always visible', 'Survey_Date': 'inline label - always visible', 'PDF_Link': 'inline label - always visible', });
lyr_survey_boundaries_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});