/* Initialisation de la carte Leaflet centrée sur l'Europe */
var mymap = L.map('mapid', {
    center: [52.647517710774366, 10.4455819922209],
    zoom: 4
});

/* Ajout de l'échelle sur la carte */
L.control.scale().addTo(mymap);

/* Définition des fonds de carte disponibles */
var baselayers = {
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
    "Esri World Imagery": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }),
    "Carte DB Postiron" : L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd'}),
}

/* Définition du fond de carte par défaut */
baselayers["Carte DB Postiron"].addTo(mymap);
L.control.layers(baselayers).addTo(mymap);

/* Création des couches pour chaque année académique avec les données des étudiants */
var annee1415 = L.geoJson(annee_1415,{
    style: {
            color:"#43d0fa",
            weight: 2,
            opacity: 1,
            fillColor: "#43d0fa",
            fillOpacity: 0.5
        },
        /* Ajout de popups interactifs pour afficher les données par pays */
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                let popupContent = `<b> Nb des étudiants partis vers:</b><br>
                                    <b>Angleterre : </b> ${feature.properties.Angleterre_14_15}<br>
                                    <b>Pays de Galles : </b> ${feature.properties.Pays_de_Galle_14_15}<br>
                                    <b>Ecosse : </b> ${feature.properties.Ecosse_14_15}<br>
                                    <b>Ireland du Nord : </b> ${feature.properties.UE_IdN_14_15}<br>`;
                layer.bindPopup(popupContent);
            }
        }
    });

var annee1516 = L.geoJson(annee_1516,{
    style: {
            color:"#51d5fc",
            weight: 2,
            opacity: 1,
            fillColor: "#51d5fc",
            fillOpacity: 0.5
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                let popupContent = `<b> Nb des étudiants partis vers:</b><br>
                                    <b>Angleterre : </b> ${feature.properties.Angleterre_15_16}<br>
                                    <b>Pays de Galles : </b> ${feature.properties.Pays_de_Galle_15_16}<br>
                                    <b>Ecosse : </b> ${feature.properties.Ecosse_15_16}<br>
                                    <b>Ireland du Nord : </b> ${feature.properties.UE_IdN_15_16}<br>`;
                layer.bindPopup(popupContent);
            }
        }
    });

    var annee1617 = L.geoJson(annee_1617,{
        style: {
                color:"#43d0fa",
                weight: 2,
                opacity: 1,
                fillColor: "#43d0fa",
                fillOpacity: 0.5
            },
            onEachFeature: function (feature, layer) {
                if (feature.properties) {
                    let popupContent = `<b> Nb des étudiants partis vers:</b><br>
                                        <b>Angleterre : </b> ${feature.properties.Angleterre_16_17}<br>
                                        <b>Pays de Galles : </b> ${feature.properties.Pays_de_Galle_16_17}<br>
                                        <b>Ecosse : </b> ${feature.properties.Ecosse_16_17}<br>
                                        <b>Ireland du Nord : </b> ${feature.properties.UE_IdN_16_17}<br>`;
                    layer.bindPopup(popupContent);
                }
            }
        });

        var annee1718 = L.geoJson(annee_1718,{
            style: {
                    color:"#51d5fc",
                    weight: 2,
                    opacity: 1,
                    fillColor: "#51d5fc",
                    fillOpacity: 0.5
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties) {
                        let popupContent = `<b> Nb des étudiants partis vers:</b><br>
                                            <b>Angleterre : </b> ${feature.properties.Angleterre_17_18}<br>
                                            <b>Pays de Galles : </b> ${feature.properties.Pays_de_Galle_17_18}<br>
                                            <b>Ecosse : </b> ${feature.properties.Ecosse_17_18}<br>
                                            <b>Ireland du Nord : </b> ${feature.properties.UE_IdN_17_18}<br>`;
                        layer.bindPopup(popupContent);
                    }
                }
            });

            var annee1819 = L.geoJson(annee_1819,{
                style: {
                        color:"#43d0fa",
                        weight: 2,
                        opacity: 1,
                        fillColor: "#43d0fa",
                        fillOpacity: 0.5
                    },
                    onEachFeature: function (feature, layer) {
                        if (feature.properties) {
                            let popupContent = `<b> Nb des étudiants partis vers:</b><br>
                                                <b>Angleterre : </b> ${feature.properties.Angleterre_18_19}<br>
                                                <b>Pays de Galles : </b> ${feature.properties.Pays_de_Galle_18_19}<br>
                                                <b>Ecosse : </b> ${feature.properties.Ecosse_18_19}<br>
                                                <b>Ireland du Nord : </b> ${feature.properties.UE_IdN_18_19}<br>`;
                            layer.bindPopup(popupContent);
                        }
                    }
                });

                var annee1920 = L.geoJson(annee_1920,{
                    style: {
                            color:"#51d5fc",
                            weight: 2,
                            opacity: 1,
                            fillColor: "#51d5fc",
                            fillOpacity: 0.5
                        },
                        onEachFeature: function (feature, layer) {
                            if (feature.properties) {
                                let popupContent = `<b> Nb des étudiants partis vers:</b><br>
                                                    <b>Angleterre : </b> ${feature.properties.Angleterre_19_20}<br>
                                                    <b>Pays de Galles : </b> ${feature.properties.Pays_de_Galle_19_20}<br>
                                                    <b>Ecosse : </b> ${feature.properties.Ecosse_19_20}<br>
                                                    <b>Ireland du Nord : </b> ${feature.properties.UE_IdN_19_20}<br>`;
                                layer.bindPopup(popupContent);
                            }
                        }
                    });

                    var annee2021 = L.geoJson(annee_2021,{
                        style: {
                                color:"#43d0fa",
                                weight: 2,
                                opacity: 1,
                                fillColor: "#43d0fa",
                                fillOpacity: 0.5
                            },
                            onEachFeature: function (feature, layer) {
                                if (feature.properties) {
                                    let popupContent = `<b> Nb des étudiants partis vers:</b><br>
                                                        <b>Angleterre : </b> ${feature.properties.Angleterre_20_21}<br>
                                                        <b>Pays de Galles : </b> ${feature.properties.Pays_de_Galle_20_21}<br>
                                                        <b>Ecosse : </b> ${feature.properties.Ecosse_20_21}<br>
                                                        <b>Ireland du Nord : </b> ${feature.properties.UE_IdN_20_21}<br>`;
                                    layer.bindPopup(popupContent);
                                }
                            }
                        });

                        var annee2122 = L.geoJson(annee_2122,{
                            style: {
                                    color:"#51d5fc",
                                    weight: 2,
                                    opacity: 1,
                                    fillColor: "#51d5fc",
                                    fillOpacity: 0.5
                                },
                                onEachFeature: function (feature, layer) {
                                    if (feature.properties) {
                                        let popupContent = `<b> Nb des étudiants partis vers:</b><br>
                                                            <b>Angleterre : </b> ${feature.properties.Angleterre_21_22}<br>
                                                            <b>Pays de Galles : </b> ${feature.properties.Pays_de_Galle_21_22}<br>
                                                            <b>Ecosse : </b> ${feature.properties.Ecosse_21_22}<br>
                                                            <b>Ireland du Nord : </b> ${feature.properties.UE_IdN_21_22}<br>`;
                                        layer.bindPopup(popupContent);
                                    }
                                }
                            });

                            var annee2223 = L.geoJson(annee_2223,{
                                style: {
                                        color:"#43d0fa",
                                        weight: 2,
                                        opacity: 1,
                                        fillColor: "#43d0fa",
                                        fillOpacity: 0.5
                                    },
                                    onEachFeature: function (feature, layer) {
                                        if (feature.properties) {
                                            let popupContent = `<b> Nb des étudiants partis vers:</b><br>
                                                                <b>Angleterre : </b> ${feature.properties.Angleterre_22_23}<br>
                                                                <b>Pays de Galles : </b> ${feature.properties.Pays_de_Galle_22_23}<br>
                                                                <b>Ecosse : </b> ${feature.properties.Ecosse_22_23}<br>
                                                                <b>Ireland du Nord : </b> ${feature.properties.UE_IdN_22_23}<br>`;
                                            layer.bindPopup(popupContent);
                                        }
                                    }
                                });

/* Dictionnaire associant chaque année à sa couche de données */
var yearLayers = {
    2014: annee1415,
    2015: annee1516,
    2016: annee1617,
    2017: annee1718,
    2018: annee1819,
    2019: annee1920,
    2020: annee2021,
    2021: annee2122,
    2022: annee2223
};

/* Création du contrôle de curseur pour naviguer entre les années */
var sliderControl = L.control({ position: 'bottomright' });

sliderControl.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'slider-control');
    div.innerHTML = `
        <label for="year-slider">Année :</label>
        <input type="range" id="year-slider" min="2014" max="2022" step="1" value="2014">
        <span id="selected-year">2014</span>
    `;
    L.DomEvent.disableClickPropagation(div); // Empêche les interactions avec la carte lors de l'utilisation du curseur
    return div;
};

sliderControl.addTo(mymap);

/* Fonctionnement du curseur pour changer les années */
var slider = document.getElementById('year-slider');
var selectedYearLabel = document.getElementById('selected-year');

Object.values(yearLayers).forEach(layer => mymap.removeLayer(layer));

slider.addEventListener('input', function () {
    var selectedYear = slider.value;
    selectedYearLabel.textContent = selectedYear;

    // Effacer toutes les couches avant d'afficher la nouvelle
    Object.values(yearLayers).forEach(layer => mymap.removeLayer(layer));

    // Afficher la couche correspondant à l'année sélectionnée
    if (yearLayers[selectedYear]) {
        yearLayers[selectedYear].addTo(mymap);
    }
});

/* Affichage de l'année initiale (2014) par défaut */
yearLayers[2014].addTo(mymap);