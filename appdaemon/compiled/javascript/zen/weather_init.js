$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Weather");
    content_width = (122 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [122, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-weather-frame" id="default-weather-frame"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 4, 5, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-minutely-summary" id="default-sensor-dark-sky-minutely-summary"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-hourly-summary" id="default-sensor-dark-sky-hourly-summary"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 7, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-daily-summary" id="default-sensor-dark-sky-daily-summary"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-pressure" id="default-sensor-dark-sky-pressure"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 7, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-temperature" id="default-sensor-dark-sky-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-apparent-temperature" id="default-sensor-dark-sky-apparent-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-nearest-storm-distance" id="default-sensor-dark-sky-nearest-storm-distance"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-nearest-storm-bearing" id="default-sensor-dark-sky-nearest-storm-bearing"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-wind-speed" id="default-sensor-dark-sky-wind-speed"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 5, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-wind-bearing" id="default-sensor-dark-sky-wind-bearing"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-humidity" id="default-sensor-dark-sky-humidity"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-visibility" id="default-sensor-dark-sky-visibility"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-precip-probability" id="default-sensor-dark-sky-precip-probability"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-precip-intensity" id="default-sensor-dark-sky-precip-intensity"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 1, 7, 5)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-weather-frame"] = new baseiframe("default-weather-frame", "", "zen", {'widget_type': 'baseiframe', 'fields': {'title': 'Radar', 'frame_src': '', 'img_src': '', 'frame_style': ''}, 'icons': [], 'static_css': {'title_style': 'color: #000;font-weight: bold;background-color: rgba(255, 255, 255, 0.5);', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {}, 'static_icons': [], 'refresh': 300, 'img_list': ['https://icons.wxug.com/data/weather-maps/radar/united-states/hartford-connecticut-region-current-radar-animation.gif']})
    
        widgets["default-sensor-dark-sky-minutely-summary"] = new basedisplay("default-sensor-dark-sky-minutely-summary", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_minutely_summary', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-hourly-summary"] = new basedisplay("default-sensor-dark-sky-hourly-summary", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_hourly_summary', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-daily-summary"] = new basedisplay("default-sensor-dark-sky-daily-summary", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_daily_summary', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-pressure"] = new basedisplay("default-sensor-dark-sky-pressure", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_pressure', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-temperature"] = new basedisplay("default-sensor-dark-sky-temperature", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_temperature', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-apparent-temperature"] = new basedisplay("default-sensor-dark-sky-apparent-temperature", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_apparent_temperature', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-nearest-storm-distance"] = new basedisplay("default-sensor-dark-sky-nearest-storm-distance", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_nearest_storm_distance', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-nearest-storm-bearing"] = new basedisplay("default-sensor-dark-sky-nearest-storm-bearing", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_nearest_storm_bearing', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-wind-speed"] = new basedisplay("default-sensor-dark-sky-wind-speed", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_wind_speed', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-wind-bearing"] = new basedisplay("default-sensor-dark-sky-wind-bearing", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_wind_bearing', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-humidity"] = new basedisplay("default-sensor-dark-sky-humidity", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_humidity', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-visibility"] = new basedisplay("default-sensor-dark-sky-visibility", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_visibility', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-precip-probability"] = new basedisplay("default-sensor-dark-sky-precip-probability", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_precip_probability', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-precip-intensity"] = new basedisplay("default-sensor-dark-sky-precip-intensity", "", "zen", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_precip_intensity', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #000;font-weight: bold;', 'title2_style': 'color: #000;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #ff0055;font-size: 100%;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);'}, 'css': {'value_style': 'color: #ff0055;', 'text_style': 'color: #ff0055;font-size: 100%;', 'unit_style': 'color: #ff0055;font-size: 90%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
    });

    // Set up timeout

    var myTimeout

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Weather", widgets);

});