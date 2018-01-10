$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Bedroom");
    content_width = (120 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-weather" id="default-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}">	<p class="primary-climacon" data-bind="html: dark_sky_icon"></p>	<p class="primary-info" data-bind="text: dark_sky_temperature"></p>	<p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><br><div data-bind="attr: {style: sub_style}">	<p class="secondary-info">Humidity:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_humidity"></p>	<p class="secondary-info">%</p>	<br>	<p class="secondary-info">Apparent Temp:&nbsp;</p>	<p class="secondary-info" data-bind="html: dark_sky_apparent_temperature"></p>	<p class="secondary-info" data-bind="html: unit"></p>	<br>	<p class="secondary-info">Rain:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_probability"></p>	<p class="secondary-info">&nbsp;%</p>	<p class="secondary-info">&nbsp;/&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_intensity"></p>	<p class="secondary-info">in</p>	<br>	<p class="secondary-info">Wind:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_wind_speed"></p>	<p class="secondary-info">&nbsp;Mph</p>	<p class="secondary-info">&nbsp;/&nbsp;</p>	<p class="secondary-info" data-bind="html: dark_sky_wind_bearing"></p>	<p class="secondary-info">&nbsp;&deg;</p>	<br>	<p class="secondary-info">Pressure:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_pressure"></p>	<p class="secondary-info">&nbsp;Mbar</p></div></div></li>', 2, 2, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-chris-nightstand" id="default-light-chris-nightstand"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-nicole-nightstand" id="default-light-nicole-nightstand"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-hue-color-light-1" id="default-light-hue-color-light-1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-hue-color-light-2" id="default-light-hue-color-light-2"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 6, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-flux" id="default-switch-flux"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-bedroom" id="default-light-bedroom"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 8, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-bedroom-temperature" id="default-bedroom-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-bedroom-humidity" id="default-bedroom-humidity"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 2)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-weather"] = new baseweather("default-weather", "", "default", {'widget_type': 'baseweather', 'fields': {'title': '', 'unit': '', 'dark_sky_temperature': '', 'dark_sky_humidity': '', 'dark_sky_precip_probability': '', 'dark_sky_precip_intensity': '', 'dark_sky_wind_speed': '', 'dark_sky_pressure': '', 'dark_sky_wind_bearing': '', 'dark_sky_apparent_temperature': '', 'dark_sky_icon': ''}, 'css': {}, 'static_css': {'title_style': 'color: #00aaff;', 'unit_style': 'color: #ffaa00;', 'main_style': 'color: #ffaa00;', 'sub_style': 'color: #00aaff;', 'widget_style': 'background-color: #444;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'units': '&deg;F'})
    
        widgets["default-light-chris-nightstand"] = new baselight("default-light-chris-nightstand", "", "default", {'widget_type': 'baselight', 'entity': 'light.chris_nightstand', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.chris_nightstand'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.chris_nightstand'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'title_is_friendly_name': 1})
    
        widgets["default-light-nicole-nightstand"] = new baselight("default-light-nicole-nightstand", "", "default", {'widget_type': 'baselight', 'entity': 'light.nicole_nightstand', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.nicole_nightstand'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.nicole_nightstand'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'title_is_friendly_name': 1})
    
        widgets["default-light-hue-color-light-1"] = new baselight("default-light-hue-color-light-1", "", "default", {'widget_type': 'baselight', 'entity': 'light.hue_color_light_1', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.hue_color_light_1'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.hue_color_light_1'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'title_is_friendly_name': 1})
    
        widgets["default-light-hue-color-light-2"] = new baselight("default-light-hue-color-light-2", "", "default", {'widget_type': 'baselight', 'entity': 'light.hue_color_light_2', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.hue_color_light_2'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.hue_color_light_2'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'title_is_friendly_name': 1})
    
        widgets["default-switch-flux"] = new baseswitch("default-switch-flux", "", "default", {'widget_type': 'baseswitch', 'entity': 'switch.flux', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.flux'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.flux'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'title_is_friendly_name': 1})
    
        widgets["default-light-bedroom"] = new baselight("default-light-bedroom", "", "default", {'widget_type': 'baselight', 'entity': 'light.bedroom', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.bedroom'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.bedroom'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'title_is_friendly_name': 1})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'widget_type': 'baseclock', 'fields': {'date': '', 'time': ''}, 'static_css': {'date_style': 'color: #fff;', 'time_style': 'color: #aa00ff;', 'widget_style': 'background-color: #444;'}, 'static_icons': [], 'icons': [], 'css': {}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1})
    
        widgets["default-bedroom-temperature"] = new basedisplay("default-bedroom-temperature", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.bedroom_temperature', 'sub_entity': '', 'fields': {'title': 'Bedroom Temperature', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 0, 'use_hass_icon': 1, 'units': '&deg;F'})
    
        widgets["default-bedroom-humidity"] = new basedisplay("default-bedroom-humidity", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.bedroom_humidity', 'sub_entity': '', 'fields': {'title': 'Bedroom Humidity', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 0, 'use_hass_icon': 1, 'units': '%'})
    

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
    ha_status(stream_url, "Bedroom", widgets);

});