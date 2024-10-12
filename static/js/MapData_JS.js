var simplemaps_countrymap_mapdata={
  main_settings: {
    //General settings
		// width: "responsive", //or 'responsive'
    height:10,
    background_color: "#FFF7EC",
    background_transparent: "yes",
    border_color: "#FFF7EC",
    pop_ups: "detect",
    
		//State defaults
		state_description: "State details",
    state_color: "#A77D53",
    state_hover_color: "#644424",
    state_url: "default",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
		//Location defaults
		location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 1,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 0,
                    //Increase size to see
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    all_states_zoomable:"no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "no",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 1,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "20px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    popup_centered: "yes",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
    
  },
  state_specific: {
    "1": {
        name: "Andaman And Nicobar",
        description: "Major Crops Grown: Rice, Coconut, Arecanut, Pulses, Oilseeds and Vegetables. Major type of Soil found: Clayey, Sandy and Loamy.",
        color: "#A52A2A",
        hover_color: "default",
        url: "https://www.mdpi.com/land/land-12-01083/article_deploy/html/images/land-12-01083-g008.png"
    },
    "2": {
        name: "Andhra Pradesh",
        description: "Major Crops Grown: Rice, Cotton, Sunflower, Groundnut, Cashew Nuts, Black Gram, Sugarcane, Turmeric and Tobacco. Major type of Soil found: Black (Regur soil).",
        color: "#92745B",
        hover_color: "default",
        url: "https://apsac.ap.gov.in/?page_id=179"
    },
    "3": {
        name: "Arunachal Pradesh",
        description: "Major Crops Grown: Rice, Millet, Wheat, Pulses, Sugarcane, Potatoes, Pineapple, Oranges, Banana, Apple, Peach, Plum, Tea and Coffee. Major type of Soil found: Alluvial.",
        color: "#B2BEB5",
        hover_color: "default",
        url: "https://media.springernature.com/m685/springer-static/image/art%3A10.1007%2Fs11600-022-00943-z/MediaObjects/11600_2022_943_Fig5_HTML.png"
    },
    "4": {
        name: "Assam",
        description: "Major Crops Grown: Rice, Banana, Orange, Potato, Tomato, Lemon, Coconut, Arcanuts , Mango, Guava, Litchi, Pineapple, Papaya, Pear and Tea. Major type of Soil found: Laterite.",
        color: "#FFFF00",
        hover_color: "default",
        url: "https://lh3.googleusercontent.com/proxy/OBCLFrmOoKzJKnkmfhr2y1BWad7uy91qHx9-Lj_rHoW1r1_3GDjTivzxKXM2KkSAQRrEt-AfaTk6xnUT3r70grgAwQIUyFNzCWJ1yjTc2p8bJazW204aCZ2EIwXDXVs"
    },
    "5": {
        name: "Bihar",
        description: "Major Crops Grown: Maize, Rice, Jute, Sugarcane, Barley, Mango, Litchi, Makhana, Guava, Lady’s Finger, Snow Pea, Onions, Tomato, Potato, Brinjal, Cauliflower, Cabbage, Radish, Carrot and Beat. Major type of Soil found: Alluvial.",
        color: "#B2BEB5",
        hover_color: "default",
        url: "https://www.mapsofindia.com/maps/bihar/bihar-agriculture-map.jpg"
    },
    "6": {
        name: "Chandigarh",
        description: "Major Crops Grown: Wheat, Rice, Cotton, Sugarcane, Pearl Millet, Maize, Barley and Bajra. Major type of Soil found: Alluvial, Saline and Alkaline.",
        color: "#B2BEB5",
        hover_color: "default",
        url: "https://www.researchgate.net/publication/367128850/figure/fig3/AS:11431281113065910@1673694383131/LULC-maps-of-the-study-area-between-1990-and-2020.png"
    },
    "7": {
        name: "Chhattisgarh",
        description: "Major Crops Grown: Rice, Maize, Gram, Tuar, Groundnuts, Soybeans, Mustard, Sunflowers, Karela, Louki, Turai, Munga, Parwal, Potato and Onion. Major type of Soil found: Red.",
        color: "#FF5733",
        hover_color: "default",
        url: "https://www.researchgate.net/publication/321410833/figure/fig1/AS:566638034800640@1512108443277/Pictorial-map-of-collection-sites-of-190-rice-landraces-genotypes-from-Chhattisgarh.png"
    },
    "8": {
        name: "Dadra And Nagar Haveli",
        description: "default",
        color: "#7D7D7D",
        hover_color: "default",
        url: "default"
    },
    "9": {
        name: "Daman And Diu",
        description: "default",
        color: "#7D7D7D",
        hover_color: "default",
        url: "default"
    },
    "10": {
        name: "Delhi",
        description: "Major Crops Grown: Wheat, Jawar, Bajra, Paddy, Cauliflower, Cabbage, Carrot, Spinach, Mustard (leaves), Okra and Tomato. Major type of Soil found: Alluvial and Loamy.",
        color: "#B2BEB5",
        hover_color: "default",
        url: "https://www.researchgate.net/publication/307073794/figure/fig4/AS:629005149536263@1526977922787/Soil-map-of-Delhi-AWC-available-water-capacity.png"
    },
    "11": {
        name: "Goa",
        description: "default",
        color: "#7D7D7D",
        hover_color: "default",
        url: "https://wgbis.ces.iisc.ac.in/biodiversity/sahyadri_enews/newsletter/Issue83/assets/article/Issue83Article17.png"
    },
    "12": {
        name: "Gujarat",
        description: "Major Crops Grown: Great Millet, Bajra, Maize, Paddy, Groundnut, Cotton, Wheat, Sesame, Mustard, Cumin, Rapeseed, Mustard, Castor, Onion, Banana, Chikoo, Guava, Cauliflower and Tobacco. Major type of Soil found: Alluvial and Black( Regur Soil).",
        color: "#B2BEB5",
        hover_color: "default",
        url: "https://slusi.dacnet.nic.in/sfm/SFM_Gujarat.html"
    },
    "13": {
        name: "Haryana",
        description: "Major Crops Grown: Wheat, Rice, Maize, Bajra, Sugarcane, Groundnut, Chillies, Jowar, Pulses, Palak, Methi, Capsicum, Turnip and Coriander. Major type of Soil found: Alluvial, Saline and Alkaline.",
        color: "#33C7FF",
        hover_color: "default",
        url: "https://slusi.dacnet.nic.in/sfm/SFM_Haryana.html"
    },
    "14": {
        name: "Himachal Pradesh",
        description: "Major Crops Grown: Wheat, Maize, Soyabean, Rice, Barley, Seed-Potato, Ginger, Capsicum, Mushrooms, Chicory Seeds, Olives, Fig, Apple, Pear(Soft), Cherry, Almond, Walnut, Chestnut, Hazelnut, Strawberry and Grapes. Major type of Soil found: Alluvial and Brown Forest.",
        color: "#B2BEB5",
        hover_color: "default",
        url: "https://pub.mdpi-res.com/sustainability/sustainability-14-08561/article_deploy/html/images/sustainability-14-08561-g002.png?1657702942"
    },

    "16": {
        name: "Jharkhand",
        description: "Major Crops Grown: Rice, Maize, Sunflower, Pulses, Groundnut, Gram, Mustard, Moong, Pigeonpea, Tomato, Brinjal and Cauliflower. Major type of Soil found: Alluvial.",
        color: "#B2BEB5",
        hover_color: "default",
        url: "https://www.researchgate.net/publication/273767488/figure/fig3/AS:294834435837954@1447305415271/Soil-Map-of-Chatra-district.png"
    },
    "17": {
        name: "Karnataka",
        description: "Major Crops Grown: Rice, Sunflower, Silk, Coffee, Pepper, Maize, Jowar, Great Millet, Bajra, Green Gram, Groundnut, Sunflower, Cotton, Soybean, Chillies, Onion and Sugarcane. Major type of Soil found: Laterite.",
        color: "#FFFF00",
        hover_color: "default",
        url: "https://en.m.wikipedia.org/wiki/File:Karnataka_soil_map_NBSS.png"
    },
    "18": {
        name: "Kerala",
        description: "Major Crops Grown: Rice, Ginger, Banana, Coconut, Silk, Coffee, Tea, Pepper, Cashew Nut, Pea, Tapioca, Rubber, Cardamom and Arecanut. Major type of Soil found: Laterite.",
        color: "#FFFF00",
        hover_color: "default",
        url: "https://static.toiimg.com/thumb/imgsize-23456,msid-63252462,width-600,resizemode-4/63252462.jpg"
    },
    "19": {
        name: "Lakshadweep",
        description: "Major Crops Grown: Coconut, Thenga (Cacos nucifera). Major type of Soil found: Clayey, Sandy and Loamy.",
        color: "#FFFF00",
        hover_color: "default",
        url: "https://www.shutterstock.com/image-vector/vector-illustration-map-kavaratti-island-260nw-2235060849.jpg"
    },
    "20": {
        name: "Madhya Pradesh",
        description: "Major Crops Grown: Soybean, Rice, Maize, Bajara, Tur, Masoor, Wheat, Gram, Mustard, Cotton, Jowar, Sugarcane, Custard Apple and Banana. Major type of Soil found: Black (Regur soil) and Laterite.",
        color: "#92745B",
        hover_color: "default",
        url: "https://slusi.dacnet.nic.in/sfm/SFM_MP.html"
    },
    "21": {
        name: "Maharashtra",
        description: "Major Crops Grown: Rice, Jowar, Arhar, Barley, Bajra, Sugarcane, Sunflower, Cotton, Soyabean, Groundnut, Tobacco, Lentil, Peas, Banana, Mango, Cashew and Guava. Major type of Soil found: Black (Regur soil).",
        color: "#92745B",
        hover_color: "default",
        url: "https://soilhealth.dac.gov.in/soil-health-map/MAHARASHTRA"
    },
    "22": {
        name: "Manipur",
        description: "Major Crops Grown: Rice, Wheat, Maize, Pulses, Mango, JackFruit, Guava, Banana, Litchi, Papaya, Pears, Brinjal, Tomato, Chillies, Cabbage, Cauliflower and Capsicum. Major type of Soil found: Alluvial and Loamy.",
        color: "#A52A2A",
        hover_color: "default",
        url: "https://slusi.dacnet.nic.in/dmwai/MANIPUR/MANIPUR.html"
    },
    "23": {
        name: "Meghalaya",
        description: "Major Crops Grown: Rice, Maize, Oranges (Khasi Mandarin), Pineapple, Banana, Strawberry, Jackfruit, Plums, Peach, Pear, Turmeric, Ginger, Black Pepper and Arecanut. Major type of Soil found: Laterite.",
        color: "#FFFF00",
        hover_color: "default",
        url: "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41598-020-72070-y/MediaObjects/41598_2020_72070_Fig2_HTML.png"
    },
    "24": {
        name: "Mizoram",
        description: "Major Crops Grown: Rice, Maize, Beans, Cucumber, Arum, Sesame, Mustard, Cotton, Sugarcane, Tapioca, Soybean, Pulses, Cowpea and French beans. Major type of Soil found: Loamy.",
        color: "#A52A2A",
        hover_color: "default",
        url: "https://www.researchgate.net/publication/276026753/figure/fig1/AS:391776310448131@1470418159638/Land-cover-map-showing-different-vegetation-types-in-Mizoram-state.png"
    },
    "25": {
        name: "Nagaland",
        description: "Major Crops Grown: Rice, Pulses, Oilseeds, Potato, Sugarcane, Coffee, Tea, Cardamom, Carrot, Chillies, Onion, Melon, Spinach, Cucumber, Brinjal, Tomato, Mustard and Tobacco. Major type of Soil found: Red Loamy.",
        color: "#A52A2A",
        hover_color: "default",
        url: "https://www.researchgate.net/publication/345081440/figure/fig3/AS:952708882247680@1604154906669/Vegetation-type-Land-Use-map-of-Nagaland-Source-IIRS-Dehra-Dun.jpg"
    },
    "26": {
        name: "Odisha",
        description: "Major Crops Grown: Rice, Sugarcane, Maize, Jowar, Bajra, Turmeric, Mung, Gram, Cowpea, Lentil and Cotton. Major type of Soil found: Red and Laterite.",
        color: "#FF5733",
        hover_color: "default",
        url: "https://agri.odisha.gov.in/media-gallery/photo-gallery/odisha-map-various-category"
    },
    "27": {
        name: "Puducherry",
        description: "default",
        color: "#7D7D7D",
        hover_color: "default",
        url: "default"
    },
    "28": {
        name: "Punjab",
        description: "Major Crops Grown: Wheat, Rice, Cotton, Sugarcane, Pearl Millet, Maize, Barley and Bajra. Major type of Soil found: Alluvial, Saline and Alkaline.",
        color: "#33C7FF",
        hover_color: "default",
        url: "https://slusi.dacnet.nic.in/sfm/SFM_PUNJAB.html"
    },
    "29": {
        name: "Rajasthan",
        description: "Major Crops Grown: Barley, Wheat, Gram, Pulses, Oil Seeds, Rapeseed, Mustard, Bajra, Pulses, Jowar, Maize, Groundnut and Sesame. Major type of Soil found: Arid and Desert.",
        color: "#FFFF00",
        hover_color: "default",
        url: "https://slusi.dacnet.nic.in/sfm/SFM_RAJASTHAN.html"
    },
    "30": {
        name: "Sikkim",
        description: "Major Crops Grown: Rice, Maize, Finger Millet, Barley, Wheat, Pea, Soyabean, Mustard, Potato, Cardamom, Chilly, Turmeric, Coriander, Ginger, Gauva, Litchi, Orange, Tomato, Onion and Radish. Major type of Soil found: Loamy.",
        color: "#A52A2A",
        hover_color: "default",
        url: "https://1.bp.blogspot.com/-iUeVx8l2sl8/XssnUOA1fRI/AAAAAAAANvk/uc5kTgBlYX4p28ymSjXiXhod8V9UKEm4QCLcBGAsYHQ/s1600/gangtok%2Bmap%2Bgh.JPG"
    },
    "31": {
        name: "Tamil Nadu",
        description: "Major Crops Grown: Rice, Jowar, Groundnut, Cotton, Turmeric, Coconut, Sugarcane, Tapioca, Tea, Coffee, Pepper and Cashew Nuts. Major type of Soil found: Black (Regur soil) and Laterite.",
        color: "#FFFF00",
        hover_color: "default",
        url: "https://www.researchgate.net/publication/237330692/figure/fig1/AS:341590200602631@1458452858828/Soil-Map-of-erosion-of-Tamil-Nadu-region.png"
    },
    "32": {
        name: "Tripura",
        description: "Major Crops Grown: Rice, Ragi, Jowar, Maize, Pulses, Cashew, Coconut, Arecanut, Cardamom, Chillies, Cotton, Sugarcane, Tobacco, Pineapple, Oranges, Tea and Rubber. Major type of Soil found: Red and Yellow Soil.",
        color: "#FF5733",
        hover_color: "default",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWkPBsj0pk2OESXHxGWZx3u15MUebtOeyfQ&usqp=CAU"
    },
    "33": {
        name: "Uttar Pradesh",
        description: "Major Crops Grown: Rice, Maize, Wheat, Barley, Sugarcane, Poppy, Linseed, Rapeseed, Mustard, Sesame, Ginger, Turmeric, Coriander, Pigeonpea, Moong, Sorghum and Lentil. Major type of Soil found: Alluvial.",
        color: "#B2BEB5",
        hover_color: "default",
        url: "https://lh3.googleusercontent.com/proxy/4Ooo9mvC1C-0SkzSmePG5pBrahh5QU9X2Oe0mx9DndIyFbNty0NIWOi1h6T7ycTSqKlOyb5NqNl9TpwKrrLh-94eFbqH5-3T1tXCI2q1acnzd8_mEBKdnUWbg2ULmg"
    },
    "34": {
        name: "Uttarakhand",
        description: "Major Crops Grown: Wheat, Pulses, Mustard, Groundnut, Jute, Sugarcane, Potato, Gram, Pea, Masoor, Rajma, Mustard, Soybean and Groundnut. Major type of Soil found: Alluvial and Brown Forest.",
        color: "#B2BEB5",
        hover_color: "default",
        url: "https://www.mapsofindia.com/maps/uttarakhand/uttaranchal-agriculture-map.jpg"
    },
    "35": {
        name: "West Bengal",
        description: "Major Crops Grown: Rice, Wheat, Pulses, Mustard, Groundnut, Jute, Sugarcane, Jute, Potato, Brinjal, Tomato, Ladies Finger, Cucumber, Mango, Banana and Pineapple. Major type of Soil found: Saline and Alkaline.",
        color: "#33C7FF",
        hover_color: "default",
        url: "https://www.researchgate.net/publication/265020106/figure/fig1/AS:392212861997057@1470522241233/Soil-loss-tolerance-limit-for-West-Bengal.png"
    },
    "36": {
        name: "Jammu And Kashmir",
        description: "Major Crops Grown: Rice, Maize, Wheat, Barley, Corn, Millet, Lentils, Cotton, Tobacco, Apple, Pear, Peach, Plum, Apricot, Cherry and Almonds. Major type of Soil found: Alluvial and Mountain soil.",
        color: "#B2BEB5",
        hover_color: "default",
        url: "https://diragrikmr.nic.in/soil_maps.html"
    },
    "37": {
        name: "Telangana",
        description: "Major Crops Grown: Rice, Maize, Pulses, Groundnut, Cotton, Chillies, Sugarcane, Tobacco, Turmeric, Orange, Mango, Cucumber, Tomato and Lemon. Major type of Soil found: Black (Regur soil).",
        color: "#92745B",
        hover_color: "default",
        url: "https://slusi.dacnet.nic.in/sfm/SFM_Telangana.html"
    },
    "38": {
        name: "Ladakh",
        description: "Major Crops Grown: Barley, Wheat, Mustard, Potato, Peas, Onion, Cabbage, Carrot, Cauliflower, Walnut, Apple and Apricot. Major type of Soil found: Alluvial and Mountain.",
        color: "#B2BEB5",
        hover_color: "default",
        url: "https://slusi.dacnet.nic.in/sfm/SFM_LADAKH.html"
    }
  },
  locations: {
    "0": {
      lat: 18.987807,
      lng: 72.836447,
      name: "Mumbai"
    }
  },
  labels: {}
};