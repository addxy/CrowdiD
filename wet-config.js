var config = {
	tabTitle 	: { en: "Crowdsourcing", fr: "Approche participative" },
	cntTitle 	: { en: "", fr: "" },
	localeLink	: { en: "index-fra.html" , fr: "index-eng.html"},
	appLink		: {
					en: "iD-release/index.html?locale=en-US&#background=MAPNIK&map=13.00/-75.7053/45.4269",
					fr: "iD-release/index.html?locale=fr-CA&#background=MAPNIK&map=13.00/-75.7053/45.4269"
				  }
}

function Initialize() {
	document.title = config.tabTitle[wb.lang];

	var wbcont = document.getElementById("wb-cont");
	var wblocale = document.getElementById("wb-locale");
	var wbcontent = document.getElementById("wb-content");

	wbcont.innerHTML = config.cntTitle[wb.lang];
	wblocale.href = config.localeLink[wb.lang];

	var iframe = document.createElement('iframe');

	iframe.style = "width:100%;height:650px;";
	iframe.frameBorder = 0;
	iframe.scrolling = "no";
	iframe.src = config.appLink[wb.lang];

	wbcontent.appendChild(iframe);
}