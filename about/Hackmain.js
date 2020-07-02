window.addEventListener("load", initialize);
var id = 0;

function initialize()
{
	document.getElementById('Hackindex').innerHTML = "<div id=\"console\"></div>";
	delayed_type("Hello world & Welcome~~\n", 50, take_input);
    $(".headerpage").load("../head.html");
    $(".footerpage").load("../footer.html");
}
function delayed_type(text, delay, callback)
{
	var j=0;
	function type()
	{
		if(j<text.length)
		{
			document.getElementById('console').innerHTML += text[j];
			j++;
			setTimeout(type, delay);
		}
		else
		{
			console.log("else me gya\n");
			document.getElementById('console').innerHTML += "<br>";
			callback();
		}
	}
	type();
}

function take_input()
{
	console.log("id = "+id+"\n");
	document.getElementById('console').innerHTML += "> ";
	document.getElementById('console').innerHTML += "<input type=\"text\" id=\""+id+"\" maxlength=\"20\" />";
	document.getElementById(id).focus();
	document.getElementById(id).onkeypress = function(event){
	    if (event.keyCode == 13 || event.which == 13){
	    	var input = document.getElementById(id).value;
	    	document.getElementById(id).remove();
	    	document.getElementById('console').innerHTML += input+"<br>";
	    	id++;
	        process_input(input);
	    }
	};
}

function process_input(input)
{
	console.log("input = "+input+"\n");
	if(input == "help")
	{
		document.getElementById('console').innerHTML += "Try one of these commands :<br>";
		arr = new Array(
            "<span class=\"highlight\">competitions<br></span>",
			"<span class=\"highlight\">Files<br></span>",
			"<span class=\"highlight\">help<br></span>",
			"<span class=\"highlight\">Applications<br></span>",
			"<span class=\"highlight\">clear<br></span>",

		);
		delayed_type(arr, 200, take_input);
	}
	else if(input == "competitions")
	{
		var competitions1 = "We are focusing on the following competitions:" +
            "<ul>";

		var competitions2 = "<li>\n" +
            "                <a href=\"https://www.comap.com/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">美国大学生数学建模竞赛</a>\n" +
            "                <ul >\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2;color: white\">美国大学生数学建模竞赛（MCM/ICM）由美国数学及其应用联合会主办，是唯一的国际性数学建模竞赛，也是世界范围内最具影响力的数学建模竞赛;</li>\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2;color: white\">比赛时间:大致为每年的1月底-2月初;</li>\n" +
            "                </ul>\n" +
            "            </li>";

		var competitions3 = "<li>\n" +
            "                <a href=\"http://www.ciscn.cn/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">全国大学生信息安全竞赛</a>\n" +
            "                <ul>\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2;color: white\">指导单位：中央网信办网络安全协调局教育部高教司共青团中央学校部</li>\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2;color: white\">主办单位：教育部高等学校信息安全专业教学指导委员会</li>\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2;color: white\">比赛时间：大致为每年的7月底-8月初</li>\n" +
            "                </ul>\n" +
            "            </li>";

		var competitions4 = "  <li>\n" +
            "                <a href=\"//http://www.apmcm.org/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">亚太地区大学生数学建模竞赛:</a>\n" +
            "                <ul>\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2;color: white\">主办单位：北京图象图形学学会、亚太地区大学生数学建模竞赛组委会 承办单位：校苑数模;</li>\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2;color: white\">比赛时间：大致为每年的11月底-12月初</li>\n" +
            "                </ul>\n" +
            "            </li>" +
            "</ul>";

		arr = new Array(competitions1, competitions2, competitions3, competitions4);
		delayed_type(arr, 50, take_input);
	}
	else if (input == "Files"){
		var files = "&nbsp;&nbsp;May you could download Files from&nbsp;"+"<a href=\"//https://github.com/MoonkeyBoy/CUG-LBDS/tree/master/about/DownloadFiles\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">Here:</a>\n";
		arrfiles = new Array(files);
		delayed_type(arrfiles, 50, take_input);
	}
	else if (input == "Applications"){

		var Applications1 = "Maybe the following application will help you to improve you skills:" +
			"<ul>";

		var Applications2 = "<li>\n" +
			"                <a href=\"https://www.mendeley.com/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">Mendeley</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Document management software</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Windows MacOS Linux IOS Web</li>\n" +
			"                </ul>\n" +
			"            </li>";

		var Applications3 = "<li>\n" +
			"                <a href=\"http://www.gnuplot.info/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">Gunplot</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Display Experimental results</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Windows MacOS Linux</li>\n" +
			"                </ul>\n" +
			"            </li>";

		var Applications4 = "  <li>\n" +
			"                <a href=\"https://www.xmind.cn/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">Xmind</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Arrange thoughts in order and become a rapid thinker.</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Windows MacOS</li>\n" +
			"                </ul>\n" +
			"            </li>";
		
		var Applications5 = "<li>\n" +
			"                <a href=\"http://www.notion.so/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">notion</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Note management software</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Windows MacOS Linux Web</li>\n" +
			"                </ul>\n" +
			"            </li>";
		
		var Applications6 = "<li>\n" +
			"                <a href=\"https://shadowsocks.org/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">Shadowsocks</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Scientifically surf the internets</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Windows MacOS Linux</li>\n" +
			"                </ul>\n" +
			"            </li>";
		
		var Applications7 = "<li>\n" +
			"                <a href=\"https://www.texstudio.org/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">Texstudio+Texlive</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Literature editor</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Windows MacOS Linux</li>\n" +
			"                </ul>\n" +
			"            </li>";
		
		var Applications8 = "<li>\n" +
			"                <a href=\"https://mathpix.com/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">Mathpix Snipping Tool</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Formula editings</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Windows MacOS Linux</li>\n" +
			"                </ul>\n" +
			"            </li>";
		
		var Applications9 = "<li>\n" +
			"                <a href=\"https://onedrive.live.com/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">OneDrive</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">File synchronization</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Windows MacOS Web</li>\n" +
			"                </ul>\n" +
			"            </li>";
		
		var Applications10 = "<li>\n" +
			"                <a href=\"https://office.live.com/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">PowerPoint</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">3D drawings</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Windows MacOS</li>\n" +
			"                </ul>\n" +
			"            </li>";
		
		var Applications11 = "<li>\n" +
			"                <a href=\"https://www.grammarly.com/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">Grammarly</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Grammar correction</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">MacOS Web</li>\n" +
			"                </ul>\n" +
			"            </li>";
		
		var Applications12 = "<li>\n" +
			"                <a href=\"https://github.com/ripperhe/Bob/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">Bob</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Quick translation</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">MacOS</li>\n" +
			"                </ul>\n" +
			"            </li>";
		
		var Applications13 = "<li>\n" +
			"                <a href=\"https://pcmacstore.com/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">Countdown Time Plus</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Schedule reminder</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">MacOS</li>\n" +
			"                </ul>\n" +
			"            </li>";
		
		var Applications14 = "<li>\n" +
			"                <a href=\"https://www.vosviewer.com/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">VOSviewer</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">data analysis</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Windows MacOS</li>\n" +
			"                </ul>\n" +
			"            </li>";
		
		var Applications15 = "<li>\n" +
			"                <a href=\"https://pcmacstore.com/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.5\">ShadowsocksX-NG</a>\n" +
			"                <ul>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">Scientifically surf the internets</li>\n" +
			"                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:1.2;color: white\">MacOS</li>\n" +
			"                </ul>\n" +
			"            </li>"+
		"</ul>";
		arrApplications = new Array(Applications1,Applications2,Applications3,Applications4,Applications5,Applications6,Applications7,Applications8,Applications9,Applications10,Applications11,Applications12,Applications13,Applications14,Applications15);
		delayed_type(arrApplications, 50, take_input);
	}
	else if(input == "clear")
	{
		initialize();
	}
	else
	{
		document.getElementById('console').innerHTML += "<span class=\"error\">Error: Command \""+input+"\" not found. Try \"help\"</span><br>";
		take_input();
	}
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
