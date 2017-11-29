require(["models/config",
		 "helpers/styleChanger"], 

function(conf, sc) {

	var head = document.head,
		styleTag = document.createElement('link');

	styleTag.rel = "stylesheet";
	styleTag.type = "text/css";
	styleTag.id = conf.styleId;
	head.appendChild(styleTag);

	sc.setStyle(conf.styleId, conf.styles.large);
});
