// --------------------------------------------------------
//
// This file is to configure the configurable settings.
// Load this file before script.js file at gmap.html.
//
// --------------------------------------------------------

// -- Title Settings --------------------------------------
// Show number of aircraft and/or messages per second in the page title
PlaneCountInTitle = true;
MessageRateInTitle = false;

// -- Output Settings -------------------------------------
// Show metric values
// The Metric setting controls whether metric (m, km, km/h) or
// imperial (ft, NM, knots) units are used in the plane table
// and in the detailed plane info. If ShowOtherUnits is true,
// then the other unit will also be shown in the detailed plane
// info.
Metric = false;
ShowOtherUnits = true;

// -- Map settings ----------------------------------------
// These settings are overridden by any position information
// provided by dump1090 itself. All positions are in decimal
// degrees.

// Default center of the map.
DefaultCenterLat = 32.3992268203002;
DefaultCenterLon = -111.003026909384;
// The google maps zoom level, 0 - 16, lower is further out
DefaultZoomLvl   = 7;

// Center marker. If dump1090 provides a receiver location,
// that location is used and these settings are ignored.

SiteShow    = true;           // true to show a center marker
SiteLat     = 32.3992268203002;            // position of the marker
SiteLon     = -111.003026909384;
SiteName    = "mjm Radar Site"; // tooltip of the marker

// User Map (KML File)
// Enables KML overlay on map, UserMap must have a value below when "true"
UserMapShow = true;            //true to show KML
// KML to show, for example your rangeview.kml: 
//UserMap     = "https://dl.dropboxusercontent.com/u/17865731/dump1090-20150916/rangeview.kml";  // your KML URL (publicly available domain)
//UserMap     = "https://dl.dropboxusercontent.com/s/j85a2ydf0ntaye5/rangeview%151115-151128x.kml";
UserMap     = "https://dl.dropboxusercontent.com/s/8dohzxce1io43wr/rangeview151115-151128x.kml";
//UserMap     = "https://dl.dropboxusercontent.com/s/hh1uckjx4xziviz/rangeview.kml";
//UserMap     = "https://drive.google.com/file/d/0B8eTpnerlYKPZ0NpaHZ4dUZHUHc/view?usp=sharing";
//UserMap     = "https://www.dropbox.com/sh/38p4mjzog5hv2zq/AAC4abTxlvB1zEoKDsOUQJVwa?dl=0";
//UserMap     = "https://www.dropbox.com/l/s/EUEger9CWlOyiMGafJMOiq";
//UserMap     = "https://dl.dropboxusercontent.com/u/17865731/dump1090-20150916/rangeview-example1.kml";
//UserMap     = "https://drive.google.com/host/0B8eTpnerlYKPZ0NpaHZ4dUZHUHc/rangeview.kml";
//UserMap     = "https://drive.google.com/open?id=0B8eTpnerlYKPZ0NpaHZ4dUZHUHc";
//UserMap     = "https://drive.google.com/folderview?id=0B8eTpnerlYKPNmx0LWJzR1RxdTA&usp=sharing";
console.log("I am here!!!!!");

// User heatmap (csv File)
// Enables Heatmap on map
HeatmapShow = true;            //true to show Heatmap
// heatmap to show:
UserHeatMap = "heatmapdata 151115-151128x.csv"// Must be located in /usr/share/dump1090-mutability/html
// Enables file selector to upload a local heatmap.
HeatmapFileSelector = true;    //true to show file selector in heatmap panel.

// -- Marker settings -------------------------------------

// These settings control the coloring of aircraft by altitude.
// All color values are given as Hue (0-359) / Saturation (0-100) / Lightness (0-100)
ColorByAlt = {
        // HSL for planes with unknown altitude:
        unknown : { h: 0,   s: 0,   l: 40 },

        // HSL for planes that are on the ground:
        ground  : { h: 120, s: 100, l: 30 },

        air : {
                // These define altitude-to-hue mappings
                // at particular altitudes; the hue
                // for intermediate altitudes that lie
                // between the provided altitudes is linearly
                // interpolated.
                //
                // Mappings must be provided in increasing
                // order of altitude.
                //
                // Altitudes below the first entry use the
                // hue of the first entry; altitudes above
                // the last entry use the hue of the last
                // entry.
                h: [ { alt: 2000,  val: 20 },    // orange
                     { alt: 9999,  val: 20 },
                     { alt: 10000, val: 140 },   // light green
                     { alt: 18000, val: 140 },
                     { alt: 29999, val: 140 },
                     { alt: 30000, val: 300 } ], // magenta
                s: 85,
                l: 50,
        },

        // Changes added to the color of the currently selected plane
        selected : { h: 0, s: -10, l: +20 },

        // Changes added to the color of planes that have stale position info
        stale :    { h: 0, s: -10, l: +30 }
};

// For a monochrome display try this:
// ColorByAlt = {
//         unknown :  { h: 0, s: 0, l: 40 },
//         ground  :  { h: 0, s: 0, l: 30 },
//         air :      { h: [ { alt: 0, val: 0 } ], s: 0, l: 50 },
//         selected : { h: 0, s: 0, l: +30 },
//         stale :    { h: 0, s: 0, l: +30 }
// };

// -- Display aircraft in color depending on their altitude
ShowAltitudesByColor = true; // true or false
// -- Display aircraft color legend
ShowAircraftColorLegend = true; // true or false
// Number of altitude zones displayed
NumberOfAltitudeZones = 20;
// Maximum altitude in meters.
MaxAltitudeMeters = 12000;
// Maximum altitude in feet.
MaxAltitudeFeet = 40000;

ShowSiteCircles = true; // true to show circles (only shown if the center marker is shown)
ShowSiteCirclesLegend = true ; // true to show circle distance legend
// Circle radius in nautical miles or km (depending settings value 'Metric')
SiteCircle = [
        { distance:  50, strokeweight: 3, color: "black" },
        { distance: 100, strokeweight: 3, color: "OrangeRed" },
        { distance: 150, strokeweight: 3, color: "red" },
        { distance: 200, strokeweight: 3, color: "purple" },
        { distance: 250, strokeweight: 3, color: "green" },
        { distance: 300, strokeweight: 3, color: "DeepSkyBlue" },
        { distance: 350, strokeweight: 3, color: "navy" }
];

// Show the clocks at the top of the righthand pane? You can disable the clocks if you want here
ShowClocks = true;

// Controls page title, righthand pane when nothing is selected
PageName = "DUMP1090";

// Show country flags by ICAO addresses?
ShowFlags = true;

// Path to country flags (can be a relative or absolute URL; include a trailing /)
FlagPath = "flags-tiny/";
