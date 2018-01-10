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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-bedroom" id="default-light-bedroom"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-chris-nightstand" id="default-light-chris-nightstand"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-nicole-nightstand" id="default-light-nicole-nightstand"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-hue-color-light-1" id="default-light-hue-color-light-1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-hue-color-light-2" id="default-light-hue-color-light-2"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 5, 1)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-light-bedroom"] = new baselight("default-light-bedroom", "", "obsidian", {'widget_type': 'baselight', 'entity': 'light.bedroom', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.bedroom'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.bedroom'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'level_style': 'color: #888;', 'unit_style': 'color: #888;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'title_is_friendly_name': 1})
    
        widgets["default-light-chris-nightstand"] = new baselight("default-light-chris-nightstand", "", "obsidian", {'widget_type': 'baselight', 'entity': 'light.chris_nightstand', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.chris_nightstand'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.chris_nightstand'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'level_style': 'color: #888;', 'unit_style': 'color: #888;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'title_is_friendly_name': 1})
    
        widgets["default-light-nicole-nightstand"] = new baselight("default-light-nicole-nightstand", "", "obsidian", {'widget_type': 'baselight', 'entity': 'light.nicole_nightstand', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.nicole_nightstand'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.nicole_nightstand'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'level_style': 'color: #888;', 'unit_style': 'color: #888;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'title_is_friendly_name': 1})
    
        widgets["default-light-hue-color-light-1"] = new baselight("default-light-hue-color-light-1", "", "obsidian", {'widget_type': 'baselight', 'entity': 'light.hue_color_light_1', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.hue_color_light_1'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.hue_color_light_1'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'level_style': 'color: #888;', 'unit_style': 'color: #888;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'title_is_friendly_name': 1})
    
        widgets["default-light-hue-color-light-2"] = new baselight("default-light-hue-color-light-2", "", "obsidian", {'widget_type': 'baselight', 'entity': 'light.hue_color_light_2', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.hue_color_light_2'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.hue_color_light_2'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'level_style': 'color: #888;', 'unit_style': 'color: #888;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'title_is_friendly_name': 1})
    

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