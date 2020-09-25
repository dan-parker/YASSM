
var ol_pa = L.layerGroup();
var ol_vault = L.layerGroup();
var ol_loc = L.layerGroup();
var ol_loc2 = L.layerGroup();
var ol_train = L.layerGroup();
var ol_pwr = L.layerGroup();
ol_map = L.layerGroup();
var ol_tape = L.layerGroup();
var ol_bhead = L.layerGroup();
var ol_capstash = L.layerGroup();
var ol_mag = L.layerGroup();
var ol_nuka = L.layerGroup();
var ol_wb = L.layerGroup();
var ol_rift = L.layerGroup();
var ol_event = L.layerGroup();
var ol_locv = L.layerGroup();
var ol_cb = L.layerGroup();
var ol_safe = L.layerGroup();
var ol_critter = L.layerGroup();

// the tile layer containing the image generated with `gdal2tiles --leaflet -p raster -w none <img> tiles`
var baselayer = L.tileLayer('./assets/tiles/{z}/{x}/{y}.png', {
  noWrap: true, 
  //bounds: bounds,
  attribution: 'Map data &copy; Bethesda Softworks LLC, a ZeniMax Media company. Trademarks belong to their respective owners. All Rights Reserved.<br/>See source and Credits at: <a href="https://github.com/dan-parker/YASSM">https://github.com/dan-parker/YASSM</a>'
});

// create the map
var map = L.map('mapid', {
  layers: [baselayer, ol_rift, ol_loc,ol_vault,ol_train,ol_wb],
  crs: L.CRS.Simple,
  fullscreenControl: false,
  fullscreenControlOptions: {
    position: 'topleft'
  },
  preferCanvas: true,
  renderer: L.canvas({ padding: 5 })
});

var bounds = new L.LatLngBounds(L.latLng(-65, -65),L.latLng(85,65));

var img = [
  3189,  // original width of image
  3040   // original height of image
]

// assign map and image dimensions
var rc = new L.RasterCoords(map, img)
// set max zoom Level (might be `x` if gdal2tiles was called with `-z 0-x` option)
//map.setMaxZoom(rc.zoomLevel())
map.setMaxZoom(5)
// all coordinates need to be unprojected using the `unproject` method
// set the view in the lower right edge of the image
//map.setView(rc.unproject([img[0], img[1]]), 2)
map.setView(rc.unproject([805,975]),3)

var TrainStationMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'trainstation', className:'mark_vendor icon-2x'}); //Train Station
var WorkshopMarker =  L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'workbench', className:'mark_wr icon1x'}); 	//Public Workbench
var PublicWorkshopMarker =  L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'workbench', className:'mark_vendor icon1x'}); 	//Public Workbench
var Vault76Marker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'vault76', className:'mark_va icon1x'}); 	//Vault76
var Vault63Marker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'vault63', className:'mark_va icon1x'}); 	//Vault63
var VaultMarker51 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'vault', className:'mark_va icon1x'}); 	//Vault51
var Vault94Marker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'vault94', className:'mark_va icon1x'}); 	//Vault94
var Vault96Marker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'vault96', className:'mark_va icon1x'}); 	//Vault96
var Vault79Marker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'vault79', className:'mark_va icon1x'}); 	//Vault79
var VaultMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'vault', className:'mark_va icon1x'}); 		//Vault
var TreasureMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'map', className:'mark_tm icon-2x'}); 	//Treasure Map
var HoloMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'holotape', className:'mark_tape icon3x'}); 	//Holotape
var FCoreMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'fcore', className:'mark_fcore icon2x'}); 	//Fusion Core
var MagazineMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'magazine', className:'mark_mag icon-4x'}); 	//Magazine
var BobbleMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'bobble', className:'mark_mag icon-2x'}); 	//Bobblehead
var CapStashMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'cap', className:'mark_fcore icon-1x'}); 	//Cap Stash
var NukaColaCherryMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'nukacola', className:'mark_nukacherry icon-2x'}); //Cola
var NukaColaQuantumMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'nukacola', className:'mark_nukaquantum icon-2x'}); //Cola
var NukaColaWildMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'nukacola', className:'mark_nukawild icon-2x'}); //Cola
var NukaColaGrapeMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'nukacola', className:'mark_nukagrape icon-2x'}); //Cola
var NukaColaOrangeMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'nukacola', className:'mark_nukaorange icon-2x'}); //Cola
var NukaColaDarkMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'nukacola', className:'mark_nukadark icon-2x'}); //Cola
var NukaColaCranberryMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'nukacola', className:'mark_nukacran icon-2x'}); //Cola
var PArmorMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'parmor', className:'mark_parmor icon-1x'}); 	//Power Armor
var FissureMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'fissure', className:'mark_rift icon-1x'}); 	//Fissure
var CameraMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'camera', className:'mark_camera icon1x'}); 	//Tourist
var MistressMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'mysteries', className:'mark_mom icon1x'}); 	//Body
var TravelEncounterMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'travel', className:'mark_rift icon-1x'}) 	//Random Spawn
var ObjectEncounterMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'object', className:'mark_rift icon-1x'}) 	//Random Spawn
var SceneEncounterMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'scene', className:'mark_rift icon-1x'}) 	//Random Spawn
var CampEncounterMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'campencounter', className:'mark_rift icon-1x'}) 	//Random Spawn
var AllyMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'ally', className:'mark_rift icon-1x'}) 	//Random Spawn
var ArmorWorkbenchMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'armorbench', className:'mark_armorbench icon-3x'}); //Workbench
var WeaponWorkbenchMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'weaponbench', className:'mark_weaponbench icon-3x'}); //Workbench
var PAWorkbenchMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'pabench', className:'mark_pabench icon-3x'}); //Workbench
var CookWorkbenchMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'cookbench', className:'mark_cookbench icon-3x'}); //Workbench
var TinkerWorkbenchMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'tinkerbench', className:'mark_tinkerbench icon-3x'}); //Workbench
var ChemistryWorkbenchMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'chemistrybench', className:'mark_chembench icon-3x'}); //Workbench
var BrewingWorkbenchMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'brewingbench', className:'mark_brewbench icon-2x'}); //Workbench
var SafeMarker_Lvl_0 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'safe0', className:'mark_armorbench icon-2x'}) 	//Safe Level 0
var SafeMarker_Lvl_1 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'safe1', className:'mark_weaponbench icon-2x'}) 	//Safe Level 0
var SafeMarker_Lvl_2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'safe2', className:'mark_pabench icon-2x'}) 	//Safe Level 0
var SafeMarker_Lvl_3 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'safe3', className:'mark_cookbench icon-2x'}) 	//Safe Level 0
var SafeMarker_Lvl_Key = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'safekey', className:'mark_tinkerbench icon-2x'}) 	//Safe Level 0
var CritterMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'unknown', className:'mark_rift icon-1x'}) 	//Random Spawn

var FarmMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'farm', className:'mark_lo icon1x'}); 		//Farm/Homestead
var CabinMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'cabin', className:'mark_lo icon-2x'});  		//Farm/Cabin
var LighthouseMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'lighthouse', className:'mark_lo icon3x'}); 	//Lighthouse
var WoodShackMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'shack', className:'mark_lo icon1x'}); 		//Shack/Lab
var RadioTowerMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'radiotower', className:'mark_lo icon3x'}); 	//Relay Tower
var LookoutTowerMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'lookout', className:'mark_lo icon2x'}); 		//Lookout
var FactoryMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'factory', className:'mark_lo icon-1x'}); 		//Lumberyard
var AmusementParkMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'fair', className:'mark_lo icon1x'}); 		//Fair
var mark_vendorfair = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'fair', className:'mark_vendor icon1x'}); 	//Fair-Vendor
var IndustrialDomeMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'waterplant', className:'mark_lo icon1x'}); 	//Water Treatment
var ElectricalSubstationMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'substation', className:'mark_lo icon-2x'}); 	//Substation
var TownRuinsMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'ruintown', className:'mark_lo icon1x'}); 	//Town-Ruined
var TownMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'town', className:'mark_lo icon1x'}); 		//Town
var mark_vendortown = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'town', className:'mark_vendor icon1x'}); 	//Town-Vendor
var AirfieldMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'plane', className:'mark_lo icon1x'}); 		//Plane/Airport
var mark_vendorplane = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'plane', className:'mark_vendor icon1x'}); 	//Plane/Airport-Vendor
var MansionMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'manor', className:'mark_lo icon-1x'}); 		//Manor
var NukaColaQuantumPlant =  L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'nuka', className:'mark_lo icon2x'}); 		//Nuka
var PowerPlantMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'power', className:'mark_lo icon3x'}); 		//Power Plant
var RailroadMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'railyard', className:'mark_lo icon1x'}); 	//Railyard
var TrainTrackMark = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'trainyard', className:'mark_lo icon1x'}); 	//Trainyard
var OverlookMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'perch', className:'mark_lo icon-2x'}); 		//Perch
var LowRiseMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'firedept', className:'mark_lo icon-1x'}); 		//Fire Dept/Lodge
var mark_vendorlodge = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'firedept', className:'mark_vendor icon-1x'}); 	//Fire Dept/Lodge-Vendor
var HospitalMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'med', className:'mark_lo icon1x'}); 			//Medical
var CapitalBuildingMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'capital', className:'mark_lo icon2x'}); 		//Capital
var TeapotMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'teapot', className:'mark_lo icon1x'}); 		//Teapot
var CowSpotsCreameryMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'cream', className:'mark_lo icon1x'}); 		//Cream
var ElevatedHighwayMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'bridge', className:'mark_lo icon-2x'}); 		//Bridge
var EncampmentMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'camp', className:'mark_lo icon-4x'}); 		//Camp
var AgriculturalCenterMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'agcenter', className:'mark_lo icon-2x'}); 	//Agricultural Center
var ForestedMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'tree', className:'mark_lo icon-2x'}); 		//Island
var RadioactiveAreaMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'disposal', className:'mark_lo icon-1x'}); 	//Ordinance/Disposal
var BrownstoneMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'houses', className:'mark_lo icon-1x'}); 		//Houses
var CityMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'city', className:'mark_lo icon1x'}); 		//City
var LibertaliaMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'pub', className:'mark_lo icon-1x'});			//Pub
var DamMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'dam', className:'mark_lo icon1x'}); 			//Dam
var CaveMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'mine', className:'mark_lo icon1x'}); 		//Mine
var ArktosPharmaMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'arktos', className:'mark_lo icon1x'}); 		//Arktos
var CountryClubMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'golf', className:'mark_lo icon-2x'}); 		//Golf
var SkiResortMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'snow', className:'mark_lo icon1x'}); 		//Snow
var mark_vendorsnow = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'snow', className:'mark_vendor icon1x'}); 	//Snow-Vendor
var MilitaryBaseMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'base', className:'mark_lo icon1x'}); 		//Military base
var HouseTrailerMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'hotdog', className:'mark_lo icon-3x'}); 		//Hotdog
var PierMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'dock', className:'mark_lo icon-1x'});  		//Dock
var GraveyardMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'cemetery', className:'mark_lo icon-2x'}); 	//Cemetery
var HighTechBuildingMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'scraper', className:'mark_lo icon2x'}); 		//SkyScraper
var mark_vendorscraper = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'scraper', className:'mark_vendor icon2x'}); //SkyScraper-Vendor
var MonumentMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'mansion', className:'mark_lo icon-1x'}); 		//Sugarmaple
var RaiderSettlementMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'raider', className:'mark_lo icon1x'}); 		//Raider
var GoodneighborMarker =  L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'prison', className:'mark_lo icon-1x'}); 		//Prison
var PondLakeMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'pond', className:'mark_lo icon1x'}); 		//Pond
var SancHillsMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'statue', className:'mark_lo icon1x'}); 		//Statue
var SpaceStationMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'spacestation', className:'mark_lo icon1x'}); //Spacestation
var CastleMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'fort', className:'mark_lo icon-2x'}); 		//Fort
var QuarryMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'quarry', className:'mark_lo icon-1x'}); 		//Quarry
var BunkerMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'bunker', className:'mark_lo icon-4x'}); 		//Bunker
var mark_vendorbunker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'bunker', className:'mark_vendor icon-4x'}); 	//Bunker-Vendor
var FillingStationMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'rocket', className:'mark_lo icon1x'}); 		//Rocket
var OfficeMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'headquarters', className:'mark_lo icon-2x'}); //Headquarters
var PalaceWindingPathMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'palace', className:'mark_lo icon1x'}); 		//Palace
var PumpkinMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'pumpkin', className:'mark_lo icon1x'}); 		//Pumpkin
var ObservatoryMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'observatory', className:'mark_lo icon1x'}); 	//Observatory
var TopOfTheWorldMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'top', className:'mark_lo icon4x'}); 			//Top of the World
var LandmarkMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'rocks', className:'mark_lo icon-4x'}); 		//Rocks
var WhitespringResort = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'resort', className:'mark_vendor icon-1x'}); 	//Resort
var SatelliteMarker =  L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'dish', className:'mark_lo icon1x'}); 		//Dish
var MonorailMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'monorail', className:'mark_lo icon1x'}); 	//Monorail
var ChurchMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'church', className:'mark_lo icon1x'}); 		//Church
var AppalachianAntiquesMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'antiques', className:'mark_lo icon-1x'}); 	//Antiques
var SewerMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'sewer', className:'mark_lo icon1x'}); 		//Sewer

var BloodEaglesMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'bloodeagle', className:'mark_lo icon2x'}) 	//Random Spawn
var CultistMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'cultist', className:'mark_lo icon-1x'}) 	//Random Spawn
var CraterMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'crater', className:'mark_vendor icon2x'}); //Spacestation
var RaiderMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'crater', className:'mark_lo icon2x'}); //Spacestation
var SettlerMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'foundation', className:'mark_vendor icon1x'}); //Spacestation
var LegendaryPurveyorMarker = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'legendarypurveyor', className:'mark_lo icon1x'}); //Mumbles

//Let's create our Tooltip Template
function tooltipTemplate(title,bobblehead=0,magazine=0,capstash=0,recipe='') {
	var result = '<div class="tooltip">';
 	result += '<div class="tooltitle">'+title+'</div>';
 	if (bobblehead) result += '<div>Bobblehead: x' + bobblehead + '</div>';
 	if (magazine) result += '<div>Magazine: x' + magazine + '</div>';
 	if (capstash) result += '<div>Cap Stash: x' + capstash + '</div>';
 	if (recipe) result += '<div>Recipe/Plan: x' + recipe + '</div>';
	result += '</div>';
 	return result;
}
function tooltipTemplate2(title,LocationData) {
	//Let's group and get a count
	const Items = LocationData.reduce((acc, currValue) => {
		const marker = currValue.type;
		const markercount = acc[marker] ? acc[marker] +1 : 1;
		return {
			...acc,
			[marker]: markercount
		}
	}, {}); 

	var bobblehead = Items.BobbleMarker;
	var magazine = Items.MagazineMarker;
	var capstash = Items.CapStashMarker;
	var tinkerwb = Items.TinkerWorkbenchMarker;
	var weaponwb = Items.WeaponWorkbenchMarker;
	var armorwb = Items.ArmorWorkbenchMarker;
	var chemwb = Items.ChemistryWorkbenchMarker;
	var pawb = Items.PAWorkbenchMarker;
	var cookwb = Items.CookWorkbenchMarker;
	var brewwb = Items.BrewingWorkbenchMarker;
	var pa = Items.PArmorMarker;
	var fcore = Items.FCoreMarker;
	var nukaquantum = Items.NukaColaQuantumMarker;
	var result = '<div class="tooltip">';
 	result += '<div class="tooltitle">'+title+'</div>';
 	if (bobblehead) result += '<span class="icon icon-bobble icon-2x mark_mag"></span>: x' + bobblehead + '';
 	if (magazine) result += '<span class="icon icon-magazine icon-4x mark_mag"></span>: x' + magazine + '';
 	if (capstash) result += '<span class="icon icon-cap icon-1x mark_fcore"></span>: x' + capstash + '';
 	if (pa) result += '<span class="icon icon-parmor icon-1x mark_parmor"></span>: x' + pa + '';
 	if (fcore) result += '<span class="icon icon-fcore icon2x mark_fcore"></span>: x' + fcore + '';
	if (tinkerwb) result += '<span class="icon icon-tinkerbench icon-3x mark_tinkerbench"></span>: x' + tinkerwb + '';
	if (weaponwb) result += '<span class="icon icon-weaponbench icon-3x mark_weaponbench"></span>: x' + weaponwb + '';
	if (armorwb) result += '<span class="icon icon-armorbench icon-3x mark_armorbench"></span>: x' + armorwb + '';
	if (chemwb) result += '<span class="icon icon-chemistrybench icon-3x mark_chembench"></span>: x' + chemwb + '';
	if (brewwb) result += '<span class="icon icon-brewingbench icon-2x mark_brewbench"></span>: x' + brewwb + '';
	if (pawb) result += '<span class="icon icon-pabench icon-3x mark_pabench"></span>: x' + pawb + '';
	if (cookwb) result += '<span class="icon icon-cookbench icon-3x mark_cookbench"></span>: x' + cookwb + '';
	if (nukaquantum) result += '<span class="icon icon-nukacola icon-3x mark_nukaquantum"></span>: x' + nukaquantum + '';
 //	if (recipe) result += '<div>Recipe/Plan: x' + recipe + '</div>';
	result += '</div>';
 	return result;
}
function tooltipMapTemplate(title,img='',text='') {
	var result = '<div class="tooltip">';
 	result += '<div class="tooltitle">'+title+'</div>';
 	if (img) result += '<div><img src="assets/img/treasure/' + img + '"/></div>';
 	if (text) result += '<div>' + text + '</div>';
	result += '</div>';
 	return result;
}
function tooltipTouristTemplate(title,img='',text='') {
	var result = '<div class="tooltip">';
 	result += '<div class="tooltitle">'+title+'</div>';
 	if (img) result += '<div><img src="assets/img/tourist/' + img + '"/></div>';
 	if (text) result += '<div>' + text + '</div>';
	result += '</div>';
 	return result;
}


//Secondary Location
var AirfieldMarker2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'plane', className:'mark_lo2 icon1x'}); 		//Plane/Airport
var mark_boat2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'boat', className:'mark_lo2 icon1x'}); 		//Boat
var WoodShackMarker2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'shack', className:'mark_lo2 icon1x'}); 		//Shack
var mark_altar2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'altar', className:'mark_lo2 icon-1x'}); 		//Altar/Totem
var mark_honey2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'honey', className:'mark_lo2 icon1x'}); 		//Hive
var CabinMarker2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'cabin', className:'mark_lo2 icon1x'}); 		//Cabin
var mark_cave2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'mine', className:'mark_lo2 icon1x'}); 		//Mine/Cave
var EncampmentMarker2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'camp', className:'mark_lo2 icon-3x'}); 		//Camp
var LookoutTowerMarker2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'lookout', className:'mark_lo2 icon1x'}); 	//Lookout
var mark_car2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'car', className:'mark_lo2 icon-1x'}); 		//Car
var PondLakeMarker2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'pond', className:'mark_lo2 icon1x'}); 		//Pond
var mark_death2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'death', className:'mark_lo2 icon1x'}); 		//Corpse
var ElevatedHighwayMarker2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'bridge', className:'mark_lo2 icon-2x'}); 		//Corpse
var mark_park2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'fair', className:'mark_lo2 icon1x'}); 		//Corpse
var FactoryMarker2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'factory', className:'mark_lo2 icon1x'}); 	//Corpse
var FarmMarker2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'farm', className:'mark_lo2 icon1x'}); 	//Corpse
var RadioTowerMarker2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'radiotower', className:'mark_lo2 icon1x'}); 	//Corpse
var PierMarker2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'dock', className:'mark_lo2 icon1x'}); 	//Corpse
var mark_table2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'table', className:'mark_lo2 icon1x'}); 	//Corpse
var CaveMarker2 = L.icon.glyph({ iconUrl: null, prefix: 'icon', glyph: 'mine', className:'mark_lo2 icon1x'}); 	//Corpse


        var i=0;
	do {
	  var layer = "ol_loc";
	  switch(true){
		case (MarkerData[i].type == "FissureMarker"):
		var layer = "ol_rift";
		break;
		case (MarkerData[i].type == "TrainStationMarker"):
		var layer = "ol_train";
		break;
		case (MarkerData[i].type == "WorkshopMarker"):
		var layer = "ol_wb";
		break;
		case (MarkerData[i].type == "PublicWorkshopMarker"):
		var layer = "ol_wb";
		break;
		case ( (/^Vault\d.*Marker/).test(MarkerData[i].type) ):
		var layer = "ol_vault";
		break;
		case (MarkerData[i].type == "FCoreMarker"):
		var layer = "ol_pwr";
		break;
		case (MarkerData[i].type == "PArmorMarker"):
		var layer = "ol_pa";
		break;
		case ((MarkerData[i].type).endsWith("EncounterMarker")):
		var layer = "ol_event";
		break;
		case (MarkerData[i].type == "AllyMarker"):
		var layer = "ol_event";
		break;
		case (MarkerData[i].type == "CameraMarker"):
		var layer = "ol_event";
		break;
		case (MarkerData[i].type == "MistressMarker"):
		var layer = "ol_event";
		break;
		case (MarkerData[i].type == "TreasureMarker"):
		var layer = "ol_map";
		break;
		case (MarkerData[i].type == "HoloMarker"):
		var layer = "ol_tape";
		break;
		case (MarkerData[i].type == "BobbleMarker"):
		var layer = "ol_bhead";
		break;
		case (MarkerData[i].type == "CapStashMarker"):
		var layer = "ol_capstash";
		break;
		case (MarkerData[i].type == "MagazineMarker"):
		var layer = "ol_mag";
		break;
		case ((MarkerData[i].type).startsWith("NukaCola") && (MarkerData[i].type).endsWith("Marker")):
		var layer = "ol_nuka";
		break;
		case ((MarkerData[i].type).endsWith("WorkbenchMarker")):
		var layer = "ol_cb";
		break;
		case (MarkerData[i].type == "WorkbenchMarker"):
		var layer = "ol_cb";
		break;
		case (MarkerData[i].type == "CritterMarker"):
		var layer = "ol_critter";
		break;
		case ((MarkerData[i].type).startsWith("SafeMarker")):
		var layer = "ol_safe";
		break;
          }
if (layer == 'ol_map') {
	  var marker = new L.marker(RemapCoord(MarkerData[i].y,MarkerData[i].x,0),{icon: window[MarkerData[i].type], title: MarkerData[i].name, riseOnHover: true}).bindPopup(tooltipMapTemplate(MarkerData[i].name,MarkerData[i].id+".jpg",""),{maxWidth:'auto'})
          .on("mouseover", function(evt) { this.openPopup(); })
	  .addTo(window[layer]);
} else if (MarkerData[i].type == 'CameraMarker') {
	  var marker = new L.marker(RemapCoord(MarkerData[i].y,MarkerData[i].x,0),{icon: window[MarkerData[i].type], title: MarkerData[i].name, riseOnHover: true}).bindPopup(tooltipTouristTemplate(MarkerData[i].name,MarkerData[i].id+".png",""),{maxWidth:'auto'})
          .on("mouseover", function(evt) { this.openPopup(); })
	  .addTo(window[layer]);
} else {
	//Let's grab the interior data for this location
	const LocationData = InteriorData.filter(record => {
		return (record.location === MarkerData[i].location || record.parent === MarkerData[i].location);
	});
	//console.log(MarkerData[i].type);
	  var marker = new L.marker(RemapCoord(MarkerData[i].y,MarkerData[i].x,0),{icon: window[MarkerData[i].type], title: MarkerData[i].name, riseOnHover: true}).bindTooltip(tooltipTemplate2(MarkerData[i].name,LocationData),{direction:'bottom'}).addTo(window[layer]);
}
	    i++;
	} while (i < MarkerData.length-1);


function RemapCoord(y,x,z){
	//Let's remap and shift
	y=y/2250-102;
	x=x/2250+96.5;
	return [y,x,z]
}


function UnRemapCoord(x,y){
//	y=y*2250+102;
//	x=x*-0.2250;
	return [x,y]
}

//Let's do our layer filters
var baseMaps = {
	"Base": baselayer
};
var overlays = {
	"Location": ol_loc,
	"Vault": ol_vault,
	"Train Station": ol_train,
	"Workshop": ol_wb,
	"Fissure": ol_rift,
	"Fusion Core": ol_pwr,
	"Magazine": ol_mag,
	"Cap Stash": ol_capstash,
	"Bobblehead": ol_bhead,
	"Nuka Cola": ol_nuka,
//	"Holotape": ol_tape,
	"Random Encounter": ol_event,
	"Power Armor": ol_pa,
	"Treasure Map": ol_map,
	"Crafting Bench": ol_cb,
	"Locked Safes": ol_safe,
	"Critter Spawn": ol_critter,
};

L.control.layers(null, overlays, {autoZIndex:true}).addTo(map);

var searchlayers = L.layerGroup([
	ol_vault,
	ol_loc,
	ol_wb,
	ol_train,
	ol_rift
]);

	var controlSearch = new L.Control.Search({
		position:'topright',		
		layer: searchlayers,
		initial: false,
		textPlaceholder: 'Search...                          ',
		zoom: 4,
		hideMarkerOnCollapse: true,
		marker: {	
			icon: false,
			animate: true,
			circle: {
				radius: 20,
				weight: 3,
				color: '#e03',
				stroke: true,
				fill: true
			}
		}
	});

	map.addControl( controlSearch );
	var controlPosition = new L.Control.MousePosition({
		formatter: UnRemapCoord
	});
	//map.addControl( controlPosition );


    var htmlLegend = L.control.htmllegend({
        position: 'topright',
        legends: [{
            name: '',
            elements: [{
                label: '',
                html: '<button onClick=\"document.getElementById(\'body\').classList.toggle(\'monochrome\');\">Scanlines</button>'
            },
	]
        }],
        collapseSimple: true,
        detectStretched: true,
        disableVisibilityControls: true
    });
    map.addControl(htmlLegend);



map.on('popupopen', function(e) {
    var px = map.project(e.popup._latlng); // find the pixel location on the map where the popup anchor is
    px.y -= e.popup._container.clientHeight/2 // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
    map.panTo(map.unproject(px),{animate: true}); // pan to new center
});

document.getElementById("mapid").classList.add("zoom-3");
map.on('zoomend', function() {
	var zoomLevel = map.getZoom();
	var mapdiv = document.getElementById("mapid");
	mapdiv.classList.add("zoom-"+zoomLevel);
	switch(zoomLevel){
		case 5:
			mapdiv.classList.remove("zoom-4");
			break;
		case 4:
			mapdiv.classList.remove("zoom-5");
			mapdiv.classList.remove("zoom-3");
			break;
		case 3:
			mapdiv.classList.remove("zoom-4");
			mapdiv.classList.remove("zoom-2");
			break;
		case 2:
			mapdiv.classList.remove("zoom-3");
			mapdiv.classList.remove("zoom-1");
			break;
		case 1:
			mapdiv.classList.remove("zoom-2");
			mapdiv.classList.remove("zoom-0");
			break;
		case 0:
			mapdiv.classList.remove("zoom-1");
			break;

	}
})