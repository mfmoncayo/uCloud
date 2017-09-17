/*
 * Leaflet zoom control with a home button for resetting the view.
 *
 * Distributed under the CC-BY-SA-3.0 license. See the file "LICENSE"
 * for details.
 *
 * Based on code by toms (https://gis.stackexchange.com/a/127383/48264).
 */
(function () {
    "use strict";

    L.Control.ZoomHome = L.Control.Zoom.extend({
        options: {
            position: 'bottomright',
            zoomInIcon: 'plus',
            zoomInTitle: 'Zoom in',
            zoomOutIcon: 'minus',
            zoomOutTitle: 'Zoom out',
            zoomHomeIcon: 'home',
            zoomHomeTitle: 'Home',
            homeCoordinates: null,
            homeZoom: null
        },

        onAdd: function (map) {
            var controlName = 'leaflet-control-zoomhome',
                container = L.DomUtil.create('div', controlName + ' leaflet-bar'),
                options = this.options;

            if (options.homeCoordinates === null) {
                options.homeCoordinates = map.getCenter();
            }
            if (options.homeZoom === null) {
                options.homeZoom = map.getZoom();
            }

            var zoomInText = '<i class="fa fa-' + options.zoomInIcon + '" style="line-height:1.65;"></i>';
            this._zoomInButton = this._createButton(zoomInText, options.zoomInTitle,
                controlName + '-in', container, this._zoomIn.bind(this));

            var zoomHomeText = '<i class="fa fa-' + options.zoomHomeIcon + '" style="line-height:1.65;"></i>';
            this._zoomHomeButton = this._createButton(zoomHomeText, options.zoomHomeTitle,
                controlName + '-home', container, this._zoomHome.bind(this));

            var zoomOutText = '<i class="fa fa-' + options.zoomOutIcon + '" style="line-height:1.65;"></i>';
            this._zoomOutButton = this._createButton(zoomOutText, options.zoomOutTitle,
                controlName + '-out', container, this._zoomOut.bind(this));

            this._updateDisabled();
            map.on('zoomend zoomlevelschange', this._updateDisabled, this);

            return container;
        },

        _zoomHome: function (e) {
            //jshint unused:false
            this._map.setView(this.options.homeCoordinates, this.options.homeZoom);
        }
    });

    L.Control.zoomHome = function (options) {
        return new L.Control.ZoomHome(options);
    };

    L.Control.ZoomHome2 = L.Control.Zoom.extend({
        options: {
            position: 'bottomleft',
            zoomInText: 'cloud',
            zoomInTitle: 'New Cloud',
            zoomCloudIcon: 'cloud',
            zoomCloudTitle: 'New Cloud',
            zoomCloseIcon: 'times',
            zoomCloseTitle: 'Close Cloud',
            zoomHomeIcon: 'star',
            zoomHomeTitle: 'Save Cloud',
            homeCoordinates: null,
            homeZoom: null
        },

        onAdd: function (map) {
            var controlName = 'leaflet-control-zoomhome',
                container = L.DomUtil.create('div', controlName + ' leaflet-bar'),
                options = this.options;

            if (options.homeCoordinates === null) {
                options.homeCoordinates = map.getCenter();
            }
            if (options.homeZoom === null) {
                options.homeZoom = map.getZoom();
            }

            var zoomCloudText = '<i class="fa fa-' + options.zoomCloudIcon + '" style="line-height:1.65;"></i>';
            this._zoomInButton = this._createButton(zoomCloudText, options.zoomInTitle,
                controlName + '-in', container, this._zoomIn.bind(this));
            var zoomHomeText = '<i class="fa fa-' + options.zoomHomeIcon + '" style="line-height:1.65;"></i>';
            this._zoomHomeButton = this._createButton(zoomHomeText, options.zoomHomeTitle,
                controlName + '-home', container, this._zoomHome2.bind(this));
            var zoomCloseText = '<i class="fa fa-' + options.zoomCloseIcon + '" style="line-height:1.65;"></i>';
            this._zoomOutButton = this._createButton(zoomCloseText, options.zoomCloseTitle,
                controlName + '-in', container, this._zoomOut.bind(this));

            this._updateDisabled();
            map.on('zoomend zoomlevelschange', this._updateDisabled, this);

            return container;
        },

        _zoomHome2: function (e) {
            //jshint unused:false
            this._map.setView(this.options.homeCoordinates, this.options.homeZoom);
        }
    });

    L.Control.zoomHome2 = function (options) {
        return new L.Control.ZoomHome2(options);
    };
}());
